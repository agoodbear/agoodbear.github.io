#!/usr/bin/env python3
"""ECG 隨機考題的圖備份到 Cloudflare R2（ecg-quiz-img → https://ecgimg.agoodbear.com）（2026-10-11）。

為什麼：題庫的圖原本全部直接連 Smith 部落格，對方 CDN 一掛或改網址，整個題庫的圖就一起不見。
做法：原圖（優先用本機 ecg-smith-search/smith_images/ 的存檔，沒有才下載）→ cwebp 轉 1600px 寬 WebP
→ 上傳 R2 key `q/<id>-<sha8>.webp`（內容變了 key 就變，不怕 CDN 快取舊圖）
→ quiz.json 每題寫入 `imageMirror`。前端先讀 imageMirror，讀不到才退回原站 `image`。
出處：圖片版權屬原作者，前端在圖下標「圖片來源：<來源名稱>」，看解答後附原文連結。

用法：
  python3 scripts/mirror-ecg-quiz-images.py            # 只處理還沒有 imageMirror（或原圖變了）的題目
  python3 scripts/mirror-ecg-quiz-images.py --limit 5  # 測試
跑完必須接著跑 scripts/build-ecg-quiz-bank.py 重建 bank/（前端讀的是 bank/ 不是 quiz.json）。
上傳用 wrangler 的 OAuth token（~/.wrangler/config/default.toml）；過期就先跑一次 `npx wrangler whoami` 讓它刷新。
"""
from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
import sys
import tempfile
import time
import tomllib
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
QUIZ = REPO / "static/tools/ecg-quiz/quiz.json"
SMITH_IMAGES = Path.home() / "Desktop/Claude Code專用檔/ecg-smith-search/smith_images"
CACHE = Path.home() / "Desktop/Claude Code專用檔/ecg-smith-search/quiz_webp"
ACCOUNT = "e1036366ad7e84ca8b202eaf903bfe05"
BUCKET = "ecg-quiz-img"
PUBLIC = "https://ecgimg.agoodbear.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AgoodbearArchive/1.0"
MAX_W = 1600


def token() -> str:
    cfg = tomllib.loads((Path.home() / ".wrangler/config/default.toml").read_text())
    return cfg["oauth_token"]


def local_index() -> dict[str, Path]:
    m: dict[str, Path] = {}
    for idx in SMITH_IMAGES.glob("*/index.json"):
        try:
            d = json.loads(idx.read_text())
        except Exception:  # noqa: BLE001
            continue
        for f in d.get("files", []):
            m[f["src"]] = idx.parent / f["file"]
    return m


def get_original(src: str, local: dict[str, Path]) -> Path:
    p = local.get(src)
    if p and p.exists():
        return p
    CACHE.mkdir(parents=True, exist_ok=True)
    out = CACHE / ("orig-" + hashlib.sha1(src.encode()).hexdigest()[:16])
    if not out.exists():
        req = urllib.request.Request(src, headers={"User-Agent": UA, "Accept": "image/jpeg,image/png,image/gif,*/*;q=0.5"})
        for attempt in range(3):
            try:
                with urllib.request.urlopen(req, timeout=60) as r:
                    if not (r.headers.get("Content-Type") or "").startswith("image/"):
                        raise ValueError("not an image")
                    out.write_bytes(r.read())
                break
            except Exception:  # noqa: BLE001
                if attempt == 2:
                    raise
                time.sleep(2 * (attempt + 1))
    return out


def to_webp(orig: Path, qid: str) -> Path:
    CACHE.mkdir(parents=True, exist_ok=True)
    out = CACHE / f"{qid}.webp"
    w = int(subprocess.run(["sips", "-g", "pixelWidth", str(orig)], capture_output=True, text=True)
            .stdout.split()[-1])
    args = ["cwebp", "-quiet", "-q", "80", "-metadata", "none"]
    if w > MAX_W:  # 只縮不放大
        args += ["-resize", str(MAX_W), "0"]
    src = orig
    if orig.suffix.lower() == ".gif" or w == 0:
        tmp = Path(tempfile.mkstemp(suffix=".png")[1])
        subprocess.run(["sips", "-s", "format", "png", str(orig), "--out", str(tmp)], capture_output=True, check=True)
        src = tmp
    subprocess.run(args + [str(src), "-o", str(out)], check=True)
    return out


def upload(path: Path, key: str, tok: str) -> None:
    req = urllib.request.Request(
        f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT}/r2/buckets/{BUCKET}/objects/{key}",
        data=path.read_bytes(), method="PUT",
        headers={"Authorization": f"Bearer {tok}", "Content-Type": "image/webp"})
    res = json.load(urllib.request.urlopen(req, timeout=120))
    if not res.get("success"):
        raise RuntimeError(f"upload failed {key}: {res.get('errors')}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int)
    ap.add_argument("--workers", type=int, default=6)
    args = ap.parse_args()

    data = json.loads(QUIZ.read_text())
    qs = data["questions"] if isinstance(data, dict) else data
    # imageMirrorSrc 記錄當初備份的是哪個原圖網址；原圖換了就重做
    todo = [q for q in qs if q.get("image") and (not q.get("imageMirror") or q.get("imageMirrorSrc") != q["image"])]
    if args.limit:
        todo = todo[: args.limit]
    print(f"[mirror] {len(todo)} / {len(qs)} questions to mirror")
    if not todo:
        return 0
    local = local_index()
    tok = token()

    def work(q: dict) -> tuple[str, str | None, str | None]:
        try:
            webp = to_webp(get_original(q["image"], local), q["id"])
            key = f"q/{q['id']}-{hashlib.sha256(webp.read_bytes()).hexdigest()[:8]}.webp"
            upload(webp, key, tok)
            return q["id"], f"{PUBLIC}/{key}", None
        except Exception as e:  # noqa: BLE001
            return q["id"], None, f"{q['id']} {q['image']} {e}"

    byid = {q["id"]: q for q in qs}
    ok, errs = 0, []
    with ThreadPoolExecutor(args.workers) as ex:
        for qid, url, err in ex.map(work, todo):
            if url:
                byid[qid]["imageMirror"] = url
                byid[qid]["imageMirrorSrc"] = byid[qid]["image"]
                ok += 1
            else:
                errs.append(err)
    QUIZ.write_text(json.dumps(data, ensure_ascii=False, indent=2) + ("\n" if QUIZ.read_text().endswith("\n") else ""))
    print(f"[mirror] uploaded={ok} errors={len(errs)}")
    for e in errs[:30]:
        print("  ERR", e)
    print("⚠️ 接著跑：python3 scripts/build-ecg-quiz-bank.py")
    return 1 if errs else 0


if __name__ == "__main__":
    sys.exit(main())

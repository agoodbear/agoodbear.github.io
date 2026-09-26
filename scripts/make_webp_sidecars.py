#!/usr/bin/env python3
"""幫 static/images 底下的大張 PNG/JPG/GIF 產生同名 .webp（放在原圖旁邊）。

layouts/partials/figure.html 看到同名 .webp 就會輸出 <source type="image/webp">，
瀏覽器自動改抓 WebP；原圖保留當 fallback，md 一個字都不用改。

用法：
  python3 scripts/make_webp_sidecars.py                 # 全站
  python3 scripts/make_webp_sidecars.py --post ecg-post-6   # 只處理某篇用到的圖
  python3 scripts/make_webp_sidecars.py --dry-run
  python3 scripts/make_webp_sidecars.py --check         # 列出還缺 webp 的大圖，有就 exit 1
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STATIC = ROOT / "static"
MIN_BYTES = 150 * 1024  # 小於 150KB 的圖不值得多一個檔
EXTS = {".png", ".jpg", ".jpeg", ".gif"}
QUALITY = "85"  # 2026-09-27 ecg-post-6 目視比對：原解析度 q85 與 PNG 看不出差別


def images_for_post(slug):
    md = ROOT / "content" / "post" / f"{slug}.md"
    text = md.read_text(encoding="utf-8")
    out = []
    for ref in re.findall(r"!\[[^\]]*\]\(([^)\s]+)", text):
        m = re.search(r"static/(.+)$", ref)
        if m:
            out.append(STATIC / m.group(1))
    return out


def candidates(paths):
    for p in paths:
        if p.suffix.lower() in EXTS and p.is_file() and p.stat().st_size >= MIN_BYTES:
            yield p


def convert(src, dst):
    if src.suffix.lower() == ".gif":
        cmd = ["gif2webp", "-quiet", "-lossy", "-q", "80", "-m", "6", str(src), "-o", str(dst)]
    else:
        cmd = ["cwebp", "-quiet", "-q", QUALITY, "-m", "6", "-metadata", "none", str(src), "-o", str(dst)]
    subprocess.run(cmd, check=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--post")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    paths = images_for_post(args.post) if args.post else sorted((STATIC / "images").rglob("*"))
    before = after = 0
    missing = []
    for src in candidates(paths):
        dst = src.with_suffix(".webp")
        if dst.exists():
            continue
        missing.append(src)
        if args.check or args.dry_run:
            continue
        convert(src, dst)
        # WebP 沒比較小（少見）就不留，避免反效果
        if dst.stat().st_size >= src.stat().st_size * 0.9:
            dst.unlink()
            print(f"skip（WebP 沒變小）{src.relative_to(ROOT)}")
            continue
        before += src.stat().st_size
        after += dst.stat().st_size
        print(f"{src.stat().st_size/1024:8.0f}KB -> {dst.stat().st_size/1024:6.0f}KB  {src.relative_to(ROOT)}")

    if args.check:
        for m in missing:
            print(f"缺 webp：{m.relative_to(ROOT)} ({m.stat().st_size/1024:.0f}KB)")
        sys.exit(1 if missing else 0)
    if args.dry_run:
        print(f"待轉 {len(missing)} 張，共 {sum(m.stat().st_size for m in missing)/1048576:.1f}MB")
        return
    if before:
        print(f"合計 {before/1048576:.1f}MB -> {after/1048576:.1f}MB")


if __name__ == "__main__":
    main()

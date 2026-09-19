#!/usr/bin/env python3
"""把 static/tools/ecg-quiz/quiz.json 切成前端按需載入的小塊。

為什麼要切：GitHub Pages 吐 quiz.json（8.5MB、gzip 後 2.8MB）實測只有 ~55KB/s，
整包載完要 50 秒以上，而同一條線抓 CDN 有 7.9MB/s——是大檔被限速，不是網路慢。
切成 20 題一塊（每塊 ~60KB）之後，開場只要 manifest + 1 塊就能出第一題。

quiz.json 仍然是 SSOT（維持 indent=2，ecg-quiz-merge.py 照舊），本腳本只產生 bank/。
改完 quiz.json 後重跑這支即可。
"""
import json, hashlib, pathlib, shutil, sys

CHUNK = 20
ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "static/tools/ecg-quiz/quiz.json"
OUT = ROOT / "static/tools/ecg-quiz/bank"


def dump(path, obj):
    """一律 minify：這些是給瀏覽器吃的產物，不是給人讀的。"""
    path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    return path.stat().st_size


def main():
    if not SRC.exists():
        sys.exit(f"找不到 {SRC}")
    data = json.loads(SRC.read_text(encoding="utf-8"))
    qs = data.get("questions") or []
    if not qs:
        sys.exit("quiz.json 沒有題目")

    version = hashlib.sha256(SRC.read_bytes()).hexdigest()[:12]

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    # manifest：開場就要（隨機抽題、錯題本對照、?q= 深連結都靠它），只放 id。
    manifest = {
        "version": version,
        "count": len(qs),
        "chunkSize": CHUNK,
        "ids": [q["id"] for q in qs],
    }
    man_size = dump(OUT / "manifest.json", manifest)

    # urlmap：只有「相關篇章要不要站內跳轉」用得到，開場不必等它。
    urlmap = {q["sourceUrl"]: q["id"] for q in qs if q.get("sourceUrl")}
    url_size = dump(OUT / "urlmap.json", urlmap)

    sizes = []
    for n in range(0, len(qs), CHUNK):
        chunk_no = n // CHUNK
        sizes.append(dump(OUT / f"c{chunk_no:03d}.json", qs[n : n + CHUNK]))

    print(f"version   {version}")
    print(f"題數      {len(qs)}，每塊 {CHUNK} 題，共 {len(sizes)} 塊")
    print(f"manifest  {man_size/1024:.1f} KB")
    print(f"urlmap    {url_size/1024:.1f} KB")
    print(f"每塊      平均 {sum(sizes)/len(sizes)/1024:.1f} KB，最大 {max(sizes)/1024:.1f} KB")
    print(f"開場需要  {(man_size + max(sizes))/1024:.1f} KB（原本要整包 {SRC.stat().st_size/1024/1024:.1f} MB）")


if __name__ == "__main__":
    main()

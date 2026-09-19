#!/usr/bin/env python3
"""產生首頁大標裡那個「心」字——上面兩點換成愛心——的內嵌 SVG partial。

輸出：themes/hallmark/layouts/partials/heart-xin.html

原理：大標用的是 Noto Serif TC 900。從 Google Fonts 取只含「心」一個字的子集字型，
把字形拆成四筆輪廓（中上點／臥鉤／右上點／左點），換掉兩個上點、其餘原樣保留，
再把座標寫成 SVG path。尺寸對齊字型 em 框，所以 baseline 與字距跟真的文字一致。

需要 fonttools 與 brotli：
    python3 -m venv /tmp/fontvenv && /tmp/fontvenv/bin/pip install fonttools brotli
    /tmp/fontvenv/bin/python scripts/make-heart-xin.py

想調大小／位置就改下面的 MID / RIGHT（size＝愛心邊長，dx/dy＝相對原本那一點的位移，
angle＝旋轉角度，單位都是字型單位，1000 = 1em）。改完重跑覆蓋 partial。
"""
import math, pathlib, subprocess, sys, tempfile, urllib.request

from fontTools.ttLib import TTFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen

# 兩顆愛心的樣子（2026-09-19 定案）
# ⚠️ 右邊那顆的右緣要壓在 940 以內：心的 advance 是 1000，大標 letter-spacing -0.025em
#    等於下一個字從 975 就開始，超過就會被「聲」蓋掉（第一版 size340/dx+40 右緣到 1069，中招）。
MID = {"size": 340, "dx": 0, "dy": 0, "angle": 0}
RIGHT = {"size": 280, "dx": -60, "dy": 60, "angle": 0}

# 心 U+5FC3 的四筆輪廓在這個字型裡的順序
IDX_MID_DOT, IDX_HOOK, IDX_RIGHT_DOT, IDX_LEFT_DOT = 0, 1, 2, 3

FONT_CSS = ("https://fonts.googleapis.com/css2"
            "?family=Noto+Serif+TC:wght@900&text=%E5%BF%83")
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "themes/hallmark/layouts/partials/heart-xin.html"

# 單位愛心：y 軸向上、中心在原點、寬高各 1、尖端朝下
HEART = [
    ("M", (0, -0.50)),
    ("C", (0.33, -0.12, 0.50, 0.04, 0.50, 0.21)),
    ("C", (0.50, 0.38, 0.38, 0.50, 0.25, 0.50)),
    ("C", (0.13, 0.50, 0.04, 0.43, 0.00, 0.34)),
    ("C", (-0.04, 0.43, -0.13, 0.50, -0.25, 0.50)),
    ("C", (-0.38, 0.50, -0.50, 0.38, -0.50, 0.21)),
    ("C", (-0.50, 0.04, -0.33, -0.12, 0, -0.50)),
    ("Z", ()),
]


def fetch_glyph_font():
    """抓只含「心」的子集字型，存到暫存檔。"""
    req = urllib.request.Request(FONT_CSS, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req, timeout=30).read().decode()
    url = css.split("url(", 1)[1].split(")", 1)[0]
    data = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30).read()
    tmp = pathlib.Path(tempfile.gettempdir()) / "noto-serif-tc-900-xin.woff2"
    tmp.write_bytes(data)
    return tmp


def heart_path(cx, cy, size, angle_deg=0.0):
    a = math.radians(angle_deg)
    ca, sa = math.cos(a), math.sin(a)

    def pt(x, y):
        x, y = x * size, y * size
        return (cx + x * ca - y * sa, cy + x * sa + y * ca)

    out = []
    for op, args in HEART:
        if op == "Z":
            out.append("Z")
            continue
        pts = [pt(args[i], args[i + 1]) for i in range(0, len(args), 2)]
        out.append(op + " " + " ".join(f"{x:.1f} {y:.1f}" for x, y in pts))
    return " ".join(out)


def main():
    font_path = fetch_glyph_font()
    f = TTFont(font_path)
    upm = f["head"].unitsPerEm
    ascent, descent = f["hhea"].ascent, -f["hhea"].descent
    gs = f.getGlyphSet()
    name = f.getBestCmap()[0x5FC3]

    rec = RecordingPen()
    gs[name].draw(rec)
    contours, cur = [], []
    for op, args in rec.value:
        if op == "moveTo" and cur:
            contours.append(cur)
            cur = []
        cur.append((op, args))
    if cur:
        contours.append(cur)
    if len(contours) != 4:
        sys.exit(f"預期 4 筆輪廓，實際 {len(contours)} 筆——字型換版了，先確認 IDX_* 的順序再跑")

    def to_svg(contour):
        pen = SVGPathPen(gs)
        for op, args in contour:
            getattr(pen, op)(*args)
        return pen.getCommands()

    def centre(contour):
        bp = BoundsPen(gs)
        for op, args in contour:
            getattr(bp, op)(*args)
        x0, y0, x1, y1 = bp.bounds
        return (x0 + x1) / 2, (y0 + y1) / 2

    strokes = " ".join(to_svg(contours[i]) for i in (IDX_HOOK, IDX_LEFT_DOT))
    hearts = []
    for idx, cfg in ((IDX_MID_DOT, MID), (IDX_RIGHT_DOT, RIGHT)):
        cx, cy = centre(contours[idx])
        hearts.append(heart_path(cx + cfg["dx"], cy + cfg["dy"], cfg["size"], cfg["angle"]))
    hearts = " ".join(hearts)

    box_h = ascent + descent
    html = (
        '{{- /* 首頁大標的「心」：上面兩點換成愛心。由 scripts/make-heart-xin.py 產生，不要手改。\n'
        f'       字形＝Noto Serif TC 900（大標用的字體）；em 框 {upm}、ascent {ascent}、descent {descent}。\n'
        '       字本身用 .sr-only 留在 DOM 裡，複製標題與搜尋引擎讀到的仍是「急診熊心聲部落格」。\n'
        '       愛心是獨立的 path.wm-heart，要換顏色只要在 CSS 給它 fill。 */ -}}\n'
        f'<span class="wm-xin"><span class="sr-only">心</span>'
        f'<svg viewBox="0 0 {upm} {box_h}" aria-hidden="true" focusable="false">'
        f'<g transform="translate(0,{ascent}) scale(1,-1)">'
        f'<path d="{strokes}"/><path class="wm-heart" d="{hearts}"/>'
        "</g></svg></span>"
    )
    OUT.write_text(html, encoding="utf-8")
    print(f"寫好 {OUT.relative_to(ROOT)}（{len(html)} 字元）")
    print(f"em {upm} / ascent {ascent} / descent {descent} → CSS 用 height:{box_h/upm:.3f}em, vertical-align:-{descent/upm:.3f}em")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""中英文章機械對照檢查（翻譯上線前必過）。

用法：python3 scripts/i18n/check_translation.py content/post/ecg-post-21.md
      （自動找旁邊的 ecg-post-21.en.md）

FAIL（必須修到 0 才能上線）：
  - 中文原文裡的阿拉伯數字，英文版少了任何一個（劑量、閾值、mm、ms、%、年份都算）
  - 圖片路徑、外部連結、註腳編號、shortcode 順序、標題層級數量、HTML 標籤數量不一致
  - front matter 的 date / draft / categories / thumbnail / hero_ratio 不一致
  - 英文版殘留中文（引號內的人名、書名等少數例外，要在 ALLOW_CJK 註明）
WARN（給審稿的人看）：
  - 英文版多出來的數字（多半是中文寫「六條」→ six/6，要確認對得上）
"""
import collections, pathlib, re, sys

CJK = re.compile(r'[\u3400-\u9fff\uf900-\ufaff]')
ALLOW_CJK = re.compile(r'<!--\s*keep-zh\s*-->')  # 英文版刻意保留中文的那一行，行尾加 <!-- keep-zh -->

def split_fm(text):
    m = re.match(r'^(---|\+\+\+)\n(.*?)\n\1\n(.*)$', text, re.S)
    if not m:
        sys.exit('找不到 front matter')
    return m.group(2), m.group(3)

def fm_field(fm, key):
    m = re.search(r'^%s\s*[:=]\s*(.*)$' % re.escape(key), fm, re.M)
    if not m:
        return None
    v = m.group(1).strip()
    v = re.sub(r'\s+#.*$', '', v)  # 行尾註解
    return v.strip('"\'')

def fm_list(fm, key):
    m = re.search(r'^%s:\s*\n((?:\s+-.*\n?)+)' % re.escape(key), fm, re.M)
    if not m:
        return []
    return [x.strip()[1:].strip().strip('"\'') for x in m.group(1).splitlines() if x.strip().startswith('-')]

# 網址遇到中文字、全形標點就停（中文原文常把網址直接接「；」「（」「。」，不停會把標點吃進網址）
URL = re.compile(r'https?://[^\s)"\'<>\]\u3000-\u303f\uff00-\uffef\u3400-\u9fff]+')
IMG = re.compile(r'(?:!\[[^\]]*\]\(([^)\s]+)|<img[^>]*\bsrc="([^"]+)"|\bsrc="([^"]+\.(?:png|jpe?g|webp|gif|svg|mp4))")')
FOOT_REF = re.compile(r'\[\^([^\]]+)\]')
SHORTCODE = re.compile(r'\{\{[<%]\s*(/?[\w-]+)')
HEADING = re.compile(r'^(#{1,6})\s', re.M)
TAG = re.compile(r'<(/?)([a-zA-Z][\w-]*)\b')
# 邊界只看 ASCII：Python 的 \w 連中文字都算，會讓「40歲」「16分鐘」這種緊貼中文的數字整個漏掉（2026-10-09 第一版的漏洞）。
# 前面不能接英文字母／數字／小數點（排除 V3、aVR、版本號裡的片段），後面不能再接數字；後面接單位（mm、ms、%、歲）照算。
NUM = re.compile(r'(?<![A-Za-z0-9_.])\d+(?:,\d{3})*(?:\.\d+)?(?![0-9])')

def _human_attrs(m):
    # 標籤本身（含 SVG 座標、CSS、class）不比對，只留讀者看得到的屬性文字
    return ' ' + ' '.join(re.findall(r'\b(?:alt|title|aria-label|placeholder)="([^"]*)"', m.group(0))) + ' '

def strip_code_and_urls(body):
    body = re.sub(r'```.*?```', '', body, flags=re.S)
    body = re.sub(r'<(style|script)\b.*?</\1>', ' ', body, flags=re.S | re.I)   # CSS／JS 兩邊一樣，不是給人讀的
    body = URL.sub(' ', body)
    # markdown 連結／圖片：只拿掉網址，保留 "圖說" 讓裡面的數字照樣比對
    # （舊寫法 \]\([^)]*\) 遇到英文圖說裡的半形括號會提早截斷，中文圖說卻整段被吃掉 → 圖說數字等於沒檢查）
    body = re.sub(r'\]\(\s*[^\s)]+(?:\s+"((?:[^"\\]|\\.)*)")?\s*\)', lambda m: '] ' + (m.group(1) or ''), body)
    body = re.sub(r'</?[A-Za-z][^>]*>', _human_attrs, body)   # 只認真正的標籤；「< 1mm」這種小於號不能被當成標籤吃掉
    body = re.sub(r'\[\^[^\]]+\]', '', body)                 # footnote ids
    body = re.sub(r'#[0-9a-fA-F]{3,8}\b', '', body)           # colors
    body = re.sub(r'\{\{[<%].*?[>%]\}\}', '', body, flags=re.S)  # shortcode params
    return body

MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
          'september', 'october', 'november', 'december']
# 大寫月份名一律換成數字（「June was 38.7%」「圖表標籤 July」也算）；May 同時是助動詞，只在後面接數字時才換
MONTH_RE = re.compile(r'\b(' + '|'.join(m.capitalize() for m in MONTHS if m != 'may') + r'|(?:Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?(?=\s+\d)|May(?=\s+\d))\b')

def month_to_num(m):
    w = m.group(1).rstrip('.').lower()
    for i, name in enumerate(MONTHS, 1):
        if name.startswith(w[:3]):
            return str(i)
    return m.group(0)

from decimal import Decimal

def _fmt(d):
    d = d.normalize()
    return format(d, 'f').rstrip('0').rstrip('.') if '.' in format(d, 'f') else format(d, 'f')

def zh_magnitudes(body):
    """中文量詞換成數值，讓英文寫 7.64 million、NT$22,000、about 70% 都能對上：
    467萬3155 → 4673155、1,235 萬 2,512 → 12352512、2 萬 2 → 22000（萬後只接一位數＝幾千）、
    1萬5千 → 15000、4 千 → 4000、764萬 → 7640000、1.2億 → 120000000、7成 → 70。"""
    # 先拿掉千分位逗號——只認完整的 1,234,567 這種，SVG 座標「70.1,217.5」不能被接成一串（erlife-post-7 譯者抓到）
    body = re.sub(r'(?<![\d.,])\d{1,3}(?:,\d{3})+(?![\d.,])', lambda m: m.group(0).replace(',', ''), body)
    body = re.sub(r'(\d)\s*([萬億千])\s*(?=\d)', r'\1\2', body)       # 「2 萬 2」→「2萬2」
    body = re.sub(r'(\d)\s+([萬億千])', r'\1\2', body)
    # 「8、90歲」「7、80%」＝八十幾、九十幾：前面那個個位數其實是幾十
    #   只有相鄰兩個數（8、90／7、80）才是這種寫法；「1、4、7、10」這種清單不能動
    body = re.sub(r'(?<![\d.])(\d)、(\d)0(?![\d.])',
                  lambda m: f'{m.group(1)}0、{m.group(2)}0' if int(m.group(2)) == int(m.group(1)) + 1 else m.group(0), body)
    # 範圍只在後面寫單位：「359.4 → 415.6 萬」「3–5 萬」兩個數字都是萬（前一個數字前面不能已經是萬／千，避開「2萬2～2萬5」）
    body = re.sub(r'(?<![\d.萬億千])(\d+(?:\.\d+)?)\s*(→|–|—|-|～|~|至|到)\s*(\d+(?:\.\d+)?)(百萬|[萬億千])', r'\1\4 \2 \3\4', body)
    body = re.sub(r'(\d+(?:\.\d+)?)\s*百萬', lambda m: _fmt(Decimal(m.group(1)) * 1000000), body)   # 百萬（「2-3百萬」靠上面的範圍規則兩個都換）
    body = re.sub(r'(\d+)萬(\d)千', lambda m: str(int(m.group(1)) * 10000 + int(m.group(2)) * 1000), body)
    body = re.sub(r'(\d+)萬(\d)(?![\d.千])', lambda m: str(int(m.group(1)) * 10000 + int(m.group(2)) * 1000), body)
    body = re.sub(r'(\d+)萬(\d{4})(?![\d萬])', lambda m: str(int(m.group(1)) * 10000 + int(m.group(2))), body)
    body = re.sub(r'(\d+)萬(\d{2,3})(?![\d萬千])', lambda m: str(int(m.group(1)) * 10000 + int(m.group(2))), body)   # 罕見寫法，至少別讓兩個數字黏在一起
    body = re.sub(r'(\d+(?:\.\d+)?)億', lambda m: _fmt(Decimal(m.group(1)) * 100000000), body)
    body = re.sub(r'(\d+(?:\.\d+)?)萬', lambda m: _fmt(Decimal(m.group(1)) * 10000), body)
    body = re.sub(r'(\d+(?:\.\d+)?)千', lambda m: _fmt(Decimal(m.group(1)) * 1000), body)
    body = re.sub(r'(?<![\d.])(\d)\s*成(?![\d])', lambda m: str(int(m.group(1)) * 10), body)
    return body

def en_magnitudes(body):
    """英文的 million／billion／× 10,000 換成完整數值，跟中文那邊同一把尺。"""
    # 「2-3 million」「1.5–2 billion」兩個數字都是百萬／十億
    body = re.sub(r'(?<![\d.])(\d+(?:\.\d+)?)\s*(-|–|—|to)\s*(\d+(?:\.\d+)?)\s*(million|billion)', r'\1 \4 \2 \3 \4', body)
    body = re.sub(r'(\d+(?:\.\d+)?)\s*million', lambda m: _fmt(Decimal(m.group(1)) * 1000000), body)
    body = re.sub(r'(\d+\.\d+)M\b', lambda m: _fmt(Decimal(m.group(1)) * 1000000), body)   # 圖表標籤 7.64M；不碰「3M 膠帶」
    body = re.sub(r'(\d+(?:\.\d+)?)\s*billion', lambda m: _fmt(Decimal(m.group(1)) * 1000000000), body)
    body = re.sub(r'(\d+(?:\.\d+)?)\s*[×x]\s*10,000', lambda m: _fmt(Decimal(m.group(1)) * 10000), body)
    return body

def strip_tags_attrs(body):
    body = re.sub(r'</?[A-Za-z][^>]*>', ' ', body)              # HTML 標籤與屬性（style="…" 不算引號）
    body = re.sub(r'\]\(\s*[^\s)]+(?:\s+"(?:[^"\\]|\\.)*")?\s*\)', ']', body)   # 圖片／連結的網址與圖說屬性
    body = re.sub(r'\{\{[<%].*?[>%]\}\}', ' ', body, flags=re.S)
    return body

def numbers(body, lang='zh'):
    out = collections.Counter()
    body = MONTH_RE.sub(month_to_num, body)   # 只換「月份＋數字」，例 August 28 → 8 28
    # 中文原文裡也常直接夾英文（參考文獻標題「3 million」），所以英文的換算兩邊都做
    body = en_magnitudes(zh_magnitudes(body)) if lang == 'zh' else en_magnitudes(body)
    for m in NUM.finditer(strip_code_and_urls(body)):
        tok = m.group(0).replace(',', '')
        if '.' not in tok:
            tok = str(int(tok))            # 2024/08/06 的 08 跟 August 6 的 6 視為同一個數
        out[tok] += 1
    return out

def context(body, token, limit=2, lang='zh'):
    res = []
    for line in body.splitlines():
        norm = MONTH_RE.sub(month_to_num, line)
        norm = en_magnitudes(zh_magnitudes(norm)) if lang == 'zh' else en_magnitudes(norm)
        if re.search(r'(?<![\d.])%s(?![\d])' % re.escape(token), norm.replace(',', '')):
            res.append(line.strip()[:140])
            if len(res) >= limit:
                break
    return res

def main(zh_path):
    zh_path = pathlib.Path(zh_path)
    en_path = zh_path.with_name(zh_path.stem + '.en.md')
    if not en_path.exists():
        sys.exit(f'找不到英文版 {en_path}')
    zfm, zb = split_fm(zh_path.read_text())
    efm, eb = split_fm(en_path.read_text())
    fails, warns = [], []

    for k in ['date', 'draft', 'thumbnail', 'hero_ratio', 'toc']:
        if fm_field(zfm, k) != fm_field(efm, k):
            fails.append(f'front matter {k}: 中={fm_field(zfm, k)!r} 英={fm_field(efm, k)!r}')
    if fm_list(zfm, 'categories') != fm_list(efm, 'categories'):
        fails.append(f'categories 不同：{fm_list(zfm, "categories")} vs {fm_list(efm, "categories")}')
    for k in ['title', 'description']:
        v = fm_field(efm, k)
        if not v and fm_field(zfm, k):          # 原文沒有 description 的，英文版也不准自己編一個
            fails.append(f'英文版缺 {k}')
        elif v and not fm_field(zfm, k):
            fails.append(f'原文沒有 {k}，英文版卻有（不可自行新增）：{v[:60]}')
        elif v and CJK.search(v):
            fails.append(f'英文版 {k} 還有中文：{v[:80]}')

    # 作者自己的縮寫（Post.wall、inf.STEMI、Ant.STEMI）英文版要原樣，不能被改成 Post. wall
    def abbrevs(b):
        b = URL.sub(' ', b)
        b = re.sub(r'\]\([^)]*\)', ']', b)
        return collections.Counter(re.findall(r'(?<![\w./])([A-Za-z]{2,6}\.[A-Za-z]{2,})(?![\w/])', b))
    za, ea = abbrevs(zb), abbrevs(eb)
    for tok in sorted(za):
        if tok not in ea and not re.match(r'(?i)(e\.g|i\.e|vs|etc|www|fig|ref|dr|mr|ms|prof)\.', tok):
            warns.append(f'作者縮寫「{tok}」英文版沒照原樣出現（被改寫了？）')

    for t in fm_list(efm, 'tags'):
        if CJK.search(t):
            warns.append(f'英文版 tag 還是中文：{t}（人名、機構名查不到英文才保留）')

    def cmp(name, a, b):
        if a != b:
            ca, cb = collections.Counter(a), collections.Counter(b)
            fails.append(f'{name} 不一致：只在中文 {sorted((ca - cb).elements())[:10]}｜只在英文 {sorted((cb - ca).elements())[:10]}')

    cmp('圖片', [x for t in IMG.findall(zb) for x in t if x], [x for t in IMG.findall(eb) for x in t if x])
    cmp('外部連結', sorted(u.rstrip('.,;') for u in URL.findall(zb)), sorted(u.rstrip('.,;') for u in URL.findall(eb)))
    cmp('註腳', sorted(FOOT_REF.findall(zb)), sorted(FOOT_REF.findall(eb)))
    if SHORTCODE.findall(zb) != SHORTCODE.findall(eb):
        fails.append(f'shortcode 順序不同：{SHORTCODE.findall(zb)} vs {SHORTCODE.findall(eb)}')
    cmp('標題層級', HEADING.findall(zb), HEADING.findall(eb))
    cmp('HTML 標籤', [''.join(t) for t in TAG.findall(zb)], [''.join(t) for t in TAG.findall(eb)])

    zn, en = numbers(zb, 'zh'), numbers(eb, 'en')
    missing, extra = zn - en, en - zn
    for tok, n in sorted(missing.items()):
        fails.append(f'數字 {tok} 英文版少了 {n} 個　中文出處：{context(zb, tok)}')
    for tok, n in sorted(extra.items()):
        warns.append(f'數字 {tok} 英文版多了 {n} 個　英文出處：{context(eb, tok, lang='en')}')

    # 英文版加了引號的英文句，在中文原文找不到一字不差的出處 → 可能是把中文轉述「還原」成英文引句（最常見的錯）
    def squash(t):
        return re.sub(r'\s+', ' ', re.sub(r'[“”"‘’\'*_]', '', t)).strip().lower()
    zsq = squash(zb)
    quotes = re.findall(r'(?<![=\w])"([^"\n]{12,}?)"(?![\w>])|“([^”\n]{12,}?)”', strip_tags_attrs(eb))
    for a, b in quotes:
        q = a or b
        if len(q.split()) >= 3 and squash(q) not in zsq:
            warns.append(f'引號內英文在原文找不到逐字出處（確認不是捏造引文）：“{q[:90]}”')

    for i, line in enumerate(eb.splitlines(), 1):
        if CJK.search(URL.sub('', re.sub(r'\]\([^)\s]+', ']', line))) and not ALLOW_CJK.search(line):
            fails.append(f'英文版第 {i} 行還有中文：{line.strip()[:120]}')

    print(f'== {zh_path.name} ↔ {en_path.name}')
    print(f'   數字：中文 {sum(zn.values())} 個／英文 {sum(en.values())} 個')
    for w in warns:
        print('WARN', w)
    for f in fails:
        print('FAIL', f)
    print(f'結果：{"PASS" if not fails else f"FAIL × {len(fails)}"}（WARN × {len(warns)}）')
    return 1 if fails else 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))

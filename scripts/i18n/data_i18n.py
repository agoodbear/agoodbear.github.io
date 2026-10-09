#!/usr/bin/env python3
"""OMI圖鑑／ECG動畫館的英文對照檔：產生骨架＋上線前檢查。

中文資料檔是唯一正本（data/omi_atlas.yaml、data/ecg_anim.yaml）；英文只放「給讀者看的字」，
另存 data/omi_atlas_en.yaml、data/ecg_anim_en.yaml，用 id 對上，網址、圖片、published、片長都只看中文那份。
版型在英文頁把兩份合起來（layouts/partials/omi/atlas.html、layouts/partials/ecg-anim/item.html）。

用法：
  python3 scripts/i18n/data_i18n.py check              # 兩份都檢查，FAIL 要修到 0 才能上線
  python3 scripts/i18n/data_i18n.py skeleton omi > x.yaml   # 新 finding／新動畫：產生只有中文的骨架給譯者填
  python3 scripts/i18n/data_i18n.py skeleton anim > x.yaml
  python3 scripts/i18n/data_i18n.py check-file omi x.yaml   # 只檢查分批翻譯檔裡有的那幾筆

每一筆英文都帶 zh_hash（中文那幾個欄位的指紋）：中文改了字、英文沒跟著改 → check 報 STALE。
英文改好之後跑 `python3 scripts/i18n/data_i18n.py rehash` 更新指紋。
"""
import collections, hashlib, json, pathlib, re, sys

import yaml

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from check_translation import numbers, CJK  # 同一把數字尺

ROOT = pathlib.Path(__file__).resolve().parents[2]
DATA = ROOT / 'data'

OMI_SCALARS = ['name', 'full', 'short', 'part', 'look', 'artery', 'pitfall']
ANIM_SCALARS = ['title', 'subtitle', 'point']


def ref_str(r):
    # 少數 refs 被 YAML 讀成 dict（「ERC Guidelines 2025: Adult ALS」沒加引號），一律轉回字串
    if isinstance(r, dict):
        return '; '.join(f'{k}: {v}' for k, v in r.items())
    return str(r)


def omi_fields(f):
    out = {k: f[k] for k in OMI_SCALARS if f.get(k)}
    if f.get('leads'):
        out['leads'] = list(f['leads'])
    out['points'] = [p['text'] for p in f.get('points') or []]
    out['criteria'] = [c['text'] for c in f.get('criteria') or []]
    out['slides'] = [{'alt': s.get('alt', ''), 'caption': s.get('caption', '')} for s in f.get('slides') or []]
    out['refs'] = [r['label'] for r in f.get('refs') or []]
    return {k: v for k, v in out.items() if v not in ([], None, '')}


def anim_fields(it):
    out = {k: it[k] for k in ANIM_SCALARS if it.get(k) and it[k] != 'TODO'}
    if isinstance(it.get('refs'), list):
        out['refs'] = [ref_str(r) for r in it['refs']]
    return out


def zh_hash(fields):
    return hashlib.sha1(json.dumps(fields, ensure_ascii=False, sort_keys=True).encode()).hexdigest()[:10]


def load(name):
    return yaml.safe_load((DATA / name).read_text())


def omi_units(zh):
    for g in zh['groups']:
        yield ('group', g['id']), {'name': g['name']}
        for f in g['findings']:
            yield ('finding', f['id']), omi_fields(f)


def anim_units(zh):
    for s in zh['series']:
        yield ('series', s['id']), {k: s[k] for k in ('name', 'intro') if s.get(k)}
    for it in zh['items']:
        yield ('item', it['id']), anim_fields(it)


SPECS = {
    'omi': ('omi_atlas.yaml', 'omi_atlas_en.yaml', omi_units, {'group': 'groups', 'finding': 'findings'}),
    'anim': ('ecg_anim.yaml', 'ecg_anim_en.yaml', anim_units, {'series': 'series', 'item': 'items'}),
}


def skeleton(kind):
    zh_name, _, units, sections = SPECS[kind]
    zh = load(zh_name)
    out = {v: {} for v in sections.values()}
    for (sec, id_), fields in units(zh):
        out[sections[sec]][id_] = dict(fields, zh_hash=zh_hash(fields))
    return out


def walk(zh_v, en_v, path, errs):
    """逐欄比對：形狀一樣、沒有中文、數字對得上。"""
    if isinstance(zh_v, list):
        if not isinstance(en_v, list) or len(en_v) != len(zh_v):
            errs.append(f'FAIL {path}: 中文 {len(zh_v)} 項，英文 {len(en_v) if isinstance(en_v, list) else "不是清單"}')
            return
        for i, (a, b) in enumerate(zip(zh_v, en_v)):
            walk(a, b, f'{path}[{i}]', errs)
        return
    if isinstance(zh_v, dict):
        if not isinstance(en_v, dict):
            errs.append(f'FAIL {path}: 英文不是 dict')
            return
        for k in zh_v:
            if zh_v[k] and not en_v.get(k):
                errs.append(f'FAIL {path}.{k}: 英文缺這個欄位')
            elif zh_v[k]:
                walk(zh_v[k], en_v[k], f'{path}.{k}', errs)
        return
    zh_s, en_s = str(zh_v), str(en_v or '')
    if not en_s.strip():
        errs.append(f'FAIL {path}: 英文是空的')
        return
    if CJK.search(en_s):
        errs.append(f'FAIL {path}: 英文殘留中文：{"".join(CJK.findall(en_s))[:20]}')
    a, b = numbers(zh_s, 'zh'), numbers(en_s, 'en')
    miss = a - b
    if miss:
        errs.append(f'FAIL {path}: 英文少了數字 {dict(miss)}')
    extra = b - a
    if extra:
        errs.append(f'WARN {path}: 英文多出數字 {dict(extra)}')
    # 站內錨點連結（/omi/#xxx、/ecg-anim/#xxx）要原樣
    links = lambda s: sorted(re.findall(r'\]\(([^)\s]+)\)', s))
    if links(zh_s) != links(en_s):
        errs.append(f'FAIL {path}: 連結不一致 中{links(zh_s)} 英{links(en_s)}')
    if zh_s.count('**') != en_s.count('**'):
        errs.append(f'WARN {path}: 粗體數量不同（中 {zh_s.count("**") // 2}、英 {en_s.count("**") // 2}）')


def check(kind, en_path=None):
    """en_path 給了＝只檢查那個檔案裡有的那幾筆（譯者分批翻的時候用）。"""
    zh_name, en_name, units, sections = SPECS[kind]
    zh = load(zh_name)
    partial = en_path is not None
    en_path = pathlib.Path(en_path) if partial else DATA / en_name
    if not en_path.exists():
        return [f'FAIL {en_name} 不存在']
    en = yaml.safe_load(en_path.read_text()) or {}
    errs, seen = [], collections.defaultdict(set)
    for (sec, id_), fields in units(zh):
        key = sections[sec]
        seen[key].add(id_)
        e = (en.get(key) or {}).get(id_)
        if not e:
            if not partial:
                errs.append(f'FAIL {key}.{id_}: 英文沒有這一筆')
            continue
        if e.get('zh_hash') != zh_hash(fields):
            errs.append(f'STALE {key}.{id_}: 中文改過了（zh_hash 不符），英文要跟著改，改完跑 rehash')
        walk(fields, {k: v for k, v in e.items() if k != 'zh_hash'}, f'{key}.{id_}', errs)
    for key in sections.values():
        for id_ in set(en.get(key) or {}) - seen[key]:
            errs.append(f'WARN {key}.{id_}: 中文已經沒有這一筆，英文可以刪掉')
    return errs


def rehash(kind):
    zh_name, en_name, units, sections = SPECS[kind]
    zh = load(zh_name)
    path = DATA / en_name
    text = path.read_text()
    for (sec, id_), fields in units(zh):
        # 只換指紋那一行，不重寫整份 YAML（保留註解與排版）
        text = re.sub(r'(?m)^(  %s:\n(?:    .*\n|\s*\n)*?    zh_hash: )\S+' % re.escape(id_), r"\g<1>'" + zh_hash(fields) + "'", text, count=1)   # 一律加引號：全數字的指紋不加會被 YAML 讀成整數
    path.write_text(text)


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'check'
    if cmd == 'skeleton':
        yaml.safe_dump(skeleton(sys.argv[2]), sys.stdout, allow_unicode=True, sort_keys=False, width=10**6)
    elif cmd == 'rehash':
        for k in (sys.argv[2:] or SPECS):
            rehash(k)
    elif cmd in ('check', 'check-file'):
        # check-file <omi|anim> <檔案>：只檢查分批翻譯檔裡的那幾筆
        bad = 0
        jobs = [(sys.argv[2], sys.argv[3])] if cmd == 'check-file' else [(k, None) for k in (sys.argv[2:] or SPECS)]
        for k, path in jobs:
            errs = check(k, path)
            for e in errs:
                print(f'[{k}] {e}')
            n = sum(e.startswith(('FAIL', 'STALE')) for e in errs)
            bad += n
            print(f'[{k}] {"PASS" if not n else f"{n} FAIL/STALE"}（WARN {len(errs) - n}）')
        sys.exit(1 if bad else 0)
    else:
        sys.exit(__doc__)

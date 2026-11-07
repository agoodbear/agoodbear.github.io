#!/usr/bin/env python3
"""比對原稿與新稿的「正文字」：去掉front matter、標記、圖片、shortcode、標點空白後逐字比。
用法: textdiff.py <orig.md> <new.md>  → 列出刪掉(-)與新增(+)的字串；刪除=0才算通過。"""
import re,sys,difflib
def norm(p):
    t=open(p,encoding='utf-8').read()
    t=re.sub(r'\A---[\s\S]*?\n---\n','',t)
    t=re.sub(r'\{\{<[^>]*>\}\}','',t)
    t=re.sub(r'!\[[^\]]*\]\([^)]*\)','',t)
    t=re.sub(r'\]\([^)]*\)',']',t)
    t=re.sub(r'</?[a-zA-Z][^>]*>','',t)
    t=re.sub(r'\[\^[^\]]+\]:?','',t)
    t=t.replace('❤️','')
    t=re.sub(r'[\s\W_]+','',t)
    return t
a,b=norm(sys.argv[1]),norm(sys.argv[2])
dels=[];adds=[]
for op,i1,i2,j1,j2 in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes():
    if op in('delete','replace'): dels.append(a[i1:i2])
    if op in('insert','replace'): adds.append(b[j1:j2])
print('DELETED',len(dels),dels)
print('ADDED',len(adds),adds)
sys.exit(1 if dels else 0)

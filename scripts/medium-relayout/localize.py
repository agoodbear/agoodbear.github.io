#!/usr/bin/env python3
"""把medium-*.md（含.en.md）與data/ecg_images.yaml裡的Medium CDN圖下載到static/images/medium/，並改寫路徑。
--dry 只列清單。下載失敗的URL保留原樣並回報。"""
import re,sys,os,glob,subprocess,hashlib,time
R=os.path.expanduser('~/Documents/GitHub/agoodbear.github.io')
pat=re.compile(r'https://(?:cdn-images-1\.medium\.com/max/\d+|miro\.medium\.com/v2/resize:fit:\d+)/([^\s")\']+)')
files=sorted(glob.glob(f'{R}/content/post/medium-*.md'))
urls={}
for f in files:
    for m in pat.finditer(open(f).read()): urls[m.group(0)]=m.group(1)
print(len(files),'files',len(urls),'urls')
if '--dry' in sys.argv: sys.exit()
os.makedirs(f'{R}/static/images/medium',exist_ok=True)
mp={};fail=[]
for u,name in urls.items():
    base=name.replace('*','_').replace('@','_')
    if '.' not in base[-6:]: base+='.jpg'
    dst=f'{R}/static/images/medium/{base}'
    if not os.path.exists(dst) or os.path.getsize(dst)==0:
        src='https://miro.medium.com/v2/resize:fit:1400/'+name
        time.sleep(0.4); r=subprocess.run(['curl','-sfL','--retry','2','-o',dst,src])
        if r.returncode or os.path.getsize(dst)<500:
            fail.append(u); 
            if os.path.exists(dst): os.remove(dst)
            continue
    mp[u]='/images/medium/'+base
for f in files+[f'{R}/data/ecg_images.yaml']:
    t=open(f).read(); n=t
    for u,l in mp.items(): n=n.replace(u,l)
    if n!=t: open(f,'w').write(n)
print('localized',len(mp),'failed',len(fail)); [print(' FAIL',x) for x in fail]

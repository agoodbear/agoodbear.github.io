---
description: 發布 Hugo 網站到 agoodbear.github.io
---

# 發布流程

// turbo-all

1. 在 exampleSite 執行 Hugo build
```bash
cd "/Users/tsaojian-hsiung/Desktop/Google antigravity檔案夾/exampleSite" && hugo --gc --minify
```

2. 刪除 agoodbear.github.io 的舊內容（保留 .git）並複製新的 public 內容
```bash
rsync -av --delete --filter='P .git' --filter='P .gitignore' "/Users/tsaojian-hsiung/Desktop/Google antigravity檔案夾/exampleSite/public/" "/Users/tsaojian-hsiung/Documents/GitHub/agoodbear.github.io/"
```

3. Git add, commit, push
```bash
cd "/Users/tsaojian-hsiung/Documents/GitHub/agoodbear.github.io" && git add -A && git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')" && git push origin main
```

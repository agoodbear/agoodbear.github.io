# 急診熊心聲部落格

急診醫師曹建雄（agoodbear）的個人部落格，專注：

- 心電圖（ECG）判讀與真實案例解析
- 床邊超音波（POCUS）臨床應用
- 急診醫學、急診人生、學習筆記、運動與旅行

🔗 線上閱讀：<https://agoodbear.github.io/>

---

## 技術棧

- **靜態網站產生器**：[Hugo](https://gohugo.io/) v0.156.0（CI 鎖定，見 `.github/workflows/hugo.yaml` 的 `HUGO_VERSION`）
- **主題**：[hugo-clarity](https://github.com/chipzoller/hugo-clarity) + hugo-embed-pdf-shortcode + hugo-dynamic-tabs
- **部署**：GitHub Actions → GitHub Pages
- **留言系統**：Disqus（shortname `agoodbear`）
- **訂閱通知**：Cloud Function（新 ECG 文章自動寄信給訂閱者）
- **搜尋**：站內搜尋（`content/search.md` + `index.json`）

---

## Repo branch 結構

| Branch | 用途 |
|--------|------|
| `hugo-source` | **原始碼**（你 push 文章與設定到這裡） |
| `main` | **build 結果**（GitHub Actions 自動 push 過來，不要手動動） |

**部署流程**：

```
push 到 hugo-source
   → GitHub Actions（.github/workflows/hugo.yaml）
   → hugo --gc --minify
   → 把 public/ push 到 main
   → GitHub Pages 服務 main → 線上更新
```

通常從 push 到上線約 1 分鐘。

---

## 寫一篇新文章的標準流程

### 1. 在本機開檔

```bash
cd ~/Documents/GitHub/agoodbear.github.io
git pull origin hugo-source
```

### 2. 在 `content/post/` 新增 `.md` 檔

檔名用 `<分類>-post-<編號>.md`（例如 `ecg-post-17.md`、`erlife-post-4.md`）。複製現有文章修改最快，front matter 模板大致如下：

```markdown
---
title: "文章標題"
date: "2026-04-19"
draft: false
featured: false
toc: false
thumbnail: "/images/ecg-post-17.webp"
typora-copy-images-to: "../../static/images/ipic"
codeMaxLines: 10
codeLineNumbers: false
figurePositionShow: true
categories:
  - ecg
tags:
  - ECG
  - OMI
description: "SEO 用的一行描述，會出現在分享卡片上"
---
```

### 3. 圖片

用 Typora 貼圖會自動依 `typora-copy-images-to` 設定，把圖跑到 `static/images/ipic/`。**不要外連 ipic.vip 線上連結**（出站、有快取問題），所有圖都用本機路徑。

### 4. 本機預覽

```bash
hugo server
```

開 <http://localhost:1313/> 看效果。

### 5. push

```bash
git add content/post/<your-post>.md static/images/ipic/<your-images>
git commit -m "新增文章：<標題>"
git push origin hugo-source
```

GitHub Actions 會自動 build & deploy。約 1 分鐘後線上可見。

---

## 目錄結構速查

```
agoodbear.github.io/
├── content/                    # 所有文章
│   ├── post/                   # 主部落格文章（按 categories 分到選單）
│   ├── ai-learning/            # AI 學習日誌（每天一篇，由 Codex 自動維護）
│   ├── practical-tools/        # 實用工具頁
│   ├── homepage/               # 首頁區塊
│   ├── about.md                # 「關於我」頁
│   └── _index.md               # 首頁 front matter
├── config/_default/            # Hugo 設定
│   ├── config.toml             # 主設定（baseurl、theme、taxonomies）
│   ├── languages.toml          # 語系與站名
│   ├── params.toml             # 主題參數
│   └── menus/menu.zh-tw.toml   # 主選單
├── layouts/                    # 自訂 layout（覆蓋主題的）
├── themes/                     # 主題（hugo-clarity 等）
├── static/                     # 靜態資源（images、fonts、icons、custom-css）
├── scripts/                    # 自動化腳本（圖片正規化、GSC 索引等）
└── .github/workflows/hugo.yaml # CI 部署 workflow
```

---

## 分工（內部維護備忘）

這個 repo 由兩套 AI 協作維護，工作邊界明確：

| 維護者 | 負責範圍 |
|--------|---------|
| **OpenClaw + Codex（每日自動）** | 只動 `content/ai-learning/YYYY-MM-DD.md` 與 `content/ai-learning/_index.md` |
| **Claude Code（站長手動指示才動）** | 其他全部：主題、選單、CSS、`content/post/`、`config/`、`layouts/`、`scripts/` 等 |

詳細分工另見 [`OPENCLAW_HANDOFF.md`](OPENCLAW_HANDOFF.md)。

---

## 自動化腳本

`scripts/` 下面：

| 腳本 | 用途 |
|------|------|
| `normalize_markdown_images.py` | build 前把 markdown 圖片路徑正規化 |
| `collect_new_urls.py` | 部署後 diff sitemap 找出新 URL |
| `submit_gsc_index.mjs` | 把新 URL 送 Google Search Console 索引 |
| `collect-ecg-posts.js` | 找出本次 build 的新 ECG 文章 |
| `write-studio/` | （已棄用）Typora 風格 Hugo 寫作 app |

部署後 Actions 會自動跑 GSC 收集與訂閱者通知。

```bash
# 手動送 GSC 索引
npm run gsc:index:new
```

---

## 自訂 CSS

`static/custom-css/` 下面（在 `config/_default/config.toml` 的 `customCSS` 啟用）：

- `timeline.css` — 「關於我」頁的時間軸樣式
- `image-row.css` — 圖片橫向排列
- `tag-pill.css` — 文章內的標籤膠囊（搭配 `tag-pill` shortcode）
- `ecg-wave-text.css` — ECG 波形動畫文字（搭配 `ecg-wave-text` shortcode）
- `notice-flame.css` — 警示提醒
- `pdf-reference.css` — PDF 引用樣式

---

## 授權

- 程式碼：MIT
- 文章內容：版權所有，未經同意請勿轉載

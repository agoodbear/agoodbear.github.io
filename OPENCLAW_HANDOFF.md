# OpenClaw Handoff

這份文件是給 OpenClaw 維護本站 `AI學習` 頁面時使用。

## 任務目標

請協助維護 Hugo 網站中的 `AI學習` 頁面，讓站長可以持續用日期方式累積每日 AI 學習內容。

你的主要工作只有兩種：

1. 新增每日 AI 學習紀錄
2. 修改 `AI學習` 首頁說明文字

除非站長另外要求，否則不要修改版型、主選單、其他內容頁面或部署設定。

## 重要檔案位置

### 每日內容放這裡

- `content/ai-learning/`

這個資料夾底下每一個 `.md` 檔就是一天的 AI 學習紀錄。

檔名格式固定：

- `YYYY-MM-DD.md`

例如：

- `content/ai-learning/2026-03-09.md`
- `content/ai-learning/2026-03-10.md`

### AI 學習首頁說明文字

- `content/ai-learning/_index.md`

這個檔案控制 `AI學習` 頁面最上方的介紹文字與標籤。

### 每日內容模板

- `archetypes/ai-learning.md`

新增每日紀錄時，請優先沿用這份格式。

### 版型檔案

- `layouts/ai-learning/list.html`

只有在站長明確要求更改：

- 右側快速跳轉
- 年/月導覽外觀
- 頁面排版
- 區塊 A / 區塊 B 樣式

才去修改這個檔案。

### 主選單設定

- `config/_default/menus/menu.zh-tw.toml`

除非站長明確要求，不要改這個檔案。

## 不要修改的地方

沒有特別要求時，請不要修改以下內容：

- `public/` 內任何檔案
- GitHub Pages 部署流程
- 其他 `content/post/` 文章
- 非 `AI學習` 相關頁面
- 主題檔案與全站共用版型

## 每日內容格式

每日 AI 學習紀錄請用以下格式：

```toml
+++
title = "AI 學習紀錄"
date = "2026-03-10"
draft = false
+++

## 區塊 A：今天 AI 學到了什麼

今天學到的內容寫在這裡。

## 區塊 B：今日有趣的 AI 學習相關連結

- [連結名稱](https://example.com/)
  這個連結值得記下來的原因寫在這裡。
```

## 撰寫原則

請遵守以下原則：

1. 每篇只整理當天內容，不要把多天內容混成一篇。
2. `區塊 A` 用簡潔文字說明今天學到的重點。
3. `區塊 B` 放值得回看的 AI 相關連結，並附一句簡短說明。
4. 不要加入過度花俏的 HTML，優先使用一般 Markdown。
5. 不要自行改動既有結構名稱，例如：
   - `區塊 A：今天 AI 學到了什麼`
   - `區塊 B：今日有趣的 AI 學習相關連結`

## 畫面行為說明

目前 `AI學習` 頁面有以下行為：

1. 依年份與月份自動整理內容
2. 右側顯示 `快速跳轉`
3. 點選月份後，頁面會跳到該月份的第一篇內容
4. 只要內容檔放在 `content/ai-learning/`，頁面會自動收進去

所以新增每日內容時，通常不需要改版型。

## 建議工作流程

當站長提供某一天的 AI 學習整理內容時，請依序執行：

1. 到 `content/ai-learning/` 確認該日期檔案是否已存在
2. 若不存在，建立新的 `YYYY-MM-DD.md`
3. 依照既有格式填入 `區塊 A` 與 `區塊 B`
4. 若站長要求修改頁首介紹，再更新 `content/ai-learning/_index.md`
5. 除非站長另外要求，不要改 `layouts/ai-learning/list.html`

## 部署方式

本站目前的部署流程如下：

1. 內容與模板修改提交到 `hugo-source`
2. GitHub Actions workflow 會自動建置 Hugo
3. 建置結果會自動部署到 GitHub Pages

因此：

- 不需要手動修改 `main`
- 不需要手動上傳 `public/`

## 給 OpenClaw 的執行指令

如果站長只說：

`請新增今天的 AI 學習紀錄`

請理解為：

1. 在 `content/ai-learning/` 新增今天日期的檔案
2. 使用既有模板
3. 填入 `區塊 A` 與 `區塊 B`
4. 不要更動其他區域

如果站長說：

`請修改 AI學習 頁首介紹`

請只修改：

- `content/ai-learning/_index.md`

如果站長說：

`請調整 AI學習 頁面跳轉選單或版型`

才去修改：

- `layouts/ai-learning/list.html`

## 總結

平常維護 `AI學習` 頁面時，請優先只動這三個位置：

- `content/ai-learning/`
- `content/ai-learning/_index.md`
- `archetypes/ai-learning.md`

只有版面需求變動時，才碰：

- `layouts/ai-learning/list.html`

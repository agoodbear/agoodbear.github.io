# Write Studio Cloud WebApp

這個模式提供：

- 雲端文章儲存（跨電腦續寫）
- 雲端圖片暫存（非 Mac 或無 iPic bridge 時）
- 在有 iPic bridge 的 Mac 自動把雲端圖片轉成 iPic URL

## 1. 啟動 Web App Server

```bash
cd /Users/tsaojian-hsiung/Desktop/CodexProjects/exampleSite
WRITE_STUDIO_TOKEN="你的長token" npm run write-studio:webapp
```

預設會啟在：

- Web UI: `http://127.0.0.1:4310/write-studio/`
- API: `http://127.0.0.1:4310/write-studio-api/health`

## 2. 在 Write Studio 設定 Cloud

在工具列按 `Cloud Set`：

1. `Cloud API Base URL` 填 `http://你的主機:4310/write-studio-api`
2. `Cloud Token` 填你啟動 server 的 `WRITE_STUDIO_TOKEN`

## 3. 使用流程

- `Cloud Save`: 儲存目前文章到雲端
- `Cloud Open`: 從雲端清單開啟文章

圖片行為：

- 若本機可連 `http://127.0.0.1:44777/health`（iPic bridge 存在）：
  - 貼圖時會直接上傳到 iPic
- 若沒有 iPic bridge：
  - 貼圖時會上傳到雲端資產（`/write-studio-api/assets/:id`）
- 後續在 Mac 開啟該雲端文章時：
  - 會自動嘗試把雲端資產 URL 轉成 iPic URL，並回存雲端

## 4. 資料儲存位置

預設在專案目錄：

- `/.write-studio-cloud/db.json`
- `/.write-studio-cloud/assets/`

可用環境變數改路徑：

```bash
WRITE_STUDIO_DATA_DIR=/path/to/persistent-data
```

## 5. 雲端部署提醒

若要正式放外網，建議：

- 設定 `WRITE_STUDIO_TOKEN`
- 反向代理加 HTTPS
- 把 `WRITE_STUDIO_DATA_DIR` 指到持久化磁碟

## 6. PDF 檔案建議（全 Firebase 優先）

如果你原本 PDF 已經在 Firebase Storage（例如 Roam 產生的 `firebasestorage.googleapis.com` 連結）：

- highlight/筆記資料：走本 API（`/write-studio-api`）
- PDF 檔案：直接用 Firebase Storage URL 當 `PDF URL`

完整流程請看：

- `scripts/write-studio/README-pdf-firebase-architecture.md`

若未來下載流量變大，才再評估：

- `scripts/write-studio/README-pdf-r2-architecture.md`

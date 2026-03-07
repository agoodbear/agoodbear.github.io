# PDF Guideline 架構：全 Firebase（推薦給現有 Roam/Firebase 使用者）

這份文件給「PDF 幾乎都已在 Firebase Storage」的情境。

## 架構

- Highlight/註解資料：`/write-studio-api`
- PDF 檔案：Firebase Storage URL（可直接使用 `https://firebasestorage.googleapis.com/...`）

## 1) API 與 Token

閱讀器需要兩個值：

- `Cloud API Base URL`
- `管理者 Token`（等於後端 `WRITE_STUDIO_TOKEN`）

### 可用 API Base URL（目前專案）

- `https://write-studio-cloud-agoodbear.web.app/write-studio-api`
- `https://write-studio-cloud-agoodbear.firebaseapp.com/write-studio-api`

## 2) Token 來源

- 後端環境變數 `WRITE_STUDIO_TOKEN` 是唯一來源
- 前端 `設定 API/Token` 填入同一組值

本機自架 cloud webapp 時，例：

```bash
WRITE_STUDIO_TOKEN="你的token" npm run write-studio:webapp
```

## 3) 每份 PDF 的操作

1. 取得 Firebase Storage PDF 連結（例如 Roam 提供的 URL）
2. 進入 PDF Guideline Studio 管理模式
3. 文件欄位 `PDF URL` 貼上該連結
4. 框選 highlight、編寫 note
5. `儲存變更`

## 4) 文章引用（Typora/Hugo）

```md
{{< pdf-footnote trigger="看原文" doc="troponins-heart-failure" highlight="troponin-hf-1" >}}
    你的中文重點
{{< /pdf-footnote >}}
```

## 5) 注意事項

- Roam 產生的 token 化下載 URL 若被重置，舊連結可能失效
- 若是敏感 PDF，請避免把永久可讀 URL 放在公開頁面
- 長期穩定性最好是把重點 PDF 移到你自己控管的 Firebase bucket

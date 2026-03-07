# PDF Guideline 架構：API 維持現況 + PDF 放 R2

這份文件給「會在多台電腦（例如醫院電腦、家裡電腦）編輯」的情境。

## 目標架構

- Highlight/註解資料：走現有 `/write-studio-api`（你目前的 API 流程不變）
- PDF 檔案：放 Cloudflare R2，`pdfUrl` 指到 R2 公開網址

## 1) 先準備 R2（只做一次）

1. 建 bucket（示例）
```bash
npx wrangler r2 bucket create omi-guideline-pdfs --location=apac
```
2. 設定公開讀取（建議綁自訂網域，例如 `pdf.your-domain.com`）
3. 設定 CORS（至少允許你的網站網域 `GET,HEAD`）
4. 上傳 PDF（示例）
```bash
npx wrangler r2 object put omi-guideline-pdfs/guidelines/esc-2020-nstemi.pdf --file=./esc-2020-nstemi.pdf
```

## 2) 準備 API 與 Token

你的 PDF Guideline Studio 會要求兩個值：

- `Cloud API Base URL`：例如 `https://your-host/write-studio-api`
- `管理者 Token`：就是後端的 `WRITE_STUDIO_TOKEN`

### Token 來源

- 若你跑本機 cloud webapp：
```bash
WRITE_STUDIO_TOKEN="你設定的token" npm run write-studio:webapp
```
  這個 `你設定的token` 就是前端要填的管理者 Token。

- 若你跑 Firebase Functions：
  在部署環境中設定環境變數 `WRITE_STUDIO_TOKEN`；前端填同一組值。

## 3) 在閱讀器設定

打開 `/tools/pdf-guideline-studio/` 或從 footnote popup 進完整閱讀器：

1. 按 `設定 API/Token`
2. `Cloud API Base URL` 填 API 網址
3. `管理者 Token` 填 `WRITE_STUDIO_TOKEN`
4. 看到連線成功訊息後，按 `管理模式` 就可編輯

## 4) 每份 PDF 的實際操作

1. PDF 上傳到 R2，取得公開 URL  
2. 進管理模式，把該文件 `PDF URL` 改成 R2 URL  
3. 框選 highlight、寫 note  
4. 按 `儲存變更`（會寫回 API）  
5. 文章中引用時只用 `doc + highlight`：

```md
{{< pdf-footnote trigger="看原文" doc="troponins-heart-failure" highlight="troponin-hf-1" >}}
    你的中文重點
{{< /pdf-footnote >}}
```

## 5) 跨電腦編輯的重點

- 只要同一份 doc id + 同一個 API + 同一個 token，就能在不同電腦編輯同一份資料
- PDF 檔案改版時，只要更新該 doc 的 `pdfUrl`，文章內 shortcode 不用改

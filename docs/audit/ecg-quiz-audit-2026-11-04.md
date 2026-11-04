# ECG 隨機考題 完整性稽核（2026-11-04）

## 統計摘要

| 項目 | 結果 |
|---|---|
| 題數 | 1690 |
| 缺欄位／選項非 4 個／正解超界／重複 id | 0 / 0 / 0 / 0 |
| 題幹完全重複／高度相似（同病例） | 0 / 2 組 |
| 詳解五段不全或標記錯誤 | **3 題** |
| 空字串欄位 | 13（皆為 options_note，前端未使用） |
| quiz.json 格式（ensure_ascii=False, indent=2） | ✅ 正確，未被 minify |
| bank/ 與 quiz.json 同步 | ✅ 完全一致（version 80c309503339，85 塊） |
| imageMirror HEAD | ⚠️ **未能執行**：執行環境網路政策封鎖 ecgimg.agoodbear.com（proxy CONNECT 403），1690 個請求皆未送達，非圖片本身 404 |
| 缺 imageMirror | 0 |
| 正解分布 A/B/C/D | 427 / 443 / 413 / 407（χ²=1.82，df=3，均衡） |
| 最長選項＝正解 | **1127 題（66.7%，隨機預期 25%）** |
| urlmap 指向不存在的題目 | 0 |
| 本次自動修正 | 無（沒有需要機械性修正的項目） |

## 1. quiz.json 結構

欄位、選項數、正解 index、id 唯一性、題幹完全重複：全部通過。

### 詳解五段不全／標記錯誤（未修改，需人工處理）

五段指：`lead` 判讀、`lead` 病程結果、`wo` 為何其他選項不對、`lp` 學習重點、`extend` 觸類旁通。

- **smith-654**：「病程結果」段完全缺漏（只有判讀、wo、lp、extend 四段）。需補寫內容，屬詳解內容，未修改。
- **smith-559**：病程結果標籤寫成 <span class='病程結果'>（class 名稱錯誤），應為 <span class='lead'>；前端不會套用 lead 樣式。屬詳解標記，依規則未修改。
- **smith-1051**：判讀與病程結果之間多出一個空段落 <p><span class='病程結果' class='lead'></span></p>，前端會顯示一個空的灰色標籤。建議刪除該空段落；屬詳解標記，依規則未修改。

### 高度相似題（未修改，供決定是否保留）

- **smith-430 / smith-431**：題幹相似度 0.69（3-gram Jaccard），同一院前節律條、正解文字相同；兩篇 Smith 原文為同文重貼（URL 結尾 -2）。
- **smith-66 / smith-9333**：同一張圖（vomitingtachyrenalfailure1.jpg）、同一病例（54 歲腎移植、嘔吐、BP 111/66、HR 117），來自兩篇不同原文；正解分別為 C 與 D。

### 其他

- 19 題有 options_note 欄位：13 題為空字串、6 題為 null；前端未使用此欄位，不影響顯示。
- 有 imageOrig（6 題）與 sourceUrl_unused（4 題）等非標準欄位，前端未使用。
- content/post/ecg-post-21.md／.en.md 文中寫「1649題」，目前題庫為 1690 題（文案，未修改）。

## 2. bank/ 同步

將 `scripts/build-ecg-quiz-bank.py` 輸出目錄改到暫存目錄重跑，與 repo 內 `bank/` 逐檔比對（manifest.json、urlmap.json、c000–c084.json 共 87 檔）：**完全相同**，無需重建。

## 3. 圖片

已對全部 1690 個 imageMirror 嘗試 HEAD（限速每秒約 4.5 個），但雲端執行環境的 proxy 對 `ecgimg.agoodbear.com:443` 一律回 `403 Forbidden`（CONNECT tunnel failed），請求沒有送到圖床，**因此本次無法判定任何圖片是否 404**。這是執行環境的網路允許清單問題，不是圖床故障。

要補做：把 `ecgimg.agoodbear.com` 加入此 routine 環境的網路允許清單，或在本機執行同一支 HEAD 檢查。

離線可驗證的部分已通過：1690/1690 題的 imageMirror 都以 `https://ecgimg.agoodbear.com/q/` 開頭、檔名符合 `<id>-<hash>.<ext>`、互不重複，imageMirrorSrc 皆等於 image。


缺 imageMirror 的題目：無。

## 4. 正解分布

| A | B | C | D |
|---|---|---|---|
| 427 | 443 | 413 | 407 |

卡方檢定 χ²=1.82（df=3，臨界值 7.815），位置分布均衡。

**但有明顯的「最長選項就是答案」線索**：1127/1690 題（66.7%）正解是四個選項中字數最長的，隨機預期約 25%。考生可單憑選項長度猜對三分之二。最長選項的位置分布為 A 468／B 435／C 422／D 365。這屬於出題內容問題，未修改；建議之後出題／改題時把干擾選項寫得與正解等長。

## 5. urlmap 與站內連結

- urlmap 共 1690 筆，key 全部是 drsmithsecgblog.com 原文網址（無本站 content/ 頁面），value 全部存在於 manifest ids；經前端 `normUrl` 正規化後無碰撞。
- 題目 `related` 共 3325 條連結，其中 3098 條會被 urlmap 轉成「在此練這題」站內跳轉，0 條指回自己，其餘 227 條為題庫外的 Smith 原文（外連）。
- quiz.json 內沒有任何指向本站 content/ 的連結（除 ecgimg 圖床外無 agoodbear 網址），因此沒有可對照 content/ 的死連結。
- 本站反向連到題庫的頁面：`data/practical_tools.yaml`、`content/post/ecg-post-21.md`／`.en.md` 的 `https://agoodbear.com/tools/ecg-quiz/`，目標 `static/tools/ecg-quiz/index.html` 存在。

## 本次修改

無資料修改；quiz.json、bank/ 均未變更。僅新增本報告（.md＋.json）。

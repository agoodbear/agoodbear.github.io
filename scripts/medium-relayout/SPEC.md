# Medium舊文重新排版規格（Bear 2026-11-07 已核可樣板）

Repo：~/Documents/GitHub/agoodbear.github.io（branch hugo-source）。只改你被分配的 `content/post/medium-<id>.md`（中文版）。
**絕對不碰**：`.en.md`、`content/ai-learning/`、其他任何檔案。**不准 git commit / push / 跑一次性 `hugo` build**（會洗掉預覽伺服器的標記工具）。

## 樣板（照這個做）
- 原稿：/private/tmp/claude-501/-Users-tsaojian-hsiung-Desktop-Claude-Code---/454e74b6-a335-46f7-b2f8-0edaf1517224/scratchpad/orig/medium-3956f2cef4ca.md
- 定稿：~/Documents/GitHub/agoodbear.github.io/content/post/medium-3956f2cef4ca.md
- 兩份都先完整讀過，再動手。

## 規則
1. **正文字句一律不動**。這是排版不是改稿。只允許：明顯錯字（如EGG→ECG）、圖號重編後內文同步、拿掉被元件取代的標籤字（Tips:、參考資料補充）。不改Bear的語氣、標點、「!!!!」「~~」。
2. front matter：
   - 加 `description:`（1–2句，從文章開頭事實改寫，不誇大、不加數字以外的推論；不用破折號）。
   - `toc: true`。
   - 若 `thumbnail` 與正文第一張圖是同一張 → 加 `hide_hero: true`。
   - 在 `canonicalURL` 後面加：
     ```
     # 🗂 改稿版次
     #   重新排版｜2026-11-07｜比照ecg-post-22：卡片風、圖號、學習重點、參考資料收合（正文字句不動）→⏳ 待確認
     #   第 0 版｜自 Medium 匯入
     ```
     （實際用到哪些元件就寫哪些）
   - 其餘欄位（medium_id、canonicalURL、tags…）原樣保留。
3. 正文第一行放 `{{< article-cards >}}`，空一行。
4. 標題：禁 H1。`#### <strong>X</strong>`、`#### X` 依層級改成 `## ❤️X`（大段落：Case、Case繼續、討論主題）或 `### ❤️X`（底下的子題）。尾巴的「:」「：」拿掉。「後記」「參考資料」「學習重點」不加❤️。開頭若沒有段落標題，可加一個 `## ❤️Case：<8–14字，用原文的詞>`。
5. 問題清單：**只有原文本來就有一組連續提問**（如「先問幾個問題?」後面接2–5個問句）才改成
   ```
   {{< ecg-qlist >}}
   - **Q1**：…
   {{< /ecg-qlist >}}
   ```
   不准自己編問題。對應的回答段標題可加「Q1：」前綴，但只有在明確是在回答那一題時才加。
6. 圖片：全部編號 Fig.1、Fig.2…（依出現順序），寫成 `![Fig.N 圖說](原URL "Fig.N 圖說")`。**URL 一字不改**。原本在圖下方的 `<strong><em>Fig. X</em></strong>` 之類圖說行刪掉（內容併進新圖說），內文提到的舊圖號同步改成新號。
   - 圖說要短（4–20字），寫「這張是什麼」（例：到院ECG、20分鐘後的ECG、CAG：LAD proximal total occlusion）。
   - 拿不準內容就下載下來看：`curl -sL -o /private/tmp/claude-501/-Users-tsaojian-hsiung-Desktop-Claude-Code---/454e74b6-a335-46f7-b2f8-0edaf1517224/scratchpad/img/<名>.png "<URL>"` 再用 Read 看圖（先 `sips -Z 900` 縮小）。圖上若有文字標註可以照抄進圖說。看了還是不確定 → 只寫上下文明講的東西，例如「Fig.3 第二張ECG」。
7. 元件（ecg-article.css 已有樣式）：
   - 兩組平行對照清單（像／不像、DDx比較）→ `<div class="ec-stack ec-cols">` 包巢狀清單（父項粗體標題、子項內容），前後各空一行。
   - 有順序的步驟清單 → `<div class="ec-stack ec-steps">`。
   - 一般清單維持一般清單，不要硬套。
   - `> Tips` 引用框維持 blockquote。
   - 文末若有「Tips1/2/3…」「重點整理」「Take home message」之類總結 → 收進
     ```
     <div class="ec-takeaways">

     ## 學習重點

     1. …

     </div>
     ```
     （拿掉 Tips1 這類標籤字，內容照原文）。原文沒有總結就**不要**自己寫學習重點。
8. 螢光 `<mark>…</mark>`：每篇最多4處，只標Bear原本就強調的結論句（他自己加粗成一行、加了一串「!!!」、寫「重點」「學到」的句子）。不標中間的推論。
9. 粗體：保留原本 `<strong>`；新寫的粗體若緊貼中文標點，用 `<strong>` 不要用 `**`。
10. 參考資料：若有註腳 `[^n]`：原本的「參考資料補充：[^1]…」那行換成
    ```
    ## 參考資料

    內文每個上標數字，滑過去（手機點一下）就看得到出處。整理起來是這N份：

    <div class="ec-stack ec-cols refs-sources">

    - **研究**（／**指引**／**教科書**／**部落格**／**網站**，依實際有的分類）
      - 作者 et al. *期刊縮寫* 年（中文一句話講這篇在講什麼）

    </div>

    <div class="refs-slot"></div>

    ```
    接著原本的註腳定義原樣保留。N 要等於清單行數（數清楚）。註腳原文**不要補**（Bear決定這次只排版）。分類清單裡的一句話描述只能根據註腳的書目標題寫，不要寫標題沒有的內容。
    - 若沒有註腳、只有一般連結清單 → 放在 `## 參考資料` 下維持清單即可，不加 refs-slot。
11. SVG／HTML 區塊內不能有空行。不要用破折號（——）。
12. 文章很短或不是病例文（例如工具介紹、Roam教學、Medium功能測試）→ 只做 2、3、4、6，其餘不套。

## 驗收（每篇都要跑，跑不過就修）
```bash
python3 /private/tmp/claude-501/-Users-tsaojian-hsiung-Desktop-Claude-Code---/454e74b6-a335-46f7-b2f8-0edaf1517224/scratchpad/textdiff.py /private/tmp/claude-501/-Users-tsaojian-hsiung-Desktop-Claude-Code---/454e74b6-a335-46f7-b2f8-0edaf1517224/scratchpad/orig/<檔名> ~/Documents/GitHub/agoodbear.github.io/content/post/<檔名>
curl -s localhost:1313/post/<slug>/ -o /tmp/<slug>.html   # slug＝檔名去 .md；改完等2秒
grep -c 'article-cards\|uses-article-cards' /tmp/<slug>.html     # ≥1
grep -o '<h1' /tmp/<slug>.html | wc -l                            # 跟改之前一樣（文章內不能新增H1）
```
- 另外用 python 把 /tmp/<slug>.html 裡 `class="article-body"` 之後、`<script` 拿掉後的內容找字面 `**`，必須0個。
- textdiff 的 DELETED 每一條都要講得出是規則1允許的哪一種；ADDED 只能是標題、圖說、Q編號、學習重點、參考資料清單。
- curl 必須 200。

## 回報格式（每篇一段，精簡）
`<檔名>`｜元件：…｜圖數：N｜DELETED：逐條列＋原因｜螢光：N處｜疑點：…（拿不準的圖說、標題層級、任何你不確定的）

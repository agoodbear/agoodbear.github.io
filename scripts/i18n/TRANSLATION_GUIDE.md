# 急診熊部落格｜英文版翻譯守則（譯者與審稿者都照這份）

英文版檔名：原文旁邊同名加 `.en`，例 `content/post/ecg-post-21.md` → `content/post/ecg-post-21.en.md`。
上線前必過：`python3 scripts/i18n/check_translation.py content/post/<原文>.md` → **PASS**。

## 1. 最高原則：忠實，不增不減
- 這是**翻譯**，不是改寫、不是摘要、不是潤稿。每一段、每一句、每一個 bullet、每一個圖說、每一個註腳都要在英文版有對應。
- **不補原文沒寫的醫學內容、不刪原文有的內容、不「修正」原文**。覺得原文有錯或前後矛盾 → 照翻，另外在回報裡列出來給作者決定。
- **所有阿拉伯數字原樣保留**（劑量、閾值、mm、mV、ms、%、CI、年份、人數、分鐘）。中文寫阿拉伯數字的，英文也寫阿拉伯數字，不改成英文單字（「16分鐘」→ 16 minutes，不寫 sixteen）。中文寫國字的（「六條原則」）英文可寫 six。
- 醫學數字、引用、作者、期刊、年份、DOI、PMID **一個字元都不能動**。

## 2. 引用原文（最容易捏造的地方）
- 中文版若同時放了英文原文（常見：teal 色區塊、引號內英文、`原文：`）→ 英文版**直接用那段英文原文**，一字不改。
- 中文版只有作者的中文翻譯、**沒有附英文原文** → 英文版**不可以自己「還原」成英文引句加引號**（那等於捏造引文）。改成不加引號的轉述，例：The authors argue that …；並在回報裡列出這些地方。
- 文獻書目（註腳裡的 reference）原本就是英文 → 原樣保留。

## 3. 結構必須一模一樣（檢查器會抓）
- Markdown 標題層級與數量、清單、表格欄數、粗體、斜體、`<mark>`、`<u>`、`<span id>`、`<details>` 等 HTML 標籤一個不少，**屬性（style、id、class、href、src）原樣**，只翻標籤裡面的人類文字。
- 圖片路徑一字不改；`![alt](path "title")` 的 alt 與 title（圖說）要翻。
- 註腳編號 `[^1]`、`[^2a]` 原樣，位置對應。
- shortcode（`{{< ... >}}`）原樣、順序不變；shortcode 裡面若有給讀者看的中文參數才翻。
- 站內文章連結（agoodbear.com/post/…）**原樣保留網址**——網站會自動改連英文版或標 (in Chinese)。
- 頁內錨點（`#fig-case-ecg1` 之類）原樣。
- 拿不準要不要保留中文的那一行（例如作者自創的中文口訣），可以中英並列，行尾加 `<!-- keep-zh -->` 讓檢查器放行，並在回報裡列出。

## 4. Front matter
- 保留：date、draft、toc、thumbnail、hero_ratio、categories、featured、typora 等技術欄位**原值**。
- 翻譯：title、description（description 要能當社群預覽文字，≤ 200 字元）。
- tags：英文 tag 原樣；中文 tag 翻成英文。
- **不要複製**原文 front matter 裡的 `# 🗂 改稿版次` 註解歷史。
- 加一行 `translated_from: "<原文檔名>"` 與 `translation_date: "YYYY-MM-DD"`。

## 5. 聲音：保留急診熊的口吻
- 第一人稱、同行對同行、口語、短句、有時很直接甚至有點嗆，偶爾自嘲。翻成**美國急診醫師之間會這樣講話**的英文，不要翻成教科書腔或新聞稿腔。
- 保留強調節奏：原文單獨一行的金句，英文也單獨一行、同樣粗體。
- 「ED man」「case」這類原文就用英文的詞照用。
- 台灣特有脈絡（健保、醫院名、地名、職稱）第一次出現時可用最少的字補一個括號說明（例：NHI (Taiwan's National Health Insurance)），不要加長段解釋。
- 不要加原文沒有的 emoji、驚嘆號、修辭問句。

## 6. 術語（ECG／急診，用英文文獻的標準寫法）
OMI / NOMI、STEMI / NSTEMI、STE (ST elevation)、STD (ST depression)、hyperacute T waves (HATW)、reciprocal change、terminal T-wave inversion、de Winter T waves、Wellens syndrome、Sgarbossa / Smith-modified Sgarbossa criteria、current of injury、subendocardial / subepicardial / transmural、culprit lesion、acute coronary occlusion (ACO)、TIMI flow、cath lab activation、serial ECGs、troponin、UDMI (Universal Definition of Myocardial Infarction)、Queen of Hearts (AI ECG model)、proportionality、reperfusion T waves、LBBB / RBBB、paced rhythm、ACS、aortic dissection (Type A / Type B)、POCUS。
- 中文口語的「塞住了」→ occluded；「打通」→ opened / reperfused；「送心導管室」→ take to the cath lab；「導程」→ lead(s)；「肢導」→ limb leads；「胸導」→ precordial leads。

## 7. 譯者回報（翻完一定要附）
1. 檢查器結果（要 PASS）。
2. 「轉述而非引用」的位置清單。
3. 「原文可能有誤／前後不一」的位置清單（照翻、沒改）。
4. 用 `keep-zh` 保留中文的行與理由。

## 8. 教訓（2026-10-09 三波共 69 篇、16 位審稿者的錯誤歸納；譯者必讀，優先於 §1–7）
<!-- 新教訓請加在對應分類最後一條，格式：- 規則 → 例（反例）。 -->

### 8.1 引號與引用（錯最多的一類，第一波每篇都有）
- **引號四分法**（檢查器會對「原文找不到逐字出處的引號英文」發 WARN，每條都要歸類）：
  ①作者自己的強調／反諷用語 → 可以加引號（「第二張比較明顯」→ "the second one is more obvious"）；
  ②術語標籤、表格欄名 → 可以（"returning physicians"）；
  ③**掛在別人名下的話**（指引、論文、推文、官員、媒體、法規）→ 只能用文中註腳／原文給的英文**逐字子字串**，否則拿掉引號改轉述；短短幾個字（"1 per bed"）也算；
  ④作者病例故事裡的**對話**（病人、家屬、救護無線電、同事）→ 正常英文引號或斜體都可以，句首大寫。
- 「」≠ 英文引號：作者用「」包住的中文轉述 → 粗體或一般子句。把中文轉述「還原」成英文還保留引號是第一大錯（ecg-post-18 一篇 5 處）。
- 句中夾的逐字英文原句（Smith 常說 You diagnose acute pericarditis at your peril!）要加引號，否則英文文法會斷掉。
- 作者對某人文章的中文轉述放在 blockquote → 英文讀起來像那人原話；引導句加 (in my own words)（中文框架支持時）並回報。
- 「」裡的量表項目、症狀名不加英文引號（除非文中給了英文原名），直接寫術語。
- 逐字引用的英文原文（引號內、「原文：」後面）一律不改，連錯字都照抄；作者自己寫的英文明顯拼錯可以改並回報。
- 圖說（markdown 圖片 title "…"）裡要再放引號用彎引號 “ ”。

### 8.2 數字、日期、單位
- 阿拉伯數字一個都不能少；原文給的精確數字前不加 about（兩公尺 → two meters）。
- 萬／億／百萬／成用自然英文，**精度不能掉**：764萬 → 7.64 million（圖表 7.64M）、467萬3155 → 4,673,155、159.4萬 → 1.594 million、2萬2 → 22,000、7成 → about 70%。不要寫「764 × 10,000」、不要加算式括號。
- 日期：8月28日 → August 28；2025/6/5 → June 5, 2025；月份寫英文字。民國年：段落或表格第一次 2024 (ROC 113)，之後可只寫西元。
- 範圍不是數列：「從5到7個變成10到15個」→ from 5–7 to 10–15。
- 位置描述保留數字：左2 → 2nd from the left。中文數字寫的分級可用 Level 1–5、Step 1、4th（WARN 沒關係）。
- **劑量句**原文看起來重複或錯亂（50 mg 寫兩次）→ 逐字照搬、回報；絕對不要順手整理。
- 眼鏡「度」→ degrees，第一次加 (100 degrees = 1.00 D)，數字不換算。

### 8.3 語氣強度與邏輯方向（醫學文最危險的一類）
- 強度詞不升不降：根本不 → not … at all；並不是 → isn't really（不是 usually isn't）；完全遇不到 → never（不是 almost never）；比較少 → less likely（不是 rarely）；不容易 → not easy / unlikely；一定的 → a certain / finite（不是 hard）；可能 → may（不是 can）；比較能 → better able（不是 best able）；原文斷言「都」「是」不加 may。
- 條件句先確認方向，翻完倒讀一次：「除非命中帶屎看了1000個PE，你才會有足夠的S1Q3T3」→ Only if you're unlucky enough… will you（反例 Unless…, you'll have… 意思反了）。
- 和／及 = and，或 = or；覺得原文邏輯該是 or 也照翻、回報。
- 「X，這是因為Y」是講原因 → That's because Y，不是通則 That happens when Y。
- 「也」= also / too，不是 already / even。
- 「不斷的 X／re-X」= over and over，不是 ongoing。
- 只差一個字的成對術語（箭頭／箭號）：先定一對一對應，再逐處檢查，比例 A:B 跟著對。
- 受詞結構要對：「把X病患…再看一眼…心電圖」＝看那些病患的心電圖。
- 狀態動詞保留時態：有沒有醒 = is awake（不是 wakes up）。
- 「比較 + 動詞」是比較級 hedge：比較 favor → leans more toward；可能得考慮 → may need to consider；並不重要 → isn't important（不是 doesn't matter much）。
- 「X小時前 + 症狀」= 發作時間：2小時前胸悶 → started 2 hours ago（不是 for 2 hours）。
- 情緒詞 暈倒~~ → I nearly fainted~~。
- 很可能 → very likely（不是 may well）；可能導致 → may cause。快不行了（病人快 arrest）→ about to crash。
- 賠上人生 → gamble away your life（不是 lose your life，會被讀成死亡）；百年 → century-old、數百年 → centuries-old，同一篇要逐處對。
- 不升級角色、不加強度形容詞：長官 → the higher-up（不是 senior physician）；有煙癮 → a smoker（不是 heavy smoker）。
- 重點清單裡的條件要留：「如果是X，影響的lead較多」→ If it's X, more leads are involved。

- 「可能」在「也可能X」「都可能X」句型最常被譯成 can（OMI圖鑑 pitfall 欄一批 5 處）→ may also X／may all X，不是 can also／can all。
- 中文「主題＋評論＋建議」的串句不要直翻成破碎片語（See a swirl:／One variable, watch…）→ 改成 When you see X: … 或 X: do Y。
- 主詞要對：「可能突然全斷」斷的是傳導 → may suddenly cut off conduction completely（不是 the block cuts off）。有標準 ECG 術語就用（一群一群 → grouped beating）。

### 8.4 不增不減
- 不偷修原文的醫學／物理小錯（凹透鏡照翻 concave lens）、不換成指引原文用字（作者寫心肺衰竭 = collapse，不換 SMFM 的 arrest）、不換成作者沒用的專有名詞（正常變化 ≠ normal variant）。全部照翻、回報。
- 不補臨床細節或形容詞：有心電圖波形 → an ECG waveform（不是 organized rhythm）；TnI上升(第二次) → (second time)（不是 second draw）；病人被放掉了 → missed（不是 sent home）；看到「離開」兩個字 → the word *Exit*（不是 the Exit sign）。
- 不補問號、驚嘆號、情緒（又輸了，別怕 ≠ lost again?）；不把主動說話者改被動（the nurse told me，不是 I was told）。
- 「發表」看上下文：口頭報告 → presented / made public，不是 published。
- 會誤讀的縮寫要展開（ST＝sinus tachycardia 時寫出來），清單、表格、圖說都要掃。這是澄清，不算加內容。
- 中文版在英文術語後的中文括號註解（A 型主動脈剝離）直接拿掉；解釋概念的括號要翻。
- 不造英文新動詞（syncopize → pass out）。
- 不發明趨勢：「呼吸不好、血壓又低」是狀態（poor / low），不是 got worse / stayed low；「因為」要留。不加強化詞：目前最常見 → currently the most common（不是 by far）。
- 指引的「建議」= recommended，不是 should get。
- 跟已定稿文章幾乎同文的（ecg-post-1 ↔ medium-2ea0b1）→ 共同句子直接沿用定稿版本，不要兩版各自漂移。

### 8.5 人名、機構、專有名詞
- **真人、期刊、機構、法規的英文名不准憑記憶或自己拼**：要本 session 的 live 來源（官網英文版、本人英文論文署名）。查不到 → 保留中文＋`<!-- keep-zh -->`，回報給作者。標題不能有中文時，改寫標題不放名字。
- 半翻譯的專有名詞用查證過的官方全名（倫敦 Vision Clinic → London Vision Clinic）。
- 法條引用：若法務部有官方英譯（law.moj.gov.tw/ENG），逐字引用並附網址；也要核對條、項編號。沒有官方英譯就不加引號轉述。
- 公司用上市英文名（富邦媒 → momo.com Inc.），不要翻中文簡稱；筆名也算真名（雷浩斯不可自拼），標題改寫不放名字、tag 拿掉。
- 政府／軍方單位查部會英文新聞稿用語；台灣物種不要換成外國近似種（溪哥 ≠ creek chub）→ 拼音＋簡短說明。
- 官方步道系統名可能是複數（淡蘭古道 → Tamsui-Kavalan Trails，forest.gov.tw/en）。
- 查不到官方英文名的會議、組織：用小寫描述性片語（quarterly joint emergency case conference for eastern Taiwan），不要大寫得像正式名稱。
- 術語表裡帶 now 的院名照抄 now。
- 暱稱（大師阿嬤＝Amal Mattu）第一次括號真名，之後擇一。名人第一次出現補最少身分說明。
- 原文沒交代性別（病人、孩子、CV man、護理師、講者）→ they / the patient；中文「他」不代表男性。

### 8.6 結構、front matter、參考文獻
- 原文沒有 description 就不寫；壓到 ≤200 字元時縮用字、先保核心金句，不刪子句。
- front matter 行尾的中文技術註解可刪或翻；medium-* 的 canonicalURL／medium_url／medium_id 原樣。
- tags 是分類鍵：英文 tag 拼錯也照原樣；中文 tag 翻英文並跟 §9 一致。
- 中文參考文獻：英譯標題放方括號＋(in Chinese)；沒網址再加 (in Chinese: 原中文標題)＋keep-zh。Amazon 標題尾巴的「圖書」拿掉。
- 註腳引用站內其他文章：用那篇英文版既有的 title，站名 ER Bear's Heart Notes。系列文（上下集）引同一文獻要用同一個英文標題。
- SVG 文字只改字、不動座標，全形括號改半形。
- **不改作者的縮寫寫法**：Post.wall、inf.STEMI、Ant.STEMI、Post.leads 原樣（不加空格）；原文本來就有空格的（inf. leads、Coronary a.）也照抄。檢查器會 WARN。（第三波一次修回 86 處。）
- 一個字一個 `<font>` 的示範（漸層文字）：保持 span 數量，句子照實翻，不加強化詞。

### 8.7 跟檢查器相處
- **禁止為了 PASS 在英文版加任何內容（隱藏註解、多餘年份）或扭曲英文**（about 7 in ten、8/28、panel left 2 都是反例）。檢查器誤判就寫進回報，由統籌者修檢查器——這次 69 篇前後修了 20 多個檢查器漏洞，大多是譯者、審稿者回報的。
- WARN 只是請審稿看一眼，不需要清到 0。

### 8.8 口語、梗、台灣脈絡
- 台式雙關（阿嬤腫＝Amazon、業配文＝葉佩雯）梗可以放掉，語氣要留。
- 訓練情境的「很小很小的時候」＝很資淺的時候（a very junior doctor）。

## 9. 累積術語表（審稿確認過的譯法，跨文章統一）
| 中文 | English | 備註 |
|---|---|---|
| 招式／心法 | moves / the underlying method | 作者常用的「findings vs principles」對比 |
| 整體判讀 | holistic reading | 不用 global reading |
| 五宮格 | five-box grid (Rate → Rhythm → Axis → Interval → Ischemia) | 作者的固定框架 |
| 熊評論 | Bear's take | 固定標籤 |
| 證據堆疊法 | evidence-stacking approach | |
| 大師阿嬤 | the Master Grandma (Amal Mattu) | 只在第一次出現括號真名（待作者確認） |
| Call CV man | call the CV man | 保留作者英文 |
| 擋下OMI | catch the OMI | 常見結尾句 |
| 可搶救心肌 | salvageable myocardium | |
| 上凹 (ST) | upwardly concave / concavity | 依 Smith 2006 用語 |
| 塞住／打通 | occluded / opened, reperfused | |
| 導程／肢導／胸導 | lead(s) / limb leads / precordial leads | |
| 健保 | NHI (Taiwan's National Health Insurance) | 第一次出現括號說明 |
| 閻王 | the King of Hell | 作者常用比喻 |
| 2診 | Room 2 (consult room) | 診間編號 |
| 小戴 | Tai Tzu-ying (Taiwan's badminton star) | |
| 熊評論 | Bear's take: | |
| 翻成白話文 | In plain words: | |
| 熊:（文中插話） | Bear: | |
| 紅字 troponin | a red-flagged troponin | |
| 考慮／很像／確診（UA 分級） | considered / more likely / confirmed | 對齊 UDMI 分層用語 |
| 專師 | nurse practitioner | |
| STE 1格 | 1 small box of STE | 保留作者單位，不換成 1 mm |
| 娘家北榮 | my home training hospital, Taipei Veterans General Hospital | |
| 講到爛的 | the one we've talked to death | |
| 大師（Smith、Grauer、Mattu） | the great Smith / the master, Ken Grauer | |
| 台灣急診醫學會 | Taiwan Society of Emergency Medicine (TSEM) | |
| 衛福部／統計處 | Ministry of Health and Welfare (MOHW) / MOHW Department of Statistics | |
| 健保署 | National Health Insurance Administration (NHIA) | |
| 健保會 | MOHW National Health Insurance Committee | |
| 審計部 | National Audit Office | |
| 急專 | board-certified emergency physician(s) | 統籌決定（10-09） |
| 待床 | boarding | |
| 留觀 | observation | |
| 點數（健保） | NHI points | |
| 重度級／中度級／一般級急救責任醫院 | advanced / intermediate / general-level emergency responsibility hospitals | 已核：衛福部 2024 Taiwan Health and Welfare Report p.52 |
| 垃圾桶診斷 | wastebasket diagnosis | |
| 反骨（不照 criteria 的 pattern） | a real rebel that breaks the rules | |
| 恨天高（極高） | sky-high | |
| 格（ECG 小格） | small box(es) | |
| 檢傷一～五級 | triage Level 1–5 | |
| 放掉（病人） | missed | 不是 sent home |
| 喇嘴皮子 | talk (the CV man) into it | |
| 補刀 | piled on / twisted the knife | |
| 開砲 | firing away | |
| 寧可多抓／寧可少抓 | better to over-call / better to under-call | |
| 死循環 | a loop with no exit | |
| 昏痛喘Shock低血壓（不穩定徵象口訣） | altered mental status, pain, dyspnea, shock, hypotension | |
| 三大寡婦製造者 | the big three widow makers | |
| 救護弟兄 | a fellow EMT | |
| 陽大／陽交大附醫 | NYCU Hospital (National Yang Ming Chiao Tung University Hospital) | 第一次全名 |
| 打掃阿姨 | the ED cleaning lady | |
| 死馬當活馬醫 | a Hail Mary | |
| 伸頭一刀、縮頭也是一刀 | stick your neck out and you get the blade; pull it back and you get the blade too | |
| 業配文 | sponsored plug | |
| 心超 | echo | |
| 大林慈濟 | Dalin Tzu Chi Hospital | |
| 評鑑 | hospital accreditation | |
| 石崇良 | Shih Chung-liang | 已核（Taiwan News、ECCT） |
| 部分負擔 | copayment | |
| 出口壅塞 | exit block | |
| 執業登記 | practice registration | |
| 新科急專 | newly board-certified emergency physicians | |
| 竹東賣玻璃 | Zhudong glass-seller | 主動脈剝離諧音梗；第一次加一句說明 |
| 今晚苦主 | tonight's unlucky on-call | |
| 熊醫師 | Dr. Bear | |
| 丁阿姨（Tintinalli 教科書） | Auntie Tintinalli | 第一次加 (yes, the Tintinalli textbook) |
| 高粱 | kaoliang (Taiwanese sorghum liquor) | |
| 一拖拉庫 | a truckload | |
| 母難月 | the month of my birthday (my mother's day of suffering, as we say) | |
| 度（眼鏡、近視度數） | degrees | 第一次出現加 (100 degrees = 1.00 D)，數字照原文不換算 |
| 一級病患（檢傷） | a triage level 1 patient | |
| 醜媳婦總要見公婆 | the moment of truth | |
| 打怪 | fight the monsters | |
| 健體（健美項目） | men's physique | |
| 傻眼 | dumbfounded | |
| 強心針（CPR 情境） | epinephrine | 不是 inotrope |
| 神主牌（在拜） | worship it like a sacred ancestral tablet | |
| 兵家常見之事 | happens all the time in this business | |
| 英雄→狗熊 | hero → zero | |
| 大枕頭 Tintinalli | the Tintinalli pillow | 作者固定梗 |
| 隨隊醫師 | team doctor | |
| 玉山／嘉明湖山屋／向陽山屋 | Jade Mountain / Jiaming Lake Cabin / Xiangyang Cabin | |
| 學習重點（notice 標題） | Key Takeaways | |
| 牛奶針（propofol） | milk of amnesia | 英文圈現成綽號，待作者確認 |
| 叫叫CABD | check responsiveness, call for help, CABD | 台灣 BLS 口訣，兩個「叫」都要 |
| 意識不清 | impaired consciousness / altered mental status | 不是 confused |
| 學弟／學妹（學長稱呼） | junior | 不是 kid |
| 夜黑風高 | one dark and stormy night | |
| 胸痛到不行 | crushing chest pain | |
| 衝導管 | rush to the cath lab | 保留急迫感 |
| 撿到槍 | like you just found a loaded gun | |
| 急救室 | resus room | |
| 不給力 | isn't pulling its weight | |
| 交班 | handoff / shift change | |
| 膝蓋反射（直覺想到） | knee-jerk reflex | |
| 印入腦簾／深烙在腦海 | burn it into your brain | |
| 買帳 | buy it | |
| 搶救回來的心肌 | salvaged myocardium | |
| 年獸不講武德 | the Nian beast that doesn't play fair | 過年班笑話 |
| 101遠見眼科／張聰麒 | （保留中文） | 查無英文名 |
| 英國倫敦 Vision Clinic | London Vision Clinic | 已核 londonvisionclinic.com |
| 竹東榮民醫院／竹榮 | Zhudong Veterans Hospital (now Taipei Veterans General Hospital, Hsinchu Branch) | 已核官網；第一次括號現名 |
| 蔡校長（蔡依橙） | Principal Tsai (Dr. I-Chen Tsai, founder of InnovaRad) | 已核 i-chentsai.innovarad.tw；社群暱稱 |
| 新思惟國際 | InnovaRad | |
| 下鄉 | a rural posting / out in the countryside | |
| 太座 | the boss at home (my wife) | |
| 葛瑪蘭客運 | Kamalan bus | |
| 急診熊心聲部落格 | ER Bear's Heart Notes | 站台英文名 |
| 高偉峰 | Wei-Fong Kao | 依 HAMB 2009 論文署名（中度證據，待作者確認） |
| 王士豪 | Shih-Hao Wang | 依 Lake Louise 2018 委員名單（待作者確認） |
| 台灣東洋 | TTY Biopharm | |
| 高山症 | altitude sickness（診斷語境 AMS） | |
| 經驗性抗生素 | empiric antibiotics | |
| 感染源控制 | source control | |
| 仿單 | package insert | |
| 白血球生長素 | G-CSF | |
| 反覆返診 | return visit | |
| 箭頭／箭號（圖示標註） | arrowhead / arrow | 待作者確認 |
| 養龍蝦 | raising a lobster (running an OpenClaw agent) | |
| 第二大腦 | second brain | |
| 推友 | someone on Twitter | |
| 實習醫學生 | medical students on rotation | 不是 intern（美國 intern＝PGY-1） |
| 小型葉醫師（PCPS） | mini Dr. Yeh (PCPS; ECMO's Mandarin name, Ye-ke-mo, sounds like a Dr. Yeh) | 只在第一次說明 |
| 假陽性 | false positive | |
| 起手式 | standard opening move | |
| 東部急診聯合病例討論季會 | quarterly joint emergency case conference for eastern Taiwan | 描述性，無官方英文 |
| 捕鰻苗 | catching glass eels | |
| 過度換氣 | hyperventilation (attack) | |
| 搭配服用傳送門 | best taken together: portal here | 作者固定梗 |
| 醫療法 | Medical Care Act | 已核 law.moj.gov.tw/ENG |
| 長官（非臨床） | the higher-up | |
| 不起訴處分書／再議 | non-prosecution decision / application for reconsideration | |
| 地檢署 | District Prosecutors Office | |
| 選任辯護人 | retained defense counsel | |
| 社服室／社服主任 | social services office / social services director | |
| 縣衛生局 | [County] Public Health Bureau | |
| 醫事審議委員會 | the MOHW medical review committee | 描述性，無官方英文 |
| 淡蘭古道 | Tamsui-Kavalan Trails | forest.gov.tw/en |
| 劉克襄 | Liu Ka-shiang | 文化部 Books from Taiwan |
| 潘健成 | Pua Khein-Seng | |
| 富邦媒 | momo.com Inc. | |
| 民航局 | Civil Aeronautics Administration (CAA) | |
| 九寮溪自然步道 | Jiuliao River Trail | forest.gov.tw/en |
| 雪山山脈 | Snow Mountain Range | |
| 雷浩斯 | （保留中文） | 查無英文名 |
| 小蜜蜂（補給車） | Little Bee (a roving support car) | |


## 10. 資料檔（OMI圖鑑、ECG動畫館）
- 英文不是另一份 .en.md，而是對照檔 `data/omi_atlas_en.yaml`、`data/ecg_anim_en.yaml`：只放給讀者看的字，用 id 對上中文資料檔；清單逐項對位。
- 新 finding／新動畫：`python3 scripts/i18n/data_i18n.py skeleton omi|anim` 產骨架 → 翻好貼進對照檔 → `python3 scripts/i18n/data_i18n.py check` 必須 PASS。
- 中文改字後 check 會報 STALE：照新中文改英文，改完 `python3 scripts/i18n/data_i18n.py rehash`。
- 資料檔不能留中文（沒有 keep-zh）；查不到英文名的人名／院名就改寫成不帶名字。
- YAML 單引號字串裡的撇號要寫兩個（''）。

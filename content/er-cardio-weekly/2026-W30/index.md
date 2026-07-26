---
title: "小得像沒事的心電圖，最會出事"
subtitle: "_幅度小不代表事情小——差點釀災的 ST 只有一點點、機器把不規則寫成心房顫動、「反覆癲癇」要先排心律不整、LVH 電壓會冒充前壁抬高；這週的線索全藏在你差點略過的地方。_"
shortTitle: "小變化最會出事"
slug: "2026-W30"
week: "2026-W30"
weekRange: "2026-07-20 — 2026-07-26"
date: 2026-07-26T10:00:05+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 202
picked: 5
tags: ["OMI", "電生理", "Resus"]
practiceChanges:
  - text: "胸痛心電圖「看起來只有一點點」時別放行——<b>調舊圖比對、10–15 分鐘連拍</b>，把小而不對稱的 ST/T 變化當成閉塞證據去追"
    source: "Smith ECG Blog 7-24"
    href: "https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures"
  - text: "「反覆癲癇」或不明原因意識喪失，每一次都做一張 <b>12 導程並自己判讀</b>——量 QTc、找 Brugada 型態、delta 波與傳導阻滯，別讓舊標籤擋住心律不整"
    source: "Smith ECG Blog 7-21"
    href: "https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=40%20year%20old%20female"
  - text: "機器判讀寫 <b>atrial fibrillation</b> 不等於 AF——先確認 R-R 是否真的毫無規律，再到 <b>V1</b> 找心房活動，兩關都過才談抗凝與 rate control"
    source: "ECG Weekly 7-20"
    href: "https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=computer%20as%20atrial%20fibrillation"
  - text: "V1–V3 的 ST 抬高先扣掉 <b>LVH</b>：電壓準則<b>特異度高、敏感度低</b>，符合可支持、不符合不能排除；形態像 LVH 時改用<b>比例</b>而非毫米判斷"
    source: "LITFL ECG Library 7-20"
    href: "https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance"
  - text: "慢性胸痛、能運動的病人別反射性送導管——臨床變項＋運動心電圖模型<b>陰性預測值 98.2%</b>、可讓 41% 免除侵入性攝影；但這套模型<b>不適用於急性胸痛</b>"
    source: "European Heart J 7-23"
    href: "https://doi.org/10.1093/eurheartj/ehag464#:~:text=98.2%25"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "小變化也可能是閉塞" }
  - { id: "s2",  num: "02", title: "反覆癲癇先排心律不整" }
  - { id: "s3",  num: "03", title: "不規則 ≠ 心房顫動" }
  - { id: "s4",  num: "04", title: "LVH · STEMI 的冒充者" }
  - { id: "s5",  num: "05", title: "運動心電圖排除左主幹" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 「看起來很小」的那組 ST，差點釀災 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures" anno="看那組<b>幅度很小、卻不該出現在這個 QRS 上</b>的 ST／T 變化——重點不是它有幾格，而是它<b>不對稱、有方向性、且和臨床對得上</b>" linktext="到 Smith 部落格看這張圖 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）7-24：一位 50 多歲、無心臟病史但有癲癇病史的病人因胸悶到檢傷，心電圖乍看幾乎沒東西，標題直說「看起來很小，卻差點是一場災難」。[^smith-small-07-24]

**為什麼要在意：** 幅度是 STEMI 準則的語言，不是冠狀動脈閉塞的語言。在「已被取消的導管室啟動」這種最難的一群裡（185 例取消、17 例最終證實為 OMI），STEMI 準則對 OMI 的敏感度僅 <mark>47.1%，AI 心電圖演算法為 94.1%</mark>（p=0.005），特異度並未變差（66.1% vs 73.2%）。<mark>差別不在圖變大，而在你有沒有把小變化當一回事。</mark> {{< grade "回溯 · 單中心 · n=17（OMI）· 假說級" kind="retro" >}} [^friedman-ai-2601]

**所以呢：** 心電圖「只有一點點」時，先做三件事：調舊圖比對、10–15 分鐘連拍、把症狀是否持續講給心臟科聽。毫米數不該是你唯一的門檻。

**台灣情境：** 檢傷心電圖常常只有一張、也常常沒有舊片可比。把「調舊圖＋連拍」寫成胸痛流程的固定動作，成本極低；若院內有 AI 判讀輔助，最該用的地方正是這種「不到標準、但你不安心」的圖。

---

## 「反覆癲癇」的病人，先排心律不整 {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=40%20year%20old%20female" anno="看這位「反覆癲癇」40 多歲女性的心電圖——意識喪失要先問<b>是抽搐，還是心律不整</b>：<b>QTc、Brugada 型態、delta 波、傳導阻滯</b>一格一格找" linktext="到 Smith 部落格看這張圖 ↗" >}}

**是什麼：** Smith 心電圖部落格 7-21，由 Matthew McArthur 撰寫：一位 40 多歲女性，被目擊、約 3 分鐘的意識喪失，病史上寫著「反覆癲癇」。[^smith-seizure-07-21]

**為什麼要在意：** 「癲癇」是最會黏在病歷上的標籤之一。心因性猝倒被目擊者描述成抽搐（缺氧性肌陣攣）並不罕見，而標籤一旦成立，之後每一次發作都不會再有人做心電圖。<mark>心律不整型的意識喪失，第一次誤判就可能沒有第二次機會。</mark> {{< grade "案例 · 教學 · 觀點級" kind="opinion" >}}

**所以呢：** 每一次「癲癇發作」進 ED，都做一張 12 導程並親自看過：量 QTc、看 V1–V2 有無 Brugada 型態、找 delta 波與房室傳導阻滯；同時問家族早發猝死史、發作前有無心悸或運動誘發。

**台灣情境：** 台灣 ED 的「已知癲癇」回頭客很多，常直接走抽血加抗癲癇藥血中濃度。把 12 導程放進意識喪失的常規套餐，是幾乎零成本的防漏網動作。

---

## 不規則，不代表就是心房顫動 {#s3}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=computer%20as%20atrial%20fibrillation" anno="看這張<b>被電腦判為 atrial fibrillation</b> 的圖——II 導程 P 波難認時改看 <b>V1</b>，並先確認「不規則」是不是真的<b>毫無規律</b>" linktext="到 ECG Weekly 看這張圖 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）7-20〈ECG Hallucinations: When Irregular Is Not Atrial Fibrillation〉：69 歲男性胸痛，電腦判讀寫 atrial fibrillation，節律不規則、II 導程 P 波難以辨認，乍看非常合理。[^mattu-af-07-20]

**為什麼要在意：** 這個標籤會一路跟著病人走——抗凝、rate control、長期分類全建立在上面。若那個「不規則」其實有可重現的規律（未下傳的心房早期收縮、二度房室傳導阻滯、竇性心律不整），處置方向完全不同。<mark>電腦判讀是意見，不是診斷。</mark> {{< grade "案例 · 教學 · 觀點級" kind="opinion" >}}

**所以呢：** 診斷 AF 前過兩關：一，用卡尺比 R-R，確認不規則是否真的毫無型態；二，到 V1（必要時加 Lewis lead）確認真的沒有心房活動。兩關都過，再談抗凝。

**台灣情境：** 台灣 ED 心電圖機的自動判讀常被直接抄進病歷與交班，「AFib」四個字一旦寫上，門診幾乎不會回頭質疑。把「先看 V1」變成看到自動判讀時的反射動作。

---

## LVH：急診最常見的 STEMI 冒充者 {#s4}

{{< ecg-linkout href="https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance" anno="一次看完 <b>Sokolow-Lyon、Cornell、Romhilt-Estes</b> 各組電壓準則的<b>診斷表現與限制</b>——重點是它們特異度高、敏感度低，且會自己製造 ST-T 假象" linktext="到 LITFL 看 LVH 準則整理 ↗" >}}

**是什麼：** LITFL 心電圖圖書館 7-20 更新〈ECG criteria for left ventricular hypertrophy〉，由 Mike Cadogan 與 Robert Buttner 撰寫，把主要左心室肥厚（LVH）準則的沿革、診斷表現、限制與現代用法整理成一頁。[^litfl-lvh-07-20]

**為什麼要在意：** LVH 是急診最常見的 STEMI 冒充者之一——高電壓帶來的<mark>不一致性（discordant）ST 抬高與深 T 波倒置</mark>，長得很像前壁閉塞或 Wellens 型態。而電壓準則整體是<mark>特異度高、敏感度低</mark>：符合可以支持 LVH，不符合不能排除。 {{< grade "教學 · 準則回顧 · 參考級" kind="guide" >}}

**所以呢：** 看到 V1–V3 ST 抬高，先算一次電壓、看 QRS 是否加寬與是否有 strain 型態；若形態符合 LVH，改用比例（ST 抬高相對 QRS 幅度）而不是毫米來判斷。仍不安心就回到臨床脈絡與連拍。

**台灣情境：** 洗腎與長期高血壓病人在台灣 ED 佔比高，LVH 底圖幾乎是常態。這群人真的發生 OMI 時，同樣會被 LVH 蓋台——所以 LVH 不是「解釋完就結案」的答案，而是「先扣除、再看剩下的」。

---

## 運動心電圖能排除左主幹病灶到什麼程度 {#s5}

{{< ecg-linkout href="https://doi.org/10.1093/eurheartj/ehag464#:~:text=98.2%25" anno="看 MASTER 研究怎麼用<b>臨床變項＋運動心電圖</b>排除左主幹／等效病灶——<b>NPV 98.2%</b>、41% 病人可免除侵入性冠脈攝影，代價是每省 58 次漏 1 例" linktext="到 European Heart Journal 看 MASTER 原文 ↗" >}}

**是什麼：** European Heart Journal（歐洲心臟期刊）7-23 的 MASTER 研究：多中心病例對照，335 名左主幹狹窄 ≥50%（或 LAD 近端與迴旋支近端皆 ≥70% 的等效病灶）病人，以 1:3 配對 797 名對照，全部在極量運動心電圖後接受侵入性冠脈攝影。[^master-ehj-07-23]

**為什麼要在意：** 模型 AUC 為 0.78；在盛行率 5% 的假設下，陰性預測值 98.2%，意即<mark>41% 的慢性冠症病人可以安全免除冠脈攝影</mark>，代價是<mark>每省下 58 次攝影會漏掉 1 例</mark>左主幹／等效病灶。 {{< grade "回溯 · 多中心病例對照 · n=1132 · 假說級" kind="retro" >}}

**所以呢：** 這是給「慢性冠症、能運動」的病人用的分流工具，不是急性胸痛的排除工具。ED 端的用法是反向的：當病人近期做過極量運動心電圖且結果乾淨，這條資訊在排除左主幹上是有份量的證據，可以納入你的處置判斷。

**台灣情境：** 冠脈電腦斷層並非每家醫院隨時可得（尤其夜間與區域醫院），運動心電圖仍是常見的門診工具。認清它的分流價值，也就認清它的界線：對正在痛、或休息心電圖有動態變化的病人，這套模型完全不適用。

---

## 延伸與出處 {#more}

### 這週的共同線

本週視窗（2026-07-20 — 2026-07-26）的訊號，都落在同一個位置：**你差點略過的地方**。差點釀災的 ST 只有一點點（卡 01）、「反覆癲癇」的標籤蓋掉了一張還沒做的 12 導程（卡 02）、電腦判讀的四個字把節律定了案（卡 03）、LVH 的高電壓製造出像前壁閉塞的 ST-T（卡 04）、而一個「已經做過而且乾淨」的運動心電圖，其實比你以為的更有排除力（卡 05）。

共同解法只有一句：**先確認你看的是幅度，還是意義**。

值得一提的是，Amal Mattu 在一個月內把「不規則被誤讀成心房顫動」這個陷阱連出兩題——7-06 是敗血症發燒發抖下的偽 AF，7-20 是胸痛病人的電腦判讀 AF。同一個坑連挖兩次，通常代表它真的常見。[^mattu-af-07-06]

### 期刊速報

**判讀與教學**：Emre Aslanger 團隊在 Journal of Electrocardiology（心電圖學期刊）以心臟磁振造影（CMR）回頭檢驗前壁梗塞的心電圖定位——傳統定位分類與 CMR 的梗塞分布<mark>幾乎沒有一致性（κ=0.122，P=0.24）</mark>，但全域 ST 段總量與梗塞大小相關（標準化 β=0.307）。白話說：心電圖比較能告訴你「傷了多少」，而不是「傷在哪裡」。[^aslanger-cmr-06-28]

同一批被本週掃描視窗撈進來的還有 Jesse McLaren 參與的 CJEM（加拿大急診醫學期刊）調查：<mark>60% 的加拿大急診住院醫師訓練計畫沒有結構化心電圖課程、57.4% 住院醫師每月自學不到 1 小時</mark>，且自評能力隨年資上升的同時，對 VT、高血鉀、心肌梗塞的自信超過文獻已知的實際判讀變異。心電圖教學的缺口不只是台灣的問題。[^mclaren-cjem-06-20]

**電生理／節律**：Europace（歐洲心臟節律學會期刊）7-20 的專家觀點回顧傳導系統節律器（conduction system pacing）作為右心室與雙心室節律器更生理化替代方案的現有證據與適應症。[^europace-csp-07-20] JAMA Cardiology（美國醫學會心臟學期刊）7-22 則把視線移到被長期忽略的心房不同步，討論 Bachmann bundle pacing 作為心房再同步的新標的。[^jamacardio-bachmann-07-22]

Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理）7-24 一篇高密度標測研究指出，大動脈轉位行心房轉流手術後的典型心房撲動，關鍵在手術切口與三尖瓣環之間的「隔部走廊」——<mark>92% 的環三尖瓣撲動可在此找到慢傳導（<30 cm/s）</mark>，支持這群病人常規做腔靜脈-三尖瓣峽部電燒。[^circae-flutter-07-24]

**遠距監測陷阱**：European Heart Journal 7-21 報告一例心房間電分離（interatrial electrical dissociation），在裝置遠距監測上呈現為「偽心室頻脈」。遠距警報也需要人眼覆核。[^ehj-pseudovt-07-21]

**瓣膜與運動測試**：JAMA Cardiology 7-22 的 EARLY TAVR 跑步機登錄研究顯示，看似無症狀的重度主動脈瓣狹窄病人中，<mark>15.2% 運動測試呈陽性</mark>；測試本身安全（無死亡、昏厥、電擊復律），2 年全因死亡率 5.7%、1 年瓣膜置換率 79.9%，但仍有 20% 已具適應症者在 1 年時未接受治療。[^jamacardio-tst-07-22]

### 誰這週有新作

Stephen Smith 的 Dr. Smith's ECG Blog（Smith 心電圖部落格）本週視窗連發兩則：7-21 由 Matthew McArthur 撰寫的反覆癲癇案例（卡 02）、7-24 的「看起來很小卻差點釀災」胸悶案例（卡 01）。Amal Mattu 的 ECG Weekly（心電圖週刊）7-20 續談偽心房顫動（卡 03）。LITFL ECG Library 7-20 更新 LVH 準則整理（卡 04）。

Emre Aslanger（CMR 對照前壁梗塞定位）與 Jesse McLaren（CJEM 心電圖課程調查）的論文於 6 月上線、本週才進入我們的 PubMed 掃描視窗，已列於上方期刊速報。Willy Frick、Pendell Meyers、Ken Grauer、Sam Ghali 本週視窗內無新的可引用作品。

## 引用 {#refs}

[^smith-small-07-24]: Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-24。原文：「A 50 something with no previous cardiac history, but with history of seizures, presented to triage with a…」（標題：Chest discomfort. It looks very small but could have been a disaster.）。 https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures

[^friedman-ai-2601]: Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等，Journal of Electrocardiology（心電圖學期刊），2026-01。原文：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005), and a non-significantly lower specificity (66.1% vs 73.2%, p = 0.090)」。 https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25

[^smith-seizure-07-21]: Matthew McArthur／Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-21。原文：「I saw a 40 year old female who had a ~3 minute, witnessed loss…」（標題：Recurrent Seizures in a 40-something woman）。 https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=40%20year%20old%20female

[^mattu-af-07-20]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-07-20。原文：「His ECG is interpreted by the computer as atrial fibrillation, a diagnosis that could significantly alter his evaluation and long-term management」。 https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=computer%20as%20atrial%20fibrillation

[^mattu-af-07-06]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-07-06。原文：「The computer interpretation reads atrial fibrillation. The diagnosis is then confirmed by the interpreting physician… Is the rhythm truly irregularly irregular?」。 https://ecgweekly.com/weekly-workout/the-rhythm-behind-the-irregularity/#:~:text=irregularly%20irregular

[^litfl-lvh-07-20]: Mike Cadogan、Robert Buttner，LITFL ECG Library（LITFL 心電圖圖書館），2026-07-20。原文：「Review the principal ECG criteria for left ventricular hypertrophy, their historical development, diagnostic performance, limitations and modern use」。 https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance

[^master-ehj-07-23]: De Carlo M、Malanima M、Baglietto L、Bazan L 等，European Heart Journal（歐洲心臟期刊），2026-07-23。原文：「negative predictive value was 98.2%. Thus, CAG could be safely avoided in 41% of patients, missing one LMCAD/LMCAD-equivalent diagnosis for every 58 CAGs safely spared in patients without them」。 https://doi.org/10.1093/eurheartj/ehag464#:~:text=98.2%25

[^aslanger-cmr-06-28]: Aslanger EK、Aggül B、İnan D、Taşdelen N 等，Journal of Electrocardiology（心電圖學期刊），2026-06-28。原文：「conventional ECG localization categories and simplified ST-axis orientation showed poor or inconsistent correspondence with CMR-defined infarct distribution, whereas global ST-segment burden showed a modest association with infarct size」。 https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=global%20ST-segment%20burden

[^mclaren-cjem-06-20]: Mastrangelo E、El-Baba M、Patocka C、McLaren JTT 等，CJEM（加拿大急診醫學期刊），2026-06-20。原文：「A majority (60%) of program directors reported no structured ECG curriculum, and most (57.4%) residents reported < 1 h of ECG self-study per month」。 https://pubmed.ncbi.nlm.nih.gov/42323520/#:~:text=no%20structured%20ECG%20curriculum

[^europace-csp-07-20]: Burri H、Mežnar A、Witte K，Europace（歐洲心臟節律學會期刊），2026-07-20。原文：「Conduction system pacing is a major milestone in cardiac stimulation and is being increasingly adopted as a more physiological alternative to right ventricular and biventricular pacing」。 https://doi.org/10.1093/europace/euag181

[^jamacardio-bachmann-07-22]: Kim J、Kaza N、Zuhair M、Naraen A 等，JAMA Cardiology（美國醫學會心臟學期刊），2026-07-22。原文：「Bachmann bundle pacing represents a potential strategy to restore physiological atrial activation by engaging the dominant interatrial conduction pathway」。 https://doi.org/10.1001/jamacardio.2026.2226

[^circae-flutter-07-24]: Ditac G、Johner N、Verhaeghe L、Plant A 等，Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-07-24。原文：「Slow conduction (<30 cm/s) was identified in this septal corridor in 92% of peritricuspid flutters and in 85% of patients during sinus or paced rhythm」。 https://doi.org/10.1161/circep.125.014777

[^ehj-pseudovt-07-21]: Boiteux C、De Larochellière H、Steinberg C，European Heart Journal（歐洲心臟期刊），2026-07-21。原文：「Interatrial electrical dissociation resulting in pseudo-ventricular tachycardia on remote monitoring」。 https://doi.org/10.1093/eurheartj/ehag552

[^jamacardio-tst-07-22]: Généreux P、Schwartz A、Lindman B、Chhatriwalla A 等，JAMA Cardiology（美國醫學會心臟學期刊），2026-07-22。原文：「TST was found to be safe and identified symptoms and AVR indication in approximately 15% of patients. However, 20% of those patients remained untreated at 1 year, despite having an indication for prompt treatment」。 https://doi.org/10.1001/jamacardio.2026.2527
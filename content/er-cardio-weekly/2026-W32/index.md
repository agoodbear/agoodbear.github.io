---
title: "電腦說沒事，學生說有事"
subtitle: "_這週的三張圖都通過了機器的檢查：正常判讀的心電圖底下是完全閉塞的冠狀動脈、前壁 ST 壓低不是前壁缺血、被歸成心包炎的抬高其實是閉塞——差別在有沒有人願意聽那個說「我覺得怪怪的」的學生。_"
shortTitle: "電腦說沒事"
slug: "2026-W32"
week: "2026-W32"
weekRange: "2026-08-03 — 2026-08-09"
date: 2026-08-09T10:00:05+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 178
picked: 4
tags: ["OMI", "電生理", "Resus"]
practiceChanges:
  - text: "胸痛病人的心電圖「正常」不等於沒有閉塞——<b>症狀持續就連拍</b>，並把第一張與第二張並排比對 T 波形態，不要只看電腦結論"
    source: "Smith ECG Blog 8-06"
    href: "https://drsmithsecgblog.com/can-a-patient-be-lucky-if-he-goes-into-ventricular-fibrillation-yes-but-accurate-ecg-interpretation-prevents-it/#:~:text=ventricular%20fibrillation"
  - text: "V1–V3 的 ST 壓低配上<b>高聳前壁 R 波</b>，先假設是後壁 OMI 的互為倒影——加做 V7–V9，不要當成前壁缺血收進去"
    source: "ECG Weekly 8-03"
    href: "https://ecgweekly.com/weekly-workout/ummc-cases-part-i-three-ecgs-that-reward-a-second-look/#:~:text=ST-segment%20depression%20in%20leads%20V1%20through%20V3"
  - text: "把「年輕人、瀰漫性 ST 抬高、應該是心包炎」這條捷徑<b>從反射動作降級為排除診斷</b>——先問有沒有互為倒影的壓低、有沒有區域分布"
    source: "PMcardio validation 8-03"
    href: "https://x.com/RobertHermanMD/status/2084189438729486396"
  - text: "左束支傳導阻滯或心室節律的病人不要放棄心電圖——用 <b>Smith 修正版 Sgarbossa</b>（比例判準）而不是原始版的絕對毫米數"
    source: "Smith ECG Blog 8-03"
    href: "https://x.com/smithECGBlog/status/2084252382443999546"
  - text: "前壁心肌梗塞的心電圖<b>不要拿來猜梗塞位置</b>——導程分類與心臟磁振造影的一致性差（κ=0.122）；ST 段總負荷才與梗塞大小相關"
    source: "J Electrocardiology · Aslanger"
    href: "https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=poor%20agreement"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "正常心電圖與心室顫動" }
  - { id: "s2",  num: "02", title: "前壁壓低不是前壁" }
  - { id: "s3",  num: "03", title: "心包炎這個標籤" }
  - { id: "s4",  num: "04", title: "心電圖能定位嗎" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 心電圖判讀正確，可以讓病人不必經歷心室顫動 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/can-a-patient-be-lucky-if-he-goes-into-ventricular-fibrillation-yes-but-accurate-ecg-interpretation-prevents-it/#:~:text=ventricular%20fibrillation" anno="看這張圖時<b>不要先找 ST 段</b>——先看 T 波的面積與基底寬度，跟同一導程的 QRS 振幅比；再把連續兩張並排，問「有沒有在動」" linktext="到 Smith 部落格看波形 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）8-06 這則案例的標題本身就是結論：病人走到了心室顫動，而作者說他「算幸運」——因為顫動發生在有人看著、有電擊器的地方。作者在文中補了一句給資深醫師的話：多聽年輕醫師講，他們常常知道得比你多。[^smith-vf-08-06] 同一週還有一則同樣主題的案例，是由醫學生 Ahmed Marai 提供的圖，標題直接寫成「如果你不肯聽一個好學生說話，你的病人可能有麻煩」。[^smith-student-08-02]

**為什麼要在意：** 這兩則放在一起看的意義不在單一波形，而在<mark>判讀的社會結構</mark>：急診室裡最常被否決的意見，來自層級最低但花最多時間盯著那張圖的人。心室顫動不是隨機事件，它是一段可被辨識的缺血演變的終點；當第一張圖被歸為「非診斷性」而沒有人連拍、沒有人把疑慮講出口，剩下的就只能交給運氣。 {{< grade "案例 · 單一病例 · 觀點級" "opinion" >}}

**所以呢：** 兩個動作。第一，胸痛且症狀持續的病人，第一張心電圖正常不構成停止的理由——15 到 30 分鐘連拍一張，並且是**並排比對**而不是重新讀一次；動態變化本身就是診斷。第二，當實習醫師、住院醫師或學生說「這個 T 波我覺得怪」，把圖再調出來一起看一次，成本是三十秒。

**台灣情境：** 台灣 ED 的層級文化讓「我覺得怪怪的」這句話極難出口，PGY 與實習醫學生更常見的策略是沉默。把「你覺得這張圖哪裡怪」變成主治醫師主動問出口的一句話，比要求他們鼓起勇氣有效得多；而在人力吃緊的夜班，這句話也是最便宜的第二意見。

---

## V1–V3 的 ST 壓低，不一定是前壁缺血 {#s2}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/ummc-cases-part-i-three-ecgs-that-reward-a-second-look/#:~:text=ST-segment%20depression%20in%20leads%20V1%20through%20V3" anno="看 V1–V3 的<b>三件事一起出現</b>：ST 壓低、相對高聳的前壁 R 波、以及下壁與側壁的細微異常——這個組合指向的是<b>後壁</b>，不是前壁" linktext="到 ECG Weekly 看這張圖 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）8-03〈UMMC Cases Part I: Three ECGs That Reward a Second Look〉：一位 62 歲男性在忙碌的班上因胸痛就診，檢傷心電圖被電腦判讀為「ST 段壓低、可能缺血」；圖上是 V1 到 V3 的 ST 壓低、相對高聳的前壁 R 波，加上下壁與側壁的細微異常，標準 12 導程沒有明顯的 ST 抬高。[^mattu-ummc-08-03]

**為什麼要在意：** 「前壁導程的壓低」這個描述本身就會把思考帶錯方向——它聽起來像前壁的問題，於是病人被歸成非 ST 抬高型心肌梗塞、排進隔天的心導管。但<mark>V1–V3 的 ST 壓低是後壁 ST 抬高的鏡像</mark>，配上高聳 R 波（後壁 Q 波的鏡像）時，指向的是左迴旋動脈系統的急性閉塞。這一格正是 STEMI 準則最容易漏掉的族群：沒有任何一條毫米標準會被觸發，但冠狀動脈是塞的。 {{< grade "案例 · 教學題組 · 觀點級" "opinion" >}}

**所以呢：** 看到 V1–V3 ST 壓低，先做兩件事再談收治：加做後壁導程 V7–V9（抬高門檻只要 0.5 mm），以及回頭看下壁與側壁導程有沒有一起在動。把病歷上的「anterior ischemia」改寫成「疑似後壁 OMI，已加做 V7–V9」，改變的是接手的人怎麼排序這個病人。

**台灣情境：** 加做後壁導程在台灣 ED 的阻力不是知識而是流程——貼片要重貼、機器要重跑、護理端沒有預設的醫囑選項，於是「加做 V7–V9」常常在口頭上說完就消失。把它變成檢傷胸痛路徑裡一個可勾選的欄位，比在教學會上再講一次後壁心肌梗塞有用。

---

## 心包炎：最方便的標籤，也是最貴的那一個 {#s3}

{{< ecg-linkout href="https://x.com/RobertHermanMD/status/2084189438729486396" anno="242 例經裁決的心肌心包症候群案例：<b>特異度 95.0% 對 78.1%</b>（AI 對 ESC STEMI 準則）——重點不是 AI 贏了，是<b>心包炎與閉塞的心電圖重疊到連準則都分不開</b>" linktext="到原始貼文與論文連結 ↗" >}}

**是什麼：** 8-03 發表的一份驗證研究，針對 242 例經裁決的心肌心包症候群（myopericardial syndromes）心電圖，比較各種判讀方式在「不要把心包炎誤判成閉塞、也不要把閉塞誤判成心包炎」上的表現：PMcardio Queen of Hearts 特異度 95.0%，ESC STEMI 準則 78.1%，通用型大型語言模型則明顯更差（70.2%、62.4%、26.9%）。[^pmcardio-myoperi-08-03]

**為什麼要在意：** 這份數字真正的訊息不是「哪個 AI 比較強」，而是<mark>心肌心包症候群是 OMI 最難纏的模仿者</mark>——連 ESC 準則都有五分之一以上分不開。而在急診，這個混淆是雙向且不對稱的：把閉塞叫成心包炎，代價是延遲再灌流；把心包炎叫成 STEMI，代價是一次不必要的心導管。前者遠比後者貴。另一個附帶結論值得記住：<mark>通用型聊天機器人在心電圖判讀上的表現遠低於臨床可用門檻</mark>（最差的一個只有 26.9%），不要把手機裡的通用 AI 當第二意見。 {{< grade "驗證研究 · n=242 經裁決案例 · 特異度比較" "retro" >}}

**所以呢：** 「年輕、瀰漫性 ST 抬高、有 PR 段壓低 → 心包炎」這條捷徑要降級成排除診斷。做完三件事再貼標籤：確認 ST 抬高**不具區域分布**（心包炎不遵循冠狀動脈供應範圍）、確認**沒有互為倒影的 ST 壓低**（aVL 特別關鍵）、確認**沒有反向 T 波演變**。任何一項不符合，就照 OMI 處理。

**台灣情境：** 心包炎在台灣 ED 是個特別誘人的結案標籤——年輕病人、上呼吸道感染病史、抽血 troponin 只有輕微上升，全部都對得上，開個非類固醇消炎藥就能離院。真正該做的是把離院衛教改成具體條件：「症狀在幾小時內加重、或坐起來才能呼吸，立刻回來」，並在病歷寫下已排除區域性分布與互為倒影變化，讓下一個接手的人知道你想過這件事。

---

## 前壁心肌梗塞的心電圖，告訴你有多大而不是在哪裡 {#s4}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=poor%20agreement" anno="105 位前壁心肌梗塞病人做心臟磁振造影對照：傳統導程定位分類與實際受損分布<b>幾乎不相關</b>（P=0.24、κ=0.122）；反而是 ST 段總負荷與梗塞大小相關" linktext="到 PubMed 看原文摘要 ↗" >}}

**是什麼：** Journal of Electrocardiology（心電圖學期刊）上 Aslanger 團隊的前瞻研究：105 位前壁心肌梗塞病人在發病後 3 至 7 天接受心臟磁振造影，以延遲釓顯影與心肌水腫影像定義實際的心肌受損分布，再回頭比對入院心電圖的兩種定位方法——傳統的導程定位分類（前間隔、前側壁、廣泛前壁等），以及簡化的額面與水平面 ST 軸向。[^aslanger-cmr]

**為什麼要在意：** 結果是對一個被教了幾十年的習慣的直接否定：傳統心電圖定位分類與磁振造影所定義的梗塞分布<mark>沒有統計上的關聯（P=0.24）、一致性極差（κ=0.122）</mark>，各類別之間大量重疊；簡化的 ST 軸向也只有微弱且不一致的關聯。真正站得住的是另一件事——<mark>ST 段總負荷與梗塞大小相關</mark>（ΣSTE 標準化 β=0.307，P=0.002；抬高導程數 β=0.267，P=0.007）。換句話說，心電圖擅長回答的是「傷得多重」，不是「傷在哪裡」。 {{< grade "前瞻世代 · 心臟磁振造影對照 · n=105" "retro" >}}

**所以呢：** 兩個修正。第一，不要在交班或會診時把心電圖的定位講得像解剖結論（「這是前間隔梗塞」），改講「前壁導程廣泛受累、ST 總抬高量大」——後者才有證據支撐，也才是心臟科需要的資訊。第二，把抬高的**導程數與總量**當成嚴重度指標納入分流判斷：這是這份研究唯一支持的定量用法。

**台灣情境：** 台灣的心導管室啟動通知裡，「anteroseptal STEMI」這類定位描述幾乎是制式格式，聽起來精確但實際上不預測任何東西。把電話裡那句話換成「六個導程抬高、ST 總量大、血壓 90」，對正在決定要不要從家裡出發的心臟科醫師來說，資訊量高得多。

---

## 延伸與出處 {#more}

### 這週四張卡的共同線

本週視窗（2026-08-03 — 2026-08-09）的四張卡都在拆同一個東西：**判讀鏈上「已經有人下過結論」的那一環**。電腦說可能缺血（卡 02）、準則說不是 STEMI（卡 03）、教科書說前間隔（卡 04）、資深醫師說沒事（卡 01）——每一個結論都出自看似可靠的來源，而每一個都可能在特定情況下系統性地錯。有趣的是四者的失效模式不同：電腦是把鏡像讀成本體，準則是特異度不足，教科書定位是從來沒被影像驗證過，而人的失效是層級。

### 期刊速報

**心電圖教育**：CJEM（加拿大急診醫學期刊）上 McLaren 等人針對加拿大急診住院醫師的心電圖能力調查，揭露的落差相當具體：加拿大皇家內外科醫師學會的可信賴專業活動裡<mark>心電圖沒有任何一項，里程碑只有 1 條，而床邊超音波有 9 條</mark>；60% 的訓練計畫主任表示沒有結構化心電圖課程，57.4% 的住院醫師每月自學心電圖不到一小時。自評能力從 PGY-2 的 60% 升到 PGY-5 的 90%，但低效能區塊落在雙分支傳導阻滞、心律調節器失去奪獲、Brugada 型態，以及束支傳導阻滯下的心肌梗塞——最後這一項正好對應本週 Smith 在 X 上澄清的那件事：<mark>臨床上該用的是 Smith 修正版 Sgarbossa 準則（比例判準），而非原始版的絕對毫米數</mark>，且修正版已在左束支傳導阻滯與心室節律兩種情境驗證。[^mclaren-cjem][^smith-sgarbossa-08-03]

**電生理**：Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理）8-06 一份法洛四重症修補術後的研究，比較兩種傳導速度估算法預測可誘發單型性心室頻脈的能力：等時法（ISO-CVi）在有無心室頻脈兩組間差異顯著（0.17 對 0.30 m/s，P<0.001），傳統電位圖法則否（P=0.055），且變異係數低得多（45% 對 79%）；閾值 0.22 m/s 時敏感度 88%、特異度 70%。[^tof-circep-08-06] JACC: Clinical Electrophysiology（美國心臟學會期刊：臨床電生理）8 月號另有心房顫動起始機轉的研究，指出起始來自竇性節律期間即可辨識的、具陡峭再極化梯度的病人特異區域。[^jacep-af-initiation]

**藥物與心血管風險**：European Heart Journal（歐洲心臟期刊）8-08 的統合分析納入 17 項第三期隨機試驗、6799 位血液惡性腫瘤病人，顯示布魯頓氏酪胺酸激酶抑制劑（ibrutinib 等）與非致死性缺血性主要不良心血管事件風險上升相關，<mark>風險比 1.66（95% CI 1.09–2.53）</mark>，但異質性高（I²=70%）。急診端的實務意義：血液科病人主訴胸痛時，這類標靶藥要進入用藥史的問診清單。[^btki-ehj-08-08] 同期另有一篇談運動員心房顫動的評論。[^athletes-af-ehj]

**Resus**：EMCrit 8-07〈A Slow Retreat〉重新檢視目標體溫管理這個過去二十年的照護標準，論點是它可能從一開始就建立在錯誤的前提上——不是被更好的證據逐步修正，而是地基本身有問題。[^emcrit-ttm-08-07] Resuscitation（急救期刊）9 月號則有三則評論，分別談雙重電擊時的**裝置安全**（不只看病人結果，也要看去顫器本身會不會壞）、早期鎮靜對心跳停止結果的因果推論困難，以及心跳停止照護差異的介入設計。[^resus-dual-defib][^resus-sedation][^resus-disparities]

### 誰這週有新作

Smith 心電圖部落格本週兩則案例（8-02 醫學生提供的圖、8-06 心室顫動案例）主題連貫，都在講「聽下級醫師講話」這件事；Ken Grauer（ekgpress）8-08 貼出一則案例，重點不在要不要做心導管（那很明顯），而在**判斷罪犯血管是哪一條**，值得當作練習。[^grauer-culprit-08-08] Aslanger 團隊本週在心電圖學期刊發表的心臟磁振造影對照研究（卡 04）與 Frick／Smith 上月那篇〈簡單的假象〉屬於同一條批判路線：前者拆掉心電圖的定位神話，後者拆掉毫米準則的可靠性神話。

---

## 引用 {#refs}

[^smith-vf-08-06]: Smith SW，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-08-06。原文：「Can a patient be lucky if he goes into ventricular fibrillation? Yes. But accurate ECG interpretation (and the Queen of Hearts) can prevent it.」以及「Also, listen to young doctors. They often know much more than the experienced ones.」。 https://drsmithsecgblog.com/can-a-patient-be-lucky-if-he-goes-into-ventricular-fibrillation-yes-but-accurate-ecg-interpretation-prevents-it/#:~:text=listen%20to%20young%20doctors

[^smith-student-08-02]: Smith SW（案例由醫學生 Ahmed Marai 提供），Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-08-02。原文：「If you can't listen to a good student, your patient might be in trouble (and use the Queen of Hearts)」。 https://drsmithsecgblog.com/if-you-cant-listen-to-a-good-student-your-patient-might-be-in-trouble/#:~:text=medical%20student

[^mattu-ummc-08-03]: Mattu A，ECG Weekly（心電圖週刊），2026-08-03。原文：「The tracing demonstrates ST-segment depression in leads V1 through V3, relatively tall anterior R waves, and subtle abnormalities in the inferior and lateral leads. There is no obvious ST-segment elevation on the initial standard 12-lead ECG.」。 https://ecgweekly.com/weekly-workout/ummc-cases-part-i-three-ecgs-that-reward-a-second-look/#:~:text=relatively%20tall%20anterior%20R%20waves

[^pmcardio-myoperi-08-03]: Herman R 等（PMcardio / Powerful Medical），驗證研究發表通知，2026-08-03。原文：「In 242 adjudicated cases, PMcardio Queen of Hearts achieved 95.0% specificity vs 78.1% with ESC STEMI criteria—and outperformed Claude (70.2%), ChatGPT (62.4%), and Gemini (26.9%)」，並註明「Myopericardial syndromes are among the hardest ECG mimics of occlusion MI.」。 https://x.com/RobertHermanMD/status/2084189438729486396

[^aslanger-cmr]: Aslanger EK、Aggül B、İnan D、Taşdelen N 等，Journal of Electrocardiology（心電圖學期刊），2026-06-28。原文：「Conventional ECG localization categories demonstrated no significant association with CMR-defined infarct distribution (P = 0.24), with poor agreement (κ = 0.122) and substantial overlap across categories... global ST-segment burden was associated with CMR-defined infarct size (ΣSTE: standardized β = 0.307, P = 0.002; lead count: standardized β = 0.267, P = 0.007).」。 https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=poor%20agreement

[^mclaren-cjem]: Mastrangelo E、El-Baba M、Patocka C、McLaren JTT 等，CJEM（加拿大急診醫學期刊），2026-06-20。原文：「There is no Royal College Entrustable Professional Activities for ECGs, and only 1 milestone compared with 9 for PoCUS. A majority (60%) of program directors reported no structured ECG curriculum, and most (57.4%) residents reported < 1 h of ECG self-study per month.」。 https://pubmed.ncbi.nlm.nih.gov/42323520/#:~:text=only%201%20milestone%20compared%20with%209

[^smith-sgarbossa-08-03]: Smith SW，2026-08-03。原文：「But the criteria you have here are not the original SGARBOSSA criteria, but rather the modified criteria developed by Smith et al. And validated for both LBBB and ventricular paced rhythm.」。 https://x.com/smithECGBlog/status/2084252382443999546

[^tof-circep-08-06]: O'Leary E、Waldmann V、Bessière F、Tan R 等，Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-08-06。原文：「Median ISO-CVi was lower in those with versus without MMVT (0.17 versus 0.30 m/s; P <0.001). Median EGM-CVi did not differ between groups (0.43 versus 0.70 m/s; P =0.055).」。 https://doi.org/10.1161/circep.125.014548

[^jacep-af-initiation]: Anter E、Barkagan M、Yadin D、Zabern M 等，JACC: Clinical Electrophysiology（美國心臟學會期刊：臨床電生理），2026 年 8 月號。原文：「Atrial Fibrillation Initiation Arises From Reentry at Patient-Specific Regions With Steep Repolarization Gradients Identified During Sinus Rhythm」。 https://doi.org/10.1016/j.jacep.2026.06.040

[^btki-ehj-08-08]: Alexandre J、Font J、Haddad S、Delapierre B 等，European Heart Journal（歐洲心臟期刊），2026-08-08。原文：「BTK-I exposure was associated with an increased risk of non-fatal ischaemic MACE (risk ratio 1.66, 95% confidence interval 1.09–2.53, P = .02), with substantial heterogeneity (I2 = 70%).」。 https://doi.org/10.1093/eurheartj/ehag613

[^athletes-af-ehj]: Elliott A、La Gerche A、Myrstad M，European Heart Journal（歐洲心臟期刊），2026-08-05。原文：「Atrial fibrillation in athletes: you can't start a fire without a spark」。 https://doi.org/10.1093/eurheartj/ehag560

[^emcrit-ttm-08-07]: Weingart S（EM Nerd），EMCrit，2026-08-07。原文：「Imagine, for a moment, that targeted temperature management (TTM), the standard of care in post cardiac arrest management for more than two decades, was built on a false premise from the very beginning.」。 https://emcrit.org/emnerd/a-slow-retreat/#:~:text=built%20on%20a%20false%20premise

[^resus-dual-defib]: Humar M、Nehme Z，Resuscitation（急救期刊），2026 年 9 月號。原文：「Beyond patient outcomes: considering device safety during dual defibrillation」。 https://doi.org/10.1016/j.resuscitation.2026.111208

[^resus-sedation]: Coppler P、Elmer J，Resuscitation（急救期刊），2026 年 9 月號。原文：「Does early sedation improve outcomes of cardiac arrest? Biologically plausible but elusive causal estimates」。 https://doi.org/10.1016/j.resuscitation.2026.111222

[^resus-disparities]: Malta Hansen C、Grabmayr A，Resuscitation（急救期刊），2026 年 9 月號。原文：「One size does not save all: designing interventions to reduce cardiac arrest disparities」。 https://doi.org/10.1016/j.resuscitation.2026.111223

[^grauer-culprit-08-08]: Grauer K（ekgpress），2026-08-08。原文：「The challenge in today's case is not to recognize that prompt cath is needed — because that is obvious. — The challenge is to determine the "culprit" artery?」。 https://x.com/ekgpress/status/2086050196396327022
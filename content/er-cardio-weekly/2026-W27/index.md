---
title: "別讓標籤和基準線，替你放走一個 OMI"
subtitle: "_本週主線：別讓『NSTEMI』這個標籤、或一條看不清的基準線，替你把 OMI 放行。_"
shortTitle: "標籤與基準線都會放走 OMI"
slug: "2026-W27"
week: "2026-W27"
weekRange: "2026-06-29 — 2026-07-05"
date: 2026-07-05T10:00:06+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 163
picked: 4
tags: ["OMI", "電生理", "AI ECG", "Resus"]
practiceChanges:
  - text: "肌鈣蛋白升高但「不到 STEMI」，先比 prior、15–30 分追 serial、加看後壁，再決定是不是 <b>OMI</b>——別讓「NSTEMI」這個標籤替你放行"
    source: "Smith ECG Blog 7-01"
    href: "https://drsmithsecgblog.com/this-was-interpreted-as-no-ischemia-kg/#:~:text=Inferior%20OMI"
  - text: "寬 QRS 的「下壁 STEMI」，先分辨傳導阻滯／節律器／心室節律，釘住 QRS 終點與真正的 <b>J 點</b>，再談 ST 抬高幾毫米"
    source: "ECG Weekly 6-29"
    href: "https://ecgweekly.com/weekly-workout/a-closer-look-at-the-j-point/#:~:text=true%20J%20point"
  - text: "心跳停止別反射性給<b>碳酸氫鈉</b>——保留給高血鉀、鈉通道阻斷劑中毒等有適應症者；敗血症固定給液量回到個別化"
    source: "EMCrit 428 · 6-27"
    href: "https://emcrit.org/emcrit/a-few-things/#:~:text=sodium%20bicarbonate"
  - text: "subtle、『差點要取消』的病人 → 讓 AI-ECG 當那張反對票，但拍板仍靠 prior／serial／echo"
    source: "Friedman et al. · J Electrocardiol"
    href: "https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "下壁 OMI × NSTEMI 標籤" }
  - { id: "s2",  num: "02", title: "寬 QRS 假性 ST／J 點" }
  - { id: "s3",  num: "03", title: "arrest 碳酸氫鈉" }
  - { id: "s4",  num: "04", title: "AI ECG · 被取消啟動" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 下壁 OMI 被貼上「NSTEMI」放行 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/this-was-interpreted-as-no-ischemia-kg/#:~:text=Inferior%20OMI" anno="看 <b>III／aVF</b> 不成比例的 T 波、對側 <b>aVL</b> 的相互變化——毫米門檻之外，指向一條正在關閉的下壁冠狀動脈" >}}

**是什麼：** Smith 7-01〈NSTEMI 是個毫無價值的診斷〉收到一張沒有任何病史的 ECG，原始判讀是「沒有缺血」，Smith 一眼回覆：下壁 OMI。[^smith-nstemi-07-01]

**為什麼要在意：** 「NSTEMI」把需要緊急再灌流的急性阻塞，和真正沒有阻塞、可排程處理的病人，塞進同一個桶子。W25 引過的 Frick／Smith〈illusion of simplicity〉早就示範過——**標準 STEMI 準則會漏掉高達 38% 的 LAD 阻塞**，這些被漏掉的，最後多半掛在「NSTEMI」底下。[^frick-illusion-06-10] {{< grade "部落格病例 · 專家判讀 · 觀點級" "opinion" >}}

**所以呢：** 看到心肌旗標升高、ECG 卻「不到 STEMI」時，別急著寫下 NSTEMI 就安心收治——把 prior 調出來比對、把 serial 追下去、把細微的相互變化與後壁／右側導程一起看，問一句「這是不是 OMI」。

**台灣情境：** 多數 ED 有心肌旗標與 12 導程，卻不一定每次都調得到 prior、追得齊 serial。肌鈣蛋白升高但「不到 STEMI」時，先做一張比對用的 prior、並在 15–30 分鐘追一張 serial，比急著寫下 NSTEMI 收治，更能揪出下壁／後壁的 OMI。

---

## 寬 QRS 讓 J 點移位、製造假性 ST {#s2}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/a-closer-look-at-the-j-point/#:~:text=true%20J%20point" anno="看 <b>III／aVF／aVR</b> 像下壁 STEMI 的 ST 抬高，再看 <b>變寬的 QRS（RBBB 型態）</b>——先釘住真正的 J 點，才量得準 ST" >}}

**是什麼：** Mattu 6-29〈A Closer Look at the J Point〉是一位 72 歲男性的院前 12 導程，III／aVF／aVR 看似 ST 抬高、像下壁 STEMI，但 QRS 明顯變寬、呈右束支傳導阻滯型態。[^mattu-jpoint-06-29]

**為什麼要在意：** 寬 QRS、傳導阻滯、節律器節律都會拉長並扭曲 QRS 終點，讓 J 點往上或往下位移，於是一段其實不存在的「ST 抬高」就這樣被畫了出來——找不到真正的 J 點，就量不準 ST 段。順這條線，ESC 365（6-25 補帶）以超高頻心電圖（UHF-ECG）比較傳導系統節律與傳統右心室節律的心室去極化與不同步。[^esc-csp-uhf-06-25] {{< grade "院前病例 · 教學 · 觀點級" "opinion" >}}

**所以呢：** 看到寬 QRS 的「下壁 STEMI」，先分辨是右束支阻滯、節律器節律還是心室節律，釘住 QRS 終點與真正的 J 點，再談 ST 抬高幾毫米，別讓位移的基準線騙你啟動導管室。

**台灣情境：** 院前或到院的寬 QRS 圖，遇到 III／aVF 看似抬高時，先分辨傳導型態、再找真 J 點，往往比爭論「抬高幾毫米」更關鍵。

---

## arrest 的碳酸氫鈉：回到適應症，別反射 {#s3}

{{< ecg-linkout href="https://emcrit.org/emcrit/a-few-things/#:~:text=sodium%20bicarbonate" anno="聽 Weingart 盤點 <b>心跳停止與代謝性休克</b> 的碳酸氫鈉最新數據，以及 <b>ARISE Fluids</b> 對敗血症「30 mL/kg」慣例的衝擊" linktext="到 EMCrit 聽這集 ↗" >}}

**是什麼：** EMCrit 428〈A Few Things〉6-27，Weingart 拆解 Critical Care Reviews 2026 會議上登場的幾個試驗，重點放在 ARISE Fluids 及其對敗血症「30 mL/kg」給液慣例的衝擊，並回顧心跳停止與代謝性休克時碳酸氫鈉使用的最新數據。[^emcrit-428-06-27]

**為什麼要在意：** 碳酸氫鈉在心跳停止時的常規使用，長年缺乏強證據支持；與其反射性推碳酸氫鈉，不如把可逆病因矯正好。{{< grade "podcast 盤點 · 觀點級" "opinion" >}}

**所以呢：** arrest 時別把碳酸氫鈉當例行——保留給高血鉀、鈉離子通道阻斷劑中毒等有明確適應症的情境，其餘時間專注在高品質 CPR 與可逆病因；敗血症的固定給液量，也回到個別化評估。

**台灣情境：** 心跳停止時別把碳酸氫鈉當反射動作，先確認是否有高血鉀、鈉通道阻斷劑中毒等明確適應症；本集為概念盤點，臨床決策仍以原始試驗與在地指引為準。

---

## AI 在「被取消的導管室啟動」裡揪出 OMI {#s4}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25" anno="被取消的導管室啟動裡，<b>STEMI 準則敏感度只有 47.1%、AI 演算法達 94.1%</b>（p=0.005）——這個灰帶不是安全名單" linktext="到 PubMed 看摘要 ↗" >}}

**是什麼：** Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等《Journal of Electrocardiology》（心電圖學期刊）2026（PMID 41967390），回顧 17 個月導管室啟動，納入以「ECG 不符 STEMI 準則」為由被取消者，OMI 定義為血管攝影 TIMI 0／1 罪犯病灶。結果：1224 次啟動中 185 例（15.1%）被取消而納入分析，其中 **有 17 位其實是真正的 OMI**。[^friedman-ai-cancel]

**為什麼要在意：** **STEMI 準則的敏感度僅 47.1%、AI 演算法達 94.1%（p=0.005）**，特異度則相近（66.1% vs 73.2%，p=0.090）；AI 的陽性／陰性概似比（3.51／0.08）也優於 STEMI 準則（1.39／0.80）。「被取消的啟動」不是安全名單，而是 OMI 最愛藏身的灰帶之一。{{< grade "回溯 · 單中心 · n=17 · 假說級" "retro" >}}

**所以呢：** 當你或會診「差點要取消」一個 subtle 病人時，AI-ECG 值得當那張反對票——但它在乾淨 baseline 上最強、在寬 QRS／「有故事的心臟」上容易被帶偏（正呼應卡 02），拍板仍要回到 prior、serial 與床邊超音波。作者定位它為「臨床輔助」而非取代，仍需前瞻研究驗證實際落地成效。

**穿戴補一則：** ESC 365（6-25 補帶）以 moxifloxacin 介入試驗，檢驗智慧手錶單導程心電圖監測 QT 間期延長的效度與信度[^esc-qt-smartwatch-06-25]——當愈來愈多病人戴著能量 QT 的手錶，未來「藥物引起 QT 延長」的早期訊號，可能先出現在手錶而非我們的 12 導程上。

---

## 延伸與出處 {#more}

### 誰這週有新作

本週視窗（2026-06-29 — 2026-07-05）追蹤名單的產出集中在兩位：Stephen Smith 的 Dr. Smith's ECG Blog 7-01（NSTEMI／下壁 OMI，見卡 01）、Amal Mattu 的 ECG Weekly 6-29（J 點／寬 QRS，見卡 02）。Jesse McLaren、Pendell Meyers、Ken Grauer、Emre Aslanger 本週視窗內皆無新作（McLaren 的 blog 6-26、CJEM 6-20 屬前期 W26）。

## 引用 {#refs}

[^smith-nstemi-07-01]: Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-01。原文：「This ECG was sent to me with no information. What do you think? I responded: 'Inferior OMI'」（標題：「NSTEMI (Non-STEMI, or Non ST Elevation MI) is a totally worthless diagnosis.」）。 https://drsmithsecgblog.com/this-was-interpreted-as-no-ischemia-kg/#:~:text=Inferior%20OMI

[^mattu-jpoint-06-29]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-06-29。原文：「How can a wide QRS complex create pseudo–ST segment elevation or depression? What is the most reliable way to locate the true J point when the end of the QRS is unclear?」。 https://ecgweekly.com/weekly-workout/a-closer-look-at-the-j-point/#:~:text=true%20J%20point

[^friedman-ai-cancel]: Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等，Journal of Electrocardiology（心電圖學期刊），2026（PMID 41967390）。原文：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」。 https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25

[^frick-illusion-06-10]: Frick WH、Smith SW，Journal of Electrocardiology（心電圖學期刊），2026-06-10（PMID 42287922，W25 交叉引用）。原文：「standard STEMI criteria fail to identify up to 38% of LAD occlusions」。 https://pubmed.ncbi.nlm.nih.gov/42287922/#:~:text=38%25%20of%20LAD

[^omi-review-06-17]: Avdikos G、Smith SW，The Egyptian Heart Journal（埃及心臟期刊），2026-06-17（PMID 42307871，前期交叉引用）。原文（標題）：「OMI: time for early recognition and management of acute coronary occlusion.」。 https://pubmed.ncbi.nlm.nih.gov/42307871/#:~:text=early%20recognition

[^emcrit-428-06-27]: Scott Weingart，EMCrit 428〈A Few Things〉，2026-06-27。原文：「the game-changing ARISE Fluids trial and its impact on the 30 mL/kg sepsis mandate ... the latest data on sodium bicarbonate use in cardiac arrest and metabolic shock」。 https://emcrit.org/emcrit/a-few-things/#:~:text=sodium%20bicarbonate

[^esc-csp-uhf-06-25]: ESC 365（歐洲心臟學會），2026-06-25。原文（標題）：「Ventricular depolarization and dyssynchrony in conduction system pacing vs conventional pacing by ultra-high-frequency-ECG」。 https://news.google.com/rss/articles/CBMiU0FVX3lxTE16UzFlTUFBWDNMNFprRmpwRVhncF94YmVqZTN1MEFsYmE4R0RnRWFiVC1xQUtOLURnNTNEWWVwSWVaRDk0cGhXMHU2SGgtWnRwVjVj?oc=5#:~:text=conduction%20system%20pacing

[^esc-qt-smartwatch-06-25]: ESC 365（歐洲心臟學會），2026-06-25。原文（標題）：「Validity and reliability of an smartwatch single-lead ECG for monitoring QT interval prolongation: an interventional study with moxifloxacin」。 https://news.google.com/rss/articles/CBMiU0FVX3lxTE92NHIxdGlBaUlpeUdpRUJPaG5oZGRSak0tMFpmOThTUGtlcW5nS093Vy1mQ1hQdkRtdHBBZ2t1OHlLUHJ5dVdfcnNHQnRlUHZNZlBJ?oc=5#:~:text=QT%20interval

---
title: "當『診斷標籤』與『測量基準』雙雙失準的一週：Smith 7-01『NSTEMI 是個毫無價值的診斷』揭一張被讀成沒有缺血的下壁 OMI × Mattu 6-29『寬 QRS 讓 J 點移位、製造假性 ST 抬高』——標籤與基準線都別照單全收／AI 在被取消的導管室啟動裡把 OMI 敏感度從 47% 拉到 94%"
subtitle: "_W25 是 ECG 說謊、W26 是症狀與門檻雙雙失守；W27 換成我們手裡的兩把尺——診斷標籤與測量基準——自己出問題。本週主線：別讓『NSTEMI』這個標籤、或一條看不清的基準線，替你把 OMI 放行。_"
slug: "2026-W27"
week: "2026-W27"
weekRange: "2026-06-29 — 2026-07-05"
date: 2026-07-05T10:00:06+08:00
readingTime: "21 分鐘"
tags: ["OMI", "電生理", "AI ECG", "Resus"]
sections:
  - { id: "tldr", num: "0",    title: "摘要" }
  - { id: "omi",  num: "I",    title: "OMI / 急性冠症" }
  - { id: "arr",  num: "II",   title: "節律與電生理" }
  - { id: "ai",   num: "III",  title: "AI ECG / 穿戴" }
  - { id: "res",  num: "IV",   title: "Resus / 急救" }
  - { id: "tch",  num: "V",    title: "教學案例" }
  - { id: "aut",  num: "VI",   title: "追蹤作者本週新作" }
  - { id: "med",  num: "VII",  title: "媒體動態" }
  - { id: "ref",  num: "VIII", title: "文獻速報" }
  - { id: "tw",   num: "IX",   title: "台灣急診備註" }
  - { id: "key",  num: "X",    title: "Key Takeaways" }
  - { id: "refs", num: "XI",   title: "引用" }
---

## 摘要 / 本週速讀 {#tldr}

本週把鏡頭從「病人」轉回「我們自己手裡的工具」。W25 講 ECG 會說謊，W26 講症狀與毫米門檻雙雙失守——那些都還是病人端的偽裝；W27 則揭穿兩把我們每天在用、卻很少質疑的尺：診斷「標籤」與 ECG 的「測量基準線」。Smith 7-01 直接開砲「NSTEMI 是個毫無價值的診斷」，用一張被讀成沒有缺血的下壁 OMI 示範標籤如何藏住阻塞；Mattu 6-29 則用一張寬 QRS、RBBB 的院前 12 導程，示範基準線一移位、整段 ST 就跟著騙人。母題一句：別讓標籤、也別讓一條看不清的基準線，替你把 OMI 放行。

**第一，「NSTEMI」是個把 OMI 藏起來的標籤。** Smith 部落格 7-01〈NSTEMI 是個毫無價值的診斷〉收到一張沒有任何臨床資訊的 ECG，被判讀成「沒有缺血」，Smith 一眼回覆：下壁 OMI。[^smith-nstemi-07-01] 問題不在這張圖多難，而在「NSTEMI」這個分類本身——**<mark>它把需要緊急再灌流的 OMI，和真正沒有急性阻塞的病人，塞進同一個桶子</mark>**。當一張下壁 OMI 被貼上「非 STEMI」的標籤，時間軸就從被貼標的那一刻開始延誤。

**第二，寬 QRS 會讓 J 點移位、製造假性 ST。** Mattu 6-29〈A Closer Look at the J Point〉是一位 72 歲男性的院前 12 導程，乍看 III、aVF、aVR 有 ST 抬高、像下壁 STEMI，但 QRS 明顯變寬、呈右束支傳導阻滯型態。[^mattu-jpoint-06-29] Mattu 的提醒是：**<mark>寬 QRS 會讓 J 點移位、製造假性 ST 抬高或壓低</mark>**，在打電話啟動導管室之前，得先找到真正的 J 點——因為量錯了起點，整段 ST 的判讀都會跟著錯。

**第三，AI、EP 與急救各補一條線。** AI 端，Friedman／Smith／Meyers 的新分析把矛頭指向最尷尬的灰帶——那些已被取消的導管室啟動：**<mark>連被取消的啟動裡，都藏著沒被認出來的 OMI</mark>**，而 AI 演算法把這群病人的偵測敏感度大幅拉高[^friedman-ai-cancel]。EP 端，ESC 365（6-25 補帶）以超高頻心電圖比較傳導系統節律與傳統右心室節律的心室去極化與不同步[^esc-csp-uhf-06-25]；急救端，EMCrit 428（6-27 補帶）盤點 ARISE Fluids 與心跳停止時碳酸氫鈉的最新數據[^emcrit-428-06-27]。

本週值得在晨會帶過的五則：

- Dr. Smith／Smith 7-01：一張被讀成「沒有缺血」的下壁 OMI——為什麼「NSTEMI」是個毫無價值的診斷
- ECG Weekly／Mattu 6-29：72 歲、院前 12 導程 III／aVF／aVR 假性 ST 抬高——寬 QRS 下怎麼找真正的 J 點
- Friedman／Smith／Meyers（J Electrocardiol，PMID 41967390）：被取消的導管室啟動裡，AI 把 OMI 敏感度從 47.1% 拉到 94.1%
- ESC 365（6-25 補帶）：以超高頻心電圖比較傳導系統節律 vs 傳統節律的心室去極化與不同步
- EMCrit 428（6-27 補帶）：ARISE Fluids 與心跳停止／代謝性休克的碳酸氫鈉最新數據

---

## 一、OMI / 急性冠症 {#omi}

W25 的 OMI 主線是「會說謊的 ECG」，W26 是「症狀與門檻雙雙失守」；W27 把問題往上推一層——連我們替病人貼上的「診斷標籤」本身，都可能是漏掉 OMI 的元兇。Smith 7-01 這篇的標題就是一句宣言。

### Smith 7-01 — 一張被讀成「沒有缺血」的下壁 OMI：為什麼「NSTEMI」是個毫無價值的診斷

**Dr. Smith's ECG Blog 2026-07-01〈NSTEMI（Non-STEMI）is a totally worthless diagnosis〉**[^smith-nstemi-07-01]：一張沒有附任何病史的 ECG 被送到 Smith 面前，原始判讀是「沒有缺血」。Smith 的回覆只有四個字——下壁 OMI。細看之下，下壁導程有不成比例的 T 波、對側 aVL 的相互變化，足以在毫米門檻之外指向一條正在關閉的冠狀動脈。

這篇的火力不在單一張圖，而在標題那句話：把病人分成 STEMI 與 NSTEMI，本身就是個會出人命的分類。**<mark>「NSTEMI」不是診斷，而是把 OMI 藏起來的標籤</mark>**——它把需要立刻打通血管的急性阻塞，和真正沒有阻塞、可以排程處理的病人，混成同一群「非 STEMI」。W25 引過的 Frick／Smith〈illusion of simplicity〉早就用一例延誤 15 小時的 LAD 完全阻塞示範過：**<mark>標準 STEMI 準則會漏掉高達 38% 的 LAD 阻塞</mark>**[^frick-illusion-06-10]，這些被漏掉的，最後全都掛在「NSTEMI」這個桶子裡。

教學點是：看到心肌旗標升高、ECG 卻「不到 STEMI」的病人，別急著寫下 NSTEMI 就安心收治。真正要問的是——這是不是一條已經關閉、或反覆關閉的血管？把 prior 調出來比對、把 serial 追下去、把細微的相互變化與後壁／右側導程一起看，這些動作決定了病人是幾小時內進導管室、還是隔天才被發現。

對急診端的意義是：「NSTEMI」這個詞在分流與交班時很方便，卻也最容易讓人鬆手。與其把它當終點，不如把它當成一個提問——在這群「非 STEMI」裡，哪些其實是 OMI？下一段的 AI 分析，正好量化了這個桶子裡被漏掉的比例。

{{< bottomline >}}
OMI 端本週的主角是「標籤」：Smith 7-01 用一張被讀成沒有缺血的下壁 OMI，論證「NSTEMI」是個把急性阻塞藏起來的診斷[^smith-nstemi-07-01][^frick-illusion-06-10]。給台灣 ED 一句：**心肌旗標升高但「不到 STEMI」時，別停在 NSTEMI——比 prior、追 serial、看後壁，問一句「這是不是 OMI」。**
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W25 的 EP 端談一線 PFA 往持續性 AF 延伸，W26 談 AF 的觸發機轉；W27 沒有新的消融試驗，但有一個更基本、也更貼身的主題——當 QRS 變寬、傳導出了問題，我們賴以判讀的「基準線」會跟著跑掉。Mattu 6-29 把這件事講得最清楚。

### Mattu 6-29 — 72 歲、寬 QRS 與 RBBB：假性 ST 抬高，還有找不到的 J 點

**ECG Weekly／Amal Mattu 2026-06-29〈A Closer Look at the J Point〉**[^mattu-jpoint-06-29]：一位 72 歲男性的院前 12 導程，III、aVF、aVR 看起來有 ST 抬高，讓人擔心下壁 STEMI 或高風險缺血；但同一張圖上，QRS 明顯變寬、呈右束支傳導阻滯型態。Mattu 把三個問題攤開：這個 ST 抬高是真的嗎？寬 QRS 怎麼會製造出假性的 ST 抬高或壓低？當 QRS 的終點模糊時，最可靠的定位真正 J 點的方法是什麼？

這章的核心是一個常被跳過的動作：先確定基準線。**<mark>找不到真正的 J 點，就量不準 ST 段</mark>**——寬 QRS、傳導阻滯、節律器節律都會拉長並扭曲 QRS 終點，讓 J 點往上或往下位移，於是一段其實不存在的「ST 抬高」就這樣被畫了出來。在對著這種圖啟動導管室之前，先把 QRS 終點與 J 點釘準，往往比爭論「抬高幾毫米」更關鍵。

順著「寬 QRS 與傳導」這條線，ESC 365 本週（6-25 補帶）有相關報告：以超高頻心電圖（UHF-ECG）比較傳導系統節律與傳統右心室節律，量化前者在心室去極化與不同步上的優勢[^esc-csp-uhf-06-25]。這類研究提醒我們，QRS 的「形狀」本身承載大量電生理資訊——對急診而言，看到寬 QRS 先分辨它是傳導阻滯、節律器，還是心室節律，是判讀 ST 之前的必修前置。

{{< bottomline >}}
節律端本週回到最基本功：Mattu 6-29 示範寬 QRS／RBBB 如何製造假性 ST，強調先找真 J 點；ESC 365 的 UHF-ECG 則從傳導角度延伸[^mattu-jpoint-06-29][^esc-csp-uhf-06-25]。給急診的一句：**看到寬 QRS 的「下壁 STEMI」，先確定 J 點與 QRS 終點，別讓位移的基準線騙你啟動導管室。**
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W25 的 AI 端把 AI-ECG 當超音波前分流器，W26 順著「連電腦都會漏」把它定位成 subtle OMI 的第二意見；W27 有一份把這個定位量化的分析——而且針對的是最危險的一群人：那些已經被取消的導管室啟動。

### Friedman／Smith／Meyers — 在「被取消的導管室啟動」裡，AI 把 OMI 揪出來

這正好接住 OMI 章的問題：那些「不到 STEMI、被貼上 NSTEMI」的病人裡，到底藏了多少真正的阻塞？Friedman、Smith、Meyers 等人回顧 17 個月內、以「ECG 不符 STEMI 準則」為由被取消的導管室啟動，發現這個灰帶並不安全[^friedman-ai-cancel]。**<mark>AI 想補的那個洞，正是「被取消的導管室啟動」這個最危險的灰帶</mark>**——人與傳統電腦最容易在這裡一起放手。

實務意義是：AI-ECG 在這裡的角色不是取代判讀，而是在你或會診「差點要取消」時，投下一張反對票。它在乾淨 baseline 上最強、在寬 QRS 或「有故事的心臟」上容易被帶偏（正呼應 Mattu 6-29 的寬 QRS 陷阱），所以最終仍要回到 prior、serial 與床邊超音波。具體數字放在下面〈文獻速報〉一次交代。

穿戴端補一則：ESC 365（6-25 補帶）以 moxifloxacin 介入試驗，檢驗智慧手錶單導程心電圖監測 QT 間期延長的效度與信度[^esc-qt-smartwatch-06-25]。對急診的意義偏遠端——當愈來愈多病人戴著能量 QT 的手錶，未來「藥物引起 QT 延長」的早期訊號，可能先出現在手錶而不是我們的 12 導程上。

{{< bottomline >}}
AI 端本週把「第二意見」對準最危險的灰帶——被取消的啟動；穿戴端則把 QT 監測往手錶延伸[^friedman-ai-cancel][^esc-qt-smartwatch-06-25]。給急診的一句：**當你或會診「差點要取消」一個 subtle 的病人時，AI-ECG 值得當那張反對票——但拍板仍靠 prior／serial／echo。**
{{< /bottomline >}}

---

## 四、Resus / 急救 {#res}

W25／W26 的 Resus 端分別談 post-ROSC 的 ST 判讀與研究巡禮；W27 沒有改寫實務的大試驗，但有一集把幾個近期爭點盤點一輪的 podcast 值得記下。

### EMCrit 428（6-27 補帶）— ARISE Fluids 與心跳停止時的碳酸氫鈉

**EMCrit 428〈A Few Things（ARISE Fluids, Bicarb Studies & More）〉，2026-06-27**[^emcrit-428-06-27]：Weingart 拆解 Critical Care Reviews 2026 會議上登場的幾個試驗，重點放在 ARISE Fluids 及其對敗血症「30 mL/kg」給液慣例的衝擊，並回顧心跳停止與代謝性休克時碳酸氫鈉使用的最新數據。

對急診端的意義是：碳酸氫鈉在心跳停止時的常規使用，長年缺乏強證據支持。**<mark>與其反射性推碳酸氫鈉，不如把可逆病因矯正好</mark>**——高血鉀、鈉離子通道阻斷劑中毒等「有明確適應症」的情境才是它真正的舞台，而非每一次 arrest 的例行動作。ARISE Fluids 則從另一端提醒：敗血症的固定給液量，也該回到個別化評估。本集為概念盤點，臨床決策仍以原始試驗與在地指引為準。

{{< bottomline >}}
Resus 端本週靠一集 podcast 盤點：EMCrit 428 收攏 ARISE Fluids 與心跳停止碳酸氫鈉的近期數據[^emcrit-428-06-27]。給急診的一句：**arrest 時別反射性給碳酸氫鈉——先找可逆病因（高血鉀、鈉通道阻斷劑中毒）；敗血症給液回到個別化。**
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

本週的教學主軸只有一個：把 W27 的兩把「失準的尺」做成一份晨會教材。一把是診斷標籤（Smith 7-01 的 NSTEMI），一把是測量基準線（Mattu 6-29 的 J 點），併在一起講最有力。

### 把「別信標籤」與「別信基準線」併成一份晨會教材

Smith 7-01 的「NSTEMI 藏住下壁 OMI」與 Mattu 6-29 的「寬 QRS 製造假性 ST」，看似兩個不相干的主題，其實共用同一個底層錯誤——太信任手裡的工具[^smith-nstemi-07-01][^mattu-jpoint-06-29]。建議的講法不是先給答案，而是先投出兩張圖，要住院醫師分別決定「你會不會啟動、會不會 work up」，再揭曉：一張差點因為「NSTEMI」被放行，一張差點因為「假性 STE」被誤啟動。

教學點是：**<mark>別讓「NSTEMI」這個標籤、或一條看不清的基準線，替你把 OMI 放行</mark>**。標籤讓你少做（漏掉 OMI），基準線讓你多做（誤啟動）或做錯（量錯 ST）——兩種錯誤方向相反，根源相同：把工具的輸出當成事實，而不是回到冠狀動脈與病人。

教學上可帶三個貫穿兩例的動作：

- **標籤端**：看到「NSTEMI」先當提問而非結論——比 prior、追 serial、問「這是不是 OMI」。
- **基準線端**：看到寬 QRS／傳導阻滯／節律器節律，先釘住 QRS 終點與真正的 J 點，再談 ST 抬高幾毫米。
- **共同動作**：不確定時，床邊心臟超音波看局部室壁運動、AI-ECG 當第二意見，都是把人帶回「該認真看這張」的低成本工具。

{{< bottomline >}}
教學端本週把兩把失準的尺併成一課：標籤讓你漏（NSTEMI 藏 OMI）、基準線讓你錯（假性 STE）[^smith-nstemi-07-01][^mattu-jpoint-06-29]。給晨會一句：**工具的輸出是提問，不是事實；回到冠狀動脈與病人才是拍板依據。**
{{< /bottomline >}}

---

## 六、追蹤作者本週新作 {#aut}

本週視窗（2026-06-29 — 2026-07-05）內，追蹤名單的產出集中在兩位。

### Stephen Smith（史蒂芬・史密斯）

**Dr. Smith's ECG Blog 7-01**：〈NSTEMI 是個毫無價值的診斷〉——一張被讀成沒有缺血的下壁 OMI（已於第一章詳述）[^smith-nstemi-07-01]。PubMed 端本週視窗內無新收錄；近期的 illusion of simplicity（6-10）、OMI early recognition（6-17）皆屬前期。

### Amal Mattu（阿默・馬圖）

**ECG Weekly 6-29**：〈A Closer Look at the J Point〉——72 歲、寬 QRS／RBBB 的假性 ST 抬高與 J 點定位（已於第二章詳述）[^mattu-jpoint-06-29]。

### 其他追蹤者

Jesse McLaren、Pendell Meyers、Ken Grauer、Emre Aslanger 本週視窗內皆無新作（McLaren 的 blog 6-26、CJEM 6-20 屬前期 W26）。

X.com 端經二次剔除非 ECG 主題後 0 條過 filter：@smithECGBlog、@amalmattu、@ECGcases、@ekgpress 本週皆無獨立的 ECG 主題新貼文——_本週無 ECG 主題新作_，其部落格／週刊內容已對應上列。

---

## 七、媒體動態 {#med}

本週媒體端偏靜。值得一提的是 podcast 與教育內容延續 AI-ECG 與穿戴的落地討論：EMCrit 428 以 podcast 形式盤點近期試驗（見第四章），ESC 365 則持續以線上研討與壁報形式釋出智慧手錶單導程 QT 監測、UHF-ECG 傳導系統節律等相關內容（見第二、三章）。本週無改寫實務的重大媒體事件，讀者可把注意力放在前四章的實質內容上。

---

## 八、文獻速報 {#ref}

### Friedman BS, Smith SW, Meyers HP, et al.（J Electrocardiology＝心電圖學期刊，PMID 41967390）— AI 在「被取消的導管室啟動」中揪出 OMI

**Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等，《Journal of Electrocardiology》（心電圖學期刊）2026（PMID 41967390）**[^friedman-ai-cancel]：回顧 17 個月內的導管室啟動，納入以「ECG 不符 STEMI 準則」為由被取消的個案，將 OMI 定義為血管攝影顯示 TIMI 0／1 血流的罪犯病灶。

結果是：1224 次啟動中，185 例（15.1%）被取消而納入分析，其中 **<mark>有 17 位其實是真正的 OMI</mark>**。在這群最難判讀的圖上，**<mark>STEMI 準則的敏感度只有 47.1%，AI 演算法達 94.1%（p=0.005）</mark>**，特異度則相近（66.1% vs 73.2%，p=0.090）；AI 的陽性／陰性概似比（3.51／0.08）也優於 STEMI 準則（1.39／0.80）。

這意味著：「被取消的啟動」不是安全名單，而是 OMI 最愛藏身的灰帶之一；以 OMI 為訓練目標的 AI，能在這個桶子裡把敏感度幾乎翻倍，同時不明顯犧牲特異度。作者定位它為改善急診與心臟科判讀一致性的「臨床輔助」，而非取代——這也正是本週 AI 章的立場。仍需前瞻研究驗證實際落地成效。

---

## 九、台灣急診情境備註 {#tw}

把本週兩把「失準的尺」翻譯成台灣 ED 的日常。

### 「NSTEMI」別當終點——比 prior、追 serial（The NSTEMI label is a question, not an endpoint）

台灣多數急診有心肌旗標與心電圖，卻不一定每次都調得到 prior、追得齊 serial。**<mark>心肌旗標升高但「不到 STEMI」時，先做一張比對用的 prior、並在 15–30 分鐘追一張 serial</mark>**，比急著寫下 NSTEMI 收治更能揪出下壁／後壁的 OMI。呼應 Smith 7-01（Dr. Smith's ECG Blog＝Smith 心電圖部落格）。

### 寬 QRS 的「下壁 STEMI」先釘 J 點（Fix the J point before calling STEMI）

院前或到院的寬 QRS 圖，遇到 III／aVF 看似抬高時，先分辨是右束支阻滯、節律器節律還是心室節律，再找真正的 J 點——別讓位移的基準線讓你誤啟動或漏判。呼應 Mattu 6-29（ECG Weekly＝心電圖週刊）。

### arrest 時的碳酸氫鈉——回到適應症（Bicarbonate by indication, not reflex）

心跳停止時別把碳酸氫鈉當例行——保留給高血鉀、鈉離子通道阻斷劑中毒等有明確適應症的情境，其餘時間專注在高品質 CPR 與可逆病因。呼應 EMCrit 428（急救 podcast）與碳酸氫鈉近期數據。

---

## 十、本週 Key Takeaways {#key}

- **標籤會藏 OMI**：Smith 7-01——「NSTEMI」把急性阻塞和真正無阻塞塞進同一桶；心肌旗標升高卻「不到 STEMI」時，問一句「這是不是 OMI」[^smith-nstemi-07-01]。
- **基準線會騙人**：Mattu 6-29——寬 QRS／RBBB 會讓 J 點移位、製造假性 ST；先釘 J 點與 QRS 終點再談毫米[^mattu-jpoint-06-29]。
- **灰帶最危險**：Friedman／Smith／Meyers——被取消的導管室啟動裡，STEMI 準則敏感度 47.1%、AI 94.1%（PMID 41967390）[^friedman-ai-cancel]。
- **38% 的提醒**：標準 STEMI 準則會漏掉高達 38% 的 LAD 阻塞，這些多半掛在「NSTEMI」底下[^frick-illusion-06-10]。
- **急救回到適應症**：arrest 時的碳酸氫鈉保留給有適應症者，敗血症給液回到個別化（EMCrit 428）[^emcrit-428-06-27]。
- **穿戴延伸**：智慧手錶單導程 ECG 監測 QT 的效度信度受檢驗，QT 早期訊號未來或先現於手錶[^esc-qt-smartwatch-06-25]。

---

## 引用 {#refs}

[^smith-nstemi-07-01]: Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-01。原文：「This ECG was sent to me with no information. What do you think? I responded: 'Inferior OMI'」（標題：「NSTEMI (Non-STEMI, or Non ST Elevation MI) is a totally worthless diagnosis.」）。 https://drsmithsecgblog.com/this-was-interpreted-as-no-ischemia-kg/#:~:text=Inferior%20OMI

[^mattu-jpoint-06-29]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-06-29。原文：「How can a wide QRS complex create pseudo–ST segment elevation or depression? What is the most reliable way to locate the true J point when the end of the QRS is unclear?」。 https://ecgweekly.com/weekly-workout/a-closer-look-at-the-j-point/#:~:text=true%20J%20point

[^friedman-ai-cancel]: Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等，Journal of Electrocardiology（心電圖學期刊），2026（PMID 41967390）。原文：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」。 https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25

[^frick-illusion-06-10]: Frick WH、Smith SW，Journal of Electrocardiology（心電圖學期刊），2026-06-10（PMID 42287922，W25 交叉引用）。原文：「standard STEMI criteria fail to identify up to 38% of LAD occlusions」。 https://pubmed.ncbi.nlm.nih.gov/42287922/#:~:text=38%25%20of%20LAD

[^omi-review-06-17]: Avdikos G、Smith SW，The Egyptian Heart Journal（埃及心臟期刊），2026-06-17（PMID 42307871，前期交叉引用）。原文（標題）：「OMI: time for early recognition and management of acute coronary occlusion.」。 https://pubmed.ncbi.nlm.nih.gov/42307871/#:~:text=early%20recognition

[^emcrit-428-06-27]: Scott Weingart，EMCrit 428〈A Few Things〉，2026-06-27。原文：「the game-changing ARISE Fluids trial and its impact on the 30 mL/kg sepsis mandate ... the latest data on sodium bicarbonate use in cardiac arrest and metabolic shock」。 https://emcrit.org/emcrit/a-few-things/#:~:text=sodium%20bicarbonate

[^esc-csp-uhf-06-25]: ESC 365（歐洲心臟學會），2026-06-25。原文（標題）：「Ventricular depolarization and dyssynchrony in conduction system pacing vs conventional pacing by ultra-high-frequency-ECG」。 https://news.google.com/rss/articles/CBMiU0FVX3lxTE16UzFlTUFBWDNMNFprRmpwRVhncF94YmVqZTN1MEFsYmE4R0RnRWFiVC1xQUtOLURnNTNEWWVwSWVaRDk0cGhXMHU2SGgtWnRwVjVj?oc=5#:~:text=conduction%20system%20pacing

[^esc-qt-smartwatch-06-25]: ESC 365（歐洲心臟學會），2026-06-25。原文（標題）：「Validity and reliability of an smartwatch single-lead ECG for monitoring QT interval prolongation: an interventional study with moxifloxacin」。 https://news.google.com/rss/articles/CBMiU0FVX3lxTE92NHIxdGlBaUlpeUdpRUJPaG5oZGRSak0tMFpmOThTUGtlcW5nS093Vy1mQ1hQdkRtdHBBZ2t1OHlLUHJ5dVdfcnNHQnRlUHZNZlBJ?oc=5#:~:text=QT%20interval

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。W27 是「診斷標籤與測量基準雙雙失準」的一週：Smith 7-01 用一張被讀成沒有缺血的下壁 OMI，論證「NSTEMI 是個毫無價值的診斷」；Mattu 6-29 用一位 72 歲、寬 QRS／RBBB 的院前 12 導程，示範假性 ST 抬高與找不到的 J 點。AI 端 Friedman／Smith／Meyers（PMID 41967390）量化「被取消的導管室啟動」灰帶——STEMI 準則敏感度 47.1%、AI 94.1%；EP 端以 ESC 365 的 UHF-ECG 傳導系統節律補位；Resus 端 EMCrit 428 盤點 ARISE Fluids 與心跳停止碳酸氫鈉；穿戴端 ESC 智慧手錶單導程 QT 監測。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">2<span class="unit">篇 W27 內新文（補帶 4 篇近期）</span></div>
<ul>
<li><span class="li-en">Dr Smith <strong>1</strong> · ECG Weekly <strong>1</strong></span><span class="li-zh">Smith 心電圖部落格（7-01：NSTEMI 是個毫無價值的診斷／下壁 OMI）· Mattu 心電圖週刊（6-29：寬 QRS 假性 ST 與 J 點定位）</span></li>
<li><span class="li-en">EMCrit <strong>1</strong> (6-27 補帶) · ESC 365 <strong>3</strong> (6-25 補帶)</span><span class="li-zh">A Few Things（ARISE Fluids／碳酸氫鈉）· UHF-ECG 傳導系統節律、智慧手錶單導程 QT、非擴張型心肌病 ECG 風險標記</span></li>
<li><span class="li-en">ACC <strong>1</strong> (5-21 補帶)</span><span class="li-zh">AI-Enabled ECG 落地照護（延續引用）</span></li>
<li><span class="li-en">REBEL / ALiEM / LITFL / Core EM / HRS / AHA — 0</span><span class="li-zh">本週視窗內無新時效內容（HRS Episode 178、AHA 穿戴皆屬 W26）</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">0<span class="unit">篇 in-window（交叉引用 1 篇 AI）</span></div>
<ul>
<li><span class="li-en">Stephen Smith — 0 in-window</span><span class="li-zh">blog 7-01 已於 L1；PubMed 42307871（6-17）、42287922（6-10）屬前期</span></li>
<li><span class="li-en">Pendell Meyers — 交叉引用</span><span class="li-zh">Friedman et al.《被取消啟動的 AI OMI 偵測》J Electrocardiol（PMID 41967390，47.1% vs 94.1%）</span></li>
<li><span class="li-en">Jesse McLaren — 0</span><span class="li-zh">blog 6-26／CJEM 6-20 屬 W26</span></li>
<li><span class="li-en">Grauer / Aslanger — 0</span><span class="li-zh">本週視窗無新作</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">~3<span class="unit">篇候選（AI-ECG + UHF-ECG + 穿戴）</span></div>
<ul>
<li><span class="li-en">J Electrocardiol <strong>1</strong></span><span class="li-zh">被取消啟動的 AI OMI 偵測（PMID 41967390）</span></li>
<li><span class="li-en">ESC 365 UHF-ECG <strong>1</strong></span><span class="li-zh">傳導系統節律 vs 傳統節律的去極化與不同步（6-25）</span></li>
<li><span class="li-en">ESC 365 穿戴 <strong>1</strong></span><span class="li-zh">智慧手錶單導程 ECG 監測 QT（moxifloxacin，6-25）</span></li>
<li><span class="li-en">EHJ / JACC / JACC-EP / Heart Rhythm / Annals EM — 0</span><span class="li-zh">本週皆空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">0<span class="unit">條過 filter（二次剔除非 ECG 主題後）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog — 本週無獨立 ECG 主題新 tweet</span><span class="li-zh">blog 7-01 NSTEMI／下壁 OMI 已對應</span></li>
<li><span class="li-en">@amalmattu — 本週無新 tweet</span><span class="li-zh">ECG Weekly 6-29 J 點／寬 QRS 已對應</span></li>
<li><span class="li-en">@ECGcases (Jesse McLaren) — 本週無獨立新 tweet</span><span class="li-zh">—</span></li>
<li><span class="li-en">@ekgpress (Ken Grauer) — 本週無新 case</span><span class="li-zh">—</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>
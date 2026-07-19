---
title: "別讓心電圖的型態，替你放走病灶"
subtitle: "_本週四張圖考同一件事：S1Q3T3 不等於肺栓塞、「不是 STEMI」不等於沒阻塞、又高又大的 T 波要先分高血鉀還是超急性 T——型態只是線索，真病灶得另外找。_"
shortTitle: "型態會騙人，找真病灶"
slug: "2026-W29"
week: "2026-W29"
weekRange: "2026-07-13 — 2026-07-19"
date: 2026-07-19T10:00:05+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 207
picked: 4
tags: ["OMI", "心電圖判讀", "AI-ECG"]
practiceChanges:
  - text: "看到 <b>S1Q3T3</b> 別反射性跳去肺栓塞——它既不敏感也不特異，先回到臨床（低血氧、心搏過速、右心負荷、DVT 風險）；缺這些支撐時，把它當非特異型態，而不是 PE 的證據"
    source: "ECG Weekly 7-13"
    href: "https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-s1q3t3-misleads/#:~:text=pulmonary%20embolism"
  - text: "胸痛病人心電圖『不符 STEMI 毫米準則』時<b>別就此鬆手</b>——主動找 OMI 徵象（不成比例 T 波、終末 QRS 扭曲、對應 ST 壓低）、連續追心電圖、床邊超音波看室壁運動，該啟動導管就啟動"
    source: "Smith ECG Blog 7-13"
    href: "https://drsmithsecgblog.com/a-man-in-his-50s-with-acute-chest-pain-see-what-happens-when-it-is-not-a-stemi/#:~:text=Not%20a%20STEMI"
  - text: "遇到又高又大的 T 波，先分辨是<b>高血鉀</b>（基底窄、頂端尖、對稱）還是<b>OMI 超急性 T 波</b>（基底寬、體積飽滿）——同時查血鉀＋看整張圖的冠脈分佈與 ST 走向"
    source: "Smith ECG Blog 7-17"
    href: "https://drsmithsecgblog.com/lets-look-back-at-this-post-from-16-years-ago-how-far-have-we-come-with-these-t-waves/#:~:text=large%20T-waves"
  - text: "打算因『不符 STEMI 準則』<b>取消導管啟動</b>前，讓 AI-ECG 再看一眼當第二意見——在這個最難子集，準則對 OMI 敏感度僅 47%，AI 達 94%（單中心回溯、假說級）"
    source: "J Electrocardiol · Friedman/Smith/Meyers"
    href: "https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "S1Q3T3 · 不等於肺栓塞" }
  - { id: "s2",  num: "02", title: "『不是 STEMI』· 別放走 OMI" }
  - { id: "s3",  num: "03", title: "兩種大 T 波 · 高血鉀 vs 超急性 T" }
  - { id: "s4",  num: "04", title: "AI-ECG · 補準則漏掉的那一半" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## S1Q3T3：像肺栓塞，卻不是肺栓塞 {#s1}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-s1q3t3-misleads/#:~:text=pulmonary%20embolism" anno="看這張圖出現的 <b>S1（I 導程明顯 S 波）＋ Q3T3（III 導程 Q 波與倒置 T）</b>——這正是課本教你聯想到肺栓塞的型態；但要同時對照病人其實是<b>盛夏脫水、進食少的暈厥</b>，型態非特異" linktext="到 ECG Weekly 看這張圖 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）7-13〈ECG Hallucinations：When S1Q3T3 Misleads〉：一位 51 歲卡車司機在休息站短暫暈厥後就診，盛夏、車上冷氣壞掉、進食少、看起來明顯脫水；生命徵象平穩（心率 100、血壓 115/60、血糖 100），心電圖卻跑出課本教你要聯想急性肺栓塞的 S1Q3T3 型態。[^mattu-s1q3t3-07-13]

**為什麼要在意：** S1Q3T3 對肺栓塞其實**<mark>既不敏感也不特異</mark>**——它也出現在健康人、姿勢改變、右心負荷，甚至像本例的脫水／生理壓力。把它當「PE 的證據」，等於在一個更像熱衰竭脫水暈厥的病人身上，啟動一連串不必要的 CT 肺動脈攝影與抗凝評估。 {{< grade "案例 · 教學 · 觀點級" kind="opinion" >}}

**所以呢：** 看到 S1Q3T3，先回到臨床脈絡——有沒有低血氧、持續心搏過速、右心負荷徵象、深部靜脈栓塞風險；缺這些支撐時，把它當一個非特異型態，而不是診斷。

**台灣情境：** 盛夏 ED 塞滿脫水／熱衰竭暈厥，看到 S1Q3T3 別急著開 CTPA。先量血氧、看心率與右心徵象、補液後重評，往往比反射性影像更關鍵——也少讓病人白挨一次顯影劑與輻射。

---

## 「不是 STEMI」：別讓標籤放走 OMI {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/a-man-in-his-50s-with-acute-chest-pain-see-what-happens-when-it-is-not-a-stemi/#:~:text=Not%20a%20STEMI" anno="看這張<b>不符 STEMI 毫米準則</b>的圖，找 OMI 徵象：<b>與 QRS 不成比例的 T 波、終末 QRS 扭曲、對應導程 ST 壓低</b>——這些才是急性冠脈阻塞的線索" linktext="到 Smith 部落格看波形 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）7-13，由 Pendell Meyers 執筆、Smith 評註：一位 50 多歲男性因急性胸痛就診，心電圖不符 STEMI 毫米準則，於是被歸類為「不是 STEMI」。[^smith-notstemi-07-13]

**為什麼要在意：** 標準 STEMI 準則會漏掉多達 **<mark>38% 的 LAD 阻塞</mark>**；被貼上「不是 STEMI／NSTEMI」的病人，導管常被延到數小時後，血管其實已完全血栓阻塞。相對地，OMI 徵象能把對阻塞的敏感度拉高近一倍、又維持高特異度，且已被證實可由 AI 學會。 {{< grade "案例 · 專家判讀 · 觀點級" kind="opinion" >}} [^frick-illusion][^mclaren-omi-review]

**所以呢：** 胸痛病人心電圖「不符 STEMI 準則」時，別就此鬆手——主動找 OMI 徵象、連續追蹤心電圖、床邊超音波看區域性室壁運動異常，該啟動導管就啟動，而不是等一顆遲來的高敏肌鈣蛋白替你決定。

**台灣情境：** 台灣多數 ED 到心導管的路徑仍綁在「STEMI 準則＋door-to-balloon」這條線上。當你判讀是 OMI 但圖不達毫米準則，把理由寫清楚（動態變化、對應壓低、超音波所見）再跟心臟科溝通，比單靠一句「NSTEMI」更能替病人爭取時間。

---

## 兩種又高又大的 T 波：先分高血鉀還是超急性 T {#s3}

{{< ecg-linkout href="https://drsmithsecgblog.com/lets-look-back-at-this-post-from-16-years-ago-how-far-have-we-come-with-these-t-waves/#:~:text=large%20T-waves" anno="並排比較兩種<b>異常大的 T 波</b>：高血鉀的 T 波<b>基底窄、頂端尖、對稱</b>；OMI 超急性 T 波<b>基底寬、體積飽滿、對稱增大</b>——看基底寬窄與周邊 ST 走向" linktext="到 Smith 部落格看兩張 T 波 ↗" >}}

**是什麼：** Smith 心電圖部落格 7-17 回顧 16 年前的經典貼文，並排比較兩種「異常又大的 T 波」——高血鉀的 T 波，與急性冠脈阻塞（OMI）的超急性 T 波。[^smith-twaves-07-17]

**為什麼要在意：** 兩者都又高又大，處置卻南轅北轍——高血鉀要鈣、要降鉀；超急性 T 波要導管、要再灌流。分辨鑰匙在型態：高血鉀 T 波**<mark>基底窄、頂端尖、對稱</mark>**，常伴 QRS 增寬與 P 波變平；超急性 T 波則**<mark>基底寬、體積飽滿</mark>**，坐落在有 ST 變化的冠脈分佈上。 {{< grade "教學 · 型態對比 · 觀點級" kind="opinion" >}}

**所以呢：** 遇到又高又尖的 T 波，第一步不是硬背型態，而是同時查血鉀＋看整張圖的冠脈分佈與 ST 走向，讓型態、電解質、臨床三者互相印證，再決定是推鈣還是叫導管。

**台灣情境：** 洗腎族群在台灣 ED 佔比高，高血鉀 T 波幾乎每班都遇得到；但別因此把每個尖 T 都當高血鉀而略過胸痛病人的超急性 T。血鉀報告回來前，先用型態與臨床把兩條路都攤開，是最安全的做法。

---

## AI-ECG：補上 STEMI 準則漏掉的那一半 OMI {#s4}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1" anno="關鍵發現：在<b>被取消的 STEMI 啟動</b>這個最難子集，STEMI 準則對 OMI 敏感度僅 <b>47.1%</b>，AI 演算法達 <b>94.1%</b>（p=0.005）；陽性／陰性概似比 AI 為 3.51／0.08，遠優於準則的 1.39／0.80" linktext="到 PubMed 看摘要 ↗" >}}

**是什麼：** Journal of Electrocardiology（心電圖學期刊）一篇由 Friedman、Smith、Meyers 等人的回溯研究：在 17 個月、1224 次 STEMI 啟動中，挑出 185 次（15.1%）「因心電圖不符 STEMI 準則而被取消」的啟動，其中 17 例最終證實為 OMI（血管造影罪犯病灶且 TIMI 0–1 血流），比較 STEMI 準則與 AI 演算法揪出 OMI 的能力。[^friedman-ai-omi]

**為什麼要在意：** 在這個最難、最容易漏的子集裡，STEMI 準則對 OMI 的敏感度只有 **<mark>47.1%</mark>**，AI 演算法達 **<mark>94.1%</mark>**（p=0.005），特異度 66.1% vs 73.2%（未達顯著）；陽性／陰性概似比 AI 為 3.51／0.08，把準則的 1.39／0.80 遠遠拋在後面。 {{< grade "回溯 · 單中心 · n=17 · 假說級" kind="retro" >}}

**所以呢：** 把 AI-ECG 當成「被取消的導管啟動」的第二意見——當你或心臟科打算因為「不符 STEMI 準則」取消時，讓演算法再看一眼。但務必記得這是單一中心回溯、OMI 只有 17 例的假說級證據，需要前瞻試驗驗證才談得上改流程。

**台灣情境：** 台灣已有醫院導入 PMcardio／Queen of Hearts 類工具。這篇的價值不在「AI 取代人」，而在提示一個具體用法：把 AI 綁在「準備取消 STEMI 啟動」這個決策點當守門員，比全面掛在每張圖上更務實、也更容易做稽核。

---

## 延伸與出處 {#more}

### 這週四張圖的共同線

本週視窗（2026-07-13 — 2026-07-19）四則新訊號有條清楚主線：**心電圖的「型態」只是線索，不是診斷**。S1Q3T3 不等於肺栓塞（卡 01）、「不是 STEMI」不等於沒有冠脈阻塞（卡 02）、又高又大的 T 波要先分高血鉀還是超急性 T（卡 03）；而在最難的「被取消導管啟動」子集，AI 剛好補上 STEMI 準則漏掉的那一半 OMI（卡 04）。四張圖，同一句提醒：先確認型態代表什麼，再動手。

### 這幾張圖背後的文獻

卡 02 的論點有兩篇同溫層新作支撐。Willy Frick 與 Stephen Smith 在 Journal of Electrocardiology（心電圖學期刊，6-10）的病例〈The illusion of simplicity〉裡，一位 65 歲男性心電圖對 LAD 有特異表現卻不符 STEMI 準則，被歸為 NSTEMI，導管延到 15 小時後才發現 LAD 完全血栓阻塞；文中指出標準準則會漏掉多達 **<mark>38% 的 LAD 阻塞</mark>**。[^frick-illusion] Jesse McLaren、Smith 等人在 Current Opinion in Critical Care（重症照護新觀點，6-01）的 OMI 回顧則整理：OMI 心電圖徵象能讓敏感度倍增、維持高特異度，並可由 AI 學會。[^mclaren-omi-review] Emre Aslanger 團隊本期另有一篇（Journal of Electrocardiology）用心臟磁振（CMR）重評前壁 MI，發現傳統定位分類與梗塞分佈對應不良，ECG 更適合反映**梗塞範圍**而非精確位置。

### 電生理與急救速報（L3／同溫層）

- **Europace（歐洲心律學會期刊）7-14**：〈How Early Should We Ablate Ventricular Tachycardia?〉綜述缺血性 VT 電燒從「救援」走向「預防」的時機爭論。[^europace-vt-0714]
- **European Heart Journal（歐洲心臟期刊）7-17**：西班牙全國兒童長 QT 症候群註冊，371 名兒童、中位追蹤 6 年，主要心律事件僅 **<mark>3.8%</mark>**，且集中在高風險基因型、QTc ≥ 550 ms 或極早發者——支持以基因型＋QTc 為主的分層策略。[^ehj-lqts-0717]
- **Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理，7-08）**：用症狀＋臨床輪廓預測「即將發生的猝死」，AUC 0.745–0.788；胸痛＋心衰、胸痛＋冠心病是關鍵組合，值得放進急診分流思考。[^circ-warning-0708]
- **HRS EP Edge Journal Watch Ep 2（心律學會電生理速覽，7-13）**：CT 導引 VT 電燒、左心耳封堵、心房顫動篩檢、酒精與 AF 風險。[^hrs-epedge-0713]
- **EMCrit RACC-Lit（重症文獻回顧，7-17）**：本月談院前全血是否真的改善預後、雙序列去顫（DSD）會不會傷去顫器、以及 SVT 用腺苷「一次給足」的取捨。[^emcrit-racclit-0717]

### 誰這週有新作

Stephen Smith 的 Dr. Smith's ECG Blog（Smith 心電圖部落格）本週視窗連發兩則：7-13「不是 STEMI」的 OMI 病例（Pendell Meyers 執筆，見卡 02）與 7-17 兩種大 T 波的回顧（見卡 03）。Amal Mattu 的 ECG Weekly（心電圖週刊）7-13 談 S1Q3T3 誤導（見卡 01）。期刊端則有 Frick／Smith、McLaren、Aslanger 各一篇（見上），以及 Friedman／Smith／Meyers 的 AI-ECG 回溯（見卡 04）。Ken Grauer 本週視窗內無新部落格文章。

## 引用 {#refs}

[^mattu-s1q3t3-07-13]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-07-13。原文：「The following ECG is obtained and shows a pattern many clinicians are taught to associate with acute pulmonary embolism … he appears clinically dehydrated」。 https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-s1q3t3-misleads/#:~:text=pulmonary%20embolism

[^smith-notstemi-07-13]: Stephen Smith／Pendell Meyers，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-13。原文：「Written by Pendell Meyers, comments of course by Smith … A man in his 50s … See what happens when it is 'Not a STEMI'」。 https://drsmithsecgblog.com/a-man-in-his-50s-with-acute-chest-pain-see-what-happens-when-it-is-not-a-stemi/#:~:text=Not%20a%20STEMI

[^smith-twaves-07-17]: Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-17。原文：「Steve published this fantastic post 16 years ago which compares 2 important types of abnormally large T-waves. HyperKalemia …」。 https://drsmithsecgblog.com/lets-look-back-at-this-post-from-16-years-ago-how-far-have-we-come-with-these-t-waves/#:~:text=large%20T-waves

[^friedman-ai-omi]: Friedman BS, Malloy-Post R, Smith SW, Meyers HP, et al.，Journal of Electrocardiology（心電圖學期刊），2026。原文：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005) … higher positive and negative likelihood ratios (3.51 and 0.08, respectively) than STEMI criteria (1.39 and 0.80)」。 https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1

[^frick-illusion]: Frick WH, Smith SW，Journal of Electrocardiology（心電圖學期刊），2026-06-10。原文：「standard STEMI criteria fail to identify up to 38% of LAD occlusions, whereas expert interpretation and AI models have far higher sensitivity」。 https://pubmed.ncbi.nlm.nih.gov/42287922/#:~:text=38%25

[^mclaren-omi-review]: McLaren JTT, Nunes de Alencar J, Smith SW，Current Opinion in Critical Care（重症照護新觀點），2026-06-01。原文：「OMI ECG signs double the sensitivity of STEMI criteria, maintain high specificity, and can be learned by AI」。 https://pubmed.ncbi.nlm.nih.gov/41581009/#:~:text=double%20the%20sensitivity

[^europace-vt-0714]: Santoro F, Molinari M, Pellegrino P, Brunetti N，Europace（歐洲心律學會期刊），2026-07-14。標題：「How Early Should We Ablate Ventricular Tachycardia? From Rescue to Prevention in Ischemic VT」。 https://doi.org/10.1093/europace/euag180

[^ehj-lqts-0717]: Perin F, Cartón A, Bermúdez-Jiménez F, et al.，European Heart Journal（歐洲心臟期刊），2026-07-17。原文：「Over a median 6-year follow-up, 14 children (3.8%) experienced MAEs, which occurred predominantly in those with high-risk genotypes, QTc ≥550 ms or very early presentation」。 https://doi.org/10.1093/eurheartj/ehag513

[^circ-warning-0708]: Reinier K, Chugh H, Kadiyala V, et al.，Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-07-08。原文：「Combinations of warning symptoms and clinical features distinguished individuals with SCA from individuals without SCA with good accuracy (AUCs, 0.745–0.788)」。 https://doi.org/10.1161/circep.125.014647

[^hrs-epedge-0713]: Heart Rhythm Society（心律學會）EP Edge Journal Watch, Episode 2，2026-07-13。標題：「CT-Guided VT Ablation, LAA Closure, AF Screening, Alcohol and AF Risk」。 https://www.hrsonline.org/

[^emcrit-racclit-0717]: Scott Weingart，EMCrit RACC-Lit Review（重症文獻回顧），2026-07-17。原文：「Does prehospital whole blood actually improve outcomes? Can DSD damage your defibrillator? Go big or go home for adenosine & SVT?」。 https://emcrit.org/emcrit/racc-lit-2026-july/#:~:text=whole%20blood
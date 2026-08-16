---
title: "異常看起來很小，代價可能很大"
subtitle: "_這週的訊號落在同一條線上——檢傷那張幅度極小的 ST 變化、被當成癲癇的反覆發作、被電腦讀成心房顫動的不規則心律：真正決定結局的，是你有沒有在「看起來沒事」的地方多停一秒。_"
shortTitle: "小異常，大代價"
slug: "2026-W30"
week: "2026-W30"
weekRange: "2026-07-20 — 2026-07-26"
date: 2026-07-26T12:15:10+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 202
picked: 5
tags: ["OMI", "電生理", "Resus"]
practiceChanges:
  - text: "檢傷心電圖的 ST 變化<b>幅度很小</b>不是放行理由——症狀對得上就<b>連拍、比舊圖</b>，並把圖直接交給能決定導管的人"
    source: "Smith ECG Blog 7-24"
    href: "https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures"
  - text: "反覆「癲癇」發作的病人，貼上癲癇標籤前<b>先做一張 12 導程並自己看過</b>——QTc、delta 波、Brugada 型態、傳導阻滯"
    source: "Smith ECG Blog 7-21"
    href: "https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=witnessed%20loss"
  - text: "機器判讀「心房顫動」不等於診斷——先確認<b>不規則到沒有規律 ＋ 沒有可辨識 P 波</b>兩件事都成立；lead II 看不清就改看 <b>V1</b>，再談抗凝"
    source: "ECG Weekly 7-20"
    href: "https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=P%20waves%20are%20difficult%20to%20appreciate"
  - text: "看到高電壓＋ST-T 變化，別停在「LVH，非特異性變化」——改用<b>比例與形態</b>判讀，並比對舊圖"
    source: "LITFL ECG Library 7-20"
    href: "https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance"
  - text: "別把「用運動心電圖排除左主幹」的新模型搬進急診<b>急性</b>胸痛——那是穩定型胸痛的<b>門診分流</b>工具"
    source: "European Heart J 7-23"
    href: "https://doi.org/10.1093/eurheartj/ehag464"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "微小 ST 變化" }
  - { id: "s2",  num: "02", title: "反覆癲癇先做 ECG" }
  - { id: "s3",  num: "03", title: "不規則 ≠ 心房顫動" }
  - { id: "s4",  num: "04", title: "LVH 標準的限制" }
  - { id: "s5",  num: "05", title: "運動 ECG 排除左主幹" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 看起來很小的那一格，可能就是閉塞 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures" anno="看檢傷那張圖<b>幅度極小的 ST-T 變化</b>——判斷關鍵不是抬高幾格，而是<b>形態、對應導程與症狀對不對得上</b>" linktext="到 Smith 部落格看波形 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）7-24：一位 50 多歲、沒有心臟病史但有癲癇病史的病人因胸部不適在檢傷做了一張心電圖。標題本身就是全部的教學重點——「看起來非常小，卻可能是一場災難」。[^smith-small-07-24]

**為什麼要在意：** 「幅度小」正是最容易被放行的那一類。回頭看被取消的導管室啟動就知道代價：17 個月、1224 次 STEMI 啟動裡有 185 次（15.1%）以「心電圖不符 STEMI 標準」被取消，其中 17 人最後證實是真正的血管閉塞（TIMI 0–1）；在這群人身上，STEMI 毫米標準的敏感度是 <mark>47.1%，AI 判讀則是 94.1%</mark>。 {{< grade "回溯 · 單中心 · n=17 · 假說級" "retro" >}} [^friedman-aiecg]

**所以呢：** 檢傷圖「變化很小」時，不要用「不到標準」結案——症狀對得上就連拍心電圖、調舊圖比對，並且把原始圖直接送到能決定導管的人眼前，而不是只送一行判讀結果。

**台灣情境：** 台灣 ED 檢傷心電圖多半先由機器判讀、再由值班醫師掃一眼；當病人主訴是「胸部悶悶的」、又剛好有癲癇之類的替代解釋時，這張圖最容易被歸檔。把「症狀持續就 15–30 分鐘再一張」寫成自己的固定動作，比爭論夠不夠 1 mm 有用。

---

## 反覆「癲癇」，先做一張 12 導程 {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=witnessed%20loss" anno="看這位反覆發作病人的心電圖：在把「癲癇」標籤貼上去之前，先確認 <b>QTc、傳導阻滯、delta 波與 Brugada 型態</b>" linktext="到 Smith 部落格看這張圖 ↗" >}}

**是什麼：** Smith 心電圖部落格 7-21，由 Matthew McArthur 撰寫：一位 40 多歲女性，有目擊者看到的約 3 分鐘意識喪失，且是反覆發作。[^smith-seizure-07-21]

**為什麼要在意：** 抽搐樣動作在心因性昏厥（convulsive syncope）並不罕見，而標籤一旦貼上，病人會走進抗癲癇藥與腦波的路線，心律評估就被跳過。麻煩的是，急診醫師對這一群診斷的掌握度本來就不平均：加拿大急診住院醫師調查顯示 <mark>60% 的訓練計畫沒有結構化心電圖課程</mark>、57.4% 住院醫師每月自學不到 1 小時，且自評信心最低的項目正好是 Brugada 型態、失去奪獲（failure to capture）與雙分支阻滯——都是「癲癇」病人身上最不該漏的線索。 {{< grade "案例教學 ＋ 全國調查 · 觀點級" "opinion" >}} [^mclaren-cjem]

**所以呢：** 反覆發作、有目擊者、發作前有心悸或胸悶、運動中誘發、或發作後很快就清醒——任一條成立，就把 12 導程做完並親自看過 QTc、delta 波、Brugada 型態與傳導阻滯，再談癲癇。

**台灣情境：** 台灣 ED 的「癲癇」個案常常直接進神經內科路線，心電圖只是常規包裹裡的一張紙。把它從「常規」升級成「分流工具」——尤其是首次發作、或原本控制良好卻突然反覆的病人，這張紙有時是唯一提前示警的東西。

---

## 電腦說心房顫動，先確認不規則的樣子 {#s3}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=P%20waves%20are%20difficult%20to%20appreciate" anno="看這張被電腦讀成心房顫動的圖——<b>lead II 的 P 波難辨</b>不等於沒有 P 波；先看 <b>V1</b>、再看 RR 間期是不是有<b>可重現的型態</b>" linktext="到 ECG Weekly 看這張圖 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）7-20〈ECG Hallucinations: When Irregular Is Not Atrial Fibrillation〉：69 歲男性因胸痛就診，電腦判讀為心房顫動——節律確實不規則、lead II 的 P 波難以辨認，第一眼看起來完全合理，細看卻是另一回事。[^mattu-af-07-20]

**為什麼要在意：** 心房顫動這個標籤會改變整條路徑：抗凝、速率控制、住院與長期追蹤都跟著跑。但真正的心房顫動需要<mark>兩件事同時成立</mark>——不規則到沒有規律，而且沒有可辨識的心房活動；只滿足「不規則」的節律很多：多源性心房頻脈、成串房性早期收縮、房撲變傳導比、文氏型二度房室阻滯（RR 有可重現的型態）。這不是單一題目的偶發陷阱——同系列兩週前那題，敗血症發燒發抖的病人也是電腦讀成心房顫動、<mark>再被判讀醫師「確認」一次</mark>。 {{< grade "案例 · 教學題組 · 觀點級" "opinion" >}} [^mattu-irregular-07-06]

**所以呢：** 在寫下心房顫動之前，先做三個動作——lead II 看不清就改看 V1（必要時加長節律條或 Lewis lead）、量 RR 間期找有沒有可重現的型態、確認基線飄動不是被顫抖或雜訊假造出來的。

**台灣情境：** 台灣 ED 的機器判讀常被直接抄進病歷，接著 CHA₂DS₂-VASc 一算、抗凝就開下去，門診再也沒有人回頭質疑那張圖。發燒、發抖、洗腎後、躁動的病人尤其容易「假 AF」——這些人恰好也是出血風險最不容忽視的一群。

---

## 左心室肥厚標準：知道它不準，比背它更重要 {#s4}

{{< ecg-linkout href="https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance" anno="這篇回顧的重點不是背下 Sokolow-Lyon 或 Cornell，而是它們的<b>診斷表現與限制</b>——以及 LVH 如何在急診同時<b>製造假陽性、掩蓋真閉塞</b>" linktext="到 LITFL 看整篇回顧 ↗" >}}

**是什麼：** LITFL（Life in the Fast Lane）心電圖圖書館 7-20，由 Mike Cadogan 與 Robert Buttner 更新〈ECG criteria for left ventricular hypertrophy〉：從 Sokolow-Lyon、Cornell 到 Romhilt-Estes 點數系統的歷史沿革、診斷表現、限制與現代定位。[^litfl-lvh-07-20]

**為什麼要在意：** 電壓標準的共同弱點是<mark>敏感度不足、特異度相對高</mark>——瘦而胸壁薄的年輕人容易假陽性，肥胖與慢性阻塞性肺病則容易假陰性。但在急診真正致命的不是漏掉 LVH：而是把 LVH with strain 的 ST 抬高與 T 波倒置當成 OMI 送進導管室，或反過來，把 LVH 當成萬用解釋、蓋掉底下真正的閉塞。 {{< grade "文獻回顧 · 教學資源 · 觀點級" "opinion" >}}

**所以呢：** 高電壓的胸痛心電圖不要停在「LVH，非特異性 ST-T 變化」——改看比例（ST 抬高相對於該導程 QRS 振幅是否過度）、看形態（T 波與 QRS 主波的不一致是否合理）、比舊圖、連拍。

**台灣情境：** 台灣高血壓與洗腎族群龐大，LVH 圖形在 ED 幾乎天天出現，也是「非典型胸痛」最常被收進去的解釋。把 LVH 當成需要提高警覺的背景雜訊，而不是結案理由——這群人本來就是冠心症的高風險族群。

---

## 運動心電圖被重新定位成「排除左主幹」 {#s5}

{{< ecg-linkout href="https://doi.org/10.1093/eurheartj/ehag464" anno="MASTER 研究：臨床變項＋運動心電圖模型的 <b>AUC .78</b>；在 5% 盛行率假設下<b>陰性預測值 98.2%</b>，可省下 41% 的侵入性攝影" linktext="到 European Heart Journal 看原文 ↗" >}}

**是什麼：** European Heart Journal（歐洲心臟期刊）7-23 刊出 MASTER 研究：多中心病例對照，335 位左主幹（或左主幹等同）病變病人對上 797 位對照，全都是慢性冠心症候群、在最大運動心電圖之後接受侵入性冠狀動脈攝影；作者用臨床變項加上運動心電圖變項建立風險模型並做內外部驗證。[^master-ehj-07-23]

**為什麼要在意：** 模型 AUC 為 .78；在假設 5% 左主幹盛行率、且「白做一次攝影」與「漏掉一例」的代價比為 1:100 的前提下，<mark>陰性預測值 98.2%</mark>，可以安全省下 <mark>41% 的侵入性攝影</mark>，代價是<mark>每省 58 次攝影漏掉 1 例</mark>。它的價值在於把一個老工具重新定位成「排除用」而非「診斷用」。 {{< grade "病例對照 · 多中心 · n=1132 · 需前瞻驗證" "retro" >}}

**所以呢：** 這條線不能搬進急診的急性胸痛評估——研究族群是穩定的慢性冠心症候群、且是做得動運動測試的人。它真正影響的是 ED 之後：對已排除急性冠心症、要決定門診怎麼走的病人，在冠狀動脈電腦斷層取得受限的地方，運動心電圖仍有排除價值。

**台灣情境：** 台灣區域醫院與診所的運動心電圖仍是最容易排到的檢查，而冠狀動脈電腦斷層排程常以週計。ED 給的離院衛教如果只寫「請至心臟科追蹤」，很多人最後就是走進跑步機——這篇至少讓你知道那條路的天花板在哪、以及該叮嚀病人症狀變化就要回來。

---

## 延伸與出處 {#more}

### 這週五張卡的共同線

本週視窗（2026-07-20 — 2026-07-26）的訊號都指向同一件事：**訊號的「大小」與它的「代價」無關**。檢傷圖上小到幾乎看不出來的 ST 變化可能是閉塞（卡 01）、被當成癲癇的反覆發作可能來自心律（卡 02）、電腦一行「心房顫動」就能改寫病人往後十年的用藥（卡 03）、LVH 這個看似無害的背景既能製造假陽性也能掩蓋真閉塞（卡 04）。而卡 05 反過來提醒：一個排除能力不錯的模型，也只在它被驗證的族群裡有效。

### 期刊速報

**電生理／節律**：Europace（歐洲心臟節律學會期刊）7-20 專家觀點回顧傳導系統節律（conduction system pacing），把它定位為右心室與雙心室節律之外更符合生理的選項，並整理現有證據與適應症。[^europace-csp-07-20] JAMA Cardiology（美國醫學會心臟學期刊）7-22 一篇回顧則把注意力拉到心房：心房不同步長期被忽略，Bachmann 束節律可能是心房再同步的下一個標的。[^jamacardio-bachmann-07-22]

**判讀陷阱**：European Heart Journal（歐洲心臟期刊）7-21 一則案例——心房間電氣分離在遠端監測上被呈現為「假性心室頻脈」；遠端傳來的 VT 警示，還是要調原始圖來看。[^ehj-pseudovt-07-21] Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理）7-24 針對心房轉位手術後的典型心房撲動做高密度標測：關鍵基質是手術切口與三尖瓣環之間的中隔走廊，<mark>92% 的病例在此有慢傳導</mark>，作者主張這類病人應常規考慮腔靜脈—三尖瓣峽部電燒。[^circep-flutter-07-24]

**瓣膜／壓力測試**：JAMA Cardiology 7-22 的 EARLY TAVR 跑步機測試登錄顯示，被判定「無症狀」的重度主動脈瓣狹窄病人中，<mark>15.2% 在測試中被測出症狀或血壓下降</mark>；測試本身安全，但這群有明確適應症的人裡仍有 20% 在一年後未接受換瓣。[^jamacardio-tst-07-22]

**Resus 速記**：Resuscitation（急救期刊）9 月號一篇評論〈Beyond patient outcomes: considering device safety during dual defibrillation〉主張評估雙序列去顫時，除了病人預後，也該把去顫器本身的耐受度納入考量——呼應上期 EMCrit 提出的同一個問題。[^resus-dsd]

### 誰這週有新作

Stephen Smith 的 Dr. Smith's ECG Blog（Smith 心電圖部落格）本週視窗連發兩則：7-21 由 Matthew McArthur 撰寫的反覆發作案例（卡 02）、7-24 的檢傷微小變化案例（卡 01）。Amal Mattu 的 ECG Weekly（心電圖週刊）7-20 續寫 ECG Hallucinations 系列（卡 03）。LITFL 由 Mike Cadogan 與 Robert Buttner 於 7-20 更新左心室肥厚判讀標準整篇回顧（卡 04）。

Jesse McLaren 與 Emre Aslanger 本週視窗內無新作；McLaren 6 月的加拿大急診住院醫師心電圖能力調查於卡 02 引為支撐，Aslanger 6 月在 Journal of Electrocardiology（心電圖學期刊）的心臟磁振對照研究則值得單獨記一筆——前壁梗塞的傳統心電圖「定位分類」與磁振顯示的梗塞分布對應不佳，反而是整體 ST 段負荷與梗塞大小有關，也就是說心電圖比較適合反映傷害的**量**，而不是精確的**位置**。[^aslanger-cmr]

## 引用 {#refs}

[^smith-small-07-24]: Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-24。原文：「A 50 something with no previous cardiac history, but with history of seizures, presented to triage with a…」。 https://drsmithsecgblog.com/lookssmallbutcouldhavebeendisaster/#:~:text=history%20of%20seizures

[^friedman-aiecg]: Friedman BS、Malloy-Post R、Smith SW、Meyers HP 等，Journal of Electrocardiology（心電圖學期刊），2026-01-01。原文：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」。 https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=47.1%25%20vs%2094.1%25

[^smith-seizure-07-21]: Matthew McArthur／Stephen Smith，Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-07-21。原文：「Written by Matthew McArthur I saw a 40 year old female who had a ~3 minute, witnessed loss…」。 https://drsmithsecgblog.com/recurrent-seizures-in-a-40-something-woman/#:~:text=witnessed%20loss

[^mclaren-cjem]: Mastrangelo E、El-Baba M、Patocka C、McLaren JTT 等，CJEM（加拿大急診醫學期刊），2026-06-20。原文：「A majority (60%) of program directors reported no structured ECG curriculum, and most (57.4%) residents reported < 1 h of ECG self-study per month… gaps with low efficacy (e.g., for bifascicular block, failure to capture, Brugada pattern…)」。 https://pubmed.ncbi.nlm.nih.gov/42323520/#:~:text=no%20structured%20ECG%20curriculum

[^mattu-af-07-20]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-07-20。原文：「The rhythm is irregular, P waves are difficult to appreciate in lead II, and the automated interpretation seems plausible at first glance. But a closer look reveals a different story.」。 https://ecgweekly.com/weekly-workout/ecg-hallucinations-when-irregular-is-not-atrial-fibrillation/#:~:text=P%20waves%20are%20difficult%20to%20appreciate

[^mattu-irregular-07-06]: Amal Mattu，ECG Weekly Workout（心電圖週刊），2026-07-06。原文：「The baseline is poor, atrial activity is difficult to identify, and the computer interpretation reads atrial fibrillation. The diagnosis is then confirmed by the interpreting physician.」。 https://ecgweekly.com/weekly-workout/the-rhythm-behind-the-irregularity/#:~:text=computer%20interpretation%20reads%20atrial%20fibrillation

[^litfl-lvh-07-20]: Mike Cadogan、Robert Buttner，LITFL ECG Library（LITFL 心電圖圖書館），2026-07-20。原文：「Review the principal ECG criteria for left ventricular hypertrophy, their historical development, diagnostic performance, limitations and modern use.」。 https://litfl.com/ecg-criteria-for-left-ventricular-hypertrophy/#:~:text=diagnostic%20performance

[^master-ehj-07-23]: De Carlo M、Malanima M、Baglietto L、Bazan L 等，European Heart Journal（歐洲心臟期刊），2026-07-23。原文：「negative predictive value was 98.2%. Thus, CAG could be safely avoided in 41% of patients, missing one LMCAD/LMCAD-equivalent diagnosis for every 58 CAGs safely spared in patients without them.」。 https://doi.org/10.1093/eurheartj/ehag464

[^europace-csp-07-20]: Burri H、Mežnar A、Witte K，Europace（歐洲心臟節律學會期刊），2026-07-20。原文：「Conduction system pacing is a major milestone in cardiac stimulation and is being increasingly adopted as a more physiological alternative to right ventricular and biventricular pacing.」。 https://doi.org/10.1093/europace/euag181

[^jamacardio-bachmann-07-22]: Kim J、Kaza N、Zuhair M、Naraen A 等，JAMA Cardiology（美國醫學會心臟學期刊），2026-07-22。原文：「Bachmann bundle pacing represents a potential strategy to restore physiological atrial activation by engaging the dominant interatrial conduction pathway.」。 https://doi.org/10.1001/jamacardio.2026.2226

[^ehj-pseudovt-07-21]: Boiteux C、De Larochellière H、Steinberg C，European Heart Journal（歐洲心臟期刊），2026-07-21。原文：「Interatrial electrical dissociation resulting in pseudo-ventricular tachycardia on remote monitoring」。 https://doi.org/10.1093/eurheartj/ehag552

[^circep-flutter-07-24]: Ditac G、Johner N、Verhaeghe L、Plant A 等，Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-07-24。原文：「Slow conduction (30 cm/s) was identified in this septal corridor in 92% of peritricuspid flutters… Systematic cavotricuspid isthmus ablation should, therefore, be considered in these patients.」。 https://doi.org/10.1161/circep.125.014777

[^jamacardio-tst-07-22]: Généreux P、Schwartz A、Lindman B、Chhatriwalla A 等，JAMA Cardiology（美國醫學會心臟學期刊），2026-07-22。原文：「TST was found to be safe and identified symptoms and AVR indication in approximately 15% of patients. However, 20% of those patients remained untreated at 1 year, despite having an indication for prompt treatment.」。 https://doi.org/10.1001/jamacardio.2026.2527

[^resus-dsd]: Humar M、Nehme Z，Resuscitation（急救期刊），2026 年 9 月號。原文：「Beyond patient outcomes: considering device safety during dual defibrillation」。 https://doi.org/10.1016/j.resuscitation.2026.111208

[^aslanger-cmr]: Aslanger EK、Aggül B、İnan D、Taşdelen N 等，Journal of Electrocardiology（心電圖學期刊），2026-06-28。原文：「conventional ECG localization categories and simplified ST-axis orientation showed poor or inconsistent correspondence with CMR-defined infarct distribution, whereas global ST-segment burden showed a modest association with infarct size」。 https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=poor%20or%20inconsistent%20correspondence
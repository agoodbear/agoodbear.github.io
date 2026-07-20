---
title: "真正的關鍵，藏在兩拍之間"
subtitle: "_這週四個訊號都落在同一條時間軸上——post-ROSC 的昏迷不該蓋過 ECG 上的 STEMI、胸痛緩解的那張正常心電圖不是綠燈、DSED 真正贏在兩次電擊之間、AF 電燒的致命併發症藏在術後那幾週；別在間隔裡鬆手。_"
shortTitle: "別在間隔裡鬆手"
slug: "2026-W20"
week: "2026-W20"
weekRange: "2026-05-11 — 2026-05-17"
date: 2026-05-17T14:59:22+08:00
coreTime: "3 分鐘"
fullTime: "21 分鐘"
readingTime: "21 分鐘"
picked: 4
tags: ["OMI", "電生理", "AI ECG", "Resus"]
practiceChanges:
  - text: "ROSC 後 ECG 抓到 <b>STEMI pattern（persistent ST elevation + reciprocal changes）</b>就啟動 cath lab protocol，別因 <b>coma／GCS 低</b>先觀察；不確定的 ST 變化就每 10 分鐘連拍"
    source: "ECG Weekly 5-11"
    href: "https://ecgweekly.com/weekly-workout/post-arrest-stemi-cath-lab-or-caution/#:~:text=Forty%20minutes%20later%2C%20the%20patient%20remains%20comatose"
  - text: "只要病人仍有 <b>persistent 或 recurrent chest pain</b>，每 <b>15 分鐘</b>連拍一張 ECG 當 default，別等 troponin 回來才追；胸痛緩解的那張正常 ECG 不能 sign-off"
    source: "Dr. Smith's ECG Blog 5-13"
    href: "https://drsmithsecgblog.com/chest-pain-in-a-50-something-how-important-are-serial-ecgs-in-patients-with-persistent-pain/#:~:text=A%2050%2Dsomething%20man%20had,About%20an%20hour%20later"
  - text: "收到「<b>兩三週前剛做完 AF ablation</b>、現在發燒／胸痛／神經學症狀」的病人，把 <b>atrioesophageal fistula</b> 放進 differential 前三名——第一線是 <b>CT chest with PO contrast</b>"
    source: "HRS The Lead Ep 150"
    href: "https://www.hrsonline.org/news/the-lead-podcast/episode-150"
  - text: "走 <b>DSED</b> 打 refractory VF 時，重點放在縮短<b>兩次電擊之間的 VF 時間</b>——charge-to-shock cycle 緊湊、rhythm check pause <b>< 5 秒</b>，而非執著於換 pad 位置"
    source: "REBEL EM 5-11"
    href: "https://rebelem.com/double-defib/#:~:text=secondary%20analysis%20of%20the%20DOSE%2DVF%20Trial"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "昏迷 post-ROSC · 該不該進 cath lab" }
  - { id: "s2",  num: "02", title: "胸痛緩解 · serial ECG" }
  - { id: "s3",  num: "03", title: "AF 電燒 · 術後致命併發症" }
  - { id: "s4",  num: "04", title: "DSED · 贏在兩次之間" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 昏迷不該推翻 ECG 上的 STEMI {#s1}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/post-arrest-stemi-cath-lab-or-caution/#:~:text=Forty%20minutes%20later%2C%20the%20patient%20remains%20comatose" anno="看這位 72 歲 OHCA 病人——<b>ROSC 後 40 分鐘仍昏迷</b>，ECG 卻是 <b>new septal ST elevation + bifascicular block + reciprocal changes</b>；coma 該不該推翻這些客觀證據？" linktext="到 ECG Weekly 看這集 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）Amal Mattu 5-11〈Post-Arrest STEMI: Cath Lab or Caution?〉，把 W19 那位 72 歲 OHCA 男性（bystander CPR、non-shockable rhythm、ROSC after 1 dose epi、post-ROSC ECG 新出 RBBB + LAFB）接續下去——40 分鐘後病人仍 comatose，ECG 出現 new septal ST elevation、new bifascicular block 與 reciprocal changes。核心提問：這位昏迷病人該不該立刻送 cath lab？[^mattu-05-11]

**為什麼要在意：** 過去十年的 evidence base 有兩大 RCT——COACT（NEJM 2019）與 TOMAHAWK（NEJM 2021），都在 OHCA without STEMI on ECG 比較 immediate vs delayed angiography，結果都是 no difference in survival；但兩篇的 inclusion 都明確排除「ECG 上有 STEMI 的病人」，代表<mark>「STEMI on ECG 仍應立刻去 cath lab」這條 default 沒被推翻</mark>。Mattu 的取向：<mark>當 persistent ST elevation + reciprocal changes + new conduction abnormality 同時擺出來，coma 本身不該成為延遲 angiography 的理由</mark>。 {{< grade "案例 · podcast · 觀點級" "opinion" >}} [^mattu-05-11]

**所以呢：** ROSC 後 ECG 抓到 STEMI pattern → 立刻啟動 STEMI protocol，別因 coma／GCS 低就先觀察；抓到「不確定的 ST changes／new BBB without clear STEMI」→ 每 10 分鐘 serial ECG，分辨是 transient post-arrest changes 還是 evolving STEMI。post-ROSC ECG 不是一張、是 series。

**台灣情境：** 台灣 ED OHCA SOP 可以從這個 case 延伸兩條 audit indicator——post-ROSC ECG-to-cath 時間（ROSC 到 cath lab activation 的中位數），以及 comatose post-ROSC STEMI 的 cath lab 啟動率（分母是「ROSC + ECG 上 STEMI pattern」，分子是「實際送 cath lab」）。落在 < 30 分鐘、> 80% 代表沒掉隊。

---

## 胸痛緩解，不是可以走的綠燈 {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/chest-pain-in-a-50-something-how-important-are-serial-ecgs-in-patients-with-persistent-pain/#:~:text=A%2050%2Dsomething%20man%20had,About%20an%20hour%20later" anno="看這位 50 多歲男性——<b>胸痛發作後緩解、約一小時後又復發</b>；第一張看似不急的 ECG，能不能當 disposition 的依據？" linktext="到 Smith 部落格看波形 ↗" >}}

**是什麼：** Dr. Smith's ECG Blog（Smith 心電圖部落格）5-13〈Chest pain in a 50-something. How important are serial ECGs in patients with persistent pain?〉：50 歲男性陣發胸痛，發作後疼痛緩解，約一小時後胸痛再次出現。Smith 的核心提問——當第一張 ECG 看似不那麼急、病人胸痛也已緩解，下一步該如何 disposition？[^smith-05-13]

**為什麼要在意：** Smith blog 一貫立場：<mark>胸痛 active 的當下抓 ECG，跟胸痛 resolved 的 ECG，是兩個不同的診斷工具</mark>。當電腦判讀寫「normal sinus rhythm, no acute ST-T changes」而病人還在喊痛——<mark>這張 ECG 跟下一張 ECG 之間的 dynamic change，才是 OMI 真正能被抓到的時機</mark>。胸痛緩解後第一張 normal ECG 不能 sign-off；胸痛復發那一刻必須有第二張 ECG 同步在跑。 {{< grade "案例 · 教學 · 觀點級" "opinion" >}} [^smith-05-13]

**所以呢：** 只要病人在 ED 內仍有 persistent 或 recurrent chest pain，每 15 分鐘抓一張 ECG 是 default，不是「troponin 結果出來再看」。把「胸痛已緩解、ECG 看起來 normal」當成 disposition 綠燈，是可預防的漏接。

**台灣情境：** ED triage 動線設計上，要把「persistent／recurrent chest pain」當成獨立 flag，而不是合併到「troponin pending」一起等。「persistent／recurrent chest pain 的 serial ECG 間隔 ≤ 15 分鐘」值得寫進 triage protocol，不是個案處理。

---

## AF 電燒的風險，藏在術後那幾週 {#s3}

{{< ecg-linkout href="https://www.hrsonline.org/news/the-lead-podcast/episode-150" anno="TiFFANY 第一次把 AF 電燒致死不良事件抬到 <b>FDA 強制通報系統（MAUDE）</b>層級看——ED 端要記住的是 <b>atrioesophageal fistula</b> 這個術後延遲併發症" linktext="到 HRS 聽這集 ↗" >}}

**是什麼：** HRS The Lead Podcast Episode 150（2026-05-14）放下 TiFFANY Study——"Total Fatal Adverse Events Following Atrial Fibrillation Ablation Reported in an FDA Mandatory Reporting System: A Matter of Concern?"，是 HRS 2026 大會公布的 registry-based safety analysis，把 AF ablation 後致死性 AE 從 single-center 報告抬升到 FDA 強制通報系統（MAUDE）層級彙整分析。[^hrs-lead-150]

**為什麼要在意：** 意義不在「ablation 危險」這個老結論，而在<mark>第一次有人系統性回看 FDA 強制通報資料</mark>——過去多以 single-center registry 或 medical examiner case series 報告，selection bias 很大，而 MAUDE 是強制通報、不挑 institution，更接近真實 denominator。對 ED 端的衝擊在 atrioesophageal fistula（AEF）：<mark>ablation 後 2–4 週才出現、致死率 ≥50% 的延遲併發症，典型 triad 是 fever + chest pain + neurological symptoms</mark>。 {{< grade "回溯 · FDA MAUDE 登錄 · 安全性分析" "retro" >}} [^hrs-lead-150]

**所以呢：** 收到「最近兩三週做完 AF ablation、現在不太對勁」的病人，把 AEF 放進 differential 前三名——第一線影像是 CT chest with PO contrast（不是只有 IV contrast），對比劑或空氣進入左心房就是鐵證；同步 blood culture × 2、CT head（rule out air／septic embolism）、緊急 cardiothoracic surgery consult。

**台灣情境：** 台灣 EP 端 informed consent 已逐步把這條 AE 寫進來，ED 端的補位是「收到病人主訴時想到 ablation 史」。實務病史 trigger：問「您最近三個月內有做過心臟導管手術嗎？特別是 atrial fibrillation 的電燒？」

---

## DSED 真正贏在兩次電擊之間 {#s4}

{{< ecg-linkout href="https://rebelem.com/double-defib/#:~:text=secondary%20analysis%20of%20the%20DOSE%2DVF%20Trial" anno="DOSE-VF 次級分析回看電擊檔案——DSED 與 VC 的存活優勢，很可能來自 <b>兩次電擊之間 VF 持續時間縮短</b>，而非電擊本身" linktext="到 REBEL EM 看導讀 ↗" >}}

**是什麼：** REBEL EM 5-11〈Alternate Defibrillation Strategies for Refractory Ventricular Fibrillation〉導讀 DOSE-VF 的 secondary analysis。DOSE-VF 是 2022 年公布的 RCT，比較 OHCA refractory VF 三組——standard defibrillation、vector change（VC，pad 從 anterior-anterior 改 anterior-posterior）、double sequential external defibrillation（DSED，兩台 defibrillator 接力 charge）；原始結果 DSED 與 VC 兩組 survival benefit 都優於 standard。[^rebel-dose-vf]

**為什麼要在意：** 這個 secondary analysis 回看 defibrillation files，量測兩次電擊之間 VF 持續的時間（inter-shock VF duration）。結果發現 <mark>DSED 與 VC 兩組的 inter-shock VF duration 比 standard 組明顯縮短</mark>——這個時間差很可能就是 survival benefit 的主要機轉，而<mark>不是電擊本身的能量或波形差異</mark>。 {{< grade "回溯 · DOSE-VF 次級分析" "retro" >}} [^rebel-dose-vf]

**所以呢：** 走 DSED protocol 時，最關鍵的不是「裝兩台 defibrillator」這個動作，而是確保兩次電擊之間 VF 不要重新 organize——CPR quality 不能掉（持續 compression 縮短 perfusion gap）、charge-to-shock cycle 緊湊（一人專責 charge、一人專責 deliver）、rhythm check pause < 5 秒。接力 charge 的速度可能比換 pad 位置更關鍵。

**台灣情境：** 台灣 ED OHCA／IHCA refractory VF 可以拉出一條 charge-to-shock cycle audit：pause for rhythm check < 5 秒、charge-to-shock cycle 緊湊、若採 DSED protocol，兩台 defibrillator 接力 charge 訓練到 < 10 秒 inter-shock interval。

---

## 延伸與出處 {#more}

### 這週的共同線

本週視窗（2026-05-11 — 2026-05-17）四個訊號，剛好都落在同一條時間軸上：**決定成敗的常不是「當下那一張圖／那一下電擊」，而是兩次之間、或後續那段時間發生的事**。post-ROSC 的昏迷不該蓋過 ECG 上的 STEMI，真正的判斷在 ROSC 後那段時間的 serial ECG（卡 01）；胸痛緩解的第一張正常 ECG 不是綠燈，OMI 藏在下一張圖之間的 dynamic change（卡 02）；AF 電燒的致命併發症不在術中、而在術後 2–4 週（卡 03）；DSED 真正贏的也不是電擊本身，而是兩次電擊之間 VF 被壓短的那段時間（卡 04）。四者同一句話：別在間隔裡鬆手。

### 期刊速報

**電生理／VT 消融**：HRS The Lead Ep 148（5-14）同週放下 VINTAGE first-in-human——把 refractory VT ablation 從 endocardial／epicardial 推進到 intramyocardial（心肌中層）navigation 的概念驗證；ED 端不直接 actionable，但要知道 electrical storm 病人的轉診選項變多，過去只能 amiodarone + esmolol + propranolol + deep sedation + ECMO 撐到 transplant 的 refractory case，會慢慢有更多 ablation 解法。[^hrs-lead-148] 同條軌跡上，stereotactic arrhythmia radiotherapy（STAR）也在累積數據（ESC 子刊 4-12 STARNL registry）。

**毒物／心律**：Ken Grauer 的 JACC Case Reports（4-08，超出本週視窗、補充收錄）報告一例南亞傳統藥草 jadwār（*Delphinium denudatum*）含 aconitine-like alkaloids 引起 sodium channel-mediated cardiotoxicity——中藥／草藥引起的 VT 是 differential 之一，lidocaine + magnesium 是 mechanism-based therapy。[^grauer-delphinium]

**暈厥**：Jesse McLaren 等 BMJ（4-16，超出本週視窗、補充收錄）practice review〈Recognising cardiac syncope〉，從 ED 端 framework 講 cardiac syncope 的辨識、風險分層與收住院 indication，可直接拿來上晨會。[^mclaren-syncope]

**AI ECG**：ESC 子刊 5-09 一篇 AI-enabled ECG imaging for cardiac amyloidosis across amyloidosis subtypes 進入 cache——AI ECG 從「AF screening／OMI detection」往「structural diagnosis」（amyloid、HCM、aortic stenosis）延伸的指標；短期對 ED 端不直接 actionable，wearable 的 rhythm trace 仍是「補充」不是「取代」，12-lead ECG 為 standard。（此為 cache 訊號，本週未深寫，無獨立引用）

### 誰這週有新作

Stephen Smith 的 Dr. Smith's ECG Blog（Smith 心電圖部落格）本週視窗連發兩則：5-10 Magnus Nossen 客座的 unusual Wide Complex Tachycardia 教案（回顧某病人 prior ECG 時抓到的一張少見 WCT，提醒 WCT 的鑑別不只 VT vs SVT-with-aberrancy 兩條路，還有 preexcited／pacing-induced／metabolic-induced tachycardia；ED 端 default 仍是 treat as VT until proven otherwise，但要養成同步調 prior ECG 看 baseline conduction 的反射）[^smith-05-10]，以及 5-13 的 serial ECG 教案（見卡 02）。ECG Weekly（心電圖週刊）Mattu 5-11 把 W19 那位 post-arrest 病人接續完（見卡 01）。

Smith 本人本週 PubMed 端無新作；Pendell Meyers、Robert Herman、Sam Ghali 本週 PubMed 亦無新作，Emre Aslanger 5-06 IC-ECG 已於 W19 涵蓋。整體本週 PubMed 作者端新作密度低，主訊號集中在 Smith blog 與 HRS 大會 podcast。

## 引用 {#refs}

[^mattu-05-11]: Amal Mattu, ECG Weekly Workout, 2026-05-11: "Post-Arrest STEMI: Cath Lab or Caution?"「A 72-year-old man is brought to the ED after witnessed cardiac arrest... Forty minutes later, the patient remains comatose, and the ECG shows new septal ST elevation with new bifascicular block and reciprocal changes.」→ [ecgweekly.com](https://ecgweekly.com/weekly-workout/post-arrest-stemi-cath-lab-or-caution/#:~:text=Forty%20minutes%20later%2C%20the%20patient%20remains%20comatose)

[^smith-05-13]: Stephen W. Smith, Dr. Smith's ECG Blog, 2026-05-13: "Chest pain in a 50-something. How important are serial ECGs in patients with persistent pain?"「A 50-something man had onset of chest pain which then resolved. About an hour later, the chest pain...」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/chest-pain-in-a-50-something-how-important-are-serial-ecgs-in-patients-with-persistent-pain/#:~:text=A%2050%2Dsomething%20man%20had,About%20an%20hour%20later)

[^hrs-lead-150]: Heart Rhythm Society, The Lead Podcast Episode 150, 2026-05-14: "Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Total Fatal Adverse Events Following Atrial Fibrillation Ablation Reported in an FDA Mandatory Reporting System: A Matter of Concern? The TiFFANY Study" → [HRS official podcast](https://www.hrsonline.org/news/the-lead-podcast/episode-150)

[^rebel-dose-vf]: REBEL EM, 2026-05-11: "Alternate Defibrillation Strategies for Refractory Ventricular Fibrillation"「In this secondary analysis of the DOSE-VF Trial... the authors reviewed defibrillation files from the initial study to answer whether reduced time in VF between shocks could explain the survival benefits noted in the original trial.」→ [rebelem.com](https://rebelem.com/double-defib/#:~:text=secondary%20analysis%20of%20the%20DOSE%2DVF%20Trial)

[^hrs-lead-148]: Heart Rhythm Society, The Lead Podcast Episode 148, 2026-05-14: "Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms (VINTAGE): First-in-Human Experience with a Novel Therapy for Refractory VT" → [HRS official podcast](https://www.hrsonline.org/news/the-lead-podcast/episode-148)

[^grauer-delphinium]: Rassani N, Grauer K. "Sodium Channel-Mediated Ventricular Arrhythmia After *Delphinium denudatum* Ingestion Managed Conservatively in a Resource-Limited Setting." JACC Case Reports 2026-04-08 (PMID 41746248)「Early sodium-channel blockade with lidocaine and structured cardiac monitoring can be lifesaving in plant-based cardiotoxicity.」→ [PubMed 41746248](https://pubmed.ncbi.nlm.nih.gov/41746248/#:~:text=Early%20sodium%2Dchannel%20blockade%20with%20lidocaine)

[^mclaren-syncope]: McLaren J, Morris R, Lovell LM. "Recognising cardiac syncope." BMJ 2026-04-16 (PMID 41991194) → [PubMed 41991194](https://pubmed.ncbi.nlm.nih.gov/41991194/)

[^smith-05-10]: Magnus Nossen (via Dr. Smith's ECG Blog), 2026-05-10: "Can you figure out this unusual Wide Complex Tachycardia?"「I was reviewing a patient's prior ECGs for an ongoing study when I came across...」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/can-you-figure-out-this-unusual-wide-complex-tachycardia/#:~:text=I%20was%20reviewing%20a%20patient%27s%20prior%20ECGs)

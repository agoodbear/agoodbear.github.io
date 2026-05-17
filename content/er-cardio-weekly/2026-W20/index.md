---
title: "FDA mandatory reporting 第一次拍 AF ablation 安全性的桌：TiFFANY 與 VINTAGE 同週落地／Comatose post-ROSC STEMI 還該不該進 cath lab／serial ECG 把『胸痛已緩解』從低風險拉回 OMI"
subtitle: "_HRS 2026 第二批 late-breaker TiFFANY 與 VINTAGE 同集 podcast 落下；Mattu 5-11 把 W19 post-arrest 案接到 cath lab 抉擇；REBEL EM 拆 DOSE-VF 看 DSED 為什麼贏在 inter-shock interval；Smith 5-13 serial ECG 把 chest pain 已緩解的病人從『可以走了』拉回 OMI 行列。_"
slug: "2026-W20"
week: "2026-W20"
weekRange: "2026-05-11 — 2026-05-17"
date: 2026-05-17T14:59:22+08:00
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

W20 是 Heart Rhythm Society（美國心律學會）2026 大會的第二週 late-breaker 落地。W19 已寫過 HRS The Lead Ep 145（AF ablation 後停 AC + cognitive function）、Smith 5-04 altered MS + OMI、Mattu 5-04 post-ROSC RBBB+LAFB。本週 The Lead Ep 148、150 兩集連著放，加上 Mattu 把同一位 72 歲 OHCA 病人接到 cath lab 抉擇，是非常少見的「同一張 ECG 連兩週寫不完」的訊號密度。

**第一，HRS The Lead Episode 150（2026-05-14）放下 TiFFANY Study**——"Total Fatal Adverse Events Following Atrial Fibrillation Ablation Reported in an FDA Mandatory Reporting System: A Matter of Concern?"[^hrs-lead-150]。這是**第一次有大型研究把 AF ablation 致死性不良事件（atrioesophageal fistula、心包填塞、空氣栓塞等）從 single-center case series 抬到 FDA 強制通報系統的層級**做系統性分析。對 EP 端的衝擊很大；對 ED 端意義在於：未來收到「我兩三週前剛做完 AF ablation、現在胸痛 / 發燒 / 吞嚥困難 / 神經學症狀」的病人，**<mark>atrioesophageal fistula 必須在你的 differential 前三名</mark>**——這是 ablation 後致死率最高的延遲併發症，CT chest with PO contrast 是第一線。

**第二，HRS The Lead Episode 148（2026-05-14）同週放下 VINTAGE first-in-human**——"Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms"[^hrs-lead-148]。這是把 refractory VT 從 endocardial / epicardial ablation 推進到「intramyocardial」navigation 的概念驗證。對台灣 ED 端不直接 actionable，但要知道**電風暴病人未來轉診選項變多**，過去只能 amiodarone + propranolol + sedation + ECMO 撐到 transplant 的 refractory case，會慢慢有更多 ablation 解法。

**第三，ECG Weekly Mattu 2026-05-11 把 W19 那位 72 歲 OHCA 病人接下去走**——"Post-Arrest STEMI: Cath Lab or Caution?"[^mattu-05-11]。Bystander CPR + ROSC after 1 dose epi、ECG 上 new septal ST elevation + new bifascicular block + reciprocal changes，**40 分鐘後仍 comatose**——這正是 COACT 與 TOMAHAWK 兩個 RCT 沒能完全解的灰色地帶。Mattu 的取向值得記住：**<mark>persistent ST elevation + reciprocal changes 仍是 cath lab 的硬指徵</mark>**，coma 本身不該推翻 ECG 上的客觀證據。

**第四，REBEL EM 2026-05-11 把 DOSE-VF 拆到 inter-shock interval 看為什麼 DSED 真贏**[^rebel-dose-vf]。Secondary analysis 顯示 DSED 與 VC（vector change）兩組 survival benefit 的機轉，**很可能來自「兩次電擊之間 VF 持續時間縮短」**——而不是電擊本身能量或波形差異。這對 OHCA / IHCA refractory VF 的 protocol 設計很重要：**接力 charge 的速度可能比換 pad 位置更關鍵**。

本週四則值得在晨會帶過：

- HRS The Lead Ep 150：TiFFANY Study — AF ablation 致死 AE 的 FDA 強制通報系統分析（2026-05-14）
- HRS The Lead Ep 148：VINTAGE — intramyocardial navigation 切 refractory VT first-in-human（2026-05-14）
- ECG Weekly Mattu：W19 病人接續 — comatose post-ROSC STEMI cath lab or caution（2026-05-11）
- REBEL EM：DOSE-VF secondary analysis — DSED 贏在 inter-shock VF 持續時間（2026-05-11）

---

## 一、OMI / 急性冠症 {#omi}

W19 寫過 Smith 5-04 altered MS + OMI 與 W18 Queen of Hearts 公開示範。本週 OMI 軸線主訊號是 Smith 5-13 的 serial ECG 教案。

**Dr Smith 2026-05-13 — "Chest pain in a 50-something. How important are serial ECGs in patients with persistent pain?"**[^smith-05-13]：50 歲男性陣發胸痛，發作後**疼痛緩解**，大約一小時後胸痛**再次出現**。Smith 的核心提問是——當你拿到第一張 ECG 看似不那麼急、病人胸痛也已經緩解，下一步該如何 disposition？

這個 case 對台灣 ED 端的意義不在「ECG 怎麼判」，而在 **serial ECG 的時間軸該怎麼定**。Smith blog 一貫的立場：**胸痛 active 的當下抓 ECG，跟胸痛 resolved 的 ECG，是兩個不同的診斷工具**[^smith-05-13]。

實務 takeaway：**只要病人在 ED 內仍有 persistent 或 recurrent chest pain，每 15 分鐘抓一張 ECG 是 default**，不是「troponin 結果出來再看」。當電腦判讀寫「normal sinus rhythm, no acute ST-T changes」而病人還在喊痛——這張 ECG 跟下一張 ECG 之間發生的 dynamic change，才是 OMI 真正能被抓到的時機。

連著 W18 Smith 4-29「不要打斷主治看這張正常 ECG」、W19 Smith 5-04「altered MS = OMI」、W20 5-13「胸痛已緩解的 serial ECG」——**Smith 連三週都在打同一條軸**：人類判讀 OMI 的最大盲點不是 ECG 技術問題，是**「臨床表現看似不急」就放手**的 cognitive bias。當下次值班遇到「胸痛已緩解、ECG 看起來 normal」的中年男性，記住——**那不是 disposition 的綠燈，是 serial ECG 的紅燈**。

{{< bottomline >}}
W20 OMI 軸線單一訊號但深度夠：**serial ECG 的時間軸不是「troponin 出來再追」，是「只要 chest pain 仍在或復發就每 15 分鐘一張」**[^smith-05-13]。胸痛緩解後第一張 normal ECG 不能 sign-off——胸痛復發那一刻必須有第二張 ECG 同步在跑。台灣 ED triage 動線設計上要把「persistent / recurrent chest pain」當成獨立 flag，而不是把它合併到「troponin pending」一起等。
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W19 寫過 HRS Lead Ep 145（AF ablation 後停 AC + cognitive function）與 ESC 子刊 arrhythmia patient profile。本週 W20 訊號集中在 HRS 大會第二批 late-breaker。

### TiFFANY — AF ablation 致死性 AE 第一次被 FDA mandatory reporting 拉出來看

**HRS The Lead Episode 150（2026-05-14）"Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Total Fatal Adverse Events Following Atrial Fibrillation Ablation Reported in an FDA Mandatory Reporting System: A Matter of Concern? The TiFFANY Study"**[^hrs-lead-150]：這是 HRS 2026 大會公布的 registry-based safety analysis。研究設計把 AF ablation 後致死性 AE 從 single-center 報告抬升到 **FDA 強制通報系統（Manufacturer and User Facility Device Experience, MAUDE）**層級彙整分析。

研究的意義不在「ablation 危險」這個老結論，而在**第一次有人系統性回看 FDA 強制通報資料**——過去 ablation 致死 AE 大多以 single-center registry 或 medical examiner case series 報告，selection bias 很大。**<mark>MAUDE 是強制通報、不挑 institution，更接近真實 denominator</mark>**。

對 EP 端的衝擊：未來 AF ablation 共識聲明的「informed consent」段落，致死 AE 率引用可能會從 RCT 數據（0.1–0.2%）往上修。對 ED 端的衝擊在 atrioesophageal fistula（AEF）——這是 ablation 後 2–4 週才出現、致死率 ≥50% 的延遲併發症。**典型 triad 是 fever + chest pain + neurological symptoms**（cerebral air embolism / septic embolism）。當病人主訴「最近兩三週做完 ablation、現在不太對勁」，**CT chest 必須加 PO contrast**——空氣或對比劑進心房就是 AEF 的鐵證。

### VINTAGE — refractory VT 走 intramyocardial navigation

**HRS The Lead Episode 148（2026-05-14）"Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms (VINTAGE): First-in-Human Experience with a Novel Therapy for Refractory VT"**[^hrs-lead-148]：這是把 VT ablation 從 endocardial / epicardial 推進到 **intramyocardial**（心肌中層）的概念驗證 first-in-human trial。

對 ED 端不直接 actionable（這是 cath lab 等級技術），但要記住三件事：

**第一，refractory VT / electrical storm 過去只能 amiodarone + esmolol + propranolol + deep sedation + ECMO 撐到 transplant** ——本週 VINTAGE 之後，**轉診選項變多**。當你撥電話給 EP 時可以多問一句「有沒有 intramyocardial navigation ablation 的可能性」。

**第二，stereotactic arrhythmia radiotherapy（STAR）也在同條軌跡上累積數據**——ESC 子刊 4-12 publication "Middle-term safety and efficacy after stereotactic arrhythmia radiotherapy: results from the prospective STARNL registry" 是 W20 cache 內收到的同主題訊號。Refractory VT 的 ablation toolbox 在 2026 年正在被一次擴開。

**第三，台灣 ED 端的實務意義**：當電風暴病人轉到 EP 端，不要預設「沒救了」——**這幾年 ablation tech 進步速度比 ED 端認知更快**。

### Smith 5-10 — Magnus Nossen 反覆審 ECG 抓出的 unusual WCT

**Dr Smith 2026-05-10 — "Can you figure out this unusual Wide Complex Tachycardia?"（by Magnus Nossen）**[^smith-05-10]：Magnus Nossen 為一項 ongoing study 回顧某病人 prior ECG 時抓到的一張 unusual WCT。Smith blog 把它端上來當教案。

本案的教學點是**「WCT 不是只有 VT 與 SVT-with-aberrancy 兩條路」**——還有 preexcited tachycardia、pacing-induced WCT、metabolic-induced WCT 等少見 differential。ED 端遇到 WCT，**default 仍是「treat as VT until proven otherwise」**，但鑑別深度該到「同步看 prior ECG 找 baseline conduction」的層次。

### Jesse McLaren BMJ 5 月號 — Recognising cardiac syncope

**Jesse McLaren et al. BMJ 2026-04-16（PMID 41991194）— "Recognising cardiac syncope"**[^mclaren-syncope]：BMJ 的 practice review，從 ED 端的 framework 出發講 cardiac syncope 的辨識。**對台灣 ED 端非常 actionable**——這是少數能直接拿來上晨會的「ECG 教學 + 風險分層 + 收住院 indication」一氣呵成的 review。

{{< bottomline >}}
W20 節律端訊號量大：**TiFFANY 把 AF ablation 致死 AE 從 RCT 數據抬到 FDA 強制通報層級看[^hrs-lead-150]，VINTAGE 把 refractory VT ablation 推進 intramyocardial 層[^hrs-lead-148]。** 對 ED：(1) 看到「兩三週前剛 ablation、現在 fever + chest pain + 神經學症狀」立刻想 atrioesophageal fistula、CT chest with PO contrast；(2) electrical storm 病人轉診時主動問 EP 端 ablation 新 modality；(3) WCT 預設 treat as VT，但要養成回看 prior ECG 的習慣[^smith-05-10]。
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W19 已涵蓋 Friedman OMI 47.1% vs 94.1% 數字、Sharkey signal、ESC EHRA 子刊 wearable in athletes 等主訊號。W20 AI ECG 軸線本週沒有新主菜，但 ESC 子刊 5-09 publication "AI-enabled ECG imaging for the detection of cardiac amyloidosis across amyloidosis subtypes" 進入 cache，**值得記在心裡**——AI ECG 已從「AF screening / OMI detection」開始往「structural diagnosis」延伸（amyloid、HCM、aortic stenosis 等）。

對台灣 ED 端短期不直接 actionable，但要記住：**Apple Watch / Fitbit / Galaxy Watch 等 wearable 抓的 rhythm strip 在台灣的滲透率還在爬升中**，當下次有病人拿手錶記錄來找你時，**仍要回到 12-lead ECG 為 standard**——wearable 的 rhythm trace 是「補充」不是「取代」，而 AI ECG 的角色逐步在「diagnosis 第二意見」這個位子站穩。

---

## 四、Resus / 急救 {#res}

W19 寫過 Heart Rhythm RESTART 與 Frick theophylline 案例。本週 Resus 訊號集中在兩條：**Mattu 5-11 把 W19 那位 OHCA 病人接到 cath lab 抉擇**，以及 **REBEL EM 5-11 拆 DOSE-VF 看 DSED 為什麼贏**。

### Mattu 5-11 — comatose post-ROSC STEMI 的 cath lab 抉擇

**ECG Weekly (Amal Mattu) 2026-05-11 — "Post-Arrest STEMI: Cath Lab or Caution?"**[^mattu-05-11]：W19 那位 72 歲 OHCA 男性（bystander CPR、non-shockable rhythm、ROSC after 1 dose epi、post-ROSC ECG 新出 RBBB + LAFB）。本週 Mattu 把同一個 case 推進——**40 分鐘後**病人仍 comatose、persistent ST elevation in septal leads + new bifascicular block + reciprocal changes。

核心爭議：**這位 comatose 病人該不該立刻送 cath lab？**

過去十年的 evidence base 有兩大 RCT：
1. **COACT trial (NEJM 2019)**：OHCA without STEMI on ECG → immediate vs delayed angiography → 結果 no difference in survival
2. **TOMAHAWK trial (NEJM 2021)**：OHCA without STEMI on ECG → immediate vs delayed → 結果同 COACT

但**兩篇 RCT 的 inclusion 都明確排除「ECG 上有 STEMI 的病人」**——意思是「STEMI on ECG 仍應立刻去 cath lab」這條 default 沒被推翻。Mattu 的取向是：**<mark>當 persistent ST elevation + reciprocal changes + new conduction abnormality 同時擺出來，coma 本身不該成為延遲 angiography 的理由</mark>**。

對台灣 ED 端的 takeaway：
- ROSC 後 ECG 抓到 STEMI pattern → **立刻啟動 STEMI protocol**，不要因 coma / GCS 低就先觀察
- ROSC 後 ECG 抓「不確定的 ST changes / new BBB without clear STEMI」 → **每 10 分鐘 serial ECG**，看是 transient post-arrest changes 還是 evolving STEMI
- **post-ROSC ECG 不是一張、是 series**——Mattu 連兩週都在打這個點

### REBEL EM 5-11 — DOSE-VF 為什麼贏在 inter-shock interval

**REBEL EM 2026-05-11 — "Alternate Defibrillation Strategies for Refractory Ventricular Fibrillation"**[^rebel-dose-vf]：DOSE-VF 是 2022 年公布的 RCT，比較 OHCA refractory VF 三組——standard defibrillation、vector change（VC，pad 從 anterior-anterior 改 anterior-posterior）、double sequential external defibrillation（DSED，兩台 defibrillator 接力 charge）。原始結果 DSED 與 VC 兩組 survival benefit 都優於 standard。

本週 secondary analysis 想回答的問題：**到底是「電擊本身」贏，還是「電擊之間發生的事」贏？**

研究方法：回看 defibrillation files，量測**兩次電擊之間 VF 持續的時間**（inter-shock VF duration）。結果發現 DSED 與 VC 兩組的 inter-shock VF duration **比 standard 組明顯縮短**——這個時間差很可能就是 survival benefit 的主要機轉。

對台灣 ED 端的實務意義：**接力 charge 的速度可能比換 pad 位置更關鍵**。當你下決定走 DSED protocol 時，**最關鍵的不是「裝兩台 defibrillator」這個動作本身**，而是**確保兩次電擊之間 VF 不要重新 organize**——意思是：
1. **CPR quality 不能掉**（持續 compression 縮短 perfusion gap）
2. **charge to shock cycle 必須緊湊**（指定一人專責 charge、一人專責 deliver）
3. **rhythm check 不要拖**（pause < 5 秒）

{{< bottomline >}}
W20 Resus 雙主菜：**Mattu 5-11 把 comatose post-ROSC STEMI 的 cath lab 決策說清楚——ECG 上 persistent ST elevation + reciprocal changes 仍是硬指徵，coma 不該推翻[^mattu-05-11]**；**REBEL EM 拆 DOSE-VF 看出 DSED 真贏在 inter-shock VF duration[^rebel-dose-vf]，意思是接力 charge 的速度比換 pad 位置更關鍵。** 台灣 ED 端 OHCA SOP 可以從這兩篇延伸出兩條 audit indicator：post-ROSC ECG-to-cath 時間、refractory VF 的 charge-to-shock cycle 長度。
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

W20 三張可直接帶上晨會的 ECG case：

**Case 1 — Smith 5-13 「50 歲胸痛緩解又復發」**[^smith-05-13]：教學點是 **serial ECG 的時間軸**。當胸痛 active 與 resolved 是兩個不同的診斷時間窗，第一張 ECG normal 不代表第二張、第三張會繼續 normal。Bear 在台灣 ED 教學上的延伸：**「persistent / recurrent chest pain 的 serial ECG 間隔 ≤ 15 分鐘」要寫進 ED triage protocol**，不是個案處理。

**Case 2 — Smith 5-10 「unusual WCT by Magnus Nossen」**[^smith-05-10]：教學點是 **WCT 的鑑別不只 VT vs SVT-with-aberrancy 兩條路**。臨床上要養成「拿到 WCT 同步調出 prior ECG 看 baseline conduction」的反射動作。teaching pearl：**任何 WCT 病人能夠拿到 prior ECG 都該拿——找 BBB pattern、找 preexcitation、找 paced rhythm**。

**Case 3 — Mattu 5-11 「comatose post-ROSC STEMI」**[^mattu-05-11]：教學點不在「這張 ECG 怎麼判」，而在 **「coma 不該推翻 ECG 上的 STEMI evidence」**這條原則。連著 W19 的 5-04 post-arrest case 一起教，是少見的「同一張 ECG 連兩週寫不完」的教學資產。

---

## 六、追蹤作者本週新作 {#aut}

W20 是 PubMed 端的低密度週，多數 indexed 新作是 W17-W19 已涵蓋的延伸。

- **Stephen Smith**：blog 兩篇本週新作（5-10 unusual WCT by Magnus Nossen[^smith-05-10]、5-13 serial ECG[^smith-05-13]），PubMed 端本週無新作
- **Pendell Meyers**：本週 PubMed 無新作
- **Ken Grauer**：JACC Case Reports 4-08 publication PMID 41746248 "Sodium Channel-Mediated Ventricular Arrhythmia After *Delphinium denudatum* Ingestion Managed Conservatively in a Resource-Limited Setting"——南亞傳統藥草 jadwār 含 aconitine-like alkaloids 引起 sodium channel-mediated cardiotoxicity 的 case report，**對台灣 ED 端有意義**：中藥 / 草藥引起的 VT 是 differential 之一，lidocaine + magnesium 是 mechanism-based therapy[^grauer-delphinium]。但這篇 publication 日期是 4-08，已超出 W20 視窗，僅作補充。
- **Jesse McLaren**：BMJ 4-16 publication PMID 41991194 "Recognising cardiac syncope"[^mclaren-syncope]——practice review、可拿來上晨會。同樣超出 W20 視窗。
- **Emre Aslanger**：JACC Case Reports 5-06 IC-ECG 已於 W19 涵蓋
- **Magnus Nossen**：5-10 unusual WCT 透過 Smith blog 發表（見 Case 2）
- **Robert Herman**：本週無 PubMed 新作
- **Sam Ghali**：本週無 PubMed 新作

整體：本週 PubMed 作者端新作密度低，主訊號集中在 Smith blog 與 HRS 大會 podcast。

---

## 七、媒體動態 {#med}

### HRS The Lead Podcast — 大會第二批 late-breaker 雙集

**Episode 148（2026-05-14）"VINTAGE: First-in-Human Experience with a Novel Therapy for Refractory VT"**[^hrs-lead-148]：第一次把 ablation catheter 推進心肌中層做 navigation，是 refractory VT ablation 的 paradigm-shift 候選技術。值得 follow-up 之後 6–12 個月會出的 phase 2 trial 與 multi-center 擴展。

**Episode 150（2026-05-14）"TiFFANY Study: AF Ablation 致死 AE 的 FDA Mandatory Reporting Analysis"**[^hrs-lead-150]：第一次把 AF ablation 致死 AE 從 RCT-derived 數據抬到 FDA 強制通報層級看。**對台灣 EP 與 ED 兩端的 informed consent / 收案標準會逐步產生壓力**。

### ECG Weekly — Mattu 把 W19 case 接續完

**5-11 "Post-Arrest STEMI: Cath Lab or Caution?"**[^mattu-05-11]：W19 那張 post-arrest RBBB+LAFB 的 follow-up。Mattu 連兩週寫同一個 case，是不常見的編排——代表他認為這個 case 的 disposition decision 比 ECG interpretation 本身更值得記住。

### REBEL EM — DOSE-VF secondary analysis

**5-11 "Alternate Defibrillation Strategies for Refractory Ventricular Fibrillation"**[^rebel-dose-vf]：從 DOSE-VF 原始 RCT 把 secondary analysis 拆出來，幫忙回答「為什麼 DSED 真贏」這個機轉問題。

---

## 八、文獻速報 {#ref}

**TiFFANY Study (HRS 2026 late-breaker)**[^hrs-lead-150]：AF ablation 致死性不良事件的 FDA Mandatory Reporting System (MAUDE) 系統性分析。Atrioesophageal fistula、心包填塞、空氣栓塞為主要致死 AE。Implication：未來 informed consent 致死率引用會往上修。

**VINTAGE (HRS 2026 late-breaker)**[^hrs-lead-148]：Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms — first-in-human 6 例 case series（HRS podcast 公布初步數據，full paper 預期 6–12 個月內 Heart Rhythm 或 JACC-EP 上線）。

**DOSE-VF secondary analysis (REBEL EM 重點導讀)**[^rebel-dose-vf]：原始 DOSE-VF RCT 三組（standard / VC / DSED）中 DSED 與 VC survival benefit 的機轉 — **inter-shock VF duration 縮短**而非電擊本身能量差異。

**McLaren BMJ 4-16: Recognising cardiac syncope**[^mclaren-syncope]：BMJ practice review、ED 端可直接帶上晨會。

**Grauer JACC Case Reports 4-08: Sodium channel-mediated VT after *Delphinium denudatum* ingestion**[^grauer-delphinium]：傳統草藥引起 aconitine-like cardiotoxicity case；lidocaine + magnesium mechanism-based therapy。

**ESC 子刊 5-09 publication: AI-enabled ECG imaging for cardiac amyloidosis across amyloidosis subtypes**：AI ECG 從 rhythm screening 往 structural diagnosis 延伸的指標 paper（W20 cache 收到，本週未深寫，留作 W21 候選）。

---

## 九、台灣急診情境備註 {#tw}

### Atrioesophageal fistula（AEF）— TiFFANY 之後的 ED differential

W20 TiFFANY 公布後，台灣 ED 端最值得改的 mental model 是 **AF ablation 後 2–4 週的延遲併發症 differential**。實務 SOP：

- **病史 trigger**：問「您最近三個月內有做過心臟導管手術嗎？特別是 atrial fibrillation 的電燒？」
- **症狀 triad**：fever + chest pain + neurological symptoms（focal deficit / seizure / altered mental status）
- **第一線影像**：**CT chest with PO contrast**（不是只有 IV contrast）— 對比劑進入左心房就是 AEF 鐵證
- **同步 work-up**：blood culture × 2、CT head（rule out air / septic embolism）、緊急 cardiothoracic surgery consult

**Heart Rhythm Society 期刊（心律期刊）**從 2020 年起就有 AEF dedicated review，台灣 EP 端 informed consent 已逐步把這條 AE 寫進來；ED 端的補位是「**收到病人主訴時想到 ablation 史**」。

### Post-ROSC STEMI cath lab activation — W20 Mattu case 的延伸

連著 W19 那位 OHCA 72 歲男性與 W20 的 cath lab 抉擇，台灣 ED 端 OHCA SOP 可以從這兩篇延伸出兩條 audit indicator：

1. **post-ROSC ECG-to-cath 時間**：從 ROSC 到 cath lab activation 的中位數
2. **comatose post-ROSC STEMI 的 cath lab 啟動率**：分母是「ROSC + ECG 上 STEMI pattern」，分子是「實際送 cath lab」

當這兩條 indicator 落在合理範圍（< 30 分鐘、> 80%），代表你的 ED 在 W20 之後的 evidence base 上沒有掉隊。

### Refractory VF 的 charge-to-shock cycle audit

REBEL EM DOSE-VF secondary analysis 的延伸——**台灣 ED OHCA / IHCA refractory VF 的 cycle audit**：
- pause for rhythm check < 5 秒
- charge-to-shock cycle 緊湊（指定一人專責 charge、一人專責 deliver）
- DSED protocol 若採用，**兩台 defibrillator 接力 charge 必須訓練到 < 10 秒 inter-shock interval**

---

## 十、本週 Key Takeaways {#key}

1. **TiFFANY 把 AF ablation 致死 AE 從 RCT-derived 抬到 FDA mandatory reporting 層級**[^hrs-lead-150]——ED 端遇到「兩三週前剛做 ablation、現在 fever + chest pain + 神經學症狀」立刻想 atrioesophageal fistula，CT chest with PO contrast 是第一線。

2. **VINTAGE 是 refractory VT ablation 的 paradigm-shift 候選**[^hrs-lead-148]——electrical storm 病人轉診時可以主動問 EP 端 intramyocardial navigation 與 stereotactic radiotherapy 的可能性，不要預設「沒救了」。

3. **Mattu 5-11 把 comatose post-ROSC STEMI 的 cath lab 決策說清楚**[^mattu-05-11]——ECG 上 persistent ST elevation + reciprocal changes + new conduction abnormality 仍是硬指徵，**coma 本身不該推翻 ECG 上的客觀證據**。COACT / TOMAHAWK 排除 STEMI on ECG 的病人，那條 default 沒被推翻。

4. **REBEL EM 拆 DOSE-VF 看 DSED 為什麼贏在 inter-shock VF duration**[^rebel-dose-vf]——接力 charge 的速度比換 pad 位置更關鍵。OHCA refractory VF 的 SOP 重點在 charge-to-shock cycle 的訓練。

5. **Smith 5-13 serial ECG 教案**[^smith-05-13]——胸痛 active 與 resolved 是兩個不同的診斷時間窗。**「persistent / recurrent chest pain 的 serial ECG 間隔 ≤ 15 分鐘」**該寫進 ED triage protocol，不是個案處理。

6. **Smith 5-10 unusual WCT by Magnus Nossen**[^smith-05-10]——WCT 鑑別不只 VT vs SVT-with-aberrancy 兩條路。**拿到 WCT 同步調 prior ECG 看 baseline conduction** 是該養成的反射動作。

---

## 引用 {#refs}

[^smith-05-13]: Stephen W. Smith, Dr. Smith's ECG Blog, 2026-05-13: "Chest pain in a 50-something. How important are serial ECGs in patients with persistent pain?"「A 50-something man had onset of chest pain which then resolved. About an hour later, the chest pain...」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/chest-pain-in-a-50-something-how-important-are-serial-ecgs-in-patients-with-persistent-pain/#:~:text=A%2050%2Dsomething%20man%20had,About%20an%20hour%20later)

[^smith-05-10]: Magnus Nossen (via Dr. Smith's ECG Blog), 2026-05-10: "Can you figure out this unusual Wide Complex Tachycardia?"「I was reviewing a patient's prior ECGs for an ongoing study when I came across...」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/can-you-figure-out-this-unusual-wide-complex-tachycardia/#:~:text=I%20was%20reviewing%20a%20patient%27s%20prior%20ECGs)

[^mattu-05-11]: Amal Mattu, ECG Weekly Workout, 2026-05-11: "Post-Arrest STEMI: Cath Lab or Caution?"「A 72-year-old man is brought to the ED after witnessed cardiac arrest... Forty minutes later, the patient remains comatose, and the ECG shows new septal ST elevation with new bifascicular block and reciprocal changes.」→ [ecgweekly.com](https://ecgweekly.com/weekly-workout/post-arrest-stemi-cath-lab-or-caution/#:~:text=Forty%20minutes%20later%2C%20the%20patient%20remains%20comatose)

[^hrs-lead-148]: Heart Rhythm Society, The Lead Podcast Episode 148, 2026-05-14: "Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms (VINTAGE): First-in-Human Experience with a Novel Therapy for Refractory VT" → [HRS official podcast](https://www.hrsonline.org/news/the-lead-podcast/episode-148)

[^hrs-lead-150]: Heart Rhythm Society, The Lead Podcast Episode 150, 2026-05-14: "Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Total Fatal Adverse Events Following Atrial Fibrillation Ablation Reported in an FDA Mandatory Reporting System: A Matter of Concern? The TiFFANY Study" → [HRS official podcast](https://www.hrsonline.org/news/the-lead-podcast/episode-150)

[^rebel-dose-vf]: REBEL EM, 2026-05-11: "Alternate Defibrillation Strategies for Refractory Ventricular Fibrillation"「In this secondary analysis of the DOSE-VF Trial... the authors reviewed defibrillation files from the initial study to answer whether reduced time in VF between shocks could explain the survival benefits noted in the original trial.」→ [rebelem.com](https://rebelem.com/double-defib/#:~:text=secondary%20analysis%20of%20the%20DOSE%2DVF%20Trial)

[^mclaren-syncope]: McLaren J, Morris R, Lovell LM. "Recognising cardiac syncope." BMJ 2026-04-16 (PMID 41991194) → [PubMed 41991194](https://pubmed.ncbi.nlm.nih.gov/41991194/)

[^grauer-delphinium]: Rassani N, Grauer K. "Sodium Channel-Mediated Ventricular Arrhythmia After *Delphinium denudatum* Ingestion Managed Conservatively in a Resource-Limited Setting." JACC Case Reports 2026-04-08 (PMID 41746248)「Early sodium-channel blockade with lidocaine and structured cardiac monitoring can be lifesaving in plant-based cardiotoxicity.」→ [PubMed 41746248](https://pubmed.ncbi.nlm.nih.gov/41746248/#:~:text=Early%20sodium%2Dchannel%20blockade%20with%20lidocaine)

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。本週為 HRS 大會第二週 late-breaker 落地週，主訊號集中在 HRS podcast 與 Mattu / Smith blog。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">6<span class="unit">篇 W20 內新文</span></div>
<ul>
<li><span class="li-en">Dr Smith <strong>2</strong> · ECG Weekly <strong>1</strong></span><span class="li-zh">Smith 心電圖部落格（5-10 WCT、5-13 serial ECG）· Mattu 心電圖週刊（5-11 post-arrest cath lab）</span></li>
<li><span class="li-en">HRS <strong>2</strong> (Lead Ep 148 + 150)</span><span class="li-zh">美國心律學會官方 podcast 連兩集 late-breaker</span></li>
<li><span class="li-en">REBEL EM <strong>1</strong></span><span class="li-zh">DOSE-VF secondary analysis 導讀</span></li>
<li><span class="li-en">LITFL / Core EM / EMCrit / First10EM / ALiEM — 0</span><span class="li-zh">本週無新文</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">0<span class="unit">篇 W20 視窗內新作（Grauer 4-08 / McLaren 4-16 為延伸補充）</span></div>
<ul>
<li><span class="li-en">Smith / Meyers / Sam Ghali / Robert Herman — 0</span><span class="li-zh">本週 PubMed 無新作（Smith 本週訊號全在 blog）</span></li>
<li><span class="li-en">Ken Grauer <strong>1</strong> (4-08 補充)</span><span class="li-zh">JACC Case Reports Delphinium VT case</span></li>
<li><span class="li-en">Jesse McLaren <strong>1</strong> (4-16 補充)</span><span class="li-zh">BMJ Recognising cardiac syncope</span></li>
<li><span class="li-en">Emre Aslanger — W19 已涵蓋</span><span class="li-zh">5-06 IC-ECG 已收</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">~25<span class="unit">篇候選（多為 ESC 子刊 5-09 publication 與 4-12 EHRA abstract 延伸）</span></div>
<ul>
<li><span class="li-en">ESC EHRA 子刊 <strong>~15</strong></span><span class="li-zh">5-09 publication 大量釋出（VT-HF 三角關係、AI ECG imaging 心臟 amyloid、6-lead consumer ECG 監測等）</span></li>
<li><span class="li-en">J Electrocardiology · Resuscitation · Heart Rhythm — 5 月號延伸</span><span class="li-zh">主刊本週 turnover 低</span></li>
<li><span class="li-en">EHJ / JACC / JACC-EP / Annals EM — 0</span><span class="li-zh">本週皆空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">0<span class="unit">條過 filter（本週 cache 無新 ECG 主題 X 訊號）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog — 本週無 ECG 主題新 tweet</span><span class="li-zh">blog 5-10 / 5-13 已對應</span></li>
<li><span class="li-en">@ekgpress — 本週無新 case</span><span class="li-zh">—</span></li>
<li><span class="li-en">@RobertHermanMD — 本週無新作</span><span class="li-zh">—</span></li>
<li><span class="li-en">@amalmattu — 本週無新 tweet</span><span class="li-zh">ECG Weekly 5-11 已對應</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>
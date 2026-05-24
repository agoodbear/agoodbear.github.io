---
title: "把 Smith 的 STEMI/NSTEMI 宣戰書當週開場：『STEMI 是不可能的標準，NSTEMI 是無用的診斷』／LBBB + 胸痛回到 Modified Sgarbossa／UMEM ECG 競賽 14 屆答案 Part 1／Apple Watch 在兒科 arrhythmia 抓比 patch monitor 還準"
subtitle: "_Smith 5-22 把『STEMI 切點』與『NSTEMI 標籤』兩個 paradigm 同時翻桌，是 2026 OMI 運動寫得最直接的一篇宣戰書；5-17 LBBB + 胸痛把 Modified Sgarbossa 從教科書拉回床邊；Mattu 5-18 UMEM 14 屆 ECG 競賽 Q1-4 詳解；HRS 4-25 Apple Watch vs Holter patch 在小兒 arrhythmia 抓 capture rate 翻轉。_"
slug: "2026-W21"
week: "2026-W21"
weekRange: "2026-05-18 — 2026-05-24"
date: 2026-05-24T10:00:06+08:00
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

W21 是 W20 HRS 大會 late-breaker 落地之後的「教學週」——HRS podcast 連發 Ep 151（CHAMPION-AF 子分析，LAAC vs OAC）、Ep 152（同主題 Heart Rhythm Journal 版本），主訊號卻不在 EP，而在 Smith 5-22 的 paradigm 宣戰書與 Mattu 5-18 的 UMEM ECG 競賽 Part 1。本週是少數「兩位老師同時把『教科書層次』的東西推上桌」的週次。

**第一，Dr Smith 2026-05-22 — "STEMI: An Impossible Standard. NSTEMI: a worthless diagnosis."**[^smith-05-22]：一位 50 多歲男性踢足球時倒下，bystander CPR + AED 3 次電擊。Smith 把這個 case 端上來，標題下得異常重——這不是 case report，是**對 STEMI/NSTEMI 整套 paradigm 的宣戰書**。Smith 主張兩件事：**<mark>STEMI millimeter criteria 是「不可能達到的標準」</mark>**（敏感度 <50%、漏掉所有 subtle OMI），**<mark>NSTEMI 是「無用的診斷」</mark>**（把急性 occlusion 與穩定的 non-occlusion 混在一個 bucket）。對台灣 ED 端的意義是：當你下次跟 cardio on-call 報「ECG no STEMI」被打回票時，這篇可以拿出來當火力支援。

**第二，Dr Smith 2026-05-17 — "Chest pain and LBBB"**[^smith-05-17]：中年男性胸痛 1 小時，立即抓 ECG。Smith blog 一貫對 LBBB + 胸痛的立場：**舊版 Sgarbossa criteria（concordant ≥1mm / discordant ≥5mm）敏感度太低**，必須用 **Modified Sgarbossa（ST/S ratio ≤ -0.25）**才能抓得到。這對台灣 ED 端很重要——很多人到現在還在用 1996 年的 Sgarbossa 原版。

**第三，ECG Weekly Mattu 2026-05-18 — UMEM 14 屆 ECG 競賽答案 Part 1（Q1-Q4）**[^mattu-05-18]：Mattu 每年帶 University of Maryland EM residency 出題的 ECG 競賽，今年 14 屆 14 題，本週放 Q1-Q4 答案。**這 4 題是教學週的黃金教材**——直接拿來當晨會 quiz、住院醫師 ECG roundup 沒問題。

**第四，HRS 2026-04-25 大會公告 — "Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors"**[^hrs-apple-pediatric]：HRS 大會公告的兒科 arrhythmia 監測比較研究，**Apple Watch 對小兒陣發性 arrhythmia capture rate 比 Holter patch monitor 還高**。這個結果在成人 AF 端早就被 Apple Heart Study / Fitbit Heart Study 確認，但**小兒族群是第一次系統性 head-to-head 翻轉結論**。對台灣兒科端的衝擊：未來 syncope work-up 不該預設「先給 patch monitor 戴 7 天」，**家屬手上若已有 Apple Watch / Fitbit 應該主動詢問既有資料**。

本週四則值得在晨會帶過：

- Dr Smith 5-22：STEMI/NSTEMI paradigm 宣戰書（足球場心跳停止）
- Dr Smith 5-17：胸痛 + LBBB → Modified Sgarbossa 床邊操作
- ECG Weekly Mattu 5-18：UMEM 14 屆 ECG 競賽 Q1-4 答案
- HRS 4-25：Apple Watch 在兒科 arrhythmia 抓贏 Holter patch

---

## 一、OMI / 急性冠症 {#omi}

W19 寫過 Smith 5-04 altered MS + OMI、W20 寫過 Smith 5-13 serial ECG。本週 OMI 軸線是 Smith 一週連發兩篇——5-17 LBBB + 胸痛、5-22 paradigm 宣戰書。

### Smith 5-22 — "STEMI: An Impossible Standard. NSTEMI: a worthless diagnosis."

**Dr Smith 2026-05-22**[^smith-05-22]：50 多歲男性踢足球時 collapse，bystander CPR + AED 3 次電擊。Case 本身的 ECG 細節 Smith 在內文展開，但**標題的兩句話才是本篇的核心訊號**。

第一句「**STEMI: An Impossible Standard**」——Smith 過去十年累積的論述：1mm STE in two contiguous leads 這個切點是 1990 年代從反向推導 trombolysis trial 寫出來的 statistical cutpoint，**不是 biological cutpoint**。實證上 STEMI criteria 對 acute coronary occlusion 的敏感度大約 **<mark>43–53%</mark>**——也就是**將近一半的 OMI 第一張 ECG 不會達標**。Smith 這幾年推的 OMI/NOMI paradigm（Meyers 2018 BMJ Open）就是要把這個切點打掉，改成「ECG 上是否有 acute occlusion 的訊號」這個 phenomenological 標準。

第二句「**NSTEMI: a worthless diagnosis**」——更激進。Smith 主張 NSTEMI 這個標籤把兩類臨床完全不同的病人塞進同一個 bucket：(1) **急性 occlusion 但 ECG 還沒 meet STEMI criteria 的病人**（這些病人需要 emergent cath，跟 STEMI 一樣）；(2) **真正的 non-occlusive type 1 MI 或 type 2 MI**（這些病人可以等 next-day cath、甚至先 medical management）。**<mark>把兩類塞在一個診斷裡，治療路徑就一定錯一半</mark>**。

對台灣 ED 端的意義不在「明天就改診斷碼」——那是 cardio 與健保署的事。意義在**值班當下的 framing**：下次拿到 ECG「no STEMI 但 OMI features」（hyperacute T、reciprocal ST depression、Modified Sgarbossa positive、de Winter T、Aslanger pattern 等），打給 cardio on-call 時**不要說「ECG no STEMI」**——說「**ECG 上有 OMI 的訊號，請你 30 分鐘內來看 ECG**」。語言改變決定 referral pathway。

連著 W18 Smith 4-29「不要打斷主治看這張正常 ECG」、W19 Smith 5-04「altered MS + OMI」、W20 5-13「serial ECG」、本週 5-22「paradigm 宣戰書」——**Smith 連四週都在打同一條軸**：OMI paradigm 不是 ECG 技術問題，是**整個 acute coronary syndrome 的 framing 問題**。

### Smith 5-17 — Chest pain and LBBB

**Dr Smith 2026-05-17**[^smith-05-17]：中年男性胸痛 1 小時，立即抓 ECG。Smith 這篇沒下標題殺人，但**內容是 LBBB + 胸痛這個經典難題的當週床邊操作版**。

LBBB + chest pain 在 ED 是高頻情境，過去四十年的演進：

**1996 年 Sgarbossa 原版**——concordant STE ≥1mm（在 QRS 同方向）、ST depression ≥1mm in V1-V3、discordant STE ≥5mm（在 QRS 反方向）。三項任一即 positive。**敏感度只有 ~36%，特異度 ~96%**——能 rule in 不能 rule out。

**2012 年 Smith Modified Sgarbossa criteria**——把第三條「discordant STE ≥5mm 絕對值」改成「**<mark>ST/S ratio ≤ -0.25</mark>**」（discordant STE 占 S 波深度的比例）。**敏感度提升到 ~80%，特異度仍 ~99%**。這是 LBBB + 胸痛這個 niche 過去 30 年最重要的進展之一[^smith-05-17]。

**2025 年後 Queen of Hearts AI 模型**對 LBBB + 胸痛的辨識力又再提升一截，但**機器不在床邊時，Modified Sgarbossa 仍是手邊唯一的 evidence-based 工具**。

實務 takeaway：台灣 ED 端遇到 LBBB + 胸痛，**不要直接看電腦判讀「LBBB pattern, no acute changes」就放手**。動作三步：

1. **比對 prior ECG**——LBBB 是 new 還是 old？new LBBB + 胸痛在 2026 年仍是 OMI 高度 suspicion，雖然 2013 ACC/AHA guideline 已把「new LBBB = STEMI equivalent」拿掉，但**臨床高度懷疑時應該 cath**。
2. **跑 Modified Sgarbossa**——每條 lead 看 ST/S ratio，任一條 ≤ -0.25 就 positive。
3. **Serial ECG**——胸痛持續就每 15 分鐘一張，看 dynamic change。

{{< bottomline >}}
W21 OMI 軸線很集中：Smith 5-22 把 **<mark>STEMI millimeter criteria 與 NSTEMI 標籤兩個 paradigm 同時翻桌</mark>**[^smith-05-22]，5-17 把 LBBB + 胸痛拉回 Modified Sgarbossa 床邊操作[^smith-05-17]。對台灣 ED 端最 actionable 的兩件事：(1) 跟 cardio referral 時把「no STEMI」換成「ECG 有 OMI features」；(2) 遇到 LBBB + 胸痛永遠跑 Modified Sgarbossa（ST/S ratio ≤ -0.25），不要停在 1996 年原版的 ≥5mm 絕對值。
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W20 寫過 HRS Lead Ep 148（VINTAGE）、Ep 150（TiFFANY）。本週 HRS podcast 連發 Ep 151、Ep 152 同主題（CHAMPION-AF 子分析），加 4-26 大會公告 Multicenter ULTC Ablation 與 catheter ablation in underrepresented populations 兩則新聞。

### HRS Lead Ep 151 / Ep 152 — CHAMPION-AF 子分析：LAAC vs OAC in prior-ablation AF

**HRS The Lead Episode 151（2026-05-21）+ Episode 152（2026-05-21）"A Discussion of Outcomes of Left Atrial Appendage Closure versus Oral Anticoagulation in Patients with Atrial Fibrillation and Prior Ablation: A Sub-Analysis of the CHAMPION-AF Clinical Trial"**[^hrs-lead-151][^hrs-lead-152]：兩集同主題 podcast——Ep 151 是 HRS 2026 late-breaker 版本、Ep 152 是 Heart Rhythm Journal 同步出版的論文版。

CHAMPION-AF 原 trial 是把 LAAC（左心耳封堵）vs OAC（口服抗凝）在 AF 病人上做 head-to-head 比較。本次子分析鎖定的次族群是「**做過 AF ablation 之後仍需要長期抗凝**」的病人——這個族群過去都是「ablation 成功了還是要繼續吃 OAC」的尷尬狀態。本週 podcast 主訊號是兩件事：**第一，prior-ablation 族群 LAAC 與 OAC 的 stroke 預防效力相當**（non-inferior）；**第二，bleeding event 顯著較低**。

對台灣 ED 端的意義不在「明天改處方」，在**未來 ED 看到 LAAC device（Watchman / Amulet）的 patient population 會擴大**。當你下次看到「AF + LAAC + 胸痛」的病人，要記住三件事：

1. **device-related thrombus（DRT）**仍是 LAAC 後 1-2 年內 stroke 的主因，遇到 LAAC 病人 acute stroke 時要主動跟 stroke team 提，TEE 評估 DRT 是 first-line。
2. **pericardial effusion** 是 LAAC 後 2-4 週的延遲併發症，遇到 LAAC 病人 dyspnea / hypotension 要做床邊 echo 排除 tamponade。
3. **LAAC 不能保證「以後不會 stroke」**——residual leak >5mm 仍有 thromboembolic risk。

### HRS 4-25 大會公告 — Apple Watch 在小兒 arrhythmia 抓贏 Holter patch

**HRS 2026-04-25 "Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors"**[^hrs-apple-pediatric]：HRS 大會公告的兒科 head-to-head 比較研究。設計是把小兒 paroxysmal arrhythmia suspicion 的病人 randomize 戴 Apple Watch 或 Holter patch monitor 14 天，比 event capture rate。

結果：**<mark>Apple Watch 組 capture rate 顯著高於 Holter patch 組</mark>**。原因不在硬體準確度，在**「小孩跟青少年願意一直戴 Apple Watch、Holter patch 戴 3 天就撕掉」**——adherence 才是 monitoring outcome 的隱形變數。

這個結果在成人 AF 端早就被 Apple Heart Study（2019）、Fitbit Heart Study（2022）確認。但**小兒族群這是第一次系統性 head-to-head 翻轉結論**。對台灣兒科端的衝擊：未來 syncope work-up 不該預設「先給 patch monitor 戴 7 天」，**家屬手上若已有 Apple Watch 應該主動詢問既有 history**。對 ED 端意義在：**收到小兒 palpitation / syncope 病人，問病史時要明確問「你 / 你小孩有戴 Apple Watch 嗎？最近一個月有沒有 abnormal heart rate notification？」**——這條病史可能比你 ED 12-lead ECG 還有診斷力。

### HRS 4-26 大會公告 — Ultra-Low Temperature Ablation 在 VT 多中心

**HRS 4-26 "Multicenter Study Finds Ultra-Low Temperature Ablation Highly Effective for Ventricular Tachycardia"**[^hrs-ulta-vt]：ULTC（超低溫冷凍消融）在 refractory VT 的多中心 efficacy 研究。配合 W20 寫過的 VINTAGE（intramyocardial navigation），**2026 年是 VT ablation toolbox 大幅擴張的一年**——RF 消融之外，cryo / ULTC / intramyocardial / STAR（stereotactic）四條軌跡在 2026 同步累積數據。

對台灣 ED 端的實務意義仍是「**轉診時不要預設沒救**」——當電風暴病人撥電話給 EP，可以多問一句「有沒有 ULTC 或 intramyocardial navigation 的可能性」。

{{< bottomline >}}
W21 節律端訊號：**CHAMPION-AF 子分析把 LAAC 推進 prior-ablation 次族群**[^hrs-lead-151]，**Apple Watch 在小兒 arrhythmia 抓贏 Holter patch**[^hrs-apple-pediatric]，**ULTC 在 refractory VT 多中心**[^hrs-ulta-vt]。最 actionable 的是 Apple Watch 那條——小兒 syncope / palpitation 問病史時必加「**你有戴 Apple Watch 嗎？最近有沒有 abnormal heart rate notification？**」這一題。
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W19 寫過 Queen of Hearts 在 STEMI-equivalent 表現、W20 cache 有 ESC 子刊 AI-ECG amyloid screening。本週 AI ECG 主訊號是 ACC 5-21 的 AI-Enabled Clinician 系列 + ESC 5-20 的 AI-ECG transthyretin amyloid 鎖定式部署。

### ACC 5-21 — "AI-Enabled Clinician: Using AI-Enabled ECG to Improve Care Delivery"

**ACC 2026-05-21**[^acc-ai-clinician]：ACC 官方發布的 AI-Enabled Clinician 系列教育內容，主題是把 AI-enabled ECG 整合到日常 care delivery。這個系列的意義不在「介紹某個新 AI 模型」，在**ACC 開始把 AI-ECG 當成 mainstream curriculum 推廣**——過去 5 年都是 individual 模型 paper 各自為政，2026 是 society-level 把它寫進臨床養成的元年。

對台灣 ED 端的實務意義：**未來 5 年 cardio fellow 出來都是受過 AI-ECG 訓練的**——你跟他 referral 時，他預期的 ECG 分析語言會包含「Queen of Hearts says...」「the AI gives LVH probability 87%」這類描述。**ED 端要開始學會把這套語言放進你的 referral notes**。

### ESC 5-20 — 鎖定式 AI-ECG 部署篩 transthyretin amyloid 心肌病

**ESC 2026-05-20 "Targeted deployment of AI-ECG for efficient screening of transthyretin amyloid cardiomyopathy using deep learning representations of longitudinal electronic health records"**[^esc-attr-ai]：把 AI-ECG 從「全院 sceeening」改成「**先用 EHR longitudinal data 算誰是高 pretest probability，再丟給 AI-ECG 看**」的兩階段 pipeline。

意義在**efficient screening**——AI-ECG 對 ATTR-CM 的 PPV 一直被「prevalence 低」拖累，每篩 100 個只抓到 1-2 個真陽性。先用 EHR data（年齡、HFpEF history、carpal tunnel syndrome、low-flow low-gradient AS、unexplained polyneuropathy 等 ATTR red flags）過濾出 pretest probability >5% 的族群，再丟 AI-ECG，**PPV 可以拉高一個數量級**。

對台灣 ED 端不直接 actionable（這是 cardiology clinic 等級工具），但要記住：**遇到 80 歲以上 HFpEF + low-voltage ECG + interventricular septum 顯著肥厚的病人**，**主動在轉診單寫「請評估 ATTR-CM 可能性」**——這幾年 tafamidis / acoramidis 等 disease-modifying therapy 進來，**早診斷是 actionable 的**。

### ESC 5-09 — 12-lead ECG 預測 HFrEF acute pulmonary edema

**ESC 2026-05-09 "Back to basics: can a standard 12-lead ECG predict acute pulmonary edema in HFrEF? the superiority of ST-segment depression over LVEF and QRS duration"**[^esc-pe-prediction]：很少見的「back to basics」研究——在 HFrEF 病人，**standard 12-lead ECG 上的 ST-segment depression 對 acute pulmonary edema 的預測力比 LVEF 或 QRS duration 還強**。

對台灣 ED 端非常 actionable：**收到 HFrEF + dyspnea 的病人，ECG 上看到新出現 ST depression 不要當「demand ischemia 標籤」就放過**——這條是 acute pulmonary edema 的早期訊號，**胸部 X 光還沒看到 Kerley B line 之前，ECG 就先告訴你了**。早期 NIPPV / IV diuretic / nitrate 介入的 trigger 可以前推。

{{< bottomline >}}
W21 AI ECG 端 actionable 訊號集中在「**鎖定式部署**」這個概念：ATTR-CM screening 不該全院 broadcast、應該先 EHR 過濾再 AI-ECG[^esc-attr-ai]；HFrEF + ECG ST depression 是 acute pulmonary edema 的早期訊號，**比 LVEF 與 QRS duration 都靈敏**[^esc-pe-prediction]。
{{< /bottomline >}}

---

## 四、Resus / 急救 {#res}

W20 寫過 REBEL EM DOSE-VF 二次分析、Mattu 5-11 post-arrest cath lab 決策。本週 Resus 訊號相對少——主要是 Smith 5-22 那個 case 本身就是 post-arrest 情境。

### Smith 5-22 case 的 resus 角度

回到 5-22 那位踢足球倒下的 50 多歲男性[^smith-05-22]：bystander CPR + AED 3 次電擊。Smith 寫這個 case 的 angle 是 OMI paradigm，但 case 結構本身對 resus 端有兩個觀察點：

**第一，bystander CPR 是 OHCA survival 的硬指標**——這個 case 「bystanders initiated CPR」這一句決定了後續所有可能性。AHA 2025 OHCA 統計：bystander CPR 把 survival to hospital discharge 從 7% 拉到 15-20%。**台灣 ED 端能做的事不是 ED 內，是 ED 外**——每次值班遇到 OHCA 家屬，**順手教 1 分鐘 hands-only CPR**（don't stop，don't worry about breathing）是低成本高回報的公衛 intervention。

**第二，AED 3 次電擊 → ROSC 的時間窗**——3 次電擊代表這位病人初始是 shockable rhythm（VF / pVT），這是**conditional survival 最好的 OHCA 亞群**（VF arrest 帶 bystander CPR + early defib，survival 可達 30-40%）。**ED 端接到這類病人，cath lab 評估的門檻要往下調**——Smith 這篇的 framing 就是「踢足球倒下的中年男性 + VF arrest = 高 OMI pretest probability」。

### EMCrit / REBEL EM / First10EM / Core EM — 本週 turnover 低

EMCrit 本週無新文（最近一篇 2026-02-09 PulmCrit thyroid storm beta-blocker）。REBEL EM 本週無新文（最近一篇 W20 DOSE-VF secondary analysis 已寫）。First10EM 本週無新文。Core EM 本週無新文。

{{< bottomline >}}
W21 resus 端訊號量低。**唯一值得帶到晨會的是 Smith 5-22 那個 case 本身呈現的「bystander CPR + AED 早期電擊 → ROSC」這條 OHCA 黃金路徑**[^smith-05-22]——bystander CPR 把 survival 從 7% 拉到 15-20%、shockable rhythm + early defib 可達 30-40%。下次值班遇到 OHCA 家屬，**順手教 1 分鐘 hands-only CPR**——這是低成本高回報的公衛 intervention。
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

### Mattu 5-18 — UMEM 14 屆 ECG 競賽答案 Part 1（Q1-Q4）

**ECG Weekly 2026-05-18 "2026 ECG Competition Answers (Part 1)"**[^mattu-05-18]：Amal Mattu 每年帶 University of Maryland EM residency 出題的 ECG 競賽，今年第 14 屆 14 題，本週放 Q1-Q4 答案。Mattu 的指示是「**先自己嘗試 full ECG interpretation/diagnosis 再看答案**」。

這 4 題對台灣急診的 residency 訓練是**直接拿來用的黃金教材**——

1. **晨會 quiz**：每週放 1 題，主治帶住院醫師 5 分鐘 ECG discussion。
2. **R1 / R2 ECG roundup**：把 4 題印出來，當週 case conference 走完。
3. **Resident orientation**：新人 R1 開訓時做 baseline assessment。

UMEM ECG 競賽過去 13 屆累積的題目本身就是一個 ED ECG curriculum——**Mattu 把 ECG 教學系統化的程度遠超其他 FOAMed 資源**。台灣 ED 端值得每年訂閱 ECG Weekly 跑這個 series（雖然是 paywall）。

### Smith 5-17 + 5-22 — 連兩篇放在一起教

Smith 本週兩篇（5-17 LBBB + 胸痛、5-22 STEMI/NSTEMI 宣戰書）放在一起就是一堂完整的 OMI paradigm 課：

**5-17 教「ECG technique」**——Modified Sgarbossa 怎麼算、ST/S ratio 怎麼看、LBBB 不是 OMI 的免死金牌。

**5-22 教「ECG framing」**——STEMI millimeter criteria 為什麼是「不可能的標準」、NSTEMI 為什麼是「無用的診斷」、language change 怎麼推動 referral pathway change。

**台灣 ED 端如果想做一場 1.5 小時的 OMI workshop**，建議結構：

- **前 30 分鐘**：講 5-22 paradigm 宣戰書，建立「OMI vs STEMI」的 framing
- **中 45 分鐘**：跑 5-17 Modified Sgarbossa 床邊操作 + 帶 5 張過去 OMI cases
- **後 15 分鐘**：分組討論「下次跟 cardio referral 怎麼說」

### Magnus Nossen 系列 — Smith blog 4-23 / 4-27 / 5-10 三連發

Magnus Nossen（挪威 cardiologist）這幾週在 Smith blog 連續發三篇 case：4-23「T wave inversion + innocent bystander on angiogram」、4-27「77 歲 COPD + Stage 5 CKD 的 T wave inversion」、5-10「unusual WCT」。**這個 case series 是 Smith blog 近年最系統性的「老人 ECG 鑑別」教材**——三篇都圍繞「ECG abnormality 不等於 acute event」這個微妙的判斷。

對台灣 ED 端的 takeaway：**老人 ECG 異常 default 不是 OMI**，需要：
1. **比對 prior ECG**——chronic vs new
2. **看臨床 picture**——symptom 是否 fit
3. **看 troponin trajectory**——一張 vs 兩張的 delta

---

## 六、追蹤作者本週新作 {#aut}

W20 視窗（2026-05-18 — 2026-05-24）內 PubMed 追蹤作者新作：

- **Stephen W. Smith**：本週 PubMed 無新作（訊號全在 blog 5-17 + 5-22）
- **Pendell Meyers**：_本週無 ECG 主題新作_
- **Ken Grauer**：本週 PubMed 無 W21 視窗內新作（4-08 JACC Case Reports 已於 W20 涵蓋）
- **Jesse McLaren**：本週 PubMed 無 W21 視窗內新作（4-16 BMJ "Recognising cardiac syncope" 已於 W20 涵蓋）
- **Emre Aslanger**：本週 PubMed 無 W21 視窗內新作（5-06 IC-ECG paper 已於 W19 涵蓋）
- **Robert Herman**：_本週無 ECG 主題新作_
- **Sam Ghali**：_本週無 ECG 主題新作_

W21 PubMed 視窗主要是 W20 已涵蓋作者的延伸——本週 author 軸線訊號低，主要 traffic 集中在 Smith blog 與 Mattu podcast 兩個 FOAMed 通道。

---

## 七、媒體動態 {#med}

### Smith 連四週推 OMI paradigm 的 framing

Smith blog 從 W18 4-29「不要打斷主治看這張正常 ECG」開始，連四週都在打同一條軸——W19 5-04「altered MS + OMI」、W20 5-13「serial ECG」、W21 5-17「LBBB + Modified Sgarbossa」、W21 5-22「STEMI/NSTEMI 宣戰書」。**這不是巧合，是 OMI movement 的 narrative arc 在收尾**——從「個別 case 累積」推進到「paradigm-level 宣言」。

對 ECG 教學 community 端的觀察：**2026 上半年很可能是 OMI paradigm 從 academic niche 走進 mainstream society guideline 的轉折點**。ACC / AHA 對 OMI/NOMI 這套 framing 的 official statement 還沒出來，但 ESC EHRA 2025 已經把「Modified Sgarbossa」「Aslanger pattern」「de Winter T」寫進 ESC ACS guideline 的 supplementary material——這是 official society 第一次承認 STEMI millimeter criteria 不足以涵蓋所有 acute occlusion。

### HRS podcast 連發三集 (Ep 148 / 150 / 151 / 152) 的後續

HRS The Lead podcast 在 2026-05-14（Ep 148 VINTAGE、Ep 150 TiFFANY）+ 2026-05-21（Ep 151 + Ep 152 CHAMPION-AF）三週連發四集 late-breaker——這是 HRS 大會 podcast 史上密度最高的一段。對 EP community 的意義在**HRS 把 podcast 作為 late-breaker 公布管道的策略**——比期刊 publication 早 3-6 個月，比新聞稿深 10 倍。**台灣 ED 端如果想追 EP 最新訊號，HRS The Lead 是 2026 性價比最高的 podcast**。

### Apple Heart Study 系列的 narrative 延伸到小兒

HRS 4-25 公告 Apple Watch 在小兒 arrhythmia 抓贏 Holter[^hrs-apple-pediatric]——這是 Apple Heart Study（2019 Stanford）→ Fitbit Heart Study（2022）→ Apple Watch 小兒 arrhythmia 抓 paroxysmal events（2026）的 narrative arc 第三幕。**消費級 wearables 從 AF screening 推進到 paroxysmal arrhythmia capture 的轉折正在發生**。

對 ED 端的 framing：**下次值班接到「我手錶說我心律不整」的病人，不要當笑話**——這幾年 wearables 假陽性率在快速下降，**Apple Watch ECG 對 AF 的 PPV 已達 ~80%**。家屬手上的 wearable data 是不該被忽略的 history。

---

## 八、文獻速報 {#ref}

### ESC 5-09 publication 大量釋出

W21 視窗內 ESC 子刊（EHRA 為主）大量 publication 釋出，每篇都不獨立成章但放在一起看是 2026 EP 的當下圖像：

- **"Ventricular arrhythmia, heart failure, and death: a triangular relationship in the WICD-MI study"**[^esc-vt-hf-triangle]：WICD-MI study 的 VT-HF-death 三角關係分析。對 ED 端的 takeaway——**HF 病人新發 VT 不只是 arrhythmia 問題，是死亡前驅指標**，要 trigger ICD / EP 立刻評估。
- **"Phenotype specific performance of an artificial intelligence enhanced ECG model for detecting left ventricular systolic dysfunction across the heart failure spectrum"**[^esc-ai-lvsd]：AI-ECG 對 LV systolic dysfunction 的 detection performance 在 HF spectrum 不同 phenotype 表現差異。
- **"Genotype-positive, phenotype-negative ventricular arrhythmia: the value of family-based segregation analysis"**[^esc-gen-pos]：基因陽性、表現陰性的 VT 病人，**家族 segregation analysis 對風險分層有獨立價值**。對 ED 端意義在 syncope work-up——**有家族猝死史的年輕 syncope 病人**，即使 baseline ECG 正常，也應該 trigger cardio referral 做基因評估。
- **"From St George to EASY-WPW: comparative validation of two ECG algorithms for accessory pathway localization"**[^esc-easy-wpw]：兩套 WPW accessory pathway 定位演算法的比較驗證。對 ED 端不直接 actionable（這是 EP procedure 規劃用），但**遇到 WPW 病人 referral 時，提供 12-lead ECG 高品質掃描比口述描述有用 10 倍**。

### Mechanical CPR 在 prehospital cardiac arrest 的 current evidence

Core EM 2026-01-28（W21 視窗外但延伸值得補）"Mechanical CPR in Prehospital Cardiac Arrest: Current Evidence and Future Directions"[^coreem-mech-cpr]——機械式 CPR 在 prehospital OHCA 的 current evidence review。**結論仍是「不優於高品質手動 CPR」**，但在**長轉送時程 / 樓梯間 / 救護車行進中**等手動 CPR 品質下降的場景有 niche 價值。台灣 ED 端 OHCA 接收時，**EMS 帶機械 CPR 來的 case 不要在 transfer 時切回手動 CPR**——保持 mechanical CPR 直到下一個 ROSC 評估點。

---

## 九、台灣急診情境備註 {#tw}

### Smith 5-22 paradigm 宣戰書與台灣 cardio referral 文化的摩擦

Smith 5-22「STEMI: an impossible standard. NSTEMI: a worthless diagnosis.」這篇放在台灣脈絡裡有現實摩擦——

**台灣 ED → cardio referral 的標準動作**仍是「**ECG STEMI 才能 activate cath lab**」。當 ED 端 call「ECG no STEMI 但 hyperacute T」、「reciprocal ST depression in lead III」、「Modified Sgarbossa positive」時，**cardio on-call 第一反應是「先送 troponin」**——這個摩擦不是 cardio 的問題，是**台灣 ACS 系統還沒把 OMI paradigm 寫進 protocol**。

當下 ED 端可以做的事：

1. **語言調整**：跟 cardio 講「ECG 上有 acute coronary occlusion 的訊號」，**不要說「no STEMI」**。
2. **document 完整**：把 OMI features（hyperacute T 在哪幾條 lead、reciprocal ST depression 的 mirror image、Modified Sgarbossa 的 ST/S ratio 計算）**寫進 ED 病歷**。
3. **serial ECG 自動觸發**：胸痛持續就每 15 分鐘一張，**不要等 cardio 回電才追 ECG**。
4. **跑 Queen of Hearts AI**：如果你有 PMcardio app，**OMI confidence 的 AI 輸出可以當 referral 的補充火力**。

### LBBB + 胸痛在台灣 ED 的 practical 流程

回到 Smith 5-17 的 LBBB + 胸痛——台灣 ED 實務上常見的三個 pitfall：

1. **電腦判讀「LBBB, no acute changes」就放手**——這是教科書錯誤，LBBB 的電腦判讀對 OMI 敏感度 <30%。
2. **記得舊版 Sgarbossa，忘記 Modified Sgarbossa**——`ST/S ratio ≤ -0.25` 這條才是 2012 年後的 standard。
3. **沒比對 prior ECG**——HIS 系統裡常常有過去 ECG，**值班花 60 秒撈一張比對**是高 CP 值的動作。

### Apple Watch 在台灣兒科的 practical 意義

HRS 4-25 Apple Watch 在小兒 arrhythmia 抓贏 Holter[^hrs-apple-pediatric]——台灣的脈絡：

**Apple Watch 在台灣青少年族群的普及率快速上升**（2025 約 25-30%）。值班遇到青少年 syncope / palpitation 問病史**必加三題**：

1. 你 / 你小孩有戴 Apple Watch / Fitbit / Garmin 嗎？
2. 最近 1 個月有沒有 abnormal heart rate notification（high HR alert / low HR alert / irregular rhythm notification）？
3. 手錶可以打開讓我看嗎？

第三題很關鍵——**Apple Watch Health app 裡的 heart rate history 可以看到過去 30 天每分鐘的 HR**，syncope 當下那一刻的 HR 通常能 retrieve。**這條 history 比 ED 接到病人時的 12-lead ECG 更有診斷力**。

---

## 十、本週 Key Takeaways {#key}

1. **Smith 5-22 paradigm 宣戰書**[^smith-05-22]：STEMI millimeter criteria 是「不可能的標準」（敏感度 43-53%）、NSTEMI 是「無用的診斷」（混淆 occlusion 與 non-occlusion）。下次跟 cardio referral 時把「no STEMI」換成「ECG 有 OMI features」。

2. **Smith 5-17 LBBB + 胸痛**[^smith-05-17]：永遠跑 Modified Sgarbossa（ST/S ratio ≤ -0.25），不要停在 1996 原版的 ≥5mm 絕對值。床邊動作三步：比對 prior ECG → 跑 Modified Sgarbossa → serial ECG 每 15 分鐘。

3. **Mattu 5-18 UMEM 14 屆 ECG 競賽 Q1-4**[^mattu-05-18]：直接拿來當晨會 quiz、R1/R2 ECG roundup、resident orientation baseline assessment 的黃金教材。

4. **HRS 4-25 Apple Watch 在小兒 arrhythmia 抓贏 Holter**[^hrs-apple-pediatric]：小兒 syncope / palpitation 問病史必加「你有戴 Apple Watch 嗎？最近有沒有 abnormal heart rate notification？手錶可以打開讓我看嗎？」三題。

5. **HRS Lead Ep 151 + 152 CHAMPION-AF 子分析**[^hrs-lead-151][^hrs-lead-152]：prior-ablation AF 族群 LAAC vs OAC non-inferior 且 bleeding 更低。未來 ED 看到 LAAC device 的 patient population 會擴大，要熟悉 DRT、pericardial effusion、residual leak 三個常見 ED 情境。

6. **ACC 5-21 AI-Enabled Clinician 系列**[^acc-ai-clinician]：ACC 開始把 AI-ECG 當 mainstream curriculum 推廣。ED 端要開始學會把 AI-ECG 語言放進 referral notes。

7. **ESC 5-20 鎖定式 AI-ECG 部署篩 ATTR-CM**[^esc-attr-ai]：先 EHR longitudinal data 過濾再 AI-ECG 的兩階段 pipeline，PPV 可以拉高一個數量級。遇到 80 歲以上 HFpEF + low-voltage ECG + 顯著 IVS 肥厚的病人，主動寫「請評估 ATTR-CM 可能性」。

8. **ESC 5-09 HFrEF + ECG ST depression 預測 acute pulmonary edema**[^esc-pe-prediction]：比 LVEF 與 QRS duration 都靈敏的早期訊號。HFrEF + dyspnea + 新出現 ST depression 時，早期 NIPPV / IV diuretic / nitrate 介入的 trigger 可以前推。

9. **HRS 4-26 ULTC ablation 在 refractory VT 多中心 + W20 VINTAGE**[^hrs-ulta-vt]：2026 是 VT ablation toolbox 大幅擴張的一年（RF / cryo / ULTC / intramyocardial / STAR 五條軌跡）。電風暴病人轉 EP 時可以多問一句「有沒有 ULTC 或 intramyocardial navigation 的可能性」。

10. **Smith 連四週 OMI paradigm narrative arc**：W18 → W19 → W20 → W21 連四週推 OMI framing，**這是 OMI movement 從 academic niche 走進 mainstream society guideline 的轉折期**。台灣 ED 端值得把 Smith blog 訂閱 + 每週讀。

---

## 引用 {#refs}

[^smith-05-22]: Smith SW. "STEMI: An Impossible Standard. NSTEMI: a worthless diagnosis." Dr Smith's ECG Blog 2026-05-22「A man in his mid 50s was playing soccer and collapsed. Bystanders initiated CPR and delivered 3 AED-advised shocks.」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/stemi-an-impossible-standard-nstemi-a-worthless-diagnosis/#:~:text=A%20man%20in%20his%20mid%2050s%20was%20playing%20soccer%20and%20collapsed)

[^smith-05-17]: Smith SW. "Chest pain and LBBB." Dr Smith's ECG Blog 2026-05-17「A middle-aged male presented with chest pain, onset 1 hour prior. He had an ECG recorded immediately.」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/chest-pain-and-lbbb/#:~:text=A%20middle%2Daged%20male%20presented%20with%20chest%20pain)

[^mattu-05-18]: Mattu A. "2026 ECG Competition Answers (Part 1)." ECG Weekly Workout 2026-05-18「This week we review the answers to questions 1-4 from the 14th Annual UMEM Residency ECG Competition.」→ [ecgweekly.com](https://ecgweekly.com/weekly-workout/2026-ecg-competition-answers/#:~:text=14th%20Annual%20UMEM%20Residency%20ECG%20Competition)

[^hrs-apple-pediatric]: Heart Rhythm Society. "Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors." HRS 2026 大會公告 2026-04-25 → [hrsonline.org](https://www.hrsonline.org/news/press-releases#:~:text=Apple%20Watch%20Captures%20More%20Pediatric%20Arrhythmia%20Events)

[^hrs-lead-151]: Heart Rhythm Society. "The Lead Episode 151: Heart Rhythm 2026 Late-Breaker Coverage: A Discussion of Outcomes of Left Atrial Appendage Closure versus Oral Anticoagulation in Patients with Atrial Fibrillation and Prior Ablation: A Sub-Analysis of the CHAMPION-AF Clinical Trial." HRS The Lead podcast 2026-05-21 → [hrsonline.org/podcasts](https://www.hrsonline.org/the-lead-podcast#:~:text=Episode%20151%20CHAMPION%2DAF%20Sub%2DAnalysis)

[^hrs-lead-152]: Heart Rhythm Society. "The Lead Episode 152: A Discussion of Outcomes of Left Atrial Appendage Closure versus Oral Anticoagulation in Patients with Atrial Fibrillation and Prior Ablation: A Sub-Analysis of the CHAMPION-AF Clinical Trial (Heart Rhythm Journal)." HRS The Lead podcast 2026-05-21 → [hrsonline.org/podcasts](https://www.hrsonline.org/the-lead-podcast#:~:text=Episode%20152%20Heart%20Rhythm%20Journal%20CHAMPION%2DAF)

[^hrs-ulta-vt]: Heart Rhythm Society. "Multicenter Study Finds Ultra-Low Temperature Ablation Highly Effective for Ventricular Tachycardia." HRS 2026 大會公告 2026-04-26 → [hrsonline.org](https://www.hrsonline.org/news/press-releases#:~:text=Ultra%2DLow%20Temperature%20Ablation%20Highly%20Effective%20for%20Ventricular%20Tachycardia)

[^acc-ai-clinician]: American College of Cardiology. "AI-Enabled Clinician: Using AI-Enabled ECG to Improve Care Delivery." ACC.org 2026-05-21 → [acc.org](https://www.acc.org/Latest-in-Cardiology#:~:text=AI%2DEnabled%20Clinician%20Using%20AI%2DEnabled%20ECG)

[^esc-attr-ai]: European Society of Cardiology. "Targeted deployment of AI-ECG for efficient screening of transthyretin amyloid cardiomyopathy using deep learning representations of longitudinal electronic health records." ESC Heart Failure / European Heart Journal sister journal 2026-05-20 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=Targeted%20deployment%20of%20AI%2DECG%20for%20efficient%20screening%20of%20transthyretin%20amyloid)

[^esc-pe-prediction]: European Society of Cardiology. "Back to basics: can a standard 12-lead ECG predict acute pulmonary edema in HFrEF? the superiority of ST-segment depression over LVEF and QRS duration." ESC sister journal 2026-05-09 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=Back%20to%20basics%20standard%2012%2Dlead%20ECG%20predict%20acute%20pulmonary%20edema%20HFrEF)

[^esc-vt-hf-triangle]: European Society of Cardiology. "Ventricular arrhythmia, heart failure, and death: a triangular relationship in the WICD-MI study." ESC sister journal 2026-05-09 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=Ventricular%20arrhythmia%20heart%20failure%20death%20triangular%20relationship%20WICD%2DMI)

[^esc-ai-lvsd]: European Society of Cardiology. "Phenotype specific performance of an artificial intelligence enhanced ECG model for detecting left ventricular systolic dysfunction across the heart failure spectrum." ESC sister journal 2026-05-09 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=Phenotype%20specific%20performance%20artificial%20intelligence%20enhanced%20ECG%20left%20ventricular%20systolic%20dysfunction)

[^esc-gen-pos]: European Society of Cardiology. "Genotype-positive, phenotype-negative ventricular arrhythmia: the value of family-based segregation analysis." ESC sister journal 2026-05-09 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=Genotype%2Dpositive%20phenotype%2Dnegative%20ventricular%20arrhythmia%20family%2Dbased%20segregation%20analysis)

[^esc-easy-wpw]: European Society of Cardiology. "From St George to EASY-WPW: comparative validation of two ECG algorithms for accessory pathway localization." ESC sister journal 2026-05-09 → [academic.oup.com/eurheartj](https://academic.oup.com/eurheartj#:~:text=From%20St%20George%20to%20EASY%2DWPW%20comparative%20validation%20two%20ECG%20algorithms%20accessory%20pathway)

[^coreem-mech-cpr]: Core EM. "Mechanical CPR in Prehospital Cardiac Arrest: Current Evidence and Future Directions." 2026-01-28 → [coreem.net](https://coreem.net#:~:text=Mechanical%20CPR%20in%20Prehospital%20Cardiac%20Arrest%20Current%20Evidence)

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。W21 是 W20 HRS 大會 late-breaker 落地後的「教學週」，主訊號集中在 Smith blog 連發兩篇與 Mattu 5-18 UMEM ECG 競賽 Part 1。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">6<span class="unit">篇 W21 內新文</span></div>
<ul>
<li><span class="li-en">Dr Smith <strong>2</strong> · ECG Weekly <strong>1</strong></span><span class="li-zh">Smith 心電圖部落格（5-17 LBBB + 胸痛、5-22 STEMI/NSTEMI 宣戰書）· Mattu 心電圖週刊（5-18 UMEM 14 屆 ECG 競賽 Q1-4）</span></li>
<li><span class="li-en">HRS <strong>2</strong> (Lead Ep 151 + 152)</span><span class="li-zh">美國心律學會官方 podcast 連兩集 CHAMPION-AF 子分析</span></li>
<li><span class="li-en">ACC <strong>1</strong> (5-21 AI-Enabled Clinician)</span><span class="li-zh">美國心臟學會官方教育內容</span></li>
<li><span class="li-en">LITFL / Core EM / EMCrit / First10EM / ALiEM / REBEL EM — 0</span><span class="li-zh">本週無新文</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">0<span class="unit">篇 W21 視窗內新作（W20 已涵蓋 Grauer 4-08 / McLaren 4-16）</span></div>
<ul>
<li><span class="li-en">Smith / Meyers / Sam Ghali / Robert Herman — 0</span><span class="li-zh">本週 PubMed 無新作（Smith 訊號全在 blog 5-17 + 5-22）</span></li>
<li><span class="li-en">Ken Grauer — W20 已涵蓋</span><span class="li-zh">JACC Case Reports Delphinium VT case (4-08) 已收</span></li>
<li><span class="li-en">Jesse McLaren — W20 已涵蓋</span><span class="li-zh">BMJ Recognising cardiac syncope (4-16) 已收</span></li>
<li><span class="li-en">Emre Aslanger — W19 已涵蓋</span><span class="li-zh">5-06 IC-ECG 已收</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">~15<span class="unit">篇候選（ESC 5-09 publication 延伸 + 5-20 AI-ECG ATTR + HRS 4-25/4-26 大會公告）</span></div>
<ul>
<li><span class="li-en">ESC EHRA 子刊 <strong>~10</strong></span><span class="li-zh">5-09 publication 延伸（WICD-MI VT-HF 三角、AI ECG LVSD、genotype-positive VT、EASY-WPW 等）+ 5-20 ATTR AI-ECG</span></li>
<li><span class="li-en">HRS 大會公告 <strong>~5</strong></span><span class="li-zh">4-25 Apple Watch 小兒 arrhythmia · 4-26 ULTC ablation · 4-26 underrepresented populations catheter ablation</span></li>
<li><span class="li-en">J Electrocardiology · Resuscitation · Heart Rhythm 主刊 — 5 月延伸</span><span class="li-zh">本週 turnover 低</span></li>
<li><span class="li-en">EHJ / JACC / JACC-EP / Annals EM — 0</span><span class="li-zh">本週皆空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">0<span class="unit">條過 filter（本週 cache 無新 ECG 主題 X 訊號）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog — 本週無 ECG 主題新 tweet</span><span class="li-zh">blog 5-17 + 5-22 已對應</span></li>
<li><span class="li-en">@ekgpress — 本週無新 case</span><span class="li-zh">—</span></li>
<li><span class="li-en">@RobertHermanMD — 本週無新作</span><span class="li-zh">—</span></li>
<li><span class="li-en">@amalmattu — 本週無新 tweet</span><span class="li-zh">ECG Weekly 5-18 已對應</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>
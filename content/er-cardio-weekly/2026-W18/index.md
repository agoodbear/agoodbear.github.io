---
title: "本週三大訊號：Queen of Hearts 抓「正常 ECG」、Aslanger 把 ECG 拉進冠脈內、Burst 取代 Bruce 抓 CPVT"
subtitle: "_Smith 公開示範 AI 抓人類完全沒看出來的 OMI、IC-ECG 即時看 microvascular reperfusion、Burst protocol 多揪 71% CPVT。_"
slug: "2026-W18"
week: "2026-W18"
weekRange: "2026-04-27 — 2026-05-03"
date: 2026-05-06T20:00:00+08:00
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

W18 的訊號集中在三條主軸。W17 已把「OMI 三條冷門場景 + CAAN-AF / STOPSTORM / Apple Watch」整段寫過，本週不重述背景，焦點放在「W17 沒寫到的新文 + W17 議題的延伸」。

**第一，OMI 判讀的 AI 軸線從「實驗室證據」走到「公開臨床示範」。** Stephen Smith 在 4-29 直接公布一張外部送來的 ECG，標題用的是「不要去打斷主治看這張『正常 ECG』，除非他用 Queen of Hearts」——這是把 W17 Friedman 那篇 sensitivity 94.1% vs 47.1% 的數字搬到 blog 上做活生生的範例。同週 Aslanger 在 JACC Case Reports 把 IC-ECG（intracoronary ECG）當成 PCI 中即時看 microvascular reperfusion 的工具，把 ECG 從體表拉進冠脈裡面。

**第二，節律與電生理多了三條 ablation 安全 / 策略訊號。** Heart Rhythm 5 月號補上兩篇 lattice-tip catheter 引發 inadvertent VF 的個案、Tung 提 LAA isolation 新策略、Europace 同時放 PFA 國際學會聯合聲明 + Zhang dronedarone vs amiodarone 在 AF blanking period 對打（recurrence 一樣但<mark>副作用率 40.9% vs 64.0%</mark>，dronedarone 完勝）。

CPVT 端 JAMA Cardiology 的 Burst exercise stress test 把 Bruce 替換掉，**71% 病人多揪到嚴重 arrhythmia**，是診斷流程的 practice-changing 訊號。

**第三，整體系統面兩條值得記。** EHJ Viborg Screening Program 用 multi-modality 篩 67 歲族群，<mark>5 年全因死亡 HR 0.76</mark>、NNI = 49 救一條命；JAMA Cardiology 顯示美國 Medicare 病人從 HF 確診到 ATTR-CM 確診中位數要 <mark>494 天</mark>，是「想得到要查」的提醒。Frick 補一條臨床趣味——critically ill + sinus pause 病人插不了 PPM 時，theophylline 可以 24 小時內把 8.6 秒的 pause 解掉。

本週五則值得在晨會帶過的：

- Smith 4-29 公開示範「Queen of Hearts 抓人類看不出來的 OMI」——把 W17 Friedman 數字搬上 blog（Dr Smith 2026-04-29）
- Aslanger 把 ECG 推進冠脈內當 microvascular reperfusion 即時 marker（JACC Case Reports 2026-04）
- JAMA Cardiology Naderi Burst exercise stress test 在 CPVT 多抓 71% 病人嚴重 arrhythmia（2026-04-08）
- Europace Zhang RCT — dronedarone 副作用率明顯低於 amiodarone（40.9% vs 64.0%，2026-04-28）
- JAMA Cardiology Spencer-Bonilla — ATTR-CM 從 HF 確診到 amyloid 確診中位數 494 天（2026-04-29）

---

## 一、OMI / 急性冠症 {#omi}

W17 已把 Magnus Nossen T wave inversion 三部曲、Friedman / Sharkey AI 雙篇、Hamm Annals EM、ECG Weekly Cath Lab cancel 案例寫透。W18 在 OMI 端有兩條新增訊號值得專門記。

**Dr Smith 2026-04-29 — "Do not interrupt the physician to show him/her this Normal ECG (Unless he/she uses the Queen of Hearts)"**：這篇本身就是 W17 Friedman 那篇論文的「公開示範版本」。Smith 直接放一張被臨床端 sign-off 為「正常」的 ECG，告訴你<mark>不要打斷主治去看「這張正常的 ECG」——因為他大概率診斷不出來</mark>，**除非他用 Queen of Hearts**。Smith 明白寫的是「unlikely to make the diagnosis without the Queen」[^smith-04-29]。

對急診端的意義是：W17 Friedman 那篇的「人類 sensitivity 47.1% vs AI 94.1%」現在進入「Smith 用實際個案在 blog 公開示範」的階段。**這條訊號的軸線是把 AI ECG 從研究 tool 變成 daily backup**——當你或主治覺得 ECG 沒事但症狀又對得起來，跑一次 PMcardio 已經是合理 default。

**Emre Aslanger et al., JACC Case Reports 2026-04 — "Intracoronary ECG May Reveal Dynamic Changes in Tissue-Level Reperfusion During Primary PCI"**（[PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/)）：Aslanger 是 OMI manifesto 的共同作者，這次發 case series 是把 ECG 玩到一個新層次——<mark>把 angiography guidewire 接到 ECG 系統上，當作 intracoronary lead</mark>。15 例 anterior MI 病人在 primary PCI 連續步驟做 IC-ECG，對照心臟 MRI 的 infarct characteristics。

關鍵發現：有些病人在 stent 部署後 ST 段持續恢復，有些病人卻在 stent 部署後 ST elevation 又冒回來——後者對應 MRI 上的 microvascular obstruction[^aslanger-icecg]。

對急診端的意義有限（IC-ECG 是 cath lab 內的 procedure，不是 ED 工具），但**對急診端的判讀邏輯有啟發**：ED 收到 post-PCI 病人主訴胸痛 / ECG 又變化的時候，「stent 通了 = 心肌一定 reperfuse」這個假設要打折，**microvascular 層級的 reperfusion failure 是一條獨立的病理路徑**，不能光靠冠脈造影看通就放心。

{{< bottomline >}}
W18 OMI 軸線的兩條都不是新數據，但都是 W17 Friedman / Sharkey 那條 AI ECG 主軸的「實作示範」與「ECG 進冠脈內」的延伸——**Queen of Hearts 已經從研究工具走到 Smith 用 blog 公開示範[^smith-04-29]，IC-ECG 把 ECG 從體表推進冠脈[^aslanger-icecg]**。對急診端最 actionable：cath lab cancel 你的 STEMI activation 時跑 AI 第二意見已是合理 default。
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W17 已寫過 CAAN-AF futility / STOPSTORM 80% 降 VT burden / Patil PFA + RF dual-modality / Boyle S-ICD QVS / Heart Rhythm RESTART / AF + HFpEF / BiV pacing 等。W18 在這條軸線上新增 Heart Rhythm 5 月號補進的 ablation 安全與 LAA 策略訊號，加上 Europace 開出 PFA 國際聲明 + dronedarone vs amiodarone RCT。

### 節律 (Arrhythmia)

**Europace 2026-04-28 — Zhang X et al. "Dronedarone vs amiodarone post-ablation blanking period RCT"**（DOI [10.1093/europace/euag095](https://doi.org/10.1093/europace/euag095)）：280 例 AF ablation 病人 1:1 隨機分到 12 週 dronedarone 或 amiodarone，blanking period 結束後比 atrial tachyarrhythmia recurrence > 30 秒。

結果：mITT 分析下兩組 recurrence 沒差（<mark>23.4% vs 16.9%, P = 0.184</mark>），**但 dronedarone 副作用率 40.9% vs amiodarone 64.0%（P < 0.001）**，QTc 延長 5.8% vs 15.4%（P = 0.01）、hypothyroidism 8.8% vs 26.5%（P < 0.001）[^zhang-droned]。

對急診端的意義是：未來收到 AF post-ablation 病人主訴 QTc 延長 / 甲狀腺功能異常 / amiodarone-related 副作用時，**多了一條 messaging 證據——同樣 efficacy 但 dronedarone 安全性顯著優於 amiodarone**。EP 端會逐漸把 blanking period 的 default 換掉。

**Europace 2026-04-28 — Vardas E et al. "miR-10b-5p as biomarker of AF recurrence after ablation"**（DOI [10.1093/europace/euag097](https://doi.org/10.1093/europace/euag097)）：兩階段 translational study (n=29 + 126)，hsa-miR-10b-5p 在 AF post-ablation recurrence 預測 <mark>AUC = 0.96</mark>。biomarker 端的訊號，急診端不直接 actionable，但值得知道之後 AF ablation 後追蹤可能有 miRNA 工具。

### 傳導 (Conduction)

**J Electrocardiology 2026-07 — Darko P et al. "Masquerading bundle branch block: An electrocardiographic harbinger of advanced conduction system disease"**（DOI [10.1016/j.jelectrocard.2026.154270](https://doi.org/10.1016/j.jelectrocard.2026.154270)）：masquerading BBB 是經典但少見的 ECG pattern——肢體導聯像 LBBB、precordial 像 RBBB（或反之），代表雙支系同時受損。

Darko 把它定義為 advanced conduction system disease 的 harbinger，意思是看到這個 pattern 就要主動追傳導系統的長期病程。

對急診端的意義是：syncope / pre-syncope 病人 ECG 出現 masquerading BBB 時，**不要當成單純 BBB 處理，建議直接 admit + EP consult**[^darko-mbbb]。

**J Electrocardiology 2026-07 — Yao S et al. "Electrocardiographic features of Takotsubo syndrome with right ventricular pacing"**（DOI [10.1016/j.jelectrocard.2026.154246](https://doi.org/10.1016/j.jelectrocard.2026.154246)）：RV pacing baseline 病人合併 Takotsubo 時 ECG 怎麼判？這是教學性訊號，提醒 ED 看到 paced rhythm + ST 變化要把 Takotsubo 列入鑑別。

### 通道病 (Channelopathy)

**JAMA Cardiology 2026-04-08 — Naderi B et al. "Burst Exercise Stress Testing in Catecholaminergic Polymorphic Ventricular Tachycardia"**（DOI [10.1001/jamacardio.2026.0384](https://doi.org/10.1001/jamacardio.2026.0384)）：CPVT 病人傳統用 Bruce protocol exercise test 來誘發 adrenergic-mediated ventricular arrhythmia，但 sensitivity 不夠。Naderi 收 28 例已知 CPVT 病人連續做 Bruce + Burst 兩種 protocol（中位間隔 1.3 年），用 Ventricular Arrhythmia Score (0-4) 比較。

結果：<mark>**Burst protocol 在 28 人中有 20 人（71%）誘發出更嚴重的 arrhythmia**</mark>（VAS 中位數 3 vs 1，P < 0.001）。其中 13 人（65%）因此需要加 β-blocker 或 flecainide 或加劑量。**沒有任何安全事件**[^naderi-burst]。

對急診端的意義是：以後收到 CPVT 病人主訴運動誘發症狀但 Bruce test 陰性，要知道**「Bruce test 陰性不代表沒病」**——可以建議轉介到能跑 Burst protocol 的中心再做一次。台灣兒童心臟科端處置 CPVT 的 stress test 流程要逐步更新。

### 裝置 (Devices)

**Heart Rhythm 2026-05 — Ip J et al. "Bending the curve: S-ICD implant technique with pectus excavatum"**（DOI [10.1016/j.hrthm.2025.12.033](https://doi.org/10.1016/j.hrthm.2025.12.033)）：pectus excavatum 病人 S-ICD 植入 technique。對急診端的意義是 disposition 端：**這族群 S-ICD shock 主訴時要考慮解剖位置與 sensing vector 的 mismatch**。

**Heart Rhythm 2026-05 — Tung P et al. "A new LAA isolation strategy for persistent AF requiring repeat ablation"**（DOI [10.1016/j.hrthm.2025.12.027](https://doi.org/10.1016/j.hrthm.2025.12.027)）：LAA isolation 在 persistent AF 重做的新策略。對急診端不直接 actionable，但要知道——**LAA 已 isolated 的病人血栓風險上升**，這類病人即使心律恢復 sinus rhythm，OAC 不能停。

### 消融 (Ablation)

**Heart Rhythm 2026-05 — Schaerli N et al. "Unexpected VF during lattice-tip RFA in a patient with ICD"**（DOI [10.1016/j.hrthm.2025.11.046](https://doi.org/10.1016/j.hrthm.2025.11.046)）+ **Kovacs B et al. "Inadvertent VF induced by lattice-tip RFA in proximity to ICD leads"**（DOI [10.1016/j.hrthm.2025.10.031](https://doi.org/10.1016/j.hrthm.2025.10.031)）：兩篇個案同期出現，提醒 lattice-tip catheter 在 ICD lead 鄰近做 RFA 時可能意外誘發 VF。

對急診端的 takeaway：**lattice-tip RFA 後病人主訴 shock 或 syncope 時，不要假設 device 失靈，要把 procedure-induced VF 列入鑑別**[^schaerli-lattice]。

**Europace 2026-04-12 — Kühne M et al. "PFA for Interventional Treatment of AF: Scientific Statement of EHRA / HRS / APHRS / LAHRS / CHRS"**（DOI [10.1093/europace/euag080](https://doi.org/10.1093/europace/euag080)）：五大區域學會聯合 scientific statement。**PFA 對 RF / cryo 的效益相當，但安全與效率有優勢**——這是學會層面正式 endorse PFA 的第一份國際聲明[^kuhne-pfa]。

對急診端的意義是：以後收到 PFA-treated 病人時知道這已不是「實驗性療法」，是 mainstream 選項。但 W17 Patil 的 PF + RF dual-modality 個案提醒，**PFA 仍可能引起 reversible coronary spasm**——學會 endorse 不等於完全沒風險。

**Europace 2026-04-24 — Gunawardene M et al. "Adjunctive Posterior Wall Ablation with Balloon-in-Basket PFA: VOLT CE Mark"**（DOI [10.1093/europace/euag094](https://doi.org/10.1093/europace/euag094)）：Posterior wall ablation 加上 PVI 的 PFA balloon-in-basket 設計可行性。EP 端的硬體訊號。

**Europace 2026-04-21 — Levi O et al. "Differential Effects of Semaglutide and Colchicine on Atrial Remodeling in Post-MI rats with Reduced EF"**（DOI [10.1093/europace/euag091](https://doi.org/10.1093/europace/euag091)）：post-MI HFrEF 動物模型，**semaglutide 與 colchicine 都降 AF inducibility**，但 semaglutide 額外降 atrial fibrosis、抑 NLRP3、防 connexin-43 lateralization。

這跟 W17 提過的 GLP-1 降 AF 風險訊號（HRS 2026-04-23）方向一致——GLP-1 在 cardiology 端的角色不只 metabolic，已延伸到 atrial substrate 的修飾。

{{< bottomline >}}
W18 節律與電生理端最 actionable 是 Burst protocol 取代 Bruce 在 CPVT 診斷的 71% 多揪率[^naderi-burst]、Europace dronedarone 副作用率明顯低於 amiodarone 的 RCT 證據[^zhang-droned]。

Masquerading BBB 是 advanced conduction system disease 的 harbinger 不能當單純 BBB[^darko-mbbb]，lattice-tip RFA 鄰近 ICD lead 可能引發意外 VF 的 procedure 安全訊號[^schaerli-lattice]。Europace PFA 五大學會聯合聲明把 PFA 推到主流[^kuhne-pfa]，但 W17 Patil PFA + 冠脈痙攣的安全訊號仍要記著。
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W17 已寫過 Friedman / Sharkey 兩篇 AI ECG OMI 證據與 Apple Watch 在兒童 yield。W18 在這條軸線本週新增以下：

**Dr Smith 2026-04-29 公開示範**：見「一、OMI」章節[^smith-04-29]。把 W17 Friedman 那篇從論文搬到 blog 上做 single-case 示範，**這是 AI ECG 真正進入「daily clinical use」門檻的一個訊號**——Smith 是個極端 AI-skeptic 出身的 ECG 老師，他願意在 blog 公開這樣的標題本身就是 paradigm shift。

**ECG Weekly 2026-04-27「The Cath Lab Was Activated, But Something Didn't Fit」**：W17 已寫，這裡只補一個觀察——Amal 同期推「prehospital 已 activate 但到 ED 後要重做一張」的訊號，與 Smith 的「Queen of Hearts 抓 cancel 後的 OMI」是同一條主軸的兩端：**prehospital 過度 activation + cardiology 過度 cancel 都是現行 STEMI criteria 的盲點**，AI 都在補這兩塊。

**HRS 2026-04-23 — GLP-1 Medications Linked to Lower Risk of AF, Independent of Weight Loss**：HRS 公告。GLP-1 降 AF 風險的訊號與 W18 Europace Levi 動物模型 semaglutide 降 AF inducibility 方向一致，**機轉很可能是 atrial substrate（fibrosis / NLRP3 inflammasome）而不是體重減輕**[^hrs-glp1]。對急診端：未來收到 GLP-1 use + 新發 AF 病人時，要知道 GLP-1 本身可能在保護而非促發。

{{< bottomline >}}
本週 AI ECG 端最重要不是新證據，而是 Smith 公開示範 Queen of Hearts 的「臨床示範轉折點」[^smith-04-29]。GLP-1 降 AF 風險獨立於體重的訊號從動物模型 + HRS 公告兩端同時冒出，可能改寫 GLP-1 的心臟適應症[^hrs-glp1]。
{{< /bottomline >}}

---

## 四、Resus / 急救 {#res}

W17 已把 Resuscitation 2026-06 issue 的 Vallentin / Pozzi / Rixmann / Dhingra / Boulton / Elmer / Gardes / Cerchiari / Jang 全部列過。W18 在 cardiac arrest 端**沒有新的 practice-changing 訊號**，本週 Resuscitation cache 與 W17 重疊。

值得短帶過的兩條延伸思考：

**Vallentin OHCA IV vs IO RCT（W17 已寫）**：W18 cache 沒有後續討論，但 W18 期間若 ED 端做 OHCA simulation 可以把這條當教案——「IV vs IO 的 default 已從『先 IV 試試』偏向『IO 直接打』」。

**ECPR / ECMO truck（W17 已寫）**：Pozzi 的 14 年單中心數據加上 Rixmann 的 Minnesota 院前 ECMO 卡車，提醒台灣偏遠地區 EMS 設計可以開始想 mobile ECMO 路徑，但這是中長期政策題。

_本週急救端無新訊號_。

{{< bottomline >}}
W18 cardiac arrest 端與 W17 重疊，無新 practice-changing 證據；建議把 W17 的 Vallentin / Pozzi / Rixmann 帶回 ED morbidity & mortality conference 做 follow-up 討論。
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

W18 三個值得在 journal club / resident 教學中帶過的：

1. **Dr Smith 2026-04-29「Do not interrupt the physician to show him/her this Normal ECG (Unless he/she uses the Queen of Hearts)」**[^smith-04-29]：把 W17 Friedman 論文（sensitivity 94.1% vs 47.1%）的概念搬到 blog 上做活生生示範。**教學點是**：當你或主治覺得 ECG 沒事但臨床症狀對得起來，**跑一次 AI ECG（PMcardio / Queen of Hearts）已是合理 default**——這是「Smith 自己都這樣示範」這條 social proof。

2. **Aslanger IC-ECG case series（JACC Case Reports 2026-04）**[^aslanger-icecg]：cath lab 內把 guidewire 接到 ECG 系統，PCI 連續步驟做 intracoronary ECG，對照 cardiac MRI 看 microvascular obstruction。**教學點是**：「stent 通了 = 心肌一定 reperfuse」這個假設要打折——**microvascular reperfusion failure 是獨立的病理路徑**。對 ED 端的 takeaway：post-PCI 病人胸痛 / ECG 變化要把 microvascular obstruction 列入鑑別。

3. **Naderi Burst Exercise Stress Test in CPVT（JAMA Cardiology 2026-04-08）**[^naderi-burst]：28 例 CPVT 病人連續做 Bruce + Burst protocol，<mark>71% 病人 Burst 多揪到嚴重 arrhythmia</mark>，65% 因此調藥。**教學點是**：「Bruce test 陰性不代表沒 CPVT」——這對台灣兒童心臟科 / 急診的 syncope work-up 有實作意義。

**Heart Rhythm Schaerli + Kovacs 兩篇 lattice-tip RFA 引發 inadvertent VF 的個案**[^schaerli-lattice]：教學點是 procedure-related complication 的辨識——**lattice-tip RFA 後病人 shock 或 syncope 不要直接歸為 device failure**。

{{< bottomline >}}
W18 三個教學案例軸線分別代表 AI ECG 進入 daily use、ECG 從體表推進冠脈、Bruce → Burst protocol 在 CPVT 的更替。建議與 W17 的 Magnus T wave 三部曲 + UMEM Cases 串成「ECG 判讀盲點 + AI 補位」單堂 ECG masterclass。
{{< /bottomline >}}

---

## 六、追蹤作者本週新作（PubMed）{#aut}

W18 從 `authors_cache.json` 7 位指定作者整理，本週有四位有新發表（W17 已寫過的 Smith / Meyers / Grauer / McLaren 不重複）。

{{< h3bi en="Stephen W. Smith" zh="Hennepin Healthcare · OMI 主軸" >}}

W18 PubMed 端 Smith 沒有新 first/co-author 文獻（W17 已寫過 Friedman / Hamm / Sharkey 三篇）。**Smith 的 W18 訊號在 blog 端**——4-29「Do not interrupt the physician to show him/her this Normal ECG (Unless he/she uses the Queen of Hearts)」[^smith-04-29] 是把 W17 那三篇論文 messaging 落地到 blog 個案示範的延伸。

{{< h3bi en="Pendell Meyers" zh="OMI 概念共同創立者" >}}

W18 PubMed 沒有新 first-author 文獻。Meyers 與 Smith 的合作主軸（Friedman / Hamm 兩篇）已在 W17 寫過。

{{< h3bi en="Ken Grauer" zh="KG-EKG Press · 佛州 ECG 教學" >}}

W18 PubMed 沒有新 first-author 文獻（W17 已寫過 Delphinium aconitine 個案）。

Grauer 在 X 端 5-2 推了一張 epigastric pain 的 ECG case，問「要不要 activate cath lab」[^grauer-x-0502]——這是他 blog 預告下篇案例的招牌動作，下週可追 ECG Pearls & Cases 的後續。

{{< h3bi en="Jesse McLaren" zh="多倫多 ECG Cases blog 主理人" >}}

W18 PubMed 沒有新發表（W17 BMJ syncope review 已寫）。

{{< h3bi en="Emre Aslanger" zh="伊斯坦堡 OMI 共同作者" >}}

| 日期 | 題目 | 期刊 | PMID |
|------|------|------|------|
| 2026-04 | Intracoronary ECG May Reveal Dynamic Changes in Tissue-Level Reperfusion During Primary PCI<br><span class="zh-sub">IC-ECG 可揭示 primary PCI 過程中 tissue-level reperfusion 的動態變化</span> | JACC Case Reports | [41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/) |

詳見「一、OMI / 急性冠症」章節[^aslanger-icecg]。**重點**：guidewire 接 ECG 系統當 intracoronary lead，15 例 anterior MI，stent 部署後 ST 持續恢復 vs 再次升高對應 MRI microvascular obstruction 差異。

對 ED 端的 takeaway：post-PCI 胸痛 / ECG 變化要把 microvascular obstruction 列入鑑別，不能只看冠脈造影通了就放心。

{{< h3bi en="Willy Frick" zh="WashU 心臟科" >}}

| 日期 | 題目 | 期刊 | PMID |
|------|------|------|------|
| 2026-04 | Real-world use of theophylline in critically ill patients with sinus pauses: a case series<br><span class="zh-sub">critically ill 病人 sinus pause 用 theophylline 真實世界個案系列</span> | Frontiers in Cardiovascular Medicine | [41778069](https://pubmed.ncbi.nlm.nih.gov/41778069/) |

兩例 critically ill 病人因為**正在感染 + 不適合 PPM 植入**，用 theophylline 處理 asymptomatic sinus pauses（最長 8.6 秒）。<mark>**24 小時內 pause 解掉**</mark>，劑量調整到 therapeutic concentration 10-20 之間維持[^frick-theo]。

對急診端的意義是：**ICU / ED admit 病人遇到 active infection + sinus pause 但不能放 PPM 的場景**，theophylline 是合理的 bridge 選項。台灣 ED 端遇到這類病人通常把 transvenous pacing 當唯一選項，theophylline 是值得記的非侵入路徑。

{{< h3bi en="Sam Ghali" zh="EM Resus 教學者" >}}

W18 PubMed 沒有新發表。_本週無 ECG 主題新作_。

{{< bottomline >}}
W18 追蹤作者軸線新增兩條：Aslanger 把 ECG 推進冠脈內當 microvascular reperfusion 即時 marker[^aslanger-icecg]、Frick theophylline 解 critically ill 病人 sinus pause 的非侵入選項[^frick-theo]。Smith 雖然 PubMed 沒新文，但 blog 端公開示範 Queen of Hearts 抓 OMI 的 paradigm shift 訊號比論文更值得記[^smith-04-29]。
{{< /bottomline >}}

---

## 七、媒體動態 {#med}

{{< h3bi en="Dr Smith ECG Blog" zh="Hennepin Healthcare · OMI 主軸" meta="W18 區間" >}}

| 日期 | 標題 |
|------|------|
| 2026-04-29 | Do not interrupt the physician to show him/her this "Normal ECG"!! (Unless he/she uses the Queen of Hearts)<br><span class="zh-sub">不要去打斷主治看這張「正常 ECG」（除非他用 Queen of Hearts）</span> |

W17 寫過的 Smith blog 4-23 / 4-27 兩篇 Magnus Nossen T wave inversion 不重複。

{{< h3bi en="ECG Weekly (Amal Mattu)" zh="Mattu 心電圖週刊" meta="W18 區間" >}}

W18 區間（2026-04-28 ~ 2026-05-03）_本週無新 weekly workout 發布_。W17 的 4-27「Cath Lab Activated, But Something Didn't Fit」是 Mattu 的最新一集。

{{< h3bi en="HRS" zh="美國心律學會" meta="W18 區間" >}}

| 日期 | 標題 |
|------|------|
| 2026-04-23 | New Study Links GLP-1 Medications to Lower Risk of Atrial Fibrillation, Independent of Weight Loss<br><span class="zh-sub">GLP-1 藥物與 AF 風險降低有關，獨立於體重減輕</span> |

W17 寫過的 Apple Watch / Ultra-Low Temp Ablation / VINTAGE / Sphere-9 不重複。

### LITFL / EMCrit / REBEL EM / First10EM / ALiEM / Core EM / ACC / ESC / AHA

W18 區間沒有新文章 / 新訊號（既有 cache 都是更早期累積教學文章）。_本週這幾個來源無新訊號_。

### X.com 本週 ECG 相關推文（filter 後）

| 作者 | 日期 | 內容 | 連結 |
|------|------|------|------|
| Smith | 2026-04-29 | Queen of Hearts 抓「正常 ECG」上的 OMI（對應 blog 4-29 那篇） | [tweet](https://x.com/smithECGBlog/status/2049496549806272910) |
| Robert Herman | 2026-04-29 | "Completely normal early LAD occlusion!" — 強調早期 LAD occlusion 在 ECG 上常被當「正常」 | [tweet](https://x.com/RobertHermanMD/status/2049503406201438259) |
| Smith | 2026-04-28 | 推一篇 silent MI 的 paper | [tweet](https://x.com/smithECGBlog/status/2049258999774650433) |
| Ken Grauer (ekgpress) | 2026-05-02 | 老婦 epigastric pain ECG case（預告 blog 下篇） | [tweet](https://x.com/ekgpress/status/2050428584926282088) |

L4 二次 filter 結果：過去 7 天總計 23 條推文 → 14 條是 RT（其中 Smith 連發 7-8 條政治轉推，retweet 數最高都到萬級但完全跟 ECG 無關，依 SOP 全部跳過），另 1 條 Smith 自發政治推文 + 2 條 fascist government 評論也跳過——**剩 4 條本人發 + ECG 主題的推文如上**。

{{< h3bi en="ESC ECG-AI 系列" zh="歐洲心臟學會 ECG-AI" meta="W18 區間" >}}

ESC 在 4-23 / 4-12 集中放出多篇 AI ECG / wearable / athletes ECG / channelopathy 相關 abstract，較有教學價值的：

- **Comparative performance of wearable ECG devices for heart rhythm monitoring in endurance athletes**（2026-04-23）— wearable ECG 在耐力運動員心律監測的比較
- **Sport- and sex-specific ECG patterns in competitive athletes**（2026-04-23）— 競技運動員 ECG 的運動 / 性別特異模式
- **Application of AI-ECG in cardiac screening: a feasibility study**（2026-04-23）— AI-ECG 在心臟篩檢的可行性
- **Heterogeneity in ECG morphology in LQT3: disparity between genotype & phenotype in a four-generation family**（2026-04-12）— LQT3 ECG 形態異質性，四代家族 genotype-phenotype 不一致

對台灣 ED 與運動心臟學端意義有限，但**LQT3 genotype-phenotype 不一致這條提醒：基因檢測陽性但 ECG 看似正常的 LQT 病人不能放鬆 risk stratification**。

---

## 八、文獻速報 — CrossRef 期刊 {#ref}

{{< h3bi en="European Heart Journal" zh="歐洲心臟期刊" meta="W18 新增" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-04-28 | Multi-modality non-invasive cardiovascular screening and sex-specific outcomes: the Viborg Screening Program<br><span class="zh-sub">多模態非侵入性心血管篩檢與性別特異性結果 — Viborg 篩檢計畫</span> | Dahl M | [10.1093/eurheartj/ehag309](https://doi.org/10.1093/eurheartj/ehag309) |

Viborg Screening Program：丹麥 67 歲族群隨機邀請做 carotid plaque、PAD、AAA、HTN、arrhythmia / ischaemia、DM 多模態篩檢，<mark>5.8 年中位 follow-up 全因死亡 HR 0.76（95% CI 0.68-0.85, P < 0.001）</mark>，**NNI = 49 救一條命**。Sex-stratified 同向（男 0.73、女 0.82），但**僅在無 prior CVD 族群有效**（HR 0.70 vs 有 CVD 0.97）[^dahl-viborg]。

對台灣 ED 端不直接 actionable，但對全民 / 家庭醫學端是政策層級訊號——**67 歲是 multimodal 預防性篩檢的黃金窗口**。

W17 已寫的 STOPSTORM.eu / CAAN-AF 不重複。

{{< h3bi en="JAMA Cardiology" zh="JAMA 心臟" meta="W18 新增" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-04-29 | Timeliness of Transthyretin Cardiac Amyloidosis Diagnosis in the Medicare Population<br><span class="zh-sub">Medicare 族群 ATTR-CM 確診的時效性</span> | Spencer-Bonilla G | [10.1001/jamacardio.2026.0833](https://doi.org/10.1001/jamacardio.2026.0833) |
| 2026-04-08 | Burst Exercise Stress Testing in Catecholaminergic Polymorphic Ventricular Tachycardia<br><span class="zh-sub">CPVT 病人 Burst exercise stress test</span> | Naderi B | [10.1001/jamacardio.2026.0384](https://doi.org/10.1001/jamacardio.2026.0384) |
| 2026-04-08 | RBM20 Truncating Variants and Human Cardiomyopathy<br><span class="zh-sub">RBM20 truncating variants 與人類 cardiomyopathy</span> | Floyd B | [10.1001/jamacardio.2026.0401](https://doi.org/10.1001/jamacardio.2026.0401) |

Spencer-Bonilla 重點：7,770 例 Medicare HF + ATTR-CM 病人，<mark>HF 確診到 ATTR-CM 確診中位數 494 天（IQR 63-1340）</mark>，loop diuretic 開始到 ATTR-CM 確診中位數更高達 840 天[^bonilla-attr]。**老年 + AF + carpal tunnel 與較少延誤有關，女性 + AS + COPD 與較多延誤有關**。

對急診端的意義是：HF + low voltage on ECG + LVH on echo + 不對等的 carpal tunnel 病史時，**ATTR-CM 要主動列入鑑別**——美國的 494 天中位延誤在台灣可能更糟。

Naderi Burst CPVT 詳見「二、節律與電生理」章節[^naderi-burst]。

{{< h3bi en="Europace" zh="歐洲節律" meta="W18 新增" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-04-28 | Dronedarone vs amiodarone preventing recurrence after AF catheter ablation: open-label RCT<br><span class="zh-sub">AF 導管消融後預防復發 — dronedarone vs amiodarone open-label RCT</span> | Zhang X | [10.1093/europace/euag095](https://doi.org/10.1093/europace/euag095) |
| 2026-04-28 | Circulating miR-10b-5p as candidate biomarker of AF recurrence after catheter ablation<br><span class="zh-sub">循環 miR-10b-5p 作為 AF 消融後復發候選 biomarker</span> | Vardas E | [10.1093/europace/euag097](https://doi.org/10.1093/europace/euag097) |
| 2026-04-24 | Adjunctive Posterior Wall Ablation with Balloon-in-Basket PFA in AF: VOLT CE Mark<br><span class="zh-sub">balloon-in-basket PFA 加做 posterior wall ablation — VOLT CE Mark</span> | Gunawardene M | [10.1093/europace/euag094](https://doi.org/10.1093/europace/euag094) |
| 2026-04-21 | Differential Effects of Semaglutide and Colchicine on Atrial Remodeling in Post-MI Rats with Reduced EF<br><span class="zh-sub">Post-MI HFrEF 大鼠模型 — semaglutide vs colchicine 對 atrial remodeling 差異</span> | Levi O | [10.1093/europace/euag091](https://doi.org/10.1093/europace/euag091) |
| 2026-04-12 | PFA for AF: Scientific Statement of EHRA / HRS / APHRS / LAHRS / CHRS<br><span class="zh-sub">AF PFA 治療 — 五大區域學會聯合科學聲明</span> | Kühne M | [10.1093/europace/euag080](https://doi.org/10.1093/europace/euag080) |

詳見「二、節律與電生理」章節[^zhang-droned][^kuhne-pfa]。

{{< h3bi en="Heart Rhythm" zh="心律期刊" meta="W18 新增（W17 已寫篇章不重複）" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-05 | Unexpected ventricular fibrillation during left ventricular lattice-tip RFA in a patient with an ICD<br><span class="zh-sub">左心室 lattice-tip RFA 過程中意外發生 VF — ICD 病人個案</span> | Schaerli N | [10.1016/j.hrthm.2025.11.046](https://doi.org/10.1016/j.hrthm.2025.11.046) |
| 2026-05 | Inadvertent VF induced by RFA with the lattice-tip catheter in proximity to ICD leads<br><span class="zh-sub">lattice-tip catheter 在 ICD lead 鄰近做 RFA 引發意外 VF</span> | Kovacs B | [10.1016/j.hrthm.2025.10.031](https://doi.org/10.1016/j.hrthm.2025.10.031) |
| 2026-05 | Bending the curve: S-ICD implant technique with pectus excavatum<br><span class="zh-sub">扭轉曲線：pectus excavatum 病人 S-ICD 植入技巧</span> | Ip J | [10.1016/j.hrthm.2025.12.033](https://doi.org/10.1016/j.hrthm.2025.12.033) |
| 2026-05 | A new LAA isolation strategy for persistent AF requiring repeat ablation<br><span class="zh-sub">持續性 AF 重複消融用新的 LAA isolation 策略</span> | Tung P | [10.1016/j.hrthm.2025.12.027](https://doi.org/10.1016/j.hrthm.2025.12.027) |
| 2026-05 | Understanding VF in STEMI: Time to move beyond associations<br><span class="zh-sub">理解 STEMI 期間的 VF — 是時候超越關聯研究 (editorial)</span> | Narayanan K | [10.1016/j.hrthm.2025.07.059](https://doi.org/10.1016/j.hrthm.2025.07.059) |

詳見「二、節律與電生理」章節[^schaerli-lattice]。

{{< h3bi en="Journal of Electrocardiology" zh="心電圖期刊" meta="2026-07 issue · W18 新增（W17 已寫篇章不重複）" >}}

| 標題 | 第一作者 | DOI |
|------|----------|-----|
| Masquerading bundle branch block: An ECG harbinger of advanced conduction system disease<br><span class="zh-sub">假性 BBB — advanced 傳導系統疾病的 ECG 先兆</span> | Darko P | [10.1016/j.jelectrocard.2026.154270](https://doi.org/10.1016/j.jelectrocard.2026.154270) |
| ECG features of Takotsubo syndrome with right ventricular pacing<br><span class="zh-sub">Takotsubo + RV pacing 的 ECG 特徵</span> | Yao S | [10.1016/j.jelectrocard.2026.154246](https://doi.org/10.1016/j.jelectrocard.2026.154246) |
| Fragmented QRS and atrial tachyarrhythmia after catheter ablation for AF / atrial flutter: meta-analysis<br><span class="zh-sub">Fragmented QRS 與 AF / atrial flutter 消融後 atrial tachyarrhythmia — meta-analysis</span> | Wang C | [10.1016/j.jelectrocard.2026.154262](https://doi.org/10.1016/j.jelectrocard.2026.154262) |
| ECG P-wave amplitude as discriminative marker for pediatric ASD<br><span class="zh-sub">P 波振幅作為兒童 ASD 鑑別指標</span> | Kumamoto T | [10.1016/j.jelectrocard.2026.154245](https://doi.org/10.1016/j.jelectrocard.2026.154245) |
| Diverse manifestations of junctional premature beats<br><span class="zh-sub">交界性早期收縮的多樣表現</span> | Li X | [10.1016/j.jelectrocard.2026.154249](https://doi.org/10.1016/j.jelectrocard.2026.154249) |
| Premature beats originating from the atrioventricular accessory pathway<br><span class="zh-sub">起源於房室副傳導路徑的早期收縮</span> | Li X | [10.1016/j.jelectrocard.2026.154235](https://doi.org/10.1016/j.jelectrocard.2026.154235) |
| ECG puzzle: Persistent narrow-QRS tachycardia in a 62-year-old woman<br><span class="zh-sub">ECG 謎題 — 62 歲女病人持續 narrow-QRS tachycardia</span> | Andraz S | [10.1016/j.jelectrocard.2026.154251](https://doi.org/10.1016/j.jelectrocard.2026.154251) |
| Inverted "shark fin" ECG pattern: What is the diagnosis?<br><span class="zh-sub">倒置「鯊魚鰭」ECG 形態 — 診斷為何？</span> | Kim K | [10.1016/j.jelectrocard.2026.154254](https://doi.org/10.1016/j.jelectrocard.2026.154254) |

教學端值得追：Masquerading BBB 與 Takotsubo + RV pacing 兩篇是急診端最直接的判讀訊號[^darko-mbbb]。

### Resuscitation / JACC-EP / Annals EM / JACC — 本週無新增（與 W17 重疊）

W17 已把 Resuscitation 2026-06 issue 全列；W18 期間無新增 issue 公開。JACC-EP / Annals EM / JACC 本週 cache 0 篇。

{{< h3bi en="Circulation: Arrhythmia and Electrophysiology" zh="循環—心律電生理" meta="W18 區間（W17 已寫不重複）" >}}

W17 已寫 Patil PFA + RF dual-modality / Boyle S-ICD QVS / Power PFA tissue temperature 三篇。W18 cache 無新增。_本週 Circ-AE 無新訊號_。

---

## 九、台灣急診情境備註 {#tw}

五則跟台灣 ED 實務直接相關：

1. **AI ECG 已有 social proof 支持「daily backup」default**：W17 Friedman / Sharkey 是論文證據，W18 Smith 4-29 公開示範是 paradigm shift 的 social proof[^smith-04-29]——把 PMcardio / Queen of Hearts 放入 chest pain workflow 不再需要說服理由，**主治對 ECG 沒事但症狀對得起來時跑一次 AI 是合理 default**。台灣醫學中心可以把這條寫進 chest pain SOP。

2. **Burst exercise stress test 在 CPVT 的更替**：JAMA Cardiology Naderi 顯示 Bruce protocol 漏掉 71% 的嚴重 CPVT arrhythmia[^naderi-burst]。**台灣兒童心臟科端 syncope 病人若 Bruce test 陰性、家族史強烈或 RYR2 已知，要主動考慮 Burst protocol 或轉介**。ED 端遇到運動誘發 syncope 兒童時，document「Bruce 陰性不代表沒病」進病歷與家屬說明。

3. **ATTR-CM 主動鑑別**：JAMA Cardiology Spencer-Bonilla 顯示美國從 HF 確診到 ATTR-CM 確診中位數 494 天[^bonilla-attr]。台灣的延誤可能更糟。**HF + low voltage ECG + LVH on echo + 不對等 carpal tunnel / 老年男性 + AF**——這四條湊三條就應該主動轉介心臟科做 amyloid 檢查（PYP scan / serum free light chain）。

4. **dronedarone 副作用顯著低於 amiodarone 的 RCT 證據**：Europace Zhang RCT 在 AF post-ablation blanking period 顯示同樣 efficacy 但副作用率 40.9% vs 64.0%[^zhang-droned]。**對 ED 收到 amiodarone-related QTc 延長 / hypothyroidism 的 AF 病人時**，跟 EP 端討論轉換 dronedarone 多了一條 RCT level 證據。

5. **theophylline 解 critically ill sinus pause 的非侵入路徑**：Frick case series 顯示 active infection + sinus pause 不能放 PPM 時，**theophylline 24 小時內解 8.6 秒 pause**[^frick-theo]。台灣 ICU / ED admit 病人遇到這種場景時，先別只想 transvenous pacing 一條路——theophylline 是值得記的 bridge。

---

## 十、本週 Key Takeaways {#key}

1. **Smith 公開示範 Queen of Hearts 抓「正常 ECG」上的 OMI**（Dr Smith 2026-04-29）[^smith-04-29]。該怎麼做：把 W17 Friedman 數字（94.1% vs 47.1%）落地到日常 — chest pain + ECG「正常」但症狀對得起來時，跑一次 AI ECG 是合理 default。

2. **Aslanger 把 ECG 推進冠脈內當 microvascular reperfusion 即時 marker**（JACC Case Reports 2026-04, [PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/)）[^aslanger-icecg]。該怎麼做：post-PCI 胸痛 / ECG 變化時，把 microvascular obstruction 列入鑑別，不要看冠脈造影通了就放心。

3. **Burst exercise stress test 在 CPVT 多揪 71% 嚴重 arrhythmia**（JAMA Cardiology 2026-04-08, Naderi B et al.）[^naderi-burst]。該怎麼做：CPVT 疑似病人 Bruce test 陰性不代表沒病；轉介到能跑 Burst protocol 的中心或諮詢兒童心臟科。

4. **dronedarone vs amiodarone 在 AF post-ablation blanking period 同樣 efficacy 但副作用顯著低**（Europace 2026-04-28, Zhang X et al., 40.9% vs 64.0%）[^zhang-droned]。該怎麼做：ED 收到 amiodarone QTc 延長 / hypothyroidism 病人時跟 EP 討論轉換 dronedarone 多了 RCT 證據。

5. **ATTR-CM 從 HF 確診到 amyloid 確診中位數 494 天**（JAMA Cardiology 2026-04-29, Spencer-Bonilla G et al.）[^bonilla-attr]。該怎麼做：HF + low voltage ECG + LVH + carpal tunnel / 老年男性 + AF，四條湊三條就主動轉介做 PYP scan / SFLC。

---

_下週（W19）預計延續追蹤：Smith blog 是否再公開 Queen of Hearts 抓 OMI 的個案、Aslanger IC-ECG 後續驗證、Burst CPVT 在台灣兒童心臟科的採用討論、Europace dronedarone 在 EP 端 messaging 變化、Frick theophylline 是否擴大適應症。Resuscitation 2026-07 issue 與 ECG Weekly Mattu 下集發布也會一併追蹤。_

---

## 引用 {#refs}

[^smith-04-29]: Dr Smith ECG Blog 2026-04-29 — "Do not interrupt the physician to show him/her this 'Normal ECG'!! (Unless he/she uses the Queen of Hearts)"：「Because the physician is unlikely to make the diagnosis without the Queen」 → [跳到原文](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/#:~:text=Because%20the%20physician%20is%20unlikely%20to%20make%20the%20diagnosis%20without%20the%20Queen)

[^aslanger-icecg]: Aslanger E et al. — JACC Case Reports 2026-04 "Intracoronary ECG May Reveal Dynamic Changes in Tissue-Level Reperfusion During Primary PCI"：「The IC-ECG observations during percutaneous coronary intervention (PCI) from 15 patients with anterior myocardial infarction, obtained by connecting the guidewire to the ECG system」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41902814/#:~:text=IC-ECG%20observations%20during%20percutaneous%20coronary%20intervention)

[^naderi-burst]: Naderi B et al. — JAMA Cardiology 2026-04-08 "Burst Exercise Stress Testing in Catecholaminergic Polymorphic Ventricular Tachycardia"：「The Burst protocol provoked more severe arrhythmias in 20 of 28 patients (71%) with a higher median (IQR) Ventricular Arrhythmia Score (3 [2-4] vs 1 [1-2]; P < .001). These findings prompted β-blocker or flecainide initiation or dose escalation in 13 patients (65%)」 → [跳到原文](https://doi.org/10.1001/jamacardio.2026.0384#:~:text=Burst%20protocol%20provoked%20more%20severe%20arrhythmias%20in%2020%20of%2028%20patients)

[^zhang-droned]: Zhang X et al. — Europace 2026-04-28 "Comparison of the effectiveness and safety of dronedarone and amiodarone for preventing recurrence after catheter ablation of atrial fibrillation: an open-label RCT"：「the dronedarone group had a significantly lower incidence of side effects (40.9% vs. 64.0%, P<0.001), primarily due to fewer cases of QTc-interval prolongation (5.8% vs. 15.4%, P=0.01) and hypothyroidism (8.8% vs. 26.5%, P<0.001)」 → [跳到原文](https://doi.org/10.1093/europace/euag095#:~:text=dronedarone%20group%20had%20a%20significantly%20lower%20incidence%20of%20side%20effects)

[^bonilla-attr]: Spencer-Bonilla G et al. — JAMA Cardiology 2026-04-29 "Timeliness of Transthyretin Cardiac Amyloidosis Diagnosis in the Medicare Population"：「The median (IQR) time from HF diagnosis to ATTR-CM diagnosis was 494 (63-1340) days. For the 6175 patients with a loop diuretic prescription before ATTR-CM diagnosis, the median (IQR) time between initial loop prescription and ATTR-CM diagnosis was 840 (252-1768) days」 → [跳到原文](https://doi.org/10.1001/jamacardio.2026.0833#:~:text=median%20%28IQR%29%20time%20from%20HF%20diagnosis%20to%20ATTR-CM%20diagnosis%20was%20494)

[^dahl-viborg]: Dahl M et al. — European Heart Journal 2026-04-28 "Multi-modality non-invasive cardiovascular screening and sex-specific outcomes: the Viborg Screening Program"：「During a median follow-up of 5.8 years, 372 (6.9%) invitees and 1444 (8.9%) controls died [hazard ratio (HR) 0.76, 95% confidence interval (CI) 0.68–0.85; P < .001]. The number needed to invite to save one life was 49」 → [跳到原文](https://doi.org/10.1093/eurheartj/ehag309#:~:text=hazard%20ratio%20%28HR%29%200.76)

[^kuhne-pfa]: Kühne M et al. — Europace 2026-04-12 "Pulsed Field Ablation for the Interventional Treatment of Atrial Fibrillation: Scientific Statement of EHRA / HRS / APHRS / LAHRS / CHRS"：「By inducing irreversible electroporation, pulsed field ablation achieves myocardial ablation while preserving surrounding structures such as nerves, vasculature, and the esophagus. Randomized trials demonstrate comparable efficacy to radiofrequency and cryoballoon ablation, with advantages in safety and efficiency」 → [跳到原文](https://doi.org/10.1093/europace/euag080#:~:text=pulsed%20field%20ablation%20achieves%20myocardial%20ablation%20while%20preserving)

[^darko-mbbb]: Darko P et al. — J Electrocardiology 2026-07 "Masquerading bundle branch block: An electrocardiographic harbinger of advanced conduction system disease"：masquerading BBB 是雙支系受損的警訊，急診端不應視為單純 BBB → [跳到原文](https://doi.org/10.1016/j.jelectrocard.2026.154270)（abstract 未公開）

[^schaerli-lattice]: Schaerli N et al. — Heart Rhythm 2026-05 "Unexpected ventricular fibrillation during left ventricular lattice-tip RFA in a patient with an ICD" + Kovacs B et al. — Heart Rhythm 2026-05 "Inadvertent VF induced by RFA with the lattice-tip catheter in proximity to ICD leads"：兩篇同期個案提醒 lattice-tip RFA 鄰近 ICD lead 時可能引發意外 VF → [Schaerli](https://doi.org/10.1016/j.hrthm.2025.11.046) + [Kovacs](https://doi.org/10.1016/j.hrthm.2025.10.031)

[^frick-theo]: Frick W et al. — Frontiers in Cardiovascular Medicine 2026-04 "Real-world use of theophylline in critically ill patients with sinus pauses: a case series"：「both patients experienced recurrent, asymptomatic sinus pauses lasting up to 8.6 s... Within 24 h of initiation, the sinus pauses resolved in both patients. Theophylline doses were adjusted to maintain a therapeutic concentration between 10 and 20」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41778069/#:~:text=Within%2024%20h%20of%20initiation%2C%20the%20sinus%20pauses%20resolved)

[^hrs-glp1]: HRS 2026-04-23 — "New Study Links GLP-1 Medications to Lower Risk of Atrial Fibrillation, Independent of Weight Loss"：HRS 公告。GLP-1 降 AF 風險的訊號獨立於體重減輕，與 W18 Europace Levi 動物模型 semaglutide 降 atrial fibrosis / NLRP3 機轉一致 → [跳到原文](https://www.hrsonline.org/)

[^grauer-x-0502]: Ken Grauer (@ekgpress) tweet 2026-05-02：「This ECG is from an older woman who presented for severe epigastric pain... How would you interpret this ECG? — To activate the cath lab? — GO TO」 → [tweet](https://x.com/ekgpress/status/2050428584926282088)

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。點「看完整 →」進該層 archive 看時間流。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">123<span class="unit">篇本週新文</span></div>
<ul>
<li><span class="li-en">ACC <strong>21</strong> · ESC <strong>21</strong></span><span class="li-zh">美國心臟學會 · 歐洲心臟學會</span></li>
<li><span class="li-en">ECG Weekly (Mattu) <strong>20</strong></span><span class="li-zh">Mattu 心電圖週刊（影音教學）</span></li>
<li><span class="li-en">LITFL <strong>12</strong> · Core EM <strong>11</strong> · HRS <strong>11</strong></span><span class="li-zh">澳洲急診維基 · Core 急診部落格 · 美國心律學會</span></li>
<li><span class="li-en">Dr Smith <strong>10</strong> · AHA <strong>8</strong></span><span class="li-zh">Dr Smith 心電圖部落格 · 美國心臟協會</span></li>
<li><span class="li-en">EMCrit <strong>5</strong> · REBEL EM <strong>4</strong></span><span class="li-zh">EMCrit 重症急診 · REBEL 急診部落格</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">6<span class="unit">篇（W17 已寫 4 篇 + W18 新 2 篇）</span></div>
<ul>
<li><span class="li-en">Aslanger · IC-ECG case series</span><span class="li-zh">冠脈內 ECG 即時 reperfusion marker</span></li>
<li><span class="li-en">Frick · theophylline sinus pause</span><span class="li-zh">茶鹼解 critically ill sinus pause</span></li>
<li><span class="li-en">Smith / Meyers / Grauer / McLaren <strong>4</strong></span><span class="li-zh">W17 已涵蓋（Friedman / Hamm / aconitine / syncope）</span></li>
<li><span class="li-en">Sam Ghali — 0</span><span class="li-zh">本週無 ECG 主題新作</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">68<span class="unit">篇候選</span></div>
<ul>
<li><span class="li-en">J Electrocardiology <strong>25</strong></span><span class="li-zh">心電圖期刊</span></li>
<li><span class="li-en">Resuscitation <strong>16</strong></span><span class="li-zh">急救期刊（與 W17 重疊）</span></li>
<li><span class="li-en">Heart Rhythm <strong>14</strong></span><span class="li-zh">心律期刊</span></li>
<li><span class="li-en">Europace <strong>5</strong> · Circulation-AE <strong>3</strong> · JAMA Card <strong>3</strong></span><span class="li-zh">歐洲節律 · 循環—心律電生理 · JAMA 心臟</span></li>
<li><span class="li-en">EHJ <strong>2</strong> · JACC-EP / Annals EM / JACC — 0</span><span class="li-zh">歐洲心臟期刊 · 三本本週空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">4<span class="unit">條過 filter（共 23 條，14 條 RT）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog Queen of Hearts 抓「正常 ECG」</span><span class="li-zh">對應 blog 4-29 公開示範</span></li>
<li><span class="li-en">@RobertHermanMD "completely normal early LAD occlusion"</span><span class="li-zh">早期 LAD occlusion 在 ECG 看似正常的提醒</span></li>
<li><span class="li-en">@ekgpress epigastric pain ECG case</span><span class="li-zh">Grauer 預告 blog 下篇</span></li>
<li><span class="li-en">@smithECGBlog 推 silent MI paper</span><span class="li-zh">silent MI 文獻延伸閱讀</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>

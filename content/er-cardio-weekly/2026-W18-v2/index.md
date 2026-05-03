---
title: "本週三大訊號：Queen of Hearts 抓「正常 ECG」、Aslanger 把 ECG 拉進冠脈內、Burst 取代 Bruce 抓 CPVT"
subtitle: "_Smith 公開示範 AI 抓人類完全沒看出來的 OMI、IC-ECG 即時看 microvascular reperfusion、Burst protocol 多揪 71% CPVT。_"
slug: "2026-W18-v2"
week: "2026-W18"
weekRange: "2026-04-27 — 2026-05-03"
date: 2026-05-03T15:00:00+08:00
readingTime: "10 分鐘"
tags: ["OMI", "電生理", "AI ECG"]
sections:
  - { id: "tldr", num: "0",   title: "摘要" }
  - { id: "omi",  num: "I",   title: "OMI / 急性冠症" }
  - { id: "arr",  num: "II",  title: "節律與電生理" }
  - { id: "aut",  num: "III", title: "追蹤作者新作" }
  - { id: "ref",  num: "IV",  title: "本週文獻索引" }
  - { id: "tw",   num: "V",   title: "台灣急診應用" }
  - { id: "key",  num: "VI",  title: "Key Takeaways" }
  - { id: "refs", num: "VII", title: "引用" }
---

## 摘要 / 本週速讀 {#tldr}

W18 三條主軸，每條一篇代表作：

**一、AI ECG 從研究走到臨床示範**——Stephen Smith 在 [4-29 blog](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/) 公開展示一張被 sign-off 為「正常」的 ECG，告訴讀者「除非主治用 Queen of Hearts，否則不會診斷出 OMI」。這是 W17 Friedman 那篇 sensitivity 94.1% vs 47.1% 的論文落地版本。

**二、ECG 從體表推進冠脈**——Emre Aslanger 在 [JACC Case Reports（PMID 41902814）](https://pubmed.ncbi.nlm.nih.gov/41902814/) 發 15 例 anterior MI 個案，把 angiography guidewire 接到 ECG 系統當 intracoronary lead。stent 部署後 ST 又升回的病人對應 MRI 上的 microvascular obstruction——「冠脈通了 ≠ 心肌 reperfuse」進入有 ECG-based 即時 marker 的階段。

**三、CPVT 診斷流程改寫**——JAMA Cardiology 4-08 [Naderi Burst protocol](https://doi.org/10.1001/jamacardio.2026.0384) 在 28 例已知 CPVT 病人比較 Bruce vs Burst，<mark>Burst 在 71% 病人多揪到嚴重 arrhythmia</mark>，65% 因此調藥。Bruce 陰性不代表沒病。

本週五則晨會帶得過：

- Smith 4-29 公開示範 Queen of Hearts 抓 OMI（[blog](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/)）
- Aslanger IC-ECG 看 microvascular reperfusion（[PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/)）
- Naderi Burst CPVT 多揪 71% 嚴重 arrhythmia（[DOI](https://doi.org/10.1001/jamacardio.2026.0384)）
- Zhang dronedarone vs amiodarone：efficacy 同但副作用 40.9% vs 64.0%（[Europace DOI](https://doi.org/10.1093/europace/euag095)）
- Spencer-Bonilla：HF 到 ATTR-CM 確診中位數 494 天（[JAMA Card DOI](https://doi.org/10.1001/jamacardio.2026.0833)）

---

## 一、OMI / 急性冠症 {#omi}

W17 已把 Magnus Nossen T wave 三部曲、Friedman / Sharkey AI 雙篇、Hamm Annals EM 寫透。W18 新增兩條。

**Dr Smith 2026-04-29 — Queen of Hearts 公開示範**（[blog](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/)）：Smith 直接放一張被臨床端 sign-off 為「正常」的 ECG，標題用「<mark>不要打斷主治看這張正常 ECG，除非他用 Queen of Hearts</mark>」，內文寫「unlikely to make the diagnosis without the Queen」[^smith-04-29]。

對 ED 端的意義：W17 Friedman 那篇「人類 sensitivity 47.1% vs AI 94.1%」現在進入「Smith 用實際個案在 blog 公開示範」階段。**chest pain + ECG「正常」但症狀對得起來時，跑一次 PMcardio / Queen of Hearts 已經是合理 default**。

**Aslanger E et al. — JACC Case Reports 2026-04**（[PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/)）：15 例 anterior MI 病人在 primary PCI 連續做 IC-ECG（guidewire 接 ECG 系統當 intracoronary lead），對照 cardiac MRI[^aslanger-icecg]。

關鍵發現：stent 部署後 ST 持續恢復 vs ST elevation 又冒回——後者對應 MRI 上的 <mark>microvascular obstruction</mark>。

對 ED 端的 takeaway：post-PCI 病人主訴胸痛 / ECG 又變化時，「stent 通了 = 心肌 reperfuse」這個假設要打折，**microvascular reperfusion failure 是獨立病理路徑**，不能光靠冠脈造影看通就放心。

{{< bottomline >}}
W18 OMI 軸線兩條都不是新數據，是 W17 Friedman / Sharkey AI 主軸的「實作示範 + ECG 進冠脈內」延伸。最 actionable：cath lab cancel STEMI activation 時，跑 AI 第二意見已是合理 default。
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W17 已寫過 CAAN-AF / STOPSTORM / Patil PFA + RF / Boyle S-ICD QVS / RESTART / AF + HFpEF。W18 在這條軸線新增 Heart Rhythm 5 月號 ablation 安全訊號 + Europace PFA 國際聲明 + dronedarone RCT。

### 節律 (Arrhythmia)

**Zhang X et al. — Europace 2026-04-28 dronedarone vs amiodarone post-ablation RCT**（[DOI](https://doi.org/10.1093/europace/euag095)）：280 例 AF ablation 病人 1:1 隨機分到 12 週 dronedarone 或 amiodarone，比 blanking period 後 atrial tachyarrhythmia recurrence > 30 秒。recurrence mITT 兩組沒差（23.4% vs 16.9%, P=0.184），**但 dronedarone 副作用率 <mark>40.9% vs 64.0%（P<0.001）</mark>**，QTc 延長 5.8% vs 15.4%、hypothyroidism 8.8% vs 26.5%[^zhang-droned]。EP 端會逐漸把 blanking period default 換掉。

### 傳導 (Conduction)

**Darko P et al. — J Electrocardiology 2026-07 Masquerading BBB**（[DOI](https://doi.org/10.1016/j.jelectrocard.2026.154270)）：肢體導聯像 LBBB、precordial 像 RBBB（或反之），代表雙支系同時受損，是 advanced conduction system disease 的 harbinger[^darko-mbbb]。**syncope / pre-syncope 病人 ECG 出現 masquerading BBB → 不要當單純 BBB，建議直接 admit + EP consult**。

### 通道病 (Channelopathy)

**Naderi B et al. — JAMA Cardiology 2026-04-08 Burst Exercise Stress Test in CPVT**（[DOI](https://doi.org/10.1001/jamacardio.2026.0384)）：28 例已知 CPVT 病人連續做 Bruce + Burst 兩種 protocol，用 Ventricular Arrhythmia Score (0-4) 比較。<mark>**Burst 多揪 71%（20/28）嚴重 arrhythmia**</mark>（VAS 中位 3 vs 1, P<0.001），13 人（65%）因此加 β-blocker / flecainide 或加劑量，無安全事件[^naderi-burst]。**Bruce 陰性不代表沒 CPVT**，台灣兒童心臟科 / 急診 syncope work-up 流程要更新。

### 裝置 (Devices)

**Schaerli + Kovacs — Heart Rhythm 2026-05 lattice-tip RFA 引發 inadvertent VF 兩篇個案**（[Schaerli DOI](https://doi.org/10.1016/j.hrthm.2025.11.046) + [Kovacs DOI](https://doi.org/10.1016/j.hrthm.2025.10.031)）：lattice-tip catheter 在 ICD lead 鄰近做 RFA 時可能意外誘發 VF[^schaerli-lattice]。**ED takeaway**：lattice-tip RFA 後病人主訴 shock / syncope，不要假設 device 失靈，把 procedure-induced VF 列入鑑別。

其他 Heart Rhythm 5 月號技術文：[Tung LAA isolation 新策略](https://doi.org/10.1016/j.hrthm.2025.12.027)（提醒 LAA 已 isolated 病人 OAC 不能停）、[Ip S-ICD + pectus excavatum](https://doi.org/10.1016/j.hrthm.2025.12.033)。

### 消融 (Ablation)

**Kühne M et al. — Europace 2026-04-12 PFA scientific statement of EHRA / HRS / APHRS / LAHRS / CHRS**（[DOI](https://doi.org/10.1093/europace/euag080)）：五大區域學會聯合 endorse PFA — efficacy 與 RF / cryo 相當，但 <mark>safety 與 efficiency 有優勢</mark>[^kuhne-pfa]。PFA 進入 mainstream，但 W17 Patil 的 PFA + 冠脈痙攣個案提醒 reversible coronary spasm 仍要記著。

延伸文獻：[Levi semaglutide vs colchicine 動物模型](https://doi.org/10.1093/europace/euag091)（GLP-1 降 atrial fibrosis、抑 NLRP3，與 W17 HRS GLP-1 降 AF 訊號方向一致）、[Gunawardene VOLT CE Mark](https://doi.org/10.1093/europace/euag094)、[Vardas miR-10b-5p biomarker AUC 0.96](https://doi.org/10.1093/europace/euag097)。

{{< bottomline >}}
本章最 actionable：Burst 取代 Bruce 在 CPVT 多揪 71%[^naderi-burst]、dronedarone 副作用顯著低於 amiodarone[^zhang-droned]。Masquerading BBB 不能當單純 BBB[^darko-mbbb]。Lattice-tip RFA 鄰近 ICD lead 有 procedure-induced VF 風險[^schaerli-lattice]。PFA 進入主流但 reversible coronary spasm 仍要記[^kuhne-pfa]。
{{< /bottomline >}}

---

## 三、追蹤作者新作 {#aut}

W18 PubMed 7 位指定作者中，**只有 Aslanger 與 Frick 有新 first/co-author 文獻**。Smith / Meyers / Grauer / McLaren / Ghali 本週無新發表。

**Aslanger** — IC-ECG case series（[PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/)）：見「一、OMI」。

**Frick W et al. — Frontiers in Cardiovascular Medicine 2026-04 theophylline for sinus pause in critically ill**（[PMID 41778069](https://pubmed.ncbi.nlm.nih.gov/41778069/)）：兩例 critically ill 病人因 active infection 不適合 PPM 植入，用 theophylline 處理 asymptomatic sinus pauses（最長 8.6 秒）。<mark>**24 小時內 pause 解掉**</mark>，劑量維持 therapeutic concentration 10-20[^frick-theo]。**ED / ICU 遇到 active infection + sinus pause 不能放 PPM 的場景，theophylline 是值得記的非侵入 bridge**——台灣 ED 端通常把 transvenous pacing 當唯一選項。

**Smith blog 端訊號**：[4-29 Queen of Hearts 公開示範](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/) 雖非 PubMed 文獻，但 Smith 從 AI-skeptic 到公開示範本身是 paradigm shift 訊號。

**Grauer X 端**：[5-2 推一張 epigastric pain ECG case](https://x.com/ekgpress/status/2050428584926282088)，預告 blog 下篇案例[^grauer-x-0502]。下週可追 ECG Pearls & Cases 後續。

---

## 四、本週文獻索引 {#ref}

純表格，按期刊分組。本章不再敘事，深度討論已在前三章。

| 期刊 | 日期 | 第一作者 | 標題 | DOI / PMID |
|---|---|---|---|---|
| EHJ | 2026-04-28 | Dahl M | Multi-modality screening — Viborg Program（5 年全因死亡 HR 0.76, NNI 49） | [10.1093/eurheartj/ehag309](https://doi.org/10.1093/eurheartj/ehag309) |
| JAMA Cardiology | 2026-04-29 | Spencer-Bonilla G | ATTR-CM 確診中位延誤 494 天 | [10.1001/jamacardio.2026.0833](https://doi.org/10.1001/jamacardio.2026.0833) |
| JAMA Cardiology | 2026-04-08 | Naderi B | Burst CPVT 多揪 71% | [10.1001/jamacardio.2026.0384](https://doi.org/10.1001/jamacardio.2026.0384) |
| JAMA Cardiology | 2026-04-08 | Floyd B | RBM20 truncating variants 與 cardiomyopathy | [10.1001/jamacardio.2026.0401](https://doi.org/10.1001/jamacardio.2026.0401) |
| Europace | 2026-04-28 | Zhang X | dronedarone vs amiodarone post-ablation RCT | [10.1093/europace/euag095](https://doi.org/10.1093/europace/euag095) |
| Europace | 2026-04-28 | Vardas E | miR-10b-5p AF recurrence biomarker (AUC 0.96) | [10.1093/europace/euag097](https://doi.org/10.1093/europace/euag097) |
| Europace | 2026-04-24 | Gunawardene M | VOLT CE Mark balloon-in-basket PFA | [10.1093/europace/euag094](https://doi.org/10.1093/europace/euag094) |
| Europace | 2026-04-21 | Levi O | semaglutide vs colchicine atrial remodeling 動物模型 | [10.1093/europace/euag091](https://doi.org/10.1093/europace/euag091) |
| Europace | 2026-04-12 | Kühne M | PFA 五大學會聯合 scientific statement | [10.1093/europace/euag080](https://doi.org/10.1093/europace/euag080) |
| Heart Rhythm | 2026-05 | Schaerli N | Lattice-tip RFA 引發 inadvertent VF（ICD 病人） | [10.1016/j.hrthm.2025.11.046](https://doi.org/10.1016/j.hrthm.2025.11.046) |
| Heart Rhythm | 2026-05 | Kovacs B | Inadvertent VF — lattice-tip + ICD lead 鄰近 | [10.1016/j.hrthm.2025.10.031](https://doi.org/10.1016/j.hrthm.2025.10.031) |
| Heart Rhythm | 2026-05 | Tung P | LAA isolation persistent AF 重做新策略 | [10.1016/j.hrthm.2025.12.027](https://doi.org/10.1016/j.hrthm.2025.12.027) |
| Heart Rhythm | 2026-05 | Ip J | S-ICD + pectus excavatum 植入 technique | [10.1016/j.hrthm.2025.12.033](https://doi.org/10.1016/j.hrthm.2025.12.033) |
| Heart Rhythm | 2026-05 | Narayanan K | STEMI 期間 VF — editorial | [10.1016/j.hrthm.2025.07.059](https://doi.org/10.1016/j.hrthm.2025.07.059) |
| J Electrocardiology | 2026-07 | Darko P | Masquerading BBB harbinger | [10.1016/j.jelectrocard.2026.154270](https://doi.org/10.1016/j.jelectrocard.2026.154270) |
| J Electrocardiology | 2026-07 | Yao S | Takotsubo + RV pacing ECG 特徵 | [10.1016/j.jelectrocard.2026.154246](https://doi.org/10.1016/j.jelectrocard.2026.154246) |
| Frontiers in CVM | 2026-04 | Frick W | theophylline for sinus pause | [PMID 41778069](https://pubmed.ncbi.nlm.nih.gov/41778069/) |
| JACC Case Reports | 2026-04 | Aslanger E | IC-ECG primary PCI reperfusion marker | [PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/) |

**本週無新訊號**：Resuscitation（與 W17 重疊）、JACC-EP、Annals EM、JACC、Circ-AE、LITFL、EMCrit、REBEL EM、First10EM、ALiEM、Core EM、ACC、AHA、ESC（後者多為 4-23 / 4-12 abstract，與 ED 直接相關度低）。

---

## 五、台灣急診應用 {#tw}

五則 actionable，每則對應上面章節：

1. **AI ECG 進入 daily backup default**（章一）—— chest pain SOP 寫入「ECG 看似正常但症狀對得起來時跑一次 PMcardio / Queen of Hearts」。

2. **Burst protocol 在 CPVT**（章二通道病）—— 兒童 / 青少年運動誘發 syncope 病人 Bruce 陰性 + 家族史強 / RYR2 已知，主動轉介能跑 Burst protocol 的中心。

3. **ATTR-CM 主動鑑別**（章四 Spencer-Bonilla）—— HF + low voltage ECG + LVH on echo + carpal tunnel / 老年男性 + AF，**四條湊三條主動轉介 PYP scan / SFLC**，美國中位延誤 494 天，台灣可能更糟。

4. **dronedarone 取代 amiodarone**（章二節律）—— ED 收 amiodarone-related QTc 延長 / hypothyroidism 病人時，跟 EP 討論換 dronedarone 多了 RCT 證據。

5. **theophylline 解 sinus pause**（章三 Frick）—— active infection + sinus pause 不能放 PPM 時，theophylline 24 小時內可解 8.6 秒 pause，是值得記的 bridge。

---

## 六、Key Takeaways {#key}

| # | 訊號 | 連結 | 該怎麼做 |
|---|---|---|---|
| 1 | Smith 公開示範 Queen of Hearts 抓「正常 ECG」上的 OMI | [Dr Smith 4-29](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/) | chest pain + ECG「正常」但症狀對得起來時跑 AI ECG default |
| 2 | Aslanger IC-ECG 看 microvascular reperfusion 即時 marker | [PMID 41902814](https://pubmed.ncbi.nlm.nih.gov/41902814/) | post-PCI 胸痛 / ECG 變化把 microvascular obstruction 列入鑑別 |
| 3 | Burst 取代 Bruce 在 CPVT 多揪 71% 嚴重 arrhythmia | [DOI](https://doi.org/10.1001/jamacardio.2026.0384) | Bruce 陰性不代表沒病，轉介能跑 Burst 的中心 |
| 4 | dronedarone vs amiodarone：efficacy 同但副作用 40.9% vs 64.0% | [Europace DOI](https://doi.org/10.1093/europace/euag095) | amiodarone 副作用病人跟 EP 討論換 dronedarone |
| 5 | ATTR-CM 從 HF 確診到 amyloid 中位數 494 天 | [JAMA Card DOI](https://doi.org/10.1001/jamacardio.2026.0833) | HF + low voltage + LVH + carpal tunnel 三條湊轉介 PYP scan |

---

_下週（W19）追蹤：Smith 是否再公開 Queen of Hearts 個案、Aslanger IC-ECG 後續驗證、Burst CPVT 在台灣兒童心臟科採用討論、Frick theophylline 是否擴大適應症、Resuscitation 2026-07 issue + ECG Weekly 下集。_

---

## 引用 {#refs}

[^smith-04-29]: Dr Smith ECG Blog 2026-04-29 — "Do not interrupt the physician to show him/her this 'Normal ECG'!! (Unless he/she uses the Queen of Hearts)"：「Because the physician is unlikely to make the diagnosis without the Queen」 → [跳到原文](https://drsmithsecgblog.com/do-not-interrupt-the-physician-to-show-him-her-this-normal-ecg-unless-he-she-uses-the-queen-of-hearts/#:~:text=Because%20the%20physician%20is%20unlikely%20to%20make%20the%20diagnosis%20without%20the%20Queen)

[^aslanger-icecg]: Aslanger E et al. — JACC Case Reports 2026-04 "Intracoronary ECG May Reveal Dynamic Changes in Tissue-Level Reperfusion During Primary PCI"：「The IC-ECG observations during percutaneous coronary intervention (PCI) from 15 patients with anterior myocardial infarction, obtained by connecting the guidewire to the ECG system」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41902814/#:~:text=IC-ECG%20observations%20during%20percutaneous%20coronary%20intervention)

[^naderi-burst]: Naderi B et al. — JAMA Cardiology 2026-04-08 "Burst Exercise Stress Testing in CPVT"：「The Burst protocol provoked more severe arrhythmias in 20 of 28 patients (71%) with a higher median (IQR) Ventricular Arrhythmia Score (3 [2-4] vs 1 [1-2]; P < .001). These findings prompted β-blocker or flecainide initiation or dose escalation in 13 patients (65%)」 → [跳到原文](https://doi.org/10.1001/jamacardio.2026.0384#:~:text=Burst%20protocol%20provoked%20more%20severe%20arrhythmias%20in%2020%20of%2028%20patients)

[^zhang-droned]: Zhang X et al. — Europace 2026-04-28 "Dronedarone vs amiodarone post-ablation RCT"：「the dronedarone group had a significantly lower incidence of side effects (40.9% vs. 64.0%, P<0.001), primarily due to fewer cases of QTc-interval prolongation (5.8% vs. 15.4%, P=0.01) and hypothyroidism (8.8% vs. 26.5%, P<0.001)」 → [跳到原文](https://doi.org/10.1093/europace/euag095#:~:text=dronedarone%20group%20had%20a%20significantly%20lower%20incidence%20of%20side%20effects)

[^kuhne-pfa]: Kühne M et al. — Europace 2026-04-12 "PFA Scientific Statement of EHRA / HRS / APHRS / LAHRS / CHRS"：「By inducing irreversible electroporation, pulsed field ablation achieves myocardial ablation while preserving surrounding structures... Randomized trials demonstrate comparable efficacy to radiofrequency and cryoballoon ablation, with advantages in safety and efficiency」 → [跳到原文](https://doi.org/10.1093/europace/euag080#:~:text=pulsed%20field%20ablation%20achieves%20myocardial%20ablation%20while%20preserving)

[^darko-mbbb]: Darko P et al. — J Electrocardiology 2026-07 "Masquerading BBB: ECG harbinger of advanced conduction system disease"：masquerading BBB 是雙支系受損的警訊，急診端不應視為單純 BBB → [跳到原文](https://doi.org/10.1016/j.jelectrocard.2026.154270)

[^schaerli-lattice]: Schaerli N et al. + Kovacs B et al. — Heart Rhythm 2026-05 lattice-tip RFA 鄰近 ICD lead 引發意外 VF 的兩篇同期個案 → [Schaerli](https://doi.org/10.1016/j.hrthm.2025.11.046) + [Kovacs](https://doi.org/10.1016/j.hrthm.2025.10.031)

[^frick-theo]: Frick W et al. — Frontiers in Cardiovascular Medicine 2026-04 "theophylline for sinus pause in critically ill"：「both patients experienced recurrent, asymptomatic sinus pauses lasting up to 8.6 s... Within 24 h of initiation, the sinus pauses resolved in both patients. Theophylline doses were adjusted to maintain a therapeutic concentration between 10 and 20」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41778069/#:~:text=Within%2024%20h%20of%20initiation%2C%20the%20sinus%20pauses%20resolved)

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
<li><span class="li-en">ECG Weekly <strong>20</strong></span><span class="li-zh">Mattu 心電圖週刊</span></li>
<li><span class="li-en">LITFL <strong>12</strong> · Core EM <strong>11</strong> · HRS <strong>11</strong></span><span class="li-zh">澳洲急診維基 · Core 急診 · 美國心律學會</span></li>
<li><span class="li-en">Dr Smith <strong>10</strong> · AHA <strong>8</strong></span><span class="li-zh">Dr Smith ECG · 美國心臟協會</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">2<span class="unit">篇 W18 新發表（共 7 位作者）</span></div>
<ul>
<li><span class="li-en">Aslanger · IC-ECG case series</span><span class="li-zh">冠脈內 ECG 即時 reperfusion marker</span></li>
<li><span class="li-en">Frick · theophylline sinus pause</span><span class="li-zh">茶鹼解 critically ill sinus pause</span></li>
<li><span class="li-en">Smith / Meyers / Grauer / McLaren / Ghali — 0</span><span class="li-zh">本週無新發表</span></li>
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
<li><span class="li-en">Europace <strong>5</strong> · JAMA Card <strong>3</strong> · EHJ <strong>2</strong></span><span class="li-zh">歐洲節律 · JAMA 心臟 · 歐洲心臟期刊</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">4<span class="unit">條過 filter（共 23 條，14 條 RT）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog Queen of Hearts 抓「正常 ECG」</span><span class="li-zh">對應 blog 4-29 公開示範</span></li>
<li><span class="li-en">@RobertHermanMD "completely normal early LAD occlusion"</span><span class="li-zh">早期 LAD occlusion 看似正常的提醒</span></li>
<li><span class="li-en">@ekgpress epigastric pain ECG case</span><span class="li-zh">Grauer 預告 blog 下篇</span></li>
<li><span class="li-en">@smithECGBlog 推 silent MI paper</span><span class="li-zh">silent MI 文獻延伸</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>

---
title: "HRS 2026 大會週：AF ablation 後可不可以停抗凝？／Post-ROSC 跑出新 BBB 你會跟著誤判嗎／Smith 從 altered mental status 拉出 evolving OMI"
subtitle: "_The Lead Podcast Ep 145 同時搬出兩條 AF ablation 術後 late-breaker；Mattu 一張 post-arrest 新 BBB、Smith 一張 altered MS，把 ED 端最常誤讀的兩條場景同週擺上桌。_"
slug: "2026-W19"
week: "2026-W19"
weekRange: "2026-05-04 — 2026-05-10"
date: 2026-05-10T10:00:08+08:00
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

W19 是 Heart Rhythm Society（美國心律學會）2026 年會週，整週訊號集中在「AF ablation 術後兩個 long-pending 問題」加上「兩張 ED 端會直接收到的 ECG 教案」。W18 已寫過 Queen of Hearts 公開示範、Aslanger IC-ECG、CPVT Burst protocol、dronedarone vs amiodarone 等大菜，本週量縮但訊號集中，**寫稿策略改成深挖三條重點**，不再廣撒。

**第一，HRS The Lead Podcast Episode 145（5-07）同時搬出兩條 Heart Rhythm 2026 late-breaker，都打在 AF ablation 術後決策的痛點上。** 一是「catheter ablation 後長期無復發的病人能不能停 anticoagulation」；二是「ablation 對長期認知功能的影響」[^hrs-lead-145]。**<mark>這兩個問題從 CABANA 時代就在問，2026 終於有 prospective 數據端上會議桌</mark>**。對台灣 ED 的意義：未來收到 AF 病人「我已經 ablation 兩年沒復發、是不是可以停 Eliquis」的問句會越來越多，現在還沒有 guideline 級答案，但**指引方向已逐漸鬆動**。

**第二，Amal Mattu ECG Weekly 5-04 放一張 post-ROSC 新出 bifascicular block 的 ECG**——72 歲男性 OHCA、bystander CPR、non-shockable rhythm、ROSC after 1 dose epi 後拍的 12-lead 顯示 RBBB+LAFB（電腦判讀為 bifascicular block + old septal infarct），<mark>**但 prior ECG 沒有同樣 pattern**</mark>[^mattu-05-04]。Mattu 的核心提問是：在新出 RBBB 的 baseline 下，**V1/V2 應該預期什麼樣的 ST pattern？哪一種 deviation 暗示 OMI？** 這正是 Bear 在台灣急診端最會被推來判讀的場景。

**第三，Stephen Smith 5-04 放一張「acute altered mental status 為主訴」的病人 ECG**——EMS 接到「life alert」呼叫，到場發現意識改變，ECG 上有 ST elevation、hyperacute T waves、又有 evolving T-wave inversion[^smith-05-04]。這個 case 提醒**altered mental status 可以是 OMI 的唯一臨床表現**，尤其老年人沒典型胸痛。本週 OMI 軸線從 W18 Queen of Hearts 的「ECG 看似正常」延伸到「主訴看似神內」，連續兩週都在打人類判讀的 anchoring bias。

本週四則值得在晨會帶過：

- HRS The Lead Ep 145：AF ablation 術後停 AC + cognitive function 兩條 HR2026 late-breaker（2026-05-07）
- ECG Weekly Mattu：post-ROSC 新出 RBBB+LAFB，是 bifascicular block 還是 unmask OMI？（2026-05-04）
- Dr Smith：altered mental status + ST elevation + HATW + evolving T inversion = OMI（2026-05-04）
- ESC Heart Rhythm 子刊一連 4 篇：arrhythmia patient profile / sex differences / wearable ECG（2026-04-23 ~ 05-03）

---

## 一、OMI / 急性冠症 {#omi}

W18 寫過 Smith 4-29 的 Queen of Hearts 公開示範與 Aslanger IC-ECG，本週 OMI 軸線只有一條主訊號，但深度夠寫。

**Dr Smith 2026-05-04 — "Acute altered mental status, ST Elevation, Hyperacute T-waves, and evolving T-wave inversion. OMI?"**：EMS 接到「life alert」（老人緊急呼叫器）的派遣到一位老年人家中，發現病人**意識改變**，沒有典型胸痛主訴。第一張 ECG 上同時有 ST elevation、hyperacute T waves（HATW），series 追下去出現 evolving T-wave inversion[^smith-05-04]。

這個 case 對急診端的意義不在「ECG 怎麼判」——以 Smith blog 的水準，ST elevation + HATW + evolving TWI 三件事擺一起就是 OMI 跑不掉。**真正的 takeaway 是 chief complaint**：當 EMS 派遣 reason 是「life alert」、「意識不清」、「跌倒」、「無力」、「冒冷汗」這類 non-cardiac 主訴時，<mark>**第一張 ECG 不能省，更不能因為「沒胸痛」就 sign-off 為「沒事」**</mark>。

連著 W18 Smith 4-29「不要打斷主治看這張正常 ECG」與 W19 這張「altered MS = OMI」，兩篇都在打同一個 anchoring bias：**人類在「主訴不像 ACS」或「ECG 看似 normal」時會不知不覺把 OMI 排除**。Friedman 那篇 sensitivity 47.1% vs AI 94.1% 的數字[^friedman-omi]，背後就是這個 bias 在作怪——當主訴 / ECG 不對勁時跑一次 PMcardio Queen of Hearts，已經是 W19 該被列入 default workflow 的動作。

對台灣 ED 的延伸意義：救護車送來「在家昏倒」、「家屬說怪怪的」、長照機構送的「這兩天比較沒精神」這類老人，<mark>**ECG 是必跑、且要由你親自看，不能只看電腦判讀的「Normal sinus rhythm」就 sign-off**</mark>。

{{< bottomline >}}
W19 OMI 軸線只有一條訊號，但跟 W18 連起來看就是清楚的兩週主軸：**人類判讀 OMI 的最大盲點不是 ECG 技術問題，是「主訴／ECG 看似正常」就放手的 cognitive bias**[^smith-05-04][^friedman-omi]。當主訴怪怪的、ECG 看似乾淨——跑 AI 第二意見、跑 serial ECG、做 troponin trend，三件事一件都不能少。
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W18 寫過 dronedarone vs amiodarone RCT、miR-10b biomarker、Heart Rhythm 5 月號 ablation 安全 / LAA 策略。W19 因應 Heart Rhythm Society 2026 大會週，訊號集中在 HRS 官方 podcast 與 ESC 子刊預告。

### 節律 / Ablation

**HRS The Lead Podcast Episode 145（2026-05-07）"Heart Rhythm 2026 Late Breaker Coverage: Cognitive Function and Anticoagulation Discontinuation in Patients Without Long-Term Recurrence After Catheter Ablation for Atrial Fibrillation"**[^hrs-lead-145]：HRS 官方 podcast 把 2026 大會兩篇 late-breaker 同集 cover，**這是少見的 packaging**——通常 The Lead 一集只 cover 一篇 trial，本集刻意兩篇一起播，代表 society 認為這兩個議題要被綁在一起看。

兩篇都在問同一個 high-level 問題：**「AF ablation 兩三年後病人沒再復發，他到底還是不是 AF 病人？」** 如果答案是「不是」，那

(a) anticoagulation 可以停（這是大家最想要的答案，但過去十年沒人敢給 prospective evidence）
(b) ablation 可能保住認知功能（dementia 與 silent stroke 的長期 surrogate）

對急診端的意義：未來 ED 收到 AF 病人主訴「我兩年前 ablation 後沒再發作、最近 GP 跟我說可以停 Eliquis、但今天有點心悸」這類混合場景會越來越多。<mark>**現階段 ED 端的 default 仍是「沒有正式停藥的 indication 就照原處方續開」**</mark>，但要知道 EP 端在 2026 之後會逐步把這個議題寫進共識聲明，幾年內 guideline 可能會鬆動。

**HRS 4-26 同週公告補充訊號**（W18 已部分涵蓋，本週為延伸）：Multicenter Study — Ultra-Low Temperature Ablation 對 VT 高度有效；GLP-1 RA 降 AF-related events 在 obesity 病人——這條與 W18 Europace Levi 動物模型 semaglutide 降 atrial fibrosis / NLRP3 機轉一致。

### 通道病 / 高階電生理

**ESC Heart Rhythm 子刊 2026-05-03 — "Discovering the Arrhythmia Patient profile: new diagnostic features presentation at M&PD Annual meeting 2025"**[^esc-arr-profile]：ESC EHRA 推「arrhythmia patient profile」概念——把 AF / VT / channelopathy 病人從「一張 ECG diagnosis」改成「多軸特徵 phenotype」。

對急診端不直接 actionable，但要知道**未來 EP 端 referral 會越來越要求 ED 端提供「這個病人的 phenotype 軸線是什麼」**——而不是只回報「AF with RVR, rate-controlled with diltiazem」一句話。實務上意味著 ED disposition note 寫法逐步改變。

### 裝置 / Pacing

W19 Heart Rhythm 5 月號補進 ESC 子刊 4 月一波預告文章——LBBA pacing 的 ECG 判讀、wearable ECG 與 Holter 在 long QT 診斷的角色、不同性別與運動族群的 ECG features。**這些對 ED 不直接 actionable**，但要記得未來收到 LBBA-paced 病人主訴時，paced QRS 不會像傳統 RV pacing 那麼寬，**判讀邏輯不能套舊版 RV pacing 的鑑別 framework**。

{{< bottomline >}}
W19 節律端最大的訊號是 **HRS 把「AF ablation 後停 AC」與「ablation 對 cognitive function 的影響」兩個十年議題，同集 podcast 帶過[^hrs-lead-145]**。對 ED 端：現階段不改處置，但要對病人的「我已經 ablation 過了」這條 history 開始多問一句——上次 ablation 多久、有無復發、現在 AC 是 indication 維持還是 ad hoc 在用。
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W18 已重點寫過 Friedman / Sharkey 兩篇，本週 AI ECG 軸線新增訊號集中在 ESC 子刊。

**ESC 2026-04-23 — "Comparative performance of wearable ECG devices for heart rhythm monitoring in endurance athletes"** 加上 **"Application of AI-ECG in cardiac screening: a feasibility study"**：兩篇都是 EHRA 子刊預告。第一篇比較不同 wearable 在耐力運動員身上的 rhythm monitoring 準確度；第二篇把 AI-ECG 跑進大規模 screening 的 feasibility 端。

對急診端意義有限（screening 是 primary care 議題），但要知道**未來收到「我 Apple Watch 抓到心律不正常」這種主訴的病人會越來越多，不同品牌 wearable 的 false positive 與 sensitivity 不一樣**。Wearable false positive 仍是 ED 工作量的隱性負擔——當下次有人拿 wearable trace 來找你時，<mark>**仍要回到 12-lead ECG 為 standard，不能因為 wearable 看起來「沒事」就放回家**</mark>。

W19 AI ECG 端最值得記的延伸：W17 Friedman 那篇「47.1% vs 94.1%」的數字加上 W18 Smith 4-29 的公開示範，再加本週 Smith 5-04 的 altered MS case——**三條合起來就是「人類在 ECG 看似 normal 或主訴非典型時會漏 OMI」的連續證據**。在台灣，PMcardio 已可由臨床端在 iPhone 跑出 Queen of Hearts 判讀，**沒理由不在 cath lab 拒絕 activation 時跑一次第二意見**。

---

## 四、Resus / 急救 {#res}

W18 已寫過 Heart Rhythm RESTART 與 Frick theophylline 案例，本週 Resus 端的主菜是 Mattu 一張 post-ROSC ECG。

**ECG Weekly (Amal Mattu) 2026-05-04 — "A Post-Arrest ECG With a Dangerous New Bundle Branch Block"**[^mattu-05-04]：72 歲男性、witnessed OHCA、bystander CPR 立刻啟動、EMS 抵達時 non-shockable rhythm、ROSC 在 single dose epinephrine 後達成。病人到 ED 是 intubated + unresponsive，過去史 CAD / HTN / HLD。

Post-ROSC ECG 電腦判讀為「bifascicular block + old septal infarct」。**Prior ECG 沒有同樣 conduction pattern**——換句話說，**這是一張新出的 bifascicular block**[^mattu-05-04]。

Mattu 的提問三件事：

1. **新出 RBBB 的 baseline 下，V1/V2 應該預期什麼 ST pattern？**——RBBB 因為 right ventricle 的去極化變慢，V1/V2 預期是 rsR' + 些微 ST depression + T inversion（appropriate discordance）。如果 V1/V2 ST 反而是 elevation（concordant 方向）或 ST depression 比預期深、T 比預期更尖——就要懷疑 acute ischemia 疊加在 RBBB 上。

2. **修改版 Sgarbossa 在 RBBB 也適用嗎？**——傳統 Sgarbossa 是寫給 LBBB / paced rhythm 的，但**concordant ST elevation ≥ 1 mm 在 RBBB 也是 OMI 的 high specific finding**——只是 sensitivity 較低。Smith 與 Meyers 多次在 blog 上強調 RBBB + LAFB 出現任何 anterior 導聯 concordant ST elevation 都要當 OMI 處理。

3. **disposition：這位病人需不需要直接 cath lab？**——Witnessed OHCA + non-shockable rhythm + 新出 bifascicular block 這個組合，<mark>**新出 BBB 在 cardiac arrest cause workup 中通常等同 STEMI-equivalent**</mark>，加上 CAD 過去史，**多數中心會直接 activate cath lab**——尤其當 ST patterns 不符 RBBB+LAFB 預期時。

對台灣 ED 的意義是：post-ROSC 病人收到時要做的事不只是 hypothermia / TTM 與器官支持——<mark>**第一張 post-ROSC ECG 跟 prior ECG 比，新出的 conduction abnormality 是 cath lab activation 的 hard trigger**</mark>。台灣很多 OHCA 病人沒 prior ECG 可比，這時就要對「new BBB + non-shockable rhythm」這個組合保持低 threshold——和心內科討論 immediate vs delayed angiography 的決策。

{{< bottomline >}}
Mattu 5-04 這張 ECG 把 ED 端 post-ROSC 判讀的兩個 high-yield rule 一次帶到桌上：**(1) 新出 BBB 要跟 prior ECG 比；(2) RBBB+LAFB baseline 下出現 V1/V2 concordant ST elevation 或不符預期的 ST pattern 都要當 OMI 處理[^mattu-05-04]**。實務 takeaway：post-ROSC 病人的 ECG 不只是「看有沒有 STEMI criteria」，是「有沒有對 baseline 的新 deviation」。
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

W19 教學案例聚焦兩條，都已在前面章節展開，這裡補延伸思考。

**案例一：Smith 5-04「life alert 派遣的 altered MS 病人」**
- 教學點是 chief complaint anchoring：當 EMS 派遣 reason 不是「胸痛」時，ED triage 與初步 workup 的 ECG 與 troponin 要不要做？
- **這位病人的 ECG 同時有 ST elevation、HATW、evolving TWI——三件事擺在一起時，等同 OMI 已被 ECG 在 phase III（reperfusion）抓到了**。
- 臨床上的 takeaway：**altered MS / 跌倒 / 機構送來的非典型主訴，老人 ECG 是必跑項目**——不是 routine screening，是因為這族群 OMI 表現本來就常常不像 textbook。

**案例二：Mattu 5-04「post-ROSC 新出 RBBB+LAFB」**
- 教學點是 pre/post comparison：**post-ROSC ECG 不能單張看，要拿 prior baseline 比**。
- **新出 bifascicular block 在 cardiac arrest cause workup 中是 cath lab indication 的 hard trigger**——比 new LBBB 更要警覺，因為 RBBB 加 LAFB 暗示 LAD proximal 或 left main 的病灶位置。
- **實務意義**：台灣 ED 接到從院外送來的 OHCA 病人，第一時間就要請家屬或機構提供 prior ECG（紙本或電子）——這比想像中常常拿得到，影響 cath lab decision 的權重很大。

兩個 case 串起來看，本週主軸是：**ECG 判讀不能脫離 chief complaint 與 prior baseline——前者決定要不要做、後者決定怎麼解讀新變化**。

---

## 六、追蹤作者本週新作 {#aut}

- **Stephen W. Smith / Pendell Meyers**：blog 5-04 altered MS + ST elevation + HATW case[^smith-05-04]；PubMed 端本週無新作（W17-W18 Friedman / Sharkey 已涵蓋）
- **Amal Mattu**：ECG Weekly 5-04 post-arrest 新 BBB case[^mattu-05-04]
- **Magnus Nossen**：本週無新作（W18 已寫 4-27 case）
- **Ken Grauer**：本週無新 PubMed 作品；blog 端無更新（W17 aconitine 案例已收）
- **Emre Aslanger**：本週無新作（W18 已收 IC-ECG case series）
- **Robert Herman**：本週無新作（4-15 reciprocally inverted HATW 已涵蓋）
- **Sam Ghali**：本週無 ECG 主題新作

---

## 七、媒體動態 {#med}

**HRS The Lead Podcast Episode 145（2026-05-07）**：Heart Rhythm 2026 late-breaker 雙議題——AF ablation 後停 AC + cognitive function。**這是 HRS 大會週的官方 podcast 主菜**，建議直接聽（約 25-30 分鐘）[^hrs-lead-145]。

**ESC EHRA 子刊 2026-04-12 ~ 05-03 一波預告**：包含 LBBA pacing ECG 判讀、wearable ECG vs Holter、long QT、運動員 ECG 性別差異、AI-ECG screening feasibility 等十多篇 abstract——這些是 EHRA 大會 abstract 的網路釋出版，正式論文預期 5-6 月後上線。

**HRS 4-26 ~ 4-28 公告（W18 已部分涵蓋）**：Ultra-Low Temperature Ablation 對 VT 有效性多中心研究、GLP-1 RA 降 AF events——後者與 W18 Europace Levi semaglutide 動物模型機轉一致。

---

## 八、文獻速報 {#ref}

W19 是 Heart Rhythm 大會週 + 月底 issue 之間的「文獻沙漠週」，**主要期刊本週新文 turnover 較低**。CrossRef cache 顯示 J Electrocardiology / Resuscitation / Heart Rhythm / Europace 多為 W18 之前已收的 5 月號內容延伸。

值得在下週繼續追的方向：

- **Heart Rhythm 2026 大會 late-breaker 正式 paper 釋出**——估計 5-6 月陸續上 Heart Rhythm 線上首發
- **EHRA 2026 大會 abstract 轉正式論文**——ESC 子刊 4-12 一波預告，等正式發表
- **dronedarone vs amiodarone（W18 Europace Zhang）**的 editorial 與 sub-analysis

---

## 九、台灣急診情境備註 {#tw}

W19 三條訊號在台灣 ED 端的落地對照：

**第一，post-ROSC ECG 的 prior comparison 要當 routine 動作。** 台灣 OHCA 病人到院後，急救團隊忙於 hypothermia / TTM / 器官支持時，ECG 拿到的第一張常被當成「先存起來、之後回頭看」。Mattu 這個 case 提醒：**第一張 post-ROSC ECG 跟 prior baseline 比、看有沒有新出 BBB 或 conduction 變化，是 cath lab activation 的 hard trigger**[^mattu-05-04]。實務做法：到院後立刻請家屬或機構傳真 / 拍照 prior ECG，台灣健保 IC 卡可調近期就醫紀錄但 ECG 影像不在內，**家屬手機照片是最快來源**。

**第二，老人 altered MS 一定跑 ECG。** Smith 5-04 case 的 chief complaint 是「life alert」——對應台灣場景就是長照機構送來、家屬說「這兩天不對勁」、救護車載來「跌倒、無力」的老人[^smith-05-04]。<mark>**這族群 OMI 表現常常完全不像 textbook**</mark>，ECG 必跑且要親自看；不要只看電腦判讀的「Normal sinus rhythm」就放手。

**第三，AF ablation 後停 AC 的問句要做好被問的準備。** HRS Lead Ep 145 的兩條 late-breaker 還沒上 guideline[^hrs-lead-145]，但**台灣的 ablation 個案數逐年成長**，下次有人問「我兩年前做完 ablation 沒再發作、可不可以停 Eliquis」時，<mark>**ED 端的 default 仍是『照原處方繼續，建議回診心臟科討論』**</mark>——但要知道 2026 之後這個議題會被陸續問到。

---

## 十、本週 Key Takeaways {#key}

1. **HRS The Lead Ep 145**：AF ablation 術後停 AC + cognitive function 兩條 late-breaker 同集 cover，是 HRS 2026 大會週的核心訊號[^hrs-lead-145]
2. **Mattu 5-04 post-ROSC 新 BBB**：第一張 post-ROSC ECG 跟 prior baseline 比、新出 RBBB+LAFB 等同 cath lab activation 的 hard trigger[^mattu-05-04]
3. **Smith 5-04 altered MS + OMI**：chief complaint 不是胸痛時 ECG 仍是必跑——老人非典型主訴是 OMI 漏診的最大盲點[^smith-05-04]
4. **AI ECG 連續三週訊號**：W17 Friedman 數字 → W18 Smith 公開示範 → W19 altered MS case，三條串起來就是「ECG 看似正常 / 主訴非典型」要跑 Queen of Hearts 第二意見的明確證據鏈
5. **modified Sgarbossa 在 RBBB 也適用**：concordant ST elevation ≥ 1 mm 在 RBBB+LAFB baseline 上仍是 OMI 的 high-specific 訊號，sensitivity 較低但 specificity 同樣強

---

## 引用 {#refs}

[^smith-05-04]: Stephen W. Smith, Dr. Smith's ECG Blog 2026-05-04: "Acute altered mental status, ST Elevation, Hyperacute T-waves, and evolving T-wave inversion. OMI?"：「EMS was called to a home for a 'life alert' (a simple device used by patients to call...)」 → [drsmithsecgblog.com](https://drsmithsecgblog.com/acute-altered-ms-ste-hatw-evolving-twi/)

[^mattu-05-04]: Amal Mattu, ECG Weekly 2026-05-04: "A Post-Arrest ECG With a Dangerous New Bundle Branch Block"：「A 72-year-old man is brought to the ED after a witnessed out-of-hospital cardiac arrest... The post-ROSC ECG computer interpretation calls bifascicular block and an old septal infarct. A prior ECG does not show the same conduction pattern.」 → [ecgweekly.com](https://ecgweekly.com/weekly-workout/a-post-arrest-ecg-with-a-dangerous-new-bundle-branch-block/)

[^hrs-lead-145]: Heart Rhythm Society, The Lead Podcast Episode 145, 2026-05-07: "Heart Rhythm 2026 Late Breaker Coverage: A Discussion of Cognitive Function and Anticoagulation Discontinuation in Patients Without Long-Term Recurrence After Catheter Ablation for Atrial Fibrillation" → [HRS official podcast](https://www.hrsonline.org/)

[^friedman-omi]: Friedman BS, Malloy-Post R, Smith SW, Meyers HP, et al., Journal of Electrocardiology 2026-04-09 (PMID 41967390)：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」 → [PubMed 41967390](https://pubmed.ncbi.nlm.nih.gov/41967390/)

[^esc-arr-profile]: European Society of Cardiology / EHRA 2026-05-03: "Discovering the Arrhythmia Patient profile: new diagnostic features presentation at M&PD Annual meeting 2025" → [ESC publication](https://www.escardio.org/)

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。本週為 Heart Rhythm 大會週，量縮但訊號集中。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">4<span class="unit">篇 W19 內新文（其餘為 W18 延伸）</span></div>
<ul>
<li><span class="li-en">Dr Smith <strong>1</strong> · ECG Weekly <strong>1</strong></span><span class="li-zh">Smith 心電圖部落格 · Mattu 心電圖週刊（影音教學）</span></li>
<li><span class="li-en">HRS <strong>1</strong> (Lead Ep 145)</span><span class="li-zh">美國心律學會官方 podcast</span></li>
<li><span class="li-en">ESC <strong>1</strong> (arrhythmia profile)</span><span class="li-zh">歐洲心臟學會 EHRA 子刊預告</span></li>
<li><span class="li-en">LITFL / Core EM / EMCrit / REBEL EM — 0</span><span class="li-zh">本週無新文</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">0<span class="unit">篇 W19 內新作（W17-W18 Friedman / Aslanger 已涵蓋）</span></div>
<ul>
<li><span class="li-en">Smith / Meyers / Grauer — 0</span><span class="li-zh">本週無 PubMed 新作</span></li>
<li><span class="li-en">Aslanger — 0</span><span class="li-zh">W18 已收 IC-ECG case series</span></li>
<li><span class="li-en">Magnus Nossen / Sam Ghali / Robert Herman — 0</span><span class="li-zh">本週皆無新作</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">~20<span class="unit">篇候選（多為 5 月號延伸）</span></div>
<ul>
<li><span class="li-en">J Electrocardiology · Resuscitation · Heart Rhythm</span><span class="li-zh">主要期刊本週 turnover 低，多 W18 5 月號延伸</span></li>
<li><span class="li-en">ESC EHRA 子刊 <strong>~10</strong></span><span class="li-zh">EHRA 2026 abstract 預告波</span></li>
<li><span class="li-en">EHJ / JACC-EP / Annals EM / JACC — 0</span><span class="li-zh">本週皆空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">0<span class="unit">條過 filter（本週 cache 無新 X 訊號）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog — 本週無 ECG 主題新 tweet</span><span class="li-zh">blog 5-04 已對應</span></li>
<li><span class="li-en">@ekgpress — 本週無新 case</span><span class="li-zh">W18 epigastric pain case 已收</span></li>
<li><span class="li-en">@RobertHermanMD — 本週無新作</span><span class="li-zh">—</span></li>
<li><span class="li-en">@amalmattu — 本週無新 tweet</span><span class="li-zh">5-04 ECG Weekly case 已對應</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>
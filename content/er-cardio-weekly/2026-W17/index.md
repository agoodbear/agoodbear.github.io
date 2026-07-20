---
title: "看起來像的未必是，不像的也可能是"
subtitle: "_這週的訊號在拆同一件事——baseline 一旦不正常（CKD、LVAD、COPD），常規 STEMI／VT 準則就不再可靠，AI 補的是人漏掉的那一半；同週 CAAN-AF、STOPSTORM 兩場 EHJ 試驗改寫了裝置決策。_"
shortTitle: "像不像都不能拍板"
slug: "2026-W17"
week: "2026-W17"
weekRange: "2026-04-20 — 2026-04-26"
date: 2026-04-29T20:00:00+08:00
coreTime: "3 分鐘"
fullTime: "21 分鐘"
readingTime: "21 分鐘"
picked: 5
tags: ["OMI", "AI ECG", "裝置", "Arrhythmia", "Resus"]
practiceChanges:
  - text: "cardiology 已經 <b>cancel 你的 STEMI activation</b>、你卻仍不放心時，把 <b>AI-ECG（Queen of Hearts）</b>當第二意見——它把 OMI 漏判率從一半以上降到接近零；拍板仍靠 prior／serial／echo"
    source: "J Electrocardiol 4-09"
    href: "https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=STEMI%20criteria%20demonstrated%20lower%20sensitivity"
  - text: "<b>HFrEF＋permanent AF＋CRT-D</b> 病人別再預設「應該做 AV 結消融」——CAAN-AF 隨機試驗下 AVNA <b>沒有</b>降低死亡或心衰事件，回到 medical rate control 為基準"
    source: "EHJ 4-16"
    href: "https://doi.org/10.1093/eurheartj/ehag206#:~:text=Secondary%20outcomes%2C%20including%20cardiovascular%20"
  - text: "<b>refractory VT storm</b> 病人做完 catheter ablation 仍復發時，主動問有沒有 <b>STAR（放射消融）</b>轉介路徑——STOPSTORM.eu 把 VT episode burden 中位數降 80%"
    source: "EHJ 4-20"
    href: "https://doi.org/10.1093/eurheartj/ehag338#:~:text=median%20VT%20episode%20burden%20was%20reduced%20by%2080%25%20after%20STAR"
  - text: "收到 <b>LVAD＋AICD</b> 病人的 wide-complex tachycardia，第一動作是 <b>device interrogation＋跟 EP 通話</b>，不是直接 cardioversion——這族群不能用一般 SVT／VT criteria 判讀"
    source: "ECG Weekly 4-20"
    href: "https://ecgweekly.com/weekly-workout/umem-cases-part-4-when-the-computer-misses-the-rhythm-and-flutter-fakes-a-stemi/#:~:text=LVAD%2C%20chronic%20amiodarone%20therapy%2C%20and%20an%20AICD"
  - text: "草藥 <b>鈉通道毒性</b>（aconitine-like，對應附子／烏頭）造成室性心律不整，給 <b>lidocaine＋magnesium</b>，<b>避免 amiodarone</b>"
    source: "JACC Case Reports 4-08"
    href: "https://pubmed.ncbi.nlm.nih.gov/41746248/#:~:text=intravenous%20lidocaine%20and%20magnesium%20sulfate%2C%20"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "AI 補被 cancel 的 OMI" }
  - { id: "s2",  num: "02", title: "T 波倒置 · innocent bystander" }
  - { id: "s3",  num: "03", title: "LVAD＋AICD 別靠 ECG 判讀" }
  - { id: "s4",  num: "04", title: "CAAN-AF · AVNA 不再 routine" }
  - { id: "s5",  num: "05", title: "STOPSTORM · STAR 治難治 VT" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## AI ECG：cardiology 已經 cancel，它還抓得到 OMI {#s1}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=STEMI%20criteria%20demonstrated%20lower%20sensitivity" anno="研究回頭看所有『STEMI activation 被 cardiology cancel』的圖——<b>AI 對 OMI 的靈敏度 94.1%，人類 STEMI 準則只有 47.1%</b>" linktext="到 PubMed 看原文 ↗" >}}

**是什麼：** Journal of Electrocardiology（心電圖學期刊）4-09，Friedman BS 等（第三作者 Stephen W. Smith、第四作者 Pendell Meyers）：回顧 17 個月內所有「已啟動 STEMI activation、但 cardiology 看了 ECG 後以『not meeting STEMI criteria』為由 cancel 掉」的 185 例，其中真正的 OMI（angiographic culprit＋TIMI 0/1 flow）有 17 例。[^friedman-aiecg]

**為什麼要在意：** 這是本週對 ED 流程衝擊最大的 OMI 證據——AI 演算法（Queen of Hearts）對 OMI 的靈敏度 <mark>94.1%（抓到 16／17）</mark>，人類 STEMI 準則只有 <mark>47.1%（p = 0.005）</mark>；特異度 AI 73.2% vs 人類 66.1%（p = 0.090，無顯著差異）。換句話說，<mark>一旦 activation 已被 cancel、你卻仍覺得有事，AI 第二意見可以把漏判率從一半以上降到接近零</mark>。同期 Sharkey SW 等的 JACC Advances 多中心 STEMI registry（2,523 病人）方向一致：OMI(+) 正確率 93.8%、AUCROC 0.952（95% CI 0.924-0.966），但要注意 takotsubo 78%、myopericarditis 67% 是 AI 偽陽性集中區。 {{< grade "回溯 · 185 例 canceled activation · n=17 OMI" "retro" >}} [^friedman-aiecg][^sharkey-ai]

**所以呢：** 當 cath lab on-call 對你的 activation 有保留、你卻不放心時，多開一個 AI tool 比人類重新討論更有效率；拍板仍回到 prior／serial／echo。takotsubo 與心肌心包炎這兩類「看起來像但不是」的圖，別被 AI 的偽陽性帶走。

**台灣情境：** 台灣醫學中心若仍只把 AI ECG 當「研究工具」是落後現狀。建議把 AI ECG（PMcardio／Queen of Hearts／任何 commercially available 的 OMI model）放進 chest pain workflow，特別是當 cardiology 已經 cancel 你的 STEMI activation 時的 backup 第二意見。

---

## T 波倒置：ECG 抱怨的那條，未必是 culprit {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/how-would-you-interpret-these-t-wave-inversions-and-what-is-an-innocent-bystander-on-angiogram/#:~:text=I%20was%20reviewing%20ECGs%20at%20my%20computer%20when%20I%20ca" anno="看這幾條 T 波倒置——ECG 上異常的導聯常只是<b>電氣傳導的旁觀者（innocent bystander）</b>，真正的 culprit 在另一支血管" linktext="到 Smith 部落格看波形 ↗" >}}

**是什麼：** Dr Smith's ECG Blog（Smith 心電圖部落格）本週由 Magnus Nossen 連發兩篇 T 波倒置拆解——4-23〈How would you interpret these T wave inversions? 什麼是 angiogram 上的 innocent bystander？〉[^magnus-04-23]，以及 4-27 一例 77 歲過重男性合併 COPD 與 Stage 5 CKD 的 T 波倒置[^magnus-04-27]。

**為什麼要在意：** T 波倒置常被簡化成「就是 ischemia」或「就是 strain」，但出現倒置的導聯不一定對應那條 culprit artery——<mark>你在 ECG 上看到的某條導聯異常，常常只是電氣傳導的旁觀者（innocent bystander），真正的 culprit 在另一支血管</mark>。而 baseline 已經不正常的族群（COPD 的 RV strain、CKD 的 uremic changes）更棘手：<mark>V1-V3 的 T 波倒置必須先扣除 RV strain 與電解質變化</mark>，否則沒有 baseline 比對就容易過度解讀成 OMI。 {{< grade "案例 · 教學 · 觀點級" "opinion" >}} [^magnus-04-27]

**所以呢：** 拿到 T 波倒置的 ECG 別只用「對應導聯」反推 culprit，要看整體幾何＋病史＋上一張 ECG 比對。反過來說，若 baseline 已知有 RV strain、這次新加上 lateral 導聯的 T 波倒置，就值得當 OMI 對待。

**台灣情境：** CKD、COPD 病人在台灣急診量大，沒有 baseline ECG 可比對時，V1-V3 的 T 波倒置很容易被過度解讀。調出上一張 ECG、把慢性 strain 與 uremic 底噪先扣掉，是這類病人判讀的第一步。

---

## LVAD＋AICD 的寬複合波心搏過速：先問裝置，別靠 ECG {#s3}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/umem-cases-part-4-when-the-computer-misses-the-rhythm-and-flutter-fakes-a-stemi/#:~:text=LVAD%2C%20chronic%20amiodarone%20therapy%2C%20and%20an%20AICD" anno="regular wide-complex tachycardia、心率只有 135——<b>LVAD＋AICD 讓電腦把 atrial flutter 讀成 fake STEMI＋fake VT</b>" linktext="到 ECG Weekly 看案例 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）4-20〈UMEM Cases, Part 4: When the Computer Misses the Rhythm and Flutter Fakes a STEMI〉，Amal Mattu：44 歲男性 severe cardiomyopathy＋LVAD＋慢性 amiodarone＋AICD，因心悸來院。ECG 是 regular wide-complex tachycardia，但心率只有 135，QRS 後還有疑似 retrograde atrial activity，AICD 沒有 fire。[^umem-pt4]

**為什麼要在意：** 電腦判讀容易把這類 ECG 當成 ventricular flutter，但實際上是 atrial flutter 透過 device sensing 與 LVAD pulsatile 干擾，呈現出「fake STEMI＋fake VT」的雙重騙局。教學點只有一句：<mark>LVAD＋AICD 病人的 ECG 判讀要先把 device 排除，不能用一般 SVT／VT 判別 criteria</mark>。 {{< grade "案例 · 教學 · 觀點級" "opinion" >}} [^umem-pt4]

**所以呢：** 收到 LVAD＋ICD 共存病人的 wide-complex tachycardia，第一動作不是 cardioversion，而是 device interrogation＋跟 EP 通話。

**台灣情境：** 台灣 LVAD bridge to transplant 病人逐年增加，ED 需要一套 SOP——這族群的第一動作永遠是 interrogation device＋跟 EP 通話，別讓 ECG 判讀把你帶去直接電擊。

---

## CAAN-AF：CRT 加做 AV 結消融，隨機試驗下站不住腳 {#s4}

{{< ecg-linkout href="https://doi.org/10.1093/eurheartj/ehag206#:~:text=Secondary%20outcomes%2C%20including%20cardiovascular%20" anno="HFrEF＋permanent AF＋CRT-D 加做 AV 結消融——<b>因 futility 提早終止，死亡與心衰事件無差異</b>" linktext="到 European Heart Journal 看原文 ↗" >}}

**是什麼：** European Heart Journal（歐洲心臟期刊）4-16，CAAN-AF trial（Sanders P 等）：international、prospective、multicentre、randomized controlled trial，把 HFrEF＋permanent AF＋CRT-D 病人 1:1 隨機分到 AV node ablation（AVNA）或 medical rate control（target HR < 90 bpm）。背景是觀察性資料一直暗示「加做 AVNA」可以強化 CRT 效益。[^caan-af]

**為什麼要在意：** 結果因 futility 提早終止，總共只收 143 例（67 AVNA、76 MRCT）。Primary endpoint（all-cause mortality＋nonfatal HF events）47 vs 46 events，IRR 1.16（95% CI 0.60-2.24），<mark>沒有顯著差異</mark>；cardiovascular mortality OR 1.93（95% CI 0.60-6.20）等次要指標也全數無差異。也就是說，<mark>過去 20 年「AVNA 強化 CRT」這個 paradigm，在隨機試驗下站不住腳</mark>。 {{< grade "RCT · 多中心 · futility 提早終止 · n=143" "rct" >}} [^caan-af]

**所以呢：** HFrEF＋permanent AF＋CRT-D 病人不再預設應該 AVNA，回到 medical rate control 為基準，AVNA 留給 individualized 決策。

**台灣情境：** 未來收到 CRT-D＋AF＋HF exacerbation 病人，不要假設他「應該」做 AVNA 還沒做——這條決策路線已經不再是 default。

---

## STOPSTORM.eu：難治 VT 走投無路時，還有放射消融這條路 {#s5}

{{< ecg-linkout href="https://doi.org/10.1093/eurheartj/ehag338#:~:text=median%20VT%20episode%20burden%20was%20reduced%20by%2080%25%20after%20STAR" anno="難治性 VT 用 stereotactic 放射消融（STAR）——<b>VT episode burden 中位數降 80%、12 個月存活 77%</b>" linktext="到 European Heart Journal 看原文 ↗" >}}

**是什麼：** European Heart Journal（歐洲心臟期刊）4-20，STOPSTORM.eu 期中分析（van der Pol L 等）：refractory VT 用 stereotactic arrhythmia radioablation（STAR）的 prospective European multicenter registry。28 個中心、193 病人（mean age 68±9、88% 男、53% non-ischaemic CMP），中位追蹤 19 個月。[^stopstorm]

**為什麼要在意：** Primary endpoint（VT episode burden）<mark>中位數降低 80%</mark>，存活 ≥6 個月者 72% free from ICD shock，整體 <mark>12 個月 overall survival 77%</mark>；SAEs 12 例可能或可能相關，包括 pericardial effusion、coronary events、early post-treatment ventricular arrhythmia。這是 STAR 在 refractory VT 目前最強的 prospective 證據。 {{< grade "註冊 · 多中心 interim · n=193" "retro" >}} [^stopstorm]

**所以呢：** refractory VT storm 病人在 catheter ablation 後仍 storm 的，未來會有 STAR 這條路；做完 catheter ablation 仍復發者，要主動詢問是否有 STAR 轉介路徑。

**台灣情境：** 台灣目前只有少數醫學中心有放射腫瘤科＋EP 跨團隊能執行 STAR。ED 端遇到 refractory VT storm、做完 catheter ablation 仍復發的病人，主動問一句「有沒有 STAR 轉介路徑」。

---

## 延伸與出處 {#more}

### 這週的共同線

本週視窗（2026-04-20 — 2026-04-26）的訊號收束在三條主軸。第一，OMI 判讀的「冷門場景」三連發（卡 01、02、03）說的是同一件事——**一旦 baseline 不正常（CKD、HFrEF＋LVAD、COPD），常規 STEMI／VT 準則就不再可靠**，而 AI 補的是人漏掉的那一半。第二，EHJ 同一週放兩條 practice-level 訊號：CAAN-AF 因 futility 終結「AVNA 強化 CRT」的舊 paradigm（卡 04）、STOPSTORM.eu 把 STAR 推上 refractory VT 的檯面（卡 05）。第三，裝置面另有數件事同期發生（見下）。

### 期刊速報

**裝置／電生理**：PFA 不是「絕對安全」的能源——Circulation-AE 4-24 Patil 的 focal PFA＋RF dual-modality 治難治 LVS PVC first-in-human，6 例全數急性壓制，但 <mark>5 例靠近冠脈做 PF 中有 2 例出現可逆 LAD 痙攣</mark>[^patil-pfa]；PFA 後 24-48 小時出現胸痛＋ST 變化的病人，要把 coronary spasm 列入鑑別。S-ICD 端 Circulation-AE 4-20 Boyle 的 quantitative vector screening 把首次不當放電／under-sensed VA 從 5.2 降到 1.8 per 100 patient-years（log-rank P=0.02）[^boyle-sicd]。HRS 大會同期三條 VT ablation abstract（Ultra-Low Temperature、VINTAGE、Sphere-9）顯示 VT ablation 在硬體層面正快速演化[^hrs-vt-ablation]。

**穿戴**：HRS 4-25 <mark>Apple Watch 在兒童族群的 arrhythmia yield 不輸傳統 patch monitor</mark>[^hrs-applewatch]——兒童心悸主訴＋家長帶 Apple Watch 紀錄的情境正快速增加，急診端可以把手機 export 的 ECG 列入鑑別資料來源。

**節律**：Heart Rhythm 5 月 Rosen 的流病觀察指出 <mark>合併 AF 的 HFpEF 病人有更高的 VT/VF 或 cardiac arrest 風險</mark>[^rosen-hfpef]——HFpEF＋AF 進來急診的 syncope 病人，先別只想 vasovagal 或 dehydration，把 sustained VT 列入鑑別。

**毒物**：JACC Case Reports 4-08 Rassani／Grauer 的 Delphinium denudatum（jadwār，含 aconitine-like alkaloids）鈉通道毒性個案，<mark>IV lidocaine＋magnesium 快速壓制、避免 amiodarone</mark>[^grauer-aconitine]；對應台灣的「附子、烏頭」中毒，處置邏輯一致。

**Resus 速記**：Resuscitation 6 月 Vallentin 的 OHCA IV vs IO vascular access strategy long-term outcomes RCT，把這題的 RCT 證據收尾——收到 OHCA 病人時 access strategy 已經不是「先 IV 試試看」，<mark>「IO 直接打」也是合理 default</mark>[^vallentin-io]。

### 誰這週有新作

Dr Smith's ECG Blog（Smith 心電圖部落格）本週視窗由 Magnus Nossen 連發兩篇 T 波倒置系列（見卡 02）。ECG Weekly（Amal Mattu）除 UMEM Cases Part 4（見卡 03）外，4-27 另有〈The Cath Lab Was Activated, But Something Didn't Fit〉——70 歲女 bradycardic＋somnolent，prehospital ECG 觸發 STEMI alert，但下壁 STE 不一定是 OMI，可以是別的東西的 reciprocal change 或代謝性 mimic；到 ED 必須再做一張 ECG 比對，把毒物／電解質／呼吸狀態列入鑑別[^ecgw-cath-0427]。Stephen Smith、Pendell Meyers 本週與 Friedman／Sharkey 三篇 AI-ECG 同掛名，其中 Hamm／Meyers／Smith 在 Annals of Emergency Medicine 4-01 的〈Chest Pain With Subtle But Lifesaving ECG Findings〉，標誌 OMI 判讀正式進入 mainstream EM 期刊[^hamm-annem]。

## 引用 {#refs}

[^friedman-aiecg]: Friedman BS, Malloy-Post R, Smith SW, Meyers HP — J Electrocardiol 2026-04-09 "Can an artificial intelligence electrocardiogram algorithm improve diagnostic accuracy for acute coronary occlusion in canceled cath lab activations?"：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=STEMI%20criteria%20demonstrated%20lower%20sensitivity)

[^sharkey-ai]: Sharkey SW, Herman R, Witt DR, Aguirre F et al. — JACC Advances 2026-04-01 "Performance of Artificial Intelligence-Powered ECG Analysis in Suspected ST-Segment Elevation Myocardial Infarction"：「model correctly identified 93.8% as OMI(+)... The AUCROC was 0.952 (95% CI: 0.924-0.966)」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41863986/#:~:text=model%20correctly%20identified%2093.8%25%20as%20OMI%28%2B%29.%20The%20mo)

[^magnus-04-23]: Magnus Nossen — Dr Smith ECG Blog 2026-04-23 "How would you interpret these T wave inversions? And what is an 'innocent bystander' on angiogram?"：「I was reviewing ECGs at my computer when I came across today's case」 → [跳到原文](https://drsmithsecgblog.com/how-would-you-interpret-these-t-wave-inversions-and-what-is-an-innocent-bystander-on-angiogram/#:~:text=I%20was%20reviewing%20ECGs%20at%20my%20computer%20when%20I%20ca)

[^magnus-04-27]: Magnus Nossen — Dr Smith ECG Blog 2026-04-27 "What do you make of these T wave inversions?"：「overweight 77-year-old male with COPD and Stage 5 CKD」 → [跳到原文](https://drsmithsecgblog.com/what-do-you-make-of-these-t-wave-inversions/#:~:text=overweight%2077-year-old%20male%20with%20COPD%20and%20Sta)

[^umem-pt4]: ECG Weekly (Amal Mattu) 2026-04-20 "UMEM Cases, Part 4: When the Computer Misses the Rhythm and Flutter Fakes a STEMI"：「LVAD, chronic amiodarone therapy, and an AICD presents with palpitations. His ECG shows a regular wide-complex tachycardia」 → [跳到原文](https://ecgweekly.com/weekly-workout/umem-cases-part-4-when-the-computer-misses-the-rhythm-and-flutter-fakes-a-stemi/#:~:text=LVAD%2C%20chronic%20amiodarone%20therapy%2C%20and%20an%20AICD)

[^caan-af]: Sanders P, Ariyaratnam J et al. — European Heart Journal 2026-04-16 "Cardiac resynchronization therapy with or without atrioventricular node ablation in atrial fibrillation: the CAAN-AF trial"：「Secondary outcomes, including cardiovascular mortality (odds ratio, 1.93; 95% CI 0.60–6.20), unplanned hospitalizations... also showed no significant differences」 → [跳到原文](https://doi.org/10.1093/eurheartj/ehag206#:~:text=Secondary%20outcomes%2C%20including%20cardiovascular%20)

[^stopstorm]: van der Pol L, Tomasik B et al. — European Heart Journal 2026-04-20 "Stereotactic arrhythmia radioablation for refractory ventricular tachycardia: the STOPSTORM.eu study"：「median VT episode burden was reduced by 80% after STAR」 → [跳到原文](https://doi.org/10.1093/eurheartj/ehag338#:~:text=median%20VT%20episode%20burden%20was%20reduced%20by%2080%25%20after%20STAR)

[^patil-pfa]: Patil S, Liu X et al. — Circulation: Arrhythmia and Electrophysiology 2026-04-24 "First-in-Human Clinical Experience with Focal Pulsed Field and Radiofrequency Dual-Modality Ablation for Treatment Refractory Left Ventricular Summit PVCs"：「Transient, reversible LAD vasospasm was observed during PF delivery in 2 of 5 cases who underwent PF application adjacent to a coronary artery」 → [跳到原文](https://doi.org/10.1161/circep.126.014942#:~:text=Transient%2C%20reversible%20LAD%20vasospasm%20was%20obser)

[^boyle-sicd]: Boyle T, Callans D et al. — Circulation: Arrhythmia and Electrophysiology 2026-04-20 "Quantitative Vector Screening to Improve Sensing and Reduce Inappropriate Shocks With the Subcutaneous Implantable Cardioverter Defibrillator"：「primary end point of time to first inappropriate shock or under-sensed ventricular arrhythmia was longer in the QVS arm (log-rank, P=0.02)」 → [跳到原文](https://doi.org/10.1161/circep.125.014581#:~:text=primary%20end%20point%20of%20time%20to%20first%20inappropri)

[^hrs-vt-ablation]: HRS 2026-04-26/27 — 三條 abstract：Ultra-Low Temperature Ablation for VT（multicenter）、VINTAGE first-in-human（intramyocardial navigation）、Sphere-9 VT 6-month outcomes（dual-energy lattice-tip）；均為 HRS 2026 學術大會公告 → [跳到原文](https://www.hrsonline.org/education/hrs-2026)（待 Bear 補個別 abstract URL）

[^hrs-applewatch]: HRS 2026-04-25 — "Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors"；HRS 2026 學術大會公告 → [跳到原文](https://www.hrsonline.org/education/hrs-2026)（待 Bear 補個別 abstract URL）

[^rosen-hfpef]: Rosen B, Kazemian P — Heart Rhythm 2026-05 "Atrial fibrillation is associated with ventricular tachyarrhythmias or cardiac arrest in heart failure with preserved ejection fraction" → [跳到原文](https://doi.org/10.1016/j.hrthm.2025.05.050)（abstract 未公開）

[^grauer-aconitine]: Rassani N, Grauer K — JACC Case Reports 2026-04-08 "Sodium Channel-Mediated Ventricular Arrhythmia After Delphinium denudatum Ingestion Managed Conservatively in a Resource-Limited Setting"：「intravenous lidocaine and magnesium sulfate, resulting in rapid suppression of ventricular arrhythmias... Early sodium-channel blockade with lidocaine and structured cardiac monitoring can be lifesaving」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41746248/#:~:text=intravenous%20lidocaine%20and%20magnesium%20sulfate%2C%20)

[^vallentin-io]: Vallentin M, Holmberg M et al. — Resuscitation 2026-06 "Effect of vascular access strategy on long-term outcomes in patients with out-of-hospital cardiac arrest: a randomised clinical trial"：OHCA vascular access RCT long-term outcomes → [跳到原文](https://doi.org/10.1016/j.resuscitation.2026.111087)（abstract 未公開）

[^ecgw-cath-0427]: ECG Weekly (Amal Mattu) 2026-04-27 "The Cath Lab Was Activated, But Something Didn't Fit"：「prehospital ECG showing apparent inferior ST elevation and activate the cath lab, but one feature on the tracing makes the receiving physician hesitate」 → [跳到原文](https://ecgweekly.com/weekly-workout/the-cath-lab-was-activated-but-something-didnt-fit/#:~:text=prehospital%20ECG%20showing%20apparent%20inferior%20ST%20)

[^hamm-annem]: Hamm RS, Meyers HP, Smith SW — Annals of Emergency Medicine 2026-04-01 "Chest Pain With Subtle But Lifesaving ECG Findings"：全文 abstract 未公開，作者為 OMI paradigm 核心團隊，OMI 判讀進入 AnnEM mainstream EM 期刊 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41864639/)

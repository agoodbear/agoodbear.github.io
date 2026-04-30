---
title: "本週五大訊號：OMI 冷門場景三連發、CAAN-AF futility 改寫 CRT 適應症、AI ECG 補人類盲點"
subtitle: "Magnus Nossen 拆解 T wave inversion 的 innocent bystander、CAAN-AF / STOPSTORM.eu 同週重磅、Apple Watch 在兒童 yield 優於 patch monitor。"
slug: "2026-W17"
week: "2026-W17"
weekRange: "2026-04-20 — 2026-04-26"
date: 2026-04-29T20:00:00+08:00
readingTime: "21 分鐘"
tags: ["OMI", "AI ECG", "裝置", "Arrhythmia", "Resus"]
sections:
  - { id: "omi", num: "I",    title: "OMI / 急性冠症" }
  - { id: "arr", num: "II",   title: "Arrhythmia / 節律" }
  - { id: "con", num: "III",  title: "Conduction / 傳導" }
  - { id: "dev", num: "IV",   title: "裝置" }
  - { id: "ai",  num: "V",    title: "AI ECG / 穿戴" }
  - { id: "res", num: "VI",   title: "Resus / 急救" }
  - { id: "tox", num: "VII",  title: "BRASH / 毒物" }
  - { id: "tch", num: "VIII", title: "教學案例" }
  - { id: "aut", num: "IX",   title: "追蹤作者本週新作" }
  - { id: "med", num: "X",    title: "媒體動態" }
  - { id: "ref", num: "XI",   title: "文獻速報" }
  - { id: "tw",  num: "XII",  title: "台灣急診備註" }
  - { id: "key", num: "XIII", title: "Key Takeaways" }
  - { id: "refs", num: "XIV", title: "引用" }
---

## 摘要 / 本週速讀 {#tldr}

W17 的訊號集中在三條主軸。

**第一，OMI 判讀的「冷門場景」一次冒出三條。** Magnus Nossen 在 Dr Smith blog 連發兩篇談 T wave inversion 的拆解（包含「angiogram 上的 innocent bystander 是什麼」），加上 Amal Mattu 用「LVAD + AICD 病人 wide-complex tachycardia」直接示範電腦判讀如何被 device 騙倒。這幾個案例的共同點是**一旦 baseline 不正常（CKD、HFrEF + LVAD、COPD），常規 STEMI / VT criteria 就不再可靠**。

**第二，EHJ 同一週放兩條 practice-level 訊號。** CAAN-AF trial（CRT + AF 加做 AV 結 ablation 是否有益）因 futility 提早終止；STOPSTORM.eu interim analysis 證實 stereotactic radioablation 在 refractory VT 可把 VT burden 砍 80%、12 個月存活 77%。

**第三，裝置面三件大事。** HRS 一連發三個 abstract（Sphere-9 6-month VT outcomes、ultra-low temperature ablation、VINTAGE intramyocardial navigation），Apple Watch 在兒童族群的 arrhythmia capture 也被證實優於傳統 patch monitor。

本週五則值得在晨會帶過的：

- Magnus Nossen "innocent bystander" — T wave inversion 出現時，**angiogram 上看到的 culprit 不一定是 ECG 在抱怨的那條**（Dr Smith 2026-04-23）
- UMEM Cases Part 4 — LVAD + AICD 病人 RWCT 135 bpm，computer 沒抓到 flutter fakes a STEMI 的雙重騙局（ECG Weekly 2026-04-20）
- CAAN-AF futility — HFrEF + permanent AF + CRT-D 病人加做 AV node ablation <mark>**沒有**降低死亡或心衰住院</mark>（EHJ 2026-04-16）
- STOPSTORM.eu — stereotactic 放射消融 refractory VT 把 <mark>VT episode burden 中位數降 80%</mark>、12 個月生存 77%（EHJ 2026-04-20）
- Friedman et al. — AI-ECG（Queen of Hearts）在「STEMI activation 又被 cancel 掉」的 17 例 OMI 中靈敏度 <mark>94.1% vs 人類 STEMI criteria 47.1%</mark>（J Electrocardiol 2026-04-09）

---

## 一、OMI / STEMI 判讀 {#omi}

W16 已寫過 reciprocally inverted hyperacute T wave 的概念，不重覆。W17 的三條新訊號都圍繞「ECG 看起來不像但是 OMI」「ECG 看起來像但不是」這條判讀軸線。

**Dr Smith 2026-04-23 — Magnus Nossen「How would you interpret these T wave inversions? 什麼是 angiogram 上的 innocent bystander？」**：Magnus 在審 ECG 時挑出來的案例。T wave inversion 的判讀經常被簡化成「就是 ischemia」或「就是 strain」，但實際上 **T wave inversion 出現的導聯不一定對應到那條 culprit artery**——這個現象 Magnus 用 angiogram 對照解釋：你在 ECG 上看到的某條導聯異常，常常只是「電氣傳導的旁觀者」（innocent bystander），真正的 culprit 在另一支血管[^magnus-04-23]。

實務意義是：拿到 T wave inversion 的 ECG 不要只用「對應導聯」反推 culprit，要看整體幾何 + 病人病史 + 上一張 ECG 比對。

**Dr Smith 2026-04-27 — Magnus Nossen「77 yo COPD + Stage 5 CKD T wave inversions」**：77 歲過重男合併 COPD 與 stage 5 CKD。這是 baseline 已經有 right heart strain pattern + uremic ECG changes 的族群，**T wave inversion 在 V1-V3 的判讀必須先扣除 RV strain 與 electrolyte derangement**[^magnus-04-27]。若你沒有 baseline ECG 比對，CKD 病人的 ECG 容易過度解讀為 OMI；反之，若 baseline 已經知道 RV strain，新加上的 lateral T wave inversion 就值得當 OMI 對待。

**Dr Smith 2026-04-17「Signed off as normal, no concern」（Avery Kechter, Cork）**：W16 已提，這裡只強調**「被判正常的 ECG」是急診誤判最後一道防線**[^kechter-normal]，配合 Magnus 兩篇可串成「T wave inversion 三部曲」做 resident 教學。

**Friedman BS et al., Journal of Electrocardiology 2026-04-09**（[PMID 41967390](https://pubmed.ncbi.nlm.nih.gov/41967390/)，DOI 10.1016/j.jelectrocard.2026.154255，第三作者 Stephen W Smith、第四作者 Pendell Meyers）：這篇是本週**對 ED 流程衝擊最大的 OMI 證據**。研究設計是回顧 17 個月內所有「STEMI activation 但 cardiology 看了 ECG 後 cancel 掉、理由是 not meeting STEMI criteria」的 185 例。185 例中真正的 OMI（angiographic culprit + TIMI 0/1 flow）有 17 例。AI 演算法（Queen of Hearts 系列）對 OMI 的 sensitivity 為 94.1%（17/17 中抓到 16 例），人類 STEMI criteria 只 47.1%（p = 0.005）。Specificity AI 73.2%、人類 66.1%（p = 0.090，沒有顯著差異）。Positive LR：AI 3.51 vs STEMI criteria 1.39；Negative LR：AI 0.08 vs STEMI criteria 0.80。

這意味著什麼？**一旦 cardiology 已經 cancel 你的 STEMI activation、但你還是覺得有事，<mark>AI ECG 模型作為「第二意見」可以把漏判率從一半以上降到接近零</mark>**[^friedman-aiecg]。

對台灣急診的意義是：當 cath lab on-call 對你的 activation 有保留時，多一個 AI tool 介入會比人類重新討論更有效率——這正是 W16 提過的「AI 補人類盲點」的具體落地證據。

**Sharkey SW et al., JACC Advances 2026-04-01**（[PMID 41863986](https://pubmed.ncbi.nlm.nih.gov/41863986/)）：multicenter US STEMI registry 2018-2022，2,523 病人。AI-ECG 模型在 AMI with culprit 中正確 OMI(+) 93.8%，在 no-AMI 中正確 OMI(-) 79.7%，AUCROC 0.952（95% CI 0.924-0.966）。

Subgroup 點：takotsubo 中 78% 被 AI 標 OMI(+)、myopericarditis 67% 標 OMI(+)——這些是 AI 的偽陽性集中區，臨床上正是「ECG 看起來像但不是」的常見族群[^sharkey-ai]。值得注意的是，這篇研究的對象是「cath lab 已經被 activate 過的 ECG」，所以 base rate 已經偏高，外推到一般 chest pain 族群要打折。

**ECG Weekly 2026-04-27「The Cath Lab Was Activated, But Something Didn't Fit」**：70 歲女 CHF + COPD + intermittent AF + 慢性疼痛藥物使用 + 近期食慾差，突發 dyspnea + somnolence + bradycardia 30s-40s。Prehospital ECG 看起來下壁 ST elevation 觸發 STEMI alert。但 Amal 把這個案例拿出來教，重點在於**「對的鏡頭看到對的東西」不一定就是真相**：合併毒物、電解質、呼吸狀態交叉 confounding 時，下壁 STE 不一定是 OMI，可以是 reciprocal change of something else 或 metabolic mimic。

臨床上的 takeaway：bradycardic + somnolent 病人別被「prehospital 已經叫 STEMI alert」鎖死判斷，到了 ED 再做一張 ECG 比對是必要的[^ecgw-cath-0427]。

**Hamm RS, Meyers HP, Smith SW. "Chest Pain With Subtle But Lifesaving ECG Findings"（Annals of Emergency Medicine, 2026-04-01）**（[PMID 41864639](https://pubmed.ncbi.nlm.nih.gov/41864639/)）：這篇 Pendell Meyers + Stephen Smith 在 AnnEM 上發的短評，主題是 subtle ECG findings 在臨床判讀的價值。雖然全文 abstract 未公開，但作者組合 + journal + 主題已經顯示這是 OMI paradigm 進入 mainstream EM literature 的訊號——以前要看部落格才能讀到的判讀邏輯，現在已經進入 peer-reviewed EM 期刊[^hamm-annem]。

{{< bottomline >}}
本週 OMI 主軸從「ST 與 T 波形態」進一步延伸到「AI 第二意見 + 病人 baseline 必扣除」。Friedman et al. 那篇 <mark>sensitivity 94.1% 對 47.1% 的數據</mark>，是本週最值得帶進晨會、最容易讓主治醫師接受 AI ECG 的證據[^friedman-aiecg]。
{{< /bottomline >}}

---

## 二、Arrhythmia 心律不整新知 {#arr}

**ECG Weekly 2026-04-20 — UMEM Cases Part 4: When the Computer Misses the Rhythm and Flutter Fakes a STEMI**：W16 收尾的 UMEM Cases 三部曲在 W17 加了第四集，案例設計極端：44 歲男 severe cardiomyopathy + LVAD + 慢性 amiodarone + AICD，因 palpitations 來院。ECG 是 regular wide-complex tachycardia，但**心率只有 135**，而且 QRS 後還有疑似 retrograde atrial activity，AICD 沒在 fire。

Amal 的教學點是：**LVAD + AICD 病人的 ECG 判讀要先把 device 排除，不能用一般 SVT/VT 判別 criteria**[^umem-pt4]。電腦判讀容易把這類 ECG 當 ventricular flutter，但實際上 atrial flutter 透過 device sensing 與 LVAD pulsatile 干擾，可以呈現出「fake STEMI + fake VT」雙重騙局。

對台灣急診的意義是：LVAD + ICD 共存的病人在台灣已經越來越多，**收到這類病人第一動作不是依 ECG 判讀，而是先 interrogation device + 跟 EP 通話**。

**Heart Rhythm 2026-05 — RESTART trial (Hummel J et al.)**（DOI [10.1016/j.hrthm.2026.01.042](https://doi.org/10.1016/j.hrthm.2026.01.042)）：AF reablation 在「pulmonary vein 已 isolated 但仍有 AF recurrence」的病人，用 electrogram dispersion 為 target 是否有益[^restart-trial]。這是 EP 端 ablation 策略的訊號，急診端不直接 actionable，但**值得知道之後 AF reablation 的病人選擇邏輯會逐漸從「找 trigger」轉向「找 dispersion」**——以後收到 reablation 後的 AF 病人時，要問清楚這次 ablation 是 PVI redo 還是 substrate-targeted。

**Heart Rhythm 2026-05 — AF + HFpEF → ventricular arrhythmias（Rosen B et al.）**（DOI [10.1016/j.hrthm.2025.05.050](https://doi.org/10.1016/j.hrthm.2025.05.050)）：合併 AF 的 HFpEF 病人有更高的 VT/VF 或 cardiac arrest 風險[^rosen-hfpef]。這是流病觀察，臨床意義是：**HFpEF + AF 進來急診的 syncope 病人，先別只想 vasovagal 或 dehydration，要把 sustained VT 列入 differential**。

**Heart Rhythm 2026-05 — Risk factors associated with VF during first STEMI（Warming P et al.）**（DOI [10.1016/j.hrthm.2025.06.026](https://doi.org/10.1016/j.hrthm.2025.06.026)）：3 個前瞻 case-control 研究的 individual participant data 整合分析，找首次 STEMI 期間發生 VF 的危險因子。同期還有 Narayanan K 的 editorial「Time to move beyond associations」呼籲下一步要走 mechanistic 而非 association studies——這是 STEMI 流程設計的上游證據，急診端可以等 risk factor 列表正式發表。

{{< bottomline >}}
本週 arrhythmia 端最 actionable 是 UMEM Cases Part 4 的「LVAD + AICD 不要靠 ECG 自己判讀」原則[^umem-pt4]。RESTART 與 AF + HFpEF 的訊號是中長期 EP 端的，急診端先記住「HFpEF + AF + syncope = VT 列入鑑別」即可[^rosen-hfpef]。
{{< /bottomline >}}

---

## 三、Conduction 傳導異常與 Channelopathy {#con}

W17 在 conduction 端沒有像 W16 UMEM Part 2 那種 dramatic 案例，但 J Electrocardiology 2026-07 issue 有兩則值得標記。

**Mondal S et al. "Spontaneous right bundle branch block during narrow complex tachycardia"**（DOI [10.1016/j.jelectrocard.2026.154237](https://doi.org/10.1016/j.jelectrocard.2026.154237)）：narrow QRS tachycardia 過程中突然出現自發性 RBBB，這個 phenomenon 對 SVT 機制鑑別有重要意義——若 BBB 出現後 RP interval 延長，提示 accessory pathway 在 BBB 同側（Coumel's law）[^mondal-rbbb]。對急診端的 takeaway：narrow tachycardia 病人在 monitor 上突然 QRS 變寬，不一定是 VT，可能是診斷線索。

**Rahman Zahin M, "Not just a Wenckebach, not yet a complete heart block"**（DOI [10.1016/j.jelectrocard.2026.154230](https://doi.org/10.1016/j.jelectrocard.2026.154230)）：W16 已點到，這次補充重點——介於 Mobitz I 與 complete heart block 之間的 high-grade AV block 在 ECG 上的辨識，急診端遇到 syncope + bradycardia 要分辨機制決定 pacing 策略。

**Bekar L et al. "Clinical significance of fragmented QRS in isolated hypertension"**（DOI [10.1016/j.jelectrocard.2026.154257](https://doi.org/10.1016/j.jelectrocard.2026.154257)）：單純高血壓病人的 fragmented QRS 與 ventricular arrhythmia burden、autonomic dysfunction 相關。對急診端的意義有限（fragmented QRS 不會單獨改變 disposition），但對 outpatient risk stratification 有累積證據。

**Pérez-Riera A et al. "A child with large ostium secundum ASD, pulmonary hypertension, and characteristic Crochetage electro-vectorcardiographic pattern"**（DOI [10.1016/j.jelectrocard.2026.154238](https://doi.org/10.1016/j.jelectrocard.2026.154238)）：Crochetage sign（下壁 R 波 notching）在 ostium secundum ASD 是經典 ECG 線索，這個 case 把它在兒童 ASD + pulmonary hypertension 的呈現具體化[^perez-crochetage]。

對台灣 ED 收到 unexplained pulmonary hypertension 兒童時值得回頭看 ECG。

{{< bottomline >}}
本週 conduction 端訊號偏教學性，沒有 practice-changing 數據；fragmented QRS 與 isolated HTN 的 ventricular arrhythmia 連結是新的累積證據，但急診端不需要立刻改變 disposition 思維。
{{< /bottomline >}}

---

## 四、Pacemaker / ICD / CRT 與 Ablation {#dev}

**CAAN-AF trial (CRT ± AVNA in HFrEF + permanent AF, EHJ 2026-04-16, Sanders P et al.)**（DOI [10.1093/eurheartj/ehag206](https://doi.org/10.1093/eurheartj/ehag206)）：本週裝置端最重要的 negative trial。背景：HFrEF + AF 病人從 CRT 得到的好處比 sinus rhythm 病人少，觀察性資料一直暗示「加做 AV node ablation」可以強化 CRT 效益。CAAN-AF 是 international, prospective, multicentre, randomized controlled trial，把 HFrEF + permanent AF + CRT-D 病人 1:1 隨機分到 AVNA 或 medical rate control（target HR < 90 bpm）。

結果：因 futility 提早終止，總共只收 143 例（67 AVNA、76 MRCT）。Primary endpoint（all-cause mortality + nonfatal HF events）47 vs 46 events，IRR 1.16（95% CI 0.60-2.24），**沒有顯著差異**。Cardiovascular mortality OR 1.93（95% CI 0.60-6.20）、unplanned hospitalizations IRR 1.01（95% CI 0.71-1.74）、ventricular arrhythmias IRR 0.68（95% CI 0.17-2.63）、6MWD、SF-36，全部 no significant difference。

這意味著什麼？**過去 20 年「AVNA 強化 CRT」這個 paradigm，<mark>在隨機試驗下站不住腳</mark>**[^caan-af]。這篇對 EP 端 disposition 的影響：HFrEF + permanent AF + CRT-D 病人不再預設應該 AVNA，回到 medical rate control 為基準、AVNA 留給 individualized 決策。

對急診端的意義是：未來收到 CRT-D + AF + HF exacerbation 病人，**不要假設他「應該」做 AVNA 還沒做**——這條決策路線已經不再是 default。

**STOPSTORM.eu interim analysis (EHJ 2026-04-20, van der Pol L et al.)**（DOI [10.1093/eurheartj/ehag338](https://doi.org/10.1093/eurheartj/ehag338)）：refractory VT 用 stereotactic arrhythmia radioablation（STAR）的 prospective European multicenter registry interim 報告。28 個中心、193 病人（mean age 68±9，88% 男，53% non-ischaemic CMP），中位 follow-up 19 個月。**Primary endpoint（VT episode burden）<mark>中位數降低 80%</mark>**，存活 ≥6 個月者 72% free from ICD shock，整體 12 個月 overall survival 77%。SAEs 12 例可能或可能相關，包括 pericardial effusion、coronary events、early post-treatment ventricular arrhythmia。

對急診端的意義：refractory VT 病人在 catheter ablation 後仍 storm 的，未來會有 STAR 這條路[^stopstorm]。台灣目前只有少數醫學中心有放射腫瘤科 + EP 跨團隊能執行 STAR；ED 端遇到 refractory VT storm 的病人，**做完 catheter ablation 仍復發者，要主動詢問是否有 STAR 轉介路徑**。

**Circulation-AE 2026-04-24 — First-in-Human PFA + RF Dual-Modality for LVS PVCs（Patil S et al.）**（DOI [10.1161/circep.126.014942](https://doi.org/10.1161/circep.126.014942)）：6 例先前 RF ablation 失敗的 LVS PVC 病人用 TactiFlex Duo（Abbott）irrigated contact-force dual-modality catheter（PF + RF 可切換）做 redo。**全部 6 例急性壓制 PVC**，2 例光用 PF 在 GCV-AIV 就成功，3 例需 RF + PF 加打 adjacent sites，1 例 GCV-AIV 不可達者在 LVOT 用 RF + PF。值得注意的安全訊號：**5 例靠近冠狀動脈做 PF 中，<mark>2 例出現可逆 LAD vasospasm</mark>**（事前已 IC nitroglycerin 預處理），所幸無 ECG / hemodynamic sequalae。

對急診端的意義：PFA 不是「絕對安全」的能源，**<mark>靠近冠脈做 PFA 仍會引起冠脈痙攣</mark>**[^patil-pfa]，所以 PFA 後 24-48 小時內出現胸痛 + ST 變化的病人，要把 PFA-induced coronary spasm 列入差別診斷。

**Circulation-AE 2026-04-20 — S-ICD Quantitative Vector Screening（Boyle T et al.）**（DOI [10.1161/circep.125.014581](https://doi.org/10.1161/circep.125.014581)）：S-ICD inappropriate shock 是長期問題。賓大 2018-2025 共 223 例，2023 改用 quantitative vector screening（QVS）。QVS 把 eligibility 從 96% 降到 83%（**選擇性篩掉部分 borderline 病人**），但首次 inappropriate shock / under-sensed VA 從 5.2 per 100 patient-years 降到 1.8 per 100 patient-years（log-rank P = 0.02）。

對急診端的意義：以後收到 S-ICD 病人 inappropriate shock 主訴時，要記得**新一代 QVS 篩選後 inappropriate shock 率明顯下降**[^boyle-sicd]，老 device 仍是高風險族群。

**HRS 2026-04-26 — Ultra-Low Temperature Ablation for VT**：multicenter study finding ULT 對 VT 高度有效。HRS 2026-04-27 — VINTAGE first-in-human（intramyocardial navigation for VT ablation）。HRS 2026-04-27 — Sphere-9 VT 6-month outcomes（dual-energy lattice-tip）。三條同期訊號顯示**VT ablation 在硬體層面正在快速演化**[^hrs-vt-ablation]——ED 接到 ablation 後的 VT 病人時，要問清楚用了什麼能源。

**Heart Rhythm 2026-05 — Biventricular pacing 與 VT ablation 後復發（Togashi D et al.）**（DOI [10.1016/j.hrthm.2026.02.004](https://doi.org/10.1016/j.hrthm.2026.02.004)）：BiV pacing 是否影響 VT ablation 後 VT 復發。這是長期 device programming 議題，急診端不直接 actionable。

{{< bottomline >}}
CAAN-AF 是本週對 EP / cardiology 端最重要的 negative trial（AVNA 不再 routine）[^caan-af]，STOPSTORM.eu 給了 STAR 在 refractory VT 的 strongest prospective evidence[^stopstorm]，PFA-induced coronary vasospasm 是急診端要記得的安全訊號[^patil-pfa]。
{{< /bottomline >}}

---

## 五、AI ECG 與穿戴裝置 {#ai}

W16 已寫過 Queen of Hearts vs physicians 的 REBEL EM 評測與 wrist-worn PPG 的 OHCA 偵測，不重覆。W17 三條新訊號：

**Friedman BS et al., J Electrocardiology 2026-04-09（OMI in canceled STEMI activations）**：見「一、OMI / STEMI 判讀」章節詳述。94.1% vs 47.1% sensitivity 是本週 AI ECG 最重磅的數據[^friedman-aiecg]，**是 W16 REBEL EM 評測之外的同主題、不同設計、相同方向 confirmation**。

**Sharkey SW et al., JACC Advances 2026-04-01（multicenter STEMI registry, 2523 病人, AUCROC 0.952）**：見「一、OMI / STEMI 判讀」章節[^sharkey-ai]。subgroup pitfall 是 takotsubo 78%、myopericarditis 67% 被誤標 OMI(+)，臨床端要警覺 AI 在這兩類的 false positive。

**HRS 2026-04-25 — Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors**：HRS 公告的研究訊號。

對台灣兒科 / 急診的意義：**兒童 palpitations 主訴 + 父母帶 Apple Watch 紀錄**的情境正在快速增加，這篇證據顯示 <mark>Apple Watch 在兒童族群的 yield 不輸傳統 patch monitor</mark>[^hrs-applewatch]，急診端可以直接把家長手機 export 的 ECG 列入鑑別資料來源。

**Pukkila T et al., J Electrocardiology 2026-07 "Chronic heart failure detection based on long-term RR interval dynamics"**（DOI [10.1016/j.jelectrocard.2026.154242](https://doi.org/10.1016/j.jelectrocard.2026.154242)）：用長期 RR interval 動態偵測 chronic HF。這是 wearable-derived signal 進入 HF 早期偵測的一條可能路徑，對 ED 端不直接 actionable，但值得知道下游路徑。

**Sarıhan M et al., J Electrocardiology 2026-07 — Early ECG repolarization changes in lymphoma patients receiving cancer therapy**（DOI [10.1016/j.jelectrocard.2026.154227](https://doi.org/10.1016/j.jelectrocard.2026.154227)）：machine learning approach 找 cancer therapy-related cardiac dysfunction 的 subclinical ECG signature。

對 ED 端的意義：化療中 / 化療後病人主訴胸悶 / 喘的 ECG 判讀要把 cardiotoxicity 列入鑑別，**不只是 doxorubicin 後的明顯 LV dysfunction**，subclinical changes 也可能呈現在 repolarization 階段[^sarihan-chemo]。

{{< bottomline >}}
AI ECG 在 OMI 偵測這條軸線本週多了兩條同向 confirmation（Friedman[^friedman-aiecg] 與 Sharkey[^sharkey-ai]），AI 進入 EM/cardiology mainstream literature 的速度明顯快於去年。Apple Watch 在兒童族群 yield 的證據是新的[^hrs-applewatch]，台灣急診面對家長拿手機 ECG 的場景會越來越多。
{{< /bottomline >}}

---

## 六、Cardiac Arrest / Resuscitation {#res}

W17 在 OHCA 端最重要的單一訊號是 Resuscitation 2026-06 issue 的多篇並陳。

**Vallentin M et al. "Effect of vascular access strategy on long-term outcomes in OHCA: a randomised clinical trial"**（DOI [10.1016/j.resuscitation.2026.111087](https://doi.org/10.1016/j.resuscitation.2026.111087)）：OHCA 病人 IV vs IO access strategy 的 long-term outcomes RCT。這條是**急診 / EMS 端最 actionable** 的 W17 OHCA 訊號——之前 Vallentin 在 2024 NEJM 已經發過 IO vs IV 的初步結果，這次是 long-term outcomes 延伸。

實務意義：若你的 ED + EMS 系統還在爭論 OHCA 該先打 IV 還是 IO，這篇提供新的 RCT level evidence 收尾[^vallentin-io]。Abstract 未公開，但**收到 OHCA 病人時 access strategy 已經不是「先 IV 試試看」，而是<mark>「IO 直接打」也是合理 default</mark>**。

**Jang K et al. "Healthcare costs of expedited transport vs standard care after OHCA: EVIDENCE RCT"**（DOI [10.1016/j.resuscitation.2026.111083](https://doi.org/10.1016/j.resuscitation.2026.111083)）：EVIDENCE trial 的 cost 子分析。expedited transport 對 cost 的影響，這是健保政策端的訊號。

**Pozzi M et al. "Long-term neurological outcomes after ECPR for refractory cardiac arrest: 14-year cohort"**（DOI [10.1016/j.resuscitation.2026.111095](https://doi.org/10.1016/j.resuscitation.2026.111095)）：14 年單中心 ECPR cohort 的 long-term neurological outcomes。

對台灣 ECMO 中心的意義：ECPR 的長期神經結局資料持續累積，**14 年 cohort 是少有的 long horizon data**[^pozzi-ecpr]。

**Rixmann K et al. "Minnesota Mobile Resuscitation Consortium ECMO truck: feasibility for ECPR in refractory OHCA"**（DOI [10.1016/j.resuscitation.2026.111089](https://doi.org/10.1016/j.resuscitation.2026.111089)）：Minnesota 的 ECMO 卡車跑 prehospital ECPR 的可行性研究。

對台灣偏遠地區 EMS 的長期啟發：**ECMO 不一定要在醫院內接管才有意義**[^rixmann-ecmo]。

**Dhingra S et al. "Effect of immunomodulation on post-cardiac arrest brain injury: meta-analysis"**（DOI [10.1016/j.resuscitation.2026.111091](https://doi.org/10.1016/j.resuscitation.2026.111091)）：post-arrest brain injury 用 immunomodulation 的整合分析。這是 ICU / post-ROSC 端的訊號，急診端不直接 actionable，但值得知道未來 post-ROSC bundle 可能加入 immunomodulation 元素。

**Boulton A et al. "Geographic inequalities in prehospital critical care for cardiac arrest"**（DOI [10.1016/j.resuscitation.2026.111093](https://doi.org/10.1016/j.resuscitation.2026.111093)）：prehospital critical care 的地理 / 社經不均等。對台灣 EMS 系統規劃的對標證據——城鄉差距同樣存在於台灣，這篇方法學值得衛福部緊急醫療科參考[^boulton-geo]。

**Resuscitation 2026-05（已在 W16 提過的）**：Kreinbrook（transcut pacing 中 VF 延遲 defib）、Frattini（double defib synchronous vs sequential）、Bánfai（OHCA bystander/community）、Kitamura（日本 OHCA trends），W17 不重覆。

{{< bottomline >}}
本週 OHCA 端最重要是 Vallentin 的 vascular access RCT long-term outcomes（IO 路線得到強化）[^vallentin-io]，ECPR 與 immunomodulation 屬於 ICU 端的中長期訊號。
{{< /bottomline >}}

---

## 七、BRASH / 急診 ECG 毒物相關 {#tox}

W17 在毒物 ECG 端有一條值得專門寫的案例。

**Rassani N, Grauer K. "Sodium Channel-Mediated Ventricular Arrhythmia After Delphinium denudatum Ingestion"（JACC Case Reports 2026-04-08）**（[PMID 41746248](https://pubmed.ncbi.nlm.nih.gov/41746248/)）：南亞傳統草藥 Delphinium denudatum（jadwār）含 aconitine-like alkaloids，造成 sodium channel-mediated cardiotoxicity。20 多歲男誤食根部 6 小時後出現 palpitations + autonomic symptoms。連續 ECG 監測顯示 **frequent ventricular ectopy + nonsustained polymorphic VT**。處置：IV lidocaine + magnesium sulfate，VT 快速壓制。Lidocaine infusion 持續 24 小時（因為毒物代謝動力學不明），後接 telemetry observation。

對台灣急診的意義：**aconitine-like 鈉通道毒性**在台灣的對應族群是「附子、烏頭」中毒（傳統中藥中常見）。處置邏輯一致：sodium channel blocker 中毒給 lidocaine（class IB，Na channel block 但 unbinding kinetics 快）+ magnesium 是合理選擇，**避免 amiodarone**（class III + 部分 Na channel block，會疊加毒性）[^grauer-aconitine]。Ken Grauer 是這篇 case 的 senior author——這篇對 ECG 教學社群來說是「毒物 + arrhythmia + ECG 教學」的良好教材。

**REBEL EM「The Dilt Drop: Can Calcium Break the Fall?」（2025-12-01）**：W17 沒新發布，但這條值得重提作為 hyperK / digoxin 之外的「diltiazem-induced hypotension 用 calcium 救援」議題；W17 沒新證據，先掛在這供參。

**REBEL EM 2025-11-17「QTc Prolongation」**：W17 沒新發布，但 QTc 延長的藥物管理是急診常見議題，W17 J Electrocardiology 沒有新 QTc 論文。

{{< bottomline >}}
本週毒物端最值得記住的是 Grauer 的 Delphinium / aconitine 案例 — **<mark>sodium channel toxicity 用 lidocaine + magnesium，不要 amiodarone</mark>**[^grauer-aconitine]。
{{< /bottomline >}}

---

## 八、教學案例精選 {#tch}

W17 三個值得在 journal club / resident 教學中帶過的：

1. **Magnus Nossen 兩篇 T wave inversion 系列（Dr Smith 2026-04-23 + 2026-04-27）**[^magnus-04-23][^magnus-04-27]：T wave inversion 判讀的 「innocent bystander 觀念」+ 「baseline 必扣除」原則。這兩篇配 W16 的 reciprocally inverted hyperacute T wave 可組成 T wave 判讀完整課程。

2. **UMEM Cases Part 4（ECG Weekly 2026-04-20）**[^umem-pt4]：LVAD + AICD 病人 wide-complex tachycardia 135 bpm + computer fakes a STEMI——device 共存的 ECG 不能用一般 criteria 判讀。

3. **ECG Weekly 2026-04-27「Cath Lab Activated, But Something Didn't Fit」**[^ecgw-cath-0427]：bradycardic + somnolent 病人的 prehospital STEMI alert 不一定是真。**到 ED 必須再做一張 ECG 比對**，並把毒物 / 電解質 / 呼吸狀態列入鑑別。

**Mc Loughlin M, "3D ECG: a new simplified view"（J Electrocardiol 2026-07）**（DOI [10.1016/j.jelectrocard.2026.154226](https://doi.org/10.1016/j.jelectrocard.2026.154226)）：3D ECG simplified view，這是教學工具方向的 paper，對 ECG 教育者值得追。

{{< bottomline >}}
本週適合教學的三個案例都集中在「ECG 看起來像 / 不像」這條軸線[^magnus-04-23][^umem-pt4][^ecgw-cath-0427]，建議把 W16 的 UMEM Cases 三部曲 + W17 Part 4 + Magnus T wave 兩篇做成單堂 4 小時的 ECG masterclass。
{{< /bottomline >}}

---

## 九、追蹤作者本週新作（PubMed）{#aut}

W17 新增章節，從 `authors_cache.json` 7 位指定作者整理。三位作者本週有新發表：

{{< h3bi en="Stephen W. Smith" zh="Hennepin Healthcare · OMI 主軸" >}}

| 日期 | 題目 | 期刊 | 共同作者 | PMID |
|------|------|------|----------|------|
| 2026-04-09 | Can an artificial intelligence electrocardiogram algorithm improve diagnostic accuracy for acute coronary occlusion in the difficult subset of canceled catheterization lab activations?<br><span class="zh-sub">AI ECG 演算法能否在「Cath Lab 啟動又被 cancel」這個困難子族群中提升 acute coronary occlusion 判讀準確率？</span> | J Electrocardiol | Friedman BS, Malloy-Post R, Smith SW, Meyers HP | [41967390](https://pubmed.ncbi.nlm.nih.gov/41967390/) |
| 2026-04-01 | Chest Pain With Subtle But Lifesaving ECG Findings<br><span class="zh-sub">胸痛 — 細微但救命級別的 ECG 發現</span> | Annals EM | Hamm RS, Meyers HP, Smith SW | [41864639](https://pubmed.ncbi.nlm.nih.gov/41864639/) |
| 2026-04-01 | Performance of AI-Powered ECG Analysis in Suspected STEMI<br><span class="zh-sub">AI 驅動 ECG 分析在 suspected STEMI 中的表現</span> | JACC Advances | Sharkey SW, Herman R, Witt DR, Aguirre F | [41863986](https://pubmed.ncbi.nlm.nih.gov/41863986/) |

詳見「一、OMI / STEMI 判讀」章節。

重點數據已展開：sensitivity 94.1% vs 47.1%、AUCROC 0.952、takotsubo / myopericarditis 偽陽性集中區。

{{< h3bi en="Pendell Meyers" zh="OMI 概念共同創立者" >}}

與 Smith 同三篇（Friedman / Hamm / Sharkey）。Meyers 在三篇中分別是第四作者、第二作者、未列作者。本週 Meyers 沒有獨立 first-author 新發表。

{{< h3bi en="Ken Grauer" zh="KG-EKG Press · 佛州 ECG 教學" >}}

| 日期 | 題目 | 期刊 | PMID |
|------|------|------|------|
| 2026-04-08 | Sodium Channel-Mediated Ventricular Arrhythmia After Delphinium denudatum Ingestion Managed Conservatively in a Resource-Limited Setting<br><span class="zh-sub">Delphinium denudatum 中毒導致 sodium channel-mediated 心室心律不整 — 資源受限環境下的保守治療</span> | JACC Case Reports | [41746248](https://pubmed.ncbi.nlm.nih.gov/41746248/) |

詳見「七、BRASH / 急診 ECG 毒物相關」章節。重點：南亞傳統草藥 jadwār 含 aconitine-like alkaloids，鈉通道毒性，**lidocaine + magnesium，避免 amiodarone**。

{{< h3bi en="Jesse McLaren" zh="多倫多 ECG Cases blog 主理人" >}}

| 日期 | 題目 | 期刊 | PMID |
|------|------|------|------|
| 2026-04-16 | Recognising cardiac syncope<br><span class="zh-sub">辨識 cardiac syncope</span> | BMJ | [41991194](https://pubmed.ncbi.nlm.nih.gov/41991194/) |

McLaren 在 BMJ 上的 syncope 教學文章，主題是 **cardiac syncope 的辨識**——對 ED 急診醫師來說是 review-level 教材，值得列入 syncope 教學書單。Abstract 未公開。

### Emre Aslanger / Willy Frick / Sam Ghali

W17 PubMed 上沒有新發表。Emre Aslanger 上次發表是 W16 之前，Willy Frick 與 Sam Ghali 較少 first-author 文獻。

{{< bottomline >}}
本週追蹤作者軸線最重要是 Smith / Meyers 連發三篇 AI-ECG 同主題論文（Friedman / Hamm / Sharkey），形成 OMI paradigm 進入 mainstream literature 的明確訊號；Grauer 的 aconitine 個案是毒物 ECG 的好教材。
{{< /bottomline >}}

---

## 十、媒體動態 {#med}

{{< h3bi en="Dr Smith ECG Blog" zh="Hennepin Healthcare · OMI 主軸" meta="W17 區間" >}}

| 日期 | 標題 |
|------|------|
| 2026-04-27 | What do you make of these T wave inversions?（Magnus Nossen）<br><span class="zh-sub">這幾條 T wave inversion 你怎麼判？（Magnus Nossen）</span> |
| 2026-04-23 | How would you interpret these T wave inversions? And what is an "innocent bystander" on angiogram?（Magnus Nossen）<br><span class="zh-sub">這幾條 T wave inversion 怎麼判？什麼又是 angiogram 上的「innocent bystander」？（Magnus Nossen）</span> |

{{< h3bi en="ECG Weekly (Amal Mattu)" zh="Mattu 心電圖週刊" meta="W17 區間" >}}

| 日期 | 標題 |
|------|------|
| 2026-04-27 | The Cath Lab Was Activated, But Something Didn't Fit<br><span class="zh-sub">Cath Lab 已 activated — 但有些地方對不上</span> |
| 2026-04-20 | UMEM Cases, Part 4: When the Computer Misses the Rhythm and Flutter Fakes a STEMI<br><span class="zh-sub">UMEM Cases Part 4 — 電腦判讀漏掉節律、atrial flutter 偽裝成 STEMI</span> |

{{< h3bi en="HRS" zh="美國心律學會" meta="W17 區間" >}}

| 日期 | 標題 |
|------|------|
| 2026-04-27 | Episode 162: Ventricular Intramyocardial Navigation and Tachycardia Ablation Guided by Electrograms (VINTAGE): First-in-Human<br><span class="zh-sub">HRS Episode 162 — Electrogram 引導心肌內 ventricular navigation + tachycardia 消融（VINTAGE）：first-in-human</span> |
| 2026-04-27 | Episode 149: Six-Month Outcomes from the Sphere-9 Ventricular Tachycardia Early Feasibility Study: Dual-Energy Lattice-Tip Mapping<br><span class="zh-sub">HRS Episode 149 — Sphere-9 VT 早期可行性試驗 6 個月結果：dual-energy lattice-tip 電極 mapping</span> |
| 2026-04-26 | Multicenter Study Finds Ultra-Low Temperature Ablation Highly Effective for Ventricular Tachycardia<br><span class="zh-sub">Multicenter — Ultra-low temperature ablation 治療 VT 高效</span> |
| 2026-04-26 | New Study Shows Catheter Ablation Reduces Ventricular Tachycardia Events in Underrepresented Patient Population<br><span class="zh-sub">Catheter ablation 可降低 underrepresented 族群的 VT 事件</span> |
| 2026-04-25 | Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors<br><span class="zh-sub">Apple Watch 在兒童族群抓 arrhythmia event 的 yield 優於傳統 patch monitor</span> |

### LITFL / EMCrit / REBEL EM / First10EM / ALiEM / Core EM / ACC / ESC / AHA

W17 區間沒有新文章 / 新訊號（既有 cache 都是更早期的累積教學文章）。_本週這幾個來源無新訊號_。

---

## 十一、文獻速報 — CrossRef 期刊 {#ref}

{{< h3bi en="Heart Rhythm" zh="心律期刊" meta="2026-05 issue · W17 publishing" >}}

| 標題 | 第一作者 | DOI |
|------|----------|-----|
| Risk factors associated with VF during first STEMI: IPD analysis of 3 prospective case-control studies<br><span class="zh-sub">首次 STEMI 期間 VF 的風險因子 — 3 個前瞻性 case-control 研究的 IPD 整合分析</span> | Warming P | [10.1016/j.hrthm.2025.06.026](https://doi.org/10.1016/j.hrthm.2025.06.026) |
| Reablation of AF targeting electrogram dispersion in patients with isolated veins: RESTART trial<br><span class="zh-sub">AF 在 PVI 已完成病人再消融，target electrogram dispersion — RESTART trial</span> | Hummel J | [10.1016/j.hrthm.2026.01.042](https://doi.org/10.1016/j.hrthm.2026.01.042) |
| Cardiac deceleration/acceleration capacity demonstrates autonomic modulation in PAF undergoing PFA<br><span class="zh-sub">Cardiac DC/AC capacity 顯示陣發性 AF 接受 PFA 後自律神經 modulation</span> | Zhou L | [10.1016/j.hrthm.2025.12.043](https://doi.org/10.1016/j.hrthm.2025.12.043) |
| AF associated with VT or cardiac arrest in HFpEF<br><span class="zh-sub">HFpEF 病人 AF 與 VT 或 cardiac arrest 的關聯</span> | Rosen B | [10.1016/j.hrthm.2025.05.050](https://doi.org/10.1016/j.hrthm.2025.05.050) |
| Effect of biventricular pacing on VT recurrence after catheter ablation<br><span class="zh-sub">雙心室 pacing 對 catheter ablation 後 VT 復發的影響</span> | Togashi D | [10.1016/j.hrthm.2026.02.004](https://doi.org/10.1016/j.hrthm.2026.02.004) |
| Adjunctive SVC isolation to PVI in AF ablation: SR + meta-analysis of RCTs<br><span class="zh-sub">AF 消融加做 SVC isolation — RCT 系統回顧與 meta-analysis</span> | Alilou S | [10.1016/j.hrthm.2025.12.012](https://doi.org/10.1016/j.hrthm.2025.12.012) |
| Closure of secundum ASD and risk of incident and recurrent arrhythmia<br><span class="zh-sub">Secundum ASD 關閉與新發、復發性心律不整風險</span> | Havers-Borgersen E | [10.1016/j.hrthm.2026.01.024](https://doi.org/10.1016/j.hrthm.2026.01.024) |
| Racial / ethnic / socioeconomic / geographic inequities in catheter ablation for AF<br><span class="zh-sub">AF 導管消融在種族、族裔、社經、地理上的不均等</span> | Nathan A | [10.1016/j.hrthm.2026.01.030](https://doi.org/10.1016/j.hrthm.2026.01.030) |
| Ventricular pacing burden after pacemaker post-TAVR: cardiac damage staging<br><span class="zh-sub">TAVR 後植入 pacemaker 的心室 pacing burden — 心臟損傷分期</span> | Loewenstein I | [10.1016/j.hrthm.2025.11.037](https://doi.org/10.1016/j.hrthm.2025.11.037) |

{{< h3bi en="Circulation: Arrhythmia and Electrophysiology" zh="循環—心律電生理" meta="W17" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-04-24 | First-in-Human Clinical Experience with Focal PFA + RF Dual-Modality for Refractory LVS PVCs<br><span class="zh-sub">難治性 LVS PVC 用 focal PFA + RF dual-modality — first-in-human 臨床經驗</span> | Patil S | [10.1161/circep.126.014942](https://doi.org/10.1161/circep.126.014942) |
| 2026-04-20 | Quantitative Vector Screening to Improve Sensing and Reduce Inappropriate Shocks With S-ICD<br><span class="zh-sub">Quantitative vector screening 改善 S-ICD sensing + 降低不當放電</span> | Boyle T | [10.1161/circep.125.014581](https://doi.org/10.1161/circep.125.014581) |
| 2026-04-20 | Variability in Tissue Interface Temperature During PFA: Implications for Real-Time Contact Assessment<br><span class="zh-sub">PFA 過程中組織介面溫度的變異 — 對 real-time contact assessment 的意義</span> | Power J | [10.1161/circep.125.014310](https://doi.org/10.1161/circep.125.014310) |

{{< h3bi en="European Heart Journal" zh="歐洲心臟期刊" meta="W17" >}}

| 日期 | 標題 | 第一作者 | DOI |
|------|------|----------|-----|
| 2026-04-20 | Stereotactic arrhythmia radioablation for refractory VT: STOPSTORM.eu interim analysis<br><span class="zh-sub">Stereotactic 心律不整放射消融治療 refractory VT — STOPSTORM.eu 期中分析</span> | van der Pol L | [10.1093/eurheartj/ehag338](https://doi.org/10.1093/eurheartj/ehag338) |
| 2026-04-16 | CRT ± AVNA in HFrEF + AF: CAAN-AF trial<br><span class="zh-sub">HFrEF + AF 病人 CRT ± AV 結消融 — CAAN-AF trial</span> | Sanders P | [10.1093/eurheartj/ehag206](https://doi.org/10.1093/eurheartj/ehag206) |

{{< h3bi en="Resuscitation" zh="急救期刊" meta="2026-06 issue · 新一輪 publishing" >}}

| 標題 | 第一作者 | DOI |
|------|----------|-----|
| Effect of vascular access strategy on long-term outcomes in OHCA: RCT<br><span class="zh-sub">OHCA vascular access 策略對長期預後的影響 — RCT</span> | Vallentin M | [10.1016/j.resuscitation.2026.111087](https://doi.org/10.1016/j.resuscitation.2026.111087) |
| Healthcare costs of expedited transport vs standard care after OHCA: EVIDENCE RCT<br><span class="zh-sub">OHCA 後 expedited transport 對標準處置的醫療成本 — EVIDENCE RCT</span> | Jang K | [10.1016/j.resuscitation.2026.111083](https://doi.org/10.1016/j.resuscitation.2026.111083) |
| Long-term neurological outcomes after ECPR for refractory cardiac arrest: 14-year cohort<br><span class="zh-sub">難治性 cardiac arrest 接受 ECPR 後長期神經預後 — 14 年世代研究</span> | Pozzi M | [10.1016/j.resuscitation.2026.111095](https://doi.org/10.1016/j.resuscitation.2026.111095) |
| Minnesota Mobile Resuscitation Consortium ECMO truck: feasibility for prehospital ECPR<br><span class="zh-sub">Minnesota Mobile Resuscitation Consortium ECMO 卡車 — 院前 ECPR 可行性</span> | Rixmann K | [10.1016/j.resuscitation.2026.111089](https://doi.org/10.1016/j.resuscitation.2026.111089) |
| Effect of immunomodulation on post-cardiac arrest brain injury: SR + meta-analysis<br><span class="zh-sub">Immunomodulation 對 post-cardiac arrest 腦損傷的效果 — 系統回顧與 meta-analysis</span> | Dhingra S | [10.1016/j.resuscitation.2026.111091](https://doi.org/10.1016/j.resuscitation.2026.111091) |
| Geographic inequalities in prehospital critical care for cardiac arrest<br><span class="zh-sub">Cardiac arrest 院前 critical care 的地理不均等</span> | Boulton A | [10.1016/j.resuscitation.2026.111093](https://doi.org/10.1016/j.resuscitation.2026.111093) |
| Between-hospital variability in outcomes after cardiac arrest in a large clinical trial network<br><span class="zh-sub">Cardiac arrest 預後的院際差異（大型臨床試驗網路資料）</span> | Elmer J | [10.1016/j.resuscitation.2026.111090](https://doi.org/10.1016/j.resuscitation.2026.111090) |
| Outcomes of cardiac arrest occurred in detention: French nationwide study<br><span class="zh-sub">羈押場所內 cardiac arrest 的結果 — 法國全國性研究</span> | Gardes N | [10.1016/j.resuscitation.2026.111084](https://doi.org/10.1016/j.resuscitation.2026.111084) |
| Beyond the fourth ring: building a national ecosystem for cardiac arrest survivorship<br><span class="zh-sub">超越 chain of survival 第四環 — 為 cardiac arrest 存活者建立全國生態系</span> | Cerchiari E | [10.1016/j.resuscitation.2026.111081](https://doi.org/10.1016/j.resuscitation.2026.111081) |

{{< h3bi en="Journal of Electrocardiology" zh="心電圖期刊" meta="2026-07 issue · W17 publishing · 篩選 ECG-relevant" >}}

| 標題 | 第一作者 | DOI |
|------|----------|-----|
| Can an AI ECG algorithm improve diagnostic accuracy for acute coronary occlusion in canceled cath lab activations<br><span class="zh-sub">AI ECG 演算法能否在「Cath Lab 啟動又被 cancel」族群中提升 acute coronary occlusion 判讀</span> | Friedman B | [10.1016/j.jelectrocard.2026.154255](https://doi.org/10.1016/j.jelectrocard.2026.154255) |
| Spontaneous right bundle branch block during narrow complex tachycardia<br><span class="zh-sub">Narrow complex tachycardia 中自發性 RBBB</span> | Mondal S | [10.1016/j.jelectrocard.2026.154237](https://doi.org/10.1016/j.jelectrocard.2026.154237) |
| Clinical significance of fragmented QRS in isolated hypertension<br><span class="zh-sub">單純高血壓 fragmented QRS 的臨床意義</span> | Bekar L | [10.1016/j.jelectrocard.2026.154257](https://doi.org/10.1016/j.jelectrocard.2026.154257) |
| Ultra-high-frequency ECG quantifies divergent electrical phenotypes after LBB area pacing<br><span class="zh-sub">超高頻 ECG 量化 LBB area pacing 後不同的 electrical phenotype</span> | Yessenov T | [10.1016/j.jelectrocard.2026.154240](https://doi.org/10.1016/j.jelectrocard.2026.154240) |
| Early ECG repolarization changes associated with subclinical cancer therapy-related cardiac dysfunction in lymphoma<br><span class="zh-sub">淋巴瘤接受癌症治療後 — 亞臨床心臟功能異常的早期 ECG repolarization 變化</span> | Sarıhan M | [10.1016/j.jelectrocard.2026.154227](https://doi.org/10.1016/j.jelectrocard.2026.154227) |
| Impact of obesity on ECG waveforms across racial / ethnic groups<br><span class="zh-sub">肥胖對 ECG 波形的影響（依種族 / 族裔分層）</span> | Perry J | [10.1016/j.jelectrocard.2026.154263](https://doi.org/10.1016/j.jelectrocard.2026.154263) |
| ECG parameters and outcomes in cardiac amyloidosis with ICDs<br><span class="zh-sub">心臟 amyloidosis + ICD 病人的 ECG 參數與預後</span> | Lateef A | [10.1016/j.jelectrocard.2026.154241](https://doi.org/10.1016/j.jelectrocard.2026.154241) |
| 3D ECG: a new simplified view<br><span class="zh-sub">3D ECG — 一種新的簡化呈現方式</span> | Mc Loughlin M | [10.1016/j.jelectrocard.2026.154226](https://doi.org/10.1016/j.jelectrocard.2026.154226) |
| Atrial anatomy and function in advanced interatrial block ≥75 yo<br><span class="zh-sub">≥75 歲 advanced interatrial block 病人心房解剖與功能</span> | Bejarano-Arosemena R | [10.1016/j.jelectrocard.2026.154233](https://doi.org/10.1016/j.jelectrocard.2026.154233) |
| Chronic heart failure detection based on long-term RR interval dynamics<br><span class="zh-sub">用長期 RR interval 動態偵測慢性心衰</span> | Pukkila T | [10.1016/j.jelectrocard.2026.154242](https://doi.org/10.1016/j.jelectrocard.2026.154242) |
| Crochetage pattern in pediatric ostium secundum ASD with PH<br><span class="zh-sub">兒童 ostium secundum ASD + PH 的 Crochetage 波形</span> | Pérez-Riera A | [10.1016/j.jelectrocard.2026.154238](https://doi.org/10.1016/j.jelectrocard.2026.154238) |

### JACC-EP / Annals EM / Europace / JACC / JAMA Cardiology — 五本期刊本週空檔

W17 區間 CrossRef 抓不到新文。_本週這幾本期刊無新訊號_。

---

## 十二、台灣急診情境備註 {#tw}

四則跟台灣 ED 實務直接相關：

1. **AI ECG 進入 ED 的 first-line 而非 second-line**：Friedman / Sharkey / Queen of Hearts 的證據已經足夠，台灣醫學中心若仍只把 AI ECG 當「研究工具」是落後現狀[^friedman-aiecg][^sharkey-ai]。建議 ED 開始把 AI ECG（PMcardio / Queen of Hearts / 任何 commercially available 的 OMI model）放入 chest pain workflow，**特別是 cardiology 已經 cancel 你的 STEMI activation 時的 backup 第二意見**。

2. **LVAD + ICD 病人的 ECG 判讀流程要建檔**：UMEM Part 4 案例顯示這族群的 ECG 判讀獨立於一般 SVT/VT criteria[^umem-pt4]。台灣 LVAD bridge to transplant 病人逐年增加，ED 需要有 SOP——**收到 LVAD + ICD 病人的 wide-complex tachycardia 第一動作不是 cardioversion，而是 device interrogation + 跟 EP 通話**。

3. **CAAN-AF 對台灣 EP 端的 messaging**：HFrEF + permanent AF + CRT-D 病人加做 AV node ablation 的 default 路線停止[^caan-af]。

對 ED 的意義是：未來收到 CRT-D + AF + HF exacerbation 病人時，**不要假設他「應該」做 AVNA 還沒做**——回到 medical rate control 為基準。

4. **草藥 sodium channel 毒性處置**：Grauer 的 Delphinium denudatum 案例對應台灣的「附子、烏頭」中毒。記住：**lidocaine + magnesium，避免 amiodarone**[^grauer-aconitine]。台灣 ED 接到這類個案時，毒物科 / EP 會診同時啟動，不要等 ECG「變更糟」才做。

5. **PFA 不是絕對安全**：Patil 的 PFA + RF dual-modality 個案顯示，靠近冠脈做 PFA 仍有 reversible LAD vasospasm[^patil-pfa]。ED 接到 PFA 後 24-48 小時的胸痛 + ST 變化病人，**必須把 PFA-induced coronary spasm 列入鑑別**，不要只看 thromboembolism 一條。

---

## 十三、本週 Key Takeaways {#key}

1. **AI ECG 在「STEMI activation 已被 cancel」場景的 sensitivity 是 94.1% vs 人類 STEMI criteria 47.1%**（Friedman J Electrocardiol 2026-04-09）[^friedman-aiecg]。該怎麼做：建議把 AI ECG 作為 cancel 後的第二意見，特別是 ED 醫師對 cancel 結果有疑慮時。

2. **CAAN-AF 隨機試驗顯示 HFrEF + permanent AF + CRT-D 加做 AV 結 ablation 沒有降低死亡或 HF 住院**（Sanders EHJ 2026-04-16，IRR 1.16, 95% CI 0.60-2.24, futility 提早終止）[^caan-af]。該怎麼做：未來不要預設 CRT-D + AF 病人「應該」要 AVNA；個別化決策回歸 case-by-case。

3. **STOPSTORM.eu 證實 STAR 在 refractory VT 把 VT burden 中位數降 80%、12 個月生存 77%**（van der Pol EHJ 2026-04-20）[^stopstorm]。該怎麼做：refractory VT storm 病人 catheter ablation 後仍復發者，主動詢問是否有 STAR 轉介路徑（台灣目前少數醫學中心可執行）。

4. **LVAD + AICD 病人的 wide-complex tachycardia 不能用一般 ECG criteria 判讀**（ECG Weekly UMEM Part 4 2026-04-20）[^umem-pt4]。該怎麼做：第一動作是 device interrogation + EP 諮詢，不是 cardioversion。

5. **草藥 sodium channel 毒性（aconitine-like）處置 = lidocaine + magnesium，避免 amiodarone**（Grauer JACC Case Reports 2026-04-08）[^grauer-aconitine]。該怎麼做：ED 急救車區可常備 lidocaine 與 magnesium，遇到附子 / 烏頭中毒個案時毒物科同時會診。

---

_下週（W18）預計延續追蹤：CAAN-AF 後續的 EP 社群討論、STOPSTORM.eu 完整論文與 STAR 適應症在台灣的可行性、Vallentin 的 OHCA vascular access RCT 完整 abstract 公開、Apple Watch 在兒童 arrhythmia 的後續 multicenter validation、Magnus Nossen 是否再發 T wave inversion 系列第三集。_

---

## 引用 {#refs}

[^magnus-04-23]: Magnus Nossen — Dr Smith ECG Blog 2026-04-23 "How would you interpret these T wave inversions? And what is an 'innocent bystander' on angiogram?"：「I was reviewing ECGs at my computer when I came across today's case」 → [跳到原文](https://drsmithsecgblog.com/how-would-you-interpret-these-t-wave-inversions-and-what-is-an-innocent-bystander-on-angiogram/#:~:text=I%20was%20reviewing%20ECGs%20at%20my%20computer%20when%20I%20ca)

[^magnus-04-27]: Magnus Nossen — Dr Smith ECG Blog 2026-04-27 "What do you make of these T wave inversions?"：「overweight 77-year-old male with COPD and Stage 5 CKD」 → [跳到原文](https://drsmithsecgblog.com/what-do-you-make-of-these-t-wave-inversions/#:~:text=overweight%2077-year-old%20male%20with%20COPD%20and%20Sta)

[^kechter-normal]: Avery Kechter (Cork) — Dr Smith ECG Blog 2026-04-17 "Signed off as 'normal, no concern'"：「From Avery Kechter in Cork, Ireland」 → [跳到原文](https://drsmithsecgblog.com/signed-off-as-normal-no-concern/#:~:text=From%20Avery%20Kechter%20in%20Cork%2C%20Ireland)

[^friedman-aiecg]: Friedman BS, Malloy-Post R, Smith SW, Meyers HP — J Electrocardiol 2026-04-09 "Can an artificial intelligence electrocardiogram algorithm improve diagnostic accuracy for acute coronary occlusion in canceled cath lab activations?"：「STEMI criteria demonstrated lower sensitivity for OMI as compared to the AI algorithm (47.1% vs 94.1%, p = 0.005)」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41967390/#:~:text=STEMI%20criteria%20demonstrated%20lower%20sensitivity)

[^sharkey-ai]: Sharkey SW, Herman R, Witt DR, Aguirre F et al. — JACC Advances 2026-04-01 "Performance of Artificial Intelligence-Powered ECG Analysis in Suspected ST-Segment Elevation Myocardial Infarction"：「model correctly identified 93.8% as OMI(+)... The AUCROC was 0.952 (95% CI: 0.924-0.966)」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41863986/#:~:text=model%20correctly%20identified%2093.8%25%20as%20OMI%28%2B%29.%20The%20mo)

[^ecgw-cath-0427]: ECG Weekly (Amal Mattu) 2026-04-27 "The Cath Lab Was Activated, But Something Didn't Fit"：「prehospital ECG showing apparent inferior ST elevation and activate the cath lab, but one feature on the tracing makes the receiving physician hesitate」 → [跳到原文](https://ecgweekly.com/weekly-workout/the-cath-lab-was-activated-but-something-didnt-fit/#:~:text=prehospital%20ECG%20showing%20apparent%20inferior%20ST%20)

[^hamm-annem]: Hamm RS, Meyers HP, Smith SW — Annals of Emergency Medicine 2026-04-01 "Chest Pain With Subtle But Lifesaving ECG Findings"：全文 abstract 未公開，作者為 OMI paradigm 核心團隊，OMI 判讀進入 AnnEM mainstream EM 期刊 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41864639/)

[^umem-pt4]: ECG Weekly (Amal Mattu) 2026-04-20 "UMEM Cases, Part 4: When the Computer Misses the Rhythm and Flutter Fakes a STEMI"：「LVAD, chronic amiodarone therapy, and an AICD presents with palpitations. His ECG shows a regular wide-complex tachycardia」 → [跳到原文](https://ecgweekly.com/weekly-workout/umem-cases-part-4-when-the-computer-misses-the-rhythm-and-flutter-fakes-a-stemi/#:~:text=LVAD%2C%20chronic%20amiodarone%20therapy%2C%20and%20an%20AICD)

[^restart-trial]: Hummel J et al. — Heart Rhythm 2026-05 "Reablation of atrial fibrillation targeting electrogram dispersion in patients with isolated veins: The RESTART trial" → [跳到原文](https://doi.org/10.1016/j.hrthm.2026.01.042)（abstract 未公開）

[^rosen-hfpef]: Rosen B, Kazemian P — Heart Rhythm 2026-05 "Atrial fibrillation is associated with ventricular tachyarrhythmias or cardiac arrest in heart failure with preserved ejection fraction" → [跳到原文](https://doi.org/10.1016/j.hrthm.2025.05.050)（abstract 未公開）

[^mondal-rbbb]: Mondal S, Muslim N — J Electrocardiol 2026-07 "Spontaneous right bundle branch block during narrow complex tachycardia"：Coumel's law — BBB 出現後 RP interval 延長提示 accessory pathway 在 BBB 同側 → [跳到原文](https://doi.org/10.1016/j.jelectrocard.2026.154237)（abstract 未公開）

[^perez-crochetage]: Pérez-Riera A et al. — J Electrocardiol 2026-07 "A child with a large ostium secundum atrial septal defect, pulmonary hypertension, and the characteristic Crochetage electro-vectorcardiographic pattern"：Crochetage sign（下壁 R 波 notching）在兒童 ASD + PH 的具體呈現 → [跳到原文](https://doi.org/10.1016/j.jelectrocard.2026.154238)

[^caan-af]: Sanders P, Ariyaratnam J et al. — European Heart Journal 2026-04-16 "Cardiac resynchronization therapy with or without atrioventricular node ablation in atrial fibrillation: the CAAN-AF trial"：「Secondary outcomes, including cardiovascular mortality (odds ratio, 1.93; 95% CI 0.60–6.20), unplanned hospitalizations... also showed no significant differences」 → [跳到原文](https://doi.org/10.1093/eurheartj/ehag206#:~:text=Secondary%20outcomes%2C%20including%20cardiovascular%20)

[^stopstorm]: van der Pol L, Tomasik B et al. — European Heart Journal 2026-04-20 "Stereotactic arrhythmia radioablation for refractory ventricular tachycardia: the STOPSTORM.eu study"：「median VT episode burden was reduced by 80% after STAR」 → [跳到原文](https://doi.org/10.1093/eurheartj/ehag338#:~:text=median%20VT%20episode%20burden%20was%20reduced%20by%2080%25%20after%20STAR)

[^patil-pfa]: Patil S, Liu X et al. — Circulation: Arrhythmia and Electrophysiology 2026-04-24 "First-in-Human Clinical Experience with Focal Pulsed Field and Radiofrequency Dual-Modality Ablation for Treatment Refractory Left Ventricular Summit PVCs"：「Transient, reversible LAD vasospasm was observed during PF delivery in 2 of 5 cases who underwent PF application adjacent to a coronary artery」 → [跳到原文](https://doi.org/10.1161/circep.126.014942#:~:text=Transient%2C%20reversible%20LAD%20vasospasm%20was%20obser)

[^boyle-sicd]: Boyle T, Callans D et al. — Circulation: Arrhythmia and Electrophysiology 2026-04-20 "Quantitative Vector Screening to Improve Sensing and Reduce Inappropriate Shocks With the Subcutaneous Implantable Cardioverter Defibrillator"：「primary end point of time to first inappropriate shock or under-sensed ventricular arrhythmia was longer in the QVS arm (log-rank, P=0.02)」 → [跳到原文](https://doi.org/10.1161/circep.125.014581#:~:text=primary%20end%20point%20of%20time%20to%20first%20inappropri)

[^hrs-vt-ablation]: HRS 2026-04-26/27 — 三條 abstract：Ultra-Low Temperature Ablation for VT（multicenter）、VINTAGE first-in-human（intramyocardial navigation）、Sphere-9 VT 6-month outcomes（dual-energy lattice-tip）；均為 HRS 2026 學術大會公告 → [跳到原文](https://www.hrsonline.org/education/hrs-2026)（待 Bear 補個別 abstract URL）

[^hrs-applewatch]: HRS 2026-04-25 — "Apple Watch Captures More Pediatric Arrhythmia Events Than Traditional Patch Monitors"；HRS 2026 學術大會公告 → [跳到原文](https://www.hrsonline.org/education/hrs-2026)（待 Bear 補個別 abstract URL）

[^grauer-aconitine]: Rassani N, Grauer K — JACC Case Reports 2026-04-08 "Sodium Channel-Mediated Ventricular Arrhythmia After Delphinium denudatum Ingestion Managed Conservatively in a Resource-Limited Setting"：「intravenous lidocaine and magnesium sulfate, resulting in rapid suppression of ventricular arrhythmias... Early sodium-channel blockade with lidocaine and structured cardiac monitoring can be lifesaving」 → [跳到原文](https://pubmed.ncbi.nlm.nih.gov/41746248/#:~:text=intravenous%20lidocaine%20and%20magnesium%20sulfate%2C%20)

[^sarihan-chemo]: Sarıhan M et al. — J Electrocardiol 2026-07 "Early electrocardiographic repolarization changes are associated with subclinical cancer therapy-related cardiac dysfunction in lymphoma patients"：機器學習找癌症治療後亞臨床 ECG 變化 → [跳到原文](https://doi.org/10.1016/j.jelectrocard.2026.154227)（abstract 未公開）

[^vallentin-io]: Vallentin M, Holmberg M et al. — Resuscitation 2026-06 "Effect of vascular access strategy on long-term outcomes in patients with out-of-hospital cardiac arrest: a randomised clinical trial"：OHCA vascular access RCT long-term outcomes → [跳到原文](https://doi.org/10.1016/j.resuscitation.2026.111087)（abstract 未公開）

[^pozzi-ecpr]: Pozzi M et al. — Resuscitation 2026-06 "Long-term neurological outcomes after extracorporeal cardiopulmonary resuscitation for refractory cardiac arrest: a 14-year single-centre cohort study"：14 年 ECPR long-term neurological outcomes → [跳到原文](https://doi.org/10.1016/j.resuscitation.2026.111095)（abstract 未公開）

[^rixmann-ecmo]: Rixmann K et al. — Resuscitation 2026-06 "The Minnesota Mobile Resuscitation Consortium ECMO truck: a feasibility study for ECPR in refractory out-of-hospital cardiac arrest"：prehospital ECPR ECMO 卡車可行性 → [跳到原文](https://doi.org/10.1016/j.resuscitation.2026.111089)（abstract 未公開）

[^boulton-geo]: Boulton A et al. — Resuscitation 2026-06 "Geographic inequalities in prehospital critical care for cardiac arrest: a spatial analysis of deprivation and service configuration"：地理與社經不均等分析 → [跳到原文](https://doi.org/10.1016/j.resuscitation.2026.111093)（abstract 未公開）

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。點「看完整 →」進該層 archive 看時間流。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">99<span class="unit">篇本週新文</span></div>
<ul>
<li><span class="li-en">ECG Weekly (Mattu) <strong>20</strong></span><span class="li-zh">Mattu 心電圖週刊（影音教學）</span></li>
<li><span class="li-en">ACC <strong>21</strong></span><span class="li-zh">美國心臟學會官方</span></li>
<li><span class="li-en">LITFL <strong>12</strong> · Core EM <strong>11</strong></span><span class="li-zh">澳洲急診維基 · Core 急診部落格</span></li>
<li><span class="li-en">Dr Smith <strong>10</strong> · HRS <strong>8</strong></span><span class="li-zh">Dr Smith 心電圖部落格 · 美國心律學會</span></li>
<li><span class="li-en">EMCrit <strong>6</strong> · ESC <strong>6</strong> · REBEL EM <strong>4</strong></span><span class="li-zh">EMCrit 重症急診 · 歐洲心臟學會 · REBEL 急診部落格</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">4<span class="unit">篇獨立文（8 次匹配）</span></div>
<ul>
<li><span class="li-en">Smith / Meyers AI ECG <strong>3</strong> 篇</span><span class="li-zh">Hennepin OMI 團隊 AI 心電圖三篇</span></li>
<li><span class="li-en">Ken Grauer · Sodium ch. VT</span><span class="li-zh">鈉離子通道相關室性心搏過速</span></li>
<li><span class="li-en">Jesse McLaren · cardiac syncope</span><span class="li-zh">心因性昏厥辨識</span></li>
<li><span class="li-en">Aslanger / Frick / Ghali — 0</span><span class="li-zh">三人本週無新作</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">59<span class="unit">篇候選</span></div>
<ul>
<li><span class="li-en">J Electrocardiology <strong>25</strong></span><span class="li-zh">心電圖期刊</span></li>
<li><span class="li-en">Resuscitation <strong>16</strong></span><span class="li-zh">急救期刊</span></li>
<li><span class="li-en">Heart Rhythm <strong>13</strong></span><span class="li-zh">心律期刊</span></li>
<li><span class="li-en">Circulation-AE <strong>3</strong> · EHJ <strong>2</strong></span><span class="li-zh">循環—心律電生理 · 歐洲心臟期刊</span></li>
<li><span class="li-en">JACC-EP / Annals EM / Europace / JACC / JAMA Card — 0</span><span class="li-zh">五本期刊本週空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count"><span class="pending">待 setup</span></div>
<ul>
<li><span class="li-en">@smithECGBlog @PendellM @ekgpress</span><span class="li-zh">Stephen Smith · Pendell Meyers · Ken Grauer</span></li>
<li><span class="li-en">@AslangerE @ecgcases @EM_RESUS</span><span class="li-zh">Emre Aslanger · Jesse McLaren · Sam Ghali</span></li>
<li><span class="li-en">@willyhfrick @RobertHermanMD</span><span class="li-zh">Willy Frick · Robert Herman</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>

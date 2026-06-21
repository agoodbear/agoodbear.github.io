---
title: "aVR 會說謊的一週：Mattu 6-15 與 Smith 6-19 兩張『廣泛壓低＋aVR/III 抬高』ECG——不是左主幹阻塞，是供需失衡／Smith 6-17 把 OMI 推成『及早辨識』＋6-10『簡單的錯覺』戳破 STEMI 門檻／AVANT GUARD：PFA 一線治持續性 AF"
subtitle: "_W24 的母題是『症狀會說謊』；W25 換 ECG 自己說謊——aVR 抬高配廣泛 ST 壓低，最像『左主幹大梗塞』，偏偏多數不是急性阻塞。本週主線：認得這個 pattern，更要認得它『不是什麼』。_"
slug: "2026-W25"
week: "2026-W25"
weekRange: "2026-06-15 — 2026-06-21"
date: 2026-06-21T10:00:06+08:00
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

本週主線是一個最會騙人的 ECG pattern：aVR（常伴 V1）的 ST 上升，配上其他導程廣泛的 ST 壓低。它幾乎每次都會被脫口而出叫成「左主幹阻塞」，但真相往往相反。Mattu 6-15 與 Smith 6-19 在同一週各丟一張這類圖，Smith 又在 6-17 把 OMI 從「典範之爭」推進到「及早辨識」的臨床號召。W24 教我們別被症狀說謊，W25 要學的是：別被 ECG 的表面說謊。

**第一，aVR 抬高配廣泛壓低，多半不是急性阻塞。** Mattu 6-15〈Three High Risk ECGs〉是一位 34 歲、胸痛轉左臂、冒冷汗、有高血脂與早發冠心病家族史的男性，ECG 是 aVR 與 V1 的 ST 上升加上廣泛 ST 壓低，他直接把問題擺上檯面：這是不是「左主幹阻塞，不然就要證明它不是」？[^mattu-three-ecg-06-15] Smith 6-19 則是一位 VF（心室顫動）心跳停止、電擊多次後的男性，圖上同樣是廣泛 ST 壓低伴 III／aVR 方向的抬高[^smith-vf-06-19]。**<mark>這個 pattern 的本質是瀰漫性心內膜下缺血、是供需失衡，而不是某一條冠狀動脈的急性完全阻塞</mark>**。

**第二，OMI 從『典範』走向『及早辨識』。** Smith 6-17 新論文〈OMI: time for early recognition〉把 OMI 從概念之爭推成臨床行動號召[^smith-omi-early-06-17]；6-10 Frick 與 Smith〈The illusion of simplicity〉用一位 65 歲、被貼上 NSTEMI、延誤 15 小時才確認 LAD 完全血栓阻塞的男性，戳破 STEMI 毫米門檻的「簡單錯覺」——**<mark>標準 STEMI 準則會漏掉高達 38% 的 LAD 阻塞</mark>**[^frick-illusion-06-10]。Smith 6-15 那位兩小時胸痛的六旬男性，正是這套邏輯要救的人[^smith-2hr-06-15]。

**第三，電生理、AI 與急救各有新訊號。** EP 端 HRS The Lead Ep 155 討論 AVANT GUARD——以脈衝場消融（PFA）對比抗心律不整藥物，作為持續性心房顫動的「一線」治療[^hrs-avantguard-06-11]；AI 端 ESC 把 AI-ECG 用在「超音波前分流」、決定誰該優先排心臟超音波[^esc-preecho-06-12]；急救端 Smith 6-19 的 VF 心跳停止案例，把「心跳停止後的 ECG 怎麼讀」重新攤開[^smith-vf-06-19]。

本週值得在晨會帶過的五則：

- ECG Weekly／Mattu 6-15：34 歲，aVR＋V1 抬高、廣泛壓低——是左主幹阻塞嗎？
- Dr Smith 6-19：50 多歲 VF 心跳停止，廣泛 ST 壓低伴 lead III 抬高
- Dr Smith 6-15：60 多歲、兩小時胸痛的 subtle OMI
- Smith／Avdikos 6-17：〈OMI: time for early recognition〉（PMID 42307871）
- HRS The Lead Ep 155：AVANT GUARD——PFA vs 抗心律不整藥一線治持續性 AF

---

## 一、OMI / 急性冠症 {#omi}

W23 的 OMI 主線在文獻、W24 在「無胸痛」的症狀，W25 則落在 ECG 本身——一張看起來最兇、最像「左主幹大梗塞」、卻最容易被反射動作害到的圖。本週兩位作者不約而同丟出同一個 pattern，正好把它釘在檯面上講清楚。

### Mattu 6-15 — 34 歲：aVR 與 V1 抬高、廣泛壓低，是左主幹嗎？

**ECG Weekly／Amal Mattu 2026-06-15〈Three High Risk ECGs and the Right Next Move〉**[^mattu-three-ecg-06-15]：一位 34 歲男性因急性胸痛轉左臂、冒冷汗到院，有高血脂與早發冠心病家族史，ECG 顯示 aVR 與 V1 的 ST 上升、伴隨其他導程廣泛的 ST 壓低。Mattu 把三個問題直接攤開：這是不是「左主幹阻塞，否則就要證明它不是」？還有哪些情況會長出同一張圖？病史又該怎麼改變你的下一步？

這個 pattern 的判讀，是急診最容易「答對名字、做錯事」的地方。aVR 的 ST 抬高加上廣泛壓低，反映的是瀰漫性心內膜下缺血——也就是整顆心肌「需求大於供給」的訊號，背後常見的是顯著的左主幹狹窄或三條血管的嚴重病變，但也同樣可能是貧血、低血壓、缺氧、快速性心律、消化道出血、敗血症等「非阻塞」的供需失衡。

教學點是：**<mark>看到 aVR 抬高＋廣泛壓低，先想供需失衡的瀰漫性心內膜下缺血，不要反射性把它當成左主幹『阻塞』的 STEMI 去硬啟動導管室</mark>**。處置的第一拍是穩定病人、找出並矯正可逆原因，再安排「及早（urgent）而非『即刻硬上（emergent）』」的血管攝影——除非缺血頑固或血流動力學不穩。

這意味著要記住一條對照：**<mark>真正的急性左主幹完全阻塞，病人多半是前側壁 ST 抬高加上心因性休克或猝死，而不是這張還能站著講話、廣泛壓低的圖</mark>**。把「廣泛壓低」誤當成「左主幹被塞死」，會把一個該先穩定、查可逆原因的病人，推進一個錯的時間軸。

### Smith 6-15 — 60 多歲、兩小時胸痛

**Dr. Smith's ECG Blog 2026-06-15〈60-something male with 2 hours of chest pain〉**[^smith-2hr-06-15]：一位六旬男性因兩小時胸痛到院，Smith 一貫的問法是「你看到什麼？」——這類案例的價值，幾乎都不在那條最戲劇化的抬高，而在 subtle（細微）的、不到毫米門檻卻指向急性阻塞的 OMI 徵象。

臨床上的 takeaway 是：對胸痛病人，調出 prior ECG 比對、做 serial（連續）追蹤、必要時床邊心臟超音波看 regional wall motion，才是把 subtle OMI 撈出來的標準動作。6-1 OMI 綜述把這條講得很白——**<mark>OMI 的 ECG 徵象可把 STEMI 準則的敏感度翻倍、又維持高特異度</mark>**[^omi-review-06-01]，但前提是你真的去比、去追，而不是看一張就簽掉。

對急診端的意義在於：同一週兩張圖剛好示範了 OMI 判讀的兩端——一端（Mattu 34 歲）是「看起來太兇、別過度反應」，另一端（Smith 六旬）是「看起來還好、別漏掉」。兩者共用同一個底層原則：把 ECG 放回臨床脈絡，而不是讓某條 ST 段替你做決定。

{{< bottomline >}}
OMI 端本週是「ECG 的兩種說謊方式」：Mattu 6-15 的 aVR／廣泛壓低看起來太兇（其實多是供需失衡，不是急性左主幹阻塞），Smith 6-15 的 subtle OMI 看起來還好（其實需要 prior／serial／超音波去撈）[^mattu-three-ecg-06-15][^smith-2hr-06-15][^omi-review-06-01]。給台灣 ED 一句：**aVR 抬高＋廣泛壓低先穩定、查可逆原因；胸痛圖看似正常先比 prior、追 serial。**
{{< /bottomline >}}

---

## 二、節律與電生理 {#arr}

W24 的 EP 端是「成效尺規」之爭（以 AF 負荷量取代二元復發）。W25 The Lead 接著推出第 155 集，把問題從「怎麼評斷消融」往前推到「消融該不該、且能不能當第一線」——而且這次的對象是更難搞的持續性心房顫動。

### HRS The Lead Ep 155 — AVANT GUARD：PFA vs 抗心律不整藥，一線治持續性 AF

**HRS（美國心律學會）The Lead Episode 155，討論《AVANT GUARD》前瞻、隨機、多中心全球研究，比較脈衝場消融（PFA）與抗心律不整藥物作為持續性心房顫動一線治療，2026-06-11**[^hrs-avantguard-06-11]：過去多數「一線消融」的證據（如 EARLY-AF、STOP-AF First）談的都是陣發性 AF；AVANT GUARD 的設計把戰線拉到持續性 AF，且把比較武器設定為 PFA（脈衝場消融）這種以非熱能、組織選擇性著稱的新一代術式。

這個提問之所以重要，是因為持續性 AF 一向被視為消融成效較差、復發較多的族群，傳統路徑多半是「先試藥、撐不住再轉消融」。把 PFA 直接擺到「一線」位置去和藥物對打，**<mark>等於把『早期節律控制』的版圖從陣發性 AF 往持續性 AF 延伸</mark>**——若方向成立，會改寫新發持續性 AF 病人的轉介時機。

對急診端的意義是延遲但真實的：愈來愈多持續性 AF 病人會「已經做過 PFA」或「正在等排消融」出現在你面前。s/p ablation 的病人因心悸回診、抓到一次短陣 AF，仍應放回負荷量脈絡看（見 W24），別急著說失敗；而對反覆發作、症狀明顯的新發持續性 AF，「早一點把病人接到電生理門診」會比一路試藥更貼近現在的趨勢。本集是針對試驗設計與概念的討論，實際結果仍待正式發表，臨床決策請以最終數據與在地指引為準。

{{< bottomline >}}
EP 端本週是「一線消融往持續性 AF 延伸」：HRS The Lead Ep 155 討論 AVANT GUARD，把 PFA 推上持續性 AF 的一線位置與藥物對打[^hrs-avantguard-06-11]。給急診的一句：**面對症狀明顯的新發持續性 AF，早一點轉介電生理，可能比一路試藥更合時宜。**
{{< /bottomline >}}

---

## 三、AI ECG / 穿戴 {#ai}

W24 的 AI 端是「AI-ECG 機會性篩結構性疾病」（心衰、心臟類澱粉）。W25 把鏡頭再往前移一步：AI-ECG 不只判讀「這張急不急」、也不只篩「藏了什麼病」，而是拿來決定「誰該先排檢查」。

### ESC — AI-ECG 用於「超音波前分流」，把影像資源花在刀口上

**ESC（歐洲心臟學會）〈AI-augmented ECG for pre-echocardiography triage: a tool to optimize cardiac imaging utilization〉，2026-06-12**[^esc-preecho-06-12]：這篇把 AI-ECG 放在「心臟超音波之前」當分流工具——用一張便宜、即時的 ECG，預測誰最可能有需要超音波處理的結構問題，藉此把有限的影像資源排到對的人身上。

這條路線對急診特別對味。**<mark>AI-ECG 的角色正從『判讀這張 ECG 急不急』，延伸到『幫你排誰該先做心臟超音波』</mark>**——在一個喘、胸悶、暈厥病人塞滿、而 echo 時段又有限的急診，這種「分流式」用法的回饋是即時的。

### ESC — Rlign：讓 AI-ECG 的判讀「講得出理由」

**ESC〈The Rlign algorithm: heart rate–corrected ECG alignment for explainable classification and clustering〉，2026-04-29**[^esc-rlign-04-29]：這篇處理 AI-ECG 一直被詬病的黑箱問題——透過心率校正的波形對齊，讓分類與分群「可被解釋」。

實務意義是：可解釋性正是 AI-ECG 能不能進臨床流程的關鍵。一個會給出綠燈紅燈、卻說不出為什麼的模型，在「要不要 activate」這種高風險決策上很難被信任；對齊與可解釋的方法，是把 AI-ECG 從「研究展示」帶向「床邊可用」的必要工程。它在乾淨 baseline 上最強、在「有故事的心臟」上容易被病史帶偏（見 W23），所以仍需超音波與臨床確認——AI 是把人帶到對的檢查前，而不是取代那個檢查。

{{< bottomline >}}
AI 端本週是「AI-ECG 當分流器」：ESC 把它用在超音波前分流、又用 Rlign 補上可解釋性[^esc-preecho-06-12][^esc-rlign-04-29]。給急診的一句：**把 AI-ECG 想成『幫你排誰先做 echo』的工具，而不是取代 echo 的判官。**
{{< /bottomline >}}

---

## 四、Resus / 急救 {#res}

W24 的 Resus 端是 post-ROSC 升壓藥之爭（正腎上腺素 vs 腎上腺素）。W25 沒有新的大型試驗，但 Smith 6-19 的 VF 心跳停止案例，把另一個天天上演的問題攤開：心跳停止救回來之後，那張廣泛壓低的 ECG 到底該怎麼讀。

### Smith 6-19 — VF 心跳停止後：廣泛 ST 壓低伴 lead III 抬高

**Dr. Smith's ECG Blog 2026-06-19〈50-something with VF arrest – why is there diffuse ST depression with ST Elevation in lead III?〉**[^smith-vf-06-19]：一位 50 多歲、無病史的男性胸痛後心跳停止，多次電擊後恢復循環，ECG 呈現廣泛 ST 壓低、伴隨 lead III／aVR 方向的 ST 上升。標題本身就是教學題：這張圖到底是某條冠狀動脈急性阻塞的證據，還是心跳停止這件事本身的後遺?

這正是第一章那個 aVR pattern 的「急救版」。**<mark>心跳停止後的廣泛 ST 壓低，很可能是停止與急救過程造成的全心供需失衡與兒茶酚胺風暴，而不是非有一條 culprit（罪犯血管）不可</mark>**——當然，胸痛先行、可電擊節律的病人，急性冠症仍是高度可能，兩者要並陳，而不是擇一相信。

對急診端的意義是：post-ROSC 的單張 ECG 不該一個人說了算。穩定病人、做 serial ECG、用床邊超音波看 regional wall motion、把臨床脈絡（胸痛史、節律、血流動力學）一起讀進去，才是決定「即刻送導管室 vs 先穩定再評估」的依據。這也呼應 ECG Weekly 近期一連串 post-arrest／post-ROSC 的案例：心跳停止後的 ECG，最忌諱被電腦判讀或單一 ST 段牽著走。

{{< bottomline >}}
Resus 端本週由一張圖撐起：Smith 6-19 的 VF 心跳停止案例，把「post-ROSC 廣泛 ST 壓低該怎麼讀」攤開——多為全心供需失衡，未必有 culprit[^smith-vf-06-19]。給急診的一句：**心跳停止後的廣泛壓低，先穩定、追 serial、看 echo，再決定要不要即刻送導管室。**
{{< /bottomline >}}

---

## 五、教學案例精選 {#tch}

本週的教學主軸只有一個 pattern、兩個方向：把「aVR 抬高＋廣泛壓低」做成一份晨會教材，再用一個 STEMI 漏診案例，提醒「準則簡單」是一種錯覺。

### 把「aVR／V1 抬高＋廣泛壓低」做成一份晨會差異診斷

本週 Mattu 6-15 與 Smith 6-19 兩張圖，剛好是同一 pattern 的「太兇」與「救回來之後」兩種版本[^mattu-three-ecg-06-15][^smith-vf-06-19]，併在一起就是現成的晨會教材。建議的講法不是先給答案，而是先投出圖、要住院醫師講完整判讀，再揭曉差異診斷清單：

- **血管端**：顯著左主幹狹窄、嚴重三條血管病變（兩者都是供需失衡，不是單一急性完全阻塞）。
- **次發供需失衡**：貧血、消化道出血、低血壓、缺氧、快速性心律、敗血症、心跳停止後狀態。
- **要對照的反面教材**：真正的急性左主幹完全阻塞——前側壁 ST 抬高、心因性休克或猝死，長相完全不同。

教學點是：**<mark>把「左主幹阻塞」四個字留給休克或瀕死的病人；血流動力學穩定、還能對答的廣泛壓低，第一拍是治可逆原因，而不是硬啟動導管室</mark>**。這條反射，比背下「aVR 是 STEMI-equivalent」這種已被新近文獻與指引往回修的舊口訣有用得多。

### Frick／Smith 6-10 — 65 歲被叫做 NSTEMI、延誤 15 小時的 LAD 阻塞

**Frick WH、Smith SW〈The illusion of simplicity: Diagnostic inconsistencies within the STEMI paradigm〉，Journal of Electrocardiology（心電圖學期刊），2026-06-10（PMID 42287922）**[^frick-illusion-06-10]：一位 65 歲男性急性胸痛，初始 ECG 對 LAD（左前降支）具特異性，卻不符合 STEMI 的毫米門檻，於是被歸成 NSTEMI；**<mark>管理因此被延誤，血管攝影在到院 15 小時後才做，結果是 LAD 的急性完全血栓阻塞</mark>**。

這意味著「STEMI 準則很簡單、很一致」是一種錯覺：論文指出標準準則會漏掉高達 38% 的 LAD 阻塞，而專家判讀與 AI 模型的敏感度都遠高於此。臨床上的 takeaway 是——當 ECG 對某條血管「有話要說」、troponin 也在動，卻卡在毫米門檻外時，該被質疑的是門檻，不是病人。把這個案例與本週的 aVR 教材併讀，正好湊成 OMI 思維的一體兩面：別把不夠兇的當成沒事，也別把看起來最兇的當成阻塞。

---

## 六、追蹤作者本週新作 {#aut}

本週追蹤作者群（Smith、Meyers、Grauer、Aslanger、McLaren、Frick）在 W25 視窗內（6-15 — 6-21）有一篇新的 PubMed 索引論文，作者正是 Stephen Smith。

### Avdikos G、Smith SW — 《OMI: time for early recognition and management of acute coronary occlusion》

**Avdikos G、Smith SW〈OMI: time for early recognition and management of acute coronary occlusion〉，The Egyptian Heart Journal（埃及心臟期刊），2026-06-17（PMID 42307871）**[^smith-omi-early-06-17]：標題就是這篇的立場——OMI 已經不只是「典範該不該換」的學理辯論，而是「現在就該及早辨識、及早處置急性冠狀動脈阻塞」的臨床號召。它與 6-1 那篇〈Diagnosis of occlusion myocardial infarction〉綜述（PMID 41581009，屬 W23）一脈相承，把論述從「定義」推向「行動」。

這也呼應追蹤作者群一貫的方法論：**<mark>OMI 是臨床診斷、第一套 troponin 的敏感度與預測值都有限</mark>**[^omi-review-06-01]，所以辨識要靠臨床症狀、ECG 徵象與床邊超音波的組合，而不是等一個會遲到的數字。

值得一併記下的是，同一對作者群的 Frick／Smith〈The illusion of simplicity〉（6-10，PMID 42287922）已在本期第五章「教學案例」深入處理[^frick-illusion-06-10]；Meyers、Grauer、McLaren、Aslanger 等人本週無新的視窗內索引論文（Aslanger 的 IC-ECG 案例報告 5-06 前週已收）。

---

## 七、媒體動態 {#med}

本週學會與大眾媒體端（ACC／ESC／AHA）時效性內容 turnover 偏低，無重磅新稿。兩則背景訊號值得一筆帶過。

其一，**ACC（美國心臟學院）〈AI-Enabled Clinician: Using AI-Enabled ECG to Improve Care Delivery〉系列在 5-21／5-28 持續上架**[^acc-aiecg-05-28]，與本期第三章 ESC 的「AI-ECG 分流」同調——學會端正把 AI-ECG 的敘事，從「能不能判讀」轉向「怎麼嵌進照護流程」。

其二，**AHA（美國心臟協會）的衛教常青頁（暈厥、心跳停止）持續在 feed 中循環**[^aha-syncope]，本身不是新聞，但反映大眾端對「暈厥／猝死」的關注度——對照本報 W24 的暈厥主線，這類頁面常是病人與家屬的第一手資訊，值得知道它們長什麼樣、好在衛教時對齊。

---

## 八、文獻速報 {#ref}

本週的期刊端在 AF（心房顫動）篩檢上有一組值得對照的訊號：穿戴／貼片把「找到更多 AF」變得容易，但「找到」是否等於「改善預後」仍是兩回事。

其一，**ESC〈Screening for atrial fibrillation using an ECG monitoring patch among the elderly population in rural China: a single-arm study〉，2026-06-08**[^esc-afpatch-06-08]：在中國農村高齡族群用 ECG 貼片做 AF 篩檢的單臂研究，代表的是「篩檢可及性」這一端——貼片讓偵測門檻大幅下降。

其二，作為對照，**ESC〈Mass screening for atrial fibrillation using ECG together with heart failure biomarker does not prevent stroke in older adults〉，2024-09**[^esc-afmass-2024-09]：這篇較早的大規模研究指出，即便結合 ECG 與心衰生物標記做大規模 AF 篩檢，在高齡族群並未降低中風。

這意味著急診看待「穿戴抓到 AF」要持平：偵測到一次 AF，是啟動完整評估（CHA₂DS₂-VASc、症狀、結構）的入口，而不是自動等於「該抗凝、能防中風」的結論。把「找到」與「有用」分開，才不會被穿戴裝置的高偵測率帶著走。

---

## 九、台灣急診情境備註 {#tw}

### 把「左主幹阻塞」留給休克病人 — aVR／diffuse ST depression 的台灣現場

台灣多數醫院的導管室啟動，實務上仍以 STEMI 毫米準則為溝通語言。本週 Mattu 與 Smith 的兩張 aVR／廣泛壓低圖提醒：對血流動力學穩定的這類病人，第一拍是穩定、查可逆原因（貧血、消化道出血、缺氧、快速性心律、低血壓），安排及早血管攝影，而不是把它當左主幹「阻塞」硬啟動。把「左主幹完全阻塞」留給前側壁抬高、休克或瀕死的病人，能避免一次錯置的時間軸與資源。

### 從 STEMI 到 OMI：與心臟科溝通的語言

Smith SW 與 McLaren JTT 等人的 OMI 系列（Current Opinion in Critical Care＝《重症照護新見》、Journal of Electrocardiology＝心電圖學期刊、The Egyptian Heart Journal＝埃及心臟期刊）一致主張：OMI 是臨床診斷、troponin 會遲到、STEMI 準則漏診率高。台灣 ED 在不改變既有啟動流程的前提下，可先把「prior／serial ECG 比對＋床邊超音波 regional wall motion」變成胸痛標準動作，用客觀證據（而非毫米數）去支撐與心臟科的溝通。

### 持續性 AF 與 PFA（脈衝場消融）：早一點轉介電生理

HRS（美國心律學會）The Lead 的 AVANT GUARD 討論，把一線消融的版圖往持續性 AF 延伸。台灣 PFA 逐步可及，對症狀明顯、反覆發作的新發持續性 AF 病人，ED 端可在做好 rate control 與抗凝評估後，把「早期轉介電生理門診」放進衛教與轉介路徑，而不是預設一路試藥。

---

## 十、本週 Key Takeaways {#key}

### 重點整理（Key Takeaways）

- **aVR 抬高＋廣泛壓低 ≠ 左主幹阻塞**：本質是瀰漫性心內膜下缺血／供需失衡（左主幹或三條血管病變、或貧血／出血／缺氧／快速性心律等次發原因）；穩定病人先治可逆原因，安排及早而非硬上的血管攝影（Mattu 6-15、Smith 6-19）。
- **真正的急性左主幹完全阻塞長相不同**：前側壁 ST 抬高＋心因性休克或猝死，不是還能對答的廣泛壓低圖。
- **subtle OMI 靠 prior／serial／超音波撈**：OMI 徵象可把 STEMI 準則敏感度翻倍、又維持高特異度，但前提是你真的去比、去追（Smith 6-15、OMI 綜述）。
- **STEMI 準則「簡單」是錯覺**：標準毫米門檻會漏掉高達 38% 的 LAD 阻塞；ECG 對某條血管有話說、troponin 在動時，該被質疑的是門檻（Frick／Smith 6-10）。
- **OMI 已從定義走向行動**：及早辨識、及早處置，靠症狀＋ECG＋床邊超音波的組合，別等遲到的第一套 troponin（Smith／Avdikos 6-17）。
- **post-ROSC 廣泛壓低多為全心供需失衡**：未必有 culprit；先穩定、追 serial、看 echo，再決定要不要即刻送導管室（Smith 6-19）。
- **EP 趨勢**：PFA 把「一線消融」從陣發性 AF 推向持續性 AF（AVANT GUARD／HRS Lead Ep 155）——症狀明顯者早轉電生理。
- **AI-ECG 當分流器**：用在超音波前分流、並補上可解釋性（ESC pre-echo triage／Rlign）；它把人帶到對的檢查前，不取代檢查。
- **穿戴抓到 AF ≠ 防到中風**：偵測是評估入口，不是抗凝結論（ESC AF 貼片篩檢 vs 大規模篩檢未降中風）。

---

## 引用 {#refs}

[^mattu-three-ecg-06-15]: ECG Weekly／Amal Mattu，〈Three High Risk ECGs and the Right Next Move〉，2026-06-15。原文：「The following ECG is obtained on arrival and shows ST elevation in aVR and V1 with diffuse ST depression... Is this left main coronary occlusion until proven otherwise?」→ [ecgweekly.com](https://ecgweekly.com/weekly-workout/three-high-risk-ecgs-and-the-right-next-move/#:~:text=ST%20elevation%20in%20aVR%20and%20V1%20with%20diffuse%20ST%20depression)

[^smith-2hr-06-15]: Dr. Smith's ECG Blog，〈60-something male with 2 hours of chest pain〉，2026-06-15。原文：「A 60-something male presented with 2 hours of chest pain. Here is his ECG: What do you think?」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/60-something-male-with-2-hours-of-chest-pain/#:~:text=2%20hours%20of%20chest%20pain)

[^smith-vf-06-19]: Dr. Smith's ECG Blog，〈50-something with VF arrest – why is there diffuse ST depression with ST Elevation in lead III?〉，2026-06-19。原文：「A 50-something male with no past history had onset of chest pain followed by arrest. After multiple shocks…」→ [drsmithsecgblog.com](https://drsmithsecgblog.com/50-something-with-vf-arrest-why-is-there-diffuse-st-depression-with-st-elevation-in-lead-iii/#:~:text=diffuse%20ST%20depression%20with%20ST%20Elevation%20in%20lead%20III)

[^smith-omi-early-06-17]: Avdikos G、Smith SW，〈OMI: time for early recognition and management of acute coronary occlusion〉，The Egyptian Heart Journal（埃及心臟期刊），2026-06-17（PMID 42307871）。原文（標題）：「OMI: time for early recognition and management of acute coronary occlusion.」→ [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/42307871/#:~:text=OMI%3A%20time%20for%20early%20recognition)

[^frick-illusion-06-10]: Frick WH、Smith SW，〈The illusion of simplicity: Diagnostic inconsistencies within the STEMI paradigm〉，Journal of Electrocardiology（心電圖學期刊），2026-06-10（PMID 42287922）。原文：「Evidence suggests that standard STEMI criteria fail to identify up to 38% of LAD occlusions... Coronary angiography performed 15 h after presentation revealed an acute total thrombotic occlusion of the LAD.」→ [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/42287922/#:~:text=fail%20to%20identify%20up%20to%2038%25%20of%20LAD%20occlusions)

[^omi-review-06-01]: McLaren JTT、Nunes de Alencar J、Smith SW，〈Diagnosis of occlusion myocardial infarction〉，Current Opinion in Critical Care（《重症照護新見》），2026-06-01（PMID 41581009）。原文：「OMI is a clinical diagnosis that starts with assessment for anginal symptoms... OMI ECG signs double the sensitivity of STEMI criteria, maintain high specificity... The initial troponin has limited sensitivity and predictive value in OMI.」→ [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/41581009/#:~:text=OMI%20is%20a%20clinical%20diagnosis)

[^hrs-avantguard-06-11]: HRS（美國心律學會），〈The Lead Episode 155: A Discussion of A Prospective Randomized Multicenter Global Study Comparing Pulsed Field Ablation versus Anti-Arrhythmic Drug Therapy as a First Line Treatment for Persistent Atrial Fibrillation (AVANT GUARD)〉，2026-06-11。原文（標題）：「...Pulsed Field Ablation versus Anti-Arrhythmic Drug Therapy as a First Line Treatment for Persistent Atrial Fibrillation (AVANT GUARD)」→ [news.google.com](https://news.google.com/rss/articles/CBMi0wJBVV95cUxPZWRuWmJ4eWo1eXc2ZDkzT1l6RWwyWEZuaDhQT0NNLTByVWM2eTlHUmczTDJSMk16UldlWUpNNmVsMVJ4UzNTcS13cTdQQTctcDM0ZUtvblZ3RG9ZaWtvTXZCNVpUeUktR0ZmelhqbHlOUWk3d2kzcjFwWUxJc0VBMGRYM1ctcDM0OHlFbzNIYUk0ZXpVRXR6Si14cEVwMjlmVEQxazd6VzdFN3JOWllmc3ltdnBMVzJ5YjQ0NV9kX0dkQnpfOHpwQ1NpU1E0bmhvTEFvUXIwUE5fTWwzb2RlTWk2X1RRSTFNQ21MdzFMaG02dVQwWVp2bUtvTnBUZDRTaldPb0ktSXJGTlduQjB2dUdUMVpWNGwtSkd0Vi1ObjdGWFEwQU9jeGZOMHgyNko2RGRGZk9NYmFyMU1kVlZGNlNRNmoyYkRTamZBYjhrX3JPSm8?oc=5#:~:text=AVANT%20GUARD)

[^esc-preecho-06-12]: ESC（歐洲心臟學會），〈AI-augmented ECG for pre-echocardiography triage: a tool to optimize cardiac imaging utilization〉，2026-06-12。原文（標題）：「AI-augmented ECG for pre-echocardiography triage: a tool to optimize cardiac imaging utilization」→ [news.google.com](https://news.google.com/rss/articles/CBMiU0FVX3lxTE00d3JRSFVlSFY1cWxDeEs1bTg4ODZBdlc2ZlhIdTg4NlB1TWtZRkFPUDFfOHJ0d1dLV1EyWjBlMkh5M2VRYXoydDkwcGgtcGREX0w0?oc=5#:~:text=pre-echocardiography%20triage)

[^esc-rlign-04-29]: ESC（歐洲心臟學會），〈The Rlign algorithm for enhanced electrocardiogram analysis through heart rate–corrected ECG alignment for explainable classification and clustering〉，2026-04-29。原文（標題）：「...heart rate–corrected ECG alignment for explainable classification and clustering」→ [news.google.com](https://news.google.com/rss/articles/CBMiU0FVX3lxTE9VOVo1U0VNeFZHaDhKdUpoMjBnYXpYM0lrcGdyc1pWbEpBcEpGUXEwa3FiLWJYVGxaVi1Ecm1hRnNCLVVxT2hwcnpvWTlyZThCTllB?oc=5#:~:text=explainable%20classification)

[^esc-afpatch-06-08]: ESC（歐洲心臟學會），〈Screening for atrial fibrillation using an ECG monitoring patch among the elderly population in rural China: a single-arm study〉，2026-06-08。原文（標題）：「Screening for atrial fibrillation using an ECG monitoring patch among the elderly population in rural China」→ [news.google.com](https://news.google.com/rss/articles/CBMiU0FVX3lxTE1kOEE1YmE5UFZrVnZVZ056NDhjcHN2UzBtN0tna0JGZzJaS1Q4bVdFTWZkbjRXUVFPaThISEIzQWxpMTkyZHg1Q1VNQnVZVWJ0VHVJ?oc=5#:~:text=ECG%20monitoring%20patch)

[^esc-afmass-2024-09]: ESC（歐洲心臟學會），〈Mass screening for atrial fibrillation using ECG together with heart failure biomarker does not prevent stroke in older adults〉，2024-09-01。原文（標題）：「Mass screening for atrial fibrillation using ECG together with heart failure biomarker does not prevent stroke in older adults」→ [news.google.com](https://news.google.com/rss/articles/CBMiigJBVV95cUxONmhIMC1FY0Z3ZEc1S0xHc2ZZenRYZXZQSk5JMnBvX2xuZDVQdTNmX1FEeGhJZVFTbElGNEk3emVNQVFFSEdZXzcwcC1Ka28tRkkyTUsxQVY4clpVZEdYdy1jTWluNFc0Z1pmQWk0X05DeHhjdU0wWTBiRFlHTEpjVkFlNWJLcGEwelpvc3lpWVlsNmtURmlYNVRPWkU3R0NuT1ZMdXpYVmpRMk1hejJUU2FuTkZYOXVFcmRobmRYZnNsUm84VkRZOXY3M0llZTVFUTBqUHFVc2stelhEX0xjRFZfNnI2b3NvUXY4bUQzOTZJTjVOUHFVRlV0UGZxOU90eC1rcmtGbFJOQQ?oc=5#:~:text=does%20not%20prevent%20stroke)

[^acc-aiecg-05-28]: ACC（美國心臟學院），〈AI-Enabled Clinician: Using AI-Enabled ECG to Improve Care Delivery〉，2026-05-28。原文（標題）：「AI-Enabled Clinician: Using AI-Enabled ECG to Improve Care Delivery」→ [news.google.com](https://news.google.com/rss/articles/CBMi0wFBVV95cUxQOGpHMzdneFBoLUZHUEZ3eDl5cnI2eG1lY0JqOThwTmxJWE1RX3laSHJCQVdZMjk5ejlfWmE0aTdDVWZVSS1rdUxsOW5kQ1Z6QXVEU3dheUJoMnFpX25WcEcxOVZPa196WUh4UDJxY1ZoODcyQ1ZNODFaUzRlSUpKZzZyWTlRVUZuaDEzMXBIUEJpYzVVVW5qcldadXNsSUlhVFAwakJRMXFOalZHYkp6dUl1cUstZEQ0aFVISmNORU9lNzZTWjlRd19lLWhDVk5peDZR?oc=5#:~:text=AI-Enabled%20ECG)

[^aha-syncope]: AHA（美國心臟協會），〈Syncope (Fainting) - www.heart.org〉，2024-10-21。原文（標題）：「Syncope (Fainting)」→ [news.google.com](https://news.google.com/rss/articles/CBMisAFBVV95cUxPRlJhWGg2d051SGJkM2lDYzhucHFPRnV6RWVqdFNKNTNGYkJHWk5PNlZreGNjS1djRmZVcklYUjN6R0RDbTdReXBncldCdDJURndBTUg4c2pNRXB0YzdjTHptWFR6R0k2UTBlOHFBWGw1MWR3a1BMLThadjBiempkX0pGS0JvR3diVkY3ZW1OSTUtcGlQbGtZRkVkRW0tOWt1V0VKNWw4eWFLYWc2VVRBdw?oc=5#:~:text=Syncope)

<section class="sources-appendix" id="sources">
<div class="sources-title">附錄 · 本週原始訊號清單</div>
<p class="sources-intro">本週報底下 4 層來源獨立彙整。W25 是「ECG 自己說謊」的一週：Mattu 6-15 與 Smith 6-19 同框示範「aVR／廣泛壓低」最像左主幹阻塞、卻多是供需失衡；Smith 6-15 補上 subtle OMI；Smith／Avdikos 6-17〈OMI: time for early recognition〉把 OMI 推向行動，Frick／Smith 6-10〈illusion of simplicity〉用 65 歲 LAD／NSTEMI／延誤 15 小時戳破 STEMI 門檻。EP 端 The Lead Ep 155 補上 AVANT GUARD（PFA 一線治持續性 AF），AI 端 ESC 以「超音波前分流」與 Rlign 可解釋性補位。</p>
<div class="sources-grid">
<div class="source-card">
<div class="source-label">L1 · 部落格 / 學會</div>
<div class="source-count">3<span class="unit">篇 W25 內新文</span></div>
<ul>
<li><span class="li-en">Dr Smith <strong>2</strong> · ECG Weekly <strong>1</strong></span><span class="li-zh">Smith 心電圖部落格（6-19 VF 心跳停止、廣泛壓低伴 III 抬高；6-15 兩小時胸痛 subtle OMI）· Mattu 心電圖週刊（6-15 aVR／V1 抬高＋廣泛壓低，是左主幹嗎）</span></li>
<li><span class="li-en">HRS <strong>1</strong> (6-11) · ESC <strong>1</strong> (6-12) — 補帶</span><span class="li-zh">The Lead Ep 155 AVANT GUARD（PFA vs 抗心律不整藥一線治持續性 AF）· AI-ECG 超音波前分流</span></li>
<li><span class="li-en">REBEL EM / ALiEM / EMCrit / First10EM — 0</span><span class="li-zh">本週視窗內無新文（REBEL 6-8、ALiEM 6-9 屬 W24）</span></li>
<li><span class="li-en">LITFL / Core EM / ACC / AHA — 0</span><span class="li-zh">本週視窗內無新時效內容（ACC AI-ECG 5-28、AHA 衛教頁為常青稿）</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/blog/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L2 · PubMed 追蹤作者</div>
<div class="source-count">1<span class="unit">篇 W25 視窗內新作（補帶 1 篇近期）</span></div>
<ul>
<li><span class="li-en">Stephen Smith — in-window</span><span class="li-zh">《OMI: time for early recognition...》Egyptian Heart Journal（埃及心臟期刊）6-17（PMID 42307871）</span></li>
<li><span class="li-en">Frick / Smith — 補帶</span><span class="li-zh">《The illusion of simplicity》Journal of Electrocardiology（心電圖學期刊）6-10（PMID 42287922），65 歲 LAD／NSTEMI／延誤 15h</span></li>
<li><span class="li-en">McLaren / Smith — 0（W23 已收）</span><span class="li-zh">OMI 綜述（PMID 41581009）屬 W23，本期僅交叉引用</span></li>
<li><span class="li-en">Meyers / Grauer / Aslanger — 0</span><span class="li-zh">本週無新作（Aslanger IC-ECG 5-06 前週已收）</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/authors/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L3 · CrossRef 期刊</div>
<div class="source-count">~4<span class="unit">篇候選（AI-ECG + AF 篩檢 + 消融）</span></div>
<ul>
<li><span class="li-en">ESC AI-ECG <strong>2</strong></span><span class="li-zh">超音波前分流（6-12）· Rlign 可解釋分類／分群（4-29，補帶）</span></li>
<li><span class="li-en">ESC AF 篩檢 <strong>2</strong></span><span class="li-zh">農村高齡 ECG 貼片篩檢（6-8）· 大規模 ECG＋心衰標記篩檢未降中風（2024 對照）</span></li>
<li><span class="li-en">HRS 試驗</span><span class="li-zh">AVANT GUARD 經 The Lead Ep 155 討論（6-11）</span></li>
<li><span class="li-en">EHJ / JACC / JACC-EP / Heart Rhythm / Annals EM — 0</span><span class="li-zh">本週皆空檔</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/journals/">看完整 →</a>
</div>
<div class="source-card">
<div class="source-label">L4 · X.com</div>
<div class="source-count">0<span class="unit">條過 filter（二次剔除非 ECG 主題後）</span></div>
<ul>
<li><span class="li-en">@smithECGBlog — 本週無 ECG 主題新 tweet</span><span class="li-zh">blog 6-19 VF arrest + 6-15 兩小時胸痛已對應</span></li>
<li><span class="li-en">@amalmattu — 本週無新 tweet</span><span class="li-zh">ECG Weekly 6-15 aVR／廣泛壓低已對應</span></li>
<li><span class="li-en">@ekgpress (Ken Grauer) — 本週無新 case</span><span class="li-zh">—</span></li>
<li><span class="li-en">@ECGcases (Jesse McLaren) — 本週無新 tweet</span><span class="li-zh">OMI 綜述（W23）已對應</span></li>
</ul>
<a class="source-more" href="/er-cardio-weekly/sources/x/">看完整 →</a>
</div>
</div>
</section>
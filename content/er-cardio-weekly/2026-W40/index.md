---
title: "等troponin上升，就是在看心肌死去"
subtitle: "本週三則Smith部落格病例都卡在同一個關口：心電圖未達STEMI毫米標準，於是病人被留下來「追蹤troponin」；而一份氣球閉塞研究提醒我們，冠狀動脈一塞，心電圖幾秒內就會變。"
shortTitle: "別等troponin"
slug: "2026-W40"
week: "2026-W40"
weekRange: "2026-09-28 — 2026-10-04"
date: 2026-10-04T10:04:03+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 168
picked: 5
tags: ["OMI", "AI ECG", "主動脈", "教學案例"]
practiceChanges:
  - text: "胸痛從10/10降到1/10，<strong>仍然是「持續疼痛」</strong>；缺血性胸痛＋動態心電圖變化＋POCUS新的節段性室壁運動異常，就當OMI直到證明不是，爭取立即導管，不要等troponin繼續上升。"
    source: "Smith ECG Blog 9-28（單一病例＋專家意見）"
    href: "https://drsmithsecgblog.com/50-year-old-with-chest-pain-serial-ecg-stemi-negative-but-does-the-patient-have-occlusion-mi/#:~:text=Improving%20pain%20is%20not%20the%20same%20as%20resolved%20pain"
  - text: "<strong>不要用「追蹤troponin」決定要不要緊急導管</strong>：troponin診斷的是心肌損傷，不是冠狀動脈是否還塞著；判斷持續閉塞要回到心電圖與症狀。"
    source: "Smith ECG Blog 9-28、10-02（專家意見）"
    href: "https://drsmithsecgblog.com/translation-of-interventionalist-lets-wait-until-the-myocardium-is-dead-then-we-will-be-certain-that-it-is-an-acute-mi-then-we-can-treat-it-after-the-damage-is-done/#:~:text=Trending%20troponins%20has%20zero%20utility%20in%20management%20of%20acute%20MI"
  - text: "V2–V4出現任何ST抬高，只要合併aVR以外任何導程的ST壓低，Smith認為就是缺血；<strong>precordial swirl即使未達STEMI毫米標準，也要當成近端LAD閉塞討論導管室</strong>。"
    source: "Smith ECG Blog 10-02（單一病例＋專家意見）"
    href: "https://drsmithsecgblog.com/translation-of-interventionalist-lets-wait-until-the-myocardium-is-dead-then-we-will-be-certain-that-it-is-an-acute-mi-then-we-can-treat-it-after-the-damage-is-done/#:~:text=Remember%20that%20ANY%20ST%20elevation%20in%20V2%2D4%20is%20ischemic"
  - text: "<strong>ADD-RS ≥1不代表該先送主動脈CT</strong>：在一份只納入主動脈症候群與心肌梗塞病例的兩院回溯研究中，ADD-RS ≥1者多數其實是OMI；ADD-RS適合用來排除主動脈急症，不適合用來區分它和OMI。"
    source: "J Emerg Med 2026-10（回溯 · 兩間急診 · n=349）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42766964/#:~:text=ADD%2DRS%20helps%20exclude%20AAS%20but%20does%20not%20distinguish%20it%20from%20OMI"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1", num: "01", title: "痛減輕不等於痛消失" }
  - { id: "s2", num: "02", title: "Swirl與四小時延誤" }
  - { id: "s3", num: "03", title: "雙分支阻斷下的高側壁" }
  - { id: "s4", num: "04", title: "閉塞後幾秒就變" }
  - { id: "s5", num: "05", title: "主動脈剝離還是OMI" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 痛減輕不等於痛消失 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/50-year-old-with-chest-pain-serial-ecg-stemi-negative-but-does-the-patient-have-occlusion-mi/#:~:text=Comparison%20between%20the%203%20ECGs%20in%20today" anno="看Grauer的Figure-1三張連續心電圖：ECG #1 <b>作者指出的lead III down-up T波，以及Grauer標出的V2–V3相對於小QRS過大的T波</b>；ECG #2 <b>下壁down-up T波變得更明顯</b>（要並排比較才看得出來）；ECG #3 PCI後<b>V1–V4、aVL與下壁的再灌流T波</b>。" linktext="到原圖看三張連續心電圖 ↗" >}}

**是什麼：** Mazen El-Baba撰寫、Jesse McLaren（多倫多ECG Cases blog主理人）編修的病例：一位50歲、抽菸40包年的男性，突發胸骨後胸痛合併暈厥，疼痛約六小時前開始，到院時已從10/10降到6/10。[^elbaba-09-28] 檢傷心電圖被判為「STEMI negative」，病人等第一次高敏感度troponin，結果<mark>1,665 ng/L</mark>；到院兩小時後急診醫師才看到病人，此時疼痛剩1/10。[^elbaba-09-28]

**為什麼要在意：** 第二張心電圖仍未達STEMI標準，但下壁down-up T波動態變得更明顯；床邊心臟超音波顯示心尖與前壁、側壁、中隔中遠段無運動，高度懷疑LAD缺血。[^elbaba-09-28] 急診醫師據此要求導管，心臟科仍以「Non-STEMI」收住院；troponin升到6,557 ng/L、隔天21,018 ng/L，才在到院約19小時後做血管攝影，結果是<mark>近端LAD 99%、TIMI 1血流</mark>，術後正式超音波LVEF 35–40%。[^elbaba-09-28] Smith說他是看到lead III的down-up T波才確信，並認為這讓心電圖足以診斷OMI。[^elbaba-09-28] {{< grade "單一病例 · 有血管攝影 · 教學級" "opinion" >}}

作者指出，依STEMI典範這個病例的導管時機落在傳統NSTEMI路徑內，因此不會被品質改善機制標記出來。[^elbaba-09-28] Smith評論也大力推薦Queen of Hearts（AI心電圖模型）；**利益揭露：** Smith持有其開發商Powerful Medical的股份。[^shroyer-2025-coi]

**所以呢：** 原文的take-home是<mark>疼痛改善不等於疼痛消失，1/10也是持續疼痛</mark>，而合併頑固性疼痛的ACS需要立即血管攝影。[^elbaba-09-28] 在台灣急診，「痛已經緩解很多」常讓病人在等候區等抽血結果；這一例提醒，檢傷心電圖若有任何可疑處，應盡快重錄並與前一張並排比較，再加一個床邊超音波切面，把「缺血性疼痛＋動態心電圖＋節段性室壁運動異常」三件事一起寫進照會內容。

## Swirl與四小時延誤 {#s2}

{{< ecg-linkout href="https://drsmithsecgblog.com/translation-of-interventionalist-lets-wait-until-the-myocardium-is-dead-then-we-will-be-certain-that-it-is-an-acute-mi-then-we-can-treat-it-after-the-damage-is-done/#:~:text=Comparison%20between%20the%202%20tracings%20in%20today" anno="看Grauer的Figure-1：初始ECG <b>V1的ST抬高、V2–V3相對過大的T波，合併V5–V6 ST壓低</b>（precordial swirl），以及<b>下壁ST壓低＋aVR ST抬高</b>；再對照疼痛緩解後那張的瀰漫性再灌流T波。" linktext="到原圖看兩張心電圖 ↗" >}}

**是什麼：** 歐洲一位救護技術員兼急診護理師Dominik Poizl投稿：58歲男性，壓迫性胸痛放射到雙臂與背部，已間歇一週，當天疼痛達高峰且持續，合併呼吸困難；有高血壓與抽菸病史。[^poizl-10-02] Smith在病史段就寫：<mark>即使心電圖正常，這樣的高事前機率也足以合理送導管室</mark>。[^poizl-10-02]

**為什麼要在意：** 初始心電圖未達STEMI毫米標準，但Smith判讀為典型precordial swirl：V2超急性T波、V1–V2 ST抬高、V5–V6 ST壓低，並診斷為近端LAD閉塞。[^poizl-10-02] Smith指出Queen of Hearts的判讀同樣支持OMI，但PCI中心的心臟科醫師回覆「依ACS流程治療，目前不需介入」、「追蹤troponin與連續心電圖」。[^poizl-10-02] 第一次troponin T 11.3 ng/L（低於參考上限）；4小時後疼痛緩解、心電圖出現再灌流型態，第二次troponin T 172 ng/L，心臟科才同意介入，PCI發現ramus intermedius閉塞並放置兩支支架。[^poizl-10-02] 投稿者寫道，<mark>病人總共等了5小時才進導管室</mark>。[^poizl-10-02] {{< grade "單一病例 · 有血管攝影 · 教學級" "opinion" >}}

Smith強調：troponin可以幫忙rule in與診斷MI，但<mark>追蹤troponin的趨勢對決定誰需要緊急血管攝影沒有幫助</mark>。[^poizl-10-02] 他也提醒，V2–V4出現任何ST抬高，若aVR以外任何導程有ST壓低，就要當成缺血。[^poizl-10-02] 同樣地，Smith持有Queen of Hearts開發商股份。[^shroyer-2025-coi]

**所以呢：** 諷刺的是，說服介入醫師的不是持續閉塞的第一張圖，而是再灌流後的第二張。[^poizl-10-02] 在台灣急診，急診醫師多半也不能自己啟動導管室；照會時不要只說「沒有STEMI」，而要點名「precordial swirl、近端LAD型態、疼痛持續中」，讓對方評估的是閉塞，而不是毫米數。

## 雙分支阻斷下的高側壁 {#s3}

{{< ecg-linkout href="https://drsmithsecgblog.com/even-if-you-are-not-impressed-use-the-queen-of-hearts-she-may-surprise-you/#:~:text=There%20is%20RBBB%20with%20Left%20posterior%20fascicular%20block" anno="看初始ECG：<b>I、aVL明顯ST抬高，V2–V6廣泛ST壓低、V3最深</b>；QRS為RBBB＋左後分支阻斷。再看Grauer的Figure-2，他把它解讀成雙分支阻斷底下的South African Flag sign。" linktext="到原圖看RBBB＋高側壁型態 ↗" >}}

**是什麼：** 一位有冠狀動脈疾病、曾做繞道手術的中年女性因胸痛就診。Smith判讀為RBBB合併左後分支阻斷（雙分支阻斷，無法得知新舊），I與aVL明顯ST抬高，V2–V6深度ST壓低、以V3最深。[^smith-09-30] 他指出V3的ST壓低雖與RBBB的R′波方向相反（合乎預期），但<mark>幅度不成比例</mark>，看起來像高側壁合併後壁OMI。[^smith-09-30]

**為什麼要在意：** 負責看診的醫師並不覺得這張圖有問題；同組的另一位醫師（Smith的前住院醫師）用Queen of Hearts判讀後，最終促成啟動導管室。[^smith-09-30] 導管發現第一對角支完全閉塞、TIMI 0血流，LAD在第二對角支之後也有80–95%狹窄。[^smith-09-30] Grauer評論認為，在這位新發胸痛的病人身上，這樣的ST抬高與壓低幅度不論新舊疊加，都應先當成進行中的急性OMI，找出罪犯血管只是次要問題。[^smith-09-30] {{< grade "單一病例 · 有血管攝影 · 教學級" "opinion" >}}

**所以呢：** RBBB本身會帶來繼發性ST-T改變，但教學點是要看<mark>與QRS相比是否不成比例</mark>，而不是因為有束支阻斷就整張放棄判讀。[^smith-09-30] 本例同樣由Smith推薦AI判讀，他持有開發商股份。[^shroyer-2025-coi] 台灣急診遇到有繞道手術病史、心電圖本來就「很亂」的病人，若手邊有舊心電圖，第一件事就是並排比對；沒有舊圖時，高側壁ST抬高合併廣泛壓低仍值得直接找心臟科討論。

## 閉塞後幾秒就變 {#s4}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42790049/#:~:text=Ischemic%20electrocardiographic%20change%20begins%20within%20seconds%20of%20abrupt%20complete%20occlusion" anno="關鍵發現：在擇期血管成形術的<b>氣球完全閉塞</b>模型中，閉塞血管對應導程的ST偏移與超急性T波分數<b>15秒內</b>就超出靜息時的變異範圍，判準在1–2分鐘內陸續達標。" linktext="到PubMed看摘要 ↗" >}}

**是什麼：** de Alencar與Stephen W. Smith（Hennepin Healthcare，OMI主軸）在Journal of Electrocardiology（心電圖期刊）發表：利用STAFF III資料庫（104位病人、142段記錄），在擇期血管成形術中以氣球製造時間精確到秒的完全閉塞，每5秒以10秒視窗套用三種判準——指引的ST抬高切點、Meyers超急性T波分數、Birnbaum末端QRS變形。[^dealencar-09-22]

**為什麼要在意：** 傳統教的是「幾分鐘內超急性T波、約30分鐘ST抬高、數小時後Q波」，但作者指出沒有原始研究報告過這個間隔。[^dealencar-09-22] 結果顯示，<mark>ST抬高在50秒時已有71/104位（68%）達標</mark>，末端QRS變形80秒時24位（23%），超急性T波70秒時16位（15%）；T波與ST段是一起受影響的。[^dealencar-09-22] 作者認為，臨床上看到的「延遲」反映的是自發性梗塞的間歇、不完全閉塞，以及取樣時間點，而不是心肌反應本身有延遲。[^dealencar-09-22] {{< grade "實驗性閉塞 · 擇期PCI · n=104 · 機轉級" "retro" >}}

**所以呢：** 這是擇期病人的短暫人工閉塞，不能直接外推成急診的診斷準確度；但它支持一個實務觀念：心電圖反映的是「當下」血管的狀態。本刊建議：症狀變化時就重錄，不要因為第一張「還太早」或「看起來還好」而等待；與第一、二張卡的連續心電圖概念是同一件事。作者聲明無利益衝突。[^dealencar-09-22]

## 主動脈剝離還是OMI {#s5}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42766964/#:~:text=Triage%20ECG%20OMI%20signs%20doubled%20STEMI%20criteria%20sensitivity" anno="關鍵發現：349位病人中只有12位是急性主動脈症候群；檢傷心電圖的<b>OMI徵象敏感度是STEMI準則的兩倍</b>，且摘要指出其中沒有主動脈症候群病例。" linktext="到PubMed看摘要 ↗" >}}

**是什麼：** Shokr、Kaab、El-Baba、McLaren在Journal of Emergency Medicine（急診醫學期刊）發表兩間急診的回溯病歷研究：納入2022年6月至2024年6月所有急性主動脈症候群（AAS）、STEMI與非STEMI病例，比較兩者的診斷延誤與工具，並由盲性判讀者分別以STEMI準則與OMI徵象判讀檢傷心電圖。[^shokr-aas]

**為什麼要在意：** 349位病人中，12位AAS、192位OMI、145位非OMI。[^shokr-aas] ADD-RS（主動脈剝離風險分數）≥1的LR−為0.1、LR+為3.9，但在這個只含主動脈症候群與心肌梗塞的族群裡，ADD-RS ≥1者多數其實是OMI。[^shokr-aas] 檢傷心電圖的<mark>OMI徵象敏感度39.1% vs STEMI準則16.7%</mark>，摘要並寫明其中「no AAS cases」；沒有AAS病人被啟動導管室，反倒是13位OMI（6.8%）在血管攝影前先做了主動脈CT。[^shokr-aas] {{< grade "回溯 · 兩間急診 · n=349 · 假說級" "retro" >}}

**所以呢：** 作者結論是，AAS的發生率雖低，臨床上卻被優先排除，結果延誤OMI的再灌流；ADD-RS能幫忙排除AAS，但不能區分AAS與OMI。[^shokr-aas] 樣本中AAS只有12例，數字不穩定。台灣急診對主動脈剝離的警覺很高，胸痛合併背痛時先排CT是常見反射；這份研究提醒，若檢傷心電圖已有明確的OMI徵象，CT前應先和心臟科討論再灌流的時序，而不是自動排在導管之前。

## 延伸與出處 {#more}

### 誰這週有新作

Smith心電圖部落格本週三則病例（9-28 El-Baba／McLaren、9-30 Smith、10-02 Poizl投稿），其中9-28與10-02兩篇的標籤為「Does not meet STEMI criteria」；Ken Grauer（KG-EKG Press，佛州ECG教學）也都有長篇評論。PubMed層的Stephen W. Smith（Hennepin Healthcare，OMI主軸）與Jesse McLaren（多倫多ECG Cases blog主理人）各有一篇新作，已寫成第四、五張卡；瑞典Queen of Hearts驗證研究、OMI六原則回顧與Aslanger的前壁MI下壁抬高研究，先前幾期已介紹過，本期不重覆。

### 期刊速報：本次未展開

Circulation: Arrhythmia and Electrophysiology（循環—心律電生理）本週有Marfan症候群心室性心律不整的多中心世代研究，以及心房顫動消融試驗終點的AFA-ARC共識文件；兩者與急診處置距離較遠，本期只列題目、不寫數字。

## 引用 {#refs}

[^elbaba-09-28]: El-Baba M；McLaren J編修，Smith SW、Grauer K評論，〈50-year old with chest pain: serial ECG 'STEMI negative', but does the patient have Occlusion MI?〉，Dr. Smith's ECG Blog（Smith心電圖部落格），2026-09-28。原文：「the patient waited for a high-sensitivity troponin, which was 1,665 ng/L」；「Angiography showed a 99% proximal LAD occlusion with TIMI 1 flow」；「Improving pain is not the same as resolved pain」；「I was only convinced when I saw this down-up T-wave in lead III」。[跳到原文](https://drsmithsecgblog.com/50-year-old-with-chest-pain-serial-ecg-stemi-negative-but-does-the-patient-have-occlusion-mi/#:~:text=Improving%20pain%20is%20not%20the%20same%20as%20resolved%20pain)

[^poizl-10-02]: Smith SW（Poizl D投稿）；Grauer K評論，〈Trending troponins never helps. It only means that you are watching the myocardium die.〉，Dr. Smith's ECG Blog（Smith心電圖部落格），2026-10-02。原文：「Even with a normal ECG, it is reasonable to take this patient to the cath lab」；「Trending troponins has zero utility in management of acute MI」；「First troponin T returned below the URL at 11.3 ng/L」；「Second troponin T before reperfusion returned at 172 ng/l」；「Had the interventionalist paid attention to the astute ED clinicians, and to the Queen of Hearts, the artery would have been opened far earlier」。[跳到原文](https://drsmithsecgblog.com/translation-of-interventionalist-lets-wait-until-the-myocardium-is-dead-then-we-will-be-certain-that-it-is-an-acute-mi-then-we-can-treat-it-after-the-damage-is-done/#:~:text=Trending%20troponins%20has%20zero%20utility%20in%20management%20of%20acute%20MI)

[^smith-09-30]: Smith SW；Grauer K評論，〈Even if you are not impressed, use the Queen of Hearts. She may surprise you.〉，Dr. Smith's ECG Blog（Smith心電圖部落格），2026-09-30。原文：「There is RBBB with Left posterior fascicular block」；「The ST depression in V3 is appropriately discordant to the R’-wave of RBBB, but it is out of proportion」；「First diagonal is completely occluded with TIMI-0 flow」。[跳到原文](https://drsmithsecgblog.com/even-if-you-are-not-impressed-use-the-queen-of-hearts-she-may-surprise-you/#:~:text=First%20diagonal%20is%20completely%20occluded%20with%20TIMI)

[^dealencar-09-22]: de Alencar JN、Smith SW，〈Time from acute coronary occlusion to electrocardiographic ischemic findings in humans: A controlled balloon occlusion study〉，Journal of Electrocardiology（心電圖期刊），2026-09-22（PMID 42790049）。原文：「In STAFF III (104 patients, 142 recordings)」；「ST elevation in 71 of 104 patients (68%) at 50 s」；「Ischemic electrocardiographic change begins within seconds of abrupt complete occlusion」；利益衝突聲明：「The authors declare that they have no known competing financial interests」。[跳到原文](https://pubmed.ncbi.nlm.nih.gov/42790049/#:~:text=Ischemic%20electrocardiographic%20change%20begins%20within%20seconds%20of%20abrupt%20complete%20occlusion)

[^shokr-aas]: Shokr H、Kaab A、El-Baba M、McLaren JTT，〈Diagnostic Dilemma: Acute Aortic Syndrome vs. Acute Coronary Occlusion in the Emergency Department〉，Journal of Emergency Medicine（急診醫學期刊），2026-10（PMID 42766964）。原文：「Among 349 patients, 12 had AAS, 192 OMI, and 145 non-OMI.」；「Triage ECG OMI signs doubled STEMI criteria sensitivity (39.1% vs. 16.7%), with no AAS cases.」；「ADD-RS helps exclude AAS but does not distinguish it from OMI.」。[跳到原文](https://pubmed.ncbi.nlm.nih.gov/42766964/#:~:text=Triage%20ECG%20OMI%20signs%20doubled%20STEMI%20criteria%20sensitivity)

[^shroyer-2025-coi]: Shroyer S、Mehta S、Thukral N等（含Meyers HP、Smith SW），〈Accuracy of cath lab activation decisions for STEMI-equivalent and mimic ECGs: Physicians vs. AI (Queen of Hearts by PMcardio)〉，American Journal of Emergency Medicine（美國急診醫學期刊），2025，利益衝突聲明。原文：「SWS reports stock ownership in Powerful Medical」。[跳到原文](https://pubmed.ncbi.nlm.nih.gov/40763602/#:~:text=SWS%20reports%20stock%20ownership%20in%20Powerful%20Medical)

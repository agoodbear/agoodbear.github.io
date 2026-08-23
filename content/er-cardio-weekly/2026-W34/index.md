---
title: "最好的 AI 也只抓到一半的閉塞"
subtitle: "_兩萬四千張瑞典急診胸痛心電圖跑出來的數字很難看：Queen of Hearts 敏感度 52%、STEMI 毫米準則 23%——這週四張卡其實在講同一件事，你手上每一個判讀工具（包括目前最好的那個）都有將近一半的閉塞不會舉手，而剩下那一半得靠你在發燒的胸痛、轉復後的 T 波倒置、和一份心率低於 50 的病歷裡自己撈出來。_"
shortTitle: "AI 只抓到一半"
slug: "2026-W34"
week: "2026-W34"
weekRange: "2026-08-17 — 2026-08-23"
date: 2026-08-23T10:00:06+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 173
picked: 4
tags: ["OMI", "電生理", "Resus"]
practiceChanges:
  - text: "**AI 判讀說「沒有」不等於沒有**——Queen of Hearts 在瑞典 24,511 人真實世界世代的敏感度只有 52%；模型陰性但症狀持續，照樣連拍心電圖，不要拿它當離院依據"
    source: "JACEP Open（Lindow 等，瑞典急診驗證）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42614578/"
  - text: "ST 抬高 ＋ 發燒 ＋ 肌鈣蛋白升高**不要直接收成心肌炎**——先問這個抬高有沒有互為倒影的壓低、符不符合單一冠狀動脈範圍；感染是急性冠心症的觸發因子，不是排除理由"
    source: "Smith ECG Blog 8-17（McArthur／McLaren）"
    href: "https://drsmithsecgblog.com/4-patients-with-st-elevation-infection-and-elevated-troponin-which-is-occlusion-mi-and-which-is-myocarditis/"
  - text: "年輕人寬 QRS 心搏過速轉復後那張圖，**看 QRS 的結尾**：V1–V3 T 波倒置加上終末切跡（epsilon 波）＝致心律不整性右心室心肌病，不能以「已轉復、無症狀」讓病人走出去"
    source: "ECG Weekly 8-17（UMMC Part III）"
    href: "https://ecgweekly.com/weekly-workout/ummc-cases-part-iii-when-t-waves-help-tell-the-story/"
  - text: "把**「心電圖已出現變化」設成給藥觸發**而不是等血液報告——同份研究中心搏過慢病人從心電圖到打鈣中位 111 分鐘、到阿斯匹靈 76 分鐘，遠慢於沒有心電圖變化的鴉片類過量（1 分鐘）"
    source: "Am J Emerg Med 8-14（Lee／McLaren）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42617394/"
  - text: "心房顫動的心室率若**規則**，那就不是心房顫動在決定心室率——是合併完全房室阻滯加逸搏節律，**禁止電擊整流**，先處理心搏過慢本身"
    source: "Am J Emerg Med 8-14"
    href: "https://pubmed.ncbi.nlm.nih.gov/42617394/"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "發燒的 ST 抬高" }
  - { id: "s2",  num: "02", title: "轉復後那張圖的尾巴" }
  - { id: "s3",  num: "03", title: "心搏過慢是時鐘問題" }
  - { id: "s4",  num: "04", title: "52% 這個數字" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 發燒的 ST 抬高，不是心肌炎的通行證 {#s1}

{{< ecg-linkout href="https://drsmithsecgblog.com/4-patients-with-st-elevation-infection-and-elevated-troponin-which-is-occlusion-mi-and-which-is-myocarditis/#:~:text=active%20infection%20with%20or%20without%20fever" anno="四張圖並排看時，逐張問三個問題：<b>有沒有互為倒影的 ST 壓低</b>、<b>抬高範圍符不符合單一條冠狀動脈</b>、<b>PR 段有沒有壓低（aVR 有沒有 PR 抬高）</b>——這三題的答案決定的是心導管室還是病房" linktext="到 Smith 部落格看四張對照圖 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）8-17 由 Matthew McArthur 與 Jesse McLaren 撰寫：四位病人同時具備 ST 段抬高、活動性感染（有或沒有發燒）、以及肌鈣蛋白升高。題目只有一句——哪幾位是閉塞型心肌梗塞，哪幾位是心肌炎。[^smith-myocarditis-08-17]

**為什麼要在意：** 這個組合在台灣急診每週都會出現，而心肌炎是所有解釋裡最舒服的一個：它同時解釋了發燒、胸痛、肌鈣蛋白與 ST 抬高，而且不需要在半夜叫任何人起床。問題是這個舒服建立在一個沒被檢查過的前提上——**感染與冠狀動脈閉塞被當成互斥事件**。

實際上兩者的關係是相反的。全身性發炎會讓斑塊不穩定、把凝血系統推向促凝、同時把心肌需氧量往上拉。<mark>「這個人有感染」是急性冠心症的觸發因子，不是它的排除理由</mark>。把感染寫進病歷當作 ST 抬高的解釋，等於用最強的危險因子當作安全訊號。

形態學上有可用的分界，但它們是機率而非開關。心肌炎的抬高傾向**瀰漫、跨越冠狀動脈供應範圍、凹面向上、沒有互為倒影的壓低**，且常伴隨 PR 段壓低（aVR 反向出現 PR 抬高，來自心包受累）。閉塞的抬高則**侷限在一條血管的範圍內、伴隨對側導程的壓低、T 波相對於 QRS 振幅過度肥厚**。 {{< grade "案例 · 四例對照教學 · 觀點級" kind="opinion" >}}

**所以呢：** 三個動作。第一，任何要寫下「疑似心肌炎」的圖，先在心裡跑一次互為倒影檢查——<mark>有互為倒影壓低就是閉塞，直到證明不是</mark>。第二，明確去找 PR 段：這是少數真正偏向心包／心肌炎的線索。第三，也是最重要的，**連拍**：心肌炎的圖在數小時內大致靜止，閉塞的圖會動。

**台灣情境：** 台灣的年輕族群胸痛加發燒在腸病毒與流感季節量極大，「心肌炎收住院、排心臟超音波」是一條順暢且不會被質疑的路徑。風險不在第一次判斷，而在這條路徑一旦啟動，就很少有人在住院後的第三小時再開一張心電圖。把第二張心電圖寫進急診端的離開條件，比在鑑別診斷上多背幾條形態學特徵更有效。

---

## 轉復了，然後你有沒有看 QRS 的尾巴 {#s2}

{{< ecg-linkout href="https://ecgweekly.com/weekly-workout/ummc-cases-part-iii-when-t-waves-help-tell-the-story/#:~:text=subtle%20abnormality%20hiding%20at%20the%20end%20of%20the%20QRS" anno="看轉復後那張圖時<b>把注意力放在 QRS 結束的那一點</b>：V1–V3 的 J 點附近有沒有一個低幅、毛刺狀的終末訊號（epsilon 波），以及從 QRS 起點到 S 波最低點的時間有沒有 ≥55 毫秒" linktext="到 ECG Weekly 看這組題目 ↗" >}}

**是什麼：** ECG Weekly（心電圖週刊）8-17〈UMMC Cases Part III: When T Waves Help Tell the Story〉：一位 23 歲女性因心悸與頭暈就診，之前自行終止了一段規則的寬 QRS 心搏過速。轉復後的心電圖顯示前壁導程 T 波倒置，**以及一個藏在 QRS 結尾的細微異常**。作者要讀者先回答：V1 到 V3 的 T 波倒置鑑別診斷有哪些？哪一個心電圖發現對你的首選診斷最具特異性？年輕病人的心室頻脈終止後，轉復心電圖上應該特別找什麼？[^ecgweekly-twaves-08-17]

**為什麼要在意：** 這是急診最典型的「轉復即結案」情境。年輕、女性、心悸、自己好了、生命徵象正常——這串條件會自動把整件事降級成陣發性上心室頻脈。

但 V1–V3 的 T 波倒置在這個脈絡下有完全不同的分量。它在十四歲以下或部分年輕女性可以是正常變異（持續性幼年型），問題是<mark>正常變異不會製造一段寬 QRS 心搏過速</mark>。當這兩件事同時出現在同一個人身上時，需要被排除的是致心律不整性右心室心肌病（ARVC）——而 QRS 結尾那個細微切跡就是 epsilon 波，是 2010 年 Task Force 判準裡的主要判準之一，也是這張圖上特異性最高的發現。

代價很直接：<mark>ARVC 的第一個臨床表現，經常就是猝死</mark>，而它偏好的族群正是這位病人所屬的年齡層與運動族群。 {{< grade "案例 · 教學題組 · 觀點級" kind="opinion" >}}

**所以呢：** 把「已經轉復所以沒事」從決策裡拿掉。任何一位在寬 QRS 心搏過速後轉復的年輕病人，轉復心電圖要逐項檢查三件事：**QRS 終末切跡（epsilon 波）**、**V1–V3 的 T 波倒置**、**終末活化時間 ≥55 毫秒**（V1–V3 中 QRS 起點到 S 波最低點）。任何一項為陽性就不是離院對象，要接上心臟科與影像（心臟磁振造影）。

**台灣情境：** 台灣急診的年輕人心悸量很大，而「腺苷打下去轉了、觀察兩小時、心臟內科門診」是標準且合理的處置。真正的分岔點不在急診當下的判斷，而在轉復後那張慢的圖有沒有被人逐格看過、以及病歷上有沒有留下一句可被下一位醫師接手的描述。把「疑似 epsilon 波，需排除 ARVC」寫進病歷，比任何一次會診都更能決定這位病人半年後在哪裡。

---

## 心搏過慢真正的問題不在判讀，在時鐘 {#s3}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42617394/#:~:text=111%20min%20to%20calcium" anno="這份研究最值得看的<b>不是分類結果而是時間軸</b>：心電圖到介入的中位時間——naloxone 1 分鐘、電腦斷層 62 分鐘、阿斯匹靈 76 分鐘、鈣劑 111 分鐘。<b>心電圖上有證據的反而最慢</b>" linktext="到 PubMed 看摘要與時間數據 ↗" >}}

**是什麼：** American Journal of Emergency Medicine（美國急診醫學期刊）8-14 線上刊出，Lee D、Gill S、Shokr H、McLaren JTT 等：兩間學術醫院一年份（2024/07–2025/06）、檢傷心率 < 50 且經急診收住院的 198 位病人的病歷回顧，把心搏過慢分成原發性（最終需植入永久性心律調節器，62 人）、次發性（需處理次發原因，68 人）、與兩者皆非（68 人）。[^ajem-brady-08-14]

**為什麼要在意：** 這份研究有兩層，第二層比第一層刺得多。

第一層是風險分布，和多數人的直覺相反：<mark>次發性心搏過慢比原發性更常低血壓（19.1% vs 6.5%）、死亡率高出五倍（25.0% vs 4.8%）</mark>。也就是說，急診端最急的問題從來不是「這個人要不要裝心律調節器」，而是「這個慢是誰造成的」。

第二層是那條時間軸。<mark>心電圖沒有變化的情境動得最快，心電圖上明明有變化的兩個致命原因反而最慢</mark>：鴉片類過量到 naloxone 中位 1 分鐘、顱內急症到電腦斷層 62 分鐘（兩者心電圖都沒給任何線索）；心肌梗塞到阿斯匹靈 76 分鐘、高血鉀到鈣劑 111 分鐘（兩者心電圖都已經在喊）。低體溫也複製同一個模式：環境性低體溫到復溫 26 分鐘，敗血症性低體溫 112 分鐘。

共同點很清楚——當心搏過慢附帶一個現成的情境標籤（吸毒、跌倒、泡冷水）時，團隊立刻行動；當它只有心電圖上的證據時，團隊會停下來等血液報告。

研究還點名了原發性那組的具體錯誤：**細微房室阻滯的延遲辨識**，包括心房顫動／撲動合併三度房室阻滯（表現為規則的慢心室率），以及對「心房顫動合併慢心室反應」嘗試電擊整流——後者是對一個已經沒有房室傳導的病人再打一次。 {{< grade "回溯 · 雙中心病歷回顧 · n=198 · 品質改善級" kind="retro" >}}

**所以呢：** 三條可以直接寫成檢傷或急救室規則。第一，心率 < 50 且收縮壓 < 90 的病人，**先跑次發清單**（鉀、體溫、藥物、缺血、顱內壓），不要把第一通電話打給心臟科。第二，把「心電圖出現高血鉀型變化」本身設成鈣劑的給藥觸發，不等生化報告——這個延遲的中位數是 111 分鐘，遠超過任何一份血液報告該花的時間。第三，看到心房顫動卻是規則的慢心室率，那不是心房顫動在決定心室率，禁止電擊整流。

**台灣情境：** 台灣急診遇上檢傷心率 < 50，最常見的路徑是「心臟科會診 ＋ 等鉀離子」。這份研究最能直接移植的不是它的分類，而是它的稽核方式：**把心電圖到鈣劑、心電圖到阿斯匹靈的時間當成可以拉出來看的品質指標**。這兩個數字不需要新設備、不需要新人力，只需要有人願意每季拉一次報表——而它們一旦被看見，通常自己就會縮短。

---

## 52%：把 AI 從安全網降級成放大鏡 {#s4}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42614578/#:~:text=QoH%20achieved%20higher%20sensitivity%20than%20STEMI%20criteria" anno="讀這份摘要時<b>不要只看敏感度那一欄</b>：真正該一起看的是陽性預測值（QoH 51% vs STEMI 準則 17%）、以及擴展 STEMI 準則那組（敏感度 41%、特異度掉到 95%、陽性預測值只剩 14%）——放寬門檻的代價寫在同一張表上" linktext="到 PubMed 看完整表現數據 ↗" >}}

**是什麼：** Journal of the American College of Emergency Physicians Open（美國急診醫師學會期刊公開版）刊出，Lindow T、Nyström A、Forberg JL、Mokhtari A 等（Smith 與 Meyers 列名）：以瑞典 ESC-TROP 世代（2017–2018）連續 **24,511 位急診胸痛病人**回溯驗證 Queen of Hearts 人工智慧模型，其中 467 人（1.9%）依血管攝影與專家判定為閉塞型心肌梗塞。[^jacepo-qoh-swedish]

**為什麼要在意：** 這份數字要往兩個方向讀，而多數轉述只講了其中一邊。

往上的那邊：Queen of Hearts 敏感度 52%（95% CI 47–57）對比 STEMI 毫米準則 23%（19–27），特異度同為 99% 與 98%。真正被低估的是陽性預測值——<mark>從 17% 拉到 51%，等於被叫起來的心導管室有一半真的找到閉塞，而不是六分之一</mark>。Glasgow 演算法夾在中間（敏感度 32%、陽性預測值 26%）。

往下的那邊，也是本週的重點：<mark>52% 的意思是接近一半的閉塞，目前最好的模型也不會舉手</mark>。這個數字之所以比先前的報導難看，是因為這是**未經篩選的真實世界急診族群**——不是精選案例集，也不是已經被人覺得可疑才送去判讀的圖。

第三個數字是給所有想「把門檻放寬一點」的人的警告：研究另外套用了擴展 STEMI 準則（加入 -V1、-V2、-V3、-aVL、-aVR、-III 等反向導程，以及左束支傳導阻滯的修正版 Sgarbossa 與左心室肥厚的比例準則），敏感度確實升到 41%，但特異度從 98% 掉到 95%、<mark>陽性預測值崩到 14%</mark>。在 1.9% 的盛行率下，放寬門檻換來的偽陽性遠多於真陽性。 {{< grade "回溯 · 前瞻世代之回溯分析 · n=24,511 · 外部驗證級" kind="retro" >}}

**所以呢：** 兩件事。第一，把 AI 心電圖判讀的定位從「安全網」改成「放大鏡」——**它讓你說「有」的時候更可信，但它說「沒有」的時候幾乎沒有排除力**。模型判為陰性、症狀卻持續的病人，處置和沒跑模型時一模一樣：連拍、序列肌鈣蛋白、看臨床病程。第二，任何診斷測試的比較，堅持同時看陽性預測值與盛行率；只講敏感度或只講特異度的比較，永遠可以靠調門檻做得好看。

**台灣情境：** 這類工具在台灣還沒有健保給付路徑，短期內也不會有。但這份研究裡真正可以帶回台灣的是那個 51% 對 17% 的對比——它其實是一把**衡量自己單位的尺**。如果你的心導管室啟動後真陽性率遠低於一半，那代表問題出在判讀與啟動門檻，而不是缺一個模型；反過來，如果你從來沒有一次「非 STEMI 但直接送導管」的紀錄，那代表那 52% 到 23% 之間的病人，在你的單位正被系統性地放過。

---

## 延伸與出處 {#more}

### 這週四張卡的共同線

上一期在拆「你接受了什麼作為前提」。本週視窗（2026-08-17 — 2026-08-23）的四張卡則指向一個更難處理的問題：**每一個判讀工具都有它結構性抓不到的那一半，而你有沒有為那一半準備第二個動作**。

心肌炎的診斷抓不到同時發生的閉塞（卡 01）、快速心律不整的轉復抓不到底層的心肌病變（卡 02）、心搏過慢的分類抓不到那個 111 分鐘的延遲（卡 03）、最好的人工智慧模型抓不到 48% 的閉塞（卡 04）。四者的第二個動作是同一件事：**再看一次，而且是在不同的時間點看**。序列心電圖、轉復後的慢圖、心電圖到給藥的時鐘、症狀持續時的重拍——不是更聰明的第一眼，是願意有第二眼。

### 期刊速報

**閉塞判讀與定位**：Journal of Electrocardiology（心電圖學期刊）近期有兩則與判讀基本功直接相關。一是 de Alencar J 對 **Mason-Likar 電極位置造成的肢導系統幾何變形**的分析——這是台灣急診與監視器端最普遍的貼法，把肢導往軀幹移會系統性改變額面軸與下壁導程的 ST 形態，是「同一個人不同時間的圖不能直接比」的常見來源。[^jelectro-masonlikar] 二是一份針對**慢性心衰竭且未接受心室節律或再同步治療者**的系統回顧與統合分析，探討 QRS 延長或左束支傳導阻滯型態對心血管預後的獨立影響。[^jelectro-qrs-lbbb] 另可回頭讀 Emre Aslanger 團隊六月的心臟磁振造影研究：在前壁心肌梗塞中，**傳統心電圖定位分類與磁振造影所定義的梗塞分布幾乎沒有對應**（P=0.24、κ=0.122），但整體 ST 段負荷與梗塞範圍相關（ΣSTE 標準化 β=0.307，P=0.002）——結論是心電圖擅長反映心肌傷害的「量」，不擅長它的「位置」。[^aslanger-cmr]

**心律不整與電生理**：Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理）8-21 一份六項隨機對照試驗、7,004 人的統合分析比較**左心耳封堵與口服抗凝血劑**：封堵組缺血性中風風險較高（RR 1.41，95% CI 1.04–1.91；3.2% vs 2.1%），但非手術相關大出血明顯較低（RR 0.57，0.43–0.77；6.2% vs 10.7%），整體中風、死亡率無顯著差異。[^circep-laac] 同日另一份研究指出，三種脈衝場消融平台在**二尖瓣峽部的心內膜消融都不可靠地達到穿壁**（僅 52.1% 電位衰減），且無法消除馬歇爾靜脈的副交感神經支配。[^circep-pfa-mi] Europace（歐洲節律）8-19 的心室脈衝場消融系統回顧（75 篇研究、355 位病人）顯示急性成功率高（心室早期收縮 90%、心室頻脈 92%），但約五個月追蹤的復發率為 19% 與 21%，整體併發症 10%，以**冠狀動脈痙攣與傳導障礙**為主。[^europace-vpfa] 8-20 另有一則以高通量蛋白質體學尋找心房顫動所致心肌病生物標記的研究。[^europace-ltbp4]

**AI 與心電圖**：JACC（美國心臟學會期刊）8 月號一份**社區場域的 AI 心電圖偵測結構性心臟病**研究，是把這類模型推出醫學中心、進入低盛行率環境的重要一步——低盛行率正是本週卡 04 那個陽性預測值問題最尖銳的地方。[^jacc-aiecg-community] Resuscitation（急救期刊）10 月號一則評論則直指同一個結構性問題：心跳停止後以 AI 進行冠狀動脈分流時，**終點該設成「狹窄」還是「急性閉塞」**——終點選擇本身就決定了模型長什麼樣。[^resus-endpoint] 同期 JACC 也發布 **2026 AHA/ACC 心房顫動臨床表現與品質測量**。[^jacc-afib-measures]

**急診醫學**：Annals of Emergency Medicine（急診醫學年鑑）9 月號兩則值得一看。其一指出**心律不整治療試驗普遍低報不良事件**——這對任何讀抗心律不整藥物文獻的人都是一條該掛在心上的校正係數。[^annals-ae-underreport] 其二探討**救護技術員設備在急診內的使用與到院外心跳停止病人接受處置的時間關係**。[^annals-ems-equipment]

**其他**：JAMA Cardiology 8-19 的 HELIOS-B 事後分析顯示，**左心房應變（而非左心房容積指數）**與轉甲狀腺素蛋白類澱粉沉積心肌病的死亡與心血管事件獨立相關（LASr 每惡化 5%，HR 1.37）。[^jamacardio-la-strain] 同日一則案例報告記錄了**血管內碎石術誘發心室顫動**——這是導管室內少見但可預期的節律事件。[^jamacardio-ivl-vf]

### 誰這週有新作

被追蹤作者群的近期產出集中在同一條戰線上。Smith 與 Meyers 同時列名於本週卡 04 的瑞典驗證研究；McLaren 一週內同時出現在卡 01（Smith 部落格的心肌炎對照案例）與卡 03（心搏過慢品質研究）兩處，是本週產出密度最高的作者。Willy Frick 與 Smith 六月在 Journal of Electrocardiology 的〈簡單性的幻覺〉則是本週卡 04 的思想前身：一位 65 歲男性的心電圖對左前降支具特異性但不符合 STEMI 毫米準則，被歸類為非 ST 上升型心肌梗塞，**15 小時後血管攝影顯示左前降支急性完全血栓性閉塞**；文中引用的數據是標準 STEMI 準則會漏掉多達 38% 的左前降支閉塞。[^frick-illusion] Aslanger 六月底的心臟磁振造影研究則從另一個方向侵蝕同一組假設：連「這是前壁還是下壁」這種我們以為心電圖最擅長的事，對照影像後也站不太住。

---

## 引用 {#refs}

[^smith-myocarditis-08-17]: Matthew McArthur、Jesse McLaren，〈4 patients with ST elevation, infection, and elevated troponin: which is Occlusion MI and which is myocarditis?〉— Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-08-17。原文：「4 patients presented with ST elevation, active infection with or without fever, and elevated troponin.」。 https://drsmithsecgblog.com/4-patients-with-st-elevation-infection-and-elevated-troponin-which-is-occlusion-mi-and-which-is-myocarditis/#:~:text=active%20infection%20with%20or%20without%20fever

[^ecgweekly-twaves-08-17]: Amal Mattu，〈UMMC Cases Part III: When T Waves Help Tell the Story〉— ECG Weekly（心電圖週刊），2026-08-17。原文：「Her post-conversion ECG shows anterior T wave inversions with a subtle abnormality hiding at the end of the QRS... After terminating ventricular tachycardia in a young patient, what should you specifically look for on the post-conversion ECG?」。 https://ecgweekly.com/weekly-workout/ummc-cases-part-iii-when-t-waves-help-tell-the-story/#:~:text=subtle%20abnormality%20hiding%20at%20the%20end%20of%20the%20QRS

[^ajem-brady-08-14]: Lee D、Gill S、Shokr H、McLaren JTT 等，〈Bradycardia in the emergency department: quality measures and opportunities for improvement〉— The American Journal of Emergency Medicine（美國急診醫學期刊），2026-08-14（PMID 42617394）。原文：「Secondary bradycardias were more likely to have BP < 90 mmHg (19.1 vs 6.5%, p < 0.05) and higher mortality (25.0 vs 4.8%, p < 0.05) than primary bradycardias... ECG-to-intervention time was rapid for bradycardia secondary to opioid overdose (1 min to naloxone) and intracranial emergencies (62 min to CT) despite the lack of ECG changes, but longer for myocardial infarction (76 min to aspirin) and hyperkalemia (111 min to calcium) despite ECG changes.」。 https://pubmed.ncbi.nlm.nih.gov/42617394/#:~:text=111%20min%20to%20calcium

[^jacepo-qoh-swedish]: Lindow T、Nyström A、Forberg JL、Mokhtari A 等（含 Smith SW、Meyers HP），〈Improved Detection of Acute Coronary Occlusion Myocardial Infarction by an Artificial Intelligence Electrocardiogram Model in Swedish Emergency Departments〉— Journal of the American College of Emergency Physicians Open（美國急診醫師學會期刊公開版），2026-10（PMID 42614578）。原文：「Among 24,511 patients (mean age 59 ± 19 years, 52% male), 467 (1.9%) had OMI. QoH achieved higher sensitivity than STEMI criteria (52% [47 to 57] vs 23% [19 to 27]), similar specificity (99% [99 to 99] vs 98% [98 to 98]), higher positive predictive value (51% [47 to 54] vs 17% [15 to 20])... corresponding number for the extended criteria were 41% (36 to 45), 95% (95 to 96), 14% (12 to 15), and 99% (99 to 99).」。 https://pubmed.ncbi.nlm.nih.gov/42614578/#:~:text=QoH%20achieved%20higher%20sensitivity%20than%20STEMI%20criteria

[^jelectro-masonlikar]: de Alencar J，〈Geometric distortion of the limb-lead system under Mason-Likar electrode placement〉— Journal of Electrocardiology（心電圖學期刊），2026 年 11 月號。 https://doi.org/10.1016/j.jelectrocard.2026.154428

[^jelectro-qrs-lbbb]: Herrán-Fonseca C、Gomes Batista P、Vasconcelos Montenegro M、Albino dos Santos Silva R 等，〈Prognostic impact of prolonged QRS duration or LBBB morphology on cardiovascular outcomes in chronic heart failure without ventricular pacing or cardiac resynchronization therapy: A systematic review and meta-analysis〉— Journal of Electrocardiology（心電圖學期刊），2026 年 11 月號。 https://doi.org/10.1016/j.jelectrocard.2026.154430

[^aslanger-cmr]: Aslanger EK、Aggül B、İnan D、Taşdelen N 等，〈Spatial proximity or vector orientation? Re-evaluating ECG interpretation in anterior myocardial infarction using cardiac magnetic resonance〉— Journal of Electrocardiology（心電圖學期刊），2026-06-28（PMID 42378794）。原文：「Conventional ECG localization categories demonstrated no significant association with CMR-defined infarct distribution (P = 0.24), with poor agreement (κ = 0.122)... global ST-segment burden was associated with CMR-defined infarct size (ΣSTE: standardized β = 0.307, P = 0.002).」。 https://pubmed.ncbi.nlm.nih.gov/42378794/

[^circep-laac]: Rao A、Ravi V、Murthi M、Chikatimalla R 等，〈Left Atrial Appendage Closure Versus Oral Anticoagulation in Atrial Fibrillation: A Systematic Review and Meta-Analysis of Randomized Controlled Trials〉— Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-08-21。原文：「LAAC was associated with a higher risk of ischemic stroke (RR, 1.41 [95% CI, 1.04–1.91]; P =0.03; 3.2% versus 2.1%)... LAAC was associated with a significantly lower risk of nonprocedural major bleeding (RR, 0.57 [95% CI, 0.43–0.77]; P <0.01; 6.2% versus 10.7%).」。 https://doi.org/10.1161/circep.126.015245

[^circep-pfa-mi]: Patel A、Kocharian A、Lopez-Martinez H、Maturana Gonzalez M 等，〈Transmurality and Autonomic Effects of Pulsed Field Ablation on the Mitral Isthmus〉— Circulation: Arrhythmia and Electrophysiology（循環：心律不整與電生理），2026-08-21。原文：「Endocardial PFA led to durable epicardial electrogram attenuation in 52.1%... Across all 3 PFA platforms, endocardial ablation of the MI is not reliably transmural and does not ablate VOM parasympathetic innervation.」。 https://doi.org/10.1161/circep.126.015125

[^europace-vpfa]: Compagnucci P、Finori L、Casella M、Gasperetti A 等，〈Ventricular Pulsed Field Ablation from Bench to Bedside: Preclinical and Clinical Evidence from a Systematic Review and Meta-Analysis〉— Europace（歐洲節律），2026-08-19。原文：「Clinically, acute success was high for both premature ventricular complexes (PVCs, 90%; 95%CI, 83%-96%) and ventricular tachycardia (VT; 92%; 95%CI, 87%-96%)... recurrence rates were 19% (95%CI,12%-28%) for PVCs and 21% (95%CI,10%-35%) for VT. The overall complication rate was 10%.」。 https://doi.org/10.1093/europace/euag221

[^europace-ltbp4]: Hasebe Y、Nochioka K、Nakano M、Chiba T 等，〈Latent Transforming Growth Factor Beta Binding Protein 4 as a Biomarker of Arrhythmia-Induced Cardiomyopathy in Atrial Fibrillation: Insights from a High-Throughput Proteomic Analysis〉— Europace（歐洲節律），2026-08-20。 https://doi.org/10.1093/europace/euag224

[^jacc-aiecg-community]: Poterucha T、Hughes J、Brener M、Chuang M 等，〈AI-ECG Detection of Structural Heart Disease in the Community Setting〉— JACC（美國心臟學會期刊），2026 年 8 月號。 https://doi.org/10.1016/j.jacc.2026.06.013

[^jacc-afib-measures]: Benjamin E、Marcus G、Hess P、Addison D 等，〈2026 AHA/ACC Clinical Performance and Quality Measures for Patients With Atrial Fibrillation〉— JACC（美國心臟學會期刊），2026 年 8 月號。 https://doi.org/10.1016/j.jacc.2026.05.032

[^resus-endpoint]: Silwanis C、Groche M、Steinwender C、Lambert T，〈Coronary stenosis or acute occlusion? Endpoint choice in AI-based coronary triage after cardiac arrest〉— Resuscitation（急救期刊），2026 年 10 月號。 https://doi.org/10.1016/j.resuscitation.2026.111258

[^annals-ae-underreport]: Penland M、Chen E、Archer D、Harris T 等，〈Underreporting of Adverse Events in Arrhythmia Therapy Trials〉— Annals of Emergency Medicine（急診醫學年鑑），2026 年 9 月號。 https://doi.org/10.1016/j.annemergmed.2026.04.024

[^annals-ems-equipment]: Ramraj R、Chen E、Huang X、Haddad G 等，〈Emergency Medical Services Equipment Use in the Emergency Department and Time to Care for Those With Out-of-Hospital Cardiac Arrest〉— Annals of Emergency Medicine（急診醫學年鑑），2026 年 9 月號。 https://doi.org/10.1016/j.annemergmed.2026.04.011

[^jamacardio-la-strain]: Jering K、Manafi A、Claggett B、Bart N 等，〈Left Atrial Structure and Function, Clinical Outcomes, and Efficacy of Vutrisiran in Transthyretin Amyloidosis With Cardiomyopathy〉— JAMA Cardiology（美國醫學會期刊：心臟學），2026-08-19。原文：「LASr and LASct were independently associated with ACM and recurrent cardiovascular events (LASr: hazard ratio [HR] per 5% worsening, 1.37; 95% CI, 1.13-1.68; P = .002)... In contrast, LAVi was not associated with these outcomes.」。 https://doi.org/10.1001/jamacardio.2026.2992

[^jamacardio-ivl-vf]: Zhao Y、Ooi Y，〈Ventricular Fibrillation With Intravascular Lithotripsy〉— JAMA Cardiology（美國醫學會期刊：心臟學），2026-08-19。 https://doi.org/10.1001/jamacardio.2026.3113

[^frick-illusion]: Frick WH、Smith SW，〈The illusion of simplicity: Diagnostic inconsistencies within the STEMI paradigm〉— Journal of Electrocardiology（心電圖學期刊），2026-06-10（PMID 42287922）。原文：「Coronary angiography performed 15 h after presentation revealed an acute total thrombotic occlusion of the LAD... Evidence suggests that standard STEMI criteria fail to identify up to 38% of LAD occlusions, whereas expert interpretation and AI models have far higher sensitivity.」。 https://pubmed.ncbi.nlm.nih.gov/42287922/
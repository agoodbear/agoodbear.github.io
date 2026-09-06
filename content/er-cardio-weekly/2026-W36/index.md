---
title: "讀心電圖的六個原則，沒有一個是毫米"
subtitle: "_本週最該讀的一篇，把二十年來散在各處的專家讀圖直覺整理成六條可以教、可以查核的原則——動態性、急性度、對應性、比例性、整體性、代理性——而毫米數只是其中最弱的那一條的最弱版本。另外三張卡（一份被時鐘出賣的急診心搏過緩稽核、四萬人份的撲動與顫動中風差異、一張嚴重胸痛配竇性心搏過速的老圖重讀）問的其實是同一題：你手上那個數字，究竟代表什麼。_"
shortTitle: "六個原則，沒有毫米"
slug: "2026-W36"
week: "2026-W36"
weekRange: "2026-08-31 — 2026-09-06"
date: 2026-09-06T10:00:06+08:00
coreTime: "3 分鐘"
fullTime: "12 分鐘"
readingTime: "12 分鐘"
scanned: 161
picked: 4
tags: ["OMI", "電生理", "Resus"]
practiceChanges:
  - text: "缺血心電圖改用**六個原則**讀——動態性、急性度、對應性、比例性、整體性、代理性；毫米數不是原則，它只是「代理性」那一條最弱的版本"
    source: "European Heart Journal: Acute Cardiovascular Care 9-03（OMI 判讀原則回顧）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42690215/"
  - text: "看到**心房顫動合併規則而緩慢的心室反應**，讀成三度房室阻滯加交界性逸搏——那不是「顫動比較慢」，不要嘗試整流"
    source: "American Journal of Emergency Medicine（急診心搏過緩品質稽核）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42617394/"
  - text: "心電圖**已經告訴你答案**的心搏過緩要用 naloxone 的反射速度處理——稽核資料是高血鉀給鈣 111 分鐘、心肌梗塞給阿斯匹靈 76 分鐘，比心電圖毫無變化的鴉片類過量（1 分鐘）慢得多"
    source: "American Journal of Emergency Medicine（急診心搏過緩品質稽核）"
    href: "https://pubmed.ncbi.nlm.nih.gov/42617394/"
  - text: "病歷寫「心房撲動」時**不要自動降階抗凝血評估**——芬蘭全國資料裡，有撲動紀錄的人有 78% 同時被記錄到心房顫動，而那一組的中風風險比純顫動還高"
    source: "European Heart Journal 9-03（芬蘭全國世代）"
    href: "https://doi.org/10.1093/eurheartj/ehag681"
  - text: "**嚴重胸痛合併竇性心搏過速**，先跑一次非冠狀動脈災難清單（肺栓塞、主動脈剝離、心包填塞、大出血、敗血症）再進 ACS 流程"
    source: "Smith ECG Blog 9-02"
    href: "https://drsmithsecgblog.com/severe-chest-pain-and-sinus-tachycardia/"
sections:
  - { id: "changes", num: "▲", title: "本週改動" }
  - { id: "s1",  num: "01", title: "六個原則取代毫米" }
  - { id: "s2",  num: "02", title: "被時鐘出賣的心搏過緩" }
  - { id: "s3",  num: "03", title: "撲動只占 5.9%" }
  - { id: "s4",  num: "04", title: "胸痛配上心搏過速" }
  - { id: "more", num: "▾", title: "延伸與出處" }
---

## 六個原則，而其中沒有一條是毫米 {#s1}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42690215/#:~:text=six%20principles" anno="這篇沒有單一張 tracing，看的時候請把<b>六個原則各自對到一張你自己看過的圖</b>：哪一次是靠連拍看出來的（動態性）、哪一次是靠 aVL 的鏡像確認的（對應性）、哪一次是因為 QRS 很大所以那 1.5 毫米其實不算什麼（比例性）。對不上的那幾條，就是你這週該補的" linktext="到 PubMed 看這篇回顧的摘要 ↗" >}}

**是什麼：** European Heart Journal: Acute Cardiovascular Care（歐洲心臟期刊：急性心血管照護）9-03，Helseth HC、Mansur P、El-Baba M、McLaren JTT 等：把專家判讀缺血心電圖時實際在做的事，整理成六個原則——**動態性**（dynamicity）、**急性度**（acuteness）、**對應性**（reciprocity）、**比例性**（proportionality）、**整體性**（totality）、**代理性**（surrogacy）。作者自陳這六條都取自既有學術基礎，這篇的貢獻是把它們整合成一個連到冠狀動脈病理的單一框架。[^ehjacc-omi-principles]

**為什麼要在意：** STEMI／NSTEMI 這套典範的整個地基，是「毫米數的 ST 上升可以當成急性冠狀動脈閉塞的可靠替代指標」這個假設。

這個假設在數字上撐不住已經很久了。本週稍早那份瑞典 24,511 位急診胸痛病人的驗證裡，傳統 STEMI 準則對血管攝影確認的閉塞型心肌梗塞，敏感度只有 <mark>23%</mark>——同一批圖，人工智慧模型是 52%。[^jacepo-qoh-swedish] Frick 與 Smith 的案例回顧則指出，標準 STEMI 準則會<mark>漏掉多達 38% 的左前降支閉塞</mark>。[^jelectro-frick-smith]

真正值得停下來的是第六條：**代理性**。<mark>心電圖是冠狀動脈閉塞的代理指標，不是閉塞本身</mark>。這句話聽起來像廢話，但它解釋了為什麼前五條原則存在——正因為你看的是影子不是物體，你才需要用動態、對應、比例這些方法去反推物體的形狀。毫米數之所以失敗，不是因為它太粗糙，而是因為它把影子當成了物體。

{{< grade "敘述性回顧 · 專家框架整合 · 無新資料 · 觀點級" "opinion" >}}

**所以呢：** 六條各換成一個床邊動作。**動態性**——連拍，而且比較的對象是這位病人的前一張，不是常模。**急性度**——問這張圖處在演化的哪一段（高聳 T 波、ST 抬升、Q 波、再灌流後的 T 波倒置），因為同樣的形態在不同時間點意義完全不同。**對應性**——找對側導程的鏡像；下壁的 ST 抬升沒有 aVL 的壓低，要重新想。**比例性**——ST 抬升永遠要跟同導程的 QRS 振幅比，不是跟 1 毫米比。**整體性**——整張圖一起讀，單一導程的異常在整體脈絡裡可能是雜訊也可能是唯一線索。**代理性**——記住你在推論，不是在觀察。

**台灣情境：** 台灣急診的實務阻力不在判讀，在那個標籤本身。「STEMI」寫進病歷會啟動導管室、會進到品質指標；「NSTEMI」不會。而 OMI 目前不是一個 ICD 診斷碼，短期內也不會是——這代表你沒辦法靠改診斷碼來改變流程。

可行的落地點只有一個：**改你打電話給心臟科時說的那句話**。從「他 ST 沒有到 1 毫米」改成「他 aVL 有對應性壓低、V2–V4 的 ST 相對 QRS 不成比例、而且兩張圖之間是動態變化的」。這六個原則最實際的用途，是替那通電話提供一套對方也能檢查的語言。

---

## 心電圖給了線索的那些，反而處理得比較慢 {#s2}

{{< ecg-linkout href="https://pubmed.ncbi.nlm.nih.gov/42617394/#:~:text=111%20min%20to%20calcium" anno="這則要看的是<b>兩組時間並排</b>：心電圖<b>沒有</b>變化的那些——鴉片類過量 1 分鐘給到 naloxone、顱內急症 62 分鐘進電腦斷層；心電圖<b>有</b>變化的那些——心肌梗塞 76 分鐘才給阿斯匹靈、高血鉀 111 分鐘才給鈣。方向跟直覺是相反的" linktext="到 PubMed 看完整摘要與數字 ↗" >}}

**是什麼：** American Journal of Emergency Medicine（美國急診醫學期刊）8-14，Lee D、Gill S、Shokr H、McLaren JTT 等：兩家教學醫院 2024 年 7 月至 2025 年 6 月間、檢傷心率低於 50 且住院的 198 位病人，回溯病歷審查。依住院經過分成原發性（最後裝了永久節律器，62 人）、次發性（需要治療某個次要病因，68 人）、兩者皆非（68 人）。醫師的心電圖判讀與盲化判讀對照，並計算各項處置時間。[^ajem-brady]

**為什麼要在意：** 這份稽核給了兩個跟直覺相反的結果。

第一個是誰比較危險。聽起來嚇人的是「需要裝節律器」那組，但實際上次發性那組收縮壓低於 90 的比例更高（19.1% 對 6.5%），死亡率也更高——<mark>25.0% 對 4.8%</mark>。心搏過緩本身不是病，它是某個東西的表現；而那個東西比心跳慢本身危險得多。

第二個更難堪。把心電圖到第一個對因治療的時間攤開來看：鴉片類過量到 naloxone 是 1 分鐘、顱內急症到電腦斷層是 62 分鐘——這兩者的心電圖都**沒有**特異變化。反過來，<mark>高血鉀到給鈣是 111 分鐘、心肌梗塞到阿斯匹靈是 76 分鐘</mark>，而這兩者的心電圖**有**變化。低體溫也一樣：環境性低體溫 26 分鐘開始復溫，低體溫性敗血症要 112 分鐘。

也就是說，<mark>心電圖給了線索的那些情況，反而處理得比較慢</mark>。合理的解釋是：快的那幾個有現成的臨床腳本（看到針孔就給 naloxone、意識改變就推電腦斷層），而慢的那幾個需要有人主動把心電圖上的圖形連到一個藥物。腳本比線索快。

原發性那組也有具體漏洞：細微房室阻滯的辨識延遲，包括心房顫動或撲動合併三度房室阻滯；以及對「心房顫動合併緩慢心室反應」嘗試整流。

{{< grade "回溯 · 雙中心病歷審查 · n=198 · 品質改善級" "retro" >}}

**所以呢：** 四個動作。第一，檢傷心率低於 50，第一個問題是「原發還是次發」——會死的是次發那組。第二，**心房顫動合併規則而緩慢的心室反應等於三度房室阻滯加交界性逸搏**：規則是關鍵字，因為真正的顫動傳導不會規則。這種情況整流沒有意義，房室結不會因為電擊而恢復傳導。

第三，高血鉀的鈣要放進跟 naloxone 同一個反射層級——不必等鉀離子報告，寬 QRS 加高聳 T 波加心搏過緩就是給的理由。第四，低體溫不要等體溫計，而且要記得敗血症的低體溫最容易被漏掉，因為它沒有「掉進水裡」這種現成的故事。

**台灣情境：** 台灣急診的心搏過緩流程多半寫到「不穩定就 atropine，無效就經皮節律」為止。這份稽核指出真正的損失發生在那之前——在從心電圖到第一個對因治療的那段空白裡。

它最值得複製的其實是方法本身：把過去一年檢傷心率低於 50 的住院病人拉出來，只記錄兩個時間戳（心電圖完成時間、第一個對因治療時間），照原發／次發分層，看看哪一格特別長。這是不需要新設備、也不需要倫理審查以外任何資源的稽核，任何一家醫院都做得起來。

---

## 「心房撲動」這個標籤只涵蓋 5.9% 的人 {#s3}

{{< ecg-linkout href="https://doi.org/10.1093/eurheartj/ehag681#:~:text=lower%20in%20the%20AFL-only%20group" anno="讀這份不要只記住「撲動比較低」那個 0.60。先看<b>三組的大小</b>：純顫動 30,261 人、純撲動只有 2,409 人、兩者都有 8,316 人——換句話說，<b>被記錄到撲動的人裡有 78% 同時被記錄到顫動</b>，而那一組的風險是往上的（IRR 1.11）" linktext="到 European Heart Journal 看完整結果 ↗" >}}

**是什麼：** European Heart Journal（歐洲心臟期刊）9-03，Eyob Fesseha H、Aro A、Teppo K、Haukka J 等：芬蘭 FinACAF 全國登錄串接，2007–2018 年所有新發生心房顫動或心房撲動的 40,986 位病人、532,041 張數位記錄的心電圖。依心電圖分成純顫動（30,261）、純撲動（2,409）、兩者皆有（8,316）。平均追蹤 1.2 年，77.6% 曾開始抗凝血，缺血性中風 3,165 人（7.7%）。校正後發生率比：純撲動 0.60（95% CI 0.49–0.74）、兩者皆有 1.11（1.02–1.20），對照組為純顫動。在僅計算未抗凝期間、導管消融前，以及各 CHA2DS2-VA 分層，結果一致。[^ehj-afl-stroke]

**為什麼要在意：** 這是第一份用**實際數位心電圖**而非診斷碼來分類的大規模資料。過去「撲動的中風風險比顫動低」的說法一直流通，但缺乏心電圖層級的證據——因為診斷碼裡的「心房撲動」很可能只是某一次心電圖剛好抓到撲動的顫動病人。

而真正該帶走的不是那個 0.60，是分母。<mark>純撲動只占全體的 5.9%</mark>。反過來算：所有被記錄到撲動的 10,725 人裡，<mark>有 78% 同時被記錄到心房顫動</mark>，而那一組的校正後風險比純顫動還高一點（1.11）。

所以急診看到一張撲動的心電圖時，你面對的通常不是那 5.9%，而是「顫動還沒被記錄到」的那 78%。追蹤只有平均 1.2 年這件事讓這個推論更強——撲動轉成顫動需要時間，跟得更久，純撲動那一格只會更小。

還有一個容易被忽略的絕對值：純撲動那組的粗發生率是 <mark>1.1 起中風／100 人年</mark>。相對於顫動確實較低，但這絕不是一個可以不處理的數字。

{{< grade "全國世代 · n=40,986 · 心電圖判定分組 · 中高證據級" "retro" >}}

**所以呢：** 三件事。第一，心電圖是撲動，**不要讀成「比顫動安全」**——抗凝血決策照 CHA2DS2-VA 走，跟顫動同一套規則。第二，多做一個動作：翻既往心電圖、住院紀錄與任何 Holter 報告找有沒有顫動；找到了，就等於把這位病人從 5.9% 那格移到 78% 那格，而後者的風險是往上的。

第三，出院或轉診時把節律寫清楚。寫「AFL」，下一個接手的人讀到的就是一個被廣泛認為比較良性的標籤；寫「心房撲動，需比照心房顫動評估抗凝血」，那個判斷才會傳下去。

**台灣情境：** 台灣急診常見的劇本是：規則窄 QRS、心室率 150、判為 2:1 心房撲動，控制心室率、症狀改善、出院，抗凝血的事留給心臟科門診。這份資料把那個轉診的份量拉高了一階——不是因為撲動特別危險，而是因為那張撲動心電圖多半只是這位病人心房病變的第一次現形。

如果門診回診間隔是兩到三個月，而這中間沒有人回頭翻既往心電圖，那 78% 的機會就會被那個「撲動」的標籤蓋住。這件事不需要新流程，只需要在離開急診前多按幾下滑鼠。

---

## 嚴重胸痛配上竇性心搏過速 {#s4}

{{< ecg-linkout href="https://drsmithsecgblog.com/severe-chest-pain-and-sinus-tachycardia/#:~:text=Severe%20Chest%20pain%20and%20Sinus%20Tachycardia" anno="看這張圖之前先固定順序：<b>先問這個心搏過速是什麼在驅動</b>（疼痛、低血容、栓塞、休克代償），<b>再讀 ST-T</b>。因為心率一高，基線本身就會被 P 波與 T 波的重疊拉動——你在快速心律上讀到的那個「輕微壓低」，不一定是缺血" linktext="到 Smith 部落格看這張圖與逐段判讀 ↗" >}}

**是什麼：** Smith 心電圖部落格（Dr. Smith's ECG Blog）9-02〈Severe Chest pain and Sinus Tachycardia〉：2010 年 10 月 26 日舊文重貼，Smith 更新內文，Ken Grauer 補上逐段判讀。標題就是整張卡的題目——嚴重胸痛，配上竇性心搏過速。[^smith-sinustach-09-02]

**為什麼要在意：** 竇性心搏過速在胸痛病人身上很少是良性的。它在告訴你有某個東西正在要求更高的心輸出，而疼痛與焦慮是這份清單裡最無害的一項——它是排除診斷，不是起始診斷。要先想過的其實很短也很重：肺栓塞、主動脈剝離、心包填塞、大出血、敗血症。

第二層是判讀本身的陷阱。<mark>心率越快，ST 段的偏移越可能與缺血無關</mark>——心率相關的 ST 壓低、P 波尾端疊進 ST 段、T 波與下一個 P 波重疊拉高基線，這些在 130 以上的竇性節律裡都是常態。於是「胸痛＋心搏過速」變成雙向陷阱：你可能因為心率讀出不存在的缺血，也可能因為節律太吸睛而漏掉真的缺血。

第三層是機轉上的提示。單純的冠狀動脈閉塞本身通常不會把竇性心率推到明顯過速，除非已經合併泵衰竭或心因性休克——那是另一個層級的壞消息。所以<mark>嚴重胸痛配上明顯竇性心搏過速，反而該把非冠狀動脈的災難往前排</mark>，或者接受你面對的是一個已經在代償失敗邊緣的梗塞。兩種解釋都不允許你慢慢來。

{{< grade "案例 · 舊文更新 · 專家逐段判讀 · 觀點級" "opinion" >}}

**所以呢：** 三個動作。第一，把心搏過速當成一個**獨立待解的問題**寫進病歷，跟胸痛並列，不要讓它降級成胸痛的附註——寫下來才會有人回頭處理。

第二，床邊超音波在這個組合裡幾乎是必做：右心室大小、心包腔、下腔靜脈、主動脈根部。四個切面，可以把上面那份清單砍掉一半，而且花的時間比等第一套生化短。

第三，連拍心電圖時把當下心率一起記下來。心率降下來之後 ST 段跟著改變，這件事本身就是資訊——它把「心率相關的偏移」跟「真的缺血」分開，而這正是上一張卡那六個原則裡的**動態性**。

**台灣情境：** 台灣急診檢傷把「胸痛」直接導向 ACS 流程是合理的預設，問題在檢傷生命徵象裡那個心率——它通常只被用來決定分級，不會回頭改變診斷方向。心跳 118 的胸痛病人跟心跳 76 的胸痛病人，走的往往是同一條路。

可行的小改動是把「胸痛 ＋ 心率大於 100」設成一個提示：這個組合先跑一次非冠狀動脈災難清單，再進 ACS 流程，而不是反過來。這不需要改系統，寫進科內共識與交班用語就會生效。

---

## 延伸與出處 {#more}

### 本週四張卡的共同線

上一期在講「標籤先出現，然後思考就停在那裡」。本週的四張卡往前推了一步，指的是**那個標籤裡的數字究竟代表什麼**。

毫米數代表的是影子的高度，不是血管的通暢與否（卡 01）。心搏過緩的心率代表的是一個被驅動的結果，不是病本身，而心電圖上那些明顯的線索反而讓處理變慢（卡 02）。「心房撲動」這四個字代表的是某一次心電圖的瞬間狀態，不是這位病人的心房疾病全貌（卡 03）。檢傷單上那個 118，代表的是身體正在為某件事付出代價（卡 04）。

四張卡的共同動作也一樣：**把手上那個數字還原成它所代理的東西**，然後去找那個東西。

### 誰這週有新作

Smith 與 McLaren 本週同時出現在兩份性質完全不同的期刊——歐洲心臟期刊急性心血管照護分刊那份六原則框架，以及美國急診醫學期刊那份急診心搏過緩的品質稽核。前者是理論整合，後者是流程稽核，兩者放在一起讀比各自讀有意思：一個告訴你該怎麼看，另一個告訴你看懂了之後你的醫院實際上花了多久才做事。

Aslanger 則在 Journal of Electrocardiology（心電圖學期刊）用心臟磁振造影檢驗了一個更基本的假設。105 位前壁心肌梗塞病人在發病後 3–7 天接受磁振造影，結果傳統的心電圖定位分類與影像確認的梗塞分布**沒有顯著關聯**（P = 0.24），一致性 <mark>κ = 0.122</mark>；簡化的 ST 軸向也只有微弱且不一致的關聯。唯一站得住的是整體 ST 負荷與梗塞大小的關聯（標準化 β = 0.307，P = 0.002）。[^jelectro-aslanger-cmr]

這份資料剛好是卡 01 那六個原則裡「整體性」與「代理性」的實證版本：**心電圖比較擅長告訴你損傷有多大，不擅長告訴你損傷在哪裡**。

### 期刊速報

**Europace（歐洲節律）**——Sado G 等的 STROKESTOP 與 STROKESTOP II 事後分析（9-03）：75–76 歲族群心電圖篩檢出的心房顫動，追蹤期間有 23%（STROKESTOP）與 20%（STROKESTOP II）發生心衰竭，發生率分別是每 100 人年 3.76 與 4.19；相對於無心房顫動者，校正後風險比為 3.19 與 4.73，與已知心房顫動者相當甚至更高。結論一句話：篩檢出來的心房顫動不是良性狀態。[^europace-strokestop-hf] 同期還有 DANPACE II 試驗的最小化心房節律與心房顫動負荷分析[^europace-danpace2]、以及丹麥的心室頻脈族群發生率研究[^europace-vt]。

**European Heart Journal（歐洲心臟期刊）**——脈衝場消融後、延遲性惡性心室心律不整發生之前的漸進性 QRS 變寬（影像個案）[^eurheartj-pfa-qrs]；以及一篇針對「預測猝死的新心電圖生物標記是否已經成熟」的週評[^eurheartj-scd-biomarker]。

**Journal of Electrocardiology（心電圖學期刊）**——兩篇技術性但直接影響判讀的文章：Mason-Likar 電極擺位造成的肢體導程幾何變形[^jelectro-masonlikar]，以及高通濾波導致的 ST 段變形量化[^jelectro-highpass]。兩者都在提醒同一件事——你讀到的那個 ST 段，中間隔著電極位置與濾波器兩層工程決定。

**JACC: Clinical Electrophysiology（美國心臟學會期刊：臨床電生理）**——心房顫動病人的左心耳血栓形成機轉回顧[^jacep-laa-thrombus]；經手臂路徑進行典型右心房撲動消融[^jacep-armflutter]。

**Annals of Emergency Medicine（急診醫學年鑑）**——心律不整治療試驗的不良事件通報不足[^annem-adverse]；以及緊急醫療救護器材在急診沿用對院外心跳停止病人處置時間的影響[^annem-ems]。

---

## 引用 {#refs}

[^ehjacc-omi-principles]: Helseth HC、Mansur P、El-Baba M、McLaren JTT 等，〈Electrocardiographic Principles for the Diagnosis of Occlusion Myocardial Infarction〉— European Heart Journal: Acute Cardiovascular Care（歐洲心臟期刊：急性心血管照護），2026-09-03。原文：「This review outlines six principles, dynamicity, acuteness, reciprocity, proportionality, totality, and surrogacy, that organize expert interpretation of the ischemic ECG and are essential to the electrocardiographic diagnosis of OMI.」。 https://pubmed.ncbi.nlm.nih.gov/42690215/#:~:text=six%20principles

[^jelectro-frick-smith]: Frick WH、Smith SW，〈The illusion of simplicity: Diagnostic inconsistencies within the STEMI paradigm〉— Journal of Electrocardiology（心電圖學期刊），2026。原文：「Evidence suggests that standard STEMI criteria fail to identify up to 38% of LAD occlusions, whereas expert interpretation and AI models have far higher sensitivity.」。 https://pubmed.ncbi.nlm.nih.gov/42287922/#:~:text=38%25

[^jacepo-qoh-swedish]: Lindow T、Nyström A、Forberg JL、Mokhtari A 等，〈Improved Detection of Acute Coronary Occlusion Myocardial Infarction by an Artificial Intelligence Electrocardiogram Model in Swedish Emergency Departments〉— Journal of the American College of Emergency Physicians Open（美國急診醫師學會期刊公開版），2026。原文：「QoH achieved higher sensitivity than STEMI criteria (52% [47 to 57] vs 23% [19 to 27]), similar specificity (99% [99 to 99] vs 98% [98 to 98])」。 https://pubmed.ncbi.nlm.nih.gov/42614578/#:~:text=52%25

[^ajem-brady]: Lee D、Gill S、Shokr H、McLaren JTT 等，〈Bradycardia in the emergency department: quality measures and opportunities for improvement〉— The American Journal of Emergency Medicine（美國急診醫學期刊），2026-08-14。原文：「ECG-to-intervention time was rapid for bradycardia secondary to opioid overdose (1 min to naloxone) and intracranial emergencies (62 min to CT) despite the lack of ECG changes, but longer for myocardial infarction (76 min to aspirin) and hyperkalemia (111 min to calcium) despite ECG changes.」。 https://pubmed.ncbi.nlm.nih.gov/42617394/#:~:text=111%20min%20to%20calcium

[^ehj-afl-stroke]: Eyob Fesseha H、Aro A、Teppo K、Haukka J 等，〈Ischaemic stroke in atrial flutter vs fibrillation: a Finnish nationwide study〉— European Heart Journal（歐洲心臟期刊），2026-09-03。原文：「Adjusted IRR of IS was lower in the AFL-only group (0.60, 95% CI 0.49–0.74) and slightly higher in the AF & AFL group (1.11, 95% CI 1.02–1.20) compared with patients with AF-only.」。 https://doi.org/10.1093/eurheartj/ehag681

[^smith-sinustach-09-02]: Smith SW（Ken Grauer 補述），〈Severe Chest pain and Sinus Tachycardia〉— Dr. Smith's ECG Blog（Smith 心電圖部落格），2026-09-02。原文：「Today's case is a repost from October 26, 2010. I have updated the post — and Ken Grauer…」。 https://drsmithsecgblog.com/severe-chest-pain-and-sinus-tachycardia/

[^jelectro-aslanger-cmr]: Aslanger EK、Aggül B、İnan D、Taşdelen N 等，〈Spatial proximity or vector orientation? Re-evaluating ECG interpretation in anterior myocardial infarction using cardiac magnetic resonance〉— Journal of Electrocardiology（心電圖學期刊），2026。原文：「Conventional ECG localization categories demonstrated no significant association with CMR-defined infarct distribution (P = 0.24), with poor agreement (κ = 0.122)... In contrast, global ST-segment burden was associated with CMR-defined infarct size (ΣSTE: standardized β = 0.307, P = 0.002)」。 https://pubmed.ncbi.nlm.nih.gov/42378794/#:~:text=%CE%BA%20%3D%200.122

[^europace-strokestop-hf]: Sado G、Bonander C、Kemp Gudmundsdottir K、Djupsjö C 等，〈Incident heart failure in patients with screening-detected atrial fibrillation: a post hoc analysis of the STROKESTOP and STROKESTOP II studies〉— Europace（歐洲節律），2026-09-03。原文：「In STROKESTOP, 23% of participants with screening-detected atrial fibrillation developed heart failure (3.76 per 100 person-years)... Screening-detected atrial fibrillation was associated with a threefold higher heart failure risk vs. no atrial fibrillation (adjusted HR 3.19)」。 https://doi.org/10.1093/europace/euag250

[^europace-danpace2]: Frausing M、Mikkelsen F、Kronborg M、Larsen J 等，〈Minimized Atrial Pacing and Atrial Fibrillation Burden in the DANPACE II trial〉— Europace（歐洲節律），2026-09-04。 https://doi.org/10.1093/europace/euag254

[^europace-vt]: Rasmussen P、Holt A、Tønnesen J、Middelfart C 等，〈Incidence and Clinical Implications of Ventricular Tachycardia: A Population-based Approach〉— Europace（歐洲節律），2026-09-03。 https://doi.org/10.1093/europace/euag234

[^eurheartj-pfa-qrs]: Nakagawa K、Kuroki K、Aonuma K，〈Progressive QRS widening preceding delayed malignant ventricular arrhythmias after pulsed field ablation〉— European Heart Journal（歐洲心臟期刊），2026-09-03。 https://doi.org/10.1093/eurheartj/ehag692

[^eurheartj-scd-biomarker]: Lanza G、Liuzzo G，〈Weekly Journal Scan: A novel electrocardiogram biomarker predicting sudden cardiac death: ready for prime time?〉— European Heart Journal（歐洲心臟期刊），2026-09-03。 https://doi.org/10.1093/eurheartj/ehag682

[^jelectro-masonlikar]: de Alencar J，〈Geometric distortion of the limb-lead system under Mason-Likar electrode placement〉— Journal of Electrocardiology（心電圖學期刊），2026 年 11 月號。 https://doi.org/10.1016/j.jelectrocard.2026.154428

[^jelectro-highpass]: Barmpagiannos K、Malik Z、Whyte S、Stavrakis S，〈Quantifying high-pass filter-induced ST-segment distortion〉— Journal of Electrocardiology（心電圖學期刊），2026 年 11 月號。 https://doi.org/10.1016/j.jelectrocard.2026.154442

[^jacep-laa-thrombus]: Zhou J、Malik R、Fredenburgh J、Lauw M 等，〈Left Atrial Appendage Thrombosis in Patients With Atrial Fibrillation〉— JACC: Clinical Electrophysiology（美國心臟學會期刊：臨床電生理），2026 年 9 月號。 https://doi.org/10.1016/j.jacep.2026.07.030

[^jacep-armflutter]: Tolat A、Panza G、Moskowitz C、Friedman M 等，〈Ablation of Typical Right Atrial Flutter Through the Arm〉— JACC: Clinical Electrophysiology（美國心臟學會期刊：臨床電生理），2026 年 9 月號。 https://doi.org/10.1016/j.jacep.2026.07.024

[^annem-adverse]: Penland M、Chen E、Archer D、Harris T 等，〈Underreporting of Adverse Events in Arrhythmia Therapy Trials〉— Annals of Emergency Medicine（急診醫學年鑑），2026 年 9 月號。 https://doi.org/10.1016/j.annemergmed.2026.04.024

[^annem-ems]: Ramraj R、Chen E、Huang X、Haddad G 等，〈Emergency Medical Services Equipment Use in the Emergency Department and Time to Care for Those With Out-of-Hospital Cardiac Arrest〉— Annals of Emergency Medicine（急診醫學年鑑），2026 年 9 月號。 https://doi.org/10.1016/j.annemergmed.2026.04.011
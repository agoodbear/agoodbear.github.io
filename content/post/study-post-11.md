---
title: "一個急診醫師，怎麼走進Claude Code"
date: "2026-10-19T20:00:00+08:00"
description: "10月17日在宜蘭Claude Meetup的15分鐘分享整理：從被龍蝦斷線、硬著頭皮進Claude Code，到用講的取代打字、讓第二大腦先查寶藏再回答，最後發現專案的最後一哩路，還是得自己走。"
featured: false
draft: false
toc: true
thumbnail: "/images/meetup-1017/title-slide.jpg"
hook: "算得出太陽，算不出雲。"
categories:
  - study
tags:
  - Claude Code
  - Claude Meetup
  - 演講
  - 第二大腦
  - 語音輸入
  - AI 協作
# 🗂 改稿版次｜v1 · 第 3 輪 · 2026-10-21 17:04（請CC修改 1 處，⏳ 待確認）
#      v1 · 第 3 輪｜2026-10-21｜Keynote 截圖 4 張換高解析（2048×1536，從 Keynote 複本匯出 PDF 再轉圖）→ ⏳ 待確認
#      v1 · 第 2 輪｜2026-10-21｜請CC修改 1 處（知識循環投影片換成環完整出現的那一步）→ ⏳ 待確認
#      v1 · 第 1 輪｜2026-10-21 17:04｜請CC修改 1 處（Stanford 語音輸入句加長條圖）→ ⏳ 待確認
#      v1 · 第 0 版｜2026-10-19｜自 Roam 原稿 f_KXiMCHZ 轉入
---

<style>
.mt-fig{margin:1.8em auto;max-width:720px;text-align:center}
.mt-fig img,.mt-fig video{width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,.18)}
.mt-fig.mt-tall{max-width:480px}
.mt-fig figcaption{font-size:.9em;color:#777;margin-top:.6em;line-height:1.7}
.mt-pair{display:flex;gap:.8em;justify-content:center;margin:1.8em auto;max-width:720px}
.mt-pair figure{flex:1;margin:0;text-align:center}
.mt-pair img{width:100%;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,.18)}
.mt-pair figcaption{font-size:.9em;color:#777;margin-top:.6em}
.mt-box{border-left:5px solid #fe6a01;background:#fff6ee;padding:1em 1.2em;margin:1.6em 0;border-radius:6px;font-size:1.08em}
.mt-box.blue{border-left-color:#2f6fa8;background:#f1f6fb}
.mt-big{color:#b22800}
.mt-speed{background:#fffaf5;border-radius:10px;padding:1.2em 1.2em .8em}
.mt-row{display:flex;align-items:center;gap:.8em;margin:.6em 0;text-align:left}
.mt-lab{flex:0 0 8.5em;font-size:.95em}
.mt-track{flex:1}
.mt-bar{display:block;color:#fff;font-weight:700;padding:.35em .6em;border-radius:6px;text-align:right;box-sizing:border-box}
.mt-bar.kb{background:#8a8f98}
.mt-bar.sp{background:#fe6a01}
.mt-x{font-size:1.15em;margin-top:.6em;color:#b22800}
.mt-x b{font-size:1.6em}
@media (max-width:600px){.mt-pair{flex-direction:column}}
</style>

10月17日下午，我在宜蘭的Claude Meetup講了15分鐘，題目是〈一個急診醫師，怎麼走進Claude Code〉。急診醫師做了20年，沒有寫程式的底子。[^luma]

準備這場的時候，我請Claude Code把各國89場Claude Code相關演講整理了一遍，醫療背景的講者幾乎沒有。所以那天台下的人，大概是第一次在Claude Code Meetup聽急診醫師講話。

這篇把那天講的內容重新整理一次，順便記下一點現場的感覺。

## 很早就用過，講了幾句就沒有下文

Claude我其實很早就用過。2023年10月第一次打開，第一句問它「Who are you」，問完就沒有下文了。之後斷斷續續，2024年9月我拿來問我太太附卡到底消費什麼，得不到答案問完，又消失了490天。

真正讓我開始每天用AI做事的，是龍蝦（OpenClaw）。它今年1月底才紅起來，我2月中就跳進去養了，比台灣搜尋的最高峰還早三個禮拜。[^trends]<strong>我就是這種個性，看到新東西，會想先跳進去玩玩看。</strong>

用OpenClaw當殼、Discord當介面，那7個禮拜，龍蝦幫我讀了147篇文獻、寫了26篇每日ECG深思。然後4/5凌晨，就被斷了。我有點heartbroken，因為已經習慣這個工作流了。

之後我把龍蝦的大腦換成ChatGPT，發現它常常達不到我的要求。我要A，它可能給A-、A--，甚至給B。<strong class="mt-big">問A答B，要A給B。</strong>

於是乎，就硬著頭皮進了Claude Code的世界。

## 卡住我的，不是CLI，是我自己的心

當時我一直在想：我到底在害怕什麼？CLI介面、自己又不是資訊背景，不知道會不會太難。

4/9第一天，我在Claude Code裡打的是「你好，你能做什麼」，還有「我要怎麼在mac上找到，我找不到」。

後來才發現，很多都是自己的心魔。日本Meetup有位講者大森翔吾，原本也不是工程師，他說：「心才是最重要的。」[^omori]

我對寫程式的害怕是有來由的。2024年我在hahow上了一門架部落格的課，課程影片4小時24分。那時候完全不懂，老師說什麼就做什麼、一步一步跟著按，遇到困難再問老師，來來回回，最後才把一個很粗淺的部落格架起來。

<strong class="mt-big">4小時的課，我花了兩個多月。</strong>

其中一題相簿的問題，我在2/1凌晨00:35發問：「感謝hahow沒有黑名單機制，不然再問下去，我要黑掉了XD」。等了6天，老師2/7才回：「同學抱歉我竟然漏看了這題QQ，我來了我來了！」

這不是在怪老師，老師一看到，半小時內就寫好五個步驟的解法。重點是，真人再用心，也會漏看、也要睡覺。

現在不一樣了。網路上的老師不可能每分每秒都在等著幫你回答問題，<strong>但AI老師時時刻刻都在。</strong>雖然跳過了一些學習過程，但時間直接縮短，幾乎像有個24小時有問必答的線上老師。

架一個網站，從以前要兩個多月，到現在不用半小時。AI agent也是：從龍蝦殼接大腦，到換GPT大腦，最後走到Claude Code。該來的還是得來，與其知道自己要用Claude Code，不如現在就開始用。

## 從打字，變成用講的

剛開始用Claude Code的前三天，我都是一個字一個字打的。打字有它的好處：慢慢打的時候腦袋會慢慢想，想法會在來回對話中浮現。但產出成品的整體速度沒那麼快。

4/12開始，我改成用講的，然後發現了一個新世界。現在的模型是你一說什麼，它幾乎馬上就出來了。你問得夠快，它就能夠快幫你解決問題。

<strong class="mt-big">打字的速度有極限，但說話的速度可以非常快。</strong>

Stanford有一篇研究比較手機鍵盤跟語音輸入，中文用講的大約快3倍。[^ruan]

<figure class="mt-fig mt-speed">
<div class="mt-row"><span class="mt-lab">⌨️ 手機拼音鍵盤</span><span class="mt-track"><span class="mt-bar kb" style="width:35%">43</span></span></div>
<div class="mt-row"><span class="mt-lab">🎤 用講的</span><span class="mt-track"><span class="mt-bar sp" style="width:100%">123</span></span></div>
<div class="mt-x">中文快<b>2.87</b>倍</div>
<figcaption>單位：每分鐘輸入量（WPM）</figcaption>
</figure>

不過一開始會有一小段learning curve。**<mark>卡的關是：你必須把腦袋裡的想法整合好，相對清楚地講出來</mark>**。講話吞吞吐吐、不知道要講什麼，那還不如回去打字。**快速的大腦，才能帶動AI快速反應。**

我自己的例子：4月的時候，我會講「我想要你來串Slack」這種很籠統的話；到了8月，我對著麥克風講了47秒，把位置、時間、方位全部講清楚：「因為對面是龜山島，所以我大概要走到哪個位置，當太陽升起來的時候，才會剛好在龜山島的上面」。

日本Meetup的里計也講過類似的話：「只要確實把脈絡餵給AI，我認為AI基本上就不太會出錯了。」[^satokei]

光是用打字描述這些脈絡就要花很多時間，用講的就可以迅速讓它去查。所以我很想強調：這個learning curve值得跨過去。而且它還有個副作用，<strong>日常生活中講話也變清楚了。</strong>

## 我的第二大腦：從肥大象，到會轉的輪子

<figure class="mt-fig">
  <img src="/images/meetup-1017/slide-elephant.jpg" alt="投影片：一隻身上塞滿紙張與網頁的大象，旁邊大字寫著「東西再多，沒讀過就不是你的。」">
</figure>

開始用講的之後，我拿它做了什麼？先從我的第二大腦講起。Roam、Obsidian、Logseq、Heptabase都算，我自己用的是Roam。

在Roam之前，我的第二大腦是Evernote。就像它的圖示一樣，它成了一隻塞滿未整理資訊的肥胖大象。Web Clipper一按就把整篇文章抓進來，結果抓進來的幾乎都沒讀過。

<strong class="mt-big">東西再多，沒讀過就不是你的。</strong>

後來換到Roam，建立的模式是：進入我認可的ECG網站，讀完寫重點存進來。沒有AI的時候，只能不斷自己去分析這些ECG寶藏網站、抓重點、填資料。

有了AI，它不但能進到我的第二大腦，也能進到第二大腦的<strong>上游</strong>去挖更多東西。

- <strong>上游</strong>：Garbage in, garbage out。所以我一開始先跟AI指定最重要的核心知識，像我專精ECG，就先指定那些最珍貴的寶藏來源（有點像NotebookLM）。AI從寶藏庫抓資料進第二大腦，也幫我做筆記，第二大腦就像Wiki一樣不斷長大。
- <strong>下游</strong>：實際工作需要知識的時候，我可以進第二大腦拿，也可以回到上游確認、拿更多。
- 而且每一次抓取都有軌跡。你查過什麼、拿過什麼，Claude都知道，不用每次從頭查。

<div class="mt-box"><strong>Garbage in, garbage out → Treasure in, treasure out.</strong></div>

會後好幾個人跟我聊到這句，獸醫師問了，資訊室的人也問了類似的問題。對我來說，treasure in是挑選我認可、而且跟我想深入的領域相關的知識。我對心電圖有興趣，輸入的材料就圍繞心電圖。如果什麼東西都拉進來，最後就跟在網路上廣泛搜尋沒什麼差別，很難形成我想要的專精。<strong>重要的是先知道自己想深入哪一個topic，再選擇值得持續累積的資訊。</strong>

我認可的寶藏越來越多，後來包括教科書、文獻、書，還有聽過的Podcast。直接問AI，常常要A給B；所以我讓AI先到我的寶藏裡找，找到了再回答，每一條附出處。現在一個/search，同時翻七個地方。

這種「先查、再回答」的做法就叫RAG：事先把寶藏切成小段、轉成代表「意思」的數字存起來；每次問問題，就去找意思最接近的幾段，連同出處交給AI，<strong>AI不是憑記憶回答，是先查我的寶藏，再回答。</strong>

<figure class="mt-fig">
  <img src="/images/meetup-1017/slide-loop-full.jpg" alt="投影片：查、寫回、沉澱、讀四步驟繞成一個環，中間寫著「知識越用越厚」，底下寫著「以前是抓進來沒讀；現在寫回去的，都是我看過的。」">
</figure>

東西這麼多，聽起來是不是又是一隻更肥的大象？不一樣的是，這次它會轉。讀、查之後，重點是後面兩步：<strong>寫回</strong>，我看過、校正過的那段寫回Roam；<strong>沉澱</strong>，下次再遇到，Roam裡已經有了，/search也翻得到。

<strong class="mt-big">以前是抓進來沒讀；現在寫回去的，都是我看過的。</strong>知識越用越厚。

我蓋這套不是為了demo，是因為我自己每天用得到。

## 最後一哩路，還是要自己走

一問一答，做了很多很多專案之後，我體悟到一件事：<strong>很多專案，最後一哩路都必須自己去完成。</strong>我挑兩個來講。

### 第一個，鐵道雷達

我去冬山河生態綠舟，上面有一座橋，對面是鐵橋。火車常常經過，但我都來不及拍。我就想，能不能做一個App，讓我知道待會火車會從哪個方向來，我只要在那邊等一分鐘就好。

7/22第一次成功。那天我在FB寫：「我的鐵道雷達iOS App大成功，終於成功了！畫面倒數，到顯示『通過中』的時候，就看到火車不到5秒後通過～～真是非常的開心啊！……成功後～～大聲吶喊，水啦」

可是，真的有那麼簡單嗎？東部車站之間距離長，會不會比較容易誤差？這是在網路上用Claude Code查不出來的，只能自己去現場。所以我排了一趟東部小旅行，到三個很少人去的車站取樣：8/3武塔、8/4海端、8/5東竹。

<figure class="mt-fig">
  <img src="/images/meetup-1017/slide-haiduan.jpg" alt="投影片：海端站09:42、09:43、09:45三張App截圖，09:42顯示通過中、09:43跳回倒數00:32、09:45又顯示通過中，右邊是月台照片">
</figure>

7/22讓我大喊「水啦」的是「通過中」；8/4在海端出包的，也是「通過中」。09:42畫面寫自強301北上「通過中」，地圖上的車其實還在南邊；09:43又跳回倒數00:32；火車09:46才真的從面前通過。

站在月台上才知道：即時資料沒有列車座標，列車只在經過車站時回報，東部站距長，App猜的時間就差很多。回家跟Claude Code修了一整輪，隔天在東竹又抓到三個問題，一路修到build 42。我自己把這段叫「花東小旅行的鐵道雷達維修篇」。

### 第二個，龜山島日出

我在網路上看到一張照片，太陽從龜山島龜首那邊升上來，就想自己能不能也拍到。

我問AI：那我要站在哪裡？Google Maps標的「龜山島日出海灘」，太陽會從龜尾冒出來；往南走848公尺，太陽就從401高地（主峰）上方冒出來；要看到從龜首升起，還得再往南。所以我先挑401高地。

跟AI把站位、方位、時刻都算好，做成一頁現場單。8/16清晨，我站在暗暗的海灘上，手機上倒數、面向真北75°。「手裡拿著一頁告訴你要看哪裡的東西，那個感覺蠻奇特的。」

<figure class="mt-fig">
  <img src="/images/meetup-1017/slide-cloud.jpg" alt="投影片：龜山島日出照片，光線最亮處在401高地上方，但一條低雲橫在稜線上；底下寫著「位置算對了，時間算對了，方位算對了，但被一條低雲擋住。」">
</figure>

結果呢？最亮的那塊光正壓在401高地上方，方位是對的；但一條低雲橫在稜線上。位置算對了，時間算對了，方位算對了，但被一條低雲擋住。事前五個氣象模式，都說那個高度沒有低雲。

<strong class="mt-big">算得出太陽，算不出雲。</strong>

會後，一位聊到電子物流的先生給了我一個很有趣的建議：從北到南、從不同位置拍龜山島，它呈現出來的形狀其實不一樣。這讓「最後一哩路」的意思更具體：AI可以提供很多想法和視角，但真正換一個位置、走出去看看，還是要自己行動。

<div class="mt-box blue"><strong>當你換位置，你才看見不同的形狀。AI可以給你很多視角，但最後你要選一個站位，自己走過去看。</strong></div>

這樣的專案，可以讓我們更貼近想要的東西，但它無法取代我們去現場執行。

## AI沒辦法取代的，是「實際去做」

Claude Code的作者Boris Cherny說過：

> "Someone has to prompt the Claudes, talk to customers, coordinate with other teams, decide what to build next."[^boris]

總得有人去對Claude下指令、跟客戶談、跟其他團隊協調、決定下一步做什麼。我想再往前推一步：用了這麼多AI之後，我覺得AI沒辦法取代我們的，是<strong>實際去做</strong>。它可以協助我們思考、往下一步走，但真正要去執行的，還是我們自己。

<div class="mt-box"><strong>我們不可能一直坐在椅子上，就希望能把所有的事情都做好。</strong></div>

## 現場

那天中午一點前就到了，走進園區那條木棧道。要上台分享自己喜歡的東西，心情其實是開心又興奮的。

<figure class="mt-fig mt-tall">
  <video src="/videos/meetup-1017/arrive.mp4" poster="/videos/meetup-1017/arrive-poster.jpg" autoplay muted loop playsinline></video>
</figure>

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/welcome.jpg" alt="會場門口掛著Claude Community的紅色WELCOME旗子">
</figure>

門口掛著Claude Community的WELCOME旗子。報到的時候，我拿到一頂Claude Code的帽子，<strong>這是Claude Code Meetup講者專有的優惠，一頂Claude Code的帽子耶，開心！</strong>名牌上自己寫了名字，旁邊再配一張Claude Code的像素小怪物貼紙。

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/hat.jpg" alt="黑色Claude Code帽子，上面別著手寫「曹建雄」的名牌，手上拿著橘色像素小怪物貼紙">
  <figcaption>講者專屬的Claude Code帽子</figcaption>
</figure>

桌上還有一疊一疊的貼紙，「Vibing…」跟「claude code」。

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/stickers.jpg" alt="木桌上一疊「claude code」字樣的貼紙">
</figure>

兩點整，高見龍開場。

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/opening.jpg" alt="會場大螢幕顯示Claude Code Meetup Yilan主視覺，高見龍在螢幕旁開場">
</figure>

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/speaking.jpg" alt="我拿著麥克風和簡報筆在台上分享">
</figure>

場地在宜蘭的中興文創園區，老倉庫改建的空間，整面落地窗外就是樹。我排在高見龍之後；接在我後面的是葉政達〈行李箱裡的Review Fleet〉，再來是林穎俊的分享。

<figure class="mt-fig mt-tall">
  <img src="/images/meetup-1017/review-fleet.jpg" alt="葉政達的分享〈行李箱裡的Review Fleet〉投影在大螢幕上">
</figure>

<figure class="mt-fig">
  <img src="/images/meetup-1017/networking.jpg" alt="會後自由交流時間，大家拿著飲料站著聊天">
</figure>

講完之後的自由交流時間，好幾群人圍過來聊。

<div class="mt-pair">
  <figure><img src="/images/meetup-1017/qa-screen.jpg" alt="會後我在大螢幕前跟一群人比手畫腳地聊"></figure>
  <figure><img src="/images/meetup-1017/qa-circle.jpg" alt="會後一群人圍著我問問題"></figure>
</div>

會後聊天，我遇到了資訊室的人員、獸醫師、在eBay上做生意的朋友，還有其他不同背景的人。同樣是聊AI，每個人都從自己的工作和經驗出發，問出不一樣的問題，這是這次很有趣的收穫。

有位獸醫師看過我分享的鐵道雷達，問我有沒有在做週報，我說有。他也跟我聊到treasure in, treasure out。

一位在eBay上賣東西的大哥問我，Codex跟Claude Code到底差在哪。我跟他分享自己的使用感受：我很喜歡Claude Code的工作流，它一步一步做事的時候，會顯示目前的進度、正在做什麼、已經完成哪些事。相較之下，我用Codex時，比較常有它直接冒出來、告訴我事情已經做完的感覺。這是我當時的個人使用經驗。<strong>我喜歡的不只是最後的成果，也包括能看見事情怎麼一步一步完成。</strong>

Michael問我，有沒有推薦教AI的老師或課程。我跟他說，其實我自己用Claude Code，也是從零開始摸索的。有時候老師教的是他熟悉、知道的東西，但你不一定能馬上用在自己想完成的project上。對我來說，帶著自己真正想做的專案，不斷跟Claude Code討論、碰撞，在實作裡邊做邊磨，是很重要的學習過程。

一開始不一定能把需求講清楚，但一次次嘗試、調整，就會慢慢知道自己要的是什麼。專案往前走，自己對需求的理解也跟著變清楚。<strong>很多東西，就是這樣慢慢磨出來的。</strong>

林老師提到三位很厲害的AI講者，我想先去了解：他們各自真正厲害的地方在哪裡？用了哪些skills？學他們的方法，能讓我在哪些地方進步？

我特別想知道，這些方法能不能用在自己的臨床工作，或是改善我跟Claude Code討論、協作的方式。這也跟我原本想談的方向連在一起：<strong>如果AI能減少醫療人員的文書負擔，我們就能把更多時間留給病人。</strong>

另外，我也跟人聊到一個自己很有興趣的構想：在病人身上放感測器，做一個CPR feedback device，提供心肺復甦的回饋。這個想法值得繼續探索，目前先留著當構想。

感謝高見龍辦這場。現場照片來自[高見龍](https://www.facebook.com/eddiekao)、[林穎俊](https://www.facebook.com/gatelynch)和[David Lin](https://www.facebook.com/linintellectdave)的FB，謝謝你們幫忙留下這些畫面。

[^luma]: Yilan | Claude Meetup 活動頁（主辦：高見龍），2026-10-17。<https://luma.com/claude-yilan>
[^trends]: Google Trends，台灣「OpenClaw」搜尋熱度，2025/12/1–2026/4/30 每日相對值：1/30 開始上升、2/17 我加入時為44、3/11 達最高峰100。
[^omori]: 大森翔吾，Claude Code Meetup Japan #4 演講。
[^ruan]: Ruan S, Wobbrock JO, Liou K, Ng A, Landay JA. Comparing Speech and Keyboard Text Entry for Short Messages in Two Languages on Touchscreen Phones. *Proc ACM Interact Mob Wearable Ubiquitous Technol*. 2017;1(4):159. doi:[10.1145/3161187](https://doi.org/10.1145/3161187)。原文："the Mandarin Chinese input rate was 2.87 times faster (123 vs. 43 WPM) than the keyboard"。比較的是手機拼音鍵盤與語音輸入。
[^satokei]: 里計（さとけい），Claude Code Meetup Japan #1 演講。
[^boris]: Boris Cherny 在 X 的回覆，2026-02-14；Simon Willison 部落格〈A quote from Boris Cherny〉轉引。<https://simonwillison.net/2026/Feb/14/boris/>

---
title: "算得出太陽，算不出雲：用 AI 算出該站在哪裡，才看得到日出從龜山島升起"
date: "2026-08-18T20:00:00+08:00"
description: "從一張別人拍的龜山島日出照開始，和 AI 一起把「太陽會從島的哪裡冒出來」算成一組座標、一個方位、一個時刻，然後在 8/16 清晨到現場驗收。"
featured: false
toc: true
thumbnail: "/images/guishan-sunrise/fig1-photo.jpg"
typora-copy-images-to: "../../static/images/guishan-sunrise"
categories:
  - study
tags:
  - 龜山島
  - 日出
  - 宜蘭
  - 壯圍
  - Claude Code
  - 攝影
  - 空拍機
---

<style>
.gs-fig{margin:1.6em auto;max-width:620px;text-align:center}
.gs-fig img,.gs-fig video{width:100%;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15)}
.gs-fig figcaption{font-size:.9em;color:#777;margin-top:.5em;line-height:1.6}
.gs-wide{max-width:860px}
.article-body .gs-fig{margin-left:auto;margin-right:auto}
.gs-fig iframe{width:100%;border:0;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15);display:block}
.article-body .gs-pair{width:min(1180px,94vw);max-width:none;margin-left:50%;transform:translateX(-50%)}
.gs-tall{max-width:420px}
.video{max-width:900px;margin:1.9em auto;padding-bottom:0;height:auto;position:static}
.video iframe{width:100%;aspect-ratio:16/9;height:auto;display:block;position:static;border:0;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15)}
.post-content blockquote{background:#fff8ec;border-left:4px solid #e8842b;padding:.9em 1.3em;border-radius:0 8px 8px 0;color:#2a2a2a}
</style>

起因是我看過一張照片：太陽剛好從龜山島升起來。

看到的當下我第一個念頭是「這要站在哪裡才拍得到」。因為龜山島在宜蘭外海，從海岸線的任何一點看過去，它都佔著天空的某一段角度；而太陽每天升起的方位又不一樣。這兩件事要對上，應該是可以算的。

於是我開始跟 AI 一起算這件事。8 月 16 日清晨三點五十起床，開車到壯圍的海邊，走了一公里去站在一個算出來的點上。

結果是：**位置算對了，時間算對了，方位算對了，但被一條低雲擋住。**

這篇是整個過程的紀錄。

## Google Maps 上那個「龜山島日出」，太陽是從龜尾升起的

一開始我很直覺地在 Google Maps 上找「龜山島日出」，照著標記的景點去。座標大概是這裡：

```
24.816792, 121.822791
```

我把這組座標丟給 AI，問它明天日出要往哪個方向看。它算出來的答案是方位 74.5 度，然後多講了一句我沒想到的話。在這個位置，太陽不會從龜山島「身上」升起，是從剪影最左端冒出來。

它畫了一張圖給我看：

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/fig0-why-offset.jpg" alt="從龜山島日出海灘看出去，太陽從島的最左端冒出，主峰在右邊 3.7 度外"><figcaption>橫軸是從觀測點看出去的水平方位角。太陽的首光落在島的最左端（龜尾那側），主峰 401 高地在右邊 3.7 度外</figcaption></figure>


龜山島從那個點看過去橫跨 73.5 到 81.6 度，整整八度多。太陽的首光落在 74.4 度，也就是龜尾那端又矮又平的部分。真正的主峰 401 高地在 78.1 度，在太陽右邊三點七度外。

三點七度聽起來不多，但日輪本身只有 0.53 度寬。那是接近七個太陽並排的距離，肉眼一看就知道歪掉了。

這時我才意識到，「太陽從龜山島升起」不是一個地點，是一個位置與日期的組合。同一天站在不同的點，太陽會從島的不同部位出來；同一個點在不同日期，也一樣。

我想要的是太陽壓在島身上，不是從尾巴邊緣擦過去。所以問題變成：那我該站到哪裡？

## 那一帶就壓在禁飛區的邊界上

在算位置之前，AI 先丟給我一件我完全沒料到的事。

**這一整片海岸，就貼著民航局公告的限航區 RCR30 的邊界。** 那是軍備局規格鑑測中心兵器試驗場的空域，禁止遙控無人機飛航，罰則三十萬到一百五十萬並沒入機器。

我那天是要帶空拍機的。

麻煩的地方在於，那條邊界是一條北北東走向的斜線，從 24°48′N 121°49′E 拉到 24°50′N 121°49′60″E。不是南北向，也不是東西向。所以從我最後站的位置出發：

| 往這個方向走 | 走多遠會進禁飛區 |
|---|---|
| 正北 | 三公里內都不會 |
| 正南 | 250 公尺 |
| 正東 | 120 公尺 |
| 東南 | 110 公尺 |

我最後站的那個點，離邊界 112 公尺，在區外。但我一開始隨手在地圖上抓的另一組座標，只往東偏了 250 公尺，就已經跨進去 13 公尺了。

用眼睛看地圖完全判斷不出來這件事。AI 是直接去查民航局的官方圖層，再用自己解出來的多邊形頂點對一次，兩條路徑結果一致才告訴我的。

還有一點要分清楚：這個限制只管無人機，不管人。人站在那裡拿相機拍照完全合法，是空拍機不能起飛。這兩件事常常被混在一起講。

## 算錯一次：太陽不是一個點

AI 第一次給我的答案是往南走到某個點，首光 05:32。

過了一輪，它自己回來說算錯了。

錯在哪？第一版把太陽當成一個點。點爬到跟山頂一樣高，就算「出來了」。

但太陽是一個**圓盤**，直徑大約半度。你會先看到的是它的**上緣**，不是中心。上緣比中心高 0.2665 度，整件事的差別就在這 0.2665 度。

<figure class="gs-fig gs-pair"><img src="/images/guishan-sunrise/fig-disc.jpg" alt="同一道龜山島稜線，把太陽當成點與當成圓盤，首光時刻差 1 分 11 秒"><figcaption>兩張都是龜山島真正的稜線。左邊把太陽當成一個點，要等中心爬到跟主峰一樣高。右邊是實際情況，日面上緣先碰到稜線，碰到的位置還偏在主峰左邊一點</figcaption></figure>

修正的方法是不再只問「太陽的中心到了沒」，而是把整個圓面攤開，逐一問這個圓的每一小塊：你正前方那座山有多高？ 只要有任何一塊高過它前面的山，那一刻就是首光。

改完之後，首光提早了 1 分 11 秒；拿新模型重新反解站位，點也往南挪了 37 公尺。

這件事我覺得比答案本身有意思。它不是被我抓到錯，是它自己回頭檢查、自己說「這裡我算得不對」。

## 真正的主角是地形

要算得準，關鍵不是天文，是地形。

一般的日出計算器給你的是「海平面日出方位」。但東邊只要有東西擋著，那個數字就沒用。太陽得先爬過稜線才看得到，而它爬的同時方位還在往右跑。

所以 AI 去把龜山島整座島的地形抓下來，從我站的位置算出每一個方位角上「稜線有多高」，組成一條天際線剖面，扣掉地球曲率跟大氣折射。

地形資料換過一次。一開始用的是免費的 ASTER 30 公尺數值地形，時刻算得夠準，但把算出來的稜線疊回照片上就是貼不合，右邊那塊怎麼調都太矮。後來換成內政部的 20 公尺數值地形才看懂問題在哪。ASTER 把龜首讀成 160 公尺，20 公尺的資料是 228 公尺，差了將近 70 公尺。形狀本身就是錯的，怎麼平移旋轉都不可能貼上去。換完之後首光時刻只動了 5 秒，但形狀對上了。

<figure class="gs-fig gs-pair"><img src="/images/guishan-sunrise/fig1-overlay.jpg" alt="左為實拍原圖，右為從地形資料算出來的同一片天際線"><figcaption>左邊是 8/16 清晨那張原圖，沒有動過。右邊整張是演算法拿內政部 20 公尺地形資料自己畫的：左坡、主峰、右邊那個凹口、最後龜首的凸起，形狀一路對得上。橘圈是算出來 05:34 日面該在的位置，上緣剛好碰到主峰稜線，這就是「首光」的定義。</figcaption></figure>

這張圖是後來才做的，但先放在這裡，因為它把整件事講完了。

有了地形剖面，接下來就是反解：沿著海岸線一點一點移動，找出「首光方位剛好等於主峰方位」的那個位置。這裡很敏感。龜山島在快十四公里外，我沿著海岸走 150 公尺，它在我眼前挪過去的距離就等於一顆太陽那麼寬。所以站錯幾十公尺，太陽就不從我要的那個位置冒出來了。

最後算出來的答案是：

| | |
|---|---|
| 站位 | **24.809465, 121.820302** |
| 從原本的點 | 沿濱海北線自行車道往南 983 公尺 |
| 看的方向 | 真北 75.0 度（手機指北針磁方位 80.1 度） |
| 主峰 | 距離 13.87 公里、仰角 1.56 度 |
| 日面首光 | **05:34:15** |
| 整顆日輪脫離稜線 | 05:36:32 |
| 容差 | 沿車道前後各 50 公尺 |

為什麼是這個距離？其實就是國中的圓周長。主峰在 13.87 公里外，在那個距離上每走 242 公尺，它在眼前就挪 1 度；把需要挪的角度乘回去，再算上海岸線是斜的要打個折，就是這 983 公尺。

## AI 給的點，不一定走得到

這是實際操作上最需要動腦的一段。

AI 算出來的是一組經緯度，但那組經緯度不一定在你走得到的地方。可能在水裡，可能在私人地，可能中間隔著一條溪。

我的做法是不把座標當成目的地，改把方位當成基準。拿到座標之後，我在 Google Maps 上沿著同一個方位、找同一條線上真的踩得到的海岸線點位，再用 GPS 導航去那裡。差個幾十公尺，在容差範圍內。

另外要注意的是，從車子停的地方到真正的拍攝點，還要再走十幾分鐘。這件事一定要算進出門時間裡。

## 8 月 16 日清晨

鬧鐘設三點五十。

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p01-alarm.jpg" alt="設在 3:50 的鬧鐘"><figcaption>三點五十</figcaption></figure>

開到看日出的海灘旁邊把車停好，戴上登山用的頭燈走下海灘。真的有夠暗，那裡沒有燈，完全不知道要走到哪裡去。

<figure class="gs-fig"><video src="/videos/guishan-sunrise/01-walk-dark.mp4" poster="/images/guishan-sunrise/poster-01-walk-dark.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>04:43 走下海灘，頭燈是唯一的光</figcaption></figure>

不到五點，天空的光就開始出來了。

<figure class="gs-fig"><video src="/videos/guishan-sunrise/02-first-light.mp4" poster="/images/guishan-sunrise/poster-02-first-light.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>04:49 早上不到五點鐘的海邊，哇，那個天、那個光線已經開始打在天空上，有夠美的啦</figcaption></figure>

走到定位點，大概走了一公里。

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p02-arrived.jpg" alt="手機顯示已抵達定位點"><figcaption>04:55 到位</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p03-island-far.jpg" alt="破曉前的龜山島剪影"><figcaption>04:56 龜山島在遠方。十三點九公里外，看得一清二楚</figcaption></figure>

然後把裝備架起來。腳架上是 5D3，旁邊延伸出去那支是 Insta360 X5 要拍縮時，手上拿著手機，旁邊還有空拍機。

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p04-rig.jpg" alt="海灘上的腳架、5D3 與 Insta360"><figcaption>05:01 全部架好。背包掛在腳架下當配重</figcaption></figure>

日出前那段天空的顏色變化，其實比日出本身還漂亮。這也是為什麼要提早到，光是這一段就值得留時間。

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p05-dawn-colour.jpg" alt="破曉前的粉紫色天空"><figcaption>05:08</figcaption></figure>

<figure class="gs-fig"><video src="/videos/guishan-sunrise/03-so-beautiful.mp4" poster="/images/guishan-sunrise/poster-03-so-beautiful.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>05:09 真的是有夠美</figcaption></figure>

兩兄弟在海邊也拍了起來。

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p06-two-sons.jpg" alt="兩個孩子在海灘上拍照"><figcaption>05:14</figcaption></figure>

快到時間，我把 AI 做的那頁現場單打開來看。

那頁裡最好玩的一塊我搬下來了。選地點、拉日期、沿海岸線南北移動、再拉時間，上面那條天際線和太陽會跟著動，右邊會告訴你這一刻太陽從島的哪個部位冒出來。整頁完整版在這裡：[龜山朝日現場單](https://claude.ai/code/artifact/119e7de7-3f67-47f7-9f6d-de4125920054)。

<figure class="gs-fig gs-wide"><iframe id="gs-lab-frame" src="/tools/guishan-lab.html" title="日出方位實驗室" loading="lazy" scrolling="no" style="height:1480px"></iframe><figcaption>拉拉看。台２線可以走進海灘的三個點都在裡面，壯圍沙丘那個不管哪一天都排不出來</figcaption></figure>

<script>(function(){var f=document.getElementById("gs-lab-frame");if(!f)return;function set(h){if(h>200)f.style.height=(h+8)+"px";}function fit(){try{set(f.contentDocument.documentElement.scrollHeight);}catch(e){}}window.addEventListener("message",function(e){var h=e.data&&e.data.gsLabHeight;if(h)set(h);});f.addEventListener("load",fit);window.addEventListener("resize",fit);setTimeout(fit,600);setTimeout(fit,2000);})();</script>

<figure class="gs-fig gs-tall"><video src="/videos/guishan-sunrise/04-fieldcard.mp4" poster="/images/guishan-sunrise/poster-04-fieldcard.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>05:33 手機上的現場單：站位座標、面向 75.0 度、首光 05:34:10，還有一張算出來的天際線</figcaption></figure>

站在暗暗的海灘上，手裡拿著一頁告訴你要看哪裡的東西，那個感覺蠻奇特的。

## 然後那條雲就在那裡

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p07-0528.jpg" alt="05:28 的龜山島，天光正壓在主峰上方"><figcaption>05:28 光線已經出來了，最亮的那塊正壓在 401 高地上方。方位是對的</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p08-0531.jpg" alt="05:31 的龜山島，雲帶橫在稜線上"><figcaption>05:31 但那條低雲橫在稜線上，太陽在它後面</figcaption></figure>

**沒辦法很清楚地看到太陽從 401 高地上升起，有點可惜。**

我一開始以為 05:34:04 那張是拍到了，畫面上有一團很亮的東西在主峰上方。放大之後才確定不是。那團亮光的下緣是一條水平直線，貼著雲層頂端，上緣糊掉散進天空。真正的日輪在這個曝光下會有硬邊、是圓的。那是雲被背後的太陽打亮，不是太陽本身。

把整段拉開來看，會更清楚發生了什麼事：

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/fig2-sequence.jpg" alt="04:56 到 05:34 的六張連拍，島的大小與位置對齊，只有光在變"><figcaption>從 04:56 到 05:34。焦段換過（108／200／154／135mm），我把角度尺度正規化、再用海平線對齊，所以島在每格都一樣大、一樣高，只有光在變。那條低雲帶從 05:27 就在那裡了。</figcaption></figure>

順帶一提，這六張的參數：

```
04:56   1/1 秒
05:27   1/160
05:30   1/160
05:31   1/320
05:33   1/320
05:34   1/640
```

ISO 100、f/8 從頭到尾沒動，只有快門一路往上追。這就是現場單上那張曝光梯度表。

太陽剛出海的時候，陽光是斜著穿過一整層大氣才到鏡頭前的，被擋掉很多。它每爬高一點，被擋掉的就少一點，畫面跟著變亮。上面那張表裡，四分鐘之內快門就從 1/160 跳到 1/640。所以網路上那種「拍日出就用 1/多少」的建議照抄不來，只能人站在現場，看著直方圖一路追。

<figure class="gs-fig gs-wide"><video src="/videos/guishan-sunrise/07-timelapse.mp4" poster="/images/guishan-sunrise/poster-07-timelapse.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>Insta360 X5 架在旁邊拍了一個早上，後製抽成六秒一格，整個早上濃縮成 20 秒。地平線靠右那塊淡淡的剪影就是龜山島。那條低雲從頭到尾壓在海平面上，太陽一直等到爬過雲的上緣才亮起來，島的稜線那一段整個被蓋掉了。</figcaption></figure>

## 五個氣象模式一起說沒有低雲

事前查天氣的時候，我請 AI 把幾個數值模式分開跑：

| 模式 | 05:00 低雲 | 06:00 低雲 |
|---|---|---|
| ECMWF IFS | 6% | 7% |
| 日本 JMA | 10% | 12% |
| 美國 GFS | 0% | 0% |
| 德國 ICON | 0% | 0% |
| Open-Meteo 綜合 | 2% | 2% |

挪威氣象局的 met.no 甚至直接標 `clearsky`。

**五個模式一起錯。**

反而事前擔心的兩件事都沒發生。一是能見度。當時模式給岸上只有 9.2 公里，而龜山島在 13.9 公里外，怕島會糊掉；結果 05:01 那張照片裡島清清楚楚。二是空拍機，那天飛的位置 GPS 記錄是 24.8096, 121.8206，事後查民航局圖層，在 RCR30 之外、距邊界正東 88 公尺。

太陽升起來之後，我們放了空拍機拍海岸線。

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p09-drone-sunup.jpg" alt="空拍機從高處拍海灘，太陽已經升起"><figcaption>06:02 太陽升起了啊</figcaption></figure>

那天飛的成果剪成一支影片：

{{< video "https://www.youtube.com/watch?v=rxloDsQPazI" >}}

回程路上，拍著我們一開始踩過來的腳印。

<figure class="gs-fig"><video src="/videos/guishan-sunrise/05-back-a.mp4" poster="/images/guishan-sunrise/poster-05-back-a.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>06:12 收工</figcaption></figure>

<figure class="gs-fig"><video src="/videos/guishan-sunrise/06-back-b.mp4" poster="/images/guishan-sunrise/poster-06-back-b.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>太陽已經整個上來了</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p10-footprints.jpg" alt="海灘上來時的腳印"><figcaption>06:23 走回去的路上，拍著我們一開始踩過來的腳印</figcaption></figure>

## 沒做好的部分

Insta360 X5 的全景縮時，當場是拍壞的。

我設兩秒一張。事後看這個間隔太密，日出前後的光線本來就沒變那麼快，兩秒一張除了檔案暴增，畫面之間的差異太小，反而做不出時間流動的感覺。合理的設定應該是五到十秒一張。

後來是回家請 AI 救的。原始張數全部留著，改成六秒一格重新組，再把相機自動曝光造成的亮度跳動修掉。前面那段縮時就是救回來的成品。

不過這只是把爛牌打好一點。當場設對，本來就不用這一輪。器材設定這種事，看再多教學都不如自己拍壞一次。

## 順手發現：有些地方，永遠拍不到

拍完之後我想到，台二線上可以走進海灘的地方不只一個。所以我讓 AI 把另外兩個常去的點也算一遍：大福觀海旭日平臺跟壯圍沙丘生態園區，各自往南北一點五公里的範圍內，一整年 365 天。

結果是這樣：

| 地點 | 太陽從龜尾升起 | 太陽從龜首升起 | 空拍機 |
|---|---|---|---|
| 龜山島日出海灘 | 81 天 | 63 天 | RCR30 區外 |
| 大福觀海旭日平臺 | 110 天 | 67 天 | RCR30 區內 |
| 壯圍沙丘生態園區 | **0 天** | **0 天** | RCR30 區內 |

沙丘那個零不是「今年剛好沒有」，是**幾何上永遠不可能**。

從沙丘看出去，龜山島落在方位 44.6 到 52.1 度。而這個緯度的太陽，一年之中最北只能升到 63.74 度（夏至前後）。中間差了十二度以上，太陽永遠跨不過去。就算往北走一點五公里，也只能把島推到大約 57 度，還是差七度。

從壯圍沙丘看日出，龜山島會在太陽的左邊很遠處，只能當背景。

這個結論我覺得比「算出可以拍的地方」更有價值，它替我省掉一趟白跑的路。

## 我從這件事學到的

如果只是「AI 幫我算出一個座標」，這篇不值得寫。

有意思的是中間那些被推翻的東西。

一個是，一個模糊的念頭配上 AI，答案來得比我想的快。我一開始只是站在海邊想「太陽有沒有可能剛好從龜山島頭上冒出來」，這種問題以前只能憑感覺猜，現在隔一個晚上就變成一組座標、一個方位、一個時刻。

再來是，第一次拿到的答案通常不是最後的答案。它把太陽當成一個點算過一次，地形資料也拿錯過一次，兩次都不是我當場抓到的，是來回問了好幾輪才浮出來。要一直討論下去，答案才會慢慢收斂。

最後一件最貴。那天沒風也沒雨，我事前唯一在意的就是低雲，偏偏低雲正好是我自己沒辦法預測、只能交給模式去猜的那一項。五個氣象模式一起說那個高度不會有低雲，結果雲就在那裡，把整件事擋掉。算得再漂亮，沒到現場都還不算數。

順帶還推翻了一件我以為理所當然的事。我以為 Google Maps 上標的那個景點就是最好的點，其實從那裡看過去，太陽是從龜尾出來的。

所以這套東西的價值不在算得多準。它真正做到的是把一個模糊的念頭，逼到可以被現場推翻的程度。有座標、有方位、有時刻、有誤差範圍，8 月 16 日清晨才有東西可以驗收。

驗收結果：稜線對了，方位對了，時刻對了，雲沒算到。

知道自己算不到什麼，跟知道自己算得到什麼，一樣重要。

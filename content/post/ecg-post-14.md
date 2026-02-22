---
title: "82歲胸痛的阿公" #輸入這篇的title
date: "2025-02-19" #輸入時間
draft: false #若為false就會直接刊出，不會以草稿模式運作
featured: false #若設定為true，會設定為精選文章
toc: false #自動產生TOC
thumbnail: "/images/ecg-post-14.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - ecg
tags:
  - OMI
  - RBBB+STEMI
  - reciprocal change
  - LAD
  - STEMI(-)/OMI(+)
  - RBBB+LAFB
  - Downsloping STE
  - RBBB+Post.MI
---

來分享一個有趣的ECG。

82歲男性，主述早上開始胸痛、cold sweating，微喘

昨天同事傳給我看，問我**是不是STEMI**。

![ER arrival ECG](/images/ipic/xgqpl7.png)

**我回答是。**

<mark>**不過更精確一點應該要說，這個病患並沒有符合STEMI criteria，但是有OMI(Occlusion MI)➔血管阻塞了。**<mark>

---

**可是明明沒有符合STEMI criteria啊~~為何血管阻塞了?**

### 如果從原本的ACS分類來看

![ACS分類](/images/ipic/4t986q.png)

光是病患沒有符合STEMI criteria，但如果是NSTEMI，就代表病患的血管還是有阻塞導致NSTE『MI』

所以沒有STE，真的不代表病患沒有心肌梗塞。

#### <mark>那麼使用STEMI criteria的準則來抓MI病患，其sensitivity有多少?<mark>

在這篇文章中 [^1]  描述到，如果利用STEMI criteria針對initial ED ECG來做任何occlusion(指發生OMI)診斷，則只有21%的sensitivity。

這是什麼意思?也就是**可能有高達8成的AMI病患，無法透過STEMI criteria做出AMI的診斷**。

![](/images/ipic/7h4ptc.png)

那麼該怎麼辦?可能得透過後續的echo、serial ECG、troponin數值、病患的臨床症狀互相配合，才能做出AMI的診斷。

---

#### 好的讓我來判讀一下，今天的ECG

Rate:84 bpm

Rhythm:irregular、RBBB(qR wave in V1-4) pattern、LAFB

Axis:Extreme axis deviation

Interval:No QT prolong

<mark>**Ischemia:**<mark>

讓我們來仔細看看，12 lead ECG，有沒有哪裡有ischemic change。先來看看Chest leads

![Chest leads](/images/ipic/sxebeu.png)

深綠色為baseline、深紅色垂直線是QRS的結尾。

可以見到V1/V2的STE勉強可接近1格、V3的STE不足一格。V4應該小於0.5格、V5/V6約都在baseline上面

這邊的V1-V3是有問題的。讓我來解釋。

ECG在有BBB(bundle branch block)的狀況下，著實不好評估是否AMI。

幸好如果ECG是LBBB的話，有**Sgarbossa criteria**與**Dr.Smith所modified的Sgarbossa criteria C(MSC)**來強力支援診斷。

### <mark>**那麼RBBB如果出現MI，該怎麼判斷呢?**<mark>

首先我們必須要有一些基本背景知識 [^3]

<u>在BBB的狀況下，因為有束支傳導阻斷，所以去極化異常，那當然爾再極化(repolarization)的ECG也會有異常變化</u>。<mark>**此異常變化分成兩類:**<mark>

1. **Primary repolarization**:指在心肌細胞出現病理方面問題，比如缺血、缺氧、酸血症、藥物中毒，電解質異常等
2. **Secondary repolarization**:指正常的異常變化(**中文真是博大精深，外國人肯定不懂我寫什麼鬼XD**)

![典型RBBB變化 in V1](/images/ipic/drpfug.png)

#### <mark>Fig.4是一個**典型的RBBB在V1的ECG形狀**，有幾個基本知識(<u>**典型正常變化**</u>)我們要了解<mark> [^3]

- repolarization始於J point這個點開始，不是J point之後
- J point通常位於baseline或低於baseline(不超過1 mm的STD都可接受)。任何超過1 mm的STD都必須考慮出現primary repolarization的缺血變化
- 從J point開始，baseline會立刻向下傾斜，形成inverted T wave
- 在J point與T wave的最低點之間，會出現subtle的upward convexity。這是很重要的secondary repolarization異常變化特徵。通常都很微小，且出現頻率非常高。

以上**這些secondary repolarization findings在RBBB常見於V1/aVR，偶爾在III會見到**。另外在LBBB則會在I/aVL/V5/V6見到這樣的變化，但V1不會見到，反而是在V1見到像V5、V6的secondary repolarization的誇大鏡像反應(**exaggerated reciprocal of this secondary repolarization abnormality**)，並且包括J point的上升。

看完典型的正常變化，讓<mark>**我們來看看當出現primary repolarization(例如ischemia造成)的異常的變化，可能長成什麼樣子呢?**<mark>

![Primary repolarization異常變化](/images/ipic/k4bmqh.png)

<mark>**要怎麼理解這四種異常變化呢?其實只要去看正常有哪些變化就好。就可以推敲出，上圖中變化皆屬異常。**<mark>

⭐️< 1mm STD叫做正常的discordant STD(appropriate discordant)，但是超過1 mm，叫做excessive discordant，這就要考慮缺血。

那麼如果出現excessive discordant是什麼樣的情況呢?可能是合併出現Post.wall MI。所以才會在V1-3把J point往下拉，形成更深的STD。

所以<mark>**RBBB出現Post.wall MI，在診斷上非常具有挑戰性**<mark>。因為RBBB本來就可以有正常的STD in V1-3，而要診斷Post.wall MI是要在V1-3出現STD時需要考慮的問題。兩者在STD有重疊，一者正常、一者異常。該怎麼區別？就是前面講的**出現過深的STD就需要考慮** [^4] ，下面來舉個例子。

![文獻範例](/images/ipic/wrqjyb.png)

Fig.6是舉例的這篇文章 [^4] 內的範例，可以看到這位病患開始AMI時，有inf.leads STE，另外也出現R't precordial leads STD(有Post.wall MI)。**2:48 PM**的ECG開始出現RBBB pattern，可以見到V3有明顯的excessive discordant STD。

⭐️另外在該出現ST segment downsloping with TWI的R't precordial leads中，如果看到Upright T wave，也需要小心ischemia

⭐️RBBB的rsR'，特別是右邊是R'，常會伴隨< 1 mm的STD，但是如果沒有看到STD，也需要小心懷疑ischemia的可能性

⭐️如果ST segment具有plateau形狀，而不是downsloping。之後的T wave是Symmetric而不是asymmetric也都得要小心。

### <mark>**來看看文獻上，在RBBB的狀況下，怎樣的情況需要懷疑血管阻塞了?** [^2]<mark>

![](/images/ipic/vqeqal.png)

![High risks ECG pattern for ATO](/images/ipic/1yg8iw.png)

這篇review article把可能有ATO(acute total occlusion)的High risk ECG patterns都寫了出來。

<mark>**在RBBB的情況下，任何STE的出現都必須考慮有血管阻塞。**<mark> IRA為proximal LAD。

**Dr.Smith**也曾說在**RBBB的狀況下，不應該有discordant ST deviation(例外:V2/V3可以有< 1 mm的discordant STD)** [^5]

心電圖大師**Amal mattu**，也在多次教學裡面提到，RBBB不能有任何ST deviation(**就算有minimal STE在V1~V3都要擔心**)，ICRBBB也是符合此規則 [^6]

此外在<mark>**2017 ESC STEMI Guideline針對病患出現RBBB，有以下建議**<mark> [^7] :

![](/images/ipic/s3xu79.png)

### <mark><u>小小總結以上所說RBBB在哪些狀況下需要考慮缺血</u>:<mark>

1. 在RBBB的情況下(特別是V1-V3)，不應該有任何discordant ST deviation➔**只要minimal STE就必須考慮缺血**
2. V1-V3可以出現discordant STD，但如果出現excessive discordant STD(> 1mm的STD)，就必須考慮缺血
3. 如果在容易見到secondary repolarization ECG findings的leads(aVR/V1-3、III)，出現不同的ECG findings變化，都必須考慮缺血(見Fig.5)
4. 不懂上述三樣ECG change，也不管ECG長怎樣(跳VT/Vf總該要電吧XD)，RBBB合併持續胸痛，必須考慮缺血

RBBB with AMI有點小複雜，不像LBBB/PPM直接應用Sgarbossa criteria與Modified Sgarbossa criteria來判斷就好。

但只要稍微了解BBB會有所謂的secondary repolarization ECG change，只要在常見secondary repolarization changes的leads，出現不同的變化，都要想可能是primary repolarization ECG changes(如缺血)。

**再無腦一點死記硬背，就記RBBB出現任何ST deviation(除了V1-3可以有< 1mm的STD)，就要想缺血。**

## Case繼續～～

還沒判讀完耶XD

![Limb leads ECG](/images/ipic/kevs5g.png)

這位病患的Limb leads，II的J point在basline上面，III/aVF有出現約1格的STD

這是High lateral lead的**reciprocal STD change**。可以知道可能是比較**近端一點的LAD受到阻塞(proximal LAD)導致**。

此外<mark>**如果是出現newly RBBB，那麼culprit lesion可以先猜LAD。為何?**<mark>

![Coronary a. supply](/images/ipic/5nvgoo.jpg)

**RBB主要是由LAD的septal branches支配、少部分由collateral supply(從RCA or LCx)支配(看是R't dominant or L't dominant來決定)，所以RBB說實在話，其實是dual blood supply**。

所以當出現RBBB，先猜LAD occlusion。

此外還有哪個狀況會出現newly RBBB呢?

對，就是廢摔塞，不好意思，舌頭打結了，肺栓塞!!!

![](/images/ipic/iu62by.png)

Pul.trunk塞住，導致RV dilate，RV dilate時就會拉扯spetum裡面的RBB，導致缺血，而形成RBBB

此外New RBBB in STEMI的死亡率比new LBBB in STEMI還高。而且在Bifascicular block in STEMI死亡率是最高的➡通常是RBBB+LAFB，原因是LAFB比較細，對於缺血比較不具耐受性，因此常合併受傷

換句話說:<mark>**STEMI 合併 New RBBB 或 Bifascicular Block 是高危險群**，特別是 **RBBB + LAFB**<mark>，須高度懷疑廣泛前壁心肌梗塞(LAD occlusion)。

由於**LAD occlusion with RBBB+LAFB**，具有非常高的死亡風險。在這篇文章中，作者認為**至少有20-50%會在PCI之前會cardiogenic shock或cardiac arrest**  [^8] 。

## Case繼續～～

![到院4小時後的ECG](/images/ipic/mtveyc.png)

同事雖然覺得Fig.1的ECG怪怪的，但因為沒有明顯符合STEMI criteria，所以選擇等待TnI。後續初始的TnI為正常，於是等待第二次追蹤心臟酵素+F/U ECG(**4 hours later**)。

**想到前面所說的LAD occlusion with RBBB+LAFB，出現這樣的ECG pattern，在做PCI之前會有20-50%出現cardiogenic shock或cardiac arrest。好險這4小時，病患沒有發生什麼特別的事(冒冷汗🥶)**

F/U的ECG，毫無懸念的Call了CV。

**CAG: LAD-M total occlusion**

![](/images/ipic/qf1i47.jpg)

在這邊還有一個這種ECG pattern辨識的小技巧，必須要說。

<mark>**RBBB+LAFB with AMI，很常見到downsloping STE➔出現機率非常非常非常高(重要說三次)，幾乎是規則而不是例外了!!!!**<mark>

這樣pattern的ECG，有時候不是很好辨識，一但錯過，就很容易讓病患陷入危險當中(急診室collapse)。

我舉一個在這篇文章的ECG例子 [^9]

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fagoodbear%2FOeVfMvdy5b.png?alt=media&token=a3a98afe-7f1b-4a24-bde1-7c9560cff096)

有時候我們看ECG看太快，不仔細看。就容易只判讀RBBB+LAFB，殊不知**這一張是絕對的RBBB+STEMI(可以考One-film diagnosis)**。

那麼該怎麼辦呢?

![解決辦法](/images/ipic/z0v3ah.png)



# 學習重點:

1. 使用STEMI criteria來抓MI，其sensitivity有多少?
2. BBB的primary & secondary repolarization是什麼?
3. Classic RBBB在V1的正常secondary repolarization有哪些?
4. RBBB出現primary repolarization可能的ECG pattern有哪些?
5. RBBB在怎樣的情況下，需要懷疑血管阻塞?(文獻、ECG大師們怎麼說?)
6. RBBB出現Post.MI，要如何診斷?
7. RBB哪條血管支配?
8. AMI with RBBB+LAFB死亡率很高，可能有接近一半的病患在PCI之前就shock or cardiac arrest
9. AMI with RBBB+LAFB幾乎都會出現downsloping STE(這長相，容易被miss掉)➔多看幾眼，把這ECG pattern印入腦內



# 參考資料:

[^1]: McLaren, J. T. T., Meyers, H. P., Smith, S. W., & Chartier, L. B. (2021). From STEMI to occlusion MI: paradigm shift and ED quality improvement. __Canadian Journal of Emergency Medicine__, s43678-021-00255-z. https://doi.org/10.1007/s43678-021-00255-z ↩
[^2]: Avdikos, G., Michas, G., & Smith, S. W. (n.d.). __From Q/Non-Q Myocardial Infarction to STEMI/NSTEMI: Why It’s Time to Consider Another Simpliﬁed Dichotomy; a Narrative Literature Review__.
[^3]: Amazon.com: Getting Acquainted With Ischemia and Infarction: Ischemia is NOT an Infarction! eBook : Jones, Jerry: 圖書 - [link](https://www.amazon.com/-/zh_TW/Jerry-Jones-ebook/dp/B0CW18V2LR/ref=pd_ybh_a_d_sccl_7/138-7781813-6954223?pd_rd_w=P0YKd&content-id=amzn1.sym.67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_p=67f8cf21-ade4-4299-b433-69e404eeecf1&pf_rd_r=RR04AK6T4592NZBXC9RQ&pd_rd_wg=QIesY&pd_rd_r=33fce024-00e1-4049-839d-91dd63332d5a&pd_rd_i=B0CW18V2LR&psc=1)
[^4]: Okabe, M., Nomoto, J., Fukuda, K., Arakawa, K., & Kikuchi, M. (1997). Right bundle block in a patient with acute posterior myocardial infarction. __Japanese Circulation Journal__, __61__(1), 78–81. https://doi.org/10/cxsqtc
[^5]: Dr. Smith's ECG Blog: If there is high suspicion for ischemia, do serial EKGs and pay attention to them! - [link](https://hqmeded-ecg.blogspot.com/2009/01/if-there-is-high-suspicion-for-ischemia.html)
[^6]:  EMS ECGs: hypothermia emergencies, accelerated idioventricular rhythm (AIVR), and so much more! – ECG Weekly - [link](https://ecgweekly.com/weekly-workout/ems-ecgs-hypothermia-emergencies-accelerated-idioventricular-rhythm-aivr-and-so-much-more/)
[^7]: 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation | European Heart Journal | Oxford Academic - [link](https://academic.oup.com/eurheartj/article/39/2/119/4095042)
[^8]: Dr. Smith's ECG Blog: Cardiac Arrest at the airport, with an easy but important ECG for everyone to recognize - [link](https://hqmeded-ecg.blogspot.com/2021/09/arrest-at-airport-with-easy-but.html)
[^9]: Dr. Smith's ECG Blog: What is the Diagnosis in this 70-something with Chest Pain? - [link](https://hqmeded-ecg.blogspot.com/2019/07/level-of-training-does-not-well-predict.html)

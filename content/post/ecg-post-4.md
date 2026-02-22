---
title: "意識不清的中年婦女" #輸入這篇的title
date: "2024-02-20" #輸入時間
draft: false #若為false就會直接刊出，不會以草稿模式運作
featured: false #若設定為true，會設定為精選文章
toc: false #自動產生TOC
thumbnail: "/images/ecg-post-4.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - ecg
tags:
  - Hypothermia
  - STEMI mimics
  - AMS
  - J wave
  - Obsborn wave
---

今天這個個案很有趣~~

這個是先從我們宜蘭縣消防局prehospital ECG的line群組看到的。

xx91.....送陽大

先來看看這張prehospital ECG

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FER_Bear%2FBBXcvkPkLe.png?alt=media&token=b5759d74-3272-4224-855b-9ec9d50b4403)

baseline抖抖的、心跳很慢，似乎有STE，這是我在line裡面看到救護弟兄上傳這張ECG的那瞬間印象。

# 我覺得很有意思，因為這張是姜太公釣魚，願者上鉤

後來我追蹤這個案後續狀況，聽我慢慢說來。

這張是到院時ECG

![到院時ECG](/images/ipic/86dnuj.png)

其實和prehospital ECG相差不遠。

---

**我們用prehospital ECG來看好了。首先有幾個問題要問。**

1. 有STE嗎?
2. 為何Baseline抖成這樣?
3. 為何那麼慢?

有STE嗎?因為這關乎我們是否等等就要直接call CV man。

首先我們要了解J point在哪裡?因為是否有STE or STD，取決於J point是在baseline以上還是以下。

**<u>J point這個點的定義是QRS的結尾到ST segment的開頭</u>**

下圖是我做電子筆記時常用的圖，讓我能快速複習J point & J wave & S wave

![分辨J point和J wave](/images/ipic/ogirrn.png)

<u>左2</u>可以看到J point比baseline高，所以是STE

<u>右3</u>可以看到J point比baseline低，所以是STD

那............ J wave是啥XD

J wave是指在**J point之前往上的反折**(在aVR、V1會往下反折)稱之➔<u>右4</u>就是很明顯在J point之前出現J wave

#### 所以到底prehospital ECG有沒有STE?

![分析prehospital ECG](/images/ipic/9y6g9s.png)

首先一定要養成一個習慣，那就是看到STE，要先確認這是不是STE。確認的方法，就是我剛剛說的，先找J point在哪裡!!!!(Step 1)

我們看看Fig 3裡面的12個lead，Lead I/II/aVL/aVF/V4/V5/V6都像是有STE，要找J point，或許不是那麼好找。那麼我們就從其他lead找。

在V1其實很明顯J point在哪裡。當我們找到一個lead的J point時，接下來就是把QRS寬度量出來。(Step 2)

接著就是把剛剛量到的QRS距離放到我們認為有STE的lead那邊去看，就可以發現，這些我們認為的STE，其實都落在QRS寬度內。

#### 那麼，這些我們懷疑有STE的lead根本就沒有STE

{{% notice tip "Tip:分辨是否有STE" %}}

Step 1➔找出J point

Step 2➔找出QRS寬度

Step 3➔將QRS寬度，對應到我們認為有STE的lead。

{{% /notice %}}

---

#### Case繼續

當時的急診醫師看到了疑似STE的情況，所以當下Call了CV man，CV man也建議要做心導管。但是家屬沒有要積極搶救，因此也沒有想要進一步做心導管。

我有時候回顧性看這些**不是自己的Case**時，我習慣會問自己一些問題。

##### <mark>如果我當時看到這樣的ECG，我可以辨識出來嗎?</mark>

除了我剛剛說的，看到STE，要反射性先去找J point在哪裡，用已確認是否真的有STE。

另外，還需要搭配病患是否有病史、ACS S/S等等，這也可以提高AMI的pretest probability。怎麼說呢?

ACS的症狀是由於冠狀動脈血流減少造成心肌缺氧。當患者出現ACS的典型症狀，如胸痛、呼吸困難、出汗、噁心或上腹痛等，這些症狀與心肌梗塞相關，因此可以增加心肌梗塞的pretest probability。這意味著，在有這些症狀的患者中進行心肌梗塞的診斷時，相比沒有這些症狀的患者，預測心肌梗塞的可能性更高。

因此有相關病史與ACS S/S搭配著ECG看(**就像看電影得吃爆米花一樣啦**)，才能有效準確診斷出AMI。

**看病歷上記載，這位病患倒臥在床上，身旁有許多空藥殼，疑似藥物過量。到院時，意識不清楚，因此相關症狀啥都問不出，只能靠家屬了。**

AMI比較少會意識不清，除了梗塞時間過久了，導致cardiac output受到影響，引起了低血壓(產生cardiogenic shock)。

所以意識不清 + 此ECG➔可能就要先打問號

另外細看這個prehospital ECG，假設我們的眼睛被II/aVF的疑似STE吸引過去了，但是其reciprocal pair的I/aVL並沒有出現相對應的reciprocal STD change，反而也是和II/aVF有疑似STE上升的pattern。看到這裡就要打更大的問號了。因為出現了inf.wall STEMI，大部份都會看到I/aVL出現相對應的STD。

**各式STEMI出現reciprocal STD change的比例，請見下圖(Fig.4)。**

![出現reciprocal change的比例](/images/ipic/yxyo7e.png)

---

另外，我再提出一個Case，可以和此Case相呼應一起看。

**這個prehospital ECG case，是沒有STE，但是容易誤認有STE**

**接下來這個案例，是有STE，但是容易誤認沒有STE**

![呼吸喘、嘔吐與暈厥](/images/ipic/kb2awe.png)

這個Case是來自於Dr.Smith的這篇文章 [^1]

**我們可以一眼就看出這是STEMI嗎?**

我想對一部分的人可以，但是一大部份的人會遲疑，只覺得QRS很寬。

Dr.Smith常說一句話: **<mark>When the QRS is wide, the J-point will hide. So, your next step is to Trace it down, and Copy it over</mark>**

翻成白話文就是，當QRS變寬，就容易把J point隱藏了起來。我們要做的就是把J point找出來，量出真正QRS寬度，放到其他lead，看看有沒有STE沒被我們發現。

![解析ECG](/images/ipic/a1n154.png)

如何解析這張ECG，按照之前所講的方法。先找出J point在哪裡。這張12 lead ECG，我覺得最容易看出J point是V3。將J point這個點上下劃線，就可以知道V1/V2都是STE。

把V3的真實QRS寬度放到其他lead，可以知道II/III/aVF都是STD，aVL是STE➔看到這兒幾乎可以直接說proximal LAD有阻塞了!!!!

這張是qR pattern的RBBB+ LAFB。出現如Fig.5的ECG長相。

這種ECG pattern是最高風險OMI一➔可能伴隨cardiogenic shock與VT/Vf的高發生率

- 在這篇文章中有描述到 [^2] ，在一些很嚴重的LAD occlusion或LM occlusion，是以RBBB+LAFB呈現出來➔這些個案有最高風險的Vf、cardiogenic shock和最高的in-hospital mortality(**AMI for new RBBB alone有18.8%**)

所以我們大腦實在很奇妙，明明有卻沒有，明明沒有卻有。**<mark>關鍵點就在於J point的辨識</mark>**。

![兩個個案，不同命運](/images/ipic/jjovir.png)

**看起來有STE，但卻沒有STE➔這邊prehospital ECG只要掌握J point的位置，就知道沒有STE。但有時J wave的的確確會把J point往上拉，造成真的出現STE。這就有點類似STEMI mimics的概念(有STE，卻沒有心肌梗塞)**

我自己記憶STEMI mimics的口訣是用**ST segment elevated**，每個字母都是一種狀況，都有可能造成STEMI mimics的情形(**第2張最後的t，指的就是低體溫**)

![](/images/ipic/h72bm9.png)

![](/images/ipic/6snfbz.png)

![](/images/ipic/973568.png)

#### Case繼續

後續病患入住到加護病房。

接連幾天的TnI都是正常的。也做了心臟科的comprehensive echo，也顯示完全正常。

**另外在加護病房還做了一件事情，之後ECG就慢慢正常了。**

### **<mark>增溫!!!!!</mark>**

病患在急診的溫度是27℃

所以我們在prehospital ECG看到的疑似STE，往上deflection，在aVR/V1往下deflection的那個就是**大名鼎鼎的Osborn wave，也就是J wave**。另外prehospital ECG的**baseline非常的抖**，也是因為**muscle tremor導致的ECG artifact**。

![增溫後的Serial ECG](/images/ipic/ur63sf.png)

---

# 那麼低體溫(hypothermia)可能會有哪些的ECG findings呢? [^3] [^4]

- **J wave也就是Osborn wave**，這個是在QRS complex結尾時的一個positive deflection，通常伴隨著J point elevation
  - 一般來說在core temperature < 32°C會出現
  - 其size和體溫成反比
  - 不少觀察研究顯示，在體溫< 30°C，所有病患都會出現J wave
  - 當回溫時，J wave也會變小
  - DDx(這些狀況，可能也會出現):SAH、acute cardiac ischemia與正常體溫病患
- 在moderate hypothermia，**AfSVR**是最常見的rhythm，但是SB、atrial reentrant rhythm與JB也是可以見到
- 因為myocardial irritability所以容易出現**PVC**
- 當變成severe hypothermia，**Vf**與**asystole**的風險就會增加
- 在moderate/severe hypothermia，myocardial conduction/depolarization/repolarization都會變慢，**導致PR interval變長、AV block、QRS wide與QT prolong**
- **marked bradycardia**
- **shivering引起的ECG Artifact**

<u>在Amal mattu的ECG weekly這篇文章還有提到一些關於低體溫的觀念:</u> [^5]

- Prolong all interval
  - QT prolong➔ST segment變長(Hypo-Ca也會)。**ST segment拉長的QT prolong先想低體溫和Hypo-Ca就對了**
- Pseudo STE or STD

<u>下面是不常見的ECG findings:</u>

- **出現TWI**➔通常嚴重的hypothermia通常會伴隨TWI(但是Terminal TWI不常見)，此外也會常見Af出現 [^6]
- **type 1 Brugada ECG pattern** [^7]
- **Electrical alternans**是循環beat to beat改變amplitude or axis的ECG pattern➔有很多不同的原因都有可能這樣，包括AMI、Cardiomyopathy、SVT、VT、hypothermia，Af或是電解質不平衡 [^8]

---

# 低體溫分成幾期? [^9]

| 分期(Stage)        | 核心體溫(Core temperature) | 臨床發現(Clinical findings)                      |
| ------------------ | -------------------------- | ------------------------------------------------ |
| 受寒但未達低溫     | 35 至 37°C                 | 精神狀態正常，有發抖。功能正常。能自我照顧。     |
| 輕度低溫(mild)     | 32 至 35°C                 | 清醒且發抖。無法自我照顧。                       |
| 中度低溫(moderate) | 28 至 32°C                 | 意識水平改變。可能清醒或失去意識，有或沒有發抖。 |
| 嚴重低溫(severe)   | <28°C                      | 無意識。不發抖。                                 |

# 文章重點:

1. J point到底在哪裡？
2. 運用Tips所教的步驟，找出到底有沒有STE
3. 注意RBBB+LAFB是很致命的OMI之一，一定要會看。有時會miss掉(請看上方文章)
4. STEMI mimics有哪些?
5. Hypothermia的ECG findings有哪些?

# **參考資料:**

[^1]: Dr. Smith's ECG Blog: An elderly woman with acute vomiting, presyncope, and hypotension, and a wide QRS complex - [link](http://hqmeded-ecg.blogspot.com/2022/11/an-elderly-woman-with-acute-vomiting.html)
[^2]: Widimsky, P., Rohac, F., Stasek, J., Kala, P., Rokyta, R., Kuzmanov, B., Jakl, M., Poloczek, M., Kanovsky, J., Bernat, I., Hlinomaz, O., Belohlavek, J., Kral, A., Mrazek, V., Grigorov, V., Djambazov, S., Petr, R., Knot, J., Bilkova, D., … Lorencova, A. (2012). Primary angioplasty in acute myocardial infarction with right bundle branch block: should new onset right bundle branch block be added to future guidelines as an indication for reperfusion therapy? __European Heart Journal__, __33__(1), 86–95. https://doi.org/10.1093/eurheartj/ehr291
[^3]: Dr. Smith's ECG Blog: What does LBBB look like in severe hypothermia? Is there a long QT? Is the QT appropriate for the temperature? - [link](http://hqmeded-ecg.blogspot.com/2022/01/what-does-lbbb-look-like-in-severe.html)
[^4]: Dr. Smith's ECG Blog: Hypothermia at 18 Celsius in V Fib arrest: CPR, then ECMO rewarming, for 3 hours, then Defib with ROSC. Interpret the ECG. - [link](http://hqmeded-ecg.blogspot.com/2022/02/hypothermia-at-18-celsius-in-v-fib.html)
[^5]: Amal Mattu’s ECG Case of the Week – March 22, 2021 – ECG Weekly - [link](https://ecgweekly.com/2021/03/amal-mattus-ecg-case-of-the-week-march-22-2021/)
[^6]: Dr. Smith's ECG Blog: Should we activate the cath lab? A Quiz on 5 Cases. - [link](http://hqmeded-ecg.blogspot.com/2023/10/should-we-activate-cath-lab-quiz-on-5.html)
[^7]: Dr. [[Smith's ECG Blog]]: Patient in Single Vehicle Crash: What is this ST Elevation, with Peak Troponin of 6500 ng/L? - [link](http://hqmeded-ecg.blogspot.com/2022/11/patient-in-single-vehicle-crash-what-is.html)
[^8]: Amazon.com: Electrocardiography in Emergency, Acute, and Critical Care: 9781732748606: Amal Mattu, MD, FACEP, Jeffrey A. Tabas, MD, FACEP, William Brady, MD, FACEP, FAAEM: 圖書 - [link](https://www.amazon.com/Electrocardiography-Emergency-Acute-Critical-Care/dp/1732748608)
[^9]: Accidental hypothermia in adults - UpToDate - [link](https://www.uptodate.com/contents/zh-Hans/accidental-hypothermia-in-adults#H2352758494)

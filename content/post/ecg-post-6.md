---
title: "讓心臟亂跳的外傷" #輸入這篇的title
date: "2024-03-05" #輸入時間
draft: false #若為false就會直接刊出，不會以草稿模式運作
featured: false #若設定為true，會設定為精選文章
toc: false #自動產生TOC
thumbnail: "/images/ecg-post-6.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - ecg
tags:
  - Trauma
  - cardiac contusion
  - arrhythmia
  - R on T phenomenon 
  - Vf
  - Polymorphic VT
  - TdP
---

### `48歲女性，下樓時，不小心，腳踩空，從樓上滾了下來。`

#### 簡單的一句話，卻是她悲慘人生的開端。

---

因為意識不清楚，又是外傷。病患推入了急救室。

接上了ECG monitor，發現心臟跳得很快，隨即做了一張12 lead ECG

![到院後ECG](https://p.ipic.vip/5ptepv.png)

**嗯，這張的rate，很有問題。**

怎麼說?

肯定不是156下。這張ECG的rate，應該是Double，快要300下才對。

主要是ECG機器把其中一個R wave誤認為T wave，導致本來應該要300下的心跳，機器自己算，攔腰砍一半。

#### `判讀心電圖要有一個自己的原則，機器寫的東西，參考看看就好。可以當輔助，但絕對不能拿來當答案。`

這種**會Double H.R的狀況，比較常出現在T wave明顯的情況**(如Hyper-K、或AMI先出現hyperacute T wave時)。

舉個同事其他例子(**Fig.2**)。同事上班時發現ECG monitor一直在叫，會叫是因為機器認為心跳過快了。

**真的有過快嗎?**

No~~是因為T wave太明顯，機器認錯了，經過處理後，就變下圖了。T wave降下來，機器也辨識正確了。

![同事其他個案](https://p.ipic.vip/o3jjk4.png)

我倒還是第一次遇到把R wave當成T wave，H.R攔腰砍半的狀況。

> Tips:當目測H.R和機器有差距，請看看是否機器誤認，錯把T wave當成R wave(較常見)

---

#### **<mark>Case繼續~~</mark>**

不過這次的個案，非常快的，還沒電擊，心跳就自己降下來了

![Serial dynamic ECG strips](https://p.ipic.vip/uoc0dz.png)

**Fig.3**的最上的心跳和12 lead ECG相仿，很快就降到一半(RR interval從一大格，變成約二大格)，最下圖大約要三大格，剩100下左右。

**這邊有一些算H.R的小技巧:**

- 應用rule of 300
- long lead II計算法
- 看ECG機器數值😆

應用rule of 300，就是先算RR interval有幾大格，算好後，直接300/幾大格(**Fig.4**)。不過有一個前提，那就是12 lead ECG的Speed要設在 **25 mm/sec**。理論上，一般都是設25 mm/sec，沒事不會去做變更啦。

![Rule of 300規則](https://p.ipic.vip/nrznvd.png)

另外還有long lead II的算法，也就是將12 lead ECG最下方的long lead II，先算有幾個QRS，然後x6就是一分鐘心跳多少。主要是一張12 lead ECG，是10秒鐘，所以x6就可以得到一分鐘跳多少下。

---

#### **<mark>Case繼續~~</mark>**

病患因為有明顯外傷且意識不清，後續做了Brain CT and Whole body CT。

![Brain CT](https://p.ipic.vip/z8rqtf.gif)

**Brain CT顯示有左側的SDH與雙側Tentorium SDH**

**Whole body CT看到肋骨骨折、鎖骨骨折，肩胛骨骨折**

據描述，因為病患的心跳一直都讓ECG monitor alarm。

過了沒多久......換成呼吸器開始響起警報！！！

![Collapse](https://p.ipic.vip/x2mnmu.png)

護理師大叫: Vf

一群人又一湧而上

200J DC shock

WTF!!!!到底~~又外傷，心臟又亂跳(**如果我是現場的主治醫師，當下一定會想譙這句話**😆)

Fig.6這張非常有趣。

因為是某次我上班時，有人和我說這病患因為trauma，最後還因為跳了Vf而被電擊。

我心想，這到底是怎樣，外科問題+內科問題。也太倒霉了吧😭

後來我看了這病患的ECG strip~~

### `大驚........這是大名鼎鼎的R on T phenomenon啊~~`

能夠剛好抓到在R on T的這個點，開始狂跳心律不整。哇嗚~~

我大概只有在Textbook上看過!!!(**主因可能是我的心臟急重症經驗值還不夠**😆)

讓我們來分析這張ECG strip，我把**Fig.6**稍微標示了一下

![標示過後的ECG strip](https://p.ipic.vip/b99pps.png)

仔細看，這rhythm其實**亂中有序**。

123、456、789、101112都各為一組

**1、4、7、10都是同一個beat**

- 具有narrow QRS、但是沒有看到明顯P wave，還是前面**橘色箭頭**的是這個beat的P wave嗎?

**2、5、8、11都是同一個beat**

- 這個beat，和前一個beat很明顯不同，其具有明顯P wave(**粉紅色箭頭**)，由atrium放電，走normal conduction，往下傳產生QRS-T波

**3、6、9、12都是同一個beat**

- 這個beat是寬的，無法見到明顯P wave，看起來是PVC

![放大Fig.6](https://p.ipic.vip/e77mtd.png)

**Fig.8**我將**2、5、8、11**的大概**T wave**標示出來，也把3、6、9、12的**R wave**標示出來。由圖上所示，可以知道一件事實。

那就是R wave越來越靠近T wave(**綠色的線和紅色的線越拉越近**)，產生了**R on T phenomenon**。

講到R on T phenomenon，就要提到`Commotio cordis(心臟震盪)`這個字。先來看看NEJM這篇文章的這個圖 [^1]

![Commotio cordis病生理](https://p.ipic.vip/ivjf8m.png)

**Fig.9**說明了產生Commotio Cordis的病生理機轉。偶爾會在報章雜誌上看到新聞描述，誰誰誰胸口被拳頭、棒球等物重擊了一下，病患就當場倒地不起。主要是**這個重擊打在心室再極化的易受損區(vulnerable period)。易受損區，心室在電學上是處於不穩定的狀態，所以當一個刺激(premature complex-->特別是PVC)打在這段區間時，就容易誘發Vf或TdP。**

![](https://p.ipic.vip/aysqit.png)



![Vulnerable period](https://upload.wikimedia.org/wikipedia/commons/4/4c/Commotio_Cordis_Risk_Zone.jpg)

那麼Vulnerable period在哪裡呢?**在T wave peak往前20-30 ms這段期間都是**，也就是**Fig.10**的Commotion cordis risk window這塊區間。 

---

#### <mark>Case繼續~~</mark>

我把此Case因為跳R on T phenomenon產生心室性心律不整的ECG strip後半段拉出來看(**Fig.11**)。

![後半段跳心律不整的strip](https://p.ipic.vip/c0rotk.png)

老實說這到底是Vf還是跳polymorphic VT?

看rhythm像polymorphic VT(TdP type)的morphology。據護理師描述，當下沒有摸到脈搏。

有可能真的是Vf，或是因為polymorphic VT也算是一種惡性心室性心律不整，導致這病患的cardiac output變很差，也幾乎讓病患要摸不到脈搏了。

不管如何，病患如果不穩定，就還是得先電矯正心律再說。

### `如果是Polymorphic VT，如果要電的話，怎麼電?電多少?`

一般來說，我們在電擊器按下同步鍵，在電擊paddle要放電時，會有一個小小的延遲。這延遲主要是機器會去抓和病患的心律要同步，因為電擊器要放電在QRS的R波上面。但如果遇到Vf或polymorphic VT。電擊器可能會在要放電前，一直找不到可辨識的R wave，而無法放電。

此外Polymorphic VT可能會迅速進展成Vf，這是一種危急生命的狀態，需要立即去顫(defibrillation)以恢復正常的心律，因此要做的是**不同步的去顫電擊** [^2] 。至於電擊的焦耳就和Vf一樣。單向電擊器360J、雙向則是200J。

此外Polymorphic VT，可以分為兩大類，其原因與治療，如下列我整理的圖片(Fig.12)。

![Polymorphic VT的分類](https://p.ipic.vip/63w0uz.png)

至於這個Case如果是Polymorphic VT，會歸在哪個分類呢?我們繼續往下看~~

---

#### <mark>Case繼續~~</mark>

![Post DC shock的ECG](https://p.ipic.vip/q0r35e.png)

**Fig.13**是電擊完後的ECG，Baseline雜訊多，sinus tachycardia、LVH by voltage

![隔天ICU的ECG](https://p.ipic.vip/rfwgba.png)

**Fig.14**這張有意思，做的時間點是入ICU的隔天。判讀方面很明顯的在V2-V6、I/aVL都出現TWI，而且都超級巨大。並且這QT interval超級長，QTc算起來為724 ms。

**<mark>當我們看到Giant T wave inversion(一般指>5-10mm的深度)，可以做以下的DDx<mark> [^3] :**

- Apical (Yamaguchi) Cardiomyopathy
- Takotsubo Cardiomyopathy
  - **若病患主述胸悶痛，Tako必需要考慮，但若意識不清，則要安排Brain CT來排除腦部問題**
- Severe CNS disorders
  - 增加顱內壓導致
- Stokes-Adams attacks
  - 特別當嚴重心跳過慢、完全房室阻斷時出現
- Acute ischemia/coronary artery disease
  - 看到TWI可能會讓我們想到出現reperfused rhythm，但通常不會那麼巨大TWI，此外如果是reperfused rhythm，病患症狀要緩解的
- Post-Tachycardia Syndrome
  - 在Post-tachycardia、Post-shock、Post-pacing產生的TWI➔通常是短暫、良性的
  - 在一陣心室去極化後(如PPM、VT、SVT with aberrancy、pre-excitation)出現較深、較大的T wave
  - 這也是俗稱的**Cardiac memory T wave**，也就是**心臟還記憶剛剛短暫跳VT/aberrant conduction時較深的T wave**
- Massive Pulmonary Embolism
  - 出現**RV strain**，特別是在R't precordial leads看到TWI

另外我們看到了QTc竟然高達724 ms

這邊我們來複習一下會讓**QT porlong的可能原因**，這在臨床上只要看到**QTc>500 ms**，這要膝蓋反射這張圖來提醒自己，病患哪裡是不是出問題了？是不是要先on個ECG montior，不然等等可能會跳TdP😅(**當覺得自己不會那麼賽時，老天爺會證明給你看，你就是個賽人**)

![QT prolong的可能原因](https://p.ipic.vip/etpmga.png)

---

#### 為何一個外傷卻會導致如此嚴重的心律不整呢?

這病患有腦出血、肋骨骨折、鎖骨骨折、肩胛骨骨折。

急診科的『**天天好眠睡覺聖經枕**』: Tintinalli[^4]，針對scapula fracture也開宗明義地寫了很清楚(**Fig.15**)，scapular是個被保護著的骨頭，如果出現骨折，通常代表有高能量衝擊，才會讓此骨頭骨折，通常同側的肺、胸腔、肋骨都可能合併一起受傷。

翻成白話文就是，**看到scapular fracture，不要就只認為只有scapular fracture啦，其他地方也要查看看，事情通常不是我們想得那麼簡單。**

![Tintinalli 1823頁](https://p.ipic.vip/yrx43o.png)

48歲女性，平常沒什麼特別慢性病。一個外傷後，竟然跳如此的嚴重的心律不整。我想直指!!!!!!!

#### <mark>Cardiac contusion</mark>

#### **在Dr.Smith的這篇文章中，有提到一些blunt cardiac injury的觀念，我節錄在下方** [^5] :

- ECG對於blunt cardiac injury的sensitivity不高➡主要是因為**RV位於解剖前方，這直接最靠近sternum，這就讓RV比LV更容易受到傷害**
  - 但是因為LV有更多的electrical mass(心肌量多)，因此其產生的electrical activity與心電圖異常會讓較小/較薄的RV產生的心電圖異常更難去測到(**指LV蓋住RV的ECG變化**)
- **以下是常見cardiac contusion的ECG findings:**
  - sinus tachycardia(常見於任何創傷病患)
  - 其他心律不整(PVC、PAC、Af、bradycardia、可能的VT/Vf)
  - RBBB(這是目前最常見的conduction defect，這是因為RV解剖位置更易受傷
    - Fascicular blocks and LBBB少見很多
  - myocardial injury的signs➡Q wave、STE/STD➡如果有這些findings，通常暗示有 LV involvement
  - QTc prolong
  - Brugada Phenocopy

**所以這個個案，應該是病患外傷後，有腦出血，讓QT prolong，然後又因為有cardiac contusion產生了PVC。當QT prolong又加上了PVC，就很容易會產生R on T phenomenon(想想心臟震盪那個圖，球類/拳頭就像是PVC一樣，砸在易受損區，接著就開始跳Vf或TdP了)**

---

#### <mark>Case繼續~~</mark>

病患後續腦傷嚴重，無法拔管，後來做了氣切，之後轉往RCC(呼吸照護中心)後續照顧!!!

她年僅48歲!!!!!

當我們在日常生活中，好吃、好睡時，別忘了感謝上天給我們的這一切。意外隨時都可能會奪走一切🥲

>### 文章重點:

1. 當目測H.R和機器有差距，請看看是否機器誤認，錯把T wave當成R wave(較常見)
2. Commotio Cordis和R on T phenomenon之間的關係為何?
3. 遇到Giant T wave inversion要DDx哪些問題?
4. QT prolong的可能原因
5. Cardiac contusion可能會有哪些ECG findings?



>### 參考資料:

[^1]:Commotio Cordis | NEJM - [link](https://www.nejm.org/doi/full/10.1056/nejmra0910111)
[^2]:Cardioversion and Defibrillation | Critical Care | AccessMedicine | McGraw Hill Medical - [link](https://accessmedicine.mhmedical.com/content.aspx?bookid=1944&sectionid=143522317)
[^3]:ECG Interpretation: ECG Blog #59 — Giant T - Ischemia -Yamaguchi - [link](https://ecg-interpretation.blogspot.com/2013/01/ecg-interpretation-review-59-t-wave.html)
[^4]:Amazon.com: Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9th Edition: 9781405296434: Tintinalli, Judith, Ma, O. John, Yealy, Donald, Meckler, Garth, Stapczynski, J., Cline, David, Thomas, Stephen: 圖書 - [link](https://www.amazon.com/Tintinallis-Emergency-Medicine-Comprehensive-Study/dp/1260019934)
[^5]:Dr. Smith's ECG Blog: Patient in Single Vehicle Crash: What is this ST Elevation, with Peak Troponin of 6500 ng/L? - [link](https://hqmeded-ecg.blogspot.com/2022/11/patient-in-single-vehicle-crash-what-is.html)


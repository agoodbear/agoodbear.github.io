---
title: "How to detect OMI in 10 Steps?" #輸入這篇的title
date: "2024-01-31" #輸入時間
description: "How to detect OMI in 10 steps：整理 OMI 與 STEMI 判讀差異，建立急診 ECG 系統化判讀流程。"
draft: false #若為false就會直接刊出，不會以草稿模式運作
featured: true #若設定為true，會設定為精選文章
toc: true #自動產生TOC
thumbnail: "/images/ecg-post-2.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
typora-copy-images-to: "../../static/images/ipic"
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - ecg
tags:
  - Emre Aslanger
  - OMI
series:
  - 
---
---
# **基本知識**

OMI這個觀念是在2018年由**Stephen W. Smith、 Pendell Meyers、Scott Weingart**所提出。主要是考量目前STEMI criteria並不是一項可以讓病患從PCI獲益的良好評估工具。因此介紹了OMI更好去讓我們發現ACO(Acute coronary occlusion)

新的**OMI/NOMI paradigm**並不拘限於ECG，然而ECG仍是此觀念的cornerstone，主要因為它可以快速做到、可重覆性、非侵襲性與目前廣泛使用。

由於每種ECG signs都有其pretest probability，因此ECG應該要和病患臨床表徵前、後關係，胸痛存在與否和其特性。特別是ECG finding非常subtle，更要注意。**(例如出現STE，但病患沒有任何胸口不適，可能要想想其他問題)**

到急診主述胸痛的病患，只有2~5%真正有OMI。而這些病患只有一半符合**STEMI criteria**。

還記得STEMI criteria嗎?

![](https://miro.medium.com/v2/resize:fit:2000/1*VnjkQmx6R9h4pzzRFlH1jg.png)

這篇文章透過10個步驟來分析，哪些狀況可能有OMI，哪些情況比較不像OMI。[^9]

透過這樣的分析評估ECG，讓我們能夠更快速找出OMI病患，如此可適當會診心內醫師，挽救殘存的心肌細胞。

![](https://miro.medium.com/v2/resize:fit:2000/1*BrHbvjHH4Dkhw6UGH_uvZQ.png)

**10 Steps to clarify the OMI**

> # 當有明顯STE時


## **Step 1:排除artifact**

先看有無Atrial Repolarization wave(ARW) or atrial flutter➡有可能會出現STE現象(常見於inf.leads)

- 先看看Inf.lead是不是有Negative P wave，如果是的話代表不是sinus node傳導下來的，因為是low atrium發出的，所以可看下圖(**Fig 1**) [^1]  :

![Emery Phenomenon](https://miro.medium.com/v2/resize:fit:1400/1*4SL9_arPhmTYOBoPQMElBQ.png)

**圖片解釋:**

- **(左側)正常sinus rhythm**在lead II的P wave為Upright，所以P wave的再極化波(Tp wave)會inverted(因為藏在QRS裡，所以看不到。
- **(右側)為ectopic rhythm**，接近low atrium，所以此P wave會靠近QRS，且inverted，但其Tp wave會Upright，這會讓ST上升，看起來像STEMI，可參考下圖的Lead II/Lead III(有Inverted P wave)合併STE¹

![](https://miro.medium.com/v2/resize:fit:1400/1*TuSrIyF0mbJcYzPqNx3BwQ.png)

> Tips: 要小心Tp wave可能會引起pseudo-STE，一般來說比較輕微，當P wave的高度不高且PR不短➡那麼不要直接把STE歸咎於Tp wave引發起來(還是要先想MI)

如果lead貼在arterial pulse上，也有可能會造成STE現象

> Tips: 通常不會所有leads都會影響到，比如Inf. leads(不會三個都影響到)

## **Step 2:排除傳導異常導致的STE原因**

看QRS是否有寬?若有寬，要考慮是否傳導異常導致的STE。

傳導異常會導致Secondary STE，大家可以看看我曾經寫的[這篇文章](https://agoodbear.medium.com/診斷ami-in-lbbb或paced-rhythm補完了嗎-efdc3b9f05d5) [^2] 。

![Original Sgarbossa criteria](https://miro.medium.com/v2/resize:fit:1400/1*cTxZUu5BGHWjE-HuFesyCw.png)

在**LBBB的病患**應該要符合**ST Opposition Rule與appropriate discordant。**

> Tips: 可以使用Modified Sgarbossa criteria(MSC)，若有concordant STE(任何一個lead)> 1mm(即使只有0.5 mm也要小心) or concordant STD>1 mm in V1~V3→就算有ischemia。另外若STE/S > 0.25， 也要高度還疑有ischemia(**Fig 3**)

在**PPM的病患**也可以使用MSC來評估是否有ischemia，只不過應用時要注意原本的concordant STD > 1 mm in V1-V3，可以延伸看到V1-V6。

> Tips: PPM病患的缺血，也可以應用MSC

在**RBBB的病患**要診斷ischemia比LBBB/PPM相對容易。此外RBBB在V1~V3偶爾會有discordant STD出現。

- 如果遇到了RBBB(V1~V3會有正常STD)+Post.OMI(會有Max STD over V2~V4)要**怎麼辨識出來**呢?若出現excessive discordant STD**(通常>1 mm)**，就要考慮OMI。
- 若有RVH with strain可能也會有此pattern(STD/TWI over R’t precordial lead、Tall RV1)→仍可利用**MSC的STD/R >0.3則考慮缺血**

> Tips: 在RBBB不應該有任何lead的STE
>
> 記得找QRS較好測量的lead，把正確QRS寬度比對到疑似有STE的lead

在Hyper-K也常見STE，特別是rightward leads(包括V1~V2、aVR、III)。有時會像Brugada pattern。

> Tips: RAD+Rightward leads STE需要將PE、Hyper-K、Na channel blocker列入DDx

WPW syndrome也會有可能STE。若有見到delta wave會比較像secondary引起的不是primary缺血引起的。

## **Step 3:排除其他原因導致的secondary STE**

如果QRS沒寬，但是amplitude異常(可能此問題影響到去極化與再極化)

**LVH病患**。要先熟悉，LVH ECG voltage criteria。

我自己的記憶方法是用**Ken Grauer**大師的方法:

**記12、35這兩個數字:**

1. **V1 or V2的S** + **V5 or V6的R** >35 and/or **aVL的R**>12
2. 年紀>35歲

3.ECG有LV strain出現

運用12、35兩組數字可以抓出大約90%的LVH，另外運用其他criteria可以抓出剩餘10%的LVH

那麼剩餘的criteria是什麼?

我把它分成兩組:看單lead/看相加lead**(符合其中之一就要懷疑)\(Fig 3)**

![](https://miro.medium.com/v2/resize:fit:4172/1*w7ZauWxGhsfrAshkgluTfA.jpeg)

![LVH by voltage](https://miro.medium.com/v2/resize:fit:4420/1*D8Mrecg9MGkV010NvwZrEg.jpeg)

- 通常LVH在deep S wave的leads(通常V1~V3)會有STE，這會有點像STEMI。
- 如果這些leads的**STE/S > 1/6**則要考慮OMI。這個數值因為沒有看過Dr.Smith描述過，於是我寫信去詢問作者，這個數值的來源。作者表示，目前沒有paper佐證。主要的原因是AMI會降低QRS amplitude，因此要同時找到符合LVH與AMI的病患並不簡單。
- 此外ST morphology如果是convex，也可見於LVH，並非OMI專有。
- LVH也很常見STD in V5~V6 with reciprocal STE in aVR，這會很類似ACS，但這是常見的LVH with strain pattern。
- LVH with high voltage在limb leads也可以導致nonischemic inf.STE with reciprocal STD in aVL(這邊要注意看到aVL有STD or TWI就一定是early ischemic sign嗎? →**LBBB/LVH要排除**)
- 不過Amal mattu在[2021/2/1的ECG weekly](https://ecgweekly.com/2021/02/amal-mattus-ecg-case-of-the-week-february-1-2021/)教學有提到一篇文章 [^3] 。
- 下方**Fig 4**是此篇文章的圖表。

![在LVH的前提，是否有STEMI?](https://miro.medium.com/v2/resize:fit:1130/1*eAgbwGSNfyaXbwX34HbxnA.png)

**前提:ECG需符合LVH voltage criteria**

- 先看V1~V3是否都有STE
- 上述的V1~V3是否有STE/R+S >0.25**(類似excessive discordant的概念)**
- 是否有≥ 3 個連續leads with STE?
- 1~3都Yes→STEMI
- 若3為否，是否V1~V3有TWI，若Yes→STEMI

> Tips: 這個流程圖只能看LVH + ant.wall STEMI，其他wall沒有辦法判斷

接著我們來看具有**LV aneurysm病患**，大多數的病患是因為之前有MI過，導致後續aneurysm產生。而這aneurysm也會讓ST產生elevation。

Dr.Smith寫過非常多篇有關LV aneurysm vs. OMI要怎麼區別的文章，若大家有空可以看[這篇](http://hqmeded-ecg.blogspot.com/2021/07/chest-pain-and-st-elevation.html) [^4] 。我把重點寫在下面:

**首先哪些人，是需要列入懷疑對象:**

- 第一，要有STE +well formed Q wave(特別是QS wave in V1~V4，至少一個)
- 第二，ECG的DDx必須是LV aneurysm vs. acute STEMI

**運用何種規則?**

- 如果在V1~V4有任何一個lead的T/QRS>0.36➡就必須考慮acute STEMI，當然subacute STEMI也是有可能的**(當DDx with LV aneurysm and STEMI的狀況下用)**

> 需要注意: 如果痛超過6小時，有可能因為病患是subacute STEMI，所以可能會因為運用T/QRS，但是時間過長，所以T wave沒那麼tall and wide，所以會被歸類在LV aneurysm裡面，造成false-negative
> 
> Tips: 當T/QRS>0.36 + 臨床狀況(胸口不適)➡就需要啟動Cath lab

如果**不會公式，也是可以透過Serial ECG來做比較**。若有dynamic ECG change，STEMI會出現ECG change。此外符合以下特點，比較偏向LV aneurysm

- well formed Q-waves(deep QS wave出現)
- 沒有又大、又高的T wave出現
- 沒有reciprocal change or ECG dynamic change

**看個例子吧!!!(Fig 5) [^5] **

可以看到具有QS wave in V1~V4。T/QRS >0.36 n V2~V4 →**Favor STEMI**

![T/QRS大於0.36](https://miro.medium.com/v2/resize:fit:1400/1*3yDA3eF4eHk1I8kl3w6VFQ.png)


## **Step 4:排除其他導致primary STE的原因**

當QRS complex正常(duration正常、amplitude正常) →**接著看STE最大的位置與分佈。**

當STE分佈廣泛時，考慮pericarditis，雖然心包膜炎遠比OMI少見，但仍被過度診斷。

> Tips: 如果要診斷pericarditis需要非常小心，因為pericarditis很少見，而且如果診斷pericarditis(不包括含myocarditis或pericarditis with PEF)，只需要給NSAIDs or Colchicine來治療。但是如果錯認，把AMI當成pericarditis，就會讓病患處於險境。**(千萬不要診斷99個pericarditis，卻漏掉1個AMI)**
>
> — Pendell Meyers甚至把pericarditis這個診斷當成是**垃圾桶診斷**
>
> — **Pericarditis在任何狀況下都不重要**(前提:不能有合併myocarditis or PEF)


```
那麼如果診斷剩下STEMI vs. Pericarditis要如何診斷出STEMI呢?
```
在這邊，我拿Amal mattu大師的**三步驟診斷流程**，比較清楚，有條理一點。

### 步驟一:**以下狀況如果有出現，比較favor STEMI**(照順序找，若1有 →直接Call for PCI，若沒有再往下找 →以此類推)

1. 除了aVR、V1以外的lead有STD(代表因為有MI，才會出現reciprocal change)
2. STE in III>II
3. 看STE的morphlogy(任何convex STE、horizontal STE、R-T sign →Favor AMI)。如果有看到Hyperacute T wave(QRS可以放進到T wave裡面)也是Early STEMI sign，pericardititis不會有這樣。若STE>5 mm也是偏向STEMI
4. 新產生的Q wave(新Q wave代表可能有**STEMI ECG evolution change**)(**Fig. 6**)

![The OMI Progression on ECG](https://miro.medium.com/v2/resize:fit:1400/1*sb3FHNmppiXUft2IC4hkGw@2x.png)

### 步驟二:**以下狀況如果有出現，比較favor pericarditis**

1. PR depression in **multiple leads(PR depression →Not specificity for pericariditis)**
2. **12%**的STEMI有PR depression →Atrial infarction/ischemia/repolarization都可能產生PR depression**(千萬不要看到PR depression就認為是pericarditis)**
3. 明顯的PR depression in multiple leads(Only reliable seen in viral acute pericarditis →通常出現時間短暫)。PR depression很常見於一般狀況，但是若>0.8 mm，就要懷疑pericarditis，特別是在limb & precordial leads都看到的話。

### 步驟三:**Spodick’s sign**:downsloping of the TP segment(前提:已經用Step 1 & 2評估過後，才看此→若(+)→Favor pericarditis)。需注意的是，5%的STEMI有Spodick sign

> Tips: 運用Amal mattu三步驟來區別STEMI vs. Pericarditis

```
那麼如果STE是懷疑Early repolarization(ER)或是STEMI，要怎麼區分呢?
```

首先Early repolarization的incidence約2~31%

- 能夠導致inf.與lateral STE，所以常造成false-positive的Cath lab activation
- J wave的存在常見於ER，但是在OMI也可以存在。

那麼來看看要怎麼區分吧!!!這邊我也是用**Amal mattu教學的五點區分方法** →STEMI vs. Early repolarization(**Fig. 7**)

![STEMI vs. BER](https://miro.medium.com/v2/resize:fit:2000/1*HHw4pk-O7RF25b0Y2rMYDA@2x.png)


> Tips: 這邊要注意，若看到TQRSD可以rule in AMI，但沒看到不能rule out

此外Brugada syndrome、Na channel blocker與Massive PE，都可能會有rightward leads STE可能性，需要小心鑑別。

> Tips: 如果**RAD +Rightward leads STE** →先考慮**Hyper-K、Pulmonary embolism、Na channel blocker**導致，不要先想AMI(AMI比較少會出現RAD)

## **Step 5:有STE合併TWI**

病患在spontaneous reperfusion(自己通了)，症狀緩解時，仍可見到STE。這時可見到STE with TWI。這是Reperfusion evolution。**代表一·定有OMI，才會有reperfusion T wave改變出現。**

- 心電圖的這些變化，比胸痛持續的時間更為重要

![The OMI Progression/Reperfusion on ECG](https://miro.medium.com/v2/resize:fit:2000/1*0nO7_4R3s8b6SIPNPm4Ynw.png)


上面Fig. 8出自[Smith ECG的OMI teaching images](http://hqmeded-ecg.blogspot.com/p/teaching-images.html)，這張圖非常常用。圖表表示了以下基本AMI知識:

- 如果病患有ACO(acute coronary occlusion)，隨著時間進展，會有的ECG changes。阻塞很初期，幾乎正常，接著開始有Hyperacute T wave(HATW)出現，然後ST開始拉高，出現明顯STE。接著Q wave出現。後續出現TWI，數週到數月後T wave變回原狀。
- 如果病患在Q wave出現之前有spontaneous reperfusion或是接受PCI/rTPA治療，就進入reperfusion evolution。此時會發現病患出現Terminal TWI(也就是biphasic TWI →一般我們說的Wellen type A)，之後會進展到Deeply TWI(Wellen type B)。當然如果已經出現Q wave，後來才接受PCI打通，也會出現前述的reperfusion T wave。

> Tips:  Wellen’s T wave代表的是reperfusion T wave，可以出現在任何lead**(沒症狀時做的ECG)**。只是如果我們說『Wellen’s syndrome』特指LAD在梗塞壞死前出現spontaneous reperfusion，其支配的V2~V3出現Terminal TWI or Deeply TWI(做12 lead ECG時，是沒症狀的)

Qwave與T wave的重要性

- 較大的T wave合併沒有看到Q wave or 較小的Q wave且沒有QS wave(有QS wave出現，代表已經完全梗塞，可以[看看上述LV aneurysm部分](https://medium.com/@agoodbear/how-to-detect-omi-in-10-steps-74abf60eff91#5203))→通常代表高度急性
- 較小T wave或較淺的TWI或是完整的Q wave➡通常暗示不是那麼急性
- QS wave合併淺的TWI是典型的completed MI
- 如果是完整的Q wave合併淺的TWI暗示completed MI➡是否urgent Cath lab activation仍沒有定論
- 如果是Deeply TWI、symmetry代表著reperfusion，臨床上的意義是仍有許多存活的心肌細胞。(通常preserved R waves)

> Tips: Large T wave不管Upright or Inverted都代表仍有很多存活的心肌細胞(Upright →代表現在正在塞，但還有很多活的細胞 →趕緊PCI、Inverted →代表現在reperfusion，目前有很多存活細胞)

Wellen’s syndrome觀念

- 找看看有無Terminal TWI(Wellens’ pattern A) or Deeply TWI(Wellens’ pattern B):通常是A演變成B
- 有明顯的preserved R waves暗示有不穩定的thrombotic lesion仍然在coronary artery內，但是目前已經spontaneous reperfusion
- 伴隨先前有胸痛，然後做ECG時已經緩解，看到有Wellens’ wave，若在V2~V3➡叫做Wellens’ syndrome➡這個syndrome只是一個LAD與ant. wall的現象。這現象也有可能在其他coronary a.分佈與相對應leads產生。
- 這些病患需要urgent但不是emergent Cath lab activation
- 直到CAG之前，應該要小心monitor是否有recurrence of chest pain，是否出現STE，是否出現Pseudonormalization of T waves➡這些暗示了再次阻塞

> Tips: 沒症狀又合併出現Wellen’s T wave，不代表血管已經完全自己通了，仍有不穩定的血栓在血管內，只是還沒導致阻塞，更需要嚴密監測。如果突然出現T wave變正常合併胸痛再起 →表示又阻塞了

---
> # 當沒有明顯STE時

## **Step 6:認識只有一個lead的STE這種特別的pattern**

首先讓我們再次回想，**STEMI criteria的定義** →至少**兩個連續lead有STE才符合**。後來發現，其實很多的OMI，並不符合STEMI criteria。這些不符合STEMI criteria的病患被歸類到NSTEMI裡面去。後續做了PCI才發現血管阻塞了。這些被我們missed掉的ACO case，屬於STEMI(-)/OMI(+)。統計顯示約佔25%~30%左右(**Fig. 9**)。

![Paradigm shift](https://miro.medium.com/v2/resize:fit:2000/1*khXXEpOoenC19OEQ6GT1Wg@2x.png)


而在這些STEMI(-)/OMI(+)病患中，有一些病患只有單一個lead出現STE/或不連續leads出現STE，但最後PCI也發現血管有阻塞。

先講**Aslanger’s pattern**:暗示有inferior OMI合併multi vessel disease

- 這一個pattern來自於一位介入性心臟科醫師Aslanger Emre提出的paper [^6]
- 13.3%的inferior OMI會有此pattern
- 在NonSTEMI病患中6.3%有此pattern➡和真正的Inf.wall STEMI的病患相比較有較大infarct size和較高mortality
- 一般正常沒有AMI的人有0.5%會有此pattern

**Aslanger’s pattern的定義:**

1. Inferior leads只有Leads III STE with reciprocal STD in aVL
2. STD in any of leads V4-V6 with upright or terminally positive T wave(V2沒有STD)
3. V1的ST高於V2

讓我們來看看例子(**Fig. 10**) [^7]

![例子](https://miro.medium.com/v2/resize:fit:2000/1*NUbkIDnHqfLxwjkp4mXPlw.png)


Lead III有STE with reciprocal STD in aVL、STD over V3~V6、V1的ST>V2 →此張ECG符合Aslanger’s pattern →後續PCI發現Severe CAD with TVD、LCx 100%

> Tips1: 記住Aslanger’s pattern，即使lead III的STE< 1mm with reciprocal change in aVL，在對的病患臨床情境下，也是有助於診斷OMI
>
> Tips2: 臨床上出現多條血管阻塞，要快速決定是哪條為主要問題的血管，並不容易，若延遲做PCI，可能預後會不好。但如果出現Aslanger’s pattern的心電圖，可以知道供應下壁的血管是真正的Culprit lesion，其他阻塞的血管可能是配角。所以優先處理供應下壁的血管(RCA or LCx)為上策。

再來講South African flag sign，先來看一張圖(**Fig.11**)

![South African flag sign](https://miro.medium.com/v2/resize:fit:2000/1*m1VSndBXSainbXzibG4ihw@2x.png)


和Aslanger’s pattern一樣。South African Flag sign也是非常反骨有不符合STEMI criteria的規則，但是確確實實代表有OMI。它的STE不在連續lead上面。

South African Flag sign的ECG pattern要符合如下:

1. STE over ±Lead I/aVL/V2
2. STD over Lead III(inf.leads)

> Tips: 如果沒有看到STE，則有**其他occlusion sign出現也算**:
>
> \- New Q wave
>
> \- Non-concave ST segment
>
> \- HATW(Hyperacute T wave)
>
> \- Reperfusion T wave

South African Flag sign的ST current of injury向量為左上，其代表暗示有**High lateral OMI →懷疑LAD-D1 occlusion**

綜合上述兩個特別的ECG pattern，我們分別來看兩者的ST current of injury向量方向。

- **Fig.12** 為Aslanger’s pattern，定義中要有V4~V6的STD，也就是subendocardial ischemia出現，所以ST方向為右上(藍色)，而另外定義要lead III有STE(黃色)，所以兩者綜合向量為+180度。ST current of injury朝向下壁。
- **Fig.13** 代表South African Flag sign，因為aVL、V2要STE，Lead III要STD(所以STE方向為對側-左上)，兩者的ST current of injury向量皆為為左上(白色)，其代表暗示有High lateral OMI →懷疑LAD-D1 occlusion

![Aslanger’s pattern](https://miro.medium.com/v2/resize:fit:2408/1*QsLxceOCsqQMRCYtEIwxPg.png)

![South African Flag sign](https://miro.medium.com/v2/resize:fit:1138/1*n5OEYWe86bvXHgv2uqnqGA.png)

## **Step 7:詳細描述ECG來發現subtle STE**

這一個步驟在文章內文比較雜亂，我盡可能寫清楚一點。

- STEMI criteria的限制之一是移除了和QRS之間的關係，再極化和去極化總是有成比例的相關性。因此STE在LVH非常高voltage就會高，在低的QRS voltage，STE就會較低。
- 病患如果是正常的STE其QRS morphology和缺血性的STE會不同。正常的STE會有較高的R wave與QRS amplitude。
- 如果T wave寬、大必須考慮這是缺血性STE。如果沒有如此的T wave，通常沒有缺血。
- 輕微的QT prolong也是缺血的徵象之一。

> Tips: 綜合以上，所以任何的STE都要和QRST一起來看

在被miss掉的OMI中，有3/4其實後續來看都可以用subtle STE認出來

- 大部分被miss掉的STE，其特徵是low amplitude QRS與成比例的較大T wave容易被miss
- 有時候最容易被辨識出來的ECG feature是reciprocal change，這時就要趕快去尋找是否有相對應leads的STE

要學會reciprocal change的辨識，可以參考這張圖表(Fig.14)，非常有用處。**記憶法則:PAILS**

![PAILS rule](https://miro.medium.com/v2/resize:fit:2000/1*mdbg5NMCPayBcdMJz8sidw.png)


> Tips: 要特別注意，LBBB、LVH、WPW、inferior LV aneurysm、PPM通常baseline會有reciprocal STD而沒有缺血狀況。

這邊文章內文提出了一個不錯的介入方法:把inf.leads與aVL看成一組，通常QRS amplitude比較低

- 首先看，是否有**any STE or large T wave在inf.leads**，特別是lead III，接著看aVL是否有任何STD與TWI➡這些signs都可以支持懷疑有inferior OMI
- 接著看**是否在inf.leads有任何STD**➡這是一個LCx、D1、LAD阻塞的線索。若有上述，aVL的STE都非常小，或是只有aVL的T wave相對大於QRS。或者出現inf.leads出現相對QRS較大的TWI➡這是reciprocally hyperacute(因為aVL的對稱導極為Lead III，當Lead III出現相對QRS較大的TWI，雖然aVL minimal STE，但可以推測aVL可能出問題了，此種呈現方式叫做reciprocally hyperacute)

Normal variant的precordial STE(如ER、LVH等)，不會同時合併precordial STD

- 如果在limbs leads都沒有看到任何ST deviation(STE or STD) or Hyperacute T wave➡看看是否有reciprocal STD in V5~V6，在Early repolarization(ER)並不會出現這樣的STD，此時若在right precordial leads出現任何STE，高度暗示有anterior OMI →前面的**Fig.8**有描述要如何鑑別STEMI vs. ER

> Tips: Dr.Smith在其Blog中強調過很多次，如果在precordial leads同時發現STE、STD →Favor LAD問題**(可以用PAILS來解釋)**

如果anterior OMI沒有看到reciprocal change STD，當在V2~V4出現STE，要診斷MI就會比較困難。在Guideline裡本來V2~V3就會根據性別與年齡而有不等程度正常的STE。但這幫助不大，主要是ischemic STE通常不會升高

- 雖然upward convex或straight ST segment morphology是比較specific for ischemic STE，但是有接近40%的anterior OMI並沒有這樣的ST morphology出現。
- 正常STE幾乎總是在V2~V6出現upward concave的ST morphology
- 如果在V2~V4出現至少1 mm的STE，那麼可以應用**Smith 4 variable formula(下方有MDCalc連結)**來區分Early repolarization vs. anterior OMI。另外如果不要算**QTc**，可以應用**Simplified 4-variable formula [^8] ➡若<12**，則要高度懷疑LAD OMI。當Simplified formula結果在borderline時，就使用正統的[Smith formula](https://www.mdcalc.com/calc/10079/subtle-anterior-stemi-calculator-4-variable)。



**Simplified 4-variable formula(可以不用算QTc)(Fig.15):**(RAV4 + QRSV2) — (QT interval mm + STEV360)

![簡化4 variable formula](https://miro.medium.com/v2/resize:fit:2000/1*f0Ge2p-SoXD7xBVK91grhQ@2x.png)


![](https://miro.medium.com/v2/resize:fit:1016/1*DF-BIZ_2k8igmESXIenZYQ@2x.png)

> Tips1: 會應用到Smith 4 variable formula的場景在於診斷分不清是STEMI or ER，用了Fig.8的圖表還是分不出，就可以用公式算看看**。公式的應用，只要算多次一點，就知道QRSV2(算整個QRS amplitude)、STEV360(算J point後方1.5格的STE高度)、RAV4(算V4的R wave amplitude)，然後看ECG上方電腦算的QTc帶入MDCalc，就可以知道OMI的機率。若手邊沒有電腦，也可以下載iOS or android的MDCalc app，我自己是放在打開手機最顯眼的地方，方便我使用。
>
> Tips2: 需要注意:這些公式可能會有false-positive狀況，例如太胖導致low QRS、有PEF、myocarditis，或是因為各種原因導致的過度long QT segment
>
> Tips3: 總結這一步驟 →看是否有low amplitude QRS、看是否有minimal reciprocal change、注意是否有inf.leads的任何STD、注意是否有inf.leads的STE or large with aVL的STD/TWI、運用Smith 4 variable formula診斷sublte LAD occlusion

## **Step 8:如果真的沒看到STE，那就找STD**

如果有任何inf.STD，尋找在precordial leads是否有Hyperacute T wave。有時候reciprocal inf.STD出現在明顯的ant.leads STE之前。

這邊要注意，出現STD的原因很多種，通常不代表出現的lead有一定有ischemia，反而通常是代表對側lead有出現缺血，而讓對面的leads產生STD reciprocal change。

所以我們看到STD的第一件反射動作，應該是要去看對側leads是否有STE。如果有就幾乎可以診斷AMI。但是**有些狀況的STD，看到了後，必須考慮就是AMI。**

1. **Fig.16**在V2~V4有最大的STD出現 →考慮Post.OMI(可以考慮做Post.leads，但沒看到Post.leads STE，也不能完全排除)。
2. **Fig.17**在Precordial leads出現Upsloping STD with large/symmetry T wave →暗示有proximal LAD complete or near complete ACO➡需要立即的治療，不要等到STE出現。而且在心肌有實質性壞死前，是否會出現STE，並不一定。此處的T wave並不一定高，但是會很寬且大(bulky)，就像典型的Hyperacute T wave。
3. **Fig.18**如果STD是在multiple leads，特別Maximal STD in V5~V6(包括I/II)，伴隨aVR or V1 STE➡這暗示著LMCA or TVD or Proximal LAD問題，但是沒有full occlusion。**(如果之前的ECG是相對正常的，在適當的臨床情境下就更要懷疑)**

![例子](https://miro.medium.com/v2/resize:fit:1600/1*SaM9sbr5k6ILx9G3DT2pQQ.jpeg)

![例子](https://miro.medium.com/v2/resize:fit:2400/1*NA_0SveWe2g3R7Gcb4_adQ.jpeg)

![例子](https://miro.medium.com/v2/resize:fit:1706/1*86-bRo_XUezosEJXwcuCBA.png)


> Tips: 注意STD其實也有可能是STE

## **Step 9:尋找Hyperacute T wave(HATW)**

雖然目前Hyperacute T wave缺乏正式的定義。但光是amplitude不足以描述它。作者相信，用bulk來定義是比較恰當的，而T wave 呈現bulk必須相對QRS size

![Hyper-K vs. HTW](https://miro.medium.com/v2/resize:fit:1400/1*48QnaZJGpaBVIONbL9sdhw.png)

- Bulk是藉由測量AUC➡看高度、寬度、upward ST concavity的量(ST越直-straight，AUC越大，T wave就越bulkier)

![Abnormal T wave](https://miro.medium.com/v2/resize:fit:1400/1*DVqzxLmDSuMiln6Akm5wIQ@2x.png)

> Tips: Amal mattu常說，如果整個QRS可以放進T wave，就要懷疑有HATW

## **Step 10:當每件事都正常，但是臨床高度懷疑，那就再次確認每件事**

有些ECG設備從lead I/II計算其他lead。有時可能產生機器內部錯誤，造成ead II呈現空白，就可能完全miss掉inferior OMI

考慮其他輔助的leads➡Right side ECG、Post.leads

如果輔助的leads也不能看出問題，在第一小時內，每15分鐘做一張ECG，若疼痛逐漸增加，就更頻繁做ECG。

如果臨床非常懷疑，可以serial追蹤hsTnI、bedside echo、coronary CTA等。

任何ECG sign都取決於病患的Pretest probability，當ECG sign越subtle，就需要更高的pretest probability。

> Tips:如果一開始的ECG無法給予OMI的診斷，但臨床上仍懷疑 →Serial F/U ECGs
>
> -有症狀:每15分鐘做一張(看是否有ACO evolution)
>
> -症狀改變(有 →無、無 →有都要做):看有無ECG dynamic change(MI才會有)

## **參考文獻**

[^1]: [A man in his sixties with chest pain](https://hqmeded-ecg.blogspot.com/2020/06/a-man-in-his-sixties-with-chest-pain.html)
[^2]:[診斷AMI in LBBB或paced rhythm補完了嗎?](https://agoodbear.medium.com/診斷ami-in-lbbb或paced-rhythm補完了嗎-efdc3b9f05d5)
[^3]:Armstrong, E. J., Kulkarni, A. R., Bhave, P. D., Hoffmayer, K. S., MacGregor, J. S., Stein, J. C., Kinlay, S., Ganz, P., & McCabe, J. M. (2012). Electrocardiographic Criteria for ST-Elevation Myocardial Infarction in Patients With Left Ventricular Hypertrophy. __The American Journal of Cardiology__, __110__(7), 977–983. https://doi.org/10.1016/j.amjcard.2012.05.032
[^4]:[Chest pain and ST Elevation](http://hqmeded-ecg.blogspot.com/2021/07/chest-pain-and-st-elevation.html)
[^5]:[Subtle Anterior STEMI Superimposed on Anterior LV Aneurysm Morphology](https://hqmeded-ecg.blogspot.com/2015/01/subtle-anterior-stemi-superimposed-on.html)
[^6]:Aslanger, E., Yıldırımtürk, Ö., Şimşek, B., Sungur, A., Türer Cabbar, A., Bozbeyoğlu, E., Karabay, C. Y., Smith, S. W., & Değertekin, M. (2020). A new electrocardiographic pattern indicating inferior myocardial infarction. __Journal of Electrocardiology__, __61__, 41–46. https://doi.org/10.1016/j.jelectrocard.2020.04.008
[^7]:[Why do we liberally record ECGs? And what do you think the angiogram showed?](http://hqmeded-ecg.blogspot.com/2021/08/why-do-we-liberally-record-ecgs-and.html)
[^8]:Aslanger, E., Yıldırımtürk, Ö., Bozbeyoğlu, E., Şimşek, B., Karabay, C. Y., Türer Cabbar, A., Kozan, Ö., & Değertekin, M. (2018). A Simplified Formula Discriminating Subtle Anterior Wall Myocardial Infarction from Normal Variant ST-Segment Elevation. *The American Journal of Cardiology*, *122*(8), 1303–1309. https://doi.org/10.1016/j.amjcard.2018.06.053
[^9]:Aslanger, E. K. (n.d.). __myocardial infarction and differentiating it from mimics: Ten steps to or away from cath lab

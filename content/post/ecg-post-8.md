---
title: "反覆Vf，只能禱告了嗎?" #輸入這篇的title
date: "2024-07-10" #輸入時間
draft: false #若為false就會直接刊出，不會以草稿模式運作
featured: false #若設定為true，會設定為精選文章
toc: false #自動產生TOC
thumbnail: "/images/ecg-post-7.jpg" #每篇文章的縮圖位置在這裡(static/images/)-變更
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - ecg
tags:
  - DSD
  - Vf
  - ECMO
  - myocarditis
  - 流感重症
  - electrical storm
  - coronary a. spasm
---

晚上六點多來了一位到院前呼吸、心跳停止的病患。

快速詢問了家屬，發生了什麼事?兒子說爸爸在餐桌上吃著飯，突然就倒了下來。

EMT很快送來我們醫院，由我們團隊接收。

初始心律Vf.......是急診室打掃阿姨都會看得心律(**ACLS老梗**)


團隊其他成員，很快完成插管、架設thumper、打上點滴，開始給強心針。
CPR後心律還是心室顫動，再次電擊⚡️，繼續CPR
開始給抗心律不整藥物
還是心室顫動，再次電擊⚡️
我請護理師拿另一台電擊器幫病患前胸、後背貼上電擊貼片。我要做DSD。
我手拿一組電擊器、護理師用手按另一組電擊器，我喊1-2-3兩組電擊器同時放電。

雖然我常常欺負leader，但我真心希望，不要我喊2時，她那組就先放電了😅

**DSD總共又電了三次，終於ROSC。**

![ROSC後的第一張ECG](https://p.ipic.vip/1leh54.png)

沒有辦法看到明顯P wave，分不清QRS的結尾在哪裡。所以QRS是寬還是窄?

![ROSC+10 mins](https://p.ipic.vip/5rgb2z.png)

還是沒有看到明顯P wave，但QRS很明顯是窄的。紅色的或許是JPC(junctional premature complex)。整體的rhythm應是AJR(Accelerated junctional rhythm)。

但是綠色箭頭就有意思了，因為我們知道QRS不寬，所以比對過來Lead I/aVL都是STE，且Lead II/III/aVF都是STD。但起來是**High lateral MI呢!!!!!!!!**

![ER Bedside echo](https://p.ipic.vip/j28zai.gif)

雖然我不是心臟科專科醫師，但心肌梗塞病患，還是不免會想看一下病患的心臟超音波是否有符合ECG ischemia territory的RWMA出現。上圖的Heart POCUS，**本來我預期會看到LAD or LCX支配的territory會出現一些RWMA，但是看起來沒有明顯的RWMA出現**。

#### 有時想想我們做Heart POCUS，把重點放在病患是否有無RWMA與利用eye balling看大約的LV systolic function。到底和CV man看的結果會不會相去甚遠?

![文獻absctract](https://p.ipic.vip/cajmao.png)

這篇是刊登在**Western Journal of Emergency Medicine**的一篇文章。

這篇研究探討了急診醫師在接受簡短培訓後，使用Bedside echo對LVEF進行eyeballing估計，並將結果與心臟科醫師使用Simpson方法測量的結果進行比較。研究結果顯示，**經過專門培訓的急診醫師在急診室中能夠準確地視覺估計左心室收縮功能**。

---

### ✏**在我們來說後來病患怎麼了之前，我們先來看看以下幾個問題:**

1. DSD(**Double Sequential Defibrillation**)是什麼東東?
2. 什麼是electrical storm?
3. 什麼時候介入DSD比較適當？

首先DSD是拿兩台電擊器，用在病患身上，以近乎同時間放電，以其能夠中斷refractory VT/Vf。[^1]

而**refractory VT/Vf也就是 electrical storm，其定義是在24小時內，發生3次或以上VT、Vf或ICD電擊的情況** [^6]

那麼**DSD的原理**主要是基於以下幾個方面 [^2] : 

1. **改善電向量方向**：DSD通過使用兩台去顫器並改變電擊片的放置位置，來改變或增加不同的電向量。這樣可以使更多不同向量的心肌細胞得到去顫，並影響更多的心肌表面積，從而提高去顫效果。
2. **增加電流功率**：研究證明，除顫時使用的焦耳數（即電流的能量大小）顯著影響了心室顫動（Vf）的電擊成功機率。使用DSD增加去顫的焦耳數，可能有助於提升成功去顫的機會
3. **降低去顫成功閾值**：有研究指出，第一組電擊可能先降低去顫電擊的閾值，如果第二組電擊能在第一組電擊後100毫秒內進行，則成功去顫所需的能量可明顯降低。這顯示在DSD中，因為相對延長了電擊時間，可以幫助心肌細胞去顫的效果

在這邊要提到NEJM的一篇文章 [^3] ，說明去顫的方式分成三種:**AP position**所謂的vector change(VC)、或者**標準位置**(anterior-lateral position)、與**AP+標準位置**的DSD

- 這篇文章招募了**405位OHCA病患，而且這些病患是VT/Vf經過三次電擊仍處於refractory的狀態。這臨床試驗將病患隨機分配到這三組**

![文章中的Primary and Secondary outcomes](https://p.ipic.vip/xzptqk.png)

- **Vector change和DSD組別對於survival to hospital discharge都有提高、另外Vf中止率與ROSC rate都高於anterior-lateral position(標準位置)組別**

但是DSD使用多台defibrillator增加了臨床複雜度，可能會使High-quality CPR受到影響，所以在沒有證明DSD與vector change相比有任何明確好處的情況下，建議對於refractory Vf使用Vector change。

另外此研究因為在COVID-19大流行期間招募不足病患，此研究在招募不到50%的受試者後就停止了。這些因素導致試驗未能達到預定的樣本量，影響了試驗結果的統計顯著性和可信度。

另外此篇文章是評估DSD和VC與標準位置去顫的比較。從結果來看，DSD似乎比VC更有優勢，但文章選擇不直接比較DSD和VC可能是因為兩者在技術操作和應用場景上有顯著差異。DSD需要兩台defibrillator，操作較為複雜且設備需求較高，而VC則只需調整去顫貼片的位置，操作相對簡單，設備需求較低。

若**應用到實際應用上，不同急救服務的資源和能力不同，選擇適合的策略尤為重要。也就是若現場只有一台defibrillator，在使用標準貼法電擊下仍是refractory Vf/VT，就改成VC，若現場有兩台defibrillator則可選擇DSD，但是操作複雜度就會提高，值不值得使用還需三思**。

這位作者Sheldon Cheskes，在更早之前2020年，也有在Resuscitation發表一篇針對refractory Vf，使用DSD的研究報告 [^7] 。

![Vf終止/ROSC結果](https://p.ipic.vip/x98phl.png)

上列圖表也顯示似乎和在NEJM一樣類似的結果，那就是VC組別/DSD組別和標準組別相比較，有較高的Vf終止率與ROSC比率。

這邊有**EM:RAP**教如何貼，如何放電的過程。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ov-BBUhKdJU?si=gavO9nhkdoLG70GU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**那麼DSD電擊的時間點選擇到底要同時還是有先後順序的電擊呢?** [^4]

操作**DSD是相繼去顫而不是同時地進行去顫**。同一人雙手分別按下兩台去顫器的放電，雖然同時按下去，但仍有時間差，所以兩台機器不太可能同時放電。又或兩個人各操作一台去顫器，數1-2-3同時間按下，就更難以『同時』放電了。因此兩台機器能夠達到很短時間內的『連續』，而不是『同時』放電。

操作DSD可能會有一個疑慮，那就是兩組去顫器近乎同時放電，會不會讓去顫器秀逗?

這篇發表在Resuscitation的文章 [^5] 也描述到如果使用Orthogonal向量配置(**也就是一組是右上左下貼、另一組前後貼**)這樣一組電極所施加的電壓在另一組電極上產生的感應電壓會顯著降低，從而**減少去顫器損壞的風險**。而平行向量配置，兩組電擊貼片放置的方向幾乎平行，這樣一組電極所施加的電壓會在另一組電極上產生較高的感應電壓，增加了去顫器損壞的風險。

此外這篇文章 [^5] 也提到**DSD 效果取決於電擊間隔時間**。重疊(overlapping)、10 ms和 100 ms間隔的 DSD 效果優於單一向量疊加電擊(stacked shocks)；50 毫秒間隔的 DSD 效果較差；200 毫秒或更長間隔的效果無差異。

文中的單一向量疊加電擊(stacked shocks)指的是使用同一對電極，進行兩次的連續電擊。兩次電擊之間間隔大約10秒。

所以總結以上，我們可以知道，如果我們遇到refractory Vf，若選擇使用DSD，可能要考慮是否會造成去顫器故障，另外兩台去顫器放電的時間間隔可能也會影響成效。

目前去顫器的設定，都沒有DSD相關的設定，可以精確控制電擊時間。但是如果真的有更大型研究顯示DSD有明顯幫助，列入BLS/ACLS guideline裡面，我想製造去顫器的主要公司，應該會想盡辦法弄出設定的。

---

### ✏**案例繼續**

病患ROSC後，就被大批人馬從急診送到心導管室，進行進一步心導管檢查。

![心導管檢查](https://p.ipic.vip/ci9ppm.png)

CAG檢查結果**懷疑是coronary a. spasm引起**。

此外當天後續在ICU on上了ECMO。後續尋找可能造成coronary a. spasm的可能原因。

![CXR at ER](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FER_Bear%2FTcN8SxmYpV.jpg?alt=media&token=246e1468-f34a-4ca1-9aac-a25b97a058dc)

Fig.8可以看到在急診的CXR，左側要whiteout。後續在ICU驗到是Flu B，也通報了流感重症。

後續Troponin的最高值出現在到院後的隔一天。**最後被診斷influenza myocarditis**。

![Serial TnI](https://p.ipic.vip/ve17o4.png)

病患在ICU的第三天有一張ECG，有趣。

![Day 3 ECG](https://p.ipic.vip/0sk467.png)

看起來是Shark fin sign~~

**Shark fin sign**可是鼎鼎有名的三大寡婦製造者之一XD

為何?因為**有極高機率會出現Vf和Cardiogenic shock**。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/ECG?src=hash&amp;ref_src=twsrc%5Etfw">#ECG</a> &quot;Widow Makers&quot; 🪦 🦈 🌊<br><br>👆🏾 High rates of VF/cardiogenic shock<br>Can be mistaken for broad complex tachy or hyperkalaemia<br><br>Recognise and treat aggressively. <a href="https://t.co/n5KXtPnZmE">pic.twitter.com/n5KXtPnZmE</a></p>&mdash; Rob Buttner (@rob_buttner) <a href="https://twitter.com/rob_buttner/status/1441358257969197073?ref_src=twsrc%5Etfw">September 24, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

不過通常Shark fin在septal-ant. leads那麼明顯，大部分會看到在inf.leads出現reciprocal change，但是反而此case是看到inf.leads也一起STE起來。

Dr.Smith在這一篇文章中的一句話 [^8] ，我覺得非常讚，分享出來。

![Dr.Smith](https://p.ipic.vip/d64oqc.png)

#### **我翻譯白話一點：**

不管如何，我們必需要了解，ECG無法區分transmural ischemia的病因(**指出現了STE**)，它只是單純反應心肌細胞的狀態。

臨床醫師必須決定要DDx哪些問題，包括OMI、Takotsubo cardiomyopathy、還是focal myocarditis等等都可能會出現STE

然而在考慮病患病史下，OMI絕對是這些鑑別診斷中最常見與可治療的病因。至於其他診斷，是做了CAG為negative的排除診斷。

以上的這段話，其重要性在於**即使這些導管檢查是陰性，你也能了解你決定安排導管這個決定是對的，畢竟仍是有診斷是需要導管陰性才能診斷出來的**。

**心導管negative finding也是一個positive finding。**

我有一些case，也是CV man懷疑myocarditis，但是沒有做CAG。但是OMI vs. Myocarditis，臨床上無法透過ECG來做區分。只有CAG能夠知道血管怎麼了，到底有沒有血管阻塞導致的OMI出現，沒去做CAG怎麼知道不是OMI?



**最後病患住院了17天，走著離開醫院!!!**

# Learning Points:

1. 當出現refractory VT/Vf(電擊超過三次以上)，可以考慮VC貼法或DSD(**目前仍沒有強力證據支持DSD**)
2. DSD的原理為何?
3. 使用DSD可能的疑慮，包括增加ACLS複雜度，可能干擾high quality CPR，與可能造成去顫器的損壞➡︎**真的考慮太多，就試試VC貼法**
4. 當出現STE，有時導管negative，也是一種positive finding，特別是當你要OMI vs. Takosubo、OMI vs. myocarditis時，導管陰性，更可以讓診斷偏向某一邊。

# 參考資料:

[^1]: Basic principles and technique of external electrical cardioversion and defibrillation - UpToDate - [link](https://www.uptodate.com/contents/basic-principles-and-technique-of-external-electrical-cardioversion-and-defibrillation?search=Double sequential defibrillation&source=search_result&selectedTitle=1~150&usage_type=default&display_rank=1#H4072367215)
[^2]: 內政部消防署 | 嘉義市國民運動中心 OHCA 救護搶救紀實與探討 - [link](https://nfamag.com/article.php?id=273)
[^3]: Cheskes, S., Verbeek, P. R., Drennan, I. R., McLeod, S. L., Turner, L., Pinto, R., Feldman, M., Davis, M., Vaillancourt, C., Morrison, L. J., Dorian, P., & Scales, D. C. (2022). Defibrillation Strategies for Refractory Ventricular Fibrillation. __The New England Journal of Medicine__, __387__(21), 1947–1956. https://doi.org/10.1056/NEJMoa2207304
[^4]: 社團法人中華緊急救護技術員協會醫誌.- [link](https://www.emt.org.tw/temtaf/GenPageSvc_downloadFile?fileId=202006171630470&open=N)
[^5]: Taylor, T. G., Melnick, S. B., Chapman, F. W., & Walcott, G. P. (2019). An investigation of inter-shock timing and electrode placement for double-sequential defibrillation. __Resuscitation__, __140__, 194–200. https://doi.org/10.1016/j.resuscitation.2019.04.042
[^6]: Electrical Storm • LITFL • CCC Cardiology - [link](https://litfl.com/electrical-storm/)
[^7]: Cheskes, S., Dorian, P., Feldman, M., McLeod, S., Scales, D. C., Pinto, R., Turner, L., Morrison, L. J., Drennan, I. R., & Verbeek, P. R. (2020). Double sequential external defibrillation for refractory ventricular fibrillation: The DOSE VF pilot randomized controlled trial. __Resuscitation__, __150__, 178–184. https://doi.org/10.1016/j.resuscitation.2020.02.010
[^8]: Dr. Smith's ECG Blog: What is a useful next step in the evaluation of this patient with Chest pain and this ECG? - [link](https://hqmeded-ecg.blogspot.com/2020/07/what-is-useful-next-step-in-evaluation.html)

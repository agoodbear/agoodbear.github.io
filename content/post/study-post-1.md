---
title: "使用Hugo架站相關語法" #輸入這篇的title
date: "2024-01-12" #輸入時間
description: "Hugo" #根本不知道什麼時候會出現
featured: true #若設定為true，會設定為精選文章
draft: false #若為false就會直接刊出，不會以草稿模式運作
toc: true #自動產生TOC
#menu: main #這行打開，title會跑到正上方
# usePageBundles: false # Set to true to group assets like images in the same folder as this post.(不會用的功能)
featureImage: "/images/HUGO.png" #設定這篇文章首頁的圖片
# featureImageAlt: 'Description of image' # Alternative text for featured image.
#featureImageCap: 'HUGO Logo' # Caption (optional).設定文章首頁圖片的描述(若圖片是ECG，就可以描述)
thumbnail: "/images/HUGO.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
# shareImage: "/images/path/share.png" # Designate a separate image for social media sharing.
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: false # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - study
tags:
  - Hugo Tips
  - 程式寫作
  - Hugo架站
series:
  - 自我成長
#comment: false # Disable comment if false.
---

# 要如何利用Hugo建立靜態網站文章

## 前置作業

首先要確立幾件事情: 

- 在Mac中安裝好[Xcode](https://apps.apple.com/tw/app/xcode/id497799835?mt=12) (**Win應該不用安裝吧?這我不知道**) 
- 使用Homebrew在Mac的終端機安裝Hugo
- 已經在[GitHub](https://github.com/)申請好帳號
- 安裝好VS code與typora
  - [VS code](https://code.visualstudio.com/) 可以直接寫markdown code
  - [Typora](https://typora.io/#feature) 會直接將文章轉成markdown格式(**有點所見即所得概念**)➔用這個寫文章比用VS code寫舒服多了😌
    - 在Typora引用圖，在**圖上直接右鍵，就可更改大小**
- 已經在[Hugo theme](https://themes.gohugo.io/)裡面選好，想要搭配的theme來做修改
  - 下載theme，可以在自己的電腦上打開運作

完成上列，就算完成大部分了～～～

接著就是根據每個不同的theme，看自己的需求來做客製化的動作!!!!(**不是必須的，但像我這種強迫症患者，肯定要改**)

這邊就一定要強烈推薦古君葳老師的[Github 免費架站術！輕鬆打造個人品牌](https://hahow.in/courses/5de8fec16117240026540b9c/discussions?item=5e6edc23024d690024e4086b)

![hahow學院網站課程](https://p.ipic.vip/8j6o61.png)

---

## 文章基本markdown格式須知

- 我這一個theme是來自於[這裡](https://themes.gohugo.io/themes/hugo-clarity/) (**以下的變更都根據這一個theme為主**)

在exampleSite/content/post自行建立一個markdown檔案(*.md)

一般文章需要加入的格式(至於**每篇Blog markdown文章的最上方，分別用---與---當最上層和最下層**)

### 每篇文章必須輸入的markdown語法:

```markdown
---
title: "使用Hugo架站相關語法" #輸入這篇的title
date: "2024-01-12" #輸入時間
description: "Hugo" #根本不知道什麼時候會出現
featured: true #若設定為true，會設定為精選文章
draft: false #若為false就會直接刊出，不會以草稿模式運作
toc: true #自動產生TOC
featureImage: "/images/HUGO.png" #設定這篇文章首頁的圖片
thumbnail: "/images/HUGO.png" #每篇文章的縮圖位置在這裡(static/images/)-變更
codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.
codeLineNumbers: true # Override global value for showing of line numbers within code block.
figurePositionShow: true # Override global value for showing the figure label.
categories:
  - 心電圖
  - 超音波
  - 急診人生
  - 重訓
  - 自我進修
tags:
  - Hugo Tips
  - 程式寫作
  - Hugo架站
---
```

之後就在下方進行書寫文章內容。

## 支援的Shortcodes有哪些?

我把自己常用的都列出來~~~~

Youtube

Twitter(X)

Google Maps

Xmind Pro

Podcast

IG:**目前已被移除，需要透過複雜的步驟，才能被使用**(研究好久，最終放棄😅)

---

**請先在exampleSite/config/_default下的config.toml內加入一行咒語:**

```markdown
unsafe = true
```

加入這行就可以讓 Hugo 開啟 Markdown 中撰寫 html 程式的功能了，之後只要貼入embed html code就可以直接執行啦!!!!帥啊~~~

---

### <u>Youtube</u>: **按下分享，點入崁入，就會有embed code出現**

<iframe width="1000" height="500" src="https://www.youtube.com/embed/tnFqEtjnZtc?si=63vM3e76jCOZ9n-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

如果要輸入Shorts的影片，將Shorts最後代碼填入embed/後方就可


### <u>Twitter</u>: **以下方為例子**

https://x.com/smithECGBlog/status/1745156040159559767?s=20

我們必須輸入

{ {< tweet user="smithECGBlog" id="1745156040159559767" >} } ➔這樣才會出現twitter文章

{{< tweet user="smithECGBlog" id="1745156040159559767" >}}



### <u>Google Maps</u>:分享，按入崁入地圖

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.161444341695!2d138.7588886404021!3d35.52442597487377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60195e52526915f9%3A0x1a967cee111ec37d!2z5rKz5Y-j5rmW5qWT6JGJ6L-05buK!5e0!3m2!1szh-TW!2stw!4v1705064902034!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



### <u>Xmind Pro</u>: 按下分享，可得到embed code

我分享一個自己的心智圖當範例。

<iframe src='https://www.xmind.app/embed/EDpQRw/' width='1200' height='600' frameborder='0' scrolling='no' allowfullscreen="true"></iframe>



### <u>Podcast</u>:在Apple Podcast拷貝連結，放到網頁上搜尋，可以導到單集的網頁，接著按下分享，見到崁入連結

![Apple Podcast的單集頁面](https://p.ipic.vip/6pfqsi.png)

<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/tw/podcast/episode-92-marine-ingested-poisons-and-infections/id1514052567?i=1000641060189"></iframe>

---

### 可以插入PDF檔案

{{< embed-pdf url="/pdfs/1.pdf" class="custom-pdf-size" renderPageNum="5" >}}



---

## Markdown文字格式有哪些?

### 字體顏色變更

`紅字` ➔ 按下``

**粗體字** ➔ 按下CMD+B 

<u>畫底線 </u>➔ 按下CMD+U 

*斜體字* ➔ 按下CMD+I 

[超連結 ](https://agoodbear.github.io/)➔ 按下CMD+K 

~~刪除線 ~~➔ 按下CMD+U 

<mark>可以塗鴉的顏色</mark> ➔ 在Typora按下CMD+Shift+H，沒有用喔，= =text= =只在html會成功將文字高亮，但是markdown要輸入< mark >text < mark >才會成功高亮文字

- **解決的方法➔先在typora將文字高亮(CMD+shift+H)，之後進入VS code，搜尋該篇文章的< mark >的字元，然後用< mark >取代就可**

<span style="background-color: #b0b07d">Marked text</span>➔可以透過[色彩選擇器](https://g.co/kgs/ALoDQzd)來做選擇

<mark style="background-color: lightblue">Marked text</mark>➔也可以透過[常用顏色表](https://www.ifreesite.com/color/web-color-code.htm)來做選擇

可以[產生漸變彩色字](https://www.ifreesite.com/colorfont/) : <font color="#BD2E1B" size="3">產</font><font color="#AA6334" size="6">生</font><font color="#081B4D" size="3">漸</font><font color="#6CD4EC" size="7">變</font><font color="#323798" size="4">顏</font><font color="#584118" size="4">色</font><font color="#276676" size="4">很</font><font color="#4A62B4" size="2">簡</font><font color="#D946CD" size="6">單</font>

> 引言 ➔ 按下⌥+CMD+Q

```
記得把codeLineNumbers: false，就會顯示全黑background ➔ 按下文字的上、下方輸入```(然後就可以輸入要怎樣的語言:如markdown)
```

### 表格化(背景塗滿顏色)

{{% notice note "Ｎote" %}}

這裡可以寫一些重點

{{% /notice %}}



{{% notice info "Info" %}}

這裡可以寫一些重點

{{% /notice %}}



{{% notice tip "Tip" %}}

這裡可以寫一些重點

{{% /notice %}}



{{% notice warning "Warning" %}}

這裡可以寫一些重點

{{% /notice %}}



{{% notice tip "Mix示範" %}}

- 這裡可以寫一些重點
  - 這裡可以寫一些重點

```
這裡可以寫一些重點
```

{{% /notice %}}



**可以直接輸入表格**

| 空格一 | 空格二 | 空格三 |
| ------ | ------ | ------ |
| 1      | 2      | 3      |



### **可以cite文章**➔舉例來看看效果如何

Dr.Smith表示4 variable formula可以應用在Subtle Ant.STEMI與early repolarization的DDx [^1] 



### 有序清單(**1.按下去後要空格**)➔`可內縮`

1. Test
2. Test
3. Test

### 無序清單(**-按下去後空格**)➔`可內縮`

- Test
- Test
- Test

### 其他:上標、下標

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

### Checkbox

- [ ] uncheck

- [x] check

### Typora常用的快捷鍵

![段落相關語法](https://p.ipic.vip/tvhqhc.png)

![文字格式](https://p.ipic.vip/4ddh58.png)

![視野角度](https://p.ipic.vip/udydui.png)



[^1]: Dr. Smith's ECG Blog: 12 Example Cases of Use of 3- and 4-variable formulas, plus Simplified Formula, to differentiate normal STE from subtle LAD occlusion - [link](https://hqmeded-ecg.blogspot.com/2017/11/12-cases-of-use-of-3-and-4-variable.html)

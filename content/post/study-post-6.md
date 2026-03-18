---
title: "養龍蝦心得：用 WhatsApp + Discord + OpenClaw 打造自動化知識管理流程"
date: "2026-03-18"
description: "分享如何透過 WhatsApp、Discord 和 OpenClaw 建立自動化的 PDF 閱讀筆記與知識管理系統"
featured: false
draft: false
toc: false
thumbnail: "/images/openclaw-workflow.png"
categories:
  - study
tags:
  - OpenClaw
  - Discord
  - WhatsApp
  - 養龍蝦心得
---

## 養龍蝦，通訊介面的安裝很有趣

我覺得養龍蝦，通訊介面的安裝，很有趣。

我覺得 WhatsApp 很好用，特別是這軟體的母公司是 Meta。很多社群軟體看到的資訊按下分享，第一個按鈕就是 WhatsApp。

按下去後開始分析內文、幫我貼標籤存入我的第二大腦 Roam 裡。

## 從 WhatsApp 到 Discord：資料分類的進化

但隨著什麼都透過 WhatsApp 轉入 OpenClaw，這樣之後要找資料，有點小麻煩。不過因為已經 tag 標籤，存入 Roam 裡，照道理用 filter 搜尋就好。但要在 WhatsApp 那一長串你和 OpenClaw 之間的對話尋找，我只能說——大海撈針。

後來想到 **Discord 也可以當作 OpenClaw 的通訊介面**。

## 自動化 PDF 筆記流程

所以我設定：當我從 WhatsApp 傳任何 PDF 連結或原檔，就會開始自動分析 PDF 內文。

然後在 Discord 我設定了一個**主頻道：閱讀筆記**。

- 閱讀筆記下有一則我 pinned 好的 **PDF 索引**
- 此頻道下方有一個 **thread（討論串：PDF 存放區）**

### 運作方式

WhatsApp 傳入 PDF，透過 OpenClaw 呼叫大腦分析好文章後，會做兩件事：

1. **自己去把分析內文存入討論串內**
2. **會在主頻道的 PDF 索引檔內自己建立 PDF 索引與討論串連結點**

## 這樣做的好處

我把 WhatsApp 有點當主工作區。當遇到特定狀況（舉例：丟個 PDF 檔案），他會協同 Discord 做分類。

PDF 資訊只傳入討論串，不會讓主頻道看起來很亂。主頻道只會有 PDF 索引而已。

> 我會不會太 OCD 了啊～～～版面一定要整齊 XD

我之後只要去看 PDF 索引就知道我丟了什麼檔案，一目瞭然。

## 為什麼不全放 WhatsApp？

當然也可以在 WhatsApp 裡面自己統計我丟了哪些 PDF 檔案。

但是根據 **Context Engineering**，這個 WhatsApp 主 agent 有一定的 context window 極限。他不是什麼都記得起來。

老實說，常忘記東西，非常正常 XD

除非每丟一個 PDF 檔案，都叫他記在 memory.md 裡面。但我不想把 memory.md 放這種資訊啊，**我只想放最重要的資訊**。

---

*原文發表於 [Facebook](https://www.facebook.com/agoodbear/posts/pfbid0je2uJribYXqBDs6r3VttSgp4FS8ovy7KrQ9D9G4ghSGGjyV9GkxCYTTkTucfsBzwl)*

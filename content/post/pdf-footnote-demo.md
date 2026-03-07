---
title: "PDF Footnote Demo"
date: "2026-03-04"
description: "Demo page for PDF footnote popup and guideline shelf."
draft: true
featured: false
toc: false
thumbnail: "/images/ipic/ecg-post-16-thumbnail.png"
typora-copy-images-to: "../../static/images/ipic"
codeMaxLines: 10
codeLineNumbers: false
figurePositionShow: false
categories:
  - ecg
tags:
  - pdf-footnote
  - guideline
---

{{< ecg-wave-text level="2" >}}測試 footnote popup：從文章句子直接回看 PDF 原文與高亮重點。{{< /ecg-wave-text >}}

在心衰竭病人身上看到 troponin 上升，不能直接把它等同於 ACS[^1]。如果文章一路寫到 ECG 判讀陷阱、diagnostic threshold、guideline caveat，都可以這樣接在句子後面。

你也可以把第二個 footnote 做成不同重點，例如提醒「慢性 HF、tachyarrhythmia、renal dysfunction 也可能造成 troponin 上升」[^2]。

[^1]: Gherasim et al. Troponins in Heart Failure. *Maedica*. 2019;14(4):371.
    {{< pdf-footnote trigger="看原文" doc="troponins-heart-failure" highlight="troponin-hf-1" >}}
    這個 popup 現在改成共用 reader，版型更接近 OMI learning site：左側是 PDF 原頁與高亮框；右側是 highlight 卡片與中文整理；虛線會把右側重點卡片回指到左側原文位置。
    {{< /pdf-footnote >}}

[^2]: 同篇文獻的另一段重點（non-ACS causes of troponin elevation）。
    {{< pdf-footnote trigger="看原文" doc="troponins-heart-failure" highlight="troponin-hf-2" accent="amber" >}}
    若你在寫 ECG 文章，這裡就可以換成「這種 ST-T 變化不要只看 STEMI criteria，還要回到整體 ischemic pattern」。
    {{< /pdf-footnote >}}

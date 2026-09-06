---
title: "每一家急診都在加薪，為什麼還是找不到人（下）：病人住不進去，錢也買不回人"
date: "2026-09-06"
description: "上集算出來的結論是：人沒有變少，病人也沒有變多。那為什麼現場愈來愈撐不住？答案在出口：該住院的病人卡在急診出不去。48 小時滯留率、8 小時轉入率、官方指標為什麼永遠看不到現場的痛苦，以及這一年半的加薪潮為什麼止不住血。"
featured: false
draft: true
toc: true
thumbnail: "/images/erlife-post-7.jpg"
categories:
  - erlife
tags:
  - 急診壅塞
  - 急診人力
  - 健保
  - 護病比
  - 醫師薪資
---

> 這是下集。[上集在這裡](/post/erlife-post-6/)。那一篇算出了三件跟直覺相反的事：**真正離開急診的急診專科醫師，沒有媒體說的那麼多**（72 人，不是 139 人）；**急診的病人量也沒有特別增多**，總人次到今天還沒回到疫情前，變的是裡面的組成；而且**不是大家一有小毛病就衝急診**：從整體檢傷五級來看，輕症的佔率不但沒上升，還略微下降。

## 上集講到哪裡

先把上集的帳結一下。

**人的那一邊**：訓練端沒有問題，每年穩定有一百個上下的新科急診專科醫師；但 2024 年起轉出急診科的人數翻倍（1.75% → 3.55%），而且 2025 年沒有回落。每進來 10 個新人，就有 7 個原本已經在急診執業的轉出去。到 2025 年，每 4.5 個有急診專科資格的醫師，就有 1 個已經不在急診執業，其中八成落在診所、醫美、健檢這類非醫院機構。

**病人的那一邊**：急診總人次其實沒有回到疫情前，2025 年還比 2019 年少 1.4%。多出來的病人全部是老人（65 歲以上五年 +15.7%）[^27]，而且純粹是人口結構推的，高齡各年齡層的就診率反而還在降。輕症佔率也在降，部分負擔漲了 300 元也沒把人趕走。

所以「病人變多」和「民眾濫用」這兩個最直覺的原因，資料都證明了並不正確。剩下的問題只有一個：

## 這些病人，最後住得進去嗎

<style>
.er-chart{margin:2em 0;overflow-x:auto}
.er-chart svg{max-width:100%;height:auto;display:block;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC",sans-serif}
.er-chart figcaption{font-size:.86em;line-height:1.6;opacity:.75;margin-top:.6em;text-align:left}
.er-g{stroke:currentColor;stroke-opacity:.14}
.er-ax{stroke:currentColor;stroke-opacity:.45}
.er-t{fill:currentColor;font-size:12px}
.er-t-sm{fill:currentColor;font-size:11px;opacity:.7}
.er-t-b{fill:currentColor;font-size:12.5px;font-weight:700}
.cap{font-size:.9em;line-height:1.6;opacity:.85;margin:1.8em 0 .5em;padding-left:.7em;border-left:3px solid currentColor}
.cap-t b{letter-spacing:.02em}
.er-chart .cap-f{letter-spacing:.02em;opacity:.95}
/* 連續的註腳上標之間補頓號，避免「3456」黏成一團 */
.footnote-ref + .footnote-ref::before{content:"、";font-weight:400}
sup:has(> .footnote-ref) + sup:has(> .footnote-ref)::before{content:"、"}
/* 註腳上標包方括號＋留一點間距：本文數字很密，「每床 1 人」後面直接接上標 12 會被讀成數字的一部分 */
.footnote-ref::before{content:"["}
.footnote-ref::after{content:"]"}
sup:has(> .footnote-ref){margin-left:.12em}
</style>

這其實是急診壅塞最核心的一個問題。急診本質上是中繼站，它的設計前提是「處理完就把病人送走」，回家或上病房。一旦送不走，病人就會累積。而急診醫師真正在承受的那個數字，是「此刻有幾個人躺在這裡」。今天一整天來了幾個人，反而沒那麼要緊。

家屬問我最多的一句話是：「什麼時候可以上去？還要多久才有病房？」我每次都很想直接告訴他們：**在這間醫院裡，最希望你趕快上去的人就是急診醫師。** 不是不耐煩。是因為你留在這裡的每一分鐘，我都得一邊看著你，一邊看著門口還會再走進來的下一個人。可是那張床不在我手上。決定床什麼時候開出來的，從來就不在急診。

健保署剛好有一個指標就在量這件事，叫做「**急診轉住院暫留急診超過四十八小時案件比率**」[^1]。它的分母是「急診轉住院之案件數」，分子是這些人裡面在急診待超過 48 小時的。換句話說，就是「已經確定要住院、卻還卡在急診」的比例。

<figure class="er-chart">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="cA-t">
  <title id="cA-t">這個指標是一個分數：分子是卡超過 48 小時的人，分母是確定要住院的人</title>
  <defs><marker id="erAr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0,0 L10,5 L0,10 z" fill="currentColor" fill-opacity=".55"/></marker></defs>
  <text class="er-t" x="360" y="26" text-anchor="middle" font-size="14">急診轉住院暫留急診超過四十八小時案件比率</text>
  <rect x="12" y="98" width="176" height="94" rx="6" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-opacity=".3" stroke-width="1.5"/>
  <text class="er-t-b" x="100" y="130" text-anchor="middle" font-size="15">所有來急診的人</text>
  <text class="er-t-sm" x="100" y="154" text-anchor="middle" font-size="12.5">看完就回家的那一大群，</text>
  <text class="er-t-sm" x="100" y="173" text-anchor="middle" font-size="12.5">在這一步就先被排除了</text>
  <g stroke="currentColor" stroke-opacity=".5" stroke-width="2" marker-end="url(#erAr2)">
    <line x1="190" y1="145" x2="234" y2="145"/>
  </g>
  <rect x="252" y="58" width="340" height="70" rx="6" fill="#dc2626" fill-opacity=".14" stroke="#dc2626" stroke-width="1.8"/>
  <text class="er-t-b" x="422" y="88" text-anchor="middle" fill="#dc2626" font-size="16">其中卡超過 48 小時的人</text>
  <text class="er-t-sm" x="422" y="112" text-anchor="middle" font-size="12.5">床已經決定了，人還躺在急診</text>
  <text class="er-t-sm" x="608" y="88" fill="#dc2626" font-size="12.5">分子</text>
  <line x1="244" y1="145" x2="600" y2="145" stroke="currentColor" stroke-opacity=".75" stroke-width="3"/>
  <rect x="252" y="162" width="340" height="70" rx="6" fill="#0f766e" fill-opacity=".13" stroke="#0f766e" stroke-width="1.8"/>
  <text class="er-t-b" x="422" y="192" text-anchor="middle" fill="#0f766e" font-size="16">確定要住院的人</text>
  <text class="er-t-sm" x="422" y="216" text-anchor="middle" font-size="12.5">健保寫的是「急診轉住院之案件數」</text>
  <text class="er-t-sm" x="608" y="200" fill="#0f766e" font-size="12.5">分母</text>
  <text class="er-t" x="654" y="151" font-size="20">＝</text>
  <text class="er-t" x="360" y="272" text-anchor="middle" font-size="14">所以它量的是：<tspan font-weight="700">已經該上樓的人，有多少還沒上去</tspan></text>
</svg>
<figcaption><b class="cap-f">Figure 8</b>｜這個指標特別狠的地方在分母。它不拿全部急診人次當底，而是先把「看完就回家」的病人整批剔掉，只留下已經確定要住院的那一群當分母；分子則是這群人裡面，在急診躺超過兩天的。所以比率每上升一點，代表的都是「該上樓卻上不去」的人變多。<br>資料來源：衛生福利部中央健康保險署《全民健康保險醫療品質資訊公開網》指標 1652 定義。</figcaption>
</figure>

**全國數字：2024 年 5.3%，2025 年 5.88%。** 一年之間相對惡化了將近 11%[^2]。

而醫學中心是另一個量級。台大 2024 年是 22.18%、2025 年 23.83%，2025 年第 3 季更達 **25.94%**。每 4 個確定要住院的急診病人，就有超過 1 個在急診待滿兩天以上，是全國平均的四倍。這也不是新問題：2014 到 2020 連續七年超過 24%，2015 年一度到 27.49%[^2]。

<figure class="er-chart">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="cB-t">
  <title id="cB-t">48 小時滯留率：全國 5.3% 升到 5.88%，台大從 22.18% 升到 25.94%，是全國平均的四倍以上</title>
  <line class="er-g" x1="130" y1="240" x2="670" y2="240"/>
  <line class="er-g" x1="130" y1="173.3" x2="670" y2="173.3"/>
  <line class="er-g" x1="130" y1="106.7" x2="670" y2="106.7"/>
  <line class="er-g" x1="130" y1="40" x2="670" y2="40"/>
  <line class="er-ax" x1="130" y1="40" x2="130" y2="240"/>
  <text class="er-t-sm" x="122" y="244" text-anchor="end">0%</text>
  <text class="er-t-sm" x="122" y="177" text-anchor="end">10%</text>
  <text class="er-t-sm" x="122" y="110" text-anchor="end">20%</text>
  <text class="er-t-sm" x="122" y="44" text-anchor="end">30%</text>
  <rect x="130" y="56.7" width="540" height="23.3" fill="#dc2626" fill-opacity=".07"/>
  <text class="er-t-sm" x="138" y="51" fill="#dc2626">淺紅帶＝24% 以上，台大 2014–2020 連續七年都在這裡面</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.6" points="200,92.1 400,81.1 600,67.1"/>
  <circle cx="200" cy="92.1" r="4.5" fill="#dc2626"/><circle cx="400" cy="81.1" r="4.5" fill="#dc2626"/><circle cx="600" cy="67.1" r="5.5" fill="#dc2626"/>
  <text class="er-t-b" x="200" y="83" text-anchor="middle" fill="#dc2626">22.18%</text>
  <text class="er-t-b" x="400" y="72" text-anchor="middle" fill="#dc2626">23.83%</text>
  <text class="er-t-b" x="600" y="58" text-anchor="middle" fill="#dc2626">25.94%</text>
  <text class="er-t-b" x="146" y="96" fill="#dc2626">台大醫院</text>
  <polyline fill="none" stroke="#0f766e" stroke-width="2.6" points="200,204.7 400,200.8"/>
  <circle cx="200" cy="204.7" r="4.5" fill="#0f766e"/><circle cx="400" cy="200.8" r="4.5" fill="#0f766e"/>
  <text class="er-t-b" x="200" y="224" text-anchor="middle" fill="#0f766e">5.3%</text>
  <text class="er-t-b" x="400" y="220" text-anchor="middle" fill="#0f766e">5.88%</text>
  <text class="er-t-b" x="470" y="205" fill="#0f766e">全國平均</text>
  <text class="er-t-sm" x="200" y="262" text-anchor="middle">2024 年</text>
  <text class="er-t-sm" x="400" y="262" text-anchor="middle">2025 年</text>
  <text class="er-t-sm" x="600" y="262" text-anchor="middle">2025 年第 3 季</text>
  <text class="er-t-sm" x="360" y="290" text-anchor="middle">同一個指標，兩個量級：全國每 17 個確定要住院的病人有 1 個卡滿兩天，台大是每 4 個就有 1 個</text>
</svg>
<figcaption><b class="cap-f">Figure 9</b>｜「急診轉住院暫留急診超過 48 小時」的比率。全國從 5.3% 升到 5.88%，一年之間相對惡化將近 11%；台大則是另一個世界，2025 年第 3 季達 25.94%，是全國平均的四倍以上，而且 2014 到 2020 年就已經連續七年超過 24%。<br>資料來源：健保署醫療品質資訊公開網指標 1652；轉引自 ETtoday 健康雲 2026/8/26 報導。</figcaption>
</figure>

其他兩個指標的方向完全一致[^3]：

- **留置急診室超過 24 小時的比率**（分母是全部急診件數）：2023 年 3.32% → 2024 年 3.68% → 2025 年第 1 季 3.75%。疫情前這個數字大約在 2.32%–2.75% 之間[^23]，等於整整多了一個百分點
- **檢傷一、二、三級病人 8 小時內轉入病房的比率**（分母是這三級裡最後真的住院的案件）：2022 年 61.90% → 2023 年 60.60% → 2024 年 59.50% → 2025 年第 1 季 **56.29%**，四年連跌

<figure class="er-chart">
<svg viewBox="0 0 720 320" role="img" aria-labelledby="cC-t">
  <title id="cC-t">留置急診超過 24 小時的比率一路上升，檢傷一到三級 8 小時內轉入病房的比率四年連跌</title>
  <text class="er-t-b" x="60" y="26">留置急診超過 24 小時的比率</text>
  <text class="er-t-sm" x="60" y="44">分母是全部急診件數，愈高愈糟</text>
  <line class="er-g" x1="60" y1="240" x2="330" y2="240"/>
  <line class="er-g" x1="60" y1="195" x2="330" y2="195"/>
  <line class="er-g" x1="60" y1="150" x2="330" y2="150"/>
  <line class="er-g" x1="60" y1="105" x2="330" y2="105"/>
  <line class="er-g" x1="60" y1="60" x2="330" y2="60"/>
  <line class="er-ax" x1="60" y1="60" x2="60" y2="240"/>
  <text class="er-t-sm" x="54" y="244" text-anchor="end">0</text>
  <text class="er-t-sm" x="54" y="199" text-anchor="end">1%</text>
  <text class="er-t-sm" x="54" y="154" text-anchor="end">2%</text>
  <text class="er-t-sm" x="54" y="109" text-anchor="end">3%</text>
  <text class="er-t-sm" x="54" y="64" text-anchor="end">4%</text>
  <rect x="60" y="116.3" width="270" height="19.3" fill="currentColor" fill-opacity=".1"/>
  <text class="er-t-sm" x="196" y="131" text-anchor="middle">疫情前 2.32%–2.75%</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.6" points="120,90.6 220,74.4 300,71.3"/>
  <circle cx="120" cy="90.6" r="4.5" fill="#dc2626"/><circle cx="220" cy="74.4" r="4.5" fill="#dc2626"/><circle cx="300" cy="71.3" r="5" fill="#dc2626"/>
  <text class="er-t-b" x="120" y="82" text-anchor="middle" fill="#dc2626">3.32</text>
  <text class="er-t-b" x="220" y="66" text-anchor="middle" fill="#dc2626">3.68</text>
  <text class="er-t-b" x="302" y="62" text-anchor="middle" fill="#dc2626">3.75</text>
  <text class="er-t-sm" x="120" y="262" text-anchor="middle">2023</text>
  <text class="er-t-sm" x="220" y="262" text-anchor="middle">2024</text>
  <text class="er-t-sm" x="300" y="262" text-anchor="middle">25 Q1</text>
  <text class="er-t-sm" x="196" y="292" text-anchor="middle" fill="#dc2626">比疫情前整整多了一個百分點</text>
  <text class="er-t-b" x="410" y="26">一到三級住院者 8 小時內轉入病房</text>
  <text class="er-t-sm" x="410" y="44">愈低愈糟，縱軸自 50% 起</text>
  <line class="er-g" x1="410" y1="240" x2="680" y2="240"/>
  <line class="er-g" x1="410" y1="180" x2="680" y2="180"/>
  <line class="er-g" x1="410" y1="120" x2="680" y2="120"/>
  <line class="er-g" x1="410" y1="60" x2="680" y2="60"/>
  <line class="er-ax" x1="410" y1="60" x2="410" y2="240"/>
  <text class="er-t-sm" x="404" y="244" text-anchor="end">50%</text>
  <text class="er-t-sm" x="404" y="184" text-anchor="end">55%</text>
  <text class="er-t-sm" x="404" y="124" text-anchor="end">60%</text>
  <text class="er-t-sm" x="404" y="64" text-anchor="end">65%</text>
  <polyline fill="none" stroke="#d97706" stroke-width="2.6" points="450,97.2 530,112.8 610,126 665,164.5"/>
  <circle cx="450" cy="97.2" r="4.5" fill="#d97706"/><circle cx="530" cy="112.8" r="4.5" fill="#d97706"/>
  <circle cx="610" cy="126" r="4.5" fill="#d97706"/><circle cx="665" cy="164.5" r="5" fill="#d97706"/>
  <text class="er-t-b" x="450" y="88" text-anchor="middle" fill="#d97706">61.90</text>
  <text class="er-t-b" x="528" y="104" text-anchor="middle" fill="#d97706">60.60</text>
  <text class="er-t-b" x="608" y="117" text-anchor="middle" fill="#d97706">59.50</text>
  <text class="er-t-b" x="663" y="184" text-anchor="middle" fill="#d97706">56.29</text>
  <text class="er-t-sm" x="450" y="262" text-anchor="middle">2022</text>
  <text class="er-t-sm" x="530" y="262" text-anchor="middle">2023</text>
  <text class="er-t-sm" x="610" y="262" text-anchor="middle">2024</text>
  <text class="er-t-sm" x="665" y="262" text-anchor="middle">25 Q1</text>
  <text class="er-t-sm" x="545" y="292" text-anchor="middle" fill="#d97706">四年連跌，而且最後一年跌最兇</text>
</svg>
<figcaption><b class="cap-f">Figure 10</b>｜兩個指標指向同一件事。左邊是「有多少急診病人被留超過一天」：疫情前大約 2.32% 到 2.75%（此區間出自韓幸紋 2025 引衛福部總額協商參考指標要覽，與審計部口徑可能不同），2025 年第 1 季已經到 3.75%。右邊是「最後住院的一到三級病人裡，有多少在 8 小時內真的上得去」：四年從 61.90% 一路掉到 56.29%。一個往上、一個往下，中間夾的是同一群走不掉的病人。<br>資料來源：審計部《近年我國實施分級醫療、醫護留任與減緩急診壅塞成效之初探》（114 年度，引健保署 DA 系統）。</figcaption>
</figure>

最刺眼的是檢傷一級，最危急、最該立刻上病房的那群人。在最後住進病房的第一級病人裡，8 小時內轉得進去的比率是 2023 年 62.58%、2024 年 61.25%，到 2025 年第 1 季剩下 **54.89%**；**醫學中心單獨看只剩 39.33%**[^3]。也就是說，在醫學中心，每十個最終要住院的第一級病人，就有六個在 8 小時後還躺在急診。健保會的會議紀錄也記了一筆：2024 年上半年醫學中心與區域醫院的**急診重症暫留時間，比 2023 年下半年多出將近 1 小時**[^4]。

<figure class="er-chart">
<svg viewBox="0 0 720 340" role="img" aria-labelledby="cT-t">
  <title id="cT-t">檢傷一級 8 小時內轉入病房的比率逐年下降，2023 年 62.58%、2024 年 61.25%、2025 年第 1 季 54.89%，醫學中心只剩 39.33%</title>
  <text class="er-t-b" x="14" y="24" font-size="16">檢傷一級住院者：8 小時內轉得進病房的比率</text>
  <text class="er-t-sm" x="14" y="46" font-size="13.5">這一級是最危急的一群。這個數字愈高愈好，因為愈快上病房愈好。而它在跌。</text>
  <text class="er-t-sm" x="118" y="80" text-anchor="end" font-size="13.5">2023 年</text>
  <rect x="130" y="62" width="480" height="30" rx="3" fill="currentColor" fill-opacity=".07"/>
  <rect x="130" y="62" width="300.4" height="30" rx="3" fill="#d97706" fill-opacity=".85"/>
  <text class="er-t-b" x="622" y="83" font-size="17" fill="#d97706">62.58%</text>
  <text class="er-t-sm" x="118" y="124" text-anchor="end" font-size="13.5">2024 年</text>
  <rect x="130" y="106" width="480" height="30" rx="3" fill="currentColor" fill-opacity=".07"/>
  <rect x="130" y="106" width="294.0" height="30" rx="3" fill="#d97706" fill-opacity=".85"/>
  <text class="er-t-b" x="622" y="127" font-size="17" fill="#d97706">61.25%</text>
  <text class="er-t-sm" x="118" y="168" text-anchor="end" font-size="13.5">2025 Q1</text>
  <rect x="130" y="150" width="480" height="30" rx="3" fill="currentColor" fill-opacity=".07"/>
  <rect x="130" y="150" width="263.5" height="30" rx="3" fill="#d97706" fill-opacity=".85"/>
  <text class="er-t-b" x="622" y="171" font-size="17" fill="#d97706">54.89%</text>
  <line class="er-g" x1="14" y1="200" x2="706" y2="200"/>
  <text class="er-t-sm" x="118" y="228" text-anchor="end" font-size="13.5">醫學中心</text>
  <text class="er-t-sm" x="118" y="246" text-anchor="end" font-size="12.5">2025 Q1</text>
  <rect x="130" y="212" width="480" height="40" rx="3" fill="#dc2626" fill-opacity=".16" stroke="#dc2626" stroke-width="1.6"/>
  <rect x="130" y="212" width="188.8" height="40" rx="3" fill="#dc2626"/>
  <text x="224" y="238" text-anchor="middle" font-size="13.5" font-weight="700" fill="#fff">上得去</text>
  <text x="464" y="238" text-anchor="middle" font-size="13.5" font-weight="700" fill="#dc2626">6 成的人 8 小時後還躺在急診</text>
  <text class="er-t-b" x="622" y="240" font-size="22" fill="#dc2626">39.33%</text>
  <polyline points="430.4,77 424,121 393.5,165 318.8,204" fill="none" stroke="#dc2626" stroke-width="2.6" stroke-dasharray="7 5"/>
  <path d="M310,196 L318.8,214 L327.6,196 z" fill="#dc2626"/>
  <text class="er-t" x="14" y="292" font-size="14">最危急、最該立刻上病房的那一級，反而是四個數字裡掉最兇的一組。</text>
  <text class="er-t-sm" x="14" y="318" font-size="13">在醫學中心，每 10 個最終要住院的第一級病人，有 6 個在 8 小時之後還躺在急診。</text>
</svg>
<figcaption><b class="cap-f">Figure 11</b>｜檢傷一級是最危急的一群，能不能在 8 小時內送上病房，本來就是急救鏈的一部分，所以這個指標<strong>愈高愈好</strong>。分母是「檢傷一級而且最後轉入病房的案件」，不是所有第一級病人。結果它在跌：2023 年 62.58%、2024 年 61.25%、2025 年第 1 季 54.89%，醫學中心單獨看只剩 39.33%。愈危急、愈該立刻上樓的病人，反而愈上不去。<br>資料來源：審計部《近年我國實施分級醫療、醫護留任與減緩急診壅塞成效之初探》（114 年度，引健保署 DA 系統）。</figcaption>
</figure>

這就是整件事最後扣起來的地方。把四個問題並排：

<figure class="er-chart">
<svg viewBox="0 0 720 372" role="img" aria-labelledby="cF-t">
  <title id="cF-t">四個問題並排：病人沒有變多、民眾沒有濫用，變忙是因為病人變老變重，難撐是因為他們住不進去</title>
  <g>
    <rect x="10" y="10" width="700" height="80" rx="6" fill="currentColor" fill-opacity=".04" stroke="currentColor" stroke-opacity=".18"/>
    <circle cx="48" cy="50" r="16" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="2.2"/>
    <path d="M41,43 L55,57 M55,43 L41,57" stroke="currentColor" stroke-opacity=".55" stroke-width="2.6"/>
    <text class="er-t" x="84" y="42" font-size="15.5">病人有變多嗎？</text>
    <text class="er-t-b" x="220" y="42" fill="#64748b" font-size="16">沒有。</text>
    <text class="er-t-sm" x="84" y="72" font-size="13.5">急診總人次持平，2025 年還比 2019 年少一點</text>
  </g>
  <g>
    <rect x="10" y="98" width="700" height="80" rx="6" fill="currentColor" fill-opacity=".04" stroke="currentColor" stroke-opacity=".18"/>
    <circle cx="48" cy="138" r="16" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="2.2"/>
    <path d="M41,131 L55,145 M55,131 L41,145" stroke="currentColor" stroke-opacity=".55" stroke-width="2.6"/>
    <text class="er-t" x="84" y="130" font-size="15.5">是民眾濫用嗎？</text>
    <text class="er-t-b" x="220" y="130" fill="#64748b" font-size="16">不是。</text>
    <text class="er-t-sm" x="84" y="160" font-size="13.5">輕症佔率在降、高齡各層就診率在降，部分負擔漲了 300 元也沒把人趕走</text>
  </g>
  <g>
    <rect x="10" y="186" width="700" height="80" rx="6" fill="#d97706" fill-opacity=".11" stroke="#d97706" stroke-width="1.6"/>
    <circle cx="48" cy="226" r="16" fill="#d97706" fill-opacity=".92"/>
    <text x="48" y="233" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">!</text>
    <text class="er-t" x="84" y="218" font-size="15.5">那為什麼變忙？</text>
    <text class="er-t-b" x="220" y="218" fill="#d97706" font-size="16">因為病人變老、變重。</text>
    <text class="er-t-sm" x="84" y="248" font-size="13.5">65 歲以上人次五年增加 15.7%，而且純粹是人口推的</text>
  </g>
  <g>
    <rect x="10" y="274" width="700" height="80" rx="6" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="2"/>
    <circle cx="48" cy="314" r="16" fill="#dc2626"/>
    <text x="48" y="321" text-anchor="middle" font-size="19" font-weight="700" fill="#fff">!</text>
    <text class="er-t" x="84" y="306" font-size="15.5">為什麼特別難撐？</text>
    <text class="er-t-b" x="236" y="306" fill="#dc2626" font-size="16">因為他們住不進去。</text>
    <text class="er-t-sm" x="84" y="336" font-size="13.5">該住院的卡在急診，48 小時滯留率上升、8 小時轉入率下滑</text>
  </g>
</svg>
<figcaption><b class="cap-f">Figure 12</b>｜四個問題排在一起，故事就完整了。前兩個是大家最常拿來解釋急診壅塞的原因，資料都不支持；真正把負荷推上去的是後兩個：病人變老變重，而且住不進去。前兩格是「不成立的解釋」，後兩格才是「成立的機制」。<br>資料來源：本文前述各節，資料出處見各段註腳。</figcaption>
</figure>

換句話說，把急診醫師壓垮的，是「同一時間積在急診室裡的病人數」這個數字。一年總共來了幾個人，是另一回事。而急診的服務量統計和人力評定公式，認的都是流量：來診人次、就診率、部分負擔。滯留指標不是不存在，前面那幾個都是。**問題是沒有任何一條進得了人力公式**。這就是為什麼現場明明在崩壞，翻開報表卻好像沒事，甚至還能寫成初具改善成效。

我自己在班表上感覺到的那一個人力，就是被這個存量吃掉的。多排的那個主治醫師，一整班都在照顧昨天、前天就該上樓、現在還躺在走廊上的那些人。而把三個數字疊起來看，會看到壓力是怎麼被一層一層放大的。同樣從 2019 年算到現在：**65 歲以上的急診人次增加 15.7%；全國急診病人停留超過 24 小時的比率，從疫情前的 2.32%–2.75%[^23] 升到 3.75%，大約增加三成六到六成；而在我自己的班上，交班時手上待床或還沒有去向的病人，從 5 到 7 個變成 10 到 15 個，翻了一倍。**

寫到這裡，我做了一個自己也沒預料到結果的計算。

我拿急診醫學會每年公布的各健保分區急診專科醫師人數當分母，用衛福部縣市統計表的分區醫院急診人次當分子，算出「**每位急診專科醫師的年負擔急診人次**」，也就是帳面上，一個急診醫師一年要處理多少人[^24][^5][^6][^7]。

<div class="cap cap-t"><b>Table 8</b>｜每位急診專科醫師的年負擔急診人次（本文自行計算，非官方指標）</div>

| 分區 | 2023 | 2024 | 2025 | 變化 |
| --- | --- | --- | --- | --- |
| 臺北區 | 4,111 | 3,870 | 3,742 | −9.0% |
| 北區 | 6,020 | 5,793 | 5,614 | −6.7% |
| 中區 | 4,432 | 4,207 | 4,269 | −3.7% |
| 南區 | 4,191 | 3,981 | 3,882 | −7.4% |
| 高屏區 | 5,514 | 5,277 | 5,093 | −7.6% |
| 東區 | 4,672 | 4,183 | 4,128 | −11.6% |
| **全國** | **4,660** | **4,421** | **4,329** | **−7.1%** |

**每位急診醫師的帳面負擔，這三年下降了 7%。六個分區，沒有一個例外。**

如果你是主管機關，看到這張表，你會得出什麼結論？急診人力正在改善。人次微降、醫師增加、每人負擔連續下降，甚至可以寫成一份初具成效的報告。

可是我站的那個班，人多了一個，大家卻更累。

錯覺沒有，這張表也沒算錯。問題出在**這個公式本身量不到真正的負荷**。它的分子是「一年來了幾個人」，可是壓垮急診的不是這個。它量不到的東西至少有三樣：

- **病人是誰。** 65 歲以上的人次五年增加 15.7%，而一個高齡多重共病的病人，以我的經驗，處理時間是年輕健康病人的 3 到 5 倍。同樣記成「一人次」，在公式裡等重，在現場差好幾倍
- **病人走不走得掉。** 白班接手的那一刻，手上就有十幾個已經決定住院、卻還沒有床的人。他們在去年的統計裡已經被算過一次了，今年還躺在這裡，但公式不會再算他們一次
- **誰在旁邊幫你。** 分母只算急診專科醫師，不含住院醫師。而急診住院醫師的招收率，疫情前年年滿招，2021 年首度招不滿（92%），之後掉到 65%、67%，2024 年才回到 80%[^9]。像我們醫院，住院醫師的容額就這樣擺著，三、四年沒招到人。主治醫師這三、四年只走了一位，人數其實差不多；但少掉的那幾個住院醫師，讓整體醫師人力是淨減的。**這個減少，完全不會出現在那張表上**

而最讓人不安的是：**政府評定急診人力，用的就是這一類公式。** 而且是白紙黑字寫在法規裡的。衛福部每年公告的《醫院緊急醫療能力分級評定基準》，重度級醫院要配幾個急診專任醫師，是這樣算的：底線 5 名，前三年年平均急診人次超過 20,000 之後，每多 5,000 人次加 1 名，再加上「每月平均留觀人次除以 600」的那一份；中度級更乾脆，年平均急診人次除以 5,000[^17]。

當時的急診醫學會理事長許建清講得很直接：目前緊急醫療人力評定的計算方式，是根據病人量、觀察床床數去估算急診人力，卻沒有考慮急診室時間壓力極大、待床人數很容易超過觀察床床數等特性，「導致人力被嚴重低估」[^9]。

公式裡的兩個變數，一個是「一年來了幾個人」，一個是「留觀床用掉多少人日」，兩個都是流量。一個在急診躺了三天的病人，在人次那一項裡仍然只算一次。留觀那一項倒是抓得到他：健保申報急診觀察床只看「留觀或待床、入住滿六小時」，沒有要求病人躺在登記在案的床位上[^18]。

真正被漏掉的是走廊本身。

同一份基準也規定了急診護理人力怎麼算，而且是兩項相加。第一項算流量：每天平均每 12 個急診人次要有 1 名護理人員。第二項算存量：「設有急診觀察床者，每床應增加 1 名」[^17]。新來的病人和躺著走不掉的病人，帳面上各有各的一份人力。

這個「1 名」，指的是全日三班加起來的員額，不代表每張床旁邊隨時站著一個護理師。同樣寫法的係數，《醫療機構設置標準》裡有一整套：加護病房每床 1.5 人，急性一般病床每三到四床 1 人，急診觀察室每床 1 人[^19]。所以一張觀察床就是一個員額。而員額要分攤到白班、小夜、大夜三班，同一時間在班的只有三分之一，換算下來，帳面上一位護理師顧三張床。

拿我們急診的規模算一次：每天平均一百六十人次上下，二十四張登記在案的觀察床[^20]。流量那一項是 160 除以 12，大約 13 個人；存量那一項是 24 張床乘以 1，24 個人。兩項相加，37 個。

這 37 個講的是編制，也就是這個急診在人事名冊上應該有的護理師總數。它不是一天要用掉的人數，也不是一個班要站的人數。分到三班，帳面上每班 12 個。

問題出在那個「床」怎麼認定。基準寫得很死：以每月一日向衛生局登記的床數為準[^17]。

我們醫院真正登記的留觀床位，是 A 區、B 區、診間、急救室。這幾個地方加起來，就是每個月報到衛生局的那個數字，也是唯一會被算進公式裡的床。

但真正的急診不是這樣運作的。人塞不下的時候，我們會自己長出一批位置來，而且每一個都有名字：

一診前、一診後，二診前、二診後，三診前、三診後，五診前、五診後，走道前，大姐電腦前，轉診電腦前，119 走道，檢傷旁一、檢傷旁二、檢傷旁三。

我把它們一個一個唸出來，是因為這串名字本身就說明了一切。這些位置沒有一個是規劃出來的，它們的共同邏輯只有一條：那裡剛好有空間，就讓病人躺那裡。躺在檢傷旁邊的那個人，一樣要抽血、打針、盯生命徵象，一樣會在半夜按鈴；但他躺的地方不在登記表上，所以在那條算人力的公式裡，他佔的床是零。

這種床我們自己有個說法：幽靈床。它就在那裡，上面躺著人，但翻遍任何一張表格都找不到它。

多出來的病人是真的，多出來的床不算數。

而且顧他們的，就是同一批人。那 12 個人當班的時候，手上不會只有 24 張登記的床，還有那一整排幽靈床，再加上那一班新走進來的五十幾個病人。走廊上躺的人沒有替誰生出半個人力，卻全在同一班護理師的責任範圍裡。帳面上一個人顧三張床，實際顧幾個，得看那天走廊上躺了幾個。

<figure class="er-chart">
<svg viewBox="0 0 720 470" role="img" aria-labelledby="cG-t">
  <title id="cG-t">法規看到的是 24 張登記床配 12 個護理師；現場實際躺著 39 個人，護理師還是 12 個</title>
  <defs><marker id="erAr3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0,0 L10,5 L0,10 z" fill="#d97706" fill-opacity=".75"/></marker></defs>
  <path d="M40,40 Q360,14 680,26" fill="none" stroke="#d97706" stroke-width="2.6" marker-end="url(#erAr3)"/>
  <text class="er-t" x="360" y="56" text-anchor="middle" font-size="13.5" fill="#d97706">人口老化，需要躺床的病人一年比一年多（65 歲以上急診人次五年 +15.7%）</text>
  <line class="er-g" x1="360" y1="76" x2="360" y2="446" stroke-dasharray="5 4"/>
  <text class="er-t-b" x="24" y="98" font-size="16">法規看到的</text>
  <text class="er-t-sm" x="24" y="118" font-size="12.5">每月一日向衛生局登記的床</text>
  <text class="er-t-b" x="384" y="98" font-size="16" fill="#dc2626">現場實際的</text>
  <text class="er-t-sm" x="384" y="118" font-size="12.5">那一刻真的有人躺著的位置</text>
  <text class="er-t-sm" x="24" y="146" font-size="12.5">登記觀察床 24 張</text>
  <rect x="24" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="60" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="96" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="132" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="168" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="204" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="240" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="276" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="24" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="60" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="96" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="132" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="168" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="204" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="240" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="276" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="24" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="60" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="96" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="132" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="168" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="204" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="240" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="276" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <text class="er-t-sm" x="384" y="146" font-size="12.5">登記的 24 張，加上自己長出來的 15 張幽靈床</text>
  <rect x="384" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="420" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="456" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="492" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="528" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="564" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="600" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="636" y="156" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="384" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="420" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="456" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="492" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="528" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="564" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="600" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="636" y="178" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="384" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="420" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="456" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="492" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="528" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="564" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="600" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="636" y="200" width="30" height="16" rx="2.5" fill="#0f766e" fill-opacity=".85" stroke="#0f766e" stroke-width="1.3"/>
  <rect x="384" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="420" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="456" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="492" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="528" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="564" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="600" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="636" y="222" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="384" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="420" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="456" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="492" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="528" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="564" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <rect x="600" y="244" width="30" height="16" rx="2.5" fill="#dc2626" fill-opacity=".13" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3 2"/>
  <text class="er-t-sm" x="384" y="292" font-size="12" fill="#dc2626">紅色虛線＝一診前、二診前、三診前、五診前後、走道前、</text>
  <text class="er-t-sm" x="384" y="308" font-size="12" fill="#dc2626">大姐電腦前、轉診電腦前、119 走道、檢傷旁⋯⋯登記表上沒有</text>
  <text class="er-t-sm" x="24" y="342" font-size="12.5">應配護理人力（同一時間在班，帳面）</text>
  <g fill="#0f766e"><circle cx="30" cy="360" r="4.6"/><path d="M24,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="56" cy="360" r="4.6"/><path d="M50,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="82" cy="360" r="4.6"/><path d="M76,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="108" cy="360" r="4.6"/><path d="M102,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="134" cy="360" r="4.6"/><path d="M128,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="160" cy="360" r="4.6"/><path d="M154,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="186" cy="360" r="4.6"/><path d="M180,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="212" cy="360" r="4.6"/><path d="M206,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="238" cy="360" r="4.6"/><path d="M232,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="264" cy="360" r="4.6"/><path d="M258,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="290" cy="360" r="4.6"/><path d="M284,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="316" cy="360" r="4.6"/><path d="M310,375 q6,-9 12,0 v9 h-12 z"/></g>
  <text class="er-t-b" x="24" y="404" font-size="15" fill="#0f766e">12 人 · 24 張床</text>
  <text class="er-t-sm" x="384" y="342" font-size="12.5">應配護理人力（同一時間在班，帳面）</text>
  <g fill="#0f766e"><circle cx="390" cy="360" r="4.6"/><path d="M384,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="416" cy="360" r="4.6"/><path d="M410,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="442" cy="360" r="4.6"/><path d="M436,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="468" cy="360" r="4.6"/><path d="M462,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="494" cy="360" r="4.6"/><path d="M488,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="520" cy="360" r="4.6"/><path d="M514,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="546" cy="360" r="4.6"/><path d="M540,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="572" cy="360" r="4.6"/><path d="M566,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="598" cy="360" r="4.6"/><path d="M592,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="624" cy="360" r="4.6"/><path d="M618,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="650" cy="360" r="4.6"/><path d="M644,375 q6,-9 12,0 v9 h-12 z"/></g>
  <g fill="#0f766e"><circle cx="676" cy="360" r="4.6"/><path d="M670,375 q6,-9 12,0 v9 h-12 z"/></g>
  <text class="er-t-b" x="384" y="404" font-size="15" fill="#dc2626">還是 12 人 · 39 個人</text>
  <text class="er-t-sm" x="360" y="432" text-anchor="middle" font-size="12.5">兩邊那 12 個人，都還要同時接下那一班新走進來的五十幾個病人</text>
  <text class="er-t" x="360" y="458" text-anchor="middle" font-size="14"><tspan font-weight="700">床變多了，人沒有。</tspan>因為公式只認登記表上的那 24 張。</text>
</svg>
<figcaption><b class="cap-f">Figure 13</b>｜同一個急診，兩種算法。左邊是法規眼中的樣子：24 張登記在案的觀察床，依「每床 1 名」配出 24 個護理員額，加上人次那一項的 13 個，分三班後帳面每班 12 人；這 12 人要同時負責那 24 張床和當班新來的病人。右邊是滿床那一刻真正的樣子：24 張登記床照舊，另外多出十幾張自己長出來的幽靈床，紅色虛線框起來的都是它們。這些位置報不上去，也就不存在於任何人力公式裡。護理人力兩邊一模一樣。<br>床數與人力係數依《醫院緊急醫療能力分級評定基準》115 年度及《醫療機構設置標準》附表（一）計算；床位名稱與現場配置為作者服務院所之第一手經驗。</figcaption>
</figure>

而且那個登記數字非常黏。急診觀察床在《醫療機構設置標準》裡屬於「特殊病床」，要開幾床得向衛生局登記，想增床就走變更登記，還得同時把護理人力補上[^19]。所以它幾乎不會動。我去翻了衛福部的醫院病床統計，宜蘭市登記的急診觀察床，2021 年到 2025 年連續五年都是 24 床，一床沒改[^20]。同一段時間，全國留置急診超過 24 小時的比率，從疫情前的 2.32%–2.75% 升到 3.75%[^23]。

床沒有變多，走廊上的人變多了。中間那個差額，就是上面那一串名字。

那這件事多常發生？有一個數字可以回答。

急救責任醫院依法要每三十分鐘上傳四項急診即時資訊，第一項就是「向一一九通報滿床」[^21]。這是公開的，健保署放在「重度級急救責任醫院急診即時訊息」上，任何人都查得到。

先講清楚一件事，免得誤會：通報滿床不等於關門。自己走進來的病人照收，救護車該送的還是會送過來。它是一個給勤務中心的訊號，讓下一台救護車在還有選擇的時候，優先考慮別家。門沒有關，只是裡面已經沒有位置了。我從 2026 年 6 月中開始，逐時把我們醫院的通報狀態記下來，到 9 月初累積了 1,659 筆紀錄[^22]。

<figure class="er-chart">
<svg viewBox="0 0 720 400" role="img" aria-labelledby="cH-t">
  <title id="cH-t">我們醫院向一一九通報滿床的時間佔比，從 2026 年 6 月的 38.7% 一路升到 9 月的 77.1%</title>
  <text class="er-t-b" x="20" y="26" font-size="16">向一一九通報滿床的時間佔比</text>
  <text class="er-t-sm" x="20" y="46" font-size="13">每小時抓一次，共 1,659 筆。數字愈高，代表一個月裡有愈多時間，這間急診處在通報滿床的狀態。</text>
  <line class="er-g" x1="70" y1="280" x2="700" y2="280"/>
  <line class="er-g" x1="70" y1="230" x2="700" y2="230"/>
  <line class="er-g" x1="70" y1="180" x2="700" y2="180"/>
  <line class="er-g" x1="70" y1="130" x2="700" y2="130"/>
  <line class="er-g" x1="70" y1="80" x2="700" y2="80"/>
  <line class="er-ax" x1="70" y1="80" x2="70" y2="280"/>
  <text class="er-t-sm" x="62" y="284" text-anchor="end" font-size="12">0</text>
  <text class="er-t-sm" x="62" y="234" text-anchor="end" font-size="12">20%</text>
  <text class="er-t-sm" x="62" y="184" text-anchor="end" font-size="12">40%</text>
  <text class="er-t-sm" x="62" y="134" text-anchor="end" font-size="12">60%</text>
  <text class="er-t-sm" x="62" y="84" text-anchor="end" font-size="12">80%</text>
  <rect x="100" y="183.2" width="88" height="96.8" rx="3" fill="#f0a35e" fill-opacity=".88"/>
  <text class="er-t-b" x="144" y="174.2" text-anchor="middle" font-size="17" fill="#f0a35e">38.7%</text>
  <text class="er-t-sm" x="144" y="304" text-anchor="middle" font-size="13">6 月下半</text>
  <text class="er-t-sm" x="144" y="324" text-anchor="middle" font-size="11.5">14 天裡 10 天有滿床</text>
  <rect x="250" y="166.5" width="88" height="113.5" rx="3" fill="#e88a3c" fill-opacity=".88"/>
  <text class="er-t-b" x="294" y="157.5" text-anchor="middle" font-size="17" fill="#e88a3c">45.4%</text>
  <text class="er-t-sm" x="294" y="304" text-anchor="middle" font-size="13">7 月</text>
  <text class="er-t-sm" x="294" y="324" text-anchor="middle" font-size="11.5">31 天裡 23 天有滿床</text>
  <rect x="400" y="140.2" width="88" height="139.8" rx="3" fill="#dc6b28" fill-opacity=".88"/>
  <text class="er-t-b" x="444" y="131.2" text-anchor="middle" font-size="17" fill="#dc6b28">55.9%</text>
  <text class="er-t-sm" x="444" y="304" text-anchor="middle" font-size="13">8 月</text>
  <text class="er-t-sm" x="444" y="324" text-anchor="middle" font-size="11.5">31 天裡 25 天有滿床</text>
  <rect x="550" y="87.2" width="88" height="192.8" rx="3" fill="#c62828" fill-opacity=".88"/>
  <text class="er-t-b" x="594" y="78.2" text-anchor="middle" font-size="17" fill="#c62828">77.1%</text>
  <text class="er-t-sm" x="594" y="304" text-anchor="middle" font-size="13">9 月前 5 天</text>
  <text class="er-t-sm" x="594" y="324" text-anchor="middle" font-size="11.5">5 天全部有滿床</text>
  <text class="er-t" x="20" y="356" font-size="13.5" fill="#c62828">最長一次：8 月 23 日上午十點到 27 日早上七點，這 93 個小時裡抓到的每一筆都是滿床。</text>
  <text class="er-t-sm" x="20" y="380" font-size="12.5">滿床代表 24 張登記床全躺滿，後面的人只能往走廊上那些幽靈床去。護理人力沒有跟著多。</text>
</svg>
<figcaption><b class="cap-f">Figure 14</b>｜依《緊急醫療救護資訊通報辦法》，急救責任醫院要每三十分鐘上傳一次急診即時資訊，第一項就是「向一一九通報滿床」，健保署把它公開在「重度級急救責任醫院急診即時訊息」。本文自 2026 年 6 月 17 日起逐時擷取本院的通報狀態，至 9 月 5 日共 1,659 筆紀錄，其中 853 筆顯示滿床。<br>⚠️ 這個數字只適合看同一家醫院的時間變化。該系統列出的 59 個院所，滿床率呈兩極分布（中位數僅 0.1%，另有數家長期接近 100%），顯示各院通報習慣差異極大，拿來跨院比較沒有意義。（59 為該查詢服務列出的申報院所數，與衛福部評定之重度級急救責任醫院家數不同。）</figcaption>
</figure>

6 月下半是 38.7%，7 月 45.4%，8 月 55.9%，9 月的前五天 77.1%。8 月三十一天裡，有二十五天出現過滿床；8 月 23 日上午十點到 27 日早上七點，這九十三個小時裡，我抓到的每一筆紀錄都是滿床。

而「滿床」在現場是什麼意思？

它的意思是那二十四張登記的床已經全部躺滿。而床一旦躺滿，後面進來的人，就只能往那些沒登記的位置去。所以「通報滿床」這四個字，等於同時告訴你：一診前、五診後、119 走道那些幽靈床，一定已經開出來了。在我們醫院，通報滿床的意思很直接：登記的那些床，已經全滿了；滿床之後還有需要躺的病人進來，就只能往幽靈床去。沒滿床的時候，那些位置不一定會動到。

這才是滿床真正的意義。急診人次是固定的，登記的留觀床是固定的，法規算出來的那一個班十二個護理人員，也是固定的。真正在變動的只有一件事：這十二個人今天要照顧幾張床。沒滿床的時候是二十四張以內，還在法規設想的範圍裡；滿床的時候是二十四張再加上走廊，而那些不存在於任何表格上的床位，分掉的是同一批人。

沒有人被裁掉，也沒有人離職，但那幾個小時裡，每一個病人能分到的護理人力確實變少了。道理很簡單：分母變大了。同樣十二個人，原本顧二十四張床，現在要顧二十四張，再加上那一整排幽靈床。而正因為那些床在帳面上不存在，被稀釋掉的這一份，也就不會出現在任何一份報表上。

所以滿床率可以當一個代理指標，量的是這件事：一個月裡面，有多少時間我們手上的人力其實不夠。8 月的答案是超過一半，9 月到目前為止是四分之三。

把那九十三個小時攤開來看，會更清楚一點。下面這張圖的每一個點，都來自健保署那個公開查詢系統：不需要登入，不需要任何院內權限，你現在打開也查得到。

<figure class="er-chart">
<svg viewBox="0 0 720 420" role="img" aria-labelledby="cI-t">
  <title id="cI-t">2026 年 8 月 23 日到 27 日，等住院人數逐時變化；其中 93 個小時抓到的每一筆都是通報滿床，等住院人數有一半以上的時間超過登記的 24 張床</title>
  <text class="er-t-b" x="20" y="24" font-size="16">那 93 小時，等住院的人有幾個</text>
  <rect x="18" y="34" width="684" height="24" rx="4" fill="#0f766e" fill-opacity=".09" stroke="#0f766e" stroke-opacity=".35" stroke-width="1"/>
  <text class="er-t" x="28" y="51" font-size="12.5" fill="#0f766e">資料來源：衛福部健保署「重度級急救責任醫院急診即時訊息」公開查詢系統，免登入、任何人都查得到，非院內資料。</text>
  <rect x="122.5" y="80" width="488.3" height="220" fill="#dc2626" fill-opacity=".07"/>
  <text class="er-t-sm" x="366" y="74" text-anchor="middle" font-size="12.5" fill="#dc2626">這 93 小時抓到的每一筆都在通報滿床（8/23 10:00 → 8/27 07:00）</text>
  <line class="er-g" x1="70" y1="300" x2="700" y2="300"/>
  <line class="er-g" x1="70" y1="245" x2="700" y2="245"/>
  <line class="er-g" x1="70" y1="190" x2="700" y2="190"/>
  <line class="er-g" x1="70" y1="135" x2="700" y2="135"/>
  <line class="er-g" x1="70" y1="80" x2="700" y2="80"/>
  <line class="er-ax" x1="70" y1="80" x2="70" y2="300"/>
  <text class="er-t-sm" x="62" y="304" text-anchor="end" font-size="12">0</text>
  <text class="er-t-sm" x="62" y="249" text-anchor="end" font-size="12">10</text>
  <text class="er-t-sm" x="62" y="194" text-anchor="end" font-size="12">20</text>
  <text class="er-t-sm" x="62" y="139" text-anchor="end" font-size="12">30</text>
  <text class="er-t-sm" x="62" y="84" text-anchor="end" font-size="12">40 人</text>
  <line x1="70" y1="168" x2="700" y2="168" stroke="#0f766e" stroke-width="2" stroke-dasharray="7 4"/>
  <text class="er-t-sm" x="76" y="163" font-size="12.5" font-weight="700" fill="#0f766e">登記觀察床 24 張</text>
  <polyline points="70.1,217.5 75.3,212.0 80.5,217.5 85.8,212.0 91.0,206.5 94.9,206.5 100.3,201.0 106.8,201.0 112.0,201.0 117.2,195.5 122.5,195.5 127.8,190.0 133.0,184.5 138.2,190.0 143.5,184.5 148.8,195.5 152.7,184.5 159.2,173.5 164.6,157.0 169.8,140.5 173.7,140.5 180.2,135.0 185.5,124.0 190.8,129.5 196.1,129.5 201.2,124.0 205.2,129.5 209.1,129.5 215.7,113.0 222.2,113.0 227.5,102.0 232.8,96.5 238.0,85.5 248.5,102.0 252.5,151.5 259.1,146.0 264.2,157.0 269.5,146.0 273.5,151.5 280.0,173.5 285.2,168.0 290.6,157.0 295.8,151.5 301.0,135.0 306.2,124.0 311.5,135.0 316.8,135.0 320.7,140.5 327.2,124.0 331.2,124.0 335.2,124.0 343.0,124.0 346.9,124.0 353.5,113.0 358.8,113.0 364.0,107.5 369.3,96.5 374.6,96.5 378.5,124.0 385.0,135.0 390.2,129.5 392.9,129.5 399.5,124.0 406.1,135.0 409.9,140.5 416.5,135.0 421.8,135.0 427.1,129.5 432.2,129.5 437.5,135.0 442.8,135.0 446.8,129.5 453.2,118.5 458.5,107.5 462.5,113.0 467.8,107.5 474.3,113.0 478.2,113.0 483.4,118.5 490.0,118.5 494.0,118.5 500.6,124.0 505.8,135.0 509.7,162.5 516.2,212.0 517.6,206.5 526.8,212.0 532.0,228.5 535.9,234.0 541.3,234.0 546.5,228.5 553.0,234.0 558.2,234.0 563.5,206.5 564.8,217.5 574.0,201.0 579.2,201.0 584.5,195.5 589.8,184.5 595.0,184.5 598.9,179.0 604.2,179.0 610.8,184.5 614.8,195.5 621.3,195.5 626.5,195.5 631.8,212.0 637.1,234.0 642.3,261.5 647.5,256.0 648.8,256.0 656.7,256.0 662.0,245.0 668.5,250.5 672.4,239.5 677.7,250.5 682.9,239.5 688.2,239.5 694.8,245.0 698.8,245.0" fill="none" stroke="#c62828" stroke-width="2.2"/>
  <circle cx="238" cy="85.5" r="4.5" fill="#c62828"/>
  <text class="er-t-b" x="250" y="90" font-size="13.5" fill="#c62828">39 人</text>
  <text class="er-t-sm" x="70" y="322" font-size="12">8/23</text>
  <text class="er-t-sm" x="196" y="322" font-size="12">8/24</text>
  <text class="er-t-sm" x="322" y="322" font-size="12">8/25</text>
  <text class="er-t-sm" x="448" y="322" font-size="12">8/26</text>
  <text class="er-t-sm" x="574" y="322" font-size="12">8/27</text>
  <text class="er-t-sm" x="694" y="322" text-anchor="end" font-size="12">8/28</text>
  <text class="er-t" x="20" y="356" font-size="13.5">這五天的 120 筆紀錄裡，有 <tspan font-weight="700" fill="#c62828">64 筆</tspan> 等住院人數超過 24，也就是超過登記床數。最高一次是 8 月 24 日早上八點的 39 人。</text>
  <text class="er-t-sm" x="20" y="382" font-size="12.5">超過那條綠線的部分，就是躺在走廊、診間門口、檢傷旁邊的人。他們一個都不會進到護理人力的公式裡。</text>
  <text class="er-t-sm" x="20" y="406" font-size="12">8 月 27 日早上七點多第一次解除，但上午又反覆滿床幾次，下午三點過後才真正穩住。</text>
</svg>
<figcaption><b class="cap-f">Figure 15</b>｜<strong>本圖所有數據皆取自公開資料</strong>：衛生福利部中央健康保險署「重度級急救責任醫院急診即時訊息」公開查詢服務（info.nhi.gov.tw），該服務不需登入、不需帳號，任何人都可即時查詢全國急救責任醫院的通報狀態與等候人數。本文自 2026 年 6 月 17 日起逐時保存該公開服務的資料，本圖取其中 8 月 23 日至 27 日共 120 筆紀錄繪製，未使用任何院內系統或未公開資訊。<br>綠色虛線為該行政區登記在案的急診觀察床數；折線為健保署公開之「等候住院人數」。</figcaption>
</figure>

那五天的一百二十筆紀錄裡，有六十四筆的等住院人數超過二十四。超過的那些人沒有消失，他們就躺在一診前、五診後、走道邊。最高的一次是 8 月 24 日早上八點，三十九個人等著上樓，而登記在案的觀察床是二十四張。

基準自己知道會這樣。它在同一條的下一點寫著：「急診留觀病人數超過登記之急診觀察床數時，應有全院醫護人力調度支援機制」[^17]。法規承認這件事會發生，然後把它交給醫院自己想辦法。

還有一層。算護理人力的那一點，在基準裡標了一個「試」字，意思是試評項目，評量結果不納入評定成績計算；而下一點那個「你要有調度機制」，是正式計分的[^17]。應該配多少人不算分，怎麼自己撐過去才算分。

所以會出現這樣的畫面：一邊，帳面上每人負擔下降 7%、輕症佔率下降，寫成報告就是初具成效；另一邊，白班多排一個人還是累、走廊上躺著等三天的病人、一個容額三年招不到人。

**兩邊講的都是真的。差別只在於，官方那一套指標量的是流量，而急診真正的痛苦來自存量。**

回到我一開始問自己的那個問題：急診室是壞掉了，還是只是太忙？

太忙，是流量的問題，撐過去就好。壞掉，是結構的問題：進來的火愈燒愈旺（人口老化），出口被堵住（病房開不出來），而顧爐子的人正在一個一個離開，新的人不來。**這三件事任何一件單獨發生，急診都撐得住。疊在一起，才是現在這個樣子。**

<figure class="er-chart">
<img src="/images/erlife-post-7-boiler.webp" width="1536" height="1024" alt="插畫：一座寫著「急診」的鍋爐，左邊爐膛的火燒得又大又旺，標註「人口老化」；右上方唯一的出口管線被一個巨大的軟木塞完全堵死、蒸汽卡在裡面，標註「病房開不出來」；鍋爐上的壓力表指針已經打進紅色危險區；右下方穿白袍與護理服的工作人員一個接一個轉身走出畫面，隊伍愈走愈稀疏，地上留著幾件沒人接手的白袍，標註「人一個一個離開」。" loading="lazy">
<figcaption><b class="cap-f">Figure 16</b>｜火、塞子、走掉的人。這三件事任何一件單獨發生，急診都撐得住：火再旺，只要出口通、人夠，蒸汽排得掉；出口堵住，只要火小、人夠，還來得及疏通。現在的問題是三件同時發生，而壓力表只有一個。<br>圖為概念示意，非統計圖表。</figcaption>
</figure>

這條放大鏈，才是急診壅塞真正的運作方式。需求端其實只動了一點點：老年急診人次五年增加 15.7%，聽起來完全在可承受範圍內。但這些人比以前更需要住院，而病房因為護理人力不足開不出來，於是他們卡在急診。卡住的人愈積愈多，停留逾 24 小時的比率惡化三成六到六成；等到反映在單一急診室的走廊上，就變成了翻倍。

<figure class="er-chart">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="cE-t">
  <title id="cE-t">急診壅塞的放大鏈：15.7% 的輸入如何在現場變成翻倍</title>
  <defs><marker id="erArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0,0 L10,5 L0,10 z" fill="currentColor" fill-opacity=".55"/></marker></defs>
  <rect x="20" y="118" width="170" height="54" rx="6" fill="#059669" fill-opacity=".14" stroke="#059669" stroke-width="1.5"/>
  <text class="er-t-b" x="105" y="141" text-anchor="middle" fill="#059669">輸入 +15.7%</text>
  <text class="er-t-sm" x="105" y="160" text-anchor="middle">65 歲以上急診人次</text>
  <rect x="265" y="98" width="190" height="94" rx="6" fill="#d97706" fill-opacity=".14" stroke="#d97706" stroke-width="1.5"/>
  <text class="er-t-b" x="360" y="126" text-anchor="middle" fill="#d97706">出口被堵住</text>
  <text class="er-t-sm" x="360" y="147" text-anchor="middle">護理師走 → 病房關床</text>
  <text class="er-t-sm" x="360" y="165" text-anchor="middle">停留逾 24 小時比率</text>
  <text class="er-t-sm" x="360" y="183" text-anchor="middle">2.32–2.75% → 3.75%（+36–62%）</text>
  <rect x="530" y="88" width="170" height="114" rx="6" fill="#dc2626" fill-opacity=".14" stroke="#dc2626" stroke-width="1.8"/>
  <text class="er-t-b" x="615" y="128" text-anchor="middle" fill="#dc2626" font-size="16">現場翻倍</text>
  <text class="er-t-sm" x="615" y="150" text-anchor="middle">交班手上待床病人</text>
  <text class="er-t-sm" x="615" y="168" text-anchor="middle">5–7 個 → 10–15 個</text>
  <text class="er-t-sm" x="615" y="186" text-anchor="middle">（我自己的班上）</text>
  <g stroke="currentColor" stroke-opacity=".55" stroke-width="2" marker-end="url(#erArrow)">
    <line x1="192" y1="145" x2="258" y2="145"/><line x1="457" y1="145" x2="523" y2="145"/>
  </g>
  <text class="er-t-sm" x="360" y="238" text-anchor="middle">需求端只動了一點點，出口堵住之後，壓力在現場放大了好幾倍</text>
</svg>
<figcaption><b class="cap-f">Figure 17</b>｜同樣從 2019 年算起，三個數字疊起來看：老年急診人次 +15.7%（全國）→ 停留逾 24 小時比率增加約三成六到六成（全國）→ 單一急診室交班待床病人翻倍（單一醫院、單一醫師的印象估計，非統計資料）。<br>資料來源：衛生福利部統計處《急診就醫人次統計》；韓幸紋（2025）引衛福部「總額協商參考指標要覽」；末段為作者本人第一手經驗。</figcaption>
</figure>

**一個增加 15.7% 的輸入，經過一個出口被堵住的系統，最後在現場變成翻倍的負荷。** 這就是為什麼從主管機關的位置看，數字都還好；但站在急診裡的人會說，這幾年完全不一樣了。兩邊都沒有說謊，只是站在這條放大鏈的不同端點。

## 那為什麼是這一年半才開始加薪？

這是我原本最想不通的地方。失血是 2024 年就翻倍的，加薪潮卻是 2025 年下半才變得明顯。中間差了快一年。

答案其實很現實：**錢是 2025 年 5 月才到位的**[^9]。要先講清楚的是，這裡講的是進到健保、進到醫院的錢；它有多少真的變成第一線急診醫護的薪水，沒有人統計過，我也講不出來。

<div class="cap cap-t"><b>Table 9</b>｜這一年半投進急診的錢</div>

| 時間 | 政策 | 金額 |
| --- | --- | --- |
| 2025/5 | 健保改善急診壅塞四大措施（急診觀察床護理費調升六成、新增診察費、加護病房給付提高） | 42.4 億／年 |
| 2025 | 公立醫院醫護加薪 7–11%（師一級 7.5%、師二級 7.8%、師三級 11.5%）、健保點值保障 0.95 以上 | 全院／全健保適用，非急診專款[^25] |
| 2025/11 | UCC 假日輕急症中心試辦 | 3 億[^26] |
| 2026 春節 | 開診獎勵，除夕到初三加成 100% | 初估 13.6 億，定案 16 億[^10] |

醫院一直到 2025 年，才同時具備「不得不加薪」跟「有錢可以加薪」這兩個條件。在那之前，院方就算知道人在流失，帳上也擠不出錢來留。

所以這一年半的加薪潮，本質上是**遲來的反應撞上新錢進場**。加薪不代表情況變好了，只代表情況已經壞到有預算願意進來。

## 政府自己重設了行情

這一點很少被討論，但我認為它對薪資的影響最直接。

2025 年 11 月上路的 UCC，開給基層醫師的價碼是：**一班 8 小時，白班一萬五、夜班兩萬**[^11][^26]。換算下來時薪是 1,875 元和 2,500 元。

對照一下醫院的專任急診醫師。根據醫師職業工會的說法，台北市的行情是**一班 12 小時、2 萬 2 到 2 萬 5**，時薪大約 1,833 到 2,083 元[^13]。

**政府開的價，時薪跟醫院正職相當，上限還高出兩成，工作內容卻更輕鬆**。UCC 只收檢傷四、五級。

講白一點，這是政府自己下場喊價。醫院要留人，帳面上就必須往這個價追。當時工會就直接示警過，這會變相鼓勵急診醫師往基層流動，砸多少錢在 UCC，就該拿同樣的資源去改善既有的急重症環境[^12]。

## 一場沒有新供給的競價

把前面的東西合起來，就能解釋你我都感覺到的那個現象：為什麼「每一家」都在加薪，「每一家」都還在找人。

因為全國在急診執業的人數，一年只淨增 47 個。上集算過這筆帳：登記在急診醫學科執業的人從 1,693 變成 1,740，中間是新科急專進來 102 個、轉出去 70 個、從別科轉進來 13 個[^6]。

在總量幾乎不動的情況下，**A 醫院加薪挖到一個人，就等於 B 醫院少一個人**。加薪不會生出新的急診醫師，它只是重新分配同一批 1,740 個人。而只要有一家開始加價，其他家就非跟不可，否則就是輸家。

這是一場競價，不是市場擴張。錢一直往上疊，人始終是那些人。

醫院端的實際動作也印證了這件事。這三個例子都出自《今周刊》記者馬揚異 2025 年 11 月的採訪報導[^13]。台中的長安醫院原本 8 個專任急診醫師，走了 1 個之後，其餘的人每個月要多排 2 到 3 班、工時多 20 到 30 小時；院方的解法是去把剛退役的老戰友找回來兼職。奇美有 3 位特約急診醫師，每人每月支援 2 到 4 班。台大醫院院長余忠仁也坦言，正在規劃聘用「回流醫師」，利用他們沒看診的時間回來排班。

亞東的做法最能說明問題的性質。院長邱冠明講得很白：「我們花了一點時間，開幾次會議，**改變急診的薪資結構，弱化年資**，讓工作環境更友善」[^8]。所謂弱化年資，就是把「年資」在薪水裡的權重調低，讓實際站班的人拿得比較多。這是很明確的訊號：薪資開始向「肯上班的人」傾斜，而不是向「資深的人」傾斜。因為現在真正稀缺的，是願意站上班表的那個人。

## 為什麼加薪止不住血

我的判斷是，這一輪加薪能減緩流失，但擋不住趨勢。三個理由：

**第一，瓶頸不在急診醫師身上。** 急診醫師加薪不會生出病床。只要護理人力還在掉、病房還在關床，病人就會繼續塞在急診，工作條件就不會改善。2026 年 8 月台大爆出的急診候床 12 天病逝、傳出有人等床 35 天，就是這條鏈的終端表現[^14]。 病床開不開得出來，決定權從來不在急診；但開不出來的後果，全部由急診承受。

**第二，加薪是在跟一個獲利模式完全不同的對手競爭。** 醫院靠健保，診所靠自費。亞東紀念醫院急診醫學部主任蔡光超在《報導者》講得很直白：「一家醫院只靠健保收入一定是虧本，但怎麼會有一個保險制度，讓醫院經營不下去？」[^15] 只要這個價差還在，加薪只能縮小差距，沒辦法反轉方向。何況診所給的不只是錢。不用值夜班、週末能陪小孩，這些東西加薪買不回來。

**第三，錢進了醫院，不一定會變成薪水。** 這一點常被跳過。健保是把整包費用給醫院，怎麼分配是醫院決定的。2025 年 5 月給付調高之後，台北市醫師職業工會在端午連假後就發聲明示警：截至六月初，醫護人力流失、關病房、急診壅塞這串惡性循環並沒有好轉，「也未聽聞哪間醫院因此提升工作人員待遇」[^9]。 錢從健保撥出來，到第一線的薪水袋之間，還隔著醫院自己的一整套分配決定，而那一段沒有任何規定管得到。

也因為這樣，2025 年底出現的一個政策方向值得盯著：衛福部擬修改健保特約管理辦法，規定新進醫護的起薪不能只有最低工資，而要是最低工資的倍數[^16]。

這件事的份量，要放回健保怎麼付錢才看得懂。健保給的是「一整包」：調高急診診察費、調高觀察床護理費、加護病房給付提高，錢撥給醫院，至於這包錢裡面有多少變成醫師的薪水、多少變成護理師的薪水、多少拿去補別科的虧損、多少就留在帳上，全部是醫院自己決定的。所以才會出現 2025 年 5 月給付調高、六月工會卻說「沒聽聞哪間醫院因此提升待遇」這種事：錢確實給了，只是沒有任何一條規定它得走到誰身上。

起薪入法動的是另一個地方。它沒有多給一筆錢，而是在醫院拿健保錢的資格條件裡，直接寫上「你付給新人的薪水不能低於某個數」，做不到就影響特約。從「錢給醫院、醫院自己分」變成「規定醫院怎麼分」，差別就在這裡：前者只能期待醫院願意分下去，後者是把分配結果本身變成拿錢的門檻。那才是真正動到結構的一刀。

## 最後

回到最開始那個問題：人真的太少嗎？離開的真的太多嗎？還是留下的太少？

資料給出的答案是第三個。

人沒有變少，在急診執業的專科醫師還在緩慢增加。離開的絕對人數也不算誇張，一年 70 個。但這 70 個人，抵銷掉了當年新血的七成；而在職的 2,240 個有急專資格的醫師裡，有三分之一已經 50 歲以上，能扛高強度輪班的那個中間世代正在變薄[^6]。

而需求那一邊不會等人。急診的總人次其實沒有變多，2025 年甚至比 2019 年還少一點；但 65 歲以上的急診人次五年增加了 15.7%，佔比從 29% 爬到 33%[^27]。拆開來算，這 15.7% 完全是人口結構推上去的（人口 +24.8%），老人看急診的比例和次數其實都在降。同時，輕症（檢傷四、五級）的佔率也在降，醫學中心的急診部分負擔漲了 300 元、件數卻不減反增。**能從民眾行為那一側擠出來的空間，其實已經擠得差不多了**，剩下的壓力來自人口結構本身，而它不會回頭。

於是留下來的人，每個月的班數只能往上加。林口長庚急診醫學科主任羅祥雲受訪時說，該院急診醫師原本一個月排 15 到 18 班，2024 年 8 月新主治到任之前，每個人基本上要 20 班起跳，年輕的最高排到 23 班，一個月有 23 天要進急診室[^15]。

<!-- cc草稿 id:mmtoexfwzgken -->
這個數字要有感，得換算成日子。現在急診的基本盤大概是一個月 15 班、180 小時，一班 12 小時。20 班起跳，等於每個月要多站五到八個 12 小時班；23 班，就是一個月有 23 天你人在急診室裡。我自己上過那種班表。住院醫師那幾年，一個月排 23、24 班，每班 12 小時。那段日子我沒有留下什麼記憶點，只記得下班回到家倒頭就想睡，什麼事都不想做。當年撐得下來，是因為知道那是訓練，會結束。要一個主治醫師每個月都這樣過，而且看不到盡頭，我想我會炸掉。

加薪處理的是「要不要留下來」，但沒有處理「留下來要過什麼日子」。當一個人一個月上 23 班，加多少錢都只是把他撐到更晚才走。

我不覺得這一輪加薪是壞事，錢總算願意進來了。但如果接下來一年，資源還是全部押在價格上，而不是押在把病床打開、把急診護理人力納入保障、把留觀的病人送上樓，那我們大概會在明年這個時候，看到一模一樣的新聞，只是數字更難看一點。

寫這篇的時候，如果有人問我：有沒有哪一次，讓你覺得急診醫療崩潰了？是哪一次？

我想了一下，我可能答不出來。

不是因為沒有。是因為太多次了，多到我沒辦法從裡面挑出特定的哪一天。

後來我才意識到，這句話其實就是這篇文章的答案。

SARS 我記得。COVID 那幾波我也記得，記得是哪一年、哪個月、哪一天病人開始湧進來、什麼時候鬆掉。那些是事件。事件有開始也有結束，所以會被記住，也所以撐得過去。

但現在這個，我想不起來是哪一次。因為它不是事件，它是背景。它不再是某一個特別慘的班，它是每一個班。

**太忙會留下記憶點。壞掉不會。壞掉的東西，會慢慢變成你習慣的樣子。**

所以回到最前面那個問題：急診室是壞掉了，還是只是太忙？

我的答案是前者。而我認為最危險的地方在於，當一件事壞到連當事人都指不出是從哪一天開始的，通常代表它已經壞了很久了。

---

---

## 參考資料

[^1]: 衛生福利部中央健康保險署《全民健康保險醫療品質資訊公開網》指標 1652「急診轉住院暫留急診超過四十八小時案件比率」。<https://med.nhi.gov.tw/ihqe0000/pepH1652.html?ind=1652&type=2>　該網站以**季**為單位公布各院所指標值（可查詢區間為 099 年第一季至 114 年第四季）；查詢頁 <https://med.nhi.gov.tw/ihqe0000/pepC_Search001.html?ind=1652&type=2>。以 114 年第四季為例，臺大醫院本院為 22.76%（分子 1,169／分母 5,137），所屬臺北業務組為 6.56%。內文引用之年度數字轉引自註 2 之報導（該報導引健保署資料），讀者亦可於上開查詢頁自行逐季核對。

[^2]: ETtoday 健康雲〈台大急診「每 4 人有 1 人」等床逾 2 天　醫嘆：鄰近醫院怎會都沒能力收〉，記者邱俊吉，2026/8/26。<https://health.ettoday.net/news/3226084>　原文：「根據健保署資料，台大 2024 年此指標平均為 22.18%，2025 年升至 23.83%，同期全國平均分別僅 5.3%、5.88%；去年第 3 季台大更達 25.94%」「2014 至 2020 年更連續 7 年超過 24%，2015 年一度高達 27.49%」。

[^3]: 審計部《近年我國實施分級醫療、醫護留任與減緩急診壅塞成效之初探》，114 年度（醫學中心急診件數、留置逾 24 小時比率、檢傷 1–3 級轉入病房 <8 小時比率，引健保署 DA 系統）。<https://www.ly.gov.tw/Pages/ashx/File.ashx?FilePath=~/File/Attach/252810/File_19857052.pdf>

[^4]: 衛生福利部全民健康保險會〈健保會委員關切新制部分負擔實施 1 年之成效〉，2024/11。<https://dep.mohw.gov.tw/NHIC/fp-4039-80487-116.html>

[^5]: 台灣急診醫學會《113 年度急診醫學專科醫師執業狀況調查報告》，2024/08/06。<https://www.sem.org.tw/News/11/Details/1263>

[^6]: 台灣急診醫學會《114 年度急診專科醫師執業登記狀況調查結果》，2025/11/07（調查期間 2025/4/30–5/9）。<https://www.sem.org.tw/News/11/Details/1495>

[^7]: 衛生福利部統計處《醫事機構服務量統計年報（民國 114 年）》表 11「歷年醫院醫療服務量統計」、表 12「歷年醫院平均每日醫療服務量統計」，以及《醫事機構服務量統計・縣市與鄉鎮統計表》112–114 年。<https://dep.mohw.gov.tw/DOS/lp-5099-113.html>

[^8]: 《報導者》【Data Reporter】住院醫師大調查，2025/10/15。<https://www.twreporter.org/a/data-reporter-physician-shortages-by-specialty-and-subspecialty>

[^9]: 《康健》〈急診快崩盤！健保署 3 計劃搶救〉，2025/6/5。<https://www.commonhealth.com.tw/article/92787>

[^10]: 三立新聞網〈明年春節「鼓勵醫院開診」！衛福部砸 13.6 億　最高雙倍給付〉，記者蔣季容，2025/11/2。原文：健保署署長陳亮妤表示，「鼓勵醫療院所於春節期間提供醫療服務，提升診察費、護理費及藥事服務費 30% 至 100% 不等……預計挹注 13.6 億元」（115 年春節連假共 9 天，2/14–2/22）。<https://health.setn.com/news/1745465>

[^11]: 康健〈比醫學中心便宜 600 元！專家卻警告：不解決痛點，假日輕急症中心恐注定失敗〉，記者邱宜君，2025/10/17。原文為「醫師每班有 1 萬 5 千元～2 萬元的酬勞」，UCC 為週日及國定假日 8–16 時、16–24 時兩班制。<https://www.commonhealth.com.tw/article/93172>

[^12]: 聯合報〈假日急症中心新制 11 月上路 醫師職業工會憂急重症醫護陷入相對剝奪感〉，記者沈能元，2025/10/20（醫師職業工會示警 UCC 津貼相對優渥、恐使急重症醫護產生相對剝奪感，並主張投入 UCC 多少資源就該投入同等資源改善既有急重症環境）。<https://udn.com/news/story/7314/9081569>

[^13]: 今周刊／工商時報〈急診醫師大出走！從前線撤退到診所創業〉，記者馬揚異，2025/11/1（即含 139 人重複計算的那篇）。<https://www.ctee.com.tw/news/20251101700018-430104>

[^14]: 聯合報〈8 旬婦台大急診待床 12 天病逝〉（2026/8，<https://udn.com/news/story/7266/9713547>）；〈台大院內加碼爆料 急診有病患等床 35 天才發現異常〉（<https://udn.com/news/story/7266/9716451>）。

[^15]: 《報導者》〈「你什麼時候去診所？」急診壅塞無解，醫師「燃燒殆盡」引發出走潮〉，2024/12/18。<https://www.twreporter.org/a/health-emergency-overcrowding-in-emergency-department>

[^16]: 中央社〈不能只有最低工資 衛福部擬保障新進醫護起薪〉，2025/11/30。<https://www.cna.com.tw/news/ahel/202511300121.aspx>

[^20]: 衛生福利部統計處《醫院病床統計》開放資料，民國 110 至 114 年。該資料集含「急診觀察床」等 38 個病床類別欄位，惟統計單位為鄉鎮市區、非個別醫院。宜蘭市（鄉鎮市區碼 3401）急診觀察床：110 年 24 床、111 年 24 床、112 年 24 床、113 年 24 床、114 年 24 床。本文自各年度原始檔取值。該統計以鄉鎮市區為單位，宜蘭市轄內登記有案之醫院為 2 家，此 24 床為兩家合計數，公開資料未再分列至個別醫院。<https://dep.mohw.gov.tw/DOS/cp-6601-75361-113.html>

[^21]: 衛生福利部《緊急醫療救護資訊通報辦法》附表「緊急醫療救護資訊通報項目與通報作業方式」，主項目「醫療處置能力資訊」項下子項目「急診即時資訊」，內容為：「1.向一一九通報滿床 2.等候看診人數 3.等候住院人數 4.等候加護病房人數」，通報時間為「從每日零時起算每三十分鐘上傳」。本辦法依《緊急醫療救護法》第三十九條第一項第五款、第二項授權訂定。

[^24]: 台灣急診醫學會《112 年度急診醫學專科醫師執業狀況調查報告》，2023/08/09（Table 8 之 2023 年分區急診專科醫師人數）。<https://www.sem.org.tw/News/11/Details/1071>

[^27]: 本文引用的急診人次分屬兩份官方統計，涵蓋範圍不同，絕對值不可交叉相除。「總人次」出自衛生福利部統計處《醫事機構服務量統計年報》表 11 之醫院急診人次：2019 年 764 萬、2024 年 748 萬、2025 年 753 萬。「年齡別人次與佔比」出自統計處政府開放資料《急診就醫人次統計－按性別及年齡別分》，該資料母體較大：2019 年總計 1,235 萬 2,512 人次，其中 65 歲以上 359 萬 3,511 人次（29.09%）；2024 年總計 1,254 萬 5,504 人次，其中 65 歲以上 415 萬 6,451 人次（33.13%）。本文的 +15.7% 與 29%→33% 皆在後者內部計算。**兩份統計對「急診總量是否變多」的結論一致**：2019 至 2024 年間，前者 −2.1%、後者 +1.6%，變動都在 ±2% 以內。（另按：該開放資料含「疾病別」欄位，一次就醫可對應多個疾病別，各疾病別加總約為總計的 1.95 倍，故僅「疾病別＝總計」之列可用於統計總量。）<https://dep.mohw.gov.tw/DOS/cp-6600-74522-113.html>

[^26]: 自由時報健康網〈「假日急症中心」值班有誘因！醫師春節連上 9 夜班津貼可領 36 萬元〉，2025/9/25。原文：「試辦經費預計投入 3 億元」、「UCC 試辦計畫總額約 3 億元，包括開辦與維運費約 2200 萬元、人力費約 1.6 億元、醫療費約 1.14 億元」；同篇並載明醫師白班津貼 1.5 萬元、夜班 2 萬元，護理、藥師與放射師等津貼白班 4 千元、夜班 6 千元。<https://health.ltn.com.tw/article/breakingnews/5191225>

[^25]: 中央社〈公立醫院醫事人員專業加給調增〉，2025/9/14。行政院 2025 年 4 月 22 日核定調增 7% 至 11%，其中師一級調增 7.5%、師二級 7.8%、師三級 11.5%，2025 年 5 月 1 日實施並追溯自同年 1 月。<https://www.cna.com.tw/news/ahel/202509140109.aspx>　按：此調增適用公立醫院全體醫事人員，非急診專屬，且屬政府人事預算而非健保給付，各家新聞稿僅公布調幅、未見專屬經費數額；健保點值保障 0.95 亦為全體總額之機制（中央社 2024/7/16 報導，全面達標估需約 700 億元），非急診專款。故本表此列不列金額。

[^23]: 韓幸紋〈急診壅塞現象有解嗎？談 2025 健保署改善方案的根本問題〉，獨立評論＠天下，2025/5/26（引衛生福利部「總額協商參考指標要覽」）。<https://opinion.cw.com.tw/blog/profile/545/article/16167>　按：疫情前 2.32%–2.75% 之區間出自本文，非審計部報告；審計部《成效之初探》僅列 112 年度以後數值。

[^22]: 資料來源為衛生福利部中央健康保險署「重度級急救責任醫院急診即時訊息」公開查詢服務（<https://info.nhi.gov.tw/INAE4000/INAE4001S01>），該服務公布全國急救責任醫院之即時通報狀態，含是否向一一九通報滿床及等候看診、等候住院、等候加護病房人數。本文自 2026 年 6 月 17 日起逐時擷取並保存該服務之公開資料，至 2026 年 9 月 5 日止取得本院 1,659 筆紀錄（同一時間點僅計一次），其中 853 筆顯示滿床。月別統計：2026 年 6 月（自 6 月 17 日起）150 筆中 58 筆、7 月 700 筆中 318 筆、8 月 691 筆中 386 筆、9 月（至 9 月 5 日）118 筆中 91 筆。各月擷取涵蓋率不同：6 月下半約 45%（150／336 個整點）、7 月約 94%、8 月約 93%、9 月約 98%，6 月該月樣本密度明顯低於其他月份，判讀其比率時應留意。因擷取頻率為每小時一次、而法定通報頻率為每三十分鐘，本數字應理解為「抽樣時刻處於滿床狀態的比率」，非「通報次數」；擷取偶有中斷，並非每個小時皆取得到資料，未取得之時段狀態不明，未納入計算。

[^19]: 衛生福利部《醫療機構設置標準》第三條附表（一）「醫院設置標準表」，人員項下「護產人員」：「1.急性一般病床，四十九床以下者，每四床應有一人以上；五十床以上者，每三床應有一人以上。2.設下列部門者，其人員並依其規定計算：(1)手術室：每床應有二人以上。(2)加護病房：每床應有一點五人以上。(3)產房：每產台應有二人以上。(4)燒傷病房、亞急性呼吸照護病房：每床應有一點五人以上。(5)手術恢復室、急診觀察室、嬰兒病房、安寧病房：每床應有一人以上。」同表備註第 1 點載明「申請開業時，急性一般病床之護產人員，依開放床數計」，可知此係數為依床數計算之配置員額，非同時在班人數。<https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020025>

[^18]: 衛生福利部中央健康保險署《全民健康保險醫療服務給付項目及支付標準》第二部西醫第一章基本診療第三節「病房費」，「急診觀察床（床/天）」項下註 1 至 3：「1.急診留觀或待床病人，入住滿六小時始得申報。2.留置超過一日（二十四小時）者，比照住院病房費申報方式，依算進不算出原則計算。3.僅作注射點滴、輸血或休息者，不予支付。」現行代碼含 2025 年 5 月 1 日起施行的 03073A／03074B（病房費第一天）、03075A／03076B（護理費第一天，914 點）、03018A／03019B（病房費第二天起）、03042A／03043B（護理費第二天起，703 點），以及第二節新增之 02030K「急診觀察床診察費」468 點。

[^17]: 衛生福利部《115 年度醫院緊急醫療能力分級評定基準及評分說明與評量方法》第一章「急診醫療」條號 1.1.2（115 年 3 月 6 日衛部醫字第 1151661690 號公告）。重度級原文：「應有 5 名以上專任醫師，前三年急診病人就診人次年平均大於 20,000 人次者，每逾 5,000 人次應增加 1 名專任醫師，前三年每月平均留觀人次每逾 600 人次應增加 1 名專任醫師（以健保申報留觀人次為計算基準）」；評量方法所附公式為「（前三年之年平均急診人次−20,000）/5,000）+5」加上「前三年每月平均急診留觀人次/600」。中度級原文：「前三年年平均急診就醫人次每逾 5,000 人次，應增加 1 名專科醫師」，公式為「所需專科醫師數＝前三年之年平均急診人次/5,000」。同條【註】3 並載明：「急診留觀人次以醫院申報健保『急診觀察床病房費』代碼計算人日次。」<https://www.mohw.gov.tw/dl-99551-e20e3054-0017-491b-8ce6-11506f585e0a.html>　同一條文在 113 年度版（113 年 4 月 11 日衛部醫字第 1131662354 號公告）文字相同。<https://www.mohw.gov.tw/dl-88320-d82c4390-66a8-48aa-a1f0-3cb12dca53d5.html>

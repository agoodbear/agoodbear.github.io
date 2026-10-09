---
title: "Every ED Is Raising Pay, So Why Can't Anyone Find Staff? (Part 1): The Misreported Number, and a Patient Population That Got Swapped Out"
date: "2026-09-01"
description: "The media's 139 ED doctors lost in 2024 adds two tables; it's 72, and worse. ~100 trained a year, retention falling, visits below pre-pandemic, extra patients all elderly, purely demographics."
featured: false
draft: false
toc: true
thumbnail: "/images/erlife-post-6.jpg"
categories:
  - erlife
tags:
  - ED crowding
  - ED staffing
  - NHI
  - population aging
  - Taiwan Society of Emergency Medicine
translated_from: "erlife-post-6.md"
translation_date: "2026-10-09"
---

> This is Part 1. The piece comes in two installments: **Part 1** covers "why people are leaving" and "whether there really are more patients"; [**Part 2**](/post/erlife-post-7/) covers "why patients can't get admitted," and "why every hospital is raising pay and still can't find anyone."

<style>
.er-chart{margin:2em 0;overflow-x:auto}
.er-chart svg{max-width:100%;height:auto;display:block;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,"PingFang TC","Noto Sans TC",sans-serif}
.er-chart img{max-width:100%;height:auto;display:block;margin:0 auto;border-radius:6px}
.er-chart figcaption{font-size:.86em;line-height:1.6;opacity:.75;margin-top:.6em;text-align:left}
.er-g{stroke:currentColor;stroke-opacity:.14}
.er-ax{stroke:currentColor;stroke-opacity:.45}
.er-t{fill:currentColor;font-size:12px}
.er-t-sm{fill:currentColor;font-size:11px;opacity:.7}
.er-t-b{fill:currentColor;font-size:12.5px;font-weight:700}
.cap{font-size:.9em;line-height:1.6;opacity:.85;margin:1.8em 0 .5em;padding-left:.7em;border-left:3px solid currentColor}
.cap-t b{letter-spacing:.02em}
.er-chart .cap-f{letter-spacing:.02em;opacity:.95}
/* Add a separator between consecutive footnote superscripts so "3456" doesn't run together */
.footnote-ref + .footnote-ref::before{content:",";font-weight:400}
sup:has(> .footnote-ref) + sup:has(> .footnote-ref)::before{content:","}
/* Wrap footnote superscripts in square brackets with a little spacing: the numbers in this post are dense, and "2024" followed directly by superscripts 9, 10 would read as "2024/9, 10" (September and October 2024) */
.footnote-ref::before{content:"["}
.footnote-ref::after{content:"]"}
sup:has(> .footnote-ref){margin-left:.12em}
</style>

## On the ground: is the ED broken, or just busy?

Night shift hands off, day shift takes over. The moment sign-out ends, I already have **10 to 15 patients who are boarding or still have nowhere to go**.

That's before counting whoever walks through the door next.

Four or five years ago, that number was 5 to 7, maybe fewer.

**In five or six years, it doubled.**

I want to put this picture up front, because it's where every problem in this piece starts. The ED is designed on the premise of "work them up, then move them out": home, or up to a ward. It's a way station, not a ward. But now a day-shift attending hasn't seen a single new patient yet and is already carrying a dozen-plus people who can't be moved. They lie in hallways, in the observation area, waiting for a bed. The longest wait I remember was over three days before the patient finally got upstairs.

One more thing changed in these years: summer isn't slow anymore.

It used to be that in July, August, and September we scheduled only 3 attendings on day shift; those months were our breathing season. These past few years we've had to schedule 4 almost every time, and it's become the norm. Stranger still, with one extra person, everyone feels more tired than before. Each attending's PPH (patients per hour) used to be around 2 or a bit over; now it's consistently above 2.

One more person, and each person sees more. **That means in the same stretch of time, our total throughput is up by more than 40%.**

The patients are different too. There are far more people over 80 than five years ago; that's a very clear gut sense. And an elderly patient with multiple comorbidities versus a young healthy one takes at least **3 to 5 times** as long to manage. Both get written down as "one visit," but the time they actually eat up is nothing alike.

On the staffing side, our hospital's ED is actually fairly stable. Attending turnover is low: fewer people leave, and fewer come in. The real gap is further down: **our hospital has one EM residency slot, and we haven't filled it in three or four years.**

What that means is the slot has always been there, and it's always been empty. It's not that someone left; it's that no new person came.

And residents have never been just "people still learning." They see patients, they actually take a share of the load, and they discuss with the attending afterward. With a resident around, the attending's patient count is naturally a notch lower. So when that slot sits empty, what's missing isn't just one head; it's **the extra patients the attending has to see every shift**.

That explains what didn't add up at first: we went from 3 people to 4, yet each person's PPH went from just over 2 to consistently above 2. Because the extra attending is filling what used to be the resident's spot; and what they have to handle is a group of patients older, more complex, and harder to move out than five years ago.

Sign-out itself hasn't gotten longer. Patients with a firm diagnosis and completed workup hand off quickly. **What's grown is the other kind: the boarders, the observation patients.** Sign-out is no longer "here's how to manage this patient"; it's lots of beds that all need admission and none of them can get upstairs.

All of this is gut feeling. And gut feeling is the easiest thing to brush off with one line: everyone's busy, the ED has always been like this, maybe you're just getting older and can't take it anymore.

So I dug up all the public data and ran the numbers myself. There was really only one thing I wanted to know: **is the ED broken, or just busy?**

The difference between the two is huge. Busy, you grit your teeth and it passes; over the past 20 years, our ED made it through SARS and through COVID. But if it's broken, no amount of gritting your teeth helps, because broken things don't fix themselves.

The answer was clearer than I expected, and in two places it was the exact opposite of what I'd assumed.

For the past year and a half, nearly every piece of ED news I heard had to do with money. Which hospital simply raised base pay. Far Eastern Memorial Hospital said publicly that in recent years it has given raises to its emergency and critical care physicians every year, with average salary growth of over 15%[^1]; which hospital started bringing retired seniors back to pick up shifts; which hospital's per-shift rate jumped up another tier. If you only looked at these stories, you'd probably think things were looking up for the ED. Seeing everyone get raises, I was practically drooling.

But over the same period, the number of physicians actually standing in the ED didn't go up.

Something about that always felt off to me. Raising pay is the market's most instinctive response to a labor shortage, but after a year and a half of raises, the gap hasn't closed; instead every hospital is crying that it can't find anyone. The money clearly came in. Why didn't the people follow?

I went through the Taiwan Society of Emergency Medicine (TSEM)'s annual practice-status survey reports one by one, and I downloaded the raw statistics files from the Ministry of Health and Welfare (MOHW) and ran them myself. The conclusion was gloomier than I'd expected, and in two places it flatly contradicts the version going around: one is that the number of departures was miscounted; the other is that "more patients" isn't at all what I thought it was.

## First, a number that got reported wrong

Since October of last year, one number has been cited over and over[^2] (translated from Chinese):

> In 2024, a total of 139 emergency physicians switched to other specialties or left hospitals, a loss of 6.5% of the workforce.

That number is wrong.

Its source is TSEM's survey report for 2024 (ROC 113)[^3]. The report has two tables: one on changes in "specialty of practice," the other on changes in "practice setting." Here are the original tables, copied as-is:

<div class="cap cap-t"><b>Table 1</b> | The two change tables in TSEM's 2024 (ROC 113) survey report (covering changes in 2024)</div>

| Dimension of change | Out | In | No change | Total |
| --- | ---: | ---: | ---: | ---: |
| **Specialty of practice** (report Table 4.6) — EM ↔ non-EM | **72** | 11 | 1,948 | 2,031 |
| **Practice setting** (report Table 4.7) — hospital ↔ non-hospital | **67** | 16 | 1,948 | 2,031 |

What the media took were those two bold numbers: **72 + 67 = 139**.

The problem is that these two tables ask **two different questions**: one asks "are you still registered under emergency medicine," the other asks "are you still in a hospital." They count the same 2,031 people, just sliced from two angles. **Someone who leaves the hospital for a clinic and changes their registered specialty along the way shows up once in each table.** Adding 72 and 67 assumes the two groups don't overlap at all, and the report never says that anywhere.

If you think this is just a theoretical quibble, put the same two tables from the years before and after side by side and it becomes obvious:

<div class="cap cap-t"><b>Table 2</b> | The same two tables, three survey years side by side: the two sides aren't counting the same people at all</div>

| Survey year (changes counted) | Specialty: out + in | Setting: out + in | Denominator |
| --- | ---: | ---: | ---: |
| 2023 (ROC 112), 2023 changes[^4] | 34 + 3 = **37 people** | 38 + 2 = **40 people** | 1,946 |
| 2024 (ROC 113), 2024 changes[^3] | 72 + 11 = **83 people** | 67 + 16 = **83 people** | 2,031 |
| 2025 (ROC 114), 2025 changes[^5] | 70 + 13 = **83 people** | 81 + 27 = **108 people** | 2,138 |

In 2024, both sides happen to come to 83, which makes it easy to think "it's the same group of people cut in half." But 2023 is 37 vs. 40, and 2025 is 83 vs. 108. **In two of the three years, they don't match.** That proves the two tables count two different groups: you can't add them, and you can't treat them as the same group.

**The number who actually left emergency medicine in 2024 is 72, not 139.**

I'm singling this out not to let anyone off the hook. Quite the opposite. The real number is smaller, but the problem it reveals is far more serious than 139.

## The six-year curve

TSEM's survey isn't a questionnaire; it pulls directly from the practice-registration database in MOHW's medical personnel management system, which makes it essentially a full census. Spread across six years, it looks like this[^3][^6][^4][^5]:

<div class="cap cap-t"><b>Table 3</b> | Board-certified emergency physicians moving out of / into emergency medicine, 2020–2025</div>

| Year | Out of EM | Into EM | Net out | Out rate |
| --- | --- | --- | --- | --- |
| 2020 | 35 | 12 | 23 | — |
| 2021 | 25 | 15 | 10 | — |
| 2022 | 28 | 7 | 21 | — |
| 2023 | 34 | 3 | 31 | 1.75% |
| **2024** | **72** | 11 | 61 | **3.55%** |
| **2025** | **70** | 13 | 57 | **3.27%** |

First I need to clear up something that's easy to misread: **the "Into EM" column does not include newly board-certified physicians.** It counts people "whose registered specialty was something else and who switched their registration to emergency medicine that year," i.e., people coming back into the ED from another specialty. New grads who just passed the EM boards and register under emergency medicine on their very first registration have never been registered under another specialty, so they don't appear in this column; they come in as new registrations. So "about a hundred newly board-certified emergency physicians a year" and "only a dozen or so moving in a year" don't contradict each other; the two columns count two completely different groups. The accounting further down adds the two separately, and it checks out.

From 2023 to 2024, the out rate jumped from 1.75% to 3.55%, **a full doubling**. That's not a trend; that's a cliff.

And what stands out even more about 2025 is that it **didn't come back down**. 70 people, 3.27%, nearly as high as the year before. A one-off shock bounces back; two straight years stuck at the top doesn't. That's called the new normal.

Another line is getting worse too: the number moving "from hospital to non-hospital."

<div class="cap cap-t"><b>Table 4</b> | Moves from hospital to non-hospital doubled in three years</div>

| Year | Hospital → non-hospital | Non-hospital → hospital | Net outflow | Out of EM, same year |
| --- | ---: | ---: | ---: | ---: |
| 2023[^4] | 38 | 2 | 36 | 34 |
| 2024[^3] | 67 | 16 | 51 | 72 |
| **2025**[^5] | **81** | 27 | 54 | 70 |

The 81 in 2025 is the highest in six years, and it's **more than the 70 who moved out of emergency medicine that same year**. That means there's a group of people "still nominally registered under emergency medicine but no longer in a hospital." They didn't change specialty; they just changed where they practice.

## The real problem isn't how many left

On its own, 70 isn't actually a lot. 70 out of 2,240 board-certified emergency physicians sounds manageable.

The problem is on the other side of the ledger.

I ran the accounts using TSEM's own numbers. In 2025, 102 people newly passed EM board certification (the cumulative total went from 2,355 to 2,457). And the number actually registered to practice under emergency medicine went from 1,693 to 1,740, **a net gain of only 47**[^5].

Check it: `1,693 + 102 (new) − 70 (out) + 13 (in) = 1,738`, which matches the actual 1,740 almost exactly.

Once you run that, things become clear: **virtually 100% of newly board-certified emergency physicians go into the ED, but for every 10 who come in, 7 experienced ones move out.**

That's why training output looks fine while the floor is perpetually short-staffed. It's not that we can't recruit new people; it's that we can't keep the people we've already trained. And the ones we're losing are exactly the most experienced, the ones who can carry the load.

## 1 in every 4.5 board-certified emergency physicians isn't in the ED

Beyond the flows, the stock numbers look even worse[^3][^4][^5].

<div class="cap cap-t"><b>Table 5</b> | The number trained keeps growing, but the share staying in the ED keeps falling</div>

| Year | Cumulative passed EM boards | Newly passed that year | Practicing board-certified EPs | Registered EM | Registered non-EM | Non-EM share |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 2023 | 2,248 | — | 2,054 | 1,664 | 390 | 18.99% |
| 2024 | 2,355 | +107 | 2,139 | 1,693 | 446 | 20.85% |
| 2025 | **2,457** | **+102** | **2,240** | **1,740** | **500** | **22.32%** |

"Newly passed that year" is obtained by subtracting consecutive cumulative totals (2,355−2,248 = 107, 2,457−2,355 = 102). **The training pipeline reliably produces around a hundred people a year, no problem at all; the problem is entirely in those three columns on the right.**

Read the "Registered non-EM" column carefully: **all 500 of these people hold EM board certification**; they're part of the 2,240 "practicing board-certified EPs." The only difference is that the specialty they currently have registered with MOHW isn't emergency medicine. In other words, it's not that they aren't qualified; it's that they've stopped doing it.

Three straight years of increase. By 2025, **1 in every 4.5 physicians qualified in emergency medicine is no longer practicing in the ED**.

Where did those 500 go? TSEM's report breaks it down by hospital level:

<div class="cap cap-t"><b>Table 6</b> | Where board-certified emergency physicians practice (2025, 2,240 total)</div>

| Practice setting | Registered EM (1,740) | Registered non-EM (500) |
| --- | ---: | ---: |
| Medical centers | 543 (31.21%) | 22 (4.40%) |
| Regional hospitals | 835 (47.99%) | 38 (7.60%) |
| District hospitals | 330 (18.97%) | 39 (7.80%) |
| **Other** (clinics, aesthetic medicine, health checkups, and other non-hospital facilities) | 32 (1.84%) | **401 (80.20%)** |

Compare the two columns and it's plain: of those still registered under emergency medicine, 98% are in hospitals of some level; while of the 500 registered under other specialties, **80% land in "Other," i.e., clinics, aesthetic medicine, health checkups, and similar non-hospital facilities**[^5]. That lines up exactly with what *The Reporter* found: 300 new self-pay clinics in three years, pulling emergency and critical care doctors and nurses away[^7].

What about the 22 people "at medical centers but registered under a non-EM specialty"? TSEM's report only pulls registration results and doesn't record reasons, so what follows is my guess, not something the report says: a physician can register only one specialty of practice, so dual-boarded physicians who hold EM plus another specialty (critical care, internal medicine, family medicine, occupational medicine, etc.) and register under the other one land in this cell; the same goes for people who moved into administrative roles or to non-ED units within the hospital (ICU staff, health-checkup centers, hyperbaric oxygen, the education department). This cell has only 22 people, 4.4% of the 500, so it's not the main story. **The main story is the 401 who left hospitals.**

There's another structural problem hidden under these numbers: age. Of the 2,240 currently practicing, the 40–49 bracket is the core (839 people, 37.5%), but **those 50 and over already make up 33.5%** (750 people)[^5]. This is the group least likely to work consecutive overnight shifts, yet they account for a third of the headcount on paper.

The 2,240 on paper and "the people you can actually put on a 24-hour rotation" have never been the same number.

## I thought it was more patients. The data says something else

Everything so far has been supply. But if demand hadn't changed, losing 70 people would be survivable.

My own gut sense was very clear: after the pandemic, especially these last two or three years, summer stopped being slow. In the summer months we used to schedule only 3 attendings on day shift; these past few years we've had to schedule 4 almost every time, and it's become the norm. Scheduling one more person isn't a small thing: it means the whole department's baseline staffing went up by one, and it has never come back down.

So I originally assumed the data would show more patients. It didn't.

**ED visits at hospitals nationwide have actually not returned to pre-pandemic levels**[^8]:

- 2019: 7.64 million visits (daily average 20,934)
- 2020: 6.59 million | 2021: 6.61 million (the pandemic trough)
- 2022: 8.24 million (the peak in the Omicron year)
- 2023: 7.75 million | 2024: 7.48 million
- 2025: **7.53 million visits (daily average 20,639)**

In other words, ED visits in 2025 were 1.4% lower than in 2019. Looking at this line alone, the ED should be easier than before the pandemic.


<figure class="er-chart">
<svg viewBox="0 0 720 336" role="img" aria-labelledby="cA-t">
  <title id="cA-t">National hospital ED visits 2019–2025: 2025 is still below 2019</title>
  <g class="er-g">
    <line x1="70" y1="216" x2="700" y2="216"/><line x1="70" y1="172" x2="700" y2="172"/>
    <line x1="70" y1="128" x2="700" y2="128"/><line x1="70" y1="84" x2="700" y2="84"/>
    <line x1="70" y1="40" x2="700" y2="40"/>
  </g>
  <g class="er-t-sm" text-anchor="end">
    <text x="60" y="220">650</text><text x="60" y="176">700</text><text x="60" y="132">750</text>
    <text x="60" y="88">800</text><text x="60" y="44">850</text>
  </g>
  <line class="er-ax" x1="70" y1="260" x2="700" y2="260"/>
  <line x1="70" y1="115.7" x2="700" y2="115.7" stroke="#dc2626" stroke-dasharray="5 4" stroke-opacity=".55"/>
  <text class="er-t-sm" x="700" y="110" text-anchor="end" fill="#dc2626">2019 level: 7.64M</text>
  <polyline fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"
    points="70,115.7 175,208.1 280,206.3 385,62.9 490,106 595,129.8 700,125.4"/>
  <g fill="#2563eb">
    <circle cx="70" cy="115.7" r="4.5"/><circle cx="175" cy="208.1" r="4.5"/><circle cx="280" cy="206.3" r="4.5"/>
    <circle cx="385" cy="62.9" r="4.5"/><circle cx="490" cy="106" r="4.5"/><circle cx="595" cy="129.8" r="4.5"/>
    <circle cx="700" cy="125.4" r="5.5" fill="#dc2626"/>
  </g>
  <g class="er-t" text-anchor="middle">
    <text x="70" y="105">764</text><text x="175" y="226">659</text><text x="280" y="224">661</text>
    <text x="385" y="53">824</text><text x="490" y="96">775</text><text x="595" y="150">748</text>
    <text x="672" y="146" fill="#dc2626" font-weight="700">753</text>
  </g>
  <path d="M152,234 L152,242 L303,242 L303,234" fill="none" stroke="#2563eb" stroke-opacity=".55" stroke-width="1.4"/>
  <text class="er-t-b" x="227" y="256" text-anchor="middle" fill="#2563eb">Pandemic trough</text>
  <text class="er-t-b" x="385" y="36" text-anchor="middle" fill="#dc2626">Omicron-year peak ↓</text>
  <g class="er-t-sm" text-anchor="middle">
    <text x="70" y="280">2019</text><text x="175" y="280">2020</text><text x="280" y="280">2021</text>
    <text x="385" y="280">2022</text><text x="490" y="280">2023</text><text x="595" y="280">2024</text>
    <text x="700" y="280">2025</text>
  </g>
  <text class="er-t-sm" x="70" y="303">Unit: 10,000 visits</text>
  <text class="er-t-b" x="700" y="303" text-anchor="end" fill="#dc2626">2025 is 1.4% below 2019</text>
</svg>
<figcaption><b class="cap-f">Figure 1</b> | National hospital ED visits have not returned to pre-pandemic levels. The 2022 peak was Omicron, and it has been falling since; 2025's 7.53 million visits is 1.4% lower than 2019's 7.64 million.<br>Source: MOHW Department of Statistics, Annual Statistics of Medical Care Services of Medical Institutions (in Chinese), Tables 11 and 12.</figcaption>
</figure>

But break it down by age and the picture looks completely different. Using the MOHW Department of Statistics' ED visit data, 2019 vs. 2024[^9][^20]:

- **65 and over: 3.594 million → 4.156 million visits, up 15.7% (563,000 more visits)**
- Age 15–64: 7.082 million → 6.795 million visits, **down 4.1%**
- Age 0–14: 1.677 million → 1.594 million visits, **down 4.9%**
- Share of all ED visits that are 65 and over: **29.09% → 33.13%**

<figure class="er-chart">
<svg viewBox="0 0 720 250" role="img" aria-labelledby="cB-t">
  <title id="cB-t">Change in ED visits by age group, 2019 vs. 2024: only 65 and over increased</title>
  <line class="er-ax" x1="330" y1="30" x2="330" y2="205"/>
  <text class="er-t-sm" x="330" y="24" text-anchor="middle">0</text>
  <g class="er-t" text-anchor="end">
    <text x="150" y="62">65 and over</text><text x="150" y="122">Age 15–64</text><text x="150" y="182">Age 0–14</text>
  </g>
  <rect x="330" y="40" width="283" height="30" fill="#dc2626" rx="3"/>
  <rect x="256" y="100" width="74" height="30" fill="#64748b" rx="3"/>
  <rect x="242" y="160" width="88" height="30" fill="#64748b" rx="3"/>
  <text class="er-t-b" x="623" y="60" fill="#dc2626">+15.7%</text>
  <g class="er-t-b" text-anchor="end">
    <text x="246" y="120">−4.1%</text><text x="232" y="180">−4.9%</text>
  </g>
  <g class="er-t-sm">
    <text x="623" y="76">3.594M → 4.156M</text>
  </g>
  <g class="er-t-sm" text-anchor="end">
    <text x="246" y="136">7.082M → 6.795M</text><text x="232" y="196">1.677M → 1.594M</text>
  </g>
  <text class="er-t-sm" x="20" y="230">Change in ED visits, 2019 vs. 2024</text>
</svg>
<figcaption><b class="cap-f">Figure 2</b> | The "extra" ED patients are all elderly, and then some: ED volume among young adults and children actually shrank. The total didn't change, but the people inside it were swapped out.<br>Source: MOHW Department of Statistics open government data, ED Visit Statistics by Sex and Age (in Chinese).</figcaption>
</figure>

Put another way, the "extra" ED patients of these five years are all elderly, and then some. ED volume among young adults and children actually shrank. The ED's total volume didn't change, but the people inside it were swapped out.

The next question is even more important: are older people just going to the ED more readily?

**No.** The same dataset has an "ED visit rate per 100,000 population." Lay out each age group's rate from 2019 to 2024 and nearly all of them are flat or down:

<div class="cap cap-t"><b>Table 7</b> | Five-year change in ED visit rate per 100,000 population (2019 → 2024)</div>

| Age group | Male | Female |
| --- | ---: | ---: |
| 65–69 | −4.7% | −7.8% |
| 70–74 | −5.3% | −8.0% |
| 80–84 | −5.5% | −5.3% |
| 85 and over | +0.3% | −2.3% |
| **All ages combined** | **−1.1%** | **−0.3%** |

Nine of the ten cells are negative; the only positive one is men 85 and over at +0.3%, small enough to call flat[^10].

People in every age group aren't going to the ED any more often; if anything, slightly less. The ED has more old people purely because **there are more old people**. When you get down to it, it's a multiplication:

<figure class="er-chart">
<img src="/images/erlife-post-6-formula.webp" width="1536" height="1024" alt="Formula: ED visits = how many people are in this age group × how many times each person comes on average. The first term got bigger; the second held flat or fell slightly." loading="lazy">
<figcaption><b class="cap-f">Figure 3</b> | ED visits are the product of two things. The second term (how many times each person comes on average) held flat or even fell slightly over these five years; yet total visits are still growing, so the thing that got bigger can only be the first term.<br>Source: MOHW Department of Statistics open government data, ED Visit Statistics and ED Visit Rate Statistics (in Chinese); calculations by the author.</figcaption>
</figure>

The extra patients didn't grow out of behavior; they grew out of the population. At the end of 2025, Taiwan's population aged 65 and over reached 4,673,155, 20.06% of the total, officially making it a super-aged society[^11].

The reason this is so deadly is that the ED visit rate has a very steep age gradient[^10]:

- Men aged 40–44: 13,355 visits per 100,000 population
- Men aged 65–69: 19,085 visits
- **Men 85 and over: 50,718 visits, 3.8 times the 40-something group**

So when the population structure shifts older, ED load grows on its own even if nobody's behavior changes at all. This isn't a care-seeking-habit problem, and it won't be turned around by patient education or copayment adjustments.

And "visits" badly understates the actual workload. An 85-year-old with multiple comorbidities, on anticoagulants, who can't give a clear history, and a 30-year-old with gastroenteritis are both "1 visit" in the statistics. But the time, the tests, the phone calls, and the risk the first one takes are several times the second. And they're more likely to need admission, which runs them straight into the next wall.

I think this is also why summer isn't slow anymore. The ED's traditional high and low seasons were propped up by infections: influenza, enterovirus, rotavirus. Those are diseases of kids and young people, clearly seasonal, so summer naturally eased off. But elderly multimorbidity has no off-season. When the core of the ED shifted from "seasonal infections" to "elderly multimorbidity," those months where we used to catch our breath got filled in. (This paragraph is my explanation inferred from age structure; MOHW's public statistics are annual only, with no monthly data to verify it directly.)

There was another claim I assumed would hold up and didn't once I checked: **that fewer hospitals offer emergency care, so the remaining ones are more crowded.** The total number of hospitals nationwide is indeed falling: 480 in 2019, 460 in 2025, down 20 in six years[^8]. But the group actually taking emergency patients, the **emergency-responsibility hospitals** designated and monitored by MOHW, has barely moved in six years: 205 in 2020, 206 in 2022, 206 in 2024, 205 in 2025[^12]. The 20 hospitals that disappeared did not show up in the count of emergency-responsibility hospitals. **So ED crowding can't be blamed on "fewer hospitals."**

The only thing moving is the tier structure: advanced-level emergency-responsibility hospitals went from 46 in 2020 to 53 in 2025, while general-level ones fell from 84 to 77[^12]. Hospitals didn't decrease, but responsibility for critical patients is concentrating upward.

At this point someone is bound to ask: elderly ED visits up 15.7% in five years: is that because older people "need the ED more," or simply because "there are more older people"? These two have completely different policy implications, so I broke it down and ran it.

ED visits can be split into three multipliers: **visits = population × prevalence (share of the population who visited the ED at least once in a year) × visit frequency (average visits per patient)**. The "ED visit rate per 100,000 population" that MOHW publishes uses deduplicated heads, not visits, as its numerator. Using it to back-calculate the total population, I got 23.6 million, which matches Taiwan's actual population exactly, confirming that definition[^13].

Age 65 and over, 2019 vs. 2024[^9][^10][^13]:

- Population: 3.520 million → 4.393 million, **+24.8%**
- Prevalence: 27.10% → 25.52%, **−5.8%**
- Visit frequency: 3.77 → 3.71 visits, **−1.6%**
- Resulting ED visits: 3.594 million → 4.156 million, **+15.7%**

<figure class="er-chart">
<svg viewBox="0 0 720 360" role="img" aria-labelledby="cC-t">
  <title id="cC-t">Three-factor decomposition waterfall chart of ED visits, age 65 and over</title>
  <g class="er-g">
    <line x1="70" y1="280" x2="700" y2="280"/><line x1="70" y1="220" x2="700" y2="220"/>
    <line x1="70" y1="160" x2="700" y2="160"/><line x1="70" y1="100" x2="700" y2="100"/>
    <line x1="70" y1="40" x2="700" y2="40"/>
  </g>
  <g class="er-t-sm" text-anchor="end">
    <text x="62" y="284">90</text><text x="62" y="24">Index</text><text x="62" y="224">100</text><text x="62" y="164">110</text>
    <text x="62" y="104">120</text><text x="62" y="44">130</text>
  </g>
  <rect x="104" y="220" width="76" height="60" fill="#64748b" rx="2"/>
  <rect x="228" y="71.2" width="76" height="148.8" fill="#dc2626" rx="2"/>
  <rect x="352" y="71.2" width="76" height="43.4" fill="#059669" rx="2"/>
  <rect x="476" y="114.6" width="76" height="11.3" fill="#059669" rx="2"/>
  <rect x="600" y="125.9" width="76" height="154.1" fill="#1d4ed8" rx="2"/>
  <g stroke="currentColor" stroke-opacity=".45" stroke-dasharray="4 3">
    <line x1="180" y1="220" x2="228" y2="220"/><line x1="304" y1="71.2" x2="352" y2="71.2"/>
    <line x1="428" y1="114.6" x2="476" y2="114.6"/><line x1="552" y1="125.9" x2="600" y2="125.9"/>
  </g>
  <g class="er-t-b" text-anchor="middle">
    <text x="142" y="212">100</text>
    <text class="er-t-sm" x="142" y="196">2019 = 100</text>
    <text x="266" y="63" fill="#dc2626">+24.8%</text>
    <text x="390" y="63" fill="#059669">−5.8%</text>
    <text x="514" y="106" fill="#059669">−1.6%</text>
    <text x="638" y="117" fill="#1d4ed8">115.7</text>
    <text class="er-t-sm" x="638" y="133" fill="#1d4ed8">= +15.7%</text>
  </g>
  <g class="er-t" text-anchor="middle">
    <text x="142" y="302">2019 baseline</text><text x="266" y="302">Population</text>
    <text x="390" y="302">Prevalence</text><text x="514" y="302">Visit frequency</text><text x="638" y="302">2024 visits</text>
  </g>
  <g class="er-t-sm" text-anchor="middle">
    <text x="266" y="318">3.520M→4.393M people</text><text x="390" y="318">27.10%→25.52%</text>
    <text x="514" y="318">3.77→3.71 visits</text><text x="638" y="318">3.594M→4.156M</text>
  </g>
  <g transform="translate(70,332)">
    <text class="er-t-sm" x="0" y="0">How to read: 2019 = 100; the middle three bars add or subtract in turn and land at 115.7, i.e., 15.7% above 2019.</text>
    <rect x="0" y="9" width="15" height="9" fill="#dc2626" rx="1"/><text class="er-t-sm" x="20" y="17">Pushing up</text>
    <rect x="112" y="9" width="15" height="9" fill="#059669" rx="1"/><text class="er-t-sm" x="132" y="17">Pushing down</text>
    <rect x="224" y="9" width="15" height="9" fill="#1d4ed8" rx="1"/><text class="er-t-sm" x="244" y="17">Net result</text>
  </g>
</svg>
<figcaption><b class="cap-f">Figure 4</b> | <strong>This is a "waterfall chart," used to break one total change into several forces that partly cancel each other out.</strong> To read it, set 2019 as 100; each bar in the middle starts from the top of the previous one and adds or subtracts, ending at the endpoint on the right, 115.7: <strong>this is an index, not a percentage; 115.7 means "15.7% more than 2019."</strong> The red bar is how much the population structure pushed up on its own; the two green bars are how much public behavior pushed it back down. <strong>Population alone would have pushed elderly ED volume up 24.8%; it was only because the share of older people visiting the ED and how often they came both fell that it was pressed back to +15.7%.</strong><br>Source: MOHW Department of Statistics, ED Visit Statistics, ED Visit Rate Statistics, and ED Patient Count Statistics (in Chinese); three-factor decomposition calculated by the author.</figcaption>
</figure>

In other words, **the population structure would have pushed elderly ED volume up 24.8%; it was only because the share of older people visiting the ED and how often they came both fell that it was pressed back down to 15.7%.** If older people's care-seeking behavior hadn't changed at all over these five years, elderly ED volume in 2024 would have been another 330,000 visits higher than it actually was.

This result is worth pausing on. What it means is: **the ED got busier not because older people became more eager to go to the ED, but because there are more older people.** The blame doesn't lie with the public's care-seeking behavior; if anything, public behavior moved a bit toward "more restraint."

As an aside, the kids are even more counterintuitive: ED visits for ages 0–14 fell 4.9%, but broken down, the population dropped 8.6% (low birth rate), while how often each child goes to the ED actually **rose** 3.5%[^9][^13]. Per-child pediatric ED use is going up; the denominator is just shrinking faster.

**So what about the claim that "everyone rushes to the ED for every little thing"?** That was another assumption I thought would hold, and the official data points the opposite way.

A formal November 2024 document from MOHW's National Health Insurance Committee put it bluntly: at every hospital level, the share of low-acuity ED cases (triage levels 4–5) was lower than before the pandemic (2019, ROC 108). Shih Chung-liang, then Director-General of the National Health Insurance Administration (NHIA), gave the declines as 2.27% to 6.43%[^14]. The share of low-acuity cases didn't rise; it fell.

The real problem is hidden in triage level 3. The ED triage distribution at medical centers nationwide is roughly: level 1 3.47%, level 2 17.4%, **level 3 64.95%**, level 4 12.94%, level 5 1.24%[^15]. Level 3 alone takes up two-thirds. That's the "urgent but not emergent" group, and it's exactly the level where elderly multimorbidity is most concentrated. These patients don't come and go quickly; they need labs, imaging, consults, and a high proportion of them end up needing admission.

So you get this contradictory picture: low-acuity patients are being kept out, yet the ED is more jammed. The government's own indicators make it very clear: **patients aren't failing to get in; they're failing to get out**[^16][^14].

<figure class="er-chart">
<svg viewBox="0 0 720 352" role="img" aria-labelledby="cE-t">
  <title id="cE-t">Two official indicators of ED exit block: the share staying over 24 hours is rising, and the share of triage level 1–3 patients admitted to a ward within 8 hours is falling</title>
  <g class="er-t-b" text-anchor="middle">
    <text x="200" y="22" fill="#dc2626">More people can't get out</text>
    <text x="570" y="22" fill="#dc2626">Those getting in are slower</text>
  </g>
  <g class="er-t-sm" text-anchor="middle">
    <text x="200" y="38">Share staying in the ED over 24 hours</text>
    <text x="570" y="38">Triage 1–3 admitted to a ward within 8 hours</text>
  </g>
  <g class="er-g">
    <line x1="60" y1="270.0" x2="345" y2="270.0"/>
    <line x1="60" y1="196.7" x2="345" y2="196.7"/>
    <line x1="60" y1="123.3" x2="345" y2="123.3"/>
    <line x1="60" y1="50.0" x2="345" y2="50.0"/>
  </g>
  <g class="er-t-sm" text-anchor="end">
    <text x="52" y="274.0">0%</text>
    <text x="52" y="200.7">3%</text>
    <text x="52" y="127.3">6%</text>
    <text x="52" y="54.0">9%</text>
  </g>
  <g class="er-g">
    <line x1="415" y1="270.0" x2="700" y2="270.0"/>
    <line x1="415" y1="196.7" x2="700" y2="196.7"/>
    <line x1="415" y1="123.3" x2="700" y2="123.3"/>
    <line x1="415" y1="50.0" x2="700" y2="50.0"/>
  </g>
  <g class="er-t-sm" text-anchor="end">
    <text x="407" y="274.0">54%</text>
    <text x="407" y="200.7">57%</text>
    <text x="407" y="127.3">60%</text>
    <text x="407" y="54.0">63%</text>
  </g>
  <line class="er-ax" x1="60" y1="270" x2="345" y2="270"/>
  <line class="er-ax" x1="415" y1="270" x2="700" y2="270"/>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linejoin="round" points="100,94.5 200,81.0 300,79.1"/>
  <polyline fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round" points="100,188.8 200,180.0 300,178.3"/>
  <g fill="#dc2626"><circle cx="100" cy="94.5" r="4"/><circle cx="200" cy="81.0" r="4"/><circle cx="300" cy="79.1" r="4"/></g>
  <g fill="#2563eb"><circle cx="100" cy="188.8" r="4"/><circle cx="200" cy="180.0" r="4"/><circle cx="300" cy="178.3" r="4"/></g>
  <g class="er-t" text-anchor="middle" fill="#dc2626"><text x="100" y="84.5">7.18</text><text x="200" y="71.0">7.73</text><text x="300" y="69.1">7.81</text></g>
  <g class="er-t" text-anchor="middle" fill="#2563eb"><text x="100" y="178.8">3.32</text><text x="200" y="170.0">3.68</text><text x="300" y="168.3">3.75</text></g>
  <text class="er-t-sm" x="312" y="83.0" text-anchor="start" fill="#dc2626">Med. centers</text>
  <text class="er-t-sm" x="312" y="182.0" text-anchor="start" fill="#2563eb">National</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linejoin="round" points="450,76.9 530,108.7 610,135.6 690,214.0"/>
  <g fill="#dc2626"><circle cx="450" cy="76.9" r="4"/><circle cx="530" cy="108.7" r="4"/><circle cx="610" cy="135.6" r="4"/><circle cx="690" cy="214.0" r="4"/></g>
  <g class="er-t" text-anchor="middle" fill="#dc2626"><text x="450" y="66.9">61.9</text><text x="530" y="98.7">60.6</text><text x="610" y="125.6">59.5</text><text x="688" y="204.0" text-anchor="end">56.29</text></g>
  <g class="er-t-sm" text-anchor="middle">
    <text x="100" y="288">2023</text>
    <text x="200" y="288">2024</text>
    <text x="300" y="288">2025 Q1</text>
    <text x="450" y="288">2022</text>
    <text x="530" y="288">2023</text>
    <text x="610" y="288">2024</text>
    <text x="690" y="288">2025 Q1</text>
  </g>
  <g transform="translate(60,312)">
    <rect x="0" y="-12" width="640" height="30" fill="#dc2626" fill-opacity=".07" rx="4"/>
    <text class="er-t" x="12" y="8">A third number: in H1 2024, <tspan font-weight="700">critical-patient ED stays at medical centers and regional hospitals ran nearly 1 hour longer than H2 2023</tspan>.</text>
  </g>
</svg>
<figcaption><b class="cap-f">Figure 5</b> | The government's own two indicators point the same way. On the left, "people who should leave can't": the share staying in the ED over 24 hours keeps climbing, and medical centers have consistently been more than double the national figure. On the right, "people who should go upstairs can't": the share of triage level 1–3 patients moved to a ward within 8 hours has fallen four years running, <strong>dropping 3.2 percentage points in Q1 2025 alone</strong>, the biggest drop in four years.<br>Source: National Audit Office, A Preliminary Review of the Effectiveness of Tiered Care, Health Workforce Retention, and ED Crowding Mitigation in Recent Years (in Chinese), 2025 (ROC 114) (citing the NHIA DA system); boarding time from the minutes of the November 2024 meeting of MOHW's National Health Insurance Committee.</figcaption>
</figure>

Here's the thing that says it best: in July 2023, the ED copayment at medical centers went up from NT$450 to NT$750, and at regional hospitals from NT$300 to NT$400, with the explicit goal of pushing people out to primary care. And the result? **In 2024, ED cases at medical centers went up, not down**, from 1,818,785 to 1,913,390, and their share of all hospital ED cases actually rose from 24.32% to 26.28%. That's from the National Audit Office's report[^16].

So the "use price to push patients away" approach has already been proven ineffective by the government's own data. The reason isn't hard to figure out: the people who really need to come to a medical center won't stay away over an extra NT$300; and the people who would be scared off by NT$300 were never the ones clogging the ED in the first place.

Academics have seen this shift from another angle too.

The key isn't how many people "came to" the ED, but how much work the ED "has to handle." And in recent years, those two things have completely decoupled.

Professor 韓幸紋 of the public finance and tax administration department at National Taipei University of Business, analyzing ED crowding, points out that ED load shouldn't be measured by visits alone, but by "ED points"[^17]. Let me be clear about what points are: they're the total a hospital bills after pricing every single thing done during an ED visit item by item under the NHI (Taiwan's National Health Insurance) fee schedule: the consultation fee, blood tests, X-rays and CT scans, procedures, drugs, and the bed and nursing fees for an observation bed each carry their own points; at one point to one NT dollar, ED points equal ED medical expenditure. For the same patient, one more CT, one more set of labs, one more day on an observation bed, and the points stack up. **So it measures "how much was done," not "how many people came."** <!-- keep-zh -->

I downloaded the ED tables from MOHW's *National Health Insurance Medical Statistics Annual Report* across the years and ran them myself. The advantage is that visits and points are in the same table, so there's no need to compare across datasets. **From 2019 to 2024, national ED visits rose only 1.6%, but NHI points billed for the ED rose 19.7%; per visit, that went from 1,962 points to 2,312 points, up nearly 18%**[^18]. The same person walks into the ED, and we have to do nearly 20% more: one more set of labs, one more CT, one more day in observation, layer upon layer. That's exactly what the older, sicker patients described above produce. (One limitation I should state up front: points get pushed up by increases in the NHI fee schedule, and the ED consultation fee has been raised several times in recent years, so part of that 19.7% is price, not volume.)

<figure class="er-chart">
<svg viewBox="0 0 720 350" role="img" aria-labelledby="cD-t">
  <title id="cD-t">Indexed comparison of ED visits and ED NHI points, 2019 = 100</title>
  <g class="er-g">
    <line x1="70" y1="269.6" x2="700" y2="269.6"/><line x1="70" y1="217.4" x2="700" y2="217.4"/>
    <line x1="70" y1="113" x2="700" y2="113"/><line x1="70" y1="60.9" x2="700" y2="60.9"/>
  </g>
  <line x1="70" y1="165.2" x2="700" y2="165.2" stroke="currentColor" stroke-opacity=".45"/>
  <g class="er-t-sm" text-anchor="end">
    <text x="62" y="273">80</text><text x="62" y="221">90</text><text x="62" y="169">100</text>
    <text x="62" y="117">110</text><text x="62" y="65">120</text>
  </g>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" stroke-linejoin="round"
    points="70,165.2 196,213.7 322,205.4 448,162.6 574,81.2 700,62.4"/>
  <polyline fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="6 4" stroke-linejoin="round"
    points="70,165.2 196,142.3 322,94.3 448,124.5 574,92.2 700,72.4"/>
  <polyline fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"
    points="70,165.2 196,233.6 322,263.3 448,200.7 574,155.8 700,156.9"/>
  <g>
    <circle cx="700" cy="62.4" r="5" fill="#dc2626"/><circle cx="700" cy="72.4" r="4.5" fill="#d97706"/>
    <circle cx="700" cy="156.9" r="5" fill="#2563eb"/><circle cx="70" cy="165.2" r="4.5" fill="currentColor"/>
  </g>
  <g class="er-t-b">
    <text x="688" y="52" text-anchor="end" fill="#dc2626">ED points 119.7</text>
    <text x="688" y="90" text-anchor="end" fill="#d97706">Points per visit 117.8</text>
    <text x="688" y="177" text-anchor="end" fill="#2563eb">ED visits 101.6</text>
  </g>
  <g class="er-t-sm" text-anchor="middle">
    <text x="70" y="295">2019</text><text x="196" y="295">2020</text><text x="322" y="295">2021</text>
    <text x="448" y="295">2022</text><text x="574" y="295">2023</text><text x="700" y="295">2024</text>
  </g>
  <text class="er-t-sm" x="70" y="318">Index: 2019 = 100</text>
  <text class="er-t-b" x="700" y="318" text-anchor="end" fill="#dc2626">Visits +1.6%   Points +19.7%</text>
</svg>
<figcaption><b class="cap-f">Figure 6</b> | Over the same period, the number of people coming barely changed (the blue line ends at 101.6), but the work that had to be done on them grew by nearly 20% (red line 119.7, points per visit 117.8). This is what it looks like when "how many people came" decouples from "how much work there is."<br>Source: MOHW Department of Statistics, National Health Insurance Medical Statistics Annual Report (in Chinese), 2016–2024 (ROC 105–113), statistical section "IX. ED Visit Statistics," Tables 7 and 13; downloaded and recalculated by the author.</figcaption>
</figure>

The same analysis has two more numbers worth remembering: the share of ED patients staying over 24 hours was roughly 2.32%–2.75% before the pandemic, and hit a record high in H1 2024, a full percentage point higher; and the number of acute general beds nationwide in 2023 saw its **first-ever decline**: 182 fewer beds in the Northern region, 152 fewer in the Central region, 171 fewer in Kaohsiung-Pingtung[^17].

Why would beds decrease? Because the nurses left, and the beds can't be opened.

This is the domino chain everyone knows about but that's very hard to change:

<figure class="er-chart">
<img src="/images/erlife-post-6-domino.webp" width="1693" height="929" alt="Seven dominoes falling in order: nurses quit, wards close beds, patients can't get admitted, everyone piles up in ED observation, ED doctors and nurses have to care for a group of patients who should be on the wards, working conditions keep deteriorating, the next person leaves, and then it all starts over again." loading="lazy">
<figcaption><b class="cap-f">Figure 7</b> | Each domino in this chain can knock over the next, and the last one knocks over the first. <strong>It's not a line; it's a loop.</strong> So putting money into just one segment of the chain (for example, giving raises only to ED physicians) won't stop the dominoes from falling; to stop it, you have to stand the fallen ones back up.</figcaption>
</figure>

What does this domino chain look like in my own ED? Apart from the head nurse and the assistant head nurse, the most senior of everyone else is probably not even 30. Those are the only ones who stayed. For an ED nurse to run triage, CPR, intubation, and mass casualties smoothly, what it takes is years ground in by patients, and a few classes can't make that up. **When a unit's seniority is down to two people holding it up, every person who leaves takes with them things that can't be handed off.**

And ED nurses sit at the very end of this chain, yet they **aren't covered by the three-shift nurse-to-patient ratio rules**. On the wards, one nurse caring for 6 patients is protected by regulation; an ED nurse looking after 20 to 30 alone is not. TSEM's 2024 survey showed that more than 40% of hospitals saw ED nursing staff decrease, with medical centers losing an average of 6.6 nurses each[^3]. MOHW's latest figures show that from January to July 2026, the number of practicing nurses in Taiwan fell by another 827[^19].

That leaves one last piece of the puzzle: **can these older, sicker patients actually get admitted in the end?**

---

> **[Part 2 | Patients can't get admitted, and money can't buy people back](/post/erlife-post-7/)** — Why do patients who need admission get stuck in the ED? The 48-hour boarding rate, the blind spots in official indicators, and why this year and a half of pay raises hasn't stopped the bleeding.

---

## References

[^1]: United Daily News, [Health Sustainability Champions / Far Eastern Memorial Hospital's five strategies to retain talent; staff turnover falls] (in Chinese), reporter 李樹人, September 6, 2025. <https://udn.com/news/story/7266/8986699> <!-- keep-zh -->

[^2]: Business Today / Commercial Times, [Mass exodus of ED physicians! From retreating off the front line to starting clinics] (in Chinese), reporter 馬揚異, November 1, 2025 (the article containing the double-counted 139). <https://www.ctee.com.tw/news/20251101700018-430104> <!-- keep-zh -->

[^3]: Taiwan Society of Emergency Medicine, *2024 (ROC 113) Survey Report on the Practice Status of Emergency Medicine Specialists* (in Chinese), August 6, 2024. <https://www.sem.org.tw/News/11/Details/1263>

[^4]: Taiwan Society of Emergency Medicine, *2023 (ROC 112) Survey Report on the Practice Status of Emergency Medicine Specialists* (in Chinese), August 9, 2023. <https://www.sem.org.tw/News/11/Details/1071>

[^5]: Taiwan Society of Emergency Medicine, *2025 (ROC 114) Survey Results on the Practice Registration Status of Emergency Medicine Specialists* (in Chinese), November 7, 2025 (survey period April 30–May 9, 2025). <https://www.sem.org.tw/News/11/Details/1495>

[^6]: 蔡杰勳, [Booming in Aggregate, Unbalanced in Structure: The Workforce Vacuum in Taiwan's Healthcare Seen Through the 'Big Five Empty' Crisis] (in Chinese), 2025 Win the PRIDE competition essay, School of Medicine, National Yang Ming Chiao Tung University. (The three rows for 2020–2022 in the table are cited secondhand from this essay and were not checked one by one against TSEM's original reports; this essay's figures for 2023 and 2024 match the original reports exactly.) <!-- keep-zh -->

[^7]: *The Reporter*, ['When are you leaving for a clinic?' With no end to ED crowding, physician 'burnout' sparks an exodus] (in Chinese), December 18, 2024. <https://www.twreporter.org/a/health-emergency-overcrowding-in-emergency-department>

[^8]: MOHW Department of Statistics, *Annual Statistics of Medical Care Services of Medical Institutions, 2025 (ROC 114)* (in Chinese), Table 11 "Hospital medical service volume over the years" and Table 12 "Average daily hospital medical service volume over the years," plus *Medical Care Services of Medical Institutions: County/City and Township Tables*, 2023–2025 (ROC 112–114). <https://dep.mohw.gov.tw/DOS/lp-5099-113.html>

[^9]: MOHW Department of Statistics open government data, *3. ED Visit Statistics by Sex and Age* (in Chinese) (2016–2024, ROC 105–113). <https://dep.mohw.gov.tw/DOS/cp-6600-74522-113.html>

[^10]: MOHW Department of Statistics open government data, *1. ED Visit Rate Statistics by Sex and Age* (in Chinese) (2016–2024, ROC 105–113). <https://dep.mohw.gov.tw/DOS/cp-6600-74520-113.html>

[^11]: Central News Agency, [Taiwan officially became a super-aged society in 2025; newborns hit another record low] (in Chinese), January 9, 2026 (citing Ministry of the Interior population statistics). <https://www.cna.com.tw/news/ahel/202601090067.aspx>

[^12]: MOHW Department of Statistics, *Annual Statistics of Medical Care Services of Medical Institutions* (in Chinese), "Number of hospitals by emergency medical capability level and medical region" (Table 47 for 2020 (ROC 109) and 2022 (ROC 111), Table 47 for 2024 (ROC 113), Table 46 for 2025 (ROC 114)). Values were taken year by year from the original files of each annual report: 2020 (ROC 109) total 205 (advanced 46 / intermediate 75 / general 84), 2022 (ROC 111) 206 (46/77/83), 2024 (ROC 113) 206 (52/74/80), 2025 (ROC 114) 205 (53/75/77). This table counts emergency-responsibility hospitals that have been graded for emergency medical capability by MOHW, which is not the same population as the "national number of hospitals" (Table 12). <https://dep.mohw.gov.tw/DOS/lp-5099-113.html>

[^13]: MOHW Department of Statistics open government data, *2. ED Patient Count Statistics by Sex and Age* (in Chinese) (used to back-calculate population for the three-factor decomposition). <https://dep.mohw.gov.tw/DOS/cp-6600-74521-113.html> The three-factor decomposition (population / prevalence / visit frequency) was calculated by the author and is not an officially published analysis.

[^14]: MOHW National Health Insurance Committee, [NHI Committee members concerned about the results of the new copayment scheme after 1 year] (in Chinese), November 2024. <https://dep.mohw.gov.tw/NHIC/fp-4039-80487-116.html>

[^15]: *The Reporter*, [ED care is 'in resuscitation': who paralyzed the emergency room?] (in Chinese) (five-level triage distribution in medical center EDs, cited secondhand from MOHW statistics, year not specified; used to illustrate structural proportions and not suitable for year-to-year comparison). <https://www.twreporter.org/a/emergencyroom>

[^16]: National Audit Office, *A Preliminary Review of the Effectiveness of Tiered Care, Health Workforce Retention, and ED Crowding Mitigation in Recent Years* (in Chinese), 2025 (ROC 114) (medical center ED case counts, share staying over 24 hours, share of triage level 1–3 patients admitted to a ward in <8 hours, citing the NHIA DA system). <https://www.ly.gov.tw/Pages/ashx/File.ashx?FilePath=~/File/Attach/252810/File_19857052.pdf>

[^17]: 韓幸紋, [Is there a fix for ED crowding? The fundamental problem with the NHIA's 2025 improvement plan] (in Chinese), Opinion@CommonWealth, May 26, 2025. <https://opinion.cw.com.tw/blog/profile/545/article/16167> <!-- keep-zh -->

[^18]: MOHW Department of Statistics, *National Health Insurance Medical Statistics Annual Report* (in Chinese), 2016–2024 (ROC 105–113), statistical section "IX. ED Visit Statistics," Table 7 (ED visit statistics) and Table 13 (ED medical expenditure statistics). Downloaded and recalculated by the author. <https://dep.mohw.gov.tw/dos/lp-5103-113.html>

[^19]: United Daily News, [Nursing shortage: 20% raises, yet half a year later still 800 fewer] (in Chinese), August 2026 (MOHW statistics: practicing nurses decreased by 827 from January to July 2026). <https://udn.com/news/story/7266/9725810>

[^20]: The ED visit figures cited in this post come from two official statistics with different coverage, so their absolute values can't be divided across each other. The "total visits" in the previous section come from the hospital ED visits in Table 11 of the MOHW Department of Statistics' *Annual Statistics of Medical Care Services of Medical Institutions*: 7.64 million in 2019, 7.48 million in 2024, 7.53 million in 2025. The age-specific visits and shares in this section come from the Department's open government data, *ED Visit Statistics by Sex and Age*, which has a larger population: 2019 total 12,352,512 visits (of which 65 and over 3,593,511 visits, 29.09%), 2024 total 12,545,504 visits (of which 65 and over 4,156,451 visits, 33.13%). **The three age groups in this section add up to the latter's population, which does not equal the hospital ED visits in the previous section.** The two statistics reach the same conclusion on "whether total ED volume has increased": between 2019 and 2024, the former changed −2.1% and the latter +1.6%, both within ±2%. (Note also: this open dataset includes a "disease category" field; a single visit can map to multiple disease categories, and the sum across categories is about 1.95 times the total, so only rows where "disease category = total" can be used to count overall volume.) <https://dep.mohw.gov.tw/DOS/cp-6600-74522-113.html>

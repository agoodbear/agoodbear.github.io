---
title: "SpO2 Drops to 72%. Do You Carry the Kid Off the Mountain? A High-Altitude Medicine Lesson with 21 Junior-High Students on the Jiaming Lake Trail"
date: "2026-07-16"
description: "Team doc, 21 teens, 5 days at Jiaming Lake: SpO2 98%→84%, one hit 72%, fine. SpO2 can't diagnose/predict AMS: an alarm, not a thermometer. Plus physiology, HACE/HAPE/retina, acclimatization, meds, kit"
featured: false
draft: false
toc: true
thumbnail: "/images/erlife-post-5.jpg"
typora-copy-images-to: "../../static/images/ipic"
categories:
  - erlife
tags:
  - altitude sickness
  - Jiaming Lake
  - SpO2
  - Diamox
  - mountain medicine
  - expedition medicine
translated_from: "erlife-post-5.md"
translation_date: "2026-10-09"
---

<style>
/* Narrow and center portrait images; left-align long captions (site default is centered, and long centered lines are hard to read) */
.jmh-narrow{max-width:460px;margin:0 auto}
.article-body .md-img-row .md-img-col figcaption{text-align:left}
</style>

**SpO2 drops to 72%. Do you immediately carry the kid off the mountain?** On this Jiaming Lake trip, real data from 21 junior-high students gave me an answer that was **the exact opposite** of gut instinct.

I'm an ER doctor. On this Jiaming Lake trip, my role was team doctor: I carried a fingertip pulse oximeter/forehead thermometer and a stethoscope, a first-aid waist pack ([DS-R7 rescue waist pack](https://dsrescue.qdm.tw/product/product&product_id=53)), and a handheld first-aid case (DS-R1 model) (packed at the very bottom of my heavy pack), and walked 4 days and 3 nights with 25 junior-high students, sleeping as high as Jiaming Lake Cabin at 3,370 m. Of the 25 kids, 4 didn't go up the mountain; 21 actually made the climb.

On Day 1, in the lowlands at Chishang, we collected everyone's baseline SpO2. On the evening of Day 2, at Xiangyang Cabin, we collected SpO2/H.R once and asked about symptoms. On Day 3 we started climbing to Jiaming Lake Cabin, collecting readings once whenever someone had symptoms along the way and once on arrival at the cabin. Day 4 was a traverse to 9.3k, and Day 5 was the descent. Let's see what these results can teach us.

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-altitude-profile.jpg" alt="Jiaming Lake 5-day, 4-night itinerary: elevation profile" caption="Our route: Day1 Chishang, Day2 Xiangyang Cabin 2850m, Day3 the big climb to Jiaming Lake Cabin 3370m, Day4 rerouted to 9.3K because of weather, Day5 descent." >}}
{{< /imgrow >}}

I'll get to the story of the climb in a bit. There are three things we need to get straight first, or the later part about **SpO2 at 72% and the kid was fine** won't make sense.

### **Background 1: At altitude, SpO2 is supposed to drop**

First, let's bust a gut instinct: **a low SpO2 number doesn't necessarily mean you're sick.**

At sea level, healthy people's oxygen saturation (SpO₂) is almost always 96% or higher. But once you go up, the air gets thinner in oxygen, and SpO2 drops right along with it. **This is a normal physiological response, not your body breaking down.**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-team-vs-normal-spo2.png" alt="Altitude vs SpO2: this group of students vs typical climbers" caption="The blue line is the SpO2 range typical climbers should have at that altitude after gradual acclimatization; the red line is what we measured in our students on the day of the climb. On the climbing days (Xiangyang Cabin, Jiaming Lake Cabin), their SpO2 was lower than the general reference; on day four, after one more night at the same altitude, it came back up." >}}
{{< /imgrow >}}

How low can it go? Here's a more extreme reference point: scientists actually drew arterial blood from climbers on Everest. **At 8,400 m, on the way down right after the summit, the arterial oxygen tension was only 24.6 mmHg, which converts to an oxygen saturation of about 54%**[^grocott2009]. At sea level, a number like that would have had you intubated and resuscitated long ago, yet those climbers were still walking on their own.

**Oximeter SaO2 vs. arterial-blood PaO2**

Let's first separate two things that look alike but aren't the same. What we clip onto fingers on the mountain is SpO2 from a **pulse oximeter**: two beams of light through the fingertip and an algorithm that **estimates** your oxygen saturation. It's convenient, needs no blood draw, and lets you keep watching the trend. The 54% from Everest, on the other hand, is SaO2/PaO2 that the research team got by **actually drawing arterial blood and measuring it directly**, a lab-grade gold standard. When oxygenation is normal, the two numbers are about the same (the FDA clearance threshold for pulse oximeters is about 3%, and they're only validated in the 70–100% range; below 70% they aren't calibrated at all)[^luks2011]. But here's the key: once SpO2 drops below 80% (very common at altitude), pulse oximeters start losing accuracy, the error grows noticeably, and you can't fully trust individual readings (most high-altitude studies find they tend to **overestimate**, making you think things are safer than they are[^schiefer2021]; Luks & Swenson 2011 put it bluntly: "device accuracy declines with arterial oxygen saturations of less than 80%"[^luks2011]). So the oximeter on the mountain is plenty good for watching **the trend, whether someone is getting worse**, but what it gives you is an estimate, not a measured blood value. When the number is very low, don't take it at face value. The call still has to come back to the person and the symptoms.

One more point people often mix up: SaO2 and PaO2 both describe oxygen in arterial blood, but they measure two different things. PaO2 is the **pressure of oxygen** (in mmHg); SaO2 is the **percentage of hemoglobin saturated with oxygen** (%). The two are linked by an S-shaped curve called the **oxyhemoglobin dissociation curve**. In the low-oxygen part (PaO2 roughly 20–60 mmHg), the curve is steep: PaO2 only has to drop a little for SaO2 to fall a lot. Conversely, in the well-oxygenated part (high PaO2, SaO2 >90%), the curve flattens out, which is also why the oximeter can't really show a difference when you're **fully saturated**. High altitude pushes you onto the steepest part of that curve, so a small change in pressure makes saturation drop in a way you really notice.

### **Background 2: What does hypoxemia hit first?**

Since SpO2 is going to drop, what exactly are we afraid of? We're afraid of hypoxia actually injuring tissue. And the organs don't all go down at once. **There are three places that especially can't take hypoxia.**

**① The brain: the most sensitive one**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-hypoxia-brain.jpg" alt="How hypoxemia injures the brain: high-altitude cerebral edema (HACE)" caption="Hypoxia → cerebral vasodilation, increased blood flow → leakier blood-brain barrier, fluid leaks out → cerebral edema, rising intracranial pressure → headache, unsteady gait, confusion." >}}
{{< /imgrow >}}

The brain is only about 2% of body weight but uses about 20% of the body's oxygen, and it has almost no backup power. So when hypoxia hits, the brain is the first to complain: first a **severe headache**, and in severe cases **staggering, confusion, and drowsiness**. That's the potentially fatal **high-altitude cerebral edema (HACE)**.

**② The lungs: the one that fills with fluid**

<div class="jmh-narrow">

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-hypoxia-lung.jpg" alt="How hypoxemia injures the lungs: high-altitude pulmonary edema (HAPE)" caption="Hypoxia → pulmonary arterioles constrict, regional overperfusion → capillary pressure rises, fluid leaks into the alveoli → pulmonary edema → short of breath even at rest, cough, crackles on auscultation." >}}
{{< /imgrow >}}

</div>

Hypoxia at altitude makes the small pulmonary arteries **constrict**. Some regions get squeezed into overperfusion, capillary pressure goes up, and fluid leaks into the alveoli: **the lungs flood**. The most important warning sign is **being short of breath even at rest**, along with cough, blue lips and fingertips, and crackles on lung auscultation. This is **high-altitude pulmonary edema (HAPE)**.

**③ The eyes (retina): the one that bleeds, though you usually don't feel it**

<div class="jmh-narrow">

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-hypoxia-retina.jpg" alt="How hypoxemia affects the retina" caption="Hypoxia → retinal vessels dilate, permeability rises → pinpoint capillary hemorrhages. Most people feel nothing; a few get blurred vision." >}}
{{< /imgrow >}}

</div>

The retinal vessels also dilate and leak at altitude, causing **pinpoint retinal hemorrhages**. These usually only become common **above 5,000 m**, and the higher you go the more of them there are. In unacclimatized climbers, prevalence is about 70% at 4,900–7,600 m and jumps to 90% above 7,600 m[^wiedman1999] (our 3,370 m at Jiaming Lake really doesn't get there). The good news is that most people don't feel anything at all, and the hemorrhages slowly resolve back at low altitude; a few people get blurred vision or see dark spots. The reason it gets mentioned less than cerebral or pulmonary edema is exactly that it's mostly asymptomatic, self-limiting, and not fatal. It's more of a **warning sign** that the body is under hypoxic stress at altitude, not a life-threatening emergency.

Remember these three organs, and you'll soon see **what we're actually watching for when we check SpO2, listen to lungs, and watch whether someone walks steadily on the mountain.**

### **Background 3: Why do you have to go up slowly?**

The most effective prevention for altitude sickness isn't some miracle drug. It's **slowing your rate of ascent and giving your body time to acclimatize.**

The US CDC's *Yellow Book* is very specific about this[^cdc2026]:

The single most important rule for climbing high mountains is about how you increase your **sleeping altitude**: once you're sleeping above 3,000 m, each night's sleeping spot should be no more than 500 m higher than the night before; and for every additional 1,000 m you climb, add a full day where you stay put and don't go higher, letting your body acclimatize. In one sentence: better to take a few extra days going up slowly than to force your way too high in one day.

A concrete example makes it clear. Say you're sleeping at 3,000 m tonight. By this rule, tomorrow night you can sleep at most at 3,500 m (+500), and the night after at most 4,000. But if you want to push from 3,000 all the way to 5,000 (that's 2,000 m more), you need to add two rest days in between to let your body catch up, not grind it out in three days. That's also why proper high-altitude itineraries often **look slow**. That slowness is deliberately left there for your body to acclimatize.

Why be so fussy about it? Because the cost of **ascending fast and skipping acclimatization** is very real. One study compared them: **in people with a prior history of altitude sickness who ascended fast without pre-acclimatization, the day-one incidence of altitude sickness was as high as 58%; in those who went up slowly with pre-acclimatization, it was only 7%.** That's an 8-fold difference, actual numbers from a study of 827 climbers[^schneider2002]. **For people without that history, the same comparison was 31% vs 4%, again almost 8-fold.**

*Go up slowly*: those three words are the cheapest and most effective drug in high-altitude medicine.

That's enough background. Back to our kids.

### **How far did these kids' SpO2 drop?**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-chart1-trajectory.png" alt="Team SpO2/heart-rate trajectory by stage" caption="Team average: SpO2 fell from 98% at sea level all the way to 84% at Jiaming Lake Cabin, while heart rate rose from 90 to 112. The orange line is me." >}}
{{< /imgrow >}}

The numbers went down honestly: average SpO2 was 98% at low altitude, dropped to 86% at Xiangyang Cabin (2,850m), and at Jiaming Lake Cabin (3,370m) **the team average was only 84%**. Of the 21 kids who went up, **12 were below 85% and 3 were below 80%**.

Here I specifically pulled out the four fittest kids in the class (one girl, three boys) and looked at how their SpO2 and heart rate changed on their own. The result was interesting: top-tier fitness and all, their SpO2 kept falling just like everyone else's, and one of them even came down with altitude sickness; meanwhile the kid whose SpO2 dropped the lowest (down to 72% at one point) had almost no symptoms the whole way. Being fit did nothing at all to make them less hypoxic, and it didn't make them immune to altitude sickness either. This fits exactly with what I said earlier: in the mountains, fitness is **the capital that lets you push hard**, not **a protective charm**.

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-chart5-fitness4.png" alt="SpO2 and heart rate of the 4 fittest students" caption="" >}}
{{< /imgrow >}}

Heart rate went the other way and climbed: from about 90 beats per minute at low altitude to about 112 up high. That's the body working hard to compensate for hypoxia.

Seeing these numbers, you might get nervous: a bunch of kids with SpO2 down in the low 80s, and you're not going to do something about it right away?

That brings us to the most counterintuitive finding of the whole trip.

### **The counterintuitive core: the kid with the lowest SpO2 was the one who was fine**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-chart2-spo2-ams.png" alt="SpO2 vs altitude sickness: low SpO2 ≠ symptoms" caption="Red dots are kids who met the diagnosis of altitude sickness; blue dots are those who didn't. You can see that the kids with altitude sickness were not clustered at the low-SpO2 end. There is also one blue dot with a score of 3: this student scored 3 but had no headache, so it doesn't count as altitude sickness." >}}
{{< /imgrow >}}

On this trip we had one kid whose **SpO2 dropped as low as 72% at one point** (74% on day three, and even lower, 72%, on the morning of day four). That number is scary low. And the kid? Just a slight headache, completely normal activity, eating fine and sleeping fine. **It didn't count as altitude sickness at all.**

On the flip side, some kids whose SpO2 stayed around 80–85% did get altitude sickness.

I put each kid's **lowest SpO2 over the whole trip** next to their **altitude sickness score**, and the conclusion was clear:

**The kids with altitude sickness were not clustered in the lowest-SpO2 group. How high or low the SpO2 was didn't line up with whether they had symptoms.**

I wouldn't let it go, so I ran a few more possibilities:

**Could how much it dropped be more accurate than how low it got?** No. The kid with the biggest drop in SpO2 (down 27%) was precisely the one at 72% with no symptoms.

**Could the sea-level SpO2 tell you who's at risk?** No. Every kid's sea-level SpO2 was 96–99%, all the same, no way to tell them apart.

**Could it have to do with body weight, being heavier or thinner?** That didn't line up either.

**Absolute SpO2, change in SpO2, sea-level baseline, heart rate, body weight: not one of these objective numbers could tell me in advance who would get altitude sickness.**

This isn't a new discovery. It's actually an old principle that high-altitude medicine has known for a long time (altitude sickness is diagnosed by **symptoms**, and SpO2 has never been part of the diagnostic criteria: the 2018 Lake Louise score requires **headache of at least 1 point and a total of at least 3 points**, and there's no SpO2 item anywhere in it)[^lls2018]. But seeing such an extreme example with my own eyes, **72% and bouncing around full of energy**, still hit hard.

One line for everyone who leads groups: **don't let a low SpO2 number scare you out of your judgment, and don't ignore a kid saying they feel unwell just because the number looks okay.**

### **So what's the point of checking SpO2? It's an alarm, not a thermometer**

If SpO2 can't diagnose altitude sickness, then why was I measuring it all the time on the mountain?

Because its job isn't to **catch altitude sickness**. It's a **safety net**, watching for anyone heading toward the two deadly complications I mentioned earlier (pulmonary edema, HAPE; cerebral edema, HACE). I rely on three moves:

1. **Outliers**: one kid is clearly way lower than the rest of the team.
2. **Trend**: the same kid's SpO2 keeps going down and doesn't come back up.
3. **Red flags**: short of breath at rest, crackles in the lungs, unsteady gait, altered mental status.

**The number only means something when paired with these clinical findings; a single number on its own doesn't make a diagnosis.**

A real example: one night, a kid told me they were short of breath, felt like they couldn't get air lying flat, and were more comfortable sitting up. **Short of breath at rest + orthopnea**: that's exactly the warning sign for pulmonary edema, and I immediately grabbed my stethoscope and listened to their lungs. **No crackles.** My call was hyperventilation from nerves and breathing too fast, not pulmonary edema. I taught them to slow their breathing, and it resolved.

The two bedside yardsticks are simple: **suspect HAPE, listen for crackles; suspect HACE, have them walk a straight line heel-to-toe** (if they can't walk steadily, that's a danger sign). If either is the real thing, management for both is **immediate descent + oxygen**.

That's why on the mountain you keep watching SpO2, watching whether they're short of breath, watching whether they walk steadily. **The oximeter is an alarm, not a thermometer for altitude sickness.**

### **6 kids, all hit on the same day, and all while pushing up**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-chart4-onset.png" alt="Onset time of the 6 altitude sickness cases vs the onset window in the literature" caption="All 6 had onset on day three, the big climbing day, from early morning to evening, concentrated in the hours of active climbing." >}}
{{< /imgrow >}}

On this trip 6 kids in total met the criteria for altitude sickness, **all of them on day three**: the day of the big climb from Xiangyang Cabin to Jiaming Lake Cabin, with onsets one after another from early morning through evening.

The textbooks say altitude sickness usually starts showing up 6–12 hours after reaching altitude. But there's a key detail: **walking up yourself brings it on faster than being driven or taken up by cable car.** Because when you're walking, your body is working and using oxygen, and SpO2 drops harder.

Our group went up **on foot, carrying heavy packs**, and a few kids that day were so pumped they even climbed an extra peak, Mt. Xiangyang (Mt. Xiangyang is 3,603 m, higher than the 3,370 m Jiaming Lake Cabin where they'd sleep that night). So they didn't have to wait for the usual timeline in the literature of **symptoms starting 6–12 hours after reaching altitude**; **it hit them halfway up or right after arriving at the cabin**, which fits perfectly with the principle that active ascent speeds up onset.

In one sentence: **the harder you push, the faster altitude sickness finds you.**

### **The most counterintuitive lesson: the fit kids were actually more likely to get hit**

This was the observation that surprised me most on the whole trip.

The fittest few kids in the class had a **higher**, not lower, rate of altitude sickness; and they were exactly the ones I mentioned earlier who climbed the extra Mt. Xiangyang that day.

It sounds counterintuitive, but it points in exactly the same direction as the literature:

**Being fit won't protect you.** Large studies made it clear long ago that fitness training doesn't lower your risk of altitude sickness[^schneider2002][^cdc2026].

**Endurance athletes actually get hit earlier.** One study at 3,450 m (almost the same altitude as our Jiaming Lake Cabin) found that the day-one altitude sickness incidence was **42%** in fit endurance athletes, but only **11%** in untrained people[^sareban2020]. That said, the study had only 38 people, all men, and they went up passively by train; the difference also showed up only on day one and was gone by days two and three.

Why? I break it down into three layers myself:

**Physiologically**, whether you can adapt to altitude depends on whether your body automatically ramps up breathing when it's hypoxic. That **has nothing to do with** how fast you run or how strong you've trained.

**Behaviorally**, fit people dare to push: they carry more, climb faster, and are less willing to stop and rest, which in the moment pushes them into more hypoxia.

**Psychologically**, too much confidence makes it easy to ignore early discomfort and tough it out.

Of course, our numbers are small and this is only an observation; it can't be taken as conclusive. But the direction is clear: **in the mountains, being fit is not a protective charm, and sometimes it's actually a trap.**

### **The good news: spend one more night at the same altitude and the body really does acclimatize**

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-chart3-acclimatization.png" alt="Acclimatization overnight at the same altitude" caption="Days three and four were at almost the same altitude; the team's average lowest SpO2 rose from 84.6 to 86.1, with 10 of 17 kids going up. No descent, and the body was still acclimatizing." >}}
{{< /imgrow >}}

On days three and four we were at almost the same altitude (both about 3,370 m). You'd expect SpO2 to be about the same, but on day four the team's lowest SpO2 **actually went up on average**: of the 17 kids with paired data, **10 went up**.

What that means: **spend one more night at the same altitude, and even without going down, the body slowly acclimatizes and becomes less hypoxic.** This is exactly why going up slowly, as I said earlier, works: what the body needs is time.

### **Our medication strategy: symptom-driven, not everyone on drugs**

The preventive drug for altitude sickness is **Diamox**. On this trip I went **symptom-driven**: I didn't put the whole team on prophylaxis; instead I waited until symptoms appeared and met the criteria for altitude sickness, and only then gave a treatment dose. Of the 6 kids who got hit, 5 improved after getting a treatment dose. 1 was managed with close observation, and their symptoms also gradually improved as time went on.

I have to be very honest here: **this doesn't count as proof that the drug works.** Because while the drug was given, the body was also acclimatizing on its own and time was passing. How much of the improvement was the drug and how much was the body getting better by itself, you can't separate in this kind of field management; all you can say is **we gave the drug, and later they got better**.

That said, on Diamox I do have a <strong>same-person before-and-after comparison</strong> I can talk about: me.

About 20 years ago I climbed Jade Mountain (higher than Jiaming Lake), **took no preventive medication, and clearly got altitude sickness**: headache, no appetite, nausea, wanting to vomit, dizziness, the whole package. This time at Jiaming Lake, I **took a preventive dose of Diamox ahead of time and had zero symptoms the whole way**, and my lowest SpO2 only dropped to 81%.

Same person, same susceptibility, the difference was whether I took prophylaxis. Directionally, I personally am on Diamox's side. (But this is also just one person's story; Jade Mountain is higher than Jiaming Lake, which is a confounder to begin with, so it can't count as scientific evidence.)

One more thing: **having had altitude sickness before is one of the strongest risk factors**. I got it that time on Jade Mountain, so I was extra careful this time.

### **Pre-trip prep: a team doctor's medical kit**

A quick introduction to the basic items I carried.

Before we left, I referred to the medical supply list from Dr. Wei-Fong Kao, a leading altitude-sickness expert in the Taiwanese mountaineering world (medical advisor to Kang Chiao International School).

These are my own medical items:

{{< imgrow cols="3" gap="8" >}}
{{< imgcol src="/images/jiaminghu/med-kit-r1-open.jpg" alt="Contents of the opened DS-R1 handheld first-aid case" caption="" >}}
{{< imgcol src="/images/jiaminghu/med-kit-oximeter-thermometer.jpg" alt="Fingertip pulse oximeter and forehead thermometer" caption="" >}}
{{< imgcol src="/images/jiaminghu/med-kit-ams-meds.jpg" alt="Pre-packed altitude sickness medication bags labeled AMS" caption="" >}}
{{< /imgrow >}}

<div class="jmh-narrow">

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-kit-r7-belt.jpg" alt="DS-R7 personal first-aid waist pack" caption="DS-R7 personal first-aid waist pack" >}}
{{< /imgrow >}}

</div>

In the DS-R7 I keep the commonly used items: small scissors/small tweezers, alcohol swabs, 3M tape, adhesive bandages, self-adhesive elastic bandage, the AMS record notebook, oximeter, forehead thermometer, povidone-iodine, Neomycin, gauze, cotton swabs, several small packs of normal saline, and muscle-pain spray. Painkillers and AMS meds also go in this waist pack.

The DS-R1 is usually for resupply: at night, whatever I used from the waist pack during the day gets restocked from the DS-R1. It holds small bottles of normal saline, gauze, elastic bandages, cotton swabs, and other resupply items. URI/AGE meds and small syringes, plus the epinephrine and dexamethasone in ampules for emergencies, also go in here.

For the AMS notebook, I first put each student's seat number/name/body weight/baseline SpO2, printed it double-sided on half-sheets of A4, and stapled them together. The whole thing is small and fits nicely in the first-aid waist pack.

<div class="jmh-narrow">

{{< imgrow cols="1" gap="14" >}}
{{< imgcol src="/images/jiaminghu/med-ams-notebook.jpg" alt="AMS record notebook" caption="" >}}
{{< /imgrow >}}

</div>

Taking 25 kids up a high mountain, more drugs is not better. You bring **the right ones, and enough of them**. That's the core of my medical kit for this trip:

**The three key altitude sickness drugs (the real stars of this trip):**

**Diamox**: both prevention and treatment depend on it. I brought a whole strip, and still had to cut tablets into ¼ and ½ on the spot for kids of different body weights.

**Nifedipine**: the lifesaver if someone gets pulmonary edema (HAPE).

**Dexamethasone injection**: the lifesaver for cerebral edema (HACE) or severe illness. For injectables on this trip I brought only the two most essential: this one, plus **epinephrine** for anaphylaxis. The logic behind the trade-off is simple: what actually kills people on the mountain is HAPE, HACE, and anaphylaxis; everything else can be handled with oral meds + rapid descent.

**The rest is a condensed ED:** the most-used item was actually the least glamorous one, **painkiller tablets** (headache, fever, trauma all rely on them); then a full set of GI meds (bloating, diarrhea, nausea), allergy meds, a single oral antibiotic, topical ointments, plus motion-sickness pills (useful on the train and the mountain roads going up and down). For trauma I had gauze, elastic bandages, triangular bandages, and saline for wound irrigation.

**Two pieces of equipment that never left my side:** a fingertip pulse oximeter (plus a set of spare batteries) and a stethoscope, the two that saved the day again and again in the stories above. Plus a forehead thermometer.

**Oxygen:** I brought a lightweight Omax HV50 oxygen canister as an emergency backup, plus the cabin's own oxygen supply as further backup, more than enough to cover **the few minutes before descent**.

### **Wrap-up: the number is an alarm, not a thermometer**

4 days and 3 nights, 21 kids, no major incidents the whole way, everyone down the mountain safely.

If I had to boil down what I learned on this trip into one sentence, it would be:

**The oximeter on the mountain is a great alarm, but it's not a thermometer for altitude sickness.**

For altitude sickness you look at **symptoms**, you look at **behavior** (are they pushing too fast, climbing too much), you look at **the whole kid**, not at a number going up and down. A kid at 72% SpO2 was bouncing around full of energy, while a kid at 83% threw up. This trip drove that point home to the extreme.

Taking kids up high mountains, the four things that actually keep them alive are pretty plain: **go up slowly, drink plenty of water, don't tough it out when something feels off, and go down when it's time to go down.** Not one of them has anything to do with the number on the oximeter.

*This article shares personal experience and data from serving as a team doctor. It has been de-identified and does not constitute medical advice. For prevention and management of altitude sickness, rely on professional medical evaluation; if you're planning high-altitude activity, or have heart or lung disease, consult a doctor before you go.*

[^grocott2009]: Grocott MPW, Martin DS, Levett DZH, McMorrow R, Windsor J, Montgomery HE; Caudwell Xtreme Everest Research Group. Arterial blood gases and oxygen content in climbers on Mount Everest. *N Engl J Med* 2009;360(2):140-9. PMID 19129527. DOI: [10.1056/NEJMoa0801581](https://doi.org/10.1056/NEJMoa0801581) — Arterial blood drawn from 4 climbers at 8,400 m (the Balcony, while descending after the summit); measured PaO₂ averaged 24.6 mmHg; the SaO₂ of about 54% is a value calculated from PaO₂/pH (the paper states "All reported values for SaO₂ are calculated values"; this is because oximeters at the time were not calibrated below 70%).

[^luks2011]: Luks AM, Swenson ER. Pulse oximetry at high altitude. *High Alt Med Biol* 2011;12(2):109-19. PMID 21718156. DOI: [10.1089/ham.2011.0013](https://doi.org/10.1089/ham.2011.0013) — The paper states "device accuracy declines with arterial oxygen saturations of less than 80%". The FDA clearance threshold for fingertip pulse oximeters is A~RMS~ ≤3% (ear-clip ≤3.5%), and the validation range covers only SpO₂ 70–100%.

[^schiefer2021]: Schiefer LM, Treff G, Treff F, et al. Validity of peripheral oxygen saturation measurements with the Garmin Fēnix® 5X Plus wearable device at 4559 m. *Sensors* 2021;21(19):6363. DOI: [10.3390/s21196363](https://doi.org/10.3390/s21196363) — Compared against arterial blood gases at 4,559 m, the wearable overestimated SpO₂ by +7.0% (SaO₂ 75.0% vs SpO₂ 85.2%); in hypoxemia at high altitude, pulse oximeters generally tend to overestimate.

[^cdc2026]: Hackett PH, Shlim DR. High-Altitude Travel and Altitude Illness. In: *CDC Yellow Book 2026: Health Information for International Travel*. Atlanta: US Centers for Disease Control and Prevention. [Online version](https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html) (updated 2025-04-23) — Box 3.5.1 original text: "Once above 3,000 m (9,850 ft), move sleeping altitude by no more than 500 m (1,600 ft) per day and plan an extra day of acclimatization for every additional 1,000 m (3,300 ft) of sleeping altitude gain." The recommendation comes from the Wilderness Medical Society; the CDC also notes it may still be too fast or too slow for some people. It also states "Training and physical fitness do not affect risk."

[^schneider2002]: Schneider M, Bernasch D, Weymann J, Holle R, Bärtsch P. Acute mountain sickness: influence of susceptibility, preexposure, and ascent rate. *Med Sci Sports Exerc* 2002;34(12):1886-91. PMID 12471292. DOI: [10.1097/00005768-200212000-00005](https://doi.org/10.1097/00005768-200212000-00005) — n=827, at Capanna Margherita (4,559 m). In **susceptible** individuals (history of altitude sickness symptoms), incidence was 58% with rapid ascent and no pre-acclimatization vs 7% with slow ascent and pre-acclimatization; the corresponding figures in **non-susceptible** individuals were 31% and 4%. Pre-acclimatization was defined as >4 days above 3,000 m within the 2 months before the ascent; slow ascent was defined as an ascent taking >3 days. It also reports no significant effect of age, sex, training status, BMI, smoking, or alcohol.

[^sareban2020]: Sareban M, Schiefer LM, Macholz F, et al. Endurance athletes are at increased risk for early acute mountain sickness at 3450 m. *Med Sci Sports Exerc* 2020;52(5):1109-15. PMID 31876668. DOI: [10.1249/MSS.0000000000002232](https://doi.org/10.1249/MSS.0000000000002232) — n=38 unacclimatized men (19 endurance-trained, VO₂max 66±6, vs 19 untrained, 45±7), passive ascent by train to 3,450 m in about 2 hours. Day-1 AMS incidence 42% vs 11% (P<0.05); no difference between groups on days 2 and 3.

[^wiedman1999]: Wiedman M, Tabin GC. High-altitude retinopathy and altitude illness. *Ophthalmology* 1999;106(10):1924-6. PMID 10519586. DOI: [10.1016/S0161-6420(99)90402-5](https://doi.org/10.1016/S0161-6420(99)90402-5) — 3 Himalayan expeditions, 40 people in total. Among those ascending to 16,000–25,000 ft (4,877–7,620 m), 14/19 (74%) developed high-altitude retinopathy; among those ascending above 25,000 ft (7,620 m), 19/21 (90%). Small sample, and overall prevalence in the literature ranges from 0–79%, with differences driven by ascent profile and timing of examination (Barthelmes D, et al. *PLoS One* 2011;6(2):e11532 found most hemorrhages were only detected after descending back to base camp).

[^lls2018]: Roach RC, Hackett PH, Oelz O, et al.; Lake Louise AMS Score Consensus Committee. The 2018 Lake Louise Acute Mountain Sickness Score. *High Alt Med Biol* 2018;19(1):4-6. DOI: [10.1089/ham.2017.0164](https://doi.org/10.1089/ham.2017.0164) — Headache, GI symptoms, fatigue/weakness, and dizziness are each scored 0–3; diagnosing AMS requires **headache ≥1 point and a total score ≥3**, with headache being mandatory; the 2018 version removed the difficulty-sleeping item. Co-authors include Dr. Shih-hao Wang. (For current management recommendations, see also Luks AM, et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update. *Wilderness Environ Med* 2024;35(1_suppl):2S-19S. DOI: [10.1016/j.wem.2023.05.013](https://doi.org/10.1016/j.wem.2023.05.013))

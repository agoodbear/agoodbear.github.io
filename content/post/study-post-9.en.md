---
title: "The Sun Can Be Computed, the Clouds Can't: Using AI to Work Out Where to Stand to See the Sun Rise Over Guishan Island"
date: "2026-08-18T20:00:00+08:00"
description: "It started with someone else's photo of sunrise over Guishan Island. With AI, I turned where the sun will appear on the island into coordinates, a bearing and a time, then checked it on site on August 16."
featured: false
toc: true
thumbnail: "/images/guishan-sunrise/fig1-photo.jpg"
typora-copy-images-to: "../../static/images/guishan-sunrise"
translated_from: "study-post-9.md"
translation_date: "2026-10-09"
categories:
  - study
tags:
  - Guishan Island
  - Sunrise
  - Yilan
  - Zhuangwei
  - Claude Code
  - Photography
  - Drone
---

<style>
.gs-fig{margin:1.6em auto;max-width:620px;text-align:center}
.gs-fig img,.gs-fig video{width:100%;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15)}
.gs-fig figcaption{font-size:.9em;color:#777;margin-top:.5em;line-height:1.6}
.gs-wide{max-width:860px}
.article-body .gs-fig{margin-left:auto;margin-right:auto}
.gs-fig iframe{width:100%;border:0;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15);display:block}
.article-body .gs-lab{width:min(1400px,96vw);max-width:none;margin-left:50%;transform:translateX(-50%)}
.article-body .gs-pair{width:min(1180px,94vw);max-width:none;margin-left:50%;transform:translateX(-50%)}
.gs-tall{max-width:420px}
.video{max-width:900px;margin:1.9em auto;padding-bottom:0;height:auto;position:static}
.video iframe{width:100%;aspect-ratio:16/9;height:auto;display:block;position:static;border:0;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.15)}
.post-content blockquote{background:#fff8ec;border-left:4px solid #e8842b;padding:.9em 1.3em;border-radius:0 8px 8px 0;color:#2a2a2a}
</style>

It started with a photo I saw: the sun rising right out of Guishan Island.

My first thought was, where do you have to stand to get that shot? Guishan Island sits off the Yilan coast, so from any point on the shoreline it takes up a certain slice of sky, and the direction the sun rises changes every day. Getting those two to line up should be something you can calculate.

So I started working it out with AI. On August 16 I got up at 3:50 a.m., drove to the coast at Zhuangwei, and walked one kilometer to stand on a computed point.

The result: **the position was right, the time was right, the bearing was right, but a low band of cloud blocked it.**

This post is a record of the whole process.

## The Guishan Island Sunrise Pin on Google Maps Has the Sun Rising From the Turtle's Tail

At first I did the obvious thing: I searched Google Maps for the Guishan Island sunrise spot and went to the marked location. The coordinates were roughly:

```
24.816792, 121.822791
```

I gave AI those coordinates and asked which direction to look for tomorrow's sunrise. It came back with a bearing of 74.5 degrees, and then added something I hadn't expected. From this position, the sun does not rise out of the body of Guishan Island. It comes up at the far left end of the silhouette.

It drew me a diagram:

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/fig0-why-offset.jpg" alt="Looking out from Guishan Island Sunrise Beach, the sun comes up at the island's far left end, with the main peak 3.7 degrees to the right"><figcaption>The horizontal axis is the azimuth as seen from the observation point. The first light lands at the far left end of the island (the Turtle's Tail side), and the main peak, Hill 401, is 3.7 degrees to the right</figcaption></figure>


From that point, Guishan Island spans 73.5 to 81.6 degrees, a good eight degrees. The first light of the sun lands at 74.4 degrees, which is the low, flat Turtle's Tail end. The real main peak, Hill 401, is at 78.1 degrees, 3.7 degrees to the right of the sun.

3.7 degrees doesn't sound like much, but the solar disc is only 0.53 degrees wide. That is about seven suns side by side, and you can tell with the naked eye that it's off.

That's when I realized that "the sun rises out of Guishan Island" is not a place. It is a combination of position and date. Stand at a different point on the same day and the sun comes out from a different part of the island; stand at the same point on a different day and the same thing happens.

What I wanted was the sun sitting on the body of the island, not grazing past the edge of its tail. So the question became: where should I stand?

## That Whole Stretch Sits Right on the Edge of a No-Fly Zone

Before calculating the position, AI raised something I had not seen coming.

**This entire stretch of coast sits right against the boundary of RCR30, a restricted zone announced by the Civil Aeronautics Administration (CAA).** It is the airspace of the weapons test range of the Armaments Bureau's Specification Inspection and Testing Center, where remote-controlled drones are prohibited, with fines of NT$300,000 to NT$1,500,000 and confiscation of the aircraft.

I was planning to bring a drone that day.

The trouble is that the boundary is a diagonal line running north-northeast, from 24°48′N 121°49′E to 24°50′N 121°49′60″E. It does not run north-south, and it does not run east-west. So starting from the spot where I ended up standing:

| Heading | Distance before entering the no-fly zone |
|---|---|
| Due north | Not within 3 km |
| Due south | 250 m |
| Due east | 120 m |
| Southeast | 110 m |

The spot where I finally stood is 112 meters from the boundary, outside the zone. But another set of coordinates I had casually picked off the map at the start, only 250 meters further east, was already 13 meters inside.

You cannot tell this by eyeballing a map. AI pulled the CAA's official layer directly, then checked it again against polygon vertices it solved for itself, and only told me once the two paths agreed.

One more distinction: this restriction applies only to drones, not to people. Standing there with a camera is perfectly legal. It's the drone that can't take off. The two are often lumped together.

## Wrong Once: The Sun Is Not a Point

The first answer AI gave me was to walk south to a certain point, with first light at 05:32.

After one more round, it came back on its own and said it had gotten that wrong.

What went wrong? The first version treated the sun as a point. Once the point climbed to the same height as the summit, it counted as "risen."

But the sun is a **disc**, about half a degree across. What you see first is its **upper limb**, not its center. The upper limb sits 0.2665 degrees higher than the center, and that 0.2665 degrees is the whole difference.

<figure class="gs-fig gs-pair"><img src="/images/guishan-sunrise/fig-disc.jpg" alt="The same Guishan Island ridgeline, with the sun treated as a point versus as a disc: first light differs by 1 minute 11 seconds"><figcaption>Both panels show the real ridgeline of Guishan Island. On the left, the sun is treated as a point, so you wait until its center climbs as high as the main peak. The right is what actually happens: the upper limb of the disc touches the ridgeline first, and it touches a little to the left of the main peak</figcaption></figure>

The fix is to stop asking only whether the center of the sun has arrived. Instead, you spread out the whole disc and ask, for each small piece of it, how high the mountain directly in front of it is. If any piece clears the mountain in front of it, that moment is first light.

After the fix, first light came 1 minute 11 seconds earlier; and when I re-solved for the standing position with the new model, the point moved 37 meters south.

I find this more interesting than the answer itself. I didn't catch the mistake. It went back and checked its own work, and told me on its own that it had this part wrong.

## The Real Star Is the Terrain

Getting an accurate answer depends not on astronomy but on terrain.

An ordinary sunrise calculator gives you the sunrise azimuth at sea level. But as soon as something stands in the way to the east, that number is useless. The sun has to climb over the ridgeline before you can see it, and while it climbs, its azimuth keeps drifting to the right.

So AI pulled down the terrain of the entire island, computed from where I would stand how high the ridgeline is at every azimuth, and built a skyline profile, subtracting Earth's curvature and atmospheric refraction.

I switched terrain data once. At first it used the free ASTER 30-meter digital elevation model. The timing came out accurate enough, but when I overlaid the computed ridgeline on the photo it would not fit; the right-hand part was too low no matter what I adjusted. Only after switching to the Ministry of the Interior's 20-meter digital terrain model did I see the problem. ASTER reads the Turtle's Head as 160 meters, while the 20-meter data says 228 meters, a difference of nearly 70 meters. The shape itself was wrong, so no amount of shifting or rotating could make it fit. After the switch, first light moved by only 5 seconds, but the shape matched.

<figure class="gs-fig gs-pair"><img src="/images/guishan-sunrise/fig1-overlay.jpg" alt="Left: the original photo. Right: the same skyline computed from terrain data"><figcaption>On the left is the original photo from the morning of 8/16, untouched. The whole right panel was drawn by the algorithm from the Ministry of the Interior's 20-meter terrain data: the left slope, the main peak, the notch on the right, and finally the bump of the Turtle's Head all line up in shape. The orange circle is where the solar disc should be at 05:34; its upper limb just touches the main-peak ridgeline, which is the definition of first light.</figcaption></figure>

I made this image later, but I'm putting it here because it says the whole story.

With the terrain profile in hand, the next step is to solve backward: move along the coastline point by point and find the position where the first-light azimuth equals the main-peak azimuth. This is very sensitive. Guishan Island is almost fourteen kilometers away, and if I walk 150 meters along the coast, the distance it shifts in front of my eyes equals the width of one sun. So if I stand a few dozen meters off, the sun won't come up at the spot I want.

The final answer:

| | |
|---|---|
| Standing position | **24.809465, 121.820302** |
| From the original point | 983 meters south along the Binhai North Line bikeway |
| Direction to face | 75.0 degrees from true north (80.1 degrees magnetic on a phone compass) |
| Main peak | 13.87 km away, elevation angle 1.56 degrees |
| First light of the solar disc | **05:34:15** |
| Whole disc clear of the ridgeline | 05:36:32 |
| Tolerance | 50 meters either way along the bikeway |

Why that distance? It's really just junior-high circumference math. The main peak is 13.87 kilometers away, and at that distance every 242 meters you walk shifts it by 1 degree in front of you. Multiply by the angle you need to shift, then discount for the fact that the coastline is slanted, and you get 983 meters.

## The Point AI Gives You May Not Be Reachable

This was the part that took the most thought in practice.

What AI computes is a latitude and longitude, but that point may not be somewhere you can actually walk to. It might be in the water, on private land, or on the other side of a stream.

My approach was to treat the bearing, not the coordinates, as the reference. Once I had the coordinates, I used Google Maps to find a point on the shoreline along the same bearing, on the same line, that I could actually stand on, and used GPS navigation to get there. Being off by a few dozen meters is within tolerance.

Also, from where the car is parked to the actual shooting spot there is another walk of ten-odd minutes. You have to count that in when deciding what time to leave.

## The Morning of August 16

The alarm was set for 3:50.

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p01-alarm.jpg" alt="An alarm set for 3:50"><figcaption>3:50</figcaption></figure>

I parked next to the beach for the sunrise, put on a hiking headlamp, and walked down to the sand. It was really dark. There are no lights there, and I had no idea where I was supposed to be going.

<figure class="gs-fig"><video src="/videos/guishan-sunrise/01-walk-dark.mp4" poster="/images/guishan-sunrise/poster-01-walk-dark.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>04:43 Walking down to the beach, the headlamp the only light</figcaption></figure>

Before 5:00, light started to appear in the sky.

<figure class="gs-fig"><video src="/videos/guishan-sunrise/02-first-light.mp4" poster="/images/guishan-sunrise/poster-02-first-light.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>04:49 The seaside before 5 a.m. Wow, the sky, the light already hitting it, it's so beautiful</figcaption></figure>

I reached the marked point after walking about a kilometer.

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p02-arrived.jpg" alt="The phone shows arrival at the marked point"><figcaption>04:55 Arrived</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p03-island-far.jpg" alt="Silhouette of Guishan Island before dawn"><figcaption>04:56 Guishan Island in the distance. 13.9 kilometers away, and perfectly clear</figcaption></figure>

Then I set up the gear. The 5D3 was on the tripod, and the one extending out to the side was the Insta360 X5 for a time-lapse. I had my phone in hand, and the drone was beside me.

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p04-rig.jpg" alt="Tripod, 5D3 and Insta360 on the beach"><figcaption>05:01 Everything set up. The backpack hangs under the tripod as a counterweight</figcaption></figure>

The color changes in the sky before sunrise are actually prettier than the sunrise itself. That's also why you should arrive early; this stretch alone is worth leaving time for.

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p05-dawn-colour.jpg" alt="Pink and purple sky before dawn"><figcaption>05:08</figcaption></figure>

<figure class="gs-fig"><video src="/videos/guishan-sunrise/03-so-beautiful.mp4" poster="/images/guishan-sunrise/poster-03-so-beautiful.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>05:09 It really is gorgeous</figcaption></figure>

The two brothers started shooting at the beach as well.

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/p06-two-sons.jpg" alt="Two children taking photos on the beach"><figcaption>05:14</figcaption></figure>

As the time got close, I opened the field sheet AI had made.

I've pulled out the most fun part of that page. You pick a location, drag the date, move north or south along the coastline, then drag the time, and the skyline and sun above move with you, while the right side tells you which part of the island the sun is coming out of at that moment. The full page is here: [Guishan Sunrise Field Sheet](https://claude.ai/code/artifact/119e7de7-3f67-47f7-9f6d-de4125920054).

<figure class="gs-fig gs-lab"><iframe id="gs-lab-frame" src="/tools/guishan-lab.html" title="Sunrise Azimuth Lab" loading="lazy" scrolling="no" style="height:940px"></iframe><figcaption>Try dragging it. All three points where you can walk onto the beach from Provincial Highway 2 are in there, and the Zhuangwei dunes one can't be made to work on any day of the year</figcaption></figure>

<script>(function(){var f=document.getElementById("gs-lab-frame");if(!f)return;function set(h){if(h>200)f.style.height=(h+8)+"px";}function fit(){try{set(f.contentDocument.documentElement.scrollHeight);}catch(e){}}window.addEventListener("message",function(e){var h=e.data&&e.data.gsLabHeight;if(h)set(h);});f.addEventListener("load",fit);window.addEventListener("resize",fit);setTimeout(fit,600);setTimeout(fit,2000);})();</script>

<figure class="gs-fig gs-tall"><video src="/videos/guishan-sunrise/04-fieldcard.mp4" poster="/images/guishan-sunrise/poster-04-fieldcard.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>05:33 The field sheet on my phone: standing coordinates, facing 75.0 degrees, first light 05:34:10, plus a computed skyline</figcaption></figure>

Standing on a dark beach, holding a page that tells you where to look, felt pretty strange.

## And Then That Band of Cloud Was Right There

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p07-0528.jpg" alt="Guishan Island at 05:28, with the glow sitting right above the main peak"><figcaption>05:28 The light is out, and the brightest patch sits right above Hill 401. The bearing was right</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p08-0531.jpg" alt="Guishan Island at 05:31, with a band of cloud across the ridgeline"><figcaption>05:31 But that low cloud lies across the ridgeline, and the sun is behind it</figcaption></figure>

**I couldn't clearly see the sun rise out of Hill 401, which is a bit of a shame.**

At first I thought I had caught it in the 05:34:04 frame, where there is a very bright blob above the main peak. After zooming in I could tell it wasn't. The lower edge of that bright patch is a horizontal straight line, sitting right on top of the cloud, and its upper edge is blurred and bleeds into the sky. At this exposure the real solar disc would have a hard edge and be round. That was cloud lit up by the sun behind it, not the sun itself.

Spreading the whole sequence out makes it clearer what happened:

<figure class="gs-fig gs-tall"><img src="/images/guishan-sunrise/fig2-sequence.jpg" alt="Six consecutive frames from 04:56 to 05:34, with the island's size and position aligned and only the light changing"><figcaption>From 04:56 to 05:34. I changed focal lengths (108/200/154/135mm), so I normalized the angular scale and aligned the frames on the sea horizon. The island is the same size and the same height in every panel, and only the light changes. The low cloud band has been there since 05:27.</figcaption></figure>

For the record, here are the settings for those six frames:

```
04:56   1/1 sec
05:27   1/160
05:30   1/160
05:31   1/320
05:33   1/320
05:34   1/640
```

ISO 100 and f/8 never changed; only the shutter speed kept chasing upward. This is the exposure ladder table from the field sheet.

When the sun has just come out of the sea, its light reaches the lens slanting through the full thickness of the atmosphere, and a lot of it is blocked. With every bit it climbs, less is blocked, and the image brightens. In the table above, the shutter went from 1/160 to 1/640 within four minutes. So the kind of online advice that says to shoot sunrise at 1/something can't be copied. You have to be there and chase it with the histogram.

<figure class="gs-fig gs-wide"><video src="/videos/guishan-sunrise/07-timelapse.mp4" poster="/images/guishan-sunrise/poster-07-timelapse.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>The Insta360 X5 sat next to me and shot all morning; in post I sampled one frame every six seconds, compressing the whole morning into 20 seconds. The faint silhouette near the right end of the horizon is Guishan Island. The low cloud sat on the horizon the whole time, and the sun only lit up after it climbed past the top edge of the cloud; that whole stretch of the island's ridgeline was covered.</figcaption></figure>

## Five Weather Models All Said No Low Cloud

When I checked the weather beforehand, I had AI run several numerical models separately:

| Model | Low cloud at 05:00 | Low cloud at 06:00 |
|---|---|---|
| ECMWF IFS | 6% | 7% |
| Japan JMA | 10% | 12% |
| US GFS | 0% | 0% |
| German ICON | 0% | 0% |
| Open-Meteo blend | 2% | 2% |

The Norwegian Meteorological Institute's met.no even flagged it outright as `clearsky`.

**All five models were wrong together.**

The two things I had worried about beforehand, on the other hand, never happened. One was visibility. The models gave only 9.2 kilometers onshore, while Guishan Island is 13.9 kilometers away, so I feared the island would be hazy; in the 05:01 photo, the island is perfectly clear. The other was the drone. The GPS log of where it flew that day is 24.8096, 121.8206, and checking the CAA layer afterward, that is outside RCR30, 88 meters due east of the boundary.

After the sun came up, we flew the drone to film the coastline.

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p09-drone-sunup.jpg" alt="Drone view of the beach from above, the sun already up"><figcaption>06:02 The sun is up</figcaption></figure>

I cut the footage from that day's flight into a video:

{{< video "https://www.youtube.com/watch?v=rxloDsQPazI" >}}

On the way back, I filmed the footprints we had made on the way in.

<figure class="gs-fig"><video src="/videos/guishan-sunrise/05-back-a.mp4" poster="/images/guishan-sunrise/poster-05-back-a.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>06:12 Wrapping up</figcaption></figure>

<figure class="gs-fig"><video src="/videos/guishan-sunrise/06-back-b.mp4" poster="/images/guishan-sunrise/poster-06-back-b.jpg" autoplay muted loop playsinline preload="none"></video><figcaption>The sun is fully up now</figcaption></figure>

<figure class="gs-fig gs-wide"><img src="/images/guishan-sunrise/p10-footprints.jpg" alt="Footprints on the beach from the way in"><figcaption>06:23 Walking back, filming the footprints we made when we first walked in</figcaption></figure>

## What I Didn't Do Well

The Insta360 X5 panoramic time-lapse was ruined on the spot.

I had set it to one frame every two seconds. Looking back, that interval was too tight. Light around sunrise doesn't change that fast, so besides the file count ballooning, the differences between frames were too small to give any sense of time passing. A reasonable setting would have been one frame every five to ten seconds.

AI rescued it after I got home. I had kept every original frame, so it reassembled them at one frame per six seconds and fixed the brightness flicker caused by the camera's auto exposure. The time-lapse above is the rescued version.

But that only plays a bad hand a little better. Had I set it right on site, I wouldn't have needed this extra round. With gear settings, no amount of tutorials beats ruining a shoot once yourself.

## A Side Finding: Some Places Will Never Work

After the shoot, it occurred to me that there is more than one place along Provincial Highway 2 where you can walk onto the beach. So I had AI run the other two spots I often go to as well: the Dafu Sunrise Viewing Platform and the Zhuangwei Sand Dune Ecological Park, each across 1.5 kilometers north and south, for all 365 days of the year.

The results:

| Location | Sun rises from the Turtle's Tail | Sun rises from the Turtle's Head | Drone |
|---|---|---|---|
| Guishan Island Sunrise Beach | 81 days | 63 days | Outside RCR30 |
| Dafu Sunrise Viewing Platform | 110 days | 67 days | Inside RCR30 |
| Zhuangwei Sand Dune Ecological Park | **0 days** | **0 days** | Inside RCR30 |

The zero at the dunes does not mean there just happened to be none this year. It is **geometrically impossible**.

From the dunes, Guishan Island falls at azimuths 44.6 to 52.1 degrees. And at this latitude, the sun at its northernmost can only rise at 63.74 degrees (around the summer solstice). The gap is nearly twelve degrees, and the sun can never cross it. Even walking 1.5 kilometers north only pushes the island out to about 57 degrees, still seven degrees short.

Watching the sunrise from the Zhuangwei dunes, Guishan Island will be far to the left of the sun and can only serve as background.

I think this conclusion is worth more than "computing the places where you can shoot it." It saved me a wasted trip.

## What I Learned From This

If all it had been was "AI computed a coordinate for me," this post wouldn't be worth writing.

What's interesting is the stuff in the middle that got overturned.

One is that a vague idea paired with AI gets an answer faster than I expected. I started out just standing by the sea wondering whether the sun could possibly come up right over Guishan Island's head. A question like that used to be something you could only guess at by feel; now, overnight, it becomes a set of coordinates, a bearing and a time.

Next, the first answer you get is usually not the final answer. It treated the sun as a point once, and it got the terrain data wrong once, and I did not catch either on the spot; both surfaced after several rounds of back-and-forth. You have to keep discussing it for the answer to gradually converge.

The last one cost the most. There was no wind and no rain that day, and the only thing I cared about beforehand was low cloud, which happens to be the one thing I couldn't predict myself and could only leave to the models. Five weather models together said there would be no low cloud at that height, and the cloud was there anyway and blocked the whole thing. However beautifully you calculate, it doesn't count until you've been on site.

It also overturned something I had taken for granted. I assumed the spot marked on Google Maps was the best point, but from there, the sun actually comes up at the Turtle's Tail.

So the value of this approach isn't in how accurately it calculates. What it really does is push a vague idea until it can be overturned on site. With coordinates, a bearing, a time and an error margin, the morning of August 16 had something to check against.

The verdict: ridgeline right, bearing right, time right, the cloud not accounted for.

Knowing what you can't calculate matters as much as knowing what you can.

---
title: "ADFD Digitalization"
description: "The restoration and digitalization of a 1929 Foochow-English Dictionary. "
layout: page.html
collection: project
machinename: ADFD-digitalization
image: adfd-digitalization.png
---

<h2 class="ms-Font-xxl">Introduction</h2>
_Alphabetic Dictionary of the Foochow Dialect, Third Edition, 1929_ is one of the first Foochow - English dictionaries written by missionaries in Foochow.

The first edition was published in 1870. 

The third edition of this dictionary has 2000+ pages with tens of thousands of entries.

<h2 class="ms-Font-xxl">Why Digitalize This Dictionary?</h2>

Digitalizing this dictionary will not only create the largest Foochow dictionary openly available online, but it will also be benificial to scholars, especially those whose focus is on the evolution of [Eastern Min](https://en.wikipedia.org/wiki/Eastern_Min) over time.

Potential applications include:

- Dictionary apps
- An Input Method (IME) for Foochow
- Data Mining on the [Tone Sandhi](https://en.wikipedia.org/wiki/Tone_sandhi) of Eastern Min

<h2 class="ms-Font-xxl">Plan & Outline</h2>

<img src="{{ domain }}images/adfd_procedure_en.png" style="width:100%; max-width:850px;"/>

### Stage 1 - Segmentation [Done]
- Decomposing pages into individual entries.
- Segmented images are available [here](https://github.com/ztl8702/adfd/tree/master/processing/segments).

### Stage 2 - Machine OCR [Done]
- We intend to use [ABBYY OCR SDK](http://ocrsdk.com/) for image recognition. 
Using an OCR engine as accurate as ABBYY can greatly reduce the time and effort needed for manual input and review.

### Stage 3 - Crowdsourced Reviewing [Ongoing]
- Use the power of the crowd to manually review each entry.
- We have built a web application for this purpose.

### Stage 4 - Post-processing
- Create the data structure for the dictionary.
- Publish the data.
- Create a web UI for querying dictionary entries.

<h2 class="ms-Font-xxl">Discussion forum</h2>
[via 海墘闽语](http://www.ispeakmin.com/bbs/viewthread.php?tid=8900)
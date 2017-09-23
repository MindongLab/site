---
title: "《闽英大辞典》数位化"
description: "用众包的方式，将 1929 年的闽英大辞典制成可以查询的电子辞典。"
layout: page.html
collection: project
machinename: ADFD-digitalization
---

<h2 class="ms-Font-xxl">简介</h2>
Alphabetic Dictionary of the Foochow Dialect, Third Edition, 1929

这是一部由传教士著成的闽东语福州话 - 英语 的对照辞典。第一版写于1870年，此为第三版。全书近2000页收入了几万个词汇。

<h2 class="ms-Font-xxl">为什么要数字化这本辞典？</h2>

将此辞典数位化，不仅会成为目前最大的福州话词典； 对[闽东语](https://en.wikipedia.org/wiki/Eastern_Min)古今变迁的研究，也能提供宝贵的资料。

其他可能的应用包括：

- 辞典 App
- 福州话输入法
- 对闽东语的连读音变进行数据挖掘

<h2 class="ms-Font-xxl">实施计划</h2>

<img src="{{ domain }}images/adfd_procedure_en.png" style="width:100%; max-width:850px;"/>

### 第 1 阶段 - 切片 [已完成]
- 将辞典页面按词条切割。
- 切割后的图片可在[这里](https://github.com/ztl8702/adfd/tree/master/processing/segments)找到。

### 第 2 阶段 - 机器 OCR [可能需要重新进行]
- 光学字符识别。
- 关于重新OCR的讨论[见此](https://github.com/ztl8702/adfd/issues/1)。

### 第 3 阶段 - 众包录入和校对 [进行中]
- 使用众人之力，人工录入和校对每条词条。
- 我们为此开发了一个[网页程序](https://github.com/ztl8702/CrowdSource)。

<a href="http://cs.mindong.asia" target="_blank">
  <button class="ms-Button ms-Button--primary">
    众包入口
  </button>
</a>

### 第 4 阶段 - 后期处理
- 创建辞典的数据结构。 
- 将数据公开。
- 制作一个用于查询字典的网页UI。

<h2 class="ms-Font-xxl">项目讨论区</h2>
请在项目的[Issue 列表](https://github.com/ztl8702/adfd/issues) 参与讨论。

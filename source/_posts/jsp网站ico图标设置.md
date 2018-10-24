---
title: jsp网站ico图标设置
date: 2018-10-24 21:00:38
comments: true
tags: [java,jsp图标设置,jsp的ico设置,] #文章标签
categories: java #文章分类
toc: false
top: true
yuanchuang: true
---

> 学习记录：小技巧
>
> web项目中设置ico图标

<!--more-->

> ico图标放在webapp下

在jsp页面中引入（ps:每个jsp都要引入）

```
<!--  网站图标 -->
<link rel="shortcut icon" href="../static/img/favicon.ico">
```

目录结构如下：

![](https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/2018/10/QQ%E5%9B%BE%E7%89%8720181024210453.jpg)

各位可根据目录结构和引入地址适当更改
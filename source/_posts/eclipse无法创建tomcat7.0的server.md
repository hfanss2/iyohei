---
title: eclipse无法创建tomcat7.0的server
date: 2018-11-11 13:27:38
comments: true
tags: [BUG记录,tomcatBUG] #文章标签
categories: java #文章分类
toc: false
top: true
yuanchuang: true
---

> 学习记录：BUG记录
>
> eclipse无法创建tomcat7.0的server

<!--more-->
在eclipse中添加tomcat时ServerName是被置为灰色的，无法编辑。

如图：

![](https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/2018/11/1527859422596.jpg)

解决方法：
> 关闭Eclipse

> 打开WorkSpace所在的位置。
>
>  {workspace}/.metadata/.plugins/org.eclipse.core.runtime/.settings 
>
> 删除以下文件

```
org.eclipse.wst.server.core.prefs
org.eclipse.jst.server.tomcat.core.prefs
```

> 重启 Eclipse，即可解决问题
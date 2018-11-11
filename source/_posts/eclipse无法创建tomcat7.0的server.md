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

解决方法：
1. 关闭Eclipse
2. 打开WorkSpace所在的位置。 {workspace-directory}/.metadata/.plugins/org.eclipse.core.runtime/.settings 删除以下文件

org.eclipse.wst.server.core.prefs
org.eclipse.jst.server.tomcat.core.prefs
3. 重启 Eclipse，即可解决所有问题。
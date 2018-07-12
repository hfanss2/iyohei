
title: 域名的URL转发   #文章标题
date: 2018-04-30 15:20:36 #文章日期格式
tags: URL转发 #文章标签
categories: 教程 #文章分类
top: true #是否置顶
yuanchuang: true #是否置顶
---
&nbsp;
入手一个好的域名后，因为要备案，还没想好做什么，或者网站还没做好的时候，可以使域名先转到已有的地址如 博客，微博
<!--more-->

在网上找了很久，感觉还是米发快捷点，适用于域名注册下来但是个人网站还没完成暂时转发至博客的，或者想给博客弄个个性点的域名的

工具：域名，米发帐号   

原理：域名商解析到第三方平台服务器，第三方平台帮你转发到你的地址

1. 在米发平台上添加域名

2. 在米发平台上添加转发操作，  

 <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0029.jpg">
  <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0030.jpg">
 
显性URL转发：只是跳转，网站显示的还是你跳转后的地址，不是你的域名

隐性URL转发：网站显示的是你的域名，内容是你要跳转的页面的内容

保存后出现如下界面

   <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0031.jpg">

将红框内的网址复制下来，后面会用到

3. 在域名商那里做解析（万网为例）
 <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0032.jpg">
 <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0033.jpg">

需要添加两条解析记录

1条的主机记录为www	访问的时候是   www.***.com

1条的主机记录为空	访问的时候是        ***.com

此项配置也可在米发完成，在添加转发记录时的主机记录一个加www前缀，一个不加

都完成后看下是否生效
 <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0034.jpg">
 <img src="https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/blog-0035.jpg">
红框内是对号就是生效成功，否则就是失败，另外域名商有延迟，所以可以直接测试网站，直接看网站是否能跳转就可以了

另外IE的生效时间比其他浏览器都慢，可以适当等待！
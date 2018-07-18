---
title: Maupassant主题优化、屠城hexo主题优化版
date: 2018-07-14 18:33:45
comments: true
top: true
yuanchuang: true
tags: [屠城hexo主题优化,Maupassant主题优化,简洁主题] #文章标签
categories: hexo #文章分类
toc: true
---

基于屠城hexo主题优化版,个人自用版。优化部分显示效果，增加部分配置，详情参阅下文
<!--more-->
# 原版主题
[https://www.haomwei.com/technology/maupassant.html](https://www.haomwei.com/technology/maupassant.html)

## 屠城hexo版
- github地址：[https://github.com/tufu9441/maupassant-hexo](https://github.com/tufu9441/maupassant-hexo)
- 相关配置介绍：[https://www.haomwei.com/technology/maupassant-hexo.html](https://www.haomwei.com/technology/maupassant-hexo.html)
- 效果地址：[https://www.haomwei.com/](https://www.haomwei.com/)

## 本优化版
- github地址：[https://github.com/iyohei/maupassant-hexo-master-hfanss](https://github.com/iyohei/maupassant-hexo-master-hfanss)
- 相关配置介绍：[https://www.hfanss.com/2018/Maupassant主题、屠城主题优化版.html](https://www.hfanss.com/2018/Maupassant主题、屠城主题优化版.html)
- 效果地址：[https://www.hfanss.com/](https://www.hfanss.com/)
---
# 现版主题
## 主要优化点
- 自定义头像
- 归档页集成分类
- 添加不算子IP访问统计
- 菜单栏居中+置顶  ## 头部下拉看不见菜单时，置顶菜单栏，手机端同步
- 文章页添加统一版权声明
- 文章页添加置顶标志
- 文章页添加原创标志
- 底部文件始终在浏览器最下方
- 修改头部宽度变小
- 底部文件集成 关于博主，关于本站，友情链接，百度统计，ip计数
- 增加侧边栏联系我-微信公众号-站点统计
- 增加天气预报功能（自动获取访问者地区）
- 增加访问者IP,地区显示
- 修改每页网站标题显示为博主名称+页面标题（原页面标题在前，博主名称在后）
- 修改分享为 只显示网页地址
- config.yml一些常用属性都做了中文注释
- 集成百度主动推送插件
- 集成备案号显示

## 增加配置开关
```YAML
##         自定义start
# Online contact
- touxiangUrl: https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/touxiang.jpeg ##头像外链
- weiXinGZHUrl: https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/gongzhonghao.jpg ##微信公众号外链（侧边栏 公众号 图片）
- baidu_analytics:  ## 百度统计ID id, e.g. 8006843039519956000
## 以下为侧边栏最下 第一栏的外链
- weiXinPngUrl: https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/pic/302701117226241178.jpg ##微信个人二维码的图片地址
- qqPngUrl: https://wpa.qq.com/msgrd?v=3&uin=2158798&site=qq&menu=yes ##网页QQ聊天的外链  如  https://wpa.qq.com/msgrd?v=3&uin=2158798&site=qq&menu=yes 
- weiboPngUrl: https://weibo.com/0377k ##微博外链  如：https://weibo.com/0377k
- githubPngUrl: https://github.com/hfanss/ ##github外链 如 ：https://github.com/hfanss/
- eMailPngUrl: http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=8JiWkZ6DsJafiJ2RmZzek5_d ##邮箱外链  如：http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=8JiWkZ6DsJafiJ2RmZzek5_d

- banquan: ##版权声明，加在每篇文章下方
  enable: true ##是否开启
  note: 版权信息:本文所有权归博主-幻凡ss所有，转载请注明署名、出处！Thanks ##版权信息
- https: true ## 是否开启强制https（不影响本地调试）,本开关说明：https网站能正常访问开启才有效，如www.baidu.com跳转到http://www.baidu.com，不自动跳到https开头的网址，而且https://www.baidu.com能正常访问才行
- wordcount: true ##文章字数统计
- daovoice: false ## 页面右下角在线聊天
- daovoice_app_id:  ## 页面右下角在线聊天daovice  ID 如：22c081e4
- baiduTongJi:    ##百度统计外链
  enable: true
  baiduTongJiUrl: https://tongji.baidu.com/web/25553450/overview/index?siteId=11976031 ##百度统计的网址，点开后登陆可看到网站统计\
- baidutuisong: true ##开启百度链接推送，默认推送文章页
- beian:
  enable: false
  beianhao: 沪024944 ##备案号
##          自定义end
```
## 额外说明
- 评论只支持valine
- 搜索只支持self_search
- 网站统计只有百度统计
- 文章分享只有网址
---
# 使用方法
## 下载主题	
- https://github.com/iyohei/maupassant-hexo-master-hfanss.git	

## 安装插件	
- npm install hexo-renderer-pug --save	渲染器
- npm install hexo-renderer-sass --save	
- npm install hexo-generator-search --save	  ## 本地jquery搜索插件
- npm i -S hexo-helper-qrcode	## 分享插件
- npm uninstall hexo-generator-index --save	   ## 文章置顶插件
- npm install hexo-generator-index-pin-top --save	## 文章置顶插件
- npm i --save hexo-wordcount  ##文章字数统计+阅读时长
- npm install hexo-baidu-url-submit --save  ##百度链接主动推送

## 修改配置	
博客根目录下
config.yml中site分类下	
- language: zh-CN	
- subtitle: xxxxx ## 显示在浏览器网站标题右侧	
- description: XXXXX ## 显示在左上角头像下方	
- comments: true ## 默认开启全局评论显示	

URL分类下	
- url: www.baidu.com ## 分享页的头网址，域名地址或iyohei.githug.io	
- permalink: :year/:title.html ## 更改文章页的地址带有.html后缀	

博客根目录下 source文件夹下	
- 新建about文件夹--含一个index.md文件--最下方  关于博主页（内容自行书写）	
- 新建comment文件夹--含一个index.md文件--菜单栏  留言页（内容自行书写）	
- 新建href文件夹--含一个index.md文件--最下方  友情链接页（内容自行书写）	
- 新建music文件夹--含一个index.md文件--菜单栏  音乐页（内容自行书写）	
- 新建tool文件夹--含一个index.md文件--菜单栏    工具页（内容自行书写）	
- 粘贴一个favicon.ico的文件（网站图标）	
- 新建CNAME文件，无后缀（需要绑定域名的请在里面书写你的域名）	
---
## 注意事项
- 新建文章时，文章front-matter中   top: true  开启文章置顶，yuanchuang: true 开启原创标签
- 底部文件的index.md中  文章最下方需加入以下代码：
```
<script>$("#nav1 a:first").addClass('current');</script>
```
（目的是保证菜单栏的首页为选中样式）
- 使用侧边栏熊掌号需更改
-- qita.pug 20 行代码为自己的熊掌号script,
-- head.pug 19行代码为自己熊掌号ID声明
- 百度主动推送请阅读 [说明文档](https://hui-wang.info/2016/10/23/Hexo%E6%8F%92%E4%BB%B6%E4%B9%8B%E7%99%BE%E5%BA%A6%E4%B8%BB%E5%8A%A8%E6%8F%90%E4%BA%A4%E9%93%BE%E6%8E%A5/)

## 自行优化
另外附上几个重要的文件作用，方便大家自行优化：
- base.pug	集成head部分模版+侧边栏+底部
- archive.pug	归档页的模版
- page.pug	自定义页面的模版
- post.pug	文章页模版
- footer.pug	尾部文件模版
- head.pug	首页的模版（主要是通用JS的引用，如评论，计数器）
- tianqiyubao.pug 新增侧边栏天气预报 模版
- qita.pug 新增侧边栏 联系我-公众号-站点统计 模版
- _widget文件夹	侧边栏模版
- 推荐插件：
-- [音乐播放插件](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)
-- [hexo博客上传至ftp服务器](https://hexo.io/zh-cn/docs/deployment.html#FTPSync)
-- [hexo博客上传至腾讯云COS](https://github.com/sdlzhd/hexo-deployer-cos#user-content-options)
- valine评论优化：增加邮箱提醒 [http://www.zhaojun.im/hexo-valine-admin/](http://www.zhaojun.im/hexo-valine-admin/)
- valine评论个性头像：[https://cn.gravatar.com/](https://cn.gravatar.com/)全球头像分享网站-注册-设置头像,在valine评论中，填上注册时的邮箱就会显示头像
---
如有本主题的相关优化问题，可在下方评论区留言
      
---
title: JDBC链接数据库
date: 2018-09-19 19:56:38
comments: true
tags: [JDBC,JDBC链接数据库] #文章标签
categories: java #文章分类
toc: false
top: true
yuanchuang: true
---

> 学习记录：复习
>
> JDBC简单链接数据库

<!--more-->

```
/**    关闭资源用		*/
		Connection conn = null;
		Statement stmt = null;
		ResultSet rest = null;
		/**		设置url,user,password,sql		*/
		String url = "jdbc:mysql://localhost:3306/kevin?useUnicode=true&amp;characterEncoding=utf-8";
		String user = "root";
		String password = "123456";
		String sql = "select * from blog";
		try
		{
			// 注册驱动
			Class.forName("com.mysql.jdbc.Driver");
			// 获得数据库链接
			conn = DriverManager.getConnection(url, user, password);
			// 获得Statement
			stmt = conn.createStatement();
			rest = stmt.executeQuery(sql);
			while (rest.next())
			{
				System.out.println(rest.getString("title") + "_" + rest.getString("viceTitle"));
			}
		} catch (Exception e)
		{
			System.err.println("发生异常："+e);
		} finally
		{//关闭资源
			rest.close();
			stmt.close();
			conn.close();
		}
```

关闭资源放在finally中

需引入mysql-connector-java-***.jar，如果没有使用maven可在[官网下载](https://cdn.mysql.com//Downloads/Connector-J/mysql-connector-java-5.1.47.zip)或 [我的网盘](https://pan.baidu.com/s/1_xQ_KfLhJ7skTJDfK5V8vg#list/path=%2Fjava%2Fmysql&parentPath=%2Fjava)

![](https://huanfan-1252958858.cos.ap-shanghai.myqcloud.com/2018/09/QQ%E5%9B%BE%E7%89%8720180919200826.jpg)


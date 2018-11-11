---
title: ajax向后台传递list参数
date: 2018-11-11 13:59:38
comments: true
tags: [ajax,前后台交互传参] #文章标签
categories: java #文章分类
toc: false
top: true
yuanchuang: true
---

> 学习记录：复习
>
> 使用ajax向后台传递list参数

<!--more-->
前台

jsp页面

```
<button onclick="login222();">测试</button>
```

js

```
function login222() {
	var list = [];

	for (var i = 1; i <= 5; i++) {
		var admin = {};
		admin.id = i;
		admin.grade = i;
		admin.key = "第" + i + "条数据的key属性";
		admin.value = "第" + i + "条数据的value属性";
		admin.url = "第" + i + "条数据的url属性";
		admin.orderx = i;
		list.push(admin);
	}
	$.ajax({
		type : "post",
		url : "/login2",
		contentType : 'application/json; charset=UTF-8',
		data : JSON.stringify(list),
		dataType : "json",
		async : false,
		success : function(data) {
			if (data) {
				alert("操作成功");
			} else {
				alert("操作失败");
			}
		}
	});

}
```

action

```
@RequestMapping(path = "/login2")
@ResponseBody
public String login2(@RequestBody List<AdminVO> voList, Model model) {
		try {
			for (AdminVO vo : voList) {
				System.err.println(vo);
			}
			return "true";
		} catch (Exception e) {
			return "false";
		}
		
	}
```

实体类属性

```
private static final long serialVersionUID = 1L;
	private Integer id;
	private Integer grade;
	private String key;
	private String value;
	private String url;
	private Integer orderx;
	//get、set方法...
```


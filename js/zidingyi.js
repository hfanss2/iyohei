var value01=0;//   0=14px     1=10px
$(document).ready(function(){
	$(window).scroll(function(){/**设置顶部固定      */  
				 setScrollTop();
	})
	setMenu1Class();
	setHeight();
	setIp();
	setWidth();
})	
	
	function setIp(){//设置访问者  ip,城市等信息
		var ip=returnCitySN["cip"];//访问者ip
		var city = returnCitySN["cname"];//访问者城市
		var cid = returnCitySN["cid"];//访问者城市ID
        $("#ip-xxx").text(ip);$("#diqu-xxx").text(city);
	}
	
	function setMenu1Class(){//菜单栏在滚动条高度上方
		var width = document.documentElement.clientWidth;
		var nav1 = document.getElementById('nav1'); 
		if(width<770){//如果浏览器宽度小于500  nav
			nav1.className = 'nav'; 
		}else{//如果浏览器宽度大于500   nav2
			nav1.className = 'nav2'; 
		}
	}
	
	function setMenu2Class(){//菜单栏在滚动条高度下方
		var width = document.documentElement.clientWidth;
		var nav1 = document.getElementById('nav1'); 
		if(width<770){//如果浏览器宽度小于500  fixedNav
			nav1.className = 'fixedNav'; 
		}else{//如果浏览器宽度大于500   fixedNav2
			nav1.className = 'fixedNav2'; 
		}
	}
	
	/**  设置头部高度小于滚动条位置时，置顶菜单栏   */
	function setScrollTop(){
		var scrollPos = $(window).scrollTop();   //获取滚动条滚动的高度
		if(scrollPos >= 120){   //70:头部高度-菜单栏的高度
			setMenu2Class();
		}else{
			setMenu1Class();
		}	
	}

	//设置侧边栏  其他组件  的宽度
	function setQiTaWidth(){//变小
		//widget-title=侧边栏标题
		//tagcloud=侧边栏正文
		$(".widget-title").css("font-size","12px");
		$(".tagcloud").css("font-size","12px");
		$("img[name='qitazujian-img']").css("width","15px");
		//$("#zdtongji").css("font-size","12px");
		
	}
	function setQiTaWidth2(){//变大
		$(".widget-title").css("font-size","16px");
		$(".tagcloud").css("font-size","16px");
		$("img[name='qitazujian-img']").css("width","30px");
	}
	
	function setWidth(){
		var width02 = document.documentElement.clientWidth;
		if(width02<1007){
			if(value01==0){
				setQiTaWidth();//10px
				value01=1;
			}
		} 
		if(width02>=1007){
			if(value01==1){
				setQiTaWidth2();//14px
				value01=0;
			}
		}
	}
	
	
	/**设置底部固定      */  	
	function setHeight(){
		var footerHeight = $('#123').height();
		var bodyHeight = $('.body_container').height()+footerHeight;
		var height = document.documentElement.clientHeight;
		var minHeight = height-footerHeight-5-125;
		minHeight=minHeight+'px';
		//alert('底部高度:'+footerHeight+';body宽度:'+height+';修改后的宽度:'+minHeight);
		$('.body_container').css('minHeight',minHeight);
	}
	//浏览器大小改变时
	
	window.onresize=function(){
		setHeight();
		setScrollTop();
		setWidth();
	}
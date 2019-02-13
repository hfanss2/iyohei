//页面加载完成执行的方法
$(document).ready(function(){
	setHeight();
	//微信图片  显示 js
	$("#weixin").mouseover(function() {
		$(".weixin_img").show();
	});//微信图片  隐藏 js
	$("#weixin").mouseout(function() {
		$(".weixin_img").hide();
	});//页面滑动到顶部 js
	$("#top_btn").click(function() {
		$("html,body").animate({scrollTop:0}, 500);
	});//页面滑动到底部 js
	$("#bottom_btn").click(function() {
		$("html,body").animate({scrollTop: document.body.scrollHeight}, 500);
	});
})	
	
/**设置底部固定      */  	
function setHeight(){
	var footerHeight = $('#footer-000').height();
	var headerHeight = $('#header-02').height();
	var height = document.documentElement.clientHeight;
	var minHeight = height-footerHeight;
	minHeight=minHeight+'px';
	//alert('底部高度:'+footerHeight+';body宽度:'+height+';修改后的宽度:'+minHeight);
	$('.body_container').css('minHeight',minHeight);
}
/*  显示搜索框 */
function showSerch(){
	$(".search-total").css('display', 'initial');
	document.getElementById('local-search-input').focus(); 
}
/*  隐藏搜索框 */
function outSerch(){
	$(".search-total").css('display', 'none');
}

/*  移动端下显示菜单栏 */
function showBars(){
	if(document.getElementById("header-04").style.display=="none")
	{
		$("#header-04").css('display', 'initial');
	}else
	{
		$("#header-04").css('display', 'none');
	}
	
}






//浏览器大小改变时
window.onresize=function(){
	setHeight();
}


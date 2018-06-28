$(document).ready(function(){
	$(window).scroll(function(){/**设置顶部固定      */  
		var scrollPos = $(window).scrollTop();   //获取滚动条滚动的高度
		if(scrollPos >= 120){   //70:头部高度-菜单栏的高度
			$('#nav1').addClass('fixedNav')
		}else{
			$('#nav1').removeClass('fixedNav')
		}			 
	})
	setHeight();
})
	/**设置底部固定      */  	
	function setHeight(){
		
		var footerHeight = $('#123').height();
		var bodyHeight = $('.body_container').height()+footerHeight;
		var height = document.documentElement.clientHeight;
		if(bodyHeight<height){
			var minHeight = height-footerHeight-5;
			minHeight=minHeight+'px';
			//alert('底部高度:'+footerHeight+';body宽度:'+height+';修改后的宽度:'+minHeight);
			$('.body_container').css('minHeight',minHeight);
		}
	}
	window.onresize=function(){
		setHeight();
	}
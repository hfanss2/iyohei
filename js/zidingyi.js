$(function() { 
  var heigth = document.documentElement.clientHeight || document.body.clientHeight;
  alert(heigth);
	var mixHeight = heigth-80;
    $("#body_container").css('min-height',mixHeight);
    //更改页面高度为  可视高度减去底部高度
}


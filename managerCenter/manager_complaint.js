$(document).ready(function(){
	 //投诉对象切换
	 $("div.rightMain h6 li").delegate("a","click",function() {
	 	$("div.rightMain h6 li a").css("borderBottom","none");
	 	$(this).css("borderBottom","2px solid #f31d45");
	 });

	 //投诉结果表页切换
	 $("div.rightMain .footNum .fPage .fChangeN").delegate("a","click",function() {
	 	$("div.rightMain .footNum .fPage .fChangeN a").css({"background":"#fff","color":"#555"});
	 	$(this).css({"background":"#1789d5","color":"#fff"});
	 });

});


	
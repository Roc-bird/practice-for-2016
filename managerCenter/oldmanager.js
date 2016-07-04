$(document).ready(function(){
	/*$("div.list h6").css("margin-bottom","12px");
	$("div.list li").css("margin-bottom","10px");*/


	/*var ee = $(".rightMain h6").find("li");
	ee.click(function(){
		alert($(this).index());
	})*/
	 /*$(".rightMain h6 a").click(function() {
	 	console.log($(this).index());
	 });*/

	 /*主导航栏切换*/
	 $("div.nav .navList").delegate("li","click",function() {
	 	$("div.nav .navList li").css("background","none");
	 	$(this).css("background", "url('./qietu/nav_selectedArrow12x7.png') no-repeat 50% 43px");
	 });

	 /*管理中心左侧菜单切换*/
	 $("div.leftList .list ul").delegate("li","click",function(){
	 	$("div.leftList .list ul li").find("a").css("color","");
	 	$(this).find("a").css("color","#f31d45");
	 	if (($(this).find("a").attr("name")) == "complaintM") {
	 		$("div.rightMain").load("manager_complaint.html div.rightMain");
	 	} else {
	 		$("div.rightMain").load("t.txt");
	 	}
	 });

	 /*投诉对象切换*/
	 $("div.rightMain h6 li").delegate("a","click",function() {
	 	$("div.rightMain h6 li a").css("borderBottom","none");
	 	$(this).css("borderBottom","2px solid #f31d45");
	 });

	 /*投诉结果表页切换*/
	 $("div.rightMain .footNum .fPage .fChangeN").delegate("a","click",function() {
	 	$("div.rightMain .footNum .fPage .fChangeN a").css({"background":"#fff","color":"#555"});
	 	$(this).css({"background":"#1789d5","color":"#fff"});
	 });

	 /*$("div.rightMain .footNum .fPage ").delegate("button","click",function() {
	 	//$("div.rightMain .footNum .fPage .fChangeN button").css({"background":"#fff","color":"#555"});
	 	$(this).on("mousedown",function(){
	 		$(this).addClass("bActive");
	 	}).on("mouserup",function(){
	 		$(this).removeClass("bActive");
	 	});
	 });

	 //$("div.rightMain table.queryResult").append(function(){for});
	

	 /*$("div.topNav .loginMsg").find("li").eq(1).find("a").css("color","#f31d45");
	 $("div.topNav .accountMsg").find("li").eq(1).find("a").css("color","#f31d45");*/

});


	
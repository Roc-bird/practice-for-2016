$(document).ready(function(){
	 //主导航栏切换*/
	 $("div.nav .navList").delegate("li","click",function() {
	 	$("div.nav .navList li").css("background","none");
	 	$(this).css("background", "url('./qietu/nav_selectedArrow12x7.png') no-repeat 50% 43px");
	 });

	 //管理中心左侧菜单切换*/
	 $("div.leftList .list ul").delegate("li","click",function(){
	 	$("div.leftList .list ul li").find("a").css("color","");
	 	$(this).find("a").css("color","#f31d45");
	 	/*switch ($(this).find("a").attr("name")) {
	 		case "complaintM":
	 		$('div.rightMain').empty();
	 		$("div.rightMain").load("manager_complaint.html div.rightMain");
	 		//$("div.rightMain").append("<script src='manager_complaint.js'></script>");
	 		$('head').append('<link href="manager_complaint.css" rel="stylesheet" />');
	 		//alert($('head link').attr('href'));
	 		break;
	 		case "reportM":
	 		$('div.rightMain').empty();
	 		$("div.rightMain").load("manager_report.html div.rightMain");
	 		$('head').append('<link href="manager_report.css" rel="stylesheet" />');
	 		//$('head').remove('<link href="manager_complaint.css" rel="stylesheet" />');
	 		break;
	 	}*/
	 });

	 //投诉对象切换
/*	 $("div.rightMain h6 li").delegate("a","click",function() {
	 	$("div.rightMain h6 li a").css("borderBottom","none");
	 	$(this).css("borderBottom","2px solid #f31d45");
	 });

	 //投诉结果表页切换
	 $("div.rightMain .footNum .fPage .fChangeN").delegate("a","click",function() {
	 	$("div.rightMain .footNum .fPage .fChangeN a").css({"background":"#fff","color":"#555"});
	 	$(this).css({"background":"#1789d5","color":"#fff"});
	 });*/
});


	
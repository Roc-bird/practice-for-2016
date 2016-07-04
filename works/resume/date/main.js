$(document).ready(function() {
	$(".m-skill-box").find(".skill-box").click(function() {
		var isBool;
		var isBoolF = $(".m-skill-html").is(":animated") || $(".m-skill-css").is(":animated");/* 第一层盒子动画检测 */
		var isBoolS = $(".m-skill-js").is(":animated") || $(".m-skill-ps").is(":animated");/* 第二层盒子动画检测 */
		var sBox = $(this).closest(".skill-box")[0];/* 被点击对象所在skill-box（即s盒子） */
		var sBoxS = $(sBox).siblings()[0];/* 根据点击对象不同，s盒子相邻兄弟元素赋值有差异 */
		var sBoxB = $(sBox).siblings()[2];/* 根据点击对象不同，s盒子相邻兄弟元素赋值有差异 */

		if ($(sBox).parent().index() === 0) {
			isBool = isBoolF;
		} else if ($(sBox).parent().index() === 1) {
			isBool = isBoolS;
		}
		if ($(sBox).index() === 0) {
			if ($(sBoxB).css("display") !== "none") {
				if (!isBool) {
					$(sBoxS).show();
					$(sBox).css({"borderColor":"#ccc","borderRightStyle":"dashed"});
					$(sBoxS).animate({"left":"300px"},800);
					$(sBoxB).animate({"left":"600px"},800,function(){$(this).hide();});
				}
			} else {
				if (!isBool) {
					$(sBoxB).show();
					$(sBoxS).animate({"left":"0"},800,function(){$(this).hide();$(sBox).removeAttr('style');});
					$(sBoxB).animate({"left":"300px"},800);
				}
			}
		} else if ($(sBox).index() === 3) {
			if ($(sBoxS).css("display") !== "none") {
				if (!isBool) {
					$(sBoxB).show();
					$(sBox).css({"borderColor":"#ccc","borderLeftStyle":"dashed"});
					$(sBoxB).animate({"left":"0"},800);
					$(sBoxS).animate({"left":"-300px"},800,function(){$(this).hide();});
				}
			} else {
				if (!isBool) {
					$(sBoxS).show();
					$(sBoxB).animate({"left":"300px"},800,function(){$(this).hide();$(sBox).removeAttr('style');});
					$(sBoxS).animate({"left":"0"},800);
				}
			}
		}
	});/* 技能展示页点击动画 */

	$(".modular-m-f-icon").click(function() {
		if (!$(".modular-m-f-notes").is(":animated")) {
			console.log($(".modular-m-f-notes").css("left"));
			$(".modular-m-f-notes").fadeToggle(1500,"linear");
		}
	});/* 底部读白显示切换 */

	$(".m-toggle-b-up").css("background","#e4e4e4");
	$(".modular-toggle-button").children().click(function(){
		var modulars = $(".modular-main");
		if (!modulars.is(":animated")) {
			var modularSingle;
			modulars.each(function(){
				if($(this).css("display") !== "none") {
					modularSingle = $(this);
				}
			});
			if (modularSingle != undefined) {
				if ($(this).is(".m-toggle-b-up")) {
					if (modularSingle.index() >= 2){
						modularSingle.prev().show();
						modularSingle.css({"zIndex":"55","background":"rgba(255,255,255,.8)"});
						modularSingle.animate({"left":"722px"},1200,function(){$(this).hide();$(this).removeAttr("style");});
						if (modularSingle.index() == 2) {
							$(this).css("background","#e4e4e4");
						} else {
							$(".m-toggle-b-down").removeAttr("style");
						}
					}
				} else if ($(this).is(".m-toggle-b-down")) {
					if (modularSingle.index() <= modulars.length-1){
						modularSingle.next().show();
						modularSingle.css({"zIndex":"55","background":"rgba(255,255,255,.8)"});
						modularSingle.animate({"left":"-722px"},1200,function(){$(this).hide();$(this).removeAttr("style");});
						if (modularSingle.index() == modulars.length-1) {
							$(this).css("background","#e4e4e4");
						} else {
							$(".m-toggle-b-up").removeAttr("style");
						}
					}
				}
			}
		}
	});/* 展示模块间横向切换 */
	$(".m-show-w-n").click(function(){alert("敬请期待！");});
});
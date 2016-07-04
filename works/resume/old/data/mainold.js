$(document).ready(function() {
	$(".m-skill-box").children().click(function(){
		var divClassName = $(this).closest('.skill-box')[0].className;

		//console.log(event.target.className);
		//var divClassName = module[0].className;
		var mSkill,mSibling,mDec,mDet;
		if (divClassName.match("m-skill-html")) {
			mSkill = ".m-skill-html";
			mSibling = ".m-skill-css";
			mDec = ".m-skill-html-dec";
			mDet = ".m-s-h-det";
			$(mSibling).attr({position:"absolute",left:"300px",top:"0"});
			$(mSibling).animate({left:"600px"},"slows");
			console.log(mSkill+mSibling+mDec+mDet);
		} else if (divClassName.match("m-skill-css")) {
			mSkill = ".m-skill-css";
			mSibling = ".m-skill-html";
			mDec = ".m-skill-css-dec";
			mDet = ".m-s-c-det";
			console.log(mSkill+mSibling+mDec+mDet);
		} else if (divClassName.match("m-skill-js")) {
			mSkill = ".m-skill-js";
			mSibling = ".m-skill-ps";
			mDec = ".m-skill-js-dec";
			mDet = ".m-s-j-det";
			console.log(mSkill+mSibling+mDec+mDet);
		} else if (divClassName.match("m-skill-ps")) {
			mSkill = ".m-skill-ps";
			mSibling = ".m-skill-js";
			mDec = ".m-skill-ps-dec";
			mDet = ".m-s-p-det";
			console.log(mSkill+mSibling+mDec+mDet);
		}
		/*if($(mSibling).css("display") !== "none") {
			if(!$(mDec).is(":animated")){
				$(mSibling).hide();
				$(mDet).hide();
				$(mSkill).addClass("m-skill-border");
				$(mDec).addClass("m-skill-dec");
				$(mSkill).children(".m-skill-circle").addClass("m-skill-ccr");
				$(mDec).animate({width:"toggle"},"slows",function(){
					$(mDet).show();
				});
			}
		} else {
			if(!$(mDec).is(":animated")){
				$(mDet).hide();
				$(mDec).removeClass("m-skill-dec");
				$(mSkill).children(".m-skill-circle").removeClass("m-skill-ccr");
				$(mDec).animate({width:"toggle"},"slows",function(){
					$(mSkill).removeClass("m-skill-border");
					//$(mSibling).show();
					$(mSibling).animate({width:"toggle"},"fast");
				});
			}
		}*/
	});

	/*$(".m-skill-html").click(function(event){
		//console.log(event.target.className);
		if($(".m-skill-css").css("display") !== "none") {
			if(!$(".m-skill-html-dec").is(":animated")){
				$(".m-skill-css").hide();
				$(".m-s-h-det").hide();
				$(".m-skill-html").addClass("m-skill-border");
				$(".m-skill-html-dec").addClass("m-skill-dec");
				$(".m-skill-html").find(".m-skill-circle").addClass("m-skill-ccr");
				$(".m-skill-html-dec").animate({width:"toggle"},"slows",function(){
					$(".m-s-h-det").show();
				});
			}
		} else {
			if(!$(".m-skill-html-dec").is(":animated")){
				$(".m-s-h-det").hide();
				$(".m-skill-html-dec").removeClass("m-skill-dec");
				$(".m-skill-html").find(".m-skill-circle").removeClass("m-skill-ccr");
				$(".m-skill-html-dec").animate({width:"toggle"},"slows",function(){
					$(".m-skill-html").removeClass("m-skill-border");
					$(".m-skill-css").show();
				});
			}
		}
	});
	$(".m-skill-css").click(function(event){
		//console.log(event.target.className);
		var divClassName = event.target.className;
		if($(".m-skill-html").css("display") !== "none") {
			if(!$(".m-skill-css-dec").is(":animated")){
				$(".m-skill-html").hide();
				$(".m-s-c-det").hide();
				$(".m-skill-css").addClass("m-skill-border");
				$(".m-skill-css-dec").addClass("m-skill-dec");
				$(".m-skill-css").find(".m-skill-circle").addClass("m-skill-ccl");
				$(".m-skill-css-dec").animate({width:"toggle"},"slows",function(){
					$(".m-s-c-det").show();
				});
			}
		} else {
			if(!$(".m-skill-css-dec").is(":animated")){
				$(".m-s-c-det").hide();
				$(".m-skill-css-dec").removeClass("m-skill-dec");
				$(".m-skill-css").find(".m-skill-circle").removeClass("m-skill-ccl");
				$(".m-skill-css-dec").animate({width:"toggle"},"slows",function(){
					$(".m-skill-css").removeClass("m-skill-border");
					$(".m-skill-html").show();
				});
			}
		}
	});
	$(".m-skill-js").click(function(event){
		//console.log(event.target.className);
		var divClassName = event.target.className;
		if($(".m-skill-ps").css("display") !== "none") {
			if(!$(".m-skill-js-dec").is(":animated")){
				$(".m-skill-ps").hide();
				$(".m-s-j-det").hide();
				$(".m-skill-js").addClass("m-skill-border");
				$(".m-skill-js-dec").addClass("m-skill-dec");
				$(".m-skill-js").find(".m-skill-circle").addClass("m-skill-ccr");
				$(".m-skill-js-dec").animate({width:"toggle"},"slows",function(){
					$(".m-s-j-det").show();
				});
			}
		} else {
			if(!$(".m-skill-js-dec").is(":animated")){
				$(".m-s-j-det").hide();
				$(".m-skill-js-dec").removeClass("m-skill-dec");
				$(".m-skill-js").find(".m-skill-circle").removeClass("m-skill-ccr");
				$(".m-skill-js-dec").animate({width:"toggle"},"slows",function(){
					$(".m-skill-js").removeClass("m-skill-border");
					$(".m-skill-ps").show();
				});
			}
		}
	});
	$(".m-skill-ps").click(function(event){
		//console.log(event.target.className);
		var divClassName = event.target.className;
		if($(".m-skill-js").css("display") !== "none") {
			if(!$(".m-skill-ps-dec").is(":animated")){
				$(".m-skill-js").hide();
				$(".m-s-p-det").hide();
				$(".m-skill-ps").addClass("m-skill-border");
				$(".m-skill-ps-dec").addClass("m-skill-dec");
				$(".m-skill-ps").find(".m-skill-circle").addClass("m-skill-ccl");
				$(".m-skill-ps-dec").animate({width:"toggle"},"slows",function(){
					$(".m-s-p-det").show();
				});
			}
		} else {
			if(!$(".m-skill-ps-dec").is(":animated")){
				$(".m-s-p-det").hide();
				$(".m-skill-ps-dec").removeClass("m-skill-dec");
				$(".m-skill-ps").find(".m-skill-circle").removeClass("m-skill-ccl");
				$(".m-skill-ps-dec").animate({width:"toggle"},"slows",function(){
					$(".m-skill-ps").removeClass("m-skill-border");
					$(".m-skill-js").show();
				});
			}
		}
	});

	/* 下面鼠标是移入移出开发中代码 */
	/*var sl,se;
	function atover(){
		if(!$(".m-skill-html-dec").is(":animated")){
			$(".m-skill-css").addClass("dis-none");
			$(".m-skill-html-dec").stop(true,false).animate({width:"toggle"},"slows",function(){
				$(".m-s-h-det").css("display","block");
			});
		}
	}
	function atout(){
		if(!$(".m-skill-html-dec").is(":animated")){
			$(".m-s-h-det").css("display","none");
			$(".m-skill-html-dec").stop(true,false).animate({width:"toggle"},"slows",function(){
				$(".m-skill-css").removeClass("dis-none");
			});
		}
	}
	$(".m-skill-html").mouseout(function(){
			sl=setTimeout(atout,500);
	},function(){clearTimeout(se)});
	$(".m-skill-html").mouseover(function(){
			se=setTimeout(atover,500);
	},function(){clearTimeout(sl)});*/
});
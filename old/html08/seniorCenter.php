<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="initialization.css">
	<link rel="stylesheet" href="index.css">
	<link rel="stylesheet" href="senionCenter.css">
 	<link rel = "Shortcut Icon" href="icon/guanli.ico">
	<title>高级个人中心</title>
</head>
<body>
	<div id="container">
		<?php include("header.php");
		if (!isset($_SESSION['userid'])) {
	 			header("location:http://localhost/html08/blogzindex.php");
	 			exit();
	 		} ?>
		<?php echo "这里是高级个人中心"; ?>
		<div class="centerPage">
			<h4 class="clearfix">
				<ul>
					<li><a href="javascript:;">文章发表</a></li>
					<li><a href="javascript:;">留言/回复</a></li>
				</ul>
			</h4>
			<div id="writprint">
				<h6><input type="radio" name="family" value="writez" checked="checked" onclick="writez()" />写文章&nbsp;|<input type="radio" name="family" value="reprint" onclick="reprint()" />转载</h6>
				<form action="javascript:;" method="post" target="_artplay" onsubmit="return false">
					<textarea name="artlog" cols="50" rows="30"></textarea>
					<br/><span class="tips" ></span><span class="rept" >转载自：<input type="text" name="repUrl" placeholder="转载请在此注明出处！" /></span><button>提交</button>
				</form>
				<iframe src="javascript:;" frameborder="0" style="display:none;" name="artplay"></iframe>
			</div>
		</div>
	</div>
	<script>
		var writ = document.getElementById("writprint");
		var wrtSpan = writ.getElementsByTagName("span");
		var wrtCnt = writ.getElementsByTagName("textarea");
		//console.log(wrtSpan.length);
		function wrt() {
			if (wrtCnt.value.length == 0) {
				if(wrtSpan[1].style.display == "none") {
					
				}
			} else {
				// statement
			}
		}

		var radios = document.getElementsByName("family");
		var rept = document.getElementsByClassName("rept")[0];
		//console.log("rept");
		function reprint() {
			//alert(2);
			rept.style.display = "inline";
		//console.log(getStyle(rept,"display"));
		}

		function writez() {
			//alert(1);
		//console.log("rept3");
			rept.style.display = "";
		}

		/*function getStyle (obj , attr) {
 	 		return getComputedStyle? getComputedStyle(obj,null)[attr] : obj.currentStyle[attr] ;
 	 	}*/
	</script>
</body>
</html>
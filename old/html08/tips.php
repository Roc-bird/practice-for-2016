<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="initialization.css">
	<link rel="stylesheet" href="index.css">
	<link rel="stylesheet" href="tips.css">
	<link rel = "Shortcut Icon" href="icon/tips.ico">
	<title>提示！</title>
</head>
<body>
	<div id="container" class="clearfix">
		<!--头部-->
		<?php //$name = $_SESSION['user']; 
		 include("header.php"); ?>
		<?php if (!empty($_GET["action"]) && $_GET["action"] == "logOff") {
			echo '<div class="tipsPage">
				<h4>已注销！</h4>
				<p><a href="javascript:;" title="#">欢迎下次使用^o^</a></p>
			</div>';
		
		}else{
			echo '<div class="tipsPage">
				<h4>注册成功！</h4>
				<p><button type="button" class="bton btonL" onclick="loginDiv();">现在就去登录</button>&nbsp;&nbsp;<a href="blogzindex.php" title="返回首页">再看看！</a></p>
			</div>';
		}
		?>
	</div>
	<?php 
		/*if (!empty($_GET["action"])) {
			if ($_GET["action"] == "logOff") {
				echo "<script>document.getElementById('tipsOn').style.display.value='none';</script>";
				echo "<script>document.getElementById('tipsOff').style.display.value='block';</script>";
			
			}
		} else {
				echo "<script>document.getElementById('tipsOn').style.display.value='block';</script>";
				echo "<script>document.getElementById('tipsOff').style.display.value='none';</script>";
			}
		*/
	 ?>
</body>
</html>
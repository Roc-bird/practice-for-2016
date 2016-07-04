<?php 
	session_start();
//	$_SESSION["user"] = $_POST["user"];
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户平台</title>
	<style>
		div {
			position: fixed;
			overflow: hidden;
			border: 1px solid #ccc;
			background-color: #f9f9f9;
			margin: -200px 0 0 -10%;
			top: 50%;
			left: 50%;
			text-align: center;
			z-index: 101;
			width: 400px;
			height: 20%;
			vertical-align:  middle;
		}
	</style>
</head>
<body>
	<div>
		<p>登录成功!</p>
		<a href="blogzindex.php" title="首页">跳转到首页</a><br/>
		<?php 
		if ($_POST["user"] == "admaster") {

		echo "<a href='javascript:;'>查看全部留言</a>&nbsp;";
		echo "<a href='javascript:;'>继续写文章</a>";
		}
		 ?>
	</div>
</body>
</html>
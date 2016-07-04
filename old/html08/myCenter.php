<?php session_start(); ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<link rel="stylesheet" href="initialization.css">
	<link rel="stylesheet" href="index.css">
 	<link rel = "Shortcut Icon" href="icon/shezhi.ico">
 	<title>个人中心</title>
 </head>
 <body>
 	<div id="container">
	 	<?php include("header.php"); ?>
	 	<?php 
	 		if (!isset($_SESSION['userid'])) {
	 			header("location:http://localhost/html08/blogzindex.php");
	 			exit();
	 		}

	 		include("connt.php");

	 		$userid = $_SESSION['userid'];
	 		$username = $_SESSION['user'];
	 		//$userK = $_COOKIE["name"];
	 		$user_query = mysql_query("SELECT * from accountdata where uid=$userid limit 1");
	 		$result = mysql_fetch_array($user_query);
	 		echo "<div>用户信息：<br/>";
	 		echo "<p>用户ID：",$userid,"<br/>";
	 		echo "用户名：",$username,"<br/>";
	 		echo "注册日期：",date("Y-m-d",$result['regdate']),"<br/></p>";
			echo "点击此处&nbsp;<a href='logout.php'>退出</a>&nbsp;登录！</div>";
			/*if (isset($_COOKIE["name"])){
				echo "Welcome " . $_COOKIE["name"] . "!<br />";
			}else{
				echo "Welcome guest!<br />";
	  		}*/
	  		mysql_close($con);
	 	 ?>
	 </div>
 </body>
 </html>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言提交PHP</title>
</head>
<body>
	<?php 
		$artLogCnt = $_POST["artlog"];
		$artrept = $_POST["repUrl"];
		if (empty($artrept)) {
			$artrept = "orig";
		}
		$regDate = time();
		INCLUDE("connt.php");

		$sql = "INSERT INTO articlelogsdata (artlogcont,regdate,artreprint) VALUES('$artLogCnt','$regDate','$artrept')";

		if (!mysql_query($sql,$con)) {
			die("Error:".mysql_error());
		} else {
			echo "提交完成!";
		}

		mysql_close($con);
	 ?>
</body>
</html>
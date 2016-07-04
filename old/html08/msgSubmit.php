<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言提交PHP</title>
</head>
<body>
	<?php 
		/*$con = mysql_connect("localhost","root","z123.");
		if(!$con) {
			die("Counld not connect:".mysql_error());
		}

		mysql_select_db("my_db",$con);

		mysql_query('set names utf8');*/

		INCLUDE("connt.php");

		$sql = "INSERT INTO Messagedata (messagetitle,contactway,messagecontent) VALUES('$_POST[msgName]','$_POST[msgContactWay]','$_POST[msgContent]')";

		if (!mysql_query($sql,$con)) {
			die("Error:".mysql_error());
		} else {
			echo "提交完成!";
		}

		mysql_close($con);
	 ?>
</body>
</html>
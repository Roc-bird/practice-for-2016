<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$myfile = fopen("msgtext", "a") or die("Unable to open file!");
		$msgtitle = $_POST["msgtitle"];
		fwrite($myfile, $msgtitle);
		$msgtext = $_POST["msgtext"];
		fwrite($myfile, $msgtext);
		$msguser = $_POST["msguser"];
		fwrite($myfile, $msguser);
		$msgemail = $_POST["msgemail"];
		fwrite($myfile, $msgemail);
		fclose($myfile);
		header("location:http://localhost/msgForm.php");
	 ?>
	 <script>
	 	var form = document.getElementById("messageBook");
	 </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="initialization.css">
	<title>messageBook</title>
</head>
<body>
	<!--<form action="msgForm.php" target="msgplay" method="post">
		<span>标题:</span><input type="text" size="20" name="msgtitle" />
		<br/><br/>
		<textarea name="msgtxt" id="message-content" cols="72" rows="10" style="resize:none" placeholder="请在此处填写最多200个字的留言内容..."></textarea>
		<br/><br/>
		<input type="text" name="msguser" placeholder="名称/姓名"/>
		<input type="text" name="msgemail" placeholder="邮箱/QQ号"/>
		<br/><br/>
		<input type="text" placeholder="待定"/>
		<button>表情</button>
		<input type="submit" value="提交" />
	</form>-->
	<?php 
		$myfile = fopen("msgtext.txt", "a") or die("Unable to open file!");
		$msgtitle = $_POST["msgtitle"];
		fwrite($myfile, $msgtitle);
		$msgtxt = $_POST["msgtxt"];
		fwrite($myfile, ",".$msgtxt);
		/*$msguser = $_POST["msguser"];
		fwrite($myfile, ",".$msguser);
		$msgemail = $_POST["msgemail"];
		fwrite($myfile, ",".$msgemail);*/
		fwrite($myfile, "\r\n");
		fclose($myfile);
		//header("location:http://localhost/msgForm.html");
	 ?>
	</body>
</html>
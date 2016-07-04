<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言列表</title>
</head>
<body>
	<?php 
		$h = 1;
		$fr = fopen("msgtext.txt", "r") or die("Unable to open file!");
		while(($row = fgetcsv($fr))!=false) {
			echo "<li><a href='msgContent.php?tid=",$h,"' style='display:block;width:200px;overflow:hidden;white-space:nowrap;text-overflow: ellipsis;' target='_blank'>".$row[0]."</a></li>";
			$h+=1;
		}
		fclose($fr);
	 ?>
</body>
</html>
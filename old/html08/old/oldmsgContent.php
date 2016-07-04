<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言显示</title>
</head>
<body>
	<?php 
		$Tid = $_GET["tid"];
		$i = 1;
		$fr = fopen("msgtext.txt", "r");
		while (($row = fgetcsv($fr)) != false) {
			if ($i == $Tid) {
				echo "<h5>".$row[0]."</h5>";
				echo "<br/>";
				echo "<p>".$row[1]."</p>";
			}
			$i+=1;
		}
		fclose($fr);
	 ?>
</body>
</html>
<?php 
session_start();
header("Content-type: text/html; charset=utf-8");  
//if (!empty($_GET["action"])) {
		//if ($_GET['action']=='logout') {
			unset($_SESSION['userid']);
			unset($_SESSION['user']);
			setcookie("name","",time()-3600);
			header("location:http://localhost/html08/tips.php?action=logOff");
			/*if (isset($_COOKIE["name"]))
  {echo $_COOKIE["name"]."!<br/>";}else
  echo "Welcome guest!<br />";
			exit();*/
		//}
	//}


 ?>
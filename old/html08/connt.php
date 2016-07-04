<?php 
$con = mysql_connect("localhost","root","z123.");

if (!$con) {
	die("Could not connect:".mysql_error()) ;
}
mysql_select_db("my_db",$con);
mysql_query("set character set 'uft8'");
mysql_query("set names 'uft8' ");
 ?>

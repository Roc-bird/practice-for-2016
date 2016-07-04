<?php 
	/*session_start();
	$_SESSION["admaster"] = null;
	//  清除一些空白符号
		foreach ($posts as $key => $value) {
		    $posts[$key] = trim($value);
		}
		$password = md5($posts["password"]);
		$username = $posts["user"]; 

		$query = "SELECT `username` FROM `user` WHERE `password` = '$password' AND `username` = '$username'";
		//  取得查询结果
		$userInfo = $DB->getRow($query); 

		if (!empty($userInfo)) {
		    //  当验证通过后，启动 Session
		    session_start();
		    //  注册登陆成功的 admin 变量，并赋值 true
		    $_SESSION["admin"] = true;
		} else {
		    die("用户名密码错误");
		}
*/
	session_start();
	//setcookie("name","",time()+3600);
 ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>注册登录跳转</title>
 </head>
 <body>
 	
 
	<?php 
	
	/*$name = $email = $gender = $comment = $website = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	  $name = test_input($_POST["user"]);
	  $password = test_input($_POST["password"]);
	  $email = test_input($_POST["email"]);
	  $website = test_input($_POST["website"]);
	  $comment = test_input($_POST["comment"]);
	  $gender = test_input($_POST["gender"]);
	}

	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}*/

	//include("connt.php");


	if (!empty($_POST['register'])) {
		if(!isset($_POST['register'])){
			exit("非法访问！");
		}

		$username = htmlspecialchars($_POST['user']);
		$password = MD5($_POST['password']);
		$regdate = time();
		include("connt.php");
		$result = mysql_query("SELECT uid FROM accountdata WHERE name='$username' ");

		if($resultCheck = mysql_fetch_array($result)) {
				echo "用户名已存在！";
		} else {
			
			$sql = "INSERT INTO AccountData (name, password, regdate) VALUES('$username', '$password', '$regdate')";

			if (!mysql_query($sql,$con)) {
				die("Error".mysql_error());
			} else {
				header("location:http://localhost/html08/tips.php");
			}
		}

		/*while($resultCheck = mysql_fetch_array($result)) {
			if($resultCheck['name']===$_POST['user']) {
				echo "用户名已存在！~_~";
			} else {
				$sql = "INSERT INTO accountdata (name, password) VALUES('$_POST[user]', '$_POST[password]')";

				if (!mysql_query($sql,$con)) {
					die("Error".mysql_error());
				} else {
					echo "注册成功";
				}
			}
		}*/
		mysql_close($con);
	} else if(!empty($_POST["login"])) {
		if(!isset($_POST['login'])){
			exit("非法访问！");
		}

		$username = htmlspecialchars($_POST['user']);
		$password = MD5($_POST['password']);

		include('connt.php');

		$result = mysql_query("SELECT uid FROM AccountData WHERE name='$username' AND password='$password' ");

		//echo "SELECT * FROM AccountData WHERE name='$username' AND password='$password' ";
		if($resultCheck = mysql_fetch_array($result)) {
			$_SESSION['user'] = $username;
			$_SESSION['userid'] = $resultCheck['uid'];
			setcookie("name",$username,time()+3600);
			//SETCOOKIE["name"] = $username;
			
			//if($resultCheck["password"]==$password){
			//echo $username,"欢迎进入<a href='myCenter.php'>个人中心</a>&nbsp;";
			//echo "点击此处<a href='login.php?action=logout'>退出</a>&nbsp;登录！";
			//echo "点击此处<a href='logout.php'>退出</a>&nbsp;登录！";
						//exit();
			//	}else {echo "密码不对！";}
		//echo $resultCheck['password'],$password;
			if ($_SESSION['userid'] == 1) {
				header("location:http://localhost/html08/seniorCenter.php");
			} else {
				header("location:http://localhost/html08/myCenter.php");
			}
			
			//header("location:http://localhost/html08/myCenter.php");
			
		} else {
			exit ("登录失败！账号/密码错误<a href='javascript:history.back(-1);'>返回</a>重试！");
		}
		mysql_close($con);
	}
	
	/*if (!empty($_GET["action"])) {
		if ($_GET['action']=='logout') {
			unset($_SESSION['userid']);
			unset($_SESSION['username']);
			setcookie("name","",time()-3600);
			echo "退出成功！点击此处<a href='blogzindex.php'>主页</a>&nbsp;返回！";
			if (isset($_COOKIE["name"]))
  {echo $_COOKIE["name"] . "!<br />";}else
  echo "Welcome guest!<br />";
			exit();
		}
	}*/

	 ?>
</body>
 </html>
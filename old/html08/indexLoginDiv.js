var login = document.getElementById("login");
var logindiv = document.getElementById("logindiv");
var shade = document.getElementById("shade");
function loginDiv() {
	logindiv.style.display = 'block';
	shade.style.display = 'block';
	logindiv.style.top = "50%";
	logindiv.style.left = "50%";
	logindiv.style.width = "400px";
	logindiv.style.height = "300px";
	logindiv.innerHTML = "<h2>欢迎！<button type='button' class='bton btonC' onclick='closeLoginDiv()'>X</button></h2><form action='login.php' target='_self' method='post' onsubmit='return false'><span class='tips'></span><input type='text' name='user' size='25' onfocus='inputClear()' class='inputL' placeholder='请在此处输入用户名'/><span class='tips'></span><input type='password' name='password' size='25' onfocus='inputClear()' class='inputL' placeholder='请在此处输入密码'/><span class='tips'></span><input name='' id='lrchk' type='hidden' value='loginregisterCheck' /><button type='submit' id='loginb' class='bton btonL' onclick='logins()'>登录</button><button type='submit' id='registerb' class='bton btonL' onclick='registers()'>注册</button><br/><span><a href='javascript:;'>忘记密码</a></span></form>";
}

/*	function upd() {
		var username = document.getElementsByName('user')[0];
		var password = document.getElementsByName('password')[0];
	}*/

function closeLoginDiv() {
	logindiv.style.display = '';
	shade.style.display = '';
}/*关闭弹出登陆注册框*/



function inputClear() {
	var username = document.getElementsByName('user')[0];
	var password = document.getElementsByName('password')[0];
	username.previousSibling.innerHTML = "";
}

function logins() {
	var loginB = document.getElementById("lrchk");
	logindiv.getElementsByTagName("form")[0].attributes["onsubmit"].value = "return chkLogin();";
	logindiv.getElementsByTagName("form")[0].attributes["action"].value = "login.php";
	loginB.name = "login";
	console.log(loginB.name);
}

function registers() {
	var registerB = document.getElementById("lrchk");
	logindiv.getElementsByTagName("form")[0].attributes["onsubmit"].value = "return chkRigister();";
	logindiv.getElementsByTagName("form")[0].attributes["action"].value = "login.php";
	registerB.name = "register";
	console.log(registerB.name);
}

function chkLogin() {
	//console.log(username.value);
	var username = document.getElementsByName('user')[0];
	var password = document.getElementsByName('password')[0];
	/*var unmt = /^[a-zA-Z0-9]{6,12}$/;
	var patt= /(?=^.{8,15}$)(?=.*\d)(?=.*\W+)(?=.*[A-Za-z])(?!.*\n).*$/;*/
	if (username.value.length == 0 || password.value.length == 0){
			username.previousSibling.innerHTML = "用户名/密码不能为空";
			return false;
		}
	/*} else {
		username.previousSibling.innerHTML = "用户名/密码正确";
		return false;
	}*/
}

function chkRigister() {
	//console.log(username.value);
	var username = document.getElementsByName('user')[0];
	var password = document.getElementsByName('password')[0];
	var unmt = /^[a-zA-Z0-9]{6,12}$/;
	var patt= /(?=^.{8,15}$)(?=.*\d)(?=.*\W+)(?=.*[A-Za-z])(?!.*\n).*$/;
	if (unmt.test(username.value)){
		if (!patt.test(password.value)) {
			/*username.previousSibling.innerHTML = "用户名/密码合法";
		} else {*/
			username.previousSibling.innerHTML = "用户名/密码不合法";
			return false;
		}
	} else {
		username.previousSibling.innerHTML = "用户名/密码不合法";
		return false;
	}
	//return false;
}
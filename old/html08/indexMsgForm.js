var msgMb = document.getElementById("message-book");
var msgFm = msgMb.getElementsByTagName("form")[0];
var msgInputs = msgFm.getElementsByClassName("vlue");
//var msgCm = document.getElementById("msgcm");
//msgCm.attributes["src"].nodeValue = "msgList.php";
function msg() {
	//console.log(msgInputs[0].value.length+"a");
	if(msgInputs[0].value.length==0 || msgInputs[1].value.length==0 || msgInputs[2].value.length==0){
		//console.log(msgInputs[0].value.length+"b");
		msgInputs[0].nextSibling.innerHTML = "\*名称/联系方式/留言内容不能为空！";
		msgFm.attributes['onsubmit'].value = 'return false';
		/*console.log(msgInputs[0]);
		console.log(msgInputs[0].previousSibling);
		console.log(msgFm.attributes['onsubmit'].value);*/
	}else{
		//console.log(msgInputs[0].value.length+"c");
		//msgFm.attributes['action'].value = 'msgSubmit.php';
		msgFm.attributes['onsubmit'].value = '';
		setTimeout(cx, 400);
	}
}
function cx() {
	//console.log('abc');
	for(var i = 0, length = msgInputs.length; i < length; i++){
		msgFm.getElementsByClassName("vlue")[i].value = "";
	}
	msgTipsClear();
	/*msgCm.attributes["src"].nodeValue = "";
	msgCm.attributes["src"].nodeValue = "msgList.php";
	console.log(msgCm.attributes["src"].nodeValue);
	msgCm.style.src.value = "msgList.php";*/
}

function msgTipsClear() {
	msgInputs[0].nextSibling.innerHTML = "";
}
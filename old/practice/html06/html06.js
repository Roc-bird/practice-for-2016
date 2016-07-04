window.onload = function () {

	//账号及密码判断
	var UserRE = /^[a-zA-Z0-9_]{3,16}$/,
		PassWdRE = /^[a-zA-Z0-9_\-\.\+\=\#\$\%\&\,]{6,18}$/,
		UN = document.getElementById("username"),
		PW = document.getElementById("passwd");

		UN.value = "";
		PW.value = "";
		UN.onfocus = function () {
			UN.nextSibling.innerHTML = "";
		}
		UN.onblur = function () {
			if (!UserRE.test(UN.value)) {
				/*UN.nextSibling.innerHTML = "用户名格式错误";
				UN.nextSibling.style.color = "red";
				*/
				if (UN.value == "") {
					UN.nextSibling.innerHTML = "用户名不能为空";
				} else {
					UN.nextSibling.innerHTML = "用户名格式错误";
				}
				UN.nextSibling.style.color = "red";
				return false;
			}
		}

		PW.onfocus = function () {
			PW.nextSibling.innerHTML = "";
		}
		PW.onblur = function () {
			if (!PassWdRE.test(PW.value)) {
				/*PW.nextSibling.innerHTML = "密码格式错误";
				PW.nextSibling.style.color = "red";*/
				if(PW.value == ""){
					PW.nextSibling.innerHTML = "密码不能为空";
				}else{
					PW.nextSibling.innerHTML = "密码格式错误";
				}
				PW.nextSibling.style.color = "red";
				return false;
			}
		}

		document.getElementsByTagName("form")[0].onsubmit = function () {
			/*if ((!UserRE.test(UN.value)) || (!PassWdRE.test(PW.value))) {
				if (!UserRE.test(UN.value)){
					UN.nextSibling.innerHTML = "用户名不能为空";
					UN.nextSibling.style.color = "red";
				}
				if (!PassWdRE.test(PW.value)){
					PW.nextSibling.innerHTML = "密码不能为空";
					PW.nextSibling.style.color = "red";
				}
				return false;
			}*/
			if (!UserRE.test(UN.value)){
				if (UN.value == "") {
					UN.nextSibling.innerHTML = "用户名不能为空";
				} else {
					UN.nextSibling.innerHTML = "用户名格式错误";
				}
				UN.nextSibling.style.color = "red";
			}
			if (!PassWdRE.test(PW.value)){
				if(PW.value == ""){
					PW.nextSibling.innerHTML = "密码不能为空";
				}else{
					PW.nextSibling.innerHTML = "密码格式错误";
				}
				PW.nextSibling.style.color = "red";
			}
			return false;
		}

	/*var TiCk = null,
		TimeSet = document.getElementByClassName("slct")[0],
		Fslec = document.getElementById("fslec");

	TimeSet.onmouseover = Fslec.onmouseover = function () {
		Fslec.style.display = "inline-block";
		clearTimeout(TiCk);
	}

	TimeSet.onmouseout = Fslec.onmouseout = function () {
		TiCk = setTimeout(function () {Fslec.style.display = "none";}, 150);
	}//隐藏DIV对应JS*/

	//日期表处理
	var iTimeTable = document.getElementById("time_table"),//确定日期表
		iTds=iTimeTable.getElementsByTagName("td"),
		mDate = new Date(),//复位用Date
		myDate = new Date(),//传递日期用
		weekDay = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六"),//星期数组
		dateSet = {month:null,year:null},//便于传递和引用而申明的日期参数对象
		sYear = iTimeTable.getElementsByTagName("span")[0],//于日期前进后退按钮之间显示日期表当前年份，后面简称s年
		sMonth = iTimeTable.getElementsByTagName("span")[2],//于日期前进后退按钮之间显示日期表当前月份，后面简称s月
		tick = null,//定时器声明
		x,//用于传递单日
		y = false,//用于确认表内是否点击过日期
		monthRE = /^[0-9]?[1-9]{1}$/,//月份输入栏正则
		yearRE = /^[0-9]{4}$/,//年份输入正则
		dateRE = /^[0-9]?[1-9]{1}$/,//日期输入正则
		iDateInputs = document.getElementsByTagName("form")[0].getElementsByTagName("p")[2].getElementsByTagName("input");//日期输入栏DOM

		/*for (var h=0,h<iDateInputs.length;h++) {
			iDateInputs[h].value = "";
		}*/
		 iDateInputs[0].value = iDateInputs[1].value = iDateInputs[2].value = "";

		//dateTable()为日历表获取每月单日信息并显示
		function dateTable(dayFst) {
			var mth = dateSet.month,
				yar = dateSet.year,
				dayFix = firstDate(),
				i=0,h=0;
			//日期表格填充
			for(;i<lastDate();i++) {
				iTds[firstDate()+i].innerHTML = i+1;
				iTds[firstDate()+i].style.color = "";
			}
			//处理该月首日前面空格；
			if(firstDate()>0){
				for(;h<firstDate();h++) {
					iTds[h].innerHTML = preDate()-(firstDate()-1-h);
					iTds[h].style.color = "rgba(0,0,0,0.2)";
				}
			} 
			//处理该月尾日后面空格；
			for(var j=i+h,x=1;j<iTds.length;j++,x++) {
				iTds[j].innerHTML = x;
				iTds[j].style.color = "rgba(0,0,0,0.2)";
			}
			/*	console.log("月天数："+i);
				console.log("首日前空格数："+h); 
				console.log("首日星期key："+firstDate());
				console.log("尾日日期："+lastDate());
				console.log("上一个月尾日日期："+preDate());
				console.log(myDate);
				console.log(dateSet);
			*/
			//函数firstDate()返回当月首日星期键值
			function firstDate() {
				var fSetDate = new Date();
				if (mth != null ){
					fSetDate.setMonth(mth);
				}
				if (yar != null ){
					fSetDate.setFullYear(yar);
				} else{
					fSetDate.setFullYear(myDate.getFullYear());
				}
				fSetDate.setDate(1);
				return fSetDate.getDay();
			}
			//函数lastDate()获取当月尾日；
			function lastDate() {
				var lSetDate = new Date();
				if (mth != null ){
					if (mth == 11){
						lSetDate.setFullYear(myDate.getFullYear()+1);
						lSetDate.setMonth(0);
					} else{
						lSetDate.setMonth(mth+1);
					}
				} else{
					lSetDate.setMonth(lSetDate.getMonth()+1);
				}
				if (yar != null ){
					lSetDate.setFullYear(yar);
				} /*else{
					lSetDate.setFullYear(myDate.getFullYear());
				}*/
				lSetDate.setDate(0);
				return lSetDate.getDate();
			}
			//函数preDate()获取前一个月尾日；
			function preDate() {
				var pSetDate = new Date();
				if (mth != null ){
					if (mth == 0){
						pSetDate.setFullYear(myDate.getFullYear()-1);
						pSetDate.setMonth(11);
					} else{
						pSetDate.setMonth(mth);
					}
				}
				if (yar != null ){
					pSetDate.setFullYear(yar);
				} else{
					pSetDate.setFullYear(myDate.getFullYear());
				}
				pSetDate.setDate(0);
				return pSetDate.getDate();
			}
		}

		//页面首次加载时s年、s月显示
		sYear.innerHTML = myDate.getFullYear();
		sMonth.innerHTML = myDate.getMonth()+1;
		dateTable();
		if (sMonth.innerHTML < 10) {
			sMonth.innerHTML = 0 + sMonth.innerHTML;
		}
		function fstDay() {myDate.setDate(1);return myDate.getDay();}
		x = myDate.getDate();
		iTds[x+fstDay()-1].style.background = "rgba(23,255,24,0.3)";
		//日期复位至今天
		iTimeTable.getElementsByTagName("button")[5].onclick = function() {
			dateSet.year = mDate.getFullYear();
			myDate.setFullYear(dateSet.year);
			dateSet.month = mDate.getMonth();
			myDate.setMonth(dateSet.month);
			myDate.setDate(mDate.getDate());
			sYear.innerHTML = dateSet.year;
			sMonth.innerHTML = dateSet.month+1;
			dateTable();
			if (sMonth.innerHTML < 10) {
				sMonth.innerHTML = 0 +sMonth.innerHTML;
			}
			for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
			//该语句执行的是今天日期背景色的修改；
			//function fstDay() {myDate.setDate(1);return myDate.getDay();}
			x = myDate.getDate();
			iTds[x+fstDay()-1].style.background = "rgba(23,255,24,0.3)";
		}
		//减一年
		iTimeTable.getElementsByTagName("button")[0].onclick = function() {
			dateSet.year = myDate.getFullYear()-1;
			myDate.setFullYear(dateSet.year);
			sYear.innerHTML = dateSet.year;
			dateTable();
			for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
		}
		//加一年
		iTimeTable.getElementsByTagName("button")[3].onclick = function() {
			dateSet.year = myDate.getFullYear()+1;
			myDate.setFullYear(dateSet.year);
			sYear.innerHTML = dateSet.year;
			dateTable();
			for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
		}
		//减一月
		iTimeTable.getElementsByTagName("button")[1].onclick = function() {
			dateSet.month = myDate.getMonth()-1;
			if (dateSet.month == -1) {
				dateSet.month = 11;
				dateSet.year = myDate.getFullYear()-1;
				myDate.setFullYear(dateSet.year);
				sYear.innerHTML = dateSet.year;
			}
			myDate.setMonth(dateSet.month);
			sMonth.innerHTML = dateSet.month+1;
			dateTable();
			if (sMonth.innerHTML < 10) {
				sMonth.innerHTML = "0" +sMonth.innerHTML;
			}
			for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
		}
		//加一月
		iTimeTable.getElementsByTagName("button")[2].onclick = function() {
			dateSet.month = myDate.getMonth()+1;
			if (dateSet.month == 12) {
				dateSet.month = 0;
				dateSet.year = myDate.getFullYear()+1;
				myDate.setFullYear(dateSet.year);
				sYear.innerHTML = dateSet.year;
			}
			myDate.setMonth(dateSet.month);
			sMonth.innerHTML = dateSet.month+1;
			dateTable();
			if (sMonth.innerHTML < 10) {
				sMonth.innerHTML = "0" +sMonth.innerHTML;
			}
			for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
		}

		//给form下的button设置样式
		var iButtons = document.getElementsByTagName("button");
		for (var i = 0;i<iButtons.length;i++) {
			iButtons[i].onmouseover= function() {
				this.style.background='#e3e3e3';
			}
			iButtons[i].onmouseout= function() {
				this.style.background='';
			}
		}

		//日期输入栏提示清除
		iDateInputs[0].onfocus = iDateInputs[1].onfocus = iDateInputs[2].onfocus = function() {
			iDateInputs[2].nextSibling.nextSibling.innerHTML = "";
		}
		//赋予日期输入栏显示及隐藏日期表格事件
		iDateInputs[0].onclick = iDateInputs[1].onclick = iDateInputs[2].onclick = iTimeTable.onmouseover = function () {
			iTimeTable.style.display = "block";
			clearTimeout(tick);
		}
		iDateInputs[0].onmouseout = iDateInputs[1].onmouseout = iDateInputs[2].onmouseout = iTimeTable.onmouseout = function() {
			tick = setTimeout(iTimeDate(),150);
		}
		function iTimeDate() {iTimeTable.style.display = "none";}

		//检测输入的日期是否合理并刷新日期表
		iDateInputs[0].onblur = iDateInputs[1].onblur = iDateInputs[2].onblur = function () {
			/*console.log(parseInt(iDateInputs[0].value));
			console.log(parseInt(iDateInputs[1].value));
			console.log(parseInt(iDateInputs[2].value));*/
			if(!yearRE.test(parseInt(iDateInputs[0].value))||!monthRE.test(parseInt(iDateInputs[1].value))||parseInt(iDateInputs[1].value)>12){
				if(!yearRE.test(parseInt(iDateInputs[0].value))){
					iDateInputs[2].nextSibling.nextSibling.innerHTML = "您输入的年份不合理！";
					iDateInputs[2].nextSibling.nextSibling.style.color = "red";
				}
				if(!monthRE.test(parseInt(iDateInputs[1].value))||parseInt(iDateInputs[1].value)>12){
					iDateInputs[2].nextSibling.nextSibling.innerHTML = "您输入的月份不合理！";
					iDateInputs[2].nextSibling.nextSibling.style.color = "red";
				}
			} else if(!dateRE.test(parseInt(iDateInputs[2].value))||parseInt(iDateInputs[2].value)>lstDay()){
				iDateInputs[2].nextSibling.nextSibling.innerHTML = "您输入的日期不合理！";
				iDateInputs[2].nextSibling.nextSibling.style.color = "red";
			} else{
					dateSet.year = parseInt(iDateInputs[0].value);
					myDate.setFullYear(dateSet.year);
					sYear.innerHTML = dateSet.year;
					dateSet.month = parseInt(iDateInputs[1].value)-1;
					myDate.setMonth(dateSet.month);
					sMonth.innerHTML = dateSet.month+1;
					dateTable();
					if (sMonth.innerHTML < 10) {
					sMonth.innerHTML = "0" +sMonth.innerHTML;
					}
					for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow = "";
					}
					x = parseInt(iDateInputs[2].value);
					iTds[x+fstDay()-1].style.background = "rgba(34,7,233,0.2)";
					iTds[x+fstDay()-1].style.boxShadow = "1px 1px 1px #434343 inset";
			}
			function lstDay() {
				var iLstDay = new Date();
				if(iDateInputs[1].value==12){
					iLstDay.setYear(iDateInputs[0].value+1);
					iLstDay.setMonth(0);
					iLstDay.setDate(0);
				}else{
					iLstDay.setYear(iDateInputs[0].value);
					iLstDay.setMonth(iDateInputs[1].value);
					iLstDay.setDate(0);
				}
				return iLstDay.getDate();
			}
		}
		//通过日期表确定日期后对日期输入栏进行处理
		iTimeTable.getElementsByTagName("button")[4].onclick = function() {
			iDateInputs[0].value = sYear.innerHTML;
			iDateInputs[1].value = sMonth.innerHTML;
			iDateInputs[2].value = x;
			iDateInputs[2].nextSibling.nextSibling.innerHTML = "";
			console.log(myDate.getDate());
			var ckDate = new Date();
			ckDate.setMonth(dateSet.month);
			ckDate.setDate(1);
			/*for (var i=0;i<iTds.length;i++) {
				iTds[i].style.background = iTds[i].style.boxShadow = "";
			}
			x = parseInt(iDateInputs[2].value);
			iTds[x+fstDay()-1].style.background = "rgba(34,7,233,0.2)";
			iTds[x+fstDay()-1].style.boxShadow = "1px 1px 1px #434343 inset";*/
		}
		//表格内单日点击样式修改事件委托
		iTimeTable.onclick = function (ev) {
			//console.log(ev);
			var ev = ev || window.event,
				target = ev.target || ev.srcElement;
			if (target.nodeName.toLowerCase() == "td") {
				for (var i=0;i<iTds.length;i++) {
					iTds[i].style.background = iTds[i].style.boxShadow ="";
				}
				x = target.innerHTML;
				y = true;
				target.style.background = "rgba(34,7,233,0.2)";
				target.style.boxShadow = "1px 1px 1px #434343 inset";
			}
		}
}
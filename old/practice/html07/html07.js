//定义变量
var photoAlbum = document.getElementById("showPic"),//相册主图ID
	photoThumbnail = document.getElementById("thumbnailPic"),//相册缩略图ID
	imgkey=0,imgtkey=0;
	//console.log(photoAlbum+photoAlbum);
//调整相册图片显示
function photoChange() {
	var picShow = photoAlbum.getElementsByClassName("pic-show")[0],//相册主图整体外框
		imgs = picShow.getElementsByTagName("div");//相册主图集合
	var direMisc = photoAlbum.getElementsByClassName("dire-misc")[0],//切换按键父级DOM
		miscLeft = direMisc.getElementsByClassName("left-misc")[0],//左侧切换至上一张图按键DOM
		miscRight = direMisc.getElementsByClassName("right-misc")[0],//右侧切换至下一张图按键DOM
		tca,sT,sTe,//定时器变量申明
		picThumbnail = photoThumbnail.getElementsByClassName("pic-thumbnail")[0],//相册缩略图可视主体DOM(以下简称可视区)
		thumUl = picThumbnail.getElementsByTagName("ul")[0],//相册缩略图集合外框
		imgTs = picThumbnail.getElementsByTagName("li"),//相册缩略图集合
		direMiscT = photoThumbnail.getElementsByClassName("dire-misc-t")[0],//切换按键父级DOM
		miscLeftT = direMiscT.getElementsByClassName("left-misc-t")[0],//左侧切换至上一张图按键DOM
		miscRightT = direMiscT.getElementsByClassName("right-misc-t")[0];//右侧切换至下一张图按键DOM
	thumUl.style.width = (imgTs[0].offsetWidth+parseInt(getStyle(imgTs[0],"marginRight")))*imgTs.length-5+"px";//缩略图集合父级元素UL宽
	var xTover = parseInt(thumUl.style.width)-parseInt(getStyle(picThumbnail,"width"));//UL列表超出可视区域部分宽度
	imgs[imgkey].style.display = "block";//首次打开页面时显示第一张图片
	//imgTs[imgkey].style.borderColor = "rgba(0,0,0,1)";//首次打开页面时第一张缩略图边框片
	imgTs[imgkey].style.opacity = "1";//首次打开页面时显示第一张缩略图透明度片

	/*direMisc.onmouseover = function() {
		miscLeft.style.opacity = miscRight.style.opacity = "0.7"; 
	}
	direMisc.onmouseout = function() {
		miscLeft.style.opacity = miscRight.style.opacity = ""; 
	}*/
	miscLeft.onclick = function() {//左侧切换至上一张图按键函数
		if(imgkey <= 0){
			imgkey=imgs.length-1;
			thumUl.style.left = -xTover+"px";
		}else{
			imgkey-=1;
		}
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.display = "";
		}
		imgs[imgkey].style.display = "block";
		for(var j = 0;j < imgTs.length;j++){
			imgTs[j].style.borderColor = "";
			imgTs[j].style.opacity = "";
		}
		//imgTs[imgkey].style.borderColor = "rgba(0,0,0,1)";
		imgTs[imgkey].style.opacity = "1";
		clearTimeout(tca);
		clearTimeout(sTe);
		clearTimeout(sT);
		sTe=setTimeout(speedTtune,200);
		tca=setTimeout(timeClock,5000);
		//console.log(xTover);
	}
	miscRight.onclick = function() {//右侧切换至下一张图按键函数
		if(imgkey >= imgs.length-1){
			imgkey=0;
			thumUl.style.left = 0;
		}else{
			imgkey+=1;
		}
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.display = "";
		}
		imgs[imgkey].style.display = "block";
		for(var j = 0;j < imgTs.length;j++){
			imgTs[j].style.borderColor = "";
			imgTs[j].style.opacity = "";
		}
		//imgTs[imgkey].style.borderColor = "rgba(0,0,0,1)";
		imgTs[imgkey].style.opacity = "1";
		clearTimeout(tca);
		clearTimeout(sTe);
		clearTimeout(sT);
		sTe=setTimeout(speedTtune,200);
		tca=setTimeout(timeClock,5000);
		//console.log("加:"+imgkey+"图"+new Date().getSeconds());
	}
	function timeClock() {//定时器循环调用函数
		if(imgkey >= imgs.length-1){
			imgkey=0;
			thumUl.style.left = 0;
		}else{
			imgkey+=1;
		}
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.display = "";
		}
		imgs[imgkey].style.display = "block";
		for(var j = 0;j < imgTs.length;j++){
			imgTs[j].style.borderColor = "";
			imgTs[j].style.opacity = "";
		}
		//imgTs[imgkey].style.borderColor = "rgba(0,0,0,1)";
		imgTs[imgkey].style.opacity = "1";
		//clearTimeout(tca);
		tca = setTimeout(timeClock,5000);
		clearTimeout(sTe);
		clearTimeout(sT);
		sTe=setTimeout(speedTtune,200);
		//console.log(tca);
		//console.log("clock:"+imgkey+"图"+new Date().getSeconds());
	}
	tca=setTimeout(timeClock,5000);

		/*imgTs[imgtkey].onclick = function() {
			imgTs[imgtkey].style.borderColor = "rgba(205,73,10,1)";
			console.log("this");
		}*/
		thumUl.onclick = function (ev){//单个缩略图所在li边框颜色变化函数并提取图的index属性值及调整图位置至可视区（事件委托）
			var ev = ev || window.event,
			target = ev.target || ev.srcElement;
			clearTimeout(sT);
			clearTimeout(sTe);
			clearTimeout(tca);
			if(target.parentNode.nodeName.toLowerCase() == "li"){//确认对象、清除全部相关元素样式为默认、更新合法对象样式
				imgkey = parseInt(target.getAttribute("index"));
				for(var j = 0;j < imgTs.length;j++){
					imgTs[j].style.borderColor = "";
					imgTs[j].style.opacity = "";
				}
				//target.parentNode.style.borderColor = "rgba(0,0,0,1)";
				target.parentNode.style.opacity = "1";
				for (var i=0;i<imgs.length;i++) {
					imgs[i].style.display = "";
				}
				//console.log(target.getAttribute("index"));
				clearTimeout(tca);
				imgs[imgkey].style.display = "block";
				tca=setTimeout(timeClock,5000);	
				sTe=setTimeout(speedTtune,200);
			} else{return;}
				console.log(thumUl.offsetLeft);
				//console.log(imgTs[0].offsetWidth);
				//console.log(parseInt(getStyle(thumUl,"left")));	
		}
		function speedTtune(){//调整单个缩略图LI在可视区内的位置
			var xTlover = thumUl.offsetLeft+imgTs[0].offsetWidth*(imgkey)+parseInt(getStyle(imgTs[0],"marginRight"))*imgkey,/*
				被点击缩略图LI左边框距可视区域值*/
				liMoveValue=parseInt(getStyle(picThumbnail,"width"))-imgTs[0].offsetWidth*1.5;//被点击缩略图li在可视区外右边
			if(xTlover>liMoveValue&&Math.abs(thumUl.offsetLeft)<xTover){
				thumUl.style.left = parseInt(getStyle(thumUl,"left"))-1+"px";
				xTlover-=1;
				sTe=setTimeout(speedTtune,2);
			}
			else if(xTlover<imgTs[0].offsetWidth*0.5&&thumUl.offsetLeft<0){
				thumUl.style.left = parseInt(getStyle(thumUl,"left"))+1+"px";
				xTlover+=1;
				sTe=setTimeout(speedTtune,2);
			}
			else{
				clearTimeout(sTe);
			}
		}

		miscLeftT.onclick = function() {//右移显示缩略图集合顶部(函数)
			clearTimeout(sT);
			clearTimeout(sTe);
			clearTimeout(tca);
			sT=setTimeout(speedT,10);
			function speedT() {
				if(Math.abs(thumUl.offsetLeft)>0){
					if(Math.abs(thumUl.offsetLeft)>imgTs[0].offsetWidth*3){
						for(var i = 0; i < 6; i++){
							thumUl.style.left =thumUl.offsetLeft+imgTs[0].offsetWidth*0.5+"px";
						}
					}else{
						thumUl.style.left=thumUl.offsetLeft+1+"px";
						sT=setTimeout(speedT,5);
					}
				} else {
					clearTimeout(sT);
				}
			}
			tca=setTimeout(timeClock,5000);
		//	return sT;
		}
		miscRightT.onclick = function() {//左移显示缩略图集合底部(函数)
			//thumUl.style.left = parseInt(getStyle(picThumbnail,"width"))-parseInt(thumUl.style.width)+"px";
			clearTimeout(sT);
			clearTimeout(sTe);
			clearTimeout(tca);
			sT=setTimeout(speedT,10);
			console.log(xTover-Math.abs(thumUl.offsetLeft));
			//console.log(i);
			function speedT() {
				if(xTover>Math.abs(thumUl.offsetLeft)){
					if(xTover-Math.abs(thumUl.offsetLeft)>imgTs[0].offsetWidth*3){
						for(var i = 0; i < 6; i++){
							thumUl.style.left =thumUl.offsetLeft-imgTs[0].offsetWidth*0.5+"px";
						}
					}else{
						thumUl.style.left=thumUl.offsetLeft-1+"px";
						sT=setTimeout(speedT,5);
					}
				} else {
					clearTimeout(sT);
				}
			}
			tca=setTimeout(timeClock,5000);
		//	return sT;
			//console.log(xTover);
		}
	//console.log(thumUl.offsetLeft+xTover);
		function getStyle(obj,attr) {//获取分离式样式下元素样式值(通调函数)
			if(obj.currentStyle) {return obj.currentStyle[attr];}
			else {return document.defaultView.getComputedStyle(obj,null)[attr];}
		}
}

window.onload = photoChange();
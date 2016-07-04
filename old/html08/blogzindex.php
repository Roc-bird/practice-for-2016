<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="initialization.css">
	<link rel="stylesheet" href="index.css">
	<link rel = "Shortcut Icon" href="icon/shou.ico">
	<title>NEW留言板</title>
</head>
<body>
	<div id="container">
		<?php include("header.php"); ?>
		<div id="content" class="clearfix">
			<div id="main">
				<div id="article">
					<h2>文字标题</h2>
					<!--<p>
						<iframe src="larticle.html" frameborder="0"></iframe>
					</p>-->
						<?php //include("larticle.html") ?>
				</div>
				<div id="message-book">
					<h2>|留言板</h2>
					<form action="msgSubmit.php" target="msgplay" method="post" onsubmit="return false">
						<!--<span>标题:</span><input type="text" size="25" class="vlue inputM" name="msgtitle" />
						<br/><br/>-->
						<textarea name="msgContent" id="message-content" cols="72" rows="10" class="vlue" placeholder="请在此处填写最多200个字的留言内容..." onfocus="msgTipsClear()" ></textarea><span class="tips"></span><input type="text" size="24" class="vlue inputM" name="msgName" placeholder="名称/姓名" onfocus="msgTipsClear()" />
						<input type="text" size="24" class="vlue inputM" name="msgContactWay" placeholder="邮箱/QQ号" onfocus="msgTipsClear()" />
						<br/><br/>
						<input type="hidden" size="24" placeholder="待定"/>
						<button type="button" class="bton btonM">表情</button>
						<input type="submit" class="bton btonM" value="提交" onclick="msg()" />
					</form>
				</div>
			</div>
			<div id="lists">
				<div class="search">
					<input type="text" size="22" class="inputM" placeholder="Search" /><button type="button" class="bton btonM">搜索</button>
				</div>
				<div class="recently-publish">近期发表</div>
				<div class="recently-comment">
					<h3>近期留言</h3>
					<p>
						<iframe src="javascript:;" frameborder="0" style="display:none;" name="msgplay" id="msgcm" ></iframe>
					</p>
				</div>
				<div class="list">目录</div>
				<div class="about">
				</div>
			</div>
		</div>
		<div id="footer">&nbsp;</div>
	</div>
	<script src="indexMsgForm.js"></script>
	<script src="indexLoginDiv.js"></script>
</body>
</html>
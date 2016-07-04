<div id="topNav">
	<div>
		<p>
			欢迎进入XXX！
			<?php 
				if(empty($_SESSION['user'])) {
					echo '[<a href="javascript:;" onclick="loginDiv()">登录</a>]&nbsp;[<a href="javascript:;" onclick="loginDiv()">注册</a>]&nbsp;';
				}else{
					echo '[<a href="javascript:;">'.$_SESSION['user'].'</a>]&nbsp;[<a href="logout.php">退出</a>]';
				} 
			?>
		</p>
		<div>
			<ul>
				<li><a href="javascript:;">收藏夹</a></li>
				<li><a href="javascript:;">帮助</a></li>
				<li><a href="javascript:;">关于</a></li>
			</ul>
		</div>
	</div>
</div>
<div id="logindiv"></div>
<div id="shade" onclick="closeLoginDiv()"></div>
<div id="header">
	<div class="header-title clearfix">
		<!--<div class="login clearfix">
			<button type="button" id="login" class="bton btonL" onclick="loginDiv()" >账号</button><br/>
		</div>-->
		<h1>BLOG</h1>
		<p>——&nbsp;人为善，福虽未至但祸已远离；人为恶，祸虽未至但福已远离。</p>
	</div>
	<div id="nav">
		<ul>
			<li><a href="javascript:;">日志</a></li>
			<li><a href="javascript:;">留言</a></li>
			<li><a href="javascript:;">收集整理</a></li>
		</ul>
	</div>
</div>
<script src="indexLoginDiv.js"></script>

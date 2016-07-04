命令：
	mkdir ：XX (创建一个空目录 XX指目录名);
	pwd ：显示当前目录的路径;
	git init :把这个目录变成git可以管理的仓库;
	cd :打开文件目录；
	git add 文件（夹）名 :添加文件暂存区；
	git commit( -m "注释内容") :提交文件到仓库（括号内为注释添加）；
	git status ：查看状态（是否还有文件未提交）；
	git diff 文件 ：查看修改内容；
	git log ：查看最近三次提交历史记录；
	git log –-pretty=oneline ：只含版本号和变更信息的简化历史记录；
	git reset --hard HEAD^ ：回退到上一个版本；
	git reset --hard HEAD~N ：回退到前N个版本；
	git reflog :查看版本号；
	git reset --hard 版本号 :恢复到指定版本；
	cat 文件名 ：查看文件内容；
	总结创建与合并分支命令如下：
		查看分支：git branch
		创建分支：git branch name
		切换分支：git checkout name
		创建+切换分支：git checkout –b name
		合并某分支到当前分支：git merge name
		删除分支：git branch –d name

	git remote add origin https://github.com/tugenhua0707/testgit 关联一个远程库

    git push –u(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

    git clone https://github.com/tugenhua0707/testgit  从远程库中克隆

    git rm 文件 :删除文件
    git rm -rf .   :删除当前目录下的所有文件

    git checkout -b gh-pages origin/gh-pages :在本地新建一个由远程"orgin/gh-pages"分支下面分化出来的"gh-pages"

    git push origin gh-pages


    1.个人主页必须要和用户的GitHub帐号同名，所以每个用户有且只能有一个repo作为个人主页，且必须是 <username>/<username>.github.io 的形式；而项目主页的命名则没有这种限制，且数量有任意多个。

    2.不考虑绑定的自定义域名的前提下，个人主页的GitHub二级域名为 <username>.github.io ;项目主页的GitHub二级域名为 <username>.github.io/<projectname> ,没有 <projectname>.<username>.github.io 这种方式

    3.个人主页的展示内容以 master 分支里的文件为准；而项目主页的展示内容以 gh-pages 分支内的文件为准

    （重要）建立项目主页步骤：
    1.点击右上角“+”，新建一个repository(仓库);
    	a.填写"repository name"仓库名（必需）和"Description"描述（可选）；
    	b.类型默认选择为public.(此处无需更改，private为私人类型需要花钱购买该项服务)；
    	c.勾选项"Intialize this repository with a Readme"为初始化（可选）；
    	d.点击"Create repository"按钮;
    2.创建用于页面展示的gh-pages分支;
	    a.点击"settings";
	    b.在options下右侧显示内容拉至下部找到GitHub Pages栏；
	    c.点击"Automatic page generator"按钮跳转到编辑页面；
	    d.在接下来的操作中基本都不用管，一路点绿色按钮直到点击"publish page"按钮结束;
	    e.此时已创建完用于展示的默认页面；
    3.克隆仓库到本地并在本地将你需要展示的内容文件上传到gh-pages分支；
    	a.在你本地用来安放仓库的目录下右键选择"git bash here"会弹出git命令窗口;
    	b.在命令窗口中输入 "git clone https://github.com/用户名/仓库名" 从远程库中克隆到本地生成对应的仓库名文件夹;
    	c.双击（仓库名)文件夹；
    	d.在命令窗口中输入 "git checkout -b gh-pages origin/gh-pages" 在本地新建一个由远程"orgin/gh-pages"分支下面分化出来的"gh-pages"（暂时不懂也无所谓，执行这句就行）;
    	e.然后输入命令 "git rm -rf ."删除当前仓库目录下的所有(步骤2中创建分支时系统默认生成的）文件;
    	f.直接在此处编辑你用来展示页面的文件或者将你需要用来展示页面的文件放到此目录下；
    	g.在命令窗口中输入 "git add ."缓存当前目录下的所有文件['.'代表全部，如果只是修改/更新请将'.'换成需要更改的文件（夹）名];
    	h.在命令窗口中输入 "git commit -m '注释内容' "  提交文件到当前仓库；
    	i.在命令窗口中输入 "git push origin gh-pages"  推送文件到远程仓库(此处最后需要你输入你的用户名和密码)；

    如果已经完成过上面步骤，但是后面想修改前面的文件内容时:
    	按顺序执行第3步中的"c"、"a"、"g"、"h"、"i"即可;

    至此，项目页面展示完成，通过"http://用户名.github.io/项目名"即可展示你的页面了。
    (注意：上述步骤中输入命令时，只需输入双引号内的内容。)

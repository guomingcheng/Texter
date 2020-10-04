(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{360:function(a,t,s){"use strict";s.r(t);var r=s(42),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"初识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初识"}},[a._v("#")]),a._v(" 初识")]),a._v(" "),s("h4",{attrs:{id:"docker-是简化项目上线部署而孕育而生的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-是简化项目上线部署而孕育而生的"}},[a._v("#")]),a._v(" "),s("div",{staticClass:"biaoti2"}),a._v("  docker 是简化项目上线部署而孕育而生的")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 云计算的兴起使得硬件扩展变的很容易，但软件部署对比硬件却是一个难题。而这时 docker 的出现就是简化项目部署并能快速的交付。")])]),a._v(" "),s("blockquote",[s("p",[a._v("docker 是一个开源的项目，由 dotCloud 公司推出的产品。而 docker 的目标是实现轻量级操作系统虚拟化解决方案，容器的启动可以在秒级内实现，对比传统的虚拟机就有很大的优势，而且一台主机(linux) 可以同时运行千个数的容器。docker 的出现可以让 开发-测试-部署 的环境部署实现很简单。")])])]),a._v(" "),s("h2",{attrs:{id:"重要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要概念"}},[a._v("#")]),a._v(" 重要概念")]),a._v(" "),s("h4",{attrs:{id:"镜像仓库-repostiory-、本地镜像-image-、容器-container-。三者的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像仓库-repostiory-、本地镜像-image-、容器-container-。三者的概念"}},[a._v("#")]),a._v(" "),s("div",{staticClass:"biaoti2"}),a._v("  镜像仓库(Repostiory)、本地镜像(Image)、容器(Container)。三者的概念")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticStyle:{"font-weight":"bold"},attrs:{id:"gonglian"}},[a._v(" 镜像仓库")]),s("br"),a._v("\nDocker 仓库是集中存放镜像文件的场所，仓库可分为公有仓库与私有仓库。最大的公开仓库是 Docker Hub 存放大量的镜像文件供用户下载，私有仓库我们可以在本地搭建起来。无论是公有或者私有都可以被自己创建的镜像文件 push 上去，使用时就可以 pull 下来啦。\n"),s("br"),s("br"),a._v(" "),s("span",{staticStyle:{"font-weight":"bold"},attrs:{id:"gonglian"}},[a._v(" 本地镜像")]),s("br"),a._v("\nDocker 镜像就是一个只读模板，一个镜像可以包含完整的 linux 操作系统，可以在当前系统安装服务。镜像作用是用来创建一个或多个实例容器的，\n"),s("br"),s("br"),a._v(" "),s("span",{staticStyle:{"font-weight":"bold"},attrs:{id:"gonglian"}},[a._v(" 容器")]),s("br"),a._v("\n容器，可把容器看作是一个简易版的 linux，而 Docker 利用容器来运行服务应用程序。容器的创建需要镜像、可创建一个或多个，容器之间都是互相隔离的，可保证安全平台。")]),a._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-01.png",alt:"An image"}})])])]),a._v(" "),s("h2",{attrs:{id:"安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[a._v("#")]),a._v(" 安装 docker")]),a._v(" "),s("h4",{attrs:{id:"_1、安装-docker-需要的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装-docker-需要的依赖"}},[a._v("#")]),a._v(" 1、安装 docker 需要的依赖")]),a._v(" "),s("blockquote",[s("p",[a._v("进到 linux 系统中，执行当前依赖安装命令:  "),s("span",{attrs:{id:"gonglian"}},[a._v("  yum install -y yum-utils device-mapper-persistent-data lvm2 ")])]),a._v(" "),s("blockquote",[s("p",[a._v("结尾出现下面内容证明安装成功。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-02.png",alt:"An image"}})])])]),a._v(" "),s("h4",{attrs:{id:"_2、更换-docker-的-yum-源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、更换-docker-的-yum-源"}},[a._v("#")]),a._v(" 2、更换 docker 的 yum 源")]),a._v(" "),s("blockquote",[s("p",[a._v("接着执行更换命令: "),s("span",{attrs:{id:"gonglian"}},[a._v("  yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])]),a._v(" "),s("blockquote",[s("p",[a._v("出现一下字样表示更换成功。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-03.png",alt:"An image"}})])])]),a._v(" "),s("h4",{attrs:{id:"_3、安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装-docker"}},[a._v("#")]),a._v(" 3、安装 docker")]),a._v(" "),s("blockquote",[s("p",[a._v("最后执行安装命令: "),s("span",{attrs:{id:"gonglian"}},[a._v("  yum install docker-ce ")])]),a._v(" "),s("blockquote",[s("p",[s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-04.png",alt:"An image"}}),a._v(" "),s("br"),a._v(" "),s("br"),a._v("通过 yum 命令查看 docker 安装的程序:  "),s("span",{attrs:{id:"gonglian"}},[a._v(" yum list installed | grep docker ")])])])]),a._v(" "),s("h4",{attrs:{id:"_4、最后的配置与命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、最后的配置与命令"}},[a._v("#")]),a._v(" 4、最后的配置与命令")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 这些命令都是关于 docker 自身服务相关的。也只是基本操作，如: service docker start 启动 docker 服务。还有配置 docker 镜像仓库的地址。")])]),a._v(" "),s("blockquote",[s("p",[a._v("docker 生命周期命令:"),s("br"),a._v(" "),s("span",{attrs:{id:"gonglian"}},[a._v(" service docker [start(启动) | stop(关闭) | status(状态) | restart(重启) ] "),s("br")]),a._v(" "),s("br"),a._v("\n查看 docker 版本号 :  "),s("span",{attrs:{id:"gonglian"}},[a._v(" docker [version(版本) | info(信息)] ")]),a._v(" "),s("br"),s("br"),a._v("\n设置 docker 开机自启动 : "),s("span",{attrs:{id:"gonglian"}},[a._v(" chkconfig docker on ")])])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v("  配置镜像加载器 ")])]),a._v(" "),s("blockquote",[s("p",[a._v("编辑 /etc/docker/daemon.json 文件，如果没有该文件就创建一个名为 daemon.json 文件，添加以下内容。之后重启就可以，镜像的拉取就会快了。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://registry.docker-cn.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://f1361db2.m.daocloud.io"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"容器命令实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器命令实践"}},[a._v("#")]),a._v(" 容器命令实践")]),a._v(" "),s("h4",{attrs:{id:"创建容器启动并进入内部交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建容器启动并进入内部交互"}},[a._v("#")]),a._v(" 创建容器启动并进入内部交互")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 当我们要部署服务时，就是创建 centos 操作系统的容器，并通过 /bin/bash 进入内部以其交互，可以在容器的内部安装 mysql 、redis 等等服务，不过建议一个容器就安装一个服务")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker run -it --name [容器的别名] [当前容器的镜像名称] /bin/bash")]),s("br"),a._v(" "),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-07.png",alt:"An image"}}),a._v(" "),s("br"),s("br"),a._v(" "),s("span",{attrs:{id:"gonglian"}},[a._v(" 退出容器的交互，返回到宿主机: "),s("br")]),a._v("\n第一种: 使用该命令退出并关闭容器 "),s("span",{staticClass:"hei"},[a._v(" exit ")]),a._v(" "),s("br"),a._v("\n第二种: 使用快捷键退出不关闭容器 "),s("span",{staticClass:"hei"},[a._v("  ctrl + p + q")])])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 这是创建容器并以后台方式运行名为 tomcat-01 容器。 -p 表示以后台的方式运行，-p 8080:8080 表示把容器的 8080 端口绑定到宿主机的 8080 端口。当访问宿主机的 ip:8080 时，就是访问的容器的服务")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker run -d --name tomcat-01 -p 8080:8080  tomcat ")])])])]),a._v(" "),s("h4",{attrs:{id:"其他与容器命令相关的综合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他与容器命令相关的综合"}},[a._v("#")]),a._v(" 其他与容器命令相关的综合")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 关于容器的生命周期的命令：")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker stop [容器的名称] ")]),a._v(" "),s("br"),a._v("\n这个容器优雅退出的方式，就是发送一个退出请求，等待容器退出运行状态。如把 "),s("span",{staticClass:"hei"},[a._v("stop")]),a._v(" 换成 "),s("span",{staticClass:"hei"},[a._v("kill")]),a._v(" 那么就是直接退出，与杀死一个进程类似\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v("docker [start | restart] [容器的别名]")]),a._v("\nstart 与 restart 这个俩个分别是启动与重启容器\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v("docker rm [容器的别名]")]),a._v("\n删除一个实列容器，只有当容器不是运行状态才可以删除\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v("docker [pause | unpause] [容器的别名]")]),a._v(" "),s("br"),a._v("\npause 与 unpause 这俩个分别是暂停容器中所有的进程与恢复容器中所有的进程")])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 关于容器的运维方面的命令:")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker ps ")]),a._v(" "),s("br"),a._v("\n查看所有正在运行的容器, 如果加一个 -a  "),s("span",{staticClass:"hei"},[a._v(" docker ps -a")]),a._v(" 那么就是查看所有实列出来的容器\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v(" docker exec -it [容器的别名] /bin/bash ")]),a._v(" "),s("br"),a._v("\n启动容器后，可以通过当前的命令进入容器内部以其交互\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-08.png",alt:"An image"}}),a._v(" "),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v(" docker inspect [容器的别名]")]),a._v(" "),s("br"),a._v("\n使用该命令可以查看容器的基础信息，如容器的 IP 等等信息的操作\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v(" docker logs [容器的别名]")]),a._v(" "),s("br"),a._v("\n输出容器的日志，比如: 一个容器内部有服务启动，那么通过 logs 命令在宿主机中打印出容器产生的日志信息")])])]),a._v(" "),s("h2",{attrs:{id:"镜像命令实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像命令实践"}},[a._v("#")]),a._v(" 镜像命令实践")]),a._v(" "),s("h4",{attrs:{id:"删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" 删除镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("镜像的制作是通过一层层的叠起来，当我们删除一个镜像时，会出现删除了很多东西，而这些都是组合起来当前的镜像。不过有一点要注意: 删除镜像先删除当前镜像创建的容器。")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker rmi [镜像名]")]),a._v(" "),s("br"),a._v(" "),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-09.png",alt:"An image"}})])])]),a._v(" "),s("h4",{attrs:{id:"其他与镜像命令的综合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他与镜像命令的综合"}},[a._v("#")]),a._v(" 其他与镜像命令的综合")]),a._v(" "),s("blockquote",[s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker history [镜像名]")]),a._v(" "),s("br"),a._v("\n查看镜像的组合，会显示所有的层级。\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v(" docker commit [容器被创建镜像的名字] [创建出镜像的名字]")]),a._v(" "),s("br"),a._v("\ncommit 是把容器创建城镜像，而这个镜像就跟 pull 的一样，可以运行\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-17.png",alt:"An image"}})])])]),a._v(" "),s("h2",{attrs:{id:"仓库命令实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仓库命令实践"}},[a._v("#")]),a._v(" 仓库命令实践")]),a._v(" "),s("h4",{attrs:{id:"搜索镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[a._v("#")]),a._v(" 搜索镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("该命令会去 docker 镜像仓库查找匹配名称的镜像并显示出来。可通过该命令查询自己需要的镜像是否存在。")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker search [镜像名称]")]),a._v(" "),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-05.png",alt:"An image"}})])])]),a._v(" "),s("h4",{attrs:{id:"其他与仓库命令的综合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他与仓库命令的综合"}},[a._v("#")]),a._v(" 其他与仓库命令的综合")]),a._v(" "),s("blockquote",[s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker images")]),s("br"),a._v("\n这个可以查看在宿主机的所有本地镜像，只要运行该命令即可\n"),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v("docker pull [IP:8080]/[仓库名]/[镜像名称]:[版本] ")]),s("br"),a._v("\n拉取镜像，如果没有指定 IP ,那么默认是 docker.io , 如果没有指定仓库，那么默认是在 docker 官方仓库中拉取，镜像冒号后面跟着版本号。如果没有版本号则默认是 latest。在 docker 官方创建账号，可以创建自己的仓库也可以拉取的。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-06.png",alt:"An image"}})])])]),a._v(" "),s("h4",{attrs:{id:"往仓库中推送镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#往仓库中推送镜像"}},[a._v("#")]),a._v(" 往仓库中推送镜像")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 1、创建一个标记 ")]),s("br")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker tag [本地镜像名称] [IP与端口]/[公有仓库名]/[一个名称]:[版本]")]),a._v(" "),s("br"),a._v("\ntag 命令是把本地一个镜像复制一份, 标记成一个 push 路径。这个镜像路径也是不写的使用默认的。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-10.png",alt:"An image"}})])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 2、登录公有的仓库 ")]),s("br")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker login")]),a._v(" "),s("br"),a._v("\n只有往公有仓库 push 才需要登录账户，而私有仓库则不需要的。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-11.png",alt:"An image"}})])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v("3、往仓库中 push ")]),s("br")]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker push [标记的路径] ")]),a._v(" "),s("br"),a._v("\npush 需要使用表示路径，该标记路径就表明了 IP 地址，仓库的位置，镜像的名称与版本号\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-12.png",alt:"An image"}})])])]),a._v(" "),s("h2",{attrs:{id:"私有仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库"}},[a._v("#")]),a._v(" 私有仓库")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v("  1、pull 私有仓库镜像")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("  docker pull registry ")]),s("br"),a._v("\n在 docker 官方也提供了私有仓库的镜像，所有我们只要 pull 下来，就有自己私有仓库了。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-14.png",alt:"An image"}})])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 2、在配置 http 协议请求 ")])]),a._v(" "),s("blockquote",[s("p",[a._v("私服默认是 https 协议传输，所以需要在目录 /etc/docker/ 下编辑 doemon.json 文件，添加一下内容。要注意的是: 配置 ip 需要的是宿主机的 IP.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.17.8.1/24"')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("配置网段，表示 docker 容器的 IP 是在 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.17")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".8")]),a._v(" 的网段下"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"insecure-registries"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"192.168.150.145:5000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v(" 3、启动私服并映射端口")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v("docker run -d --name reg -p 5000:5000 registry:latest")]),a._v(" "),s("br"),a._v(" "),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-13.png",alt:"An image"}}),a._v(" "),s("br"),s("br"),a._v(" "),s("span",{attrs:{id:"gonglian"}},[a._v(" 查询私有仓库的镜像"),s("br")]),a._v("\n可使用该命令获取镜像的信息: "),s("span",{staticClass:"hei"},[a._v(" curl http://192.168.150.145:5000/v2/_catalog ")]),s("br"),a._v("\n查看一个镜像有哪些版本信息: "),s("span",{staticClass:"hei"},[a._v(" curl  http://192.168.150.145:5000/v2/hello[镜像名称]/tags/list ")])])])]),a._v(" "),s("h2",{attrs:{id:"文件挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件挂载"}},[a._v("#")]),a._v(" 文件挂载")]),a._v(" "),s("h4",{attrs:{id:"容器一个目录与宿主机一个目录的数据同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器一个目录与宿主机一个目录的数据同步"}},[a._v("#")]),a._v(" "),s("div",{staticClass:"biaoti2"}),a._v(" 容器一个目录与宿主机一个目录的数据同步")]),a._v(" "),s("blockquote",[s("p",[s("span",{attrs:{id:"gonglian"}},[a._v("  在业内有一个使用 docker 标准，就是只拿 docker 创建容器使用，不把数据存放在容器中。这是方便以后更新镜像造成数据丢失。这就要使用文件挂载，把宿主机与容器的目录数据共享，当删除容器时，宿主机的文件数据不会被删除")])]),a._v(" "),s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker run -it --name centosData-03 -v [挂载目录] centos /bin/bash ")]),a._v(" "),s("br"),a._v("\n-v 文件挂载， 这个值是容器的挂载目录。而宿主机的默认目录都是在 /var/lib/docker/volums/ 文件夹下。可以使用 "),s("span",{staticClass:"hei"},[a._v(" docker inspect ")]),a._v(" 命令查询当前容器在宿主机目录详情。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-15.png",alt:"An image"}}),a._v(" "),s("br"),s("br"),a._v(" "),s("span",{staticClass:"hei"},[a._v(" docker run -it --name centosData-03 -v [容器挂载目录]:[宿主机挂载目录] centos /bin/bash ")]),a._v(" "),s("br"),a._v("\n当我们使用这个方式挂载时，就不会使用宿主机的默认挂载目录\n"),s("br"),s("br")])])]),a._v(" "),s("blockquote",[s("blockquote",[s("p",[s("span",{staticClass:"hei"},[a._v(" docker run -it --name centosData-04 --volumes-from [容器的名称] centos /bin/bash ")]),a._v(" "),s("br"),a._v("\n这个操作表示 centosData-04 容器也共享 centosData-03 容器的挂载文件夹。\n"),s("img",{attrs:{src:"/img/java/%E5%B7%A5%E5%85%B7/docker/docker-16.png",alt:"An image"}})])])]),a._v(" "),s("h2",{attrs:{id:"dockerfile-制作镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-制作镜像"}},[a._v("#")]),a._v(" Dockerfile 制作镜像")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("FROM  centos  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("设置基础镜像，一般都是")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("centos")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("基础操作系统")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\nMAINTAINER guoingcheng  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("指定维护者，比如是我制作的镜像，我就写我的名字")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\nRUN "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("会在容器的")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("shell")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("终端运行命令")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\nADD "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("把宿主机的文件复制一份到容器指定的目录，如果是压缩包那么自动解压")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\nWORKDIR "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("指定一个目录，就会在容器中")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("到指定的目录，而")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("WORKDIR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("后面的命令都是在该目录下执行")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\nEXPOSE "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("声明容器需要暴露的端口号，镜像")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("run")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("是就可以通过")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("进行端口映射绑定")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v('\n\nENV PATH /usr/local/nginx/sbin:$PATH <ENV 表示在容器中的系统变量中添加一条路径 /usr/local/nginx/sbin >\nCMD["/bin/bash" , "-c" , "nginx -g \'daemon off;\'"] '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("CMD")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("表示容器启动时默认")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("nginx")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("'daemon")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("off;'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("执行的命令")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("，创建容器时后面的命令会覆盖掉当前的命令")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"docker-网络配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络配置"}},[a._v("#")]),a._v(" Docker 网络配置")])])}),[],!1,null,null,null);t.default=e.exports}}]);
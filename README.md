# HTML5离线应用
###一、离线应用的特点和优势
	（1）允许web应用程序将app保存在浏览器中；
	（2）能够保存运行程序所需的所有文件，包括html,css,js,图片等；
	（3）不会被浏览器缓存清除；
	（4）同时在新的数据加载的时候，可以导入新的文件和数据；
	（5）离线状态的数据保存在localStorage中，等在线的时候再发送到服务器中。
	
###二、构建离线应用过程
	（1）创建文件清单，manifest;
	（2）html页面中设置manifest，例如
		<!Doctype html>
			<html manifest="app.appcache">
			<head></head>
			<body></body>
		</html>
	（3）注意事项：
		清单文件以CACHE MANIFEST字符串打头；
		其余缓存时URL列表，相对路径是相当于清单文件的URL路径；
		空行被忽略，注释以#开始
		清单文件的后缀名一般是.appcache
		同时需要设置Content-Type的头信息为text／cache-manifest才会有离线缓存，例如.htaccess文件
		例如：
		CACHE MANIFEST
		#开始清单文件，清单URL如下
		app.html
		app.js
		app.css
		logo.png
###三、构建可用的离线应用
	（1）离线清单可以包含多种头区域，例如CACHE: FALLBACK: NETWORK:三种等；
	（2）更新缓存的文件，需要通过修改清单文件，让浏览器去加载新的文件，这个过程中可以监听applicationCache
	 的onupdateready事件来给用户提醒和页面重新载入事件。
###四、开始项目
		
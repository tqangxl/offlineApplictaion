
//状态输出与打印
function status(msg){
	document.getElementById('statusline').innerHTML = msg;
	console.log(msg);
}
 
window.applicationCache.onchecking = function() {
	status('checking for a new version');
	return false;
};

window.applicationCache.onupdate = function(){
	status('this version is up to date');
	return false;
};

window.applicationCache.ondownloading = function(){
	status('downloading new version');
	window.progresscount = 0;
	return false;
};

window.applicationCache.onprogress = function(e){
	var progress = '';
	if(e && e.lengthComputable){
		progress = '' + Math.round(100 * e.loaded / e.total) + '%';
	}else{
		progress = "(" + (++progresscount) + ')';
	}

	status('downloading new version' + progress);
	return false;
};

window.applicationCache.oncache = function(){
	status('this application is now cached locally');
	return false;
};

window.applicationCache.onupdateready = function(){
	status('a new version has been downloaded. Reload to run it');
	return false;
};

window.applicationCache.onerror = function(){
	status('count not load manifest or cache application');
	return false;
};

window.applicationCache.onobsolete = function(){
	status('this application is no longer cached, Reload from network' );
	return false;
};












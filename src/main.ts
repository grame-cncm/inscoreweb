
///<reference path="editorGlue.ts"/>
///<reference path="editor.ts"/>



//------------------------------------------------------------------------
var editor : InscoreEditor;
var glue = new EditorGlue();
glue.start().then (() => { 
	editor = new InscoreEditor("code"); 
	editor.initialize();
	$("#version").text( inscore.versionStr() ); 
	setTimeout (() => $("#loading").remove(), 500);
	var ua = window.navigator.userAgent;
	let warnuser = (ua.indexOf('MSIE ') >= 0) || (ua.indexOf('Trident') >= 0) || (ua.indexOf('Edge') >= 0);
	if (warnuser)
		setTimeout (() => alert("WARNING!\nINScore JS doesn't work properly with Explorer or Edge.\nPreferably use Chrome or Firefox."), 700);
	
} );

var showlog = function(status: boolean) {
	if (status)
		$("#lognav").click();
	else
		$("#editornav").click();
}



///<reference types="@grame/inscorejs"/>
///<reference path="editor.ts"/>
///<reference path="editorGlue.ts"/>


//------------------------------------------------------------------------
var editor : InscoreEditor;
var glue = new EditorGlue();
glue.start().then (() => { 
	editor = new InscoreEditor("code"); 
	editor.initialize();
	$("#version").text( inscore.versionStr() ); 
	let content = glue.scanOptions();
	if (!content) {
		let script = localStorage.getItem ("inscore");
		if (!script)
			load ("Welcome", "examples/Welcome.inscore");
		else {
			let path = localStorage.getItem ("inscorePath");
			editor.setInscore (script, path);			
		}
	}

	setTimeout (() => $("#loading").remove(), 500);
	var ua = window.navigator.userAgent;
	let warnuser = (ua.indexOf('MSIE ') >= 0) || (ua.indexOf('Trident') >= 0) || (ua.indexOf('Edge') >= 0);
	if (warnuser)
		setTimeout (() => alert("WARNING!\nINScore JS doesn't work properly with Explorer or Edge.\nPreferably use Chrome or Firefox."), 700);

	// console.log ("window.navigator.userAgent " + window.navigator.userAgent);
	// console.log ("window.navigator.appVersion " + window.navigator.appVersion);
} );

var showlog = function(status: boolean) {
	if (status)
		$("#lognav").trigger("click");
	else
		$("#editornav").trigger("click");
}


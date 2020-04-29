
///<reference path="editorGlue.ts"/>
///<reference path="editor.ts"/>

//------------------------------------------------------------------------
var editor : InscoreEditor;
var glue = new EditorGlue();
glue.start().then (() => { 
	editor = new InscoreEditor("code"); 
	editor.initialize();
	$("#version").text( inscore.versionStr() ); 
} );

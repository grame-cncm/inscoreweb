
///<reference path="lib/inscore.d.ts"/>

//----------------------------------------------------------------------------
// this is the editor part, currently using CodeMirror
//----------------------------------------------------------------------------
class InscoreEditor {

	private fEditor: CodeMirror.EditorFromTextArea;

	constructor (divID: string) {
		this.fEditor = CodeMirror.fromTextArea (<HTMLTextAreaElement>document.getElementById (divID), {
			lineNumbers: true,
			// mode: 'inscore',
			theme: 'default',
			smartIndent: true,
			tabSize: 4,
			lineWrapping: true,
			indentWithTabs: true
		});
	}
	
	initialize () {
		this.fEditor.on("dragstart",	(editor: any, e: DragEvent) => {});
		this.fEditor.on("dragenter",	(editor: any, e: DragEvent) => { $("#editor").css( "opacity", 0.3 ); });
		this.fEditor.on("dragleave",	(editor: any, e: DragEvent) => { $("#editor").css( "opacity", 1 ); });
		this.fEditor.on("drop",			(editor: any, e: DragEvent) => { 
			$("#editor").css( "opacity", 1 );
			var data = e.dataTransfer.getData("text");
			if (!data) {
				e.stopPropagation();
				e.preventDefault();
				let filelist = e.dataTransfer.files;
				if (!filelist) return;
			
				let filecount = filelist.length;
				for (let i = 0; i < filecount; i++ )
					this.drop (filelist[i]);
			}
		});
		$("#font-family").change 	( (event) => { this.fEditor.getWrapperElement().style.fontFamily =  <string>$("#font-family").val(); } ); 
		$("#font-size").change 		( (event) => { this.fEditor.getWrapperElement().style.fontSize =  $("#font-size").val() + "px"; } ); 
		$("#etheme").change 		( (event) => { this.fEditor.setOption("theme", <string>$("#etheme").val()); } );
		$("#wraplines").change 		( (event) => { this.fEditor.setOption("lineWrapping",  <boolean>$("#wraplines").is(":checked")); } );
		$("#run").click				( (event) => { this.setInscore(this.fEditor.getValue()); } );
		$("#reset").click			( (event) => { inscore.postMessageStr("/ITL/scene", "reset"); } );

		this.fEditor.getWrapperElement().style.fontFamily =  <string>$("#font-family").val();
		this.fEditor.getWrapperElement().style.fontSize   =  $("#font-size").val() + "px"; 
		this.fEditor.setOption("theme", <string>$("#etheme").val());
		this.fEditor.setOption("lineWrapping",  <boolean>$("#wraplines").is(":checked"));
		this.setInscore (this.fEditor.getValue(), "Untitled");
	}
	
	setInscore ( script: string, path: string = null): void {
		let ext = "inscore";
		if (path) {
			$("#inscore-name").text (path);
			ext = path.substring(path.lastIndexOf('.')+1, path.length).toLocaleLowerCase();
		}
		$("#logs").text (script);
		if (ext == "inscore2")
			inscore.loadInscore2 ("/ITL parse v2;\n" + script);
		else 
			inscore.loadInscore ("/ITL parse v1;\n" + script, true);

		this.fEditor.setValue(script);
		this.fEditor.refresh();
	} 

	drop (file: File) {
		let reader = new FileReader();	
		reader.onload = (event) => { this.setInscore (reader.result.toString(), file.name); };
		reader.readAsText(file, file.name);
	}
	
	select(line: number, col: number) 	{ this.fEditor.setSelection( {line: line, ch: col-1}, {line: line, ch: col} ) };
	resize(h: number) 			{ $("div.CodeMirror").css("height", h) };
	get value(): string 		{ return this.fEditor.getValue(); }
}



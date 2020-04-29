
///<reference path="lib/inscore.d.ts"/>
///<reference path="download.ts"/>

//----------------------------------------------------------------------------
// this is the editor part, currently using CodeMirror
//----------------------------------------------------------------------------
class InscoreEditor {

	private fEditor: CodeMirror.EditorFromTextArea;
	private fFileName = "Untitled";

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
		$("code").show();
	}

	dragEnter (event : DragEvent) : void { 
		event.stopImmediatePropagation();
		event.preventDefault();
		$("#editor").css( "opacity", 0.3 );
	}

	dragLeave (event : DragEvent) : void {
		event.stopImmediatePropagation();
		event.preventDefault();
		$("#editor").css( "opacity", 1 );
	}
	
	initialize () {
		// this.fEditor.on("dragstart",	(editor: any, e: DragEvent) => {});
		this.fEditor.on("dragenter",	(editor: any, e: DragEvent) => { this.dragEnter(e); });
		this.fEditor.on("dragleave",	(editor: any, e: DragEvent) => { this.dragLeave(e); });
		this.fEditor.on("drop",			(editor: any, e: DragEvent) => { 
			this.dragLeave(e);
			var data = e.dataTransfer.getData("text");
			if (!data) {
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
		$("#clear-log").click		( (event) => { $("#logs").text (""); } );
		$("#saveinscore").click		( (event) => { this.saveInscore(); });
		$("#savehtml").click		( (event) => { this.saveHtml(); });
		 
		this.fEditor.getWrapperElement().style.fontFamily =  <string>$("#font-family").val();
		this.fEditor.getWrapperElement().style.fontSize   =  $("#font-size").val() + "px"; 
		this.fEditor.setOption("theme", <string>$("#etheme").val());
		this.fEditor.setOption("lineWrapping",  <boolean>$("#wraplines").is(":checked"));
		this.setInscore (this.fEditor.getValue(), this.fFileName);
	}

	
	saveInscore () 			{ download (this.fFileName + ".inscore",  this.fEditor.getValue()); }
	saveHtml () 			{ download (this.fFileName + ".html",  document.getElementById("scene").innerHTML);  }

	setInscore ( script: string, path: string = null): void {
		let ext = "inscore";
		if (path) {
			$("#inscore-name").text (path);
			let n = path.lastIndexOf('.');
			if (n > 0) {
				ext = path.substring(path.lastIndexOf('.')+1, path.length).toLocaleLowerCase();
				let fullname = path.substring(path.lastIndexOf('/')+1, path.length);
				this.fFileName = fullname.substring(0, fullname.lastIndexOf('.'));
			}
			else this.fFileName = path;
		}
		// $("#logs").text (script);
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



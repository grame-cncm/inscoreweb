
///<reference types="@grame/inscorejs"/>
///<reference path="download.ts"/>
///<reference path="href.ts"/>

interface RequiredLibs {
	guido: boolean,
	xml : boolean,
	faust: boolean
}

//----------------------------------------------------------------------------
// this is the editor part, currently using CodeMirror
//----------------------------------------------------------------------------
class InscoreEditor {

	private fEditor: CodeMirror.EditorFromTextArea;
	private fFileName = "Untitled";

	constructor (divID: string) {
		this.fEditor = CodeMirror.fromTextArea (<HTMLTextAreaElement>document.getElementById (divID), {
			lineNumbers: true,
			mode: 'inscore',
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

		$("#font-family").change 	( (event) => { this.fEditor.getWrapperElement().style.fontFamily =  this.fontMenu2fontFamily(<string>$("#font-family").val()); } ); 
		$("#font-size").change 		( (event) => { this.fEditor.getWrapperElement().style.fontSize =  $("#font-size").val() + "px"; } ); 
		$("#etheme").change 		( (event) => { this.fEditor.setOption("theme", <string>$("#etheme").val()); } );
		$("#wraplines").change 		( (event) => { this.fEditor.setOption("lineWrapping",  <boolean>$("#wraplines").is(":checked")); } );
		$("#run").on ("click",		(event) => { this.setInscore(this.fEditor.getValue()); } );
		$("#reset").on ("click",	(event) => { inscore.postMessageStr("/ITL/scene", "reset"); } );
		$("#clear-log").on ("click", (event) => { $("#logs").text (""); } );
		$("#saveinscore").on ("click", (event) => { this.saveInscore(); });
		$("#savehtml").on ("click",	 (event) => { this.saveHtml(); });
		 
		this.fEditor.getWrapperElement().style.fontFamily =  this.fontMenu2fontFamily(<string>$("#font-family").val());
		this.fEditor.getWrapperElement().style.fontSize   =  $("#font-size").val() + "px"; 
		this.fEditor.setOption("theme", <string>$("#etheme").val());
		this.fEditor.setOption("lineWrapping",  <boolean>$("#wraplines").is(":checked"));

		let logs = document.getElementById ("logs");
		$("#log-font").on ("click",	() => { logs.style.fontFamily = this.fontMenu2fontFamily(<string>$("#log-font").val()); });
		$("#log-size").on ("click", () => { logs.style.fontSize = $("#log-size").val() + "px"; });
		logs.style.fontFamily = <string>$("#log-font").val();
		logs.style.fontSize = $("#log-size").val() + "px";
	}

	fontMenu2fontFamily (val: string) : string 	{ 
		switch (val) {
			case "Arial":
			case "Helvetica":
			case "Courier":
			case "Courier New":
				return val;
			case "Baloo":
				return "baloo_2regular";
			case "Overlock":
				return "overlockregular";
			case "Source Code":
				return "source_code_proregular";
		} 
		return "Courier";
	}
	
	saveInscore () 			{ download (this.fFileName + ".inscore",  this.fEditor.getValue()); }
	// saveHtml () 			{ download (this.fFileName + ".html",  document.getElementById("scene").innerHTML);  }
	saveHtml () 			{ download (this.fFileName + ".html",  this.getHtml());  }
	requiredLibraries( script: string) : RequiredLibs	{
		let guido = (script.search (/set[ 	][ 	]*gmn/) + script.search (/set[ 	][ 	]*pianoroll/))  >1;
		let xml = script.search (/set[ 	][ 	]*xml/) >1;
		if (xml) guido = true;
		let faust = script.search (/set[ 	][ 	]*faust/) >1;
		return { guido: guido, xml : xml, faust: faust };
	}
	linkLibraries(script: string) 	{
		let req = this.requiredLibraries (script);
		let libs = 	"<link href=\"" + gLibsHref + "/fonts/fonts.css\" rel=\"stylesheet\">\n";
		libs += "<script src=\"" + gLibsHref + "/libINScore.js\"></script>\n";
		libs += "<script src=\"" + gLibsHref + "/INScoreJS.js\"></script>\n";
		if (req.guido)
			libs += "<script src=\"" + gLibsHref + "/libGUIDOEngine.js\"></script>\n";
		if (req.xml)
			libs += "<script src=\"" + gLibsHref + "/libmusicxml.js\"></script>\n";
		if (req.faust) {
			// libs += "<script src=\"" + gLibsHref + "/libfaust-wasm.js\"></script>\n";
			libs += "<script src=\"" + gLibsHref + "/FaustLibrary.js\"></script>\n";
		}
		return libs;
	}
	
	private formatScript( script: string) {
		let regex = /^[  ]*([^  ]+)[    *]set[    *]faust[    *]([0-9]*)..*/;
		let lines = script.split('\n');
		let out = "";
		let msg = new Array;
		lines.forEach(element => {
			let match = regex.exec(element);
			if (match !== null) {
				let address = match[1];
				let n = match[1].lastIndexOf ('/');
				let name = address.substr(n + 1);
				out += address + " set faustw " + match[2] + " " + name + ".wasm " + name + ".json;\n";
				// console.log ("post get wasm to " + address);
				// inscore.postMessageStrStr(address, "get", "wasm");
				msg.push (address);
			}
			else out += element + "\n";
		});
		return { inscore: out.replace(/</g, "&lt;"), wasm: msg };
	}

	getHtml () 	{
			let script = this.fEditor.getValue();
			let header = "<html>\n<head>\n";
			header += "	<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" >\n";
			header += "	<title>INScoreWeb</title>\n";
			header += this.linkLibraries(script);
			header += "	<style>.inscore { background-color: white; width: 100%; height: 100%; }</style>\n";
			header += "</head>\n<body>\n<div class=\"inscore\" id=\"scene\">\n<pre>\n";
			let footer = "</pre>\n</div>\n</body>\n</html>\n";
			let content = this.formatScript (script);
			content.wasm.forEach(address => {
				console.log ("post get wasm to " + address);
				inscore.postMessageStrStr(address, "get", "wasm");
			});
			return header + content.inscore + footer;
	}

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
		localStorage.setItem ("inscore", script);
		localStorage.setItem ("inscorePath", "saved-script." + ext);
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



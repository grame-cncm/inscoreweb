
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>

interface KeyHandler { (event: KeyboardEvent) : void }
interface UrlOption  { option: string; value: string; }

//----------------------------------------------------------------------------
// a simple glue to inscore engine
//----------------------------------------------------------------------------
class EditorGlue extends INScoreBase {

	fKeyHandler : KeyHandler;

	constructor() {
		super();
		$("#fullscreen").click		( (event) => { this.loadPreview() }); 
		this.fKeyHandler = this.closePreview;
    }


	//------------------------------------------------------------------------
	// scan the current location to detect parameters
	scanOptions() : void	{
		let options = this.scanUrl();
		for (let i=0; i<options.length; i++) {
			let option = options[i].option;
			let value = options[i].value;
			console.log ("scanOptions option: '" + option + "' value: '" + value + "'");
			switch (option) {
				case "code":
					editor.setInscore (atob(value));
					break;
				case "src":
					var oReq = new XMLHttpRequest();
					oReq.onload = () => { editor.setInscore( oReq.responseText, value); };
					oReq.open("get", value, true);
					oReq.send();					
					break;
				case "mode":
					if (value == "preview")
						$("#fullscreen").click();
					break;
			}
		}
	}

	//------------------------------------------------------------------------
	// scan the current location to detect parameters
	scanUrl() : Array<UrlOption>	{
		let result = new Array<UrlOption>();
		let arg = window.location.search.substring(1);
		let n = arg.indexOf("=");
		while (n > 0) {
			let option  = arg.substr(0,n);
			let remain = arg.substr(n+1);
			let next = remain.indexOf("?");
			if (next > 0) {
				let value = remain.substr(0,next);
				result.push ( {option: option, value: value} );
				arg = remain.substr(next + 1);
				n = arg.indexOf("=");
			}
			else {
				result.push ( {option: option, value: remain} );
				break;
			}
		}
		return result;
	}

	// load a script in an arbitrary div
	loadScript(div: HTMLElement, script: string) : void {
		let w = div.clientWidth;
		let h = div.clientHeight;
		if (!w || !h)
			setTimeout (() => this.loadScript (div, script), 50) ;
		else {
			inscore.loadInscore (script, true);
			this.addInscoreDiv (div, 1);
		}
	}

	closePreview(event: KeyboardEvent) {
		if (event.key == 'Escape') {
			$("#fsclose").click();
			window.removeEventListener("keydown", this.fKeyHandler, {capture: true});
		}
	}
	
	loadPreview() {
		let div = document.getElementById("fullscore");
		this.initDiv (div, false);
		let address = this.getSceneAddress (div);
		let score = address + " new;\n";
		score += editor.value.replace (/\/ITL\/scene/g, address);
		let preview = document.getElementById("preview");
		preview.style.visibility = "visible";
		this.loadScript (div, score);
		window.addEventListener ("keydown", this.fKeyHandler, {capture: true});
	}
	
	loadFromFile (content: string, v2: boolean, name: string) : void {
		editor.setInscore (content, name);
	}

	dragEnter (event : DragEvent) : void { 
		$("#scene").css( "opacity", 0.3 )
		super.dragEnter (event);
	}

	dragLeave (event : DragEvent) : void {
		$("#scene").css( "opacity", 1 )
		super.dragLeave (event);
	}
}


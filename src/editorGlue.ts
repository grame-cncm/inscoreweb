
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>

interface KeyHandler { (event: KeyboardEvent) : void }
interface UrlOption  { option: string; value: string; }

//----------------------------------------------------------------------------
// scene state management, used with preview mode
//----------------------------------------------------------------------------
class SceneState {
	position: string;
	left 	: string;
	top 	: string;
	width	: string;
	height	: string;
	zIndex	: string;
	background: string;

	constructor (scene : HTMLElement) {
		this.position 	= scene.style.position;
		this.left		= scene.style.left;
		this.top		= scene.style.top;
		this.width		= scene.style.width;
		this.height	= scene.style.height;
		this.zIndex	= scene.style.zIndex;
		this.background= scene.style.background;
	}

	restore (scene : HTMLElement) {
		scene.style.position= this.position;
		scene.style.left 	= this.left;
		scene.style.top 	= this.top;
		scene.style.width 	= this.width
		scene.style.height 	= this.height
		scene.style.zIndex 	= this.zIndex
		scene.style.background = this.background;
	}

	toString() : string	 { return "position: " + this.position + " left: " + this.left + " top: " + this.top + " width: " + this.width +" height: " + this.height + " zIndex: " + this.zIndex + " background: " + this.background; }
}

//----------------------------------------------------------------------------
// a simple glue to inscore engine
//----------------------------------------------------------------------------
class EditorGlue extends INScoreBase {

	fKeyHandler : KeyHandler;
	fSceneState : SceneState;

	constructor() {
		super();
		$("#fullscreen").on ("click", (event) => { this.enterPreview() }); 
		$("#closePreview").on ("click", (event) => { this.closePreview() }); 
		this.fKeyHandler = this.closePreview;
    }


	//------------------------------------------------------------------------
	// scan the current location to detect parameters
	scanOptions() : boolean	{
		let retcode = false;
		let options = this.scanUrl();
		let preview = false;
		for (let i=0; (i<options.length) && !preview; i++) {
			if ((options[i].option == "mode") && (options[i].value == "preview"))
				preview = true;
		}
		for (let i=0; i<options.length; i++) {
			let option = options[i].option;
			let value = options[i].value;
			switch (option) {
				case "code":
					editor.setInscore (atob(value));
					if (preview) $("#fullscreen").trigger("click");
					preview = false;
					retcode = true;
					break;
				case "src":
					var oReq = new XMLHttpRequest();
					if (preview) oReq.onload = () => { editor.setInscore( oReq.responseText, value); $("#fullscreen").trigger("click"); };
					else 		 oReq.onload = () => { editor.setInscore( oReq.responseText, value); };
					oReq.open("get", value, true);
					oReq.send();
					preview = false;
					retcode = true;
					break;
			}
		}
		if (preview)
			$("#fullscreen").trigger("click");
		return retcode;
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

	private closePreviewKey(event: KeyboardEvent) {
		if (event.key == 'Escape') this.closePreview();
	}

	private closePreview() {
		let scene = document.getElementById("scene");
		if (this.fSceneState) this.fSceneState.restore (scene);
		document.getElementById("closePreview").style.visibility = "hidden";
		inscore.postMessageStr ("/ITL/scene", "refresh");
		window.removeEventListener("keydown", this.fKeyHandler, {capture: true});
	}
		
	private enterPreview() {
		let scene = document.getElementById("scene");
		this.fSceneState = new SceneState (scene);
		scene.style.position = "absolute";
		scene.style.left = "0px";
		scene.style.top = "0px";
		scene.style.width = "100%";
		scene.style.height = "100%";
		scene.style.zIndex = "10";
		if (!scene.style.background) scene.style.background = "white";
		document.getElementById("closePreview").style.visibility = "visible";
		inscore.postMessageStr ("/ITL/scene", "refresh");
		this.fKeyHandler = (event: KeyboardEvent) => { this.closePreviewKey (event) } ;
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


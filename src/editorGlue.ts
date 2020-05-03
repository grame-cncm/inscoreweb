
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>

interface KeyHandler { (event: KeyboardEvent) : void }

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


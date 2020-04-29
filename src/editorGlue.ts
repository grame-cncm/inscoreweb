
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>
///<reference path="TLog.ts"/>


//----------------------------------------------------------------------------
// log support
//----------------------------------------------------------------------------
class inscoreLog extends TLog {
	log  (msg: string): void {
		document.getElementById("logs").textContent += msg + "\n";
	}

	error(msg: string): void {
		document.getElementById("logs").textContent += msg + "\n";
	}

}


//----------------------------------------------------------------------------
// a simple glue to inscore engine
//----------------------------------------------------------------------------
class EditorGlue extends INScoreBase {

	constructor() {
		gLog = new inscoreLog();
		super();
		$("#fullscreen").click		( (event) => { this.loadPreview() }); 
    }


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

	loadPreview() {
		let div = document.getElementById("fullscore");
		this.initDiv (div, false);
		let address = this.getSceneAddress (div);
		let score = address + " new;\n";
		score += editor.value.replace (/\/ITL\/scene/g, address);
		let preview = document.getElementById("preview");
		preview.style.visibility = "visible";
		this.loadScript (div, score);
	}
	
	loadFromFile (content: string, v2: boolean, name: string) : void {
		editor.setInscore (content, name);
	}

	dragEnter (event : DragEvent) : void { 
		event.stopImmediatePropagation();
		event.preventDefault();
		$("#scene").css( "opacity", 0.3 )
// console.log ("dragEnter ");
	}

	dragLeave (event : DragEvent) : void {
		event.stopImmediatePropagation();
		event.preventDefault();
		$("#scene").css( "opacity", 1 )
// console.log ("dragLeave ");
	}

}


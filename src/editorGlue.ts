
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>
///<reference path="TLog.ts"/>



//----------------------------------------------------------------------------
// a download function
//----------------------------------------------------------------------------
function download (filename : string, text: string) : void {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}


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


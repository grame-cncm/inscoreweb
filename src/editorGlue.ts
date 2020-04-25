
///<reference path="inscoreBase.ts"/>
///<reference path="editor.ts"/>

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
// a simple glue to inscore engine
//----------------------------------------------------------------------------
class EditorGlue extends INScoreBase {
	// fEditor : InscoreEditor;

	// initialise () : void {
	// 	super.initialise();
	// 	// this.fEditor = new InscoreEditor ("code");
	// }

	loadFromFile (content: string, v2: boolean) : void {
		editor.setInscore (content, null)
	}

	// accept (event : DragEvent) : boolean {
	// 	let items = event.dataTransfer.items;
	// 	for (let i=0; i< items.length; i++) {
	// 		switch (items[i].kind) {
	// 			case "file":
	// 				break;
	// 			default:
	// 				return false;
	// 		}
	// 	}
	// 	return true;
	// }

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


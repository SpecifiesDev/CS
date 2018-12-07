// main.js

//vars
var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");


// snake block pieces, first block in this is counted as a "head", used for later reference
var blocks = [];

// add a game counter
var seconds = 0;
var start = Date.now();

function setup() {
	buffer();
}





/*
*	First we need to calculate a buffer to prevent logic errors.
*	In our program the snake block and food blocks will be 5 pixels.
*   So to buffer the canvas we subtract 5 from the width and height by 5 and then
*   If it doesn't get to 0, we have a remainder of "x" that we subtract from the canvas.
*/
function buffer() {
	// our numbers to manip
	var bufferWidth = window.innerWidth - 50;
	var	bufferHeight = window.innerHeight - 20;

	// constants
	var constantWidth = ctx.canvas.width;
	var constantHeight = ctx.canvas.height;



	// Our switches to end the while loops
	var	widthSwitch = false;
	var heightSwitch = false;


	while(!widthSwitch) {
		bufferWidth -= 5;
		log("Currently buffering canvas width, value: " + bufferWidth);
		if(bufferWidth == 0) {
			// Success? just finish
			widthSwitch = true;
		}
		if(bufferWidth < 0) {
			//Remainder? Fix it, then rebuffer.
			widthSwitch = true;
			rebuffer = true;
			var remainder = bufferWidth += 5;
			err("Canvas too wide, with a remainder of [" + remainder + "] Fixing the issue.");
			constantWidth -= remainder;
			ctx.canvas.width = constantWidth;
		}
	}
	while(!heightSwitch) {
		//Works the same as the above while function
		bufferHeight -= 5;
		log("Currently buffering canvas height, value: " + bufferHeight);
		if(bufferHeight == 0) {
			heightSwitch = true;
		}
		if(bufferHeight < 0) {
			heightSwitch = true;
			var remainder = bufferHeight += 5;
			err("Canvas too high, with a remainder of [" + remainder + "] Fixing the issue.");
			constantHeight -= remainder;
			ctx.canvas.height = constantHeight;
		}
	}
	log("Width: " + constantWidth);
	log("Height: " + constantHeight);

	// check if we need to rebuffer
	if(!(bufferWidth % 5 == 0) && !(bufferHeight % 5 == 0)) {
		log("Bufferer still not fixed, running again");
		buffer();
	} else {
		log("We fixed the canvas, loading the rest of the game.");
	}

}





setup();

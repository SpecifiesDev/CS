//main.js

//vars
var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");


// snake block pieces, first block in this iss counted as a head
var blocks = [];

//counter 
var seconds = 0;
var start = Date.now();

//manip for grid
var grid = [];
var w;
var h;

function setup() {
	buffer();
	setGrid();
}

function buffer() {
	var width = window.innerWidth - 50;
	var height = window.innerHeight - 20;

	// check if theres a remainder

	//width
	var wr = width % 5;
	if(wr > 0) {
		width -= wr;
	}
	//height
	var hr = height % 5;
	if(hr > 0) {
		height -= hr;
	}

	//log and set
	log("Width: >> " + width);
	log("Height: >> " + height);

	ctx.canvas.width = width;
	ctx.canvas.height = height;
	w = width;
	h = h;
}
function setGrid() {
	// 2d arrays
	rows = w / 5;
	log("Creating game grid with " + rows + " rows.");
	for(var i = 0; i < rows; i++) {
		grid[i] = [];
	}
	for(var i = 0; i < rows; i++) {
		grid[i][i] = 1; 
	}


}

setup();
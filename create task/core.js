//main.js

//vars
var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");


// snake block pieces, first block in this iss counted as a head
var blocks = [];

// food pieces
var food = [];

//counter 
var seconds = 0;
var start = Date.now();

//manip for grid
var grid = [];
var w;
var h;
var rows;
var columns;

function setup() {
	buffer();
	setGrid();
	log(grid);
	log(rows);
	generateRandom();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

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

	// we define a colum object to only go (column) down the 2d array
	columns = h / 5;
	log("Creating game grid with " + rows + " rows.");
	for(var i = 0; i < rows; i++) {
		grid[i] = [];
	}
	for(var i = 0; i < rows; i++) {
		grid[i][i] = 1;
	}


}
function generateRandom() {
	log("random");
	log(grid[50][50]);
	// first we select a random place on our grid.
	var x = Math.floor((Math.random() * rows) + 1);
	var y = Math.floor((Math.random() * columns) + 1);
	log(x);
	var data = grid[x][y];
	log(data);
	if(data == 0) {
		generateRandom();
	}
	if(data == 1) {
		var mx = x * 5;
		var my = y * 5;

		var togen = rectangle({x: mx, y: my, color: "blue"})
		togen.draw();

		grid[x][y] = 0;
		log("Generate new rect at: " + mx + " - " + my);
	}

}
function addBlock() {

}
function rectangle(r) {
	
	r.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.rect(x, y, wid, hei);
		ctx.fill();
		ctx.closePath();
	}
	return r;
}
setup();

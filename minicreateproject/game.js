// Card game

//0-9, reverse, + 2, skip
// + 4, pick a color

var green = [];
var blue = [];
var red = [];
var yellow = [];
var wild = [];

pushLoop(green, false);
pushLoop(blue, false);
pushLoop(yellow, false);
pushLoop(red, false);
pushLoop(wild, true);




function start() {
  for(var i = 0; i < wild.length; i++) {
    console.log(wild[i]);
  }
}

/*
 * array - array to push  
 * isWild - tests if it is wild
 */
function pushLoop(array, isWild) {
  if(!isWild) {
    for(var i = 0; i < 10; i++) {
      array.push(i);
      array.push(i);
    }
    for(var i = 0; i < 1; i++) {
      array.push("reverse");
      array.push("reverse");
      array.push("skip");
      array.push("skip");
      array.push("plustwo");
      array.push("plustwo");
    }
  } 
  else {
  	for(var i = 0; i < 4; i++) {
  		array.push("plusfour");
  	}
  	for(var i = 0; i < 4; i++) {
  		array.push("pick");
  	}
  }
}

start();
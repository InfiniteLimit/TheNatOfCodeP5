// Mover with Random Vector. sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let Mover;

function setup() {
	createCanvas(400, 400);
	Mover = new Mover(200, 200);
}

function draw() {
	background(0);
	Mover.update();
	Mover.show();
}
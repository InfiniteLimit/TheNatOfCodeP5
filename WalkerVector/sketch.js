// Mover with Random Vector. sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let mover;

function setup() {
	createCanvas(400, 400);
	mover = new Mover(200, 200);
}

function draw() {
	background(0);
	mover.update();
	mover.show();
}
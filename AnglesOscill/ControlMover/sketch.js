// ControlMover, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let mover;

function setup() {
	createCanvas(600, 600);
	let x = 100;
	let y = 200;
	let m = 4;
	mover = new Mover(x, y, m);
}

function draw() {
	background(0);
	mover.update();
	mover.show();
}
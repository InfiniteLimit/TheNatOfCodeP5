// Angles and Oscillations, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let angle = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(146, 83, 161);
	noStroke();
	fill(240, 99, 164);
	rectMode(CENTER);
	translate(200, 200);
	rotate(angle);
	rect(0, 0, 128, 64);

	angle += PI / 360;
}
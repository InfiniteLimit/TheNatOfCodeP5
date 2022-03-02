// Harmonic Motion, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let angle = 0;
let angleV = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	translate(200, 200);
	fill(252, 238, 33);
	//let r = map(sin(angle), -1, 1, 0, 200);
	let y = map(sin(angle), -1, 1, -200, 200);
	stroke(255);
	line(0, 0, 0, y);
	circle(0, y, 32);

	angle += angleV;
	angleV += 0.0001;

}
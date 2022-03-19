// Scalar Projection, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let a;
let path;

function setup() {
	createCanvas(400, 400);
	path = createVector(200, 60);
}

function vectorProjection(a, b) {
	let bCopy = b.copy().normalize();
	let sp = a.dot(bCopy);
	return bCopy.mult(sp);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);
	let pos = createVector(100, 200);

	let mouse = createVector(mouseX, mouseY);
	let a = p5.Vector.sub(mouse, pos);


	// line(pos.x, pos.y, pos.x + a.x, pos.y + a.y);
	line(pos.x, pos.y, pos.x + path.x, pos.y + path.y);

	let v = vectorProjection(a, path);

	stroke(0, 0, 255);
	strokeWeight(8);
	// line(pos.x, pos.y, pos.x + v.x, pos.y + v.y);

	strokeWeight(1);
	stroke(255);
	// line(pos.x + a.x, pos.y + a.y, pos.x + v.x, pos.y + v.y);

	fill(0, 255, 0);
	noStroke();
	circle(pos.x + a.x, pos.y + a.y, 16);

	fill(255, 0, 0);
	noStroke();
	circle(pos.x + v.x, pos.y + v.y, 16);

	fill(0, 255, 0);
	noStroke();
	// circle(pos.x, pos.y, 16);

}
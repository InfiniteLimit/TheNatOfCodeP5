// Automatic Steering, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let vehicle;
let target;

function setup() {
	createCanvas(400, 400);
	vehicle = new Vehicle(100, 100);
}

function draw() {
	background(0);
	fill(255, 0, 0);
	noStroke();
	target = createVector(mouseX, mouseY);
	circle(target.x, target.y, 32);

	vehicle.seek(target);
	vehicle.update();
	vehicle.show();
}
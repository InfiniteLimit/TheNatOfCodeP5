// Automatic Steering, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let vehicle;

function setup() {
	createCanvas(800, 600);
	vehicle = new Vehicle(100, 100);
}

function draw() {
	background(0);

	vehicle.wander();

	vehicle.update();
	vehicle.show();
	vehicle.edges();
}
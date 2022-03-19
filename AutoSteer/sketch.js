// Automatic Steering, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let vehicle;
let path;

function setup() {
	createCanvas(800, 400);
	vehicle = new Vehicle(100, 100);
	vehicle.vel.x = 2;
	path = new Path(0, height / 2, width, height / 2);
}

function draw() {
	background(0);

	path.end.y = mouseY;


	let force = vehicle.follow(path);
	vehicle.applyForce(force);

	vehicle.edges();
	vehicle.update();
	vehicle.show();

	path.show();
}
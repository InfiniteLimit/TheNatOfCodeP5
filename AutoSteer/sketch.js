// Automatic Steering, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let vehicle;

function setup() {
	createCanvas(400, 400);
	vehicle = new Vehicle(100, 100);
}

function draw() {
	background(0);

	let target = createVector(mouseX, mouseY);
	fill(255, 0, 0);
	noStroke();
	ellipse(target.x, target.y, 32);

	let steering = vehicle.arrive(target);
	vehicle.applyForce(steering);
	vehicle.update();
	vehicle.show();

}
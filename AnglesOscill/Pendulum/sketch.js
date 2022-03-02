// Pendulum, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
	createCanvas(600, 400);
	origin = createVector(300, 0);
	angle = PI / 4;
	len = 300;
	bob = createVector();
}

function draw() {
	background(0);

	let force = -1 * gravity * sin(angle) / len;
	angleA = force;
	angleV += angleA;
	angle += angleV;

	// angleV *= 0.99;

	bob.x = len * sin(angle) + origin.x;
	bob.y = len * cos(angle) + origin.y;

	stroke(255);
	strokeWeight(4);
	fill(127);
	line(origin.x, origin.y, bob.x, bob.y);
	circle(bob.x, bob.y, 64);



}
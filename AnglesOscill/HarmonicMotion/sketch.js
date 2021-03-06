// Harmonic Motion, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let waves = [];

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 5; i++) {
		waves[i] = new Wave(random(20, 80), random(100, 600), random(0, TWO_PI));
	}
}

function draw() {
	background(0);

	for (let x = 0; x < width; x += 10) {
		let y = 0;
		for (let wave of waves) {
			y += wave.evaluate(x);
		}
		noStroke();
		ellipse(x, y + height / 2, 16);
	}

	for (let wave of waves) {
		wave.update();
	}
}

// let angles = [];
// let angleVs = [];
// let r = 4;

// function setup() {
// 	createCanvas(600, 400);
// 	let total = floor(width / (r * 2));
// 	for (let i = 0; i < total + 1; i++) {
// 		angles[i] = map(i, 0, total, 0, 2 * TWO_PI);
// 		angleVs[i] = 0.02;
// 	}
// }

// function draw() {
// 	background(0);
// 	translate(300, 200);
// 	stroke(252, 238, 33);
// 	beginShape();
// 	for (let i = 0; i < angles.length; i++) {
// 		let y = map(sin(angles[i]), -1, 1, -200, 200);
// 		let x = map(i, 0, angles.length, -300, 300);
// 		strokeWeight(4);
// 		// line(x, 0, x, y);
// 		fill(252, 238, 33);
// 		circle(x, y, r * 2);
// 		noFill();
// 		vertex(x, y);
// 		angles[i] += angleVs[i];
// 		// angleVs[i] += 0.0001;
// 	}
// 	endShape();
// }
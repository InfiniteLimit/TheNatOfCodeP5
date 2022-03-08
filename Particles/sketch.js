// Particles, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let emitters = [];
let img;

function preload() {
	img = loadImage('texture.png');
}

function mousePressed() {
	emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
	createCanvas(400, 400);
	emitters[0] = new Emitter(200, 375);
}

function draw() {
	clear();
	background(0);
	blendMode(ADD);

	let force = createVector(0, -0.1);
	let dir = map(mouseX, 0, width, -0.1, 0.1);
	let wind = createVector(dir, 0);

	for (let emitter of emitters) {
		emitter.applyForce(force);
		emitter.applyForce(wind);
		emitter.emit(1);
		emitter.show();
		emitter.update();
	}

}
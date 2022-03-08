// Particles, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let emitters = [];

function mousePressed() {
	emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
	createCanvas(400, 400);
	emitters[0] = new Emitter(200, 20)
}

function draw() {
	background(0);

	for (let emitter of emitters) {
		emitter.emit(1);
		emitter.show();
		emitter.update();
	}

}
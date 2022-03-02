// Spring Pendulum, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let particles = [];
let springs = [];
let spacing = 50;
let k = 0.1;

let gravity;

function setup() {
	createCanvas(800, 800);
	for (let i = 0; i < 20; i++) {
		particles[i] = new Particle(width / 2, i * spacing);
		if (i != 0) {
			springs.push(new Spring(k, spacing, particles[i], particles[i - 1]));
		}
	}
	particles[0].locked = true;

	gravity = createVector(0, 0.1);
}

function draw() {
	background(112, 50, 126);
	for (s of springs) {
		s.show();
		s.update();
	}

	noFill();
	stroke(255);
	strokeWeight(8);
	beginShape();
	let head = particles[0];
	curveVertex(head.position.x, head.position.y);
	for (p of particles) {
		p.applyForce(gravity);
		// p.show();
		p.update();
		curveVertex(p.position.x, p.position.y);
	}

	let tail = particles[particles.length - 1];
	curveVertex(tail.position.x, tail.position.y);
	endShape();

	if (mouseIsPressed) {
		tail.position.set(mouseX, mouseY);
		tail.velocity.set(0, 0);
	}

}
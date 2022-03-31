// Forces, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let movers = [];
let mu = 0.1;
let dragC = 0.2;
let G = 0.5;
let sun;

function setup() {
	createCanvas(600, 600);
	for (let i = 0; i < 10; i++) {
		let pos = p5.Vector.random2D();
		let vel = pos.copy();
		vel.setMag(random(10, 15));
		pos.setMag(random(100, 150));
		vel.rotate(PI / 2);
		let m = random(10, 15);
		movers[i] = new Mover(pos.x, pos.y, m, vel.x, vel.y);
	}
	sun = new Mover(0, 0, 500, 0, 0);
	background(0);
}

function draw() {
	background(0, 10);
	translate(width / 2, height / 2);

	for (let mover of movers) {
		sun.attract(mover);
		for (let other of movers) {
			if (other != mover) {
				mover.attract(other);
			}
		}
	}

	for (let mover of movers) {
		mover.update();
		mover.show();
	}

	// sun.show();
}
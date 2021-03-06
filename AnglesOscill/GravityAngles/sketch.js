// Forces, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let movers = [];
let mu = 0.1;
let dragC = 0.2;
let G = 5;
let attractor;

function setup() {
	createCanvas(600, 600);
	for (let i = 0; i < 10; i++) {
		//movers[i] = new Mover(random(width), 200, random(1, 8));
		let x = random(width);
		let y = random(height);
		let m = random(50, 150);
		movers[i] = new Mover(x, y, m);
	}
	attractor = new Attractor(width / 2, height / 2, 100);
	background(0);
}

function draw() {
	background(0);

	/*fill(255, 125);
	noStroke();
	rect(0, height / 2, width, height / 2);*/

	for (let mover of movers) {
		/*if (mouseIsPressed) {
			let wind = createVector(0.1, 0);
			mover.applyForce(wind);
		}
		let gravity = createVector(0, 0.2);
		let weight = p5.Vector.mult(gravity, mover.mass);
		mover.applyForce(weight);
		mover.friction();
		if (mover.pos.y > height / 2) {
			mover.drag(dragC);
		}*/

		mover.update();
		// mover.edges();
		mover.show();
		attractor.attract(mover);
		attractor.show();
	}
}
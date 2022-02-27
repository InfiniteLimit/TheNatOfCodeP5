// ControlMover, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let mover;

function setup() {
	createCanvas(400, 400);
	let x = 100;
	let y = 200;
	let m = 4;
	mover = new Mover(x, y, m);
}

function draw() {
	background(0);

	if (keyIsDown(LEFT_ARROW)) {
		mover.angle -= 0.05;
	} else if (keyIsDown(RIGHT_ARROW)) {
		mover.angle += 0.05;
	}

	mover.update();
	// mover.edges();
	mover.show();

}
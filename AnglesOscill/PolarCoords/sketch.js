// PolarCoords, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

let angle = 0;
let r = 150;

function setup() {
	createCanvas(400, 400);
	background(0);
}

function draw() {
	// background(0, 10);
	// translate(width / 2, height / 2);

	// /*	stroke(255);
	// 	strokeWeight(4);
	// 	noFill();
	// 	circle(0, 0, r * 2); */

	// strokeWeight(16);
	// stroke(252, 238, 33);

	// let x = r * cos(angle);
	// let y = r * sin(angle);
	// point(x, y);

	// angle += random(-0.1, 0.1);
	// r += random(-2, 2);
	// r = constrain(r, 0, width / 2);

	background(0);
	translate(width / 2, height / 2);

	stroke(255);
	strokeWeight(4);
	noFill();
	// circle(0, 0, r * 2);

	let increment = map(mouseX, 0, width, PI, 0.01);
	increment = constrain(increment, 0.01, PI);
	// let increment = 0.1;

	beginShape();
	for (let a = 0; a < TWO_PI; a += increment) {
		// let r1 = r + random(-50, 10);
		let r1 = r;
		let x = r1 * cos(a);
		let y = r1 * sin(a);
		vertex(x, y);
	}
	endShape(CLOSE);

}
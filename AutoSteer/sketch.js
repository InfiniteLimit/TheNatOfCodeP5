// Automatic Steering, sketch.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

let pursuer;
let target;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pursuer = new Vehicle(100, 100);
	target = new Target(200, 100);
}

function draw() {
	background(0);

	let steering = pursuer.pursue(target);
	pursuer.applyForce(steering);

	let d = p5.Vector.dist(pursuer.pos, target.pos);
	if (d < pursuer.r + target.r) {
		target = new Target(random(width), random(height));
		pursuer.pos.set(width / 2, height / 2);
	}

	pursuer.edges();
	pursuer.update();
	pursuer.show();

	let steering2 = target.evade(pursuer);
	target.applyForce(steering2);
	target.edges();
	target.update();
	target.show();

}

// Last let off after NOC 2 playlist ended
// let vehicle;
// let path;

// function setup() {
// 	createCanvas(800, 400);
// 	vehicle = new Vehicle(100, 100);
// 	vehicle.vel.x = 2;
// 	path = new Path(0, height / 2, width, height / 2);
// }

// function draw() {
// 	background(0);

// 	path.end.y = mouseY;


// 	let force = vehicle.follow(path);
// 	vehicle.applyForce(force);

// 	vehicle.edges();
// 	vehicle.update();
// 	vehicle.show();

// 	path.show();
// }
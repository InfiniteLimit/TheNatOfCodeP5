// ControlMover, mover.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.d = this.r * 2;

    this.angle = 0;
  }

  applyForce(force) {
    let a = p5.Vector.div(force, this.mass);
    this.acc.add(a);
  }

  edges() {
    if (this.pos.y + this.r >= height) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.y - this.r <= 0) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x + this.r >= width) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }

    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    // this.vel.add(this.acc);

    // this.angle += 0.1;

    this.vel = p5.Vector.fromAngle(this.angle);
    // this.vel.mult(5);

    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = this.vel.heading();
    rotate(this.angle);
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }
}
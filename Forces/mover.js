// Forces, mover.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
    this.d = this.r * 2;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y + this.r >= height) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    /*if (this.pos.y <= 0) {
      this.pos.y = 0;
      this.vel.y *= -1;
    }*/

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
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.edges();
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.d);
  }
}
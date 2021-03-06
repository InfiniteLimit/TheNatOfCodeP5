// Forces, mover.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

class Mover {
  constructor(x, y, m, vx, vy) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.d = this.r * 2;
  }

  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {

      // Direction of Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of Friction
      let normal = this.mass;
      friction.setMag(normal * mu);

      // Apply friction
      this.applyForce(friction);
    }
  }

  drag(c) {
    // Direction of drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    // Magnitude of drag
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    // Apply drag
    this.applyForce(drag);
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

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let strength = G * (this.mass * mover.mass) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.d);
  }
}
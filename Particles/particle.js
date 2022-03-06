// Particles, particle.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.d = this.r * 2;
    this.lifetime = 255;
  }

  finished() {
    return (this.lifetime < 0);
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
    this.acc.set(0, 0);

    this.lifetime -= 5;
  }

  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.d);
  }
}
// Particles, particle.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 64;
    this.lifetime = 255;
  }

  finished() {
    return (this.lifetime < 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 7;
  }

  show() {
    tint(255, 100, 100, this.lifetime);
    imageMode(CENTER);
    image(img, this.x, this.y, 32, 32);
  }
}
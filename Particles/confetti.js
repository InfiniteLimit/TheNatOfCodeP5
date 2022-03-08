// Particles, confetti.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
    this.angle = random(TWO_PI);
  }

  show() {
    noStroke();
    fill(255, this.lifetime);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    square(0, 0, this.r * 2);
    pop();
  }
}
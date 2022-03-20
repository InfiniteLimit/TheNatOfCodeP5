// Automatic Steering, particle.js
// From The Nature of Code by Dan Shiffman
// Nicholas Wolgamott

/// <reference path="c:\\Users\\monke\\.vscode\\extensions\\samplavigne.p5-vscode-1.2.8\\p5types\\global.d.ts" />

function findProjection(pos, a, b) {
  let v1 = p5.Vector.sub(a, pos);
  let v2 = p5.Vector.sub(b, pos);
  v2.normalize();
  let sp = v1.dot(v2);
  v2.mult(sp);
  v2.add(pos);
  return v2;
}

class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
    this.maxSpeed = 10;
    this.maxForce = 0.2;
    this.wanderTheta = PI / 2;

    // this.currentPath = [];
    // this.paths = [this.currentPath];
  }

  follow(path) {
    // Predict future position of vehicle
    let future = this.vel.copy();
    future.mult(20);
    future.add(this.pos);
    fill(255, 0, 0);
    noStroke();
    // circle(future.x, future.y, 16);

    // Is the future position on the path, if d < radius it is on the path
    let target = findProjection(path.start, future, path.end);
    fill(0, 255, 0);
    noStroke();
    // circle(target.x, target.y, 16);

    let d = p5.Vector.dist(future, target);

    if (d > path.radius) {
      return this.seek(target);
    } else {
      return createVector(0, 0);
    }
  }

  wander() {
    let wanderPoint = this.vel.copy();
    wanderPoint.setMag(100);
    wanderPoint.add(this.pos);

    let wanderRadius = 50;

    let theta = this.wanderTheta + this.vel.heading();

    let x = wanderRadius * cos(theta);
    let y = wanderRadius * sin(theta);
    wanderPoint.add(x, y);

    let steer = wanderPoint.sub(this.pos);
    steer.limit(this.maxForce);
    this.applyForce(steer);

    let displaceRange = 0.3;
    this.wanderTheta += random(-displaceRange, displaceRange);
  }

  arrive(target) {
    return this.seek(target, 'ARRIVE');
  }

  evade(vehicle) {
    let pursuit = this.pursue(vehicle, 'EVADE');
    return pursuit;
  }

  pursue(vehicle, mod = '') {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    let modification = mod;
    prediction.mult(10);
    target.add(prediction);

    // fill(0, 255, 0);
    // circle(target.x, target.y, 16);

    return this.seek(target, modification);
  }

  flee(target) {
    return this.seek(target, 'FLEE');
  }

  seek(target, modification) {
    let force = p5.Vector.sub(target, this.pos);

    let desiredSpeed = this.maxSpeed;
    if (modification == 'ARRIVE') {
      let slowRadius = 100;
      let distance = force.mag();
      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
      }
    }
    force.setMag(desiredSpeed);
    if (modification == 'FLEE' || modification == 'EVADE') {
      force.mult(-1);
    }
    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    // this.currentPath.push(this.pos.copy());
  }

  edges() {
    let hitEdge = false;

    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      hitEdge = true;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
      hitEdge = true;
    }

    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      hitEdge = true;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
      hitEdge = true;
    }

    // if (hitEdge) {
    //   this.currentPath = [];
    //   this.paths.push(this.currentPath);

    // }
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();

    // for (let path of this.paths) {
    //   noFill();
    //   beginShape();
    //   for (let v of path) {
    //     vertex(v.x, v.y);
    //   }
    //   endShape();
    // }
  }
}

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(5));
    this.maxSpeed = 5;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill('#F063A4');
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, this.r * 2);
    pop();
  }
}
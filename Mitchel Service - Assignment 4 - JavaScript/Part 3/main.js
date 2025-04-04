// set up canvas
// canvas element
const canvas = document.querySelector("canvas");
// calls getContext on the canvas element for an area to draw
const ctx = canvas.getContext("2d");
// defines width and height constants ba sed on the width and height of the browser
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
// function to generate random number
// takes two numbers and returns a number between
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function to generate random RGB color value
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    // starting ball x cordinate
    this.x = x;
    // starting ball y cordinate
    this.y = y;
    // ball x velocity
    this.velX = velX;
    // ball y velocity
    this.velY = velY;
    // ball color
    this.color = color;
    // ball size
    this.size = size;
  }
  // draw ball on canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  // update ball position and handle wall collisions
  update() {
    // check right edge collision
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }
    // check left edge collision
    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }
    // check bottom edge collision
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }
    // check top edge collision
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }
    // update position based on velocity
    this.x += this.velX;
    this.y += this.velY;
  }
  // detect collisions between balls
  collisionDetect() {
    for (const ball of balls) {
      // don't check collision with self
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // if collision detected, change both balls colors
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
// array to store all balls
const balls = [];
// create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}
// main animation loop
function loop() {
  // semi-transparent black rectangle to create trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);
  // update and draw each ball
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  // call loop again on next animation frame
  requestAnimationFrame(loop);
}
// start animation
loop();

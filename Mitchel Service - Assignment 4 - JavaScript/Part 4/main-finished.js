// set up canvas
// canvas element 
const canvas = document.querySelector("canvas");
// 2D rendering for the canvas
const ctx = canvas.getContext("2d");
// Set canvas width to window width
const width = (canvas.width = window.innerWidth);
// Set canvas height to window height
const height = (canvas.height = window.innerHeight);
// function to generate random number
// Returns a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function to generate random RGB color value
// Returns a string with random RGB values
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// Shape class
class Shape {
  constructor(x, y, velX, velY) {
    // x coordinate of the shape
    this.x = x;
    // y coordinate of the shape
    this.y = y;
    // horizontal vel of the shape
    this.velX = velX;collision
    // vertical vel of the shape
    this.velY = velY;
  }
}
// EvilCircle class that extends Shape
class EvilCircle extends Shape {
  constructor(x, y) {
    // Call constructor with fixed velocity
    super(x, y, 20, 20);
    // Color of the evil circle
    this.color = "white";
    // Size of the evil circle
    this.size = 10;
  }
  // Draw the evil circle on the canvas
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }
  // Check if evil circle hits window
  checkBounds() {
    // Right boundry check
    if ((this.x + this.size) >= width) {
      this.x -= this.size; }
    // Left boundry check
    if ((this.x - this.size) <= 0) {
      this.x += this.size; }
    // Bottom boundry check
    if ((this.y + this.size) >= height) {
      this.y -= this.size; }
    // Top boundry check
    if ((this.y - this.size) <= 0) {
      this.y += this.size; }
  }
  // Detect colision with balls
  colisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        // Calculate distance between evil circle and ball
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // If distance is less than center I think, ball is killed
        if (distance < this.size + ball.size) {
          ball.exists = false;
        }
      }
    }
  }
}
// Ball class that extends Shape
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    // Call constructor
    super(x, y, velX, velY);
    // Color of the ball
    this.color = color;
    // Size of the ball
    this.size = size;
    // Track if ball exists
    this.exists = true;
  }
  // Draw the ball on the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  // Update ball position and handle wall colisions
  update() {
    // Right bounday check
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
    // Left bounday check
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    // Bottom bounday check
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
    // Top bounday check
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    // Update based on velocity
    this.x += this.velX;
    this.y += this.velY;
  }
  // Detect colision with other balls
  colisionDetect() {
    for (const ball of balls) {
      // Skip self and killed balls
      if (!(this === ball) && ball.exists) {
        // Calculate distance between balls
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // If colliding change both balls color
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
// Array to hold all balls
const balls = [];
// Create 25 balls with random properties
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position
    // away from the edge of the canvas
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}
// Create evil circle at random position
const evilCircle = new EvilCircle(random(0, width), random(0, height));
// Add key controls for evil circle movement
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      evilCircle.x -= evilCircle.velX;
      break;
    case "ArrowRight":
      evilCircle.x += evilCircle.velX;
      break;
    case "ArrowUp":
      evilCircle.y -= evilCircle.velY;
      break;
    case "ArrowDown":
      evilCircle.y += evilCircle.velY;
      break;
  }
});
// Animation loop
function loop() {
  // black background trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);
  // Update all existing balls
  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.colisionDetect();
    }
  }
  // Update and draw evil circle
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.colisionDetect();
  // next animation frame
  requestloopFrame(loop);
}
// Start the loop
loop();

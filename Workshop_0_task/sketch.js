let x = 0;
let y = 3;
let z = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  stroke(20, 50, 50);
  fill(0, 225, 0, 100);
  ellipseMode(CORNER);
  square(x, height / 2 - 50, 100);

  x = x + y;
  if (x > width - 100) {
    y = -3;
  }
  if (x < 0) {
    y = 3;
  }

  stroke(50, 20, 50);
  fill(225, 0, 0, 100);
  ellipseMode(CORNER);
  circle(x, x, 100);

  x = x + y;
  if (x > height - 100) {
    y = -3;
  }
  if (x < 0) {
    y = 3;
  }

  stroke(50, 20, 50);
  fill(0, 0, 225, 100);
  ellipseMode(CORNER);
  triangle(x, height + z, x + 50, height + z - 100, x + 100, height + z);

  x = x + y;
  z = -x;
  if (x > width - 100) {
    y = -3;
  }
  if (x < 0) {
    y = 3;
  }
}

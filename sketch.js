let x = 0;
let y = 3;
let z = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250, 200, 200);
  
  stroke(0, 60, 255, 100);
  line(0, 600, 600, 0);
  
  
  strokeWeight(5)
  stroke(255);
  fill(255, 255, 0);
  square(x, height / 2 - 50, 100);

  stroke(255, 255, 0, 100);
  line(0, 300, x, 300);
  line(600, 300, x + 100, 300);

  stroke(255);
  fill(225, 0, 0);
  ellipseMode(CORNER);
  circle(x, x, 100);

  stroke(225, 0, 0, 100);
  line(0, 0, x + 12, x + 12);
  line(600, 600, x + 88, x + 88);

  stroke(255);
  fill(0, 60, 255);
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
var dot = {
  x: 50,
  y: 50,
  diameter: 3,
  color: {
    r: 200,
    g: 255,
    b: 255
  }
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0, 0);
}

  function draw() {

  dot.color.r = random(100,255);
  dot.color.g = random(100,255);
  dot.color.b = random(100, 255);

  noStroke();
  fill(dot.color.r, dot.color.g, dot.color.b);
  ellipse(dot.x, dot.y, dot.diameter, dot.diameter);

  dot.x = random(0, width);
  dot.y = Math.random() * height;
}

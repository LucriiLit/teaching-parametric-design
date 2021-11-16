const sketchHeight = 400;
const sketchWidth = 400;

let angle = 0;
let r = 0;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(100);
}

function draw() {
  background(255, 10);
  translate(200, 200);
  noFill();
  strokeWeight(1);
  stroke(random(0,255), random(0,255), 255);

  let increment = map(mouseX, 0, width, 0.01, PI);

  beginShape();
    for (let a = 0; a < TWO_PI; a += increment) {
      let x = r * cos(a)
      let y = r * sin(a)
      vertex(x,y);
    }
  endShape(CLOSE);

  r -= 2;

  if (r < -300){
    r = 300;
  }
}



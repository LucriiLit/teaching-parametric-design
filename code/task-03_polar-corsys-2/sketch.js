const sketchHeight = 400;
const sketchWidth = 400;

let angle = 0;
let r = 0;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(100);
}

function draw() {
  background(255, 4);
  translate(200, 200);
  noFill();
  strokeWeight(1);
  stroke(random(0,255), random(0,255), 255);
  let x = r * cos(angle);
  let y = r * sin(angle);
  rect(x,y, random(0,10), random(0,100));

  angle += 0.05;
  r -= 0.4;

  if (r < -300){
    r = 300;
  }
}



const sketchHeight = 400;
const sketchWidth = 400;

let r = 150;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(60);
}

function draw() {
  background(0,10);
  translate(200, 200);
  noFill();
  strokeWeight(1);
  stroke(random(0,255), random(0,255), 255);

  let increment = map(mouseX, 100, width, 0.01, PI);

  beginShape();
    for (let a = 0; a < TWO_PI; a += 0.2) {
      let r1 = r + random(-10,10);
      let x = r1 * cos(a);
      let y = r1 * sin(a);
      
      circle(x,y, random(0,10));

      r = increment*100;
      print(increment);
    }
  endShape(CLOSE);


}



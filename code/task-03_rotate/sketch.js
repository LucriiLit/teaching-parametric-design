const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  rectMode(CENTER);
}

let angle = 0;

function draw() {
  background(20, 100);
  noFill();
  strokeWeight(1);

  translate(sketchWidth/2,sketchHeight/2);

  push();
    stroke("white");
    rotate(PI / 360 * angle);
    rect(0, 0, 50, 50);
    circle(70, 70, 40);
    line(25, 25, 55, 55);

    push();
      stroke("red");
      translate(70, 70);
      rotate(PI / 180 * angle);
      circle(40, 0, 8);
      circle(0, 40, 8);
      circle(-40, 0, 8);
      circle(0, -40, 8);
    pop();
  pop();

  push();
    stroke("blue");
    rotate(PI / 180 * angle * -1);
    circle(70, 70, 20)
    rect(0, 0, 15, 15);
  pop();


  angle = angle + 1;

}


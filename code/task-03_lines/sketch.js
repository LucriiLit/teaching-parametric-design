const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 10;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

// We use velocity to modify how fast the points move in the random directions
// Higher velocity faster moving
const velocity = 100;
const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push([
    Math.random() * sketchWidth, // x
    Math.random() * sketchHeight, // y
    Math.random() * velocity, // dx
    Math.random() * velocity // dy
  ]);
}


const numLoops = 10;
const minOpacity = 200;
function draw() {

  noLoop();
  for (let l = 0; l < numLoops; l += 1) {
    noFill();
    stroke(0, minOpacity/numLoops * l)
    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();
  }
}
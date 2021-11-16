const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  noLoop();
  background(255);
  
  noFill();
  stroke("black");

  let radius = 200;
  
  circle(sketchWidth / 2, sketchHeight / 2, 50)

  let maxCount = 35;
  for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
      let theta = (Math.PI / 180) * (360 / maxCount * circleCount);

      let x = radius * cos(theta);
      let y = radius * sin(theta);
      
      circle(
        x + sketchWidth / 2,
        y + sketchHeight / 2,
        radius
        );
    }
  }







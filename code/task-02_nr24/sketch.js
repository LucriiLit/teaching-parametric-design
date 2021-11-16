const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  noLoop();
  background(255);
  
  fill(50);
  for (
    let rectY = 0;
    rectY < sketchHeight;
    rectY += random(20, 60)
  ) {
    rect(
      0, 
      rectY, 
      sketchWidth,
      random(20, 25)
    );
  }

  for (let layer = 0; layer < 3; layer += 1){
    let layerColor = 100 + layer * 50;
    fill(layerColor);

    for (let y = 0; y < sketchHeight + 50; y += 40){
      for(let x = 0; x < sketchWidth + 100; x += 50){
        rect(
          -20 + x + y/2 + random(0,20),
          -20 + y + random(0,20),
          20
        )
      }
    }
  }
}








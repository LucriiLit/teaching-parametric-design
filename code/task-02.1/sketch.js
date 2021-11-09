const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  // frameRate(10);
}



function draw(){
  background(0);
  noFill();
  stroke(255);
  strokeWeight(1);


  for (let y = 0; y < sketchHeight + 10; y += 15){
    for(let x = 0; x < sketchWidth + 20; x += 15){
      circle(
        -140 + x + y/2 + random(0,200),
        -10 + y + random(0,100),
        10
      )
    }
  }
}
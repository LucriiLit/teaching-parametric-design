const sketchHeight = 400;
const sketchWidth = 400;

var words = ["hallo", "hello", "buendia", "ciao", "kakao"];
var index = 0;

var nums = [80, 25, 12, 50];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(20);
  
  fill("white");
  textSize(36);
  text(words[index], 140, 140);

  stroke("while");
  strokeWeight(2);
  noFill();

  for (let i = 0; i < nums.length; i++) {
 
  circle(i*60+100, random(260, 280), nums[i]);
  }
}

function mousePressed() {
  index = index + 1;

  if (index == words.length)
  index = 0;
}




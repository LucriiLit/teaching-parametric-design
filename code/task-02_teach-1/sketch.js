
// Variablen am besten globl am anfang deklarieren -> auf jeder Ebene verfügbar
// random funtion wird erst mit laden des Setups verfügbar (in der Processing libary)
let colorValue;
let xValue;

let yValue = 5;
let textColor = "red";
let trueFalse = true; // false  

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  colorValue = random(0, 255);
  xValue = 0;

}

function draw() {
  noLoop();
  background(colorValue);
  
  fill("xValue");

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      fill(colorValue, 25, random(0, 255))
      circle(
        100 + y * 20,
        100 + x * 20,
        y * x
      );
      // xValue += 5;
    }
  }
  noFill();
  // curve(5, 26, 5, 26, 73, 24, 73, 61);
}








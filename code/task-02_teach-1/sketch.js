
// Variablen am besten globl am anfang deklarieren -> auf jeder Ebene verfügbar
// random funtion wird erst mit laden des Setups verfügbar (in der Processing libary)
let colorValue;
let xValue;

let yValue = 5;
let textColor = "red";
let trueFalse = true; // false  

function setup() {
  createCanvas(400, 400);
  colorValue = random(0, 255);
  xValue = 0;

}

function draw() {
  background(colorValue);
  fill("xValue");

  for(let p = 0; p < 20; p += 2){
    if (p == 20){
      p = 0;
    }
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        fill(colorValue, 25, random(0, 255))
        circle(
          100 + y * 20,
          100 + x * 20 ,
          x * y
        );
      }
    }
  noFill();
  }

  // for(let p = 0; p < 20; p += 2){
  //   circle(200, 200, p);
  //   rotate(PI / 180 * p);
  //   rect(50, 50, 50, 50)
  // }
}








const sketchHeight = 400;
const sketchWidth = 400;


let punkt1 = [190][210]
let punkt2 = [210][210]


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  // angleMode(DEGREES);
  koordinates();
}


function draw() {
  background(20);
  noFill();
  stroke("white");
  strokeWeight(3);

  // line(200, 200, 200, 300);


  for(i = 0; i < 40; i++) {

    // line(punkt1[i], punkt1[i], punkt2[i], punkt2[i]);
  }


  // beginShape();
  // vertex(200, 220);
  // vertex(240, 220);
  // vertex(200, 160);
  // vertex(140, 260);
  // vertex(140, 260);
  // vertex(320, 260);
  // vertex(200, 60);
  // vertex(40, 320);
  // vertex(420, 320);
  // vertex(200, -60);
  // vertex(-100, 400);
  // endShape();



  // line(190, 210, 210, 210);
  // line(210, 210, 190, 190);
  // line(190, 190, 140, 240);
  // line(140, 240, 300, 240);
  // line(300, 240, 180, 100);
  

  function koordinates(){
    const rad = Math.PI / 120 * angle;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    punkt1.push(x);
    punkt1.push(y);

    fibs.push(fibs[fibLen-1] + fibs[fibLen-2]);


  }
}
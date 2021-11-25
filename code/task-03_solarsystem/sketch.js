const sketchHeight = 400;
const sketchWidth = 400;

let rA = 100;
let rB = 20;
let angle = 0;
let angle2 = 0;
let kreise = 1;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30);
  angleMode(DEGREES);
}

function draw() {
  background(20,10); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  translate(200, 200);
  noFill();
  stroke(255); //Random Blaufarben


  //Schlaufe für Menge der Kreise
  for (let g = 1; g <= kreise; g += 1) {

    strokeWeight(1);
    circle(0,0, 40);
    strokeWeight(0.2);
    circle(0,0, 200);
  

    //Koordinaten für die Umlaufbahn A
    let xA = rA * cos(angle);
    let yA = rA * sin(angle);
    strokeWeight(1);
    fill(20);
    circle(xA,yA, 14);

    //Koordinaten für die Umlaufbahn B relativ zu A
    translate(xA,yA);
    let xB = rB * cos(angle2);
    let yB = rB * sin(angle2);
    
    strokeWeight(0.2);
    noFill();
    circle(0,0, 40);
    strokeWeight(1);
    fill(20);
    circle(xB,yB, 8);

    angle = angle + 1;
    angle2 = angle2 + 8;

  }
  
  
}



function mouseClicked() {
  // save();
  // saveFrames();
}






/*
HA
Sinnvolles Objekt & Array mit einbauen
*/


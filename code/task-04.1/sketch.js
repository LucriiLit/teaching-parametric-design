const sketchHeight = 400;
const sketchWidth = 400;

let r = 120;

//almost useless Array
let translates = [200,0,100,400,50,150,250,300,350];
let swappX = 0;
let swappY = 0;

function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
  frameRate(30);
  noLoop();
}

function draw() {
  background(255); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  translate(translates[swappX], translates[swappY]);
  noFill();
  strokeWeight(1);


  let increment = map(mouseX, 100, width, 0.01, PI); //X-Wert der Maus im Browser auslesen

  let kreise = 4;

  //Schlaufe für Menge der Kreise bei nicht Transparenz (für SVG)
  for (let g = 1; g <= kreise; g += 1) {

    beginShape();  
      for (let a = 0; a < TWO_PI; a += 0.2) { //Schlaufe zum generieren des Polaren Koordinaten Systems
        let r1 = r + random(-10,10);
        let x = r1 * cos(a);
        let y = r1 * sin(a);

        //Kreise generieren
        stroke("black"); //Random Blaufarben
        circle(x,y, random(0,10));

        //Vertices generieren (Striche zwischen Kreisen)
        stroke("red"); //Random Gelbfarben
        vertex(x,y)

        //Radius abhängig von Maus ändern
        print(increment);
      }
    r = r + 10;
    endShape(CLOSE);
  }
}

function mouseClicked() {
  save();
}


const sketchHeight = 400;
const sketchWidth = 400;

let r = 150;

//almost useless Array
let translates = [200,0,100,400,50,150,250,300,350];
let swappX = 0;
let swappY = 0;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(60);
}

function draw() {
  background(0,10); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  translate(translates[swappX], translates[swappY]);
  noFill();

  let increment = map(mouseX, 100, width, 0.01, PI); //Ort der Maus im Browser auslesen

  beginShape(); //erstellen der Vertex shapes
    for (let a = 0; a < TWO_PI; a += 0.2) {
      let r1 = r + random(-10,10);
      let x = r1 * cos(a);
      let y = r1 * sin(a);

      //Kreise generieren
      strokeWeight(1);
      stroke(random(0,255), random(0,255), 255); //Random Blaufarben
      circle(x,y, random(0,10));

      //Vertices generieren (Striche zwischen Kreisne)
      strokeWeight(0.5);
      stroke(0, random(0,255), 255); //Random Gelbfarben
      vertex(x,y);

      //Radius abhängig von Maus ändern
      r = increment*100;
      print(increment);

    }
  endShape(CLOSE);  
}




/*
HA
Sinnvolles Objekt & Array mit einbauen
*/


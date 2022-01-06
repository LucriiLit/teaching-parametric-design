const sketchHeight = 400;
const sketchWidth = 400;

let r = 150;
let kreise = 8;


//almost useless Array
let translates = [200,0,100,400,50,150,250,300,350];
let swappX = 0;
let swappY = 0;

let micLevels = [];

//AUDIO FILE LADEN
function preload() {
  audio = loadSound('ventura.wav');
  audio2 = loadSound('vivaldi.mp3');
}


//PLAY BUTTON 1
function togglePlaying() {
  if (!audio.isPlaying()){
    audio.play();
    audio.setVolume(0.6);
    button.html("pause Ventura")
  } else {
    audio.pause();
    button.html("play Ventura");
  }
}

//PLAY BUTTON 2
function togglePlaying2() {
  if (!audio2.isPlaying()){
    audio2.play();
    audio2.setVolume(0.8);
    button2.html("pause Vivaldi")
  } else {
    audio2.pause();
    button2.html("play Vivaldi");
  }
}



function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30);
  button = createButton("play Ventura");
  button.mousePressed(togglePlaying);
  button2 = createButton("play Vivaldi");
  button2.mousePressed(togglePlaying2);

  // audio activation...
  // fft = new p5.FFT(0.8, 64); //smooth Value by avaraging previous with actual Data
  // amp = new p5.Amplitude();

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 25, 25, 60); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  translate(translates[swappX], translates[swappY]);
  noFill();

  let increment = map(mouseX, 100, width, 0.01, PI); //X-Wert der Maus im Browser auslesen


  let pushLevel = mic.getLevel();
  micLevels.push(pushLevel);

  //Schlaufe für Menge der Kreise bei nicht Transparenz (für SVG)
  for (let g = 1; g <= kreise; g += 1) {

    let angle = map(g, 0, kreise, 0, 360);
    let level = micLevels[g];


    beginShape();
      for (let a = 0; a < TWO_PI; a += 0.2) { //Schlaufe zum generieren des Polaren Koordinaten Systems
      
        let b = map(level, 0, 0.2, 60, 200);
        let r = constrain(b, 60, 200);

        // let kreise = map(level, 0, 0.2, 4, 16);

        let r1 = r + random(-10,10);
        let x = r1 * cos(b);
        let y = r1 * sin(a);

        //Kreise generieren
        strokeWeight(1);
        stroke(255, random(0,255), 100); //Random Blaufarben
        circle(x,y, random(0,10));

        //Vertices generieren (Striche zwischen Kreisen)
        strokeWeight(0.5);
        stroke(random(0, 255), 0, 0); //Random Gelbfarben
        curveVertex(x,y);

        //Radius abhängig von Maus ändern
        // r = increment*100;
        // print(increment);
      }

      if (micLevels.length > kreise) {
        micLevels.splice(0, 1);
      }


    endShape(CLOSE);
  }
}

function mouseClicked() {
  // save();
}

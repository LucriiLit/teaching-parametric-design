const sketchHeight = 400;
const sketchWidth = 400;

let r = 150;
let kreise = 8;

let micLevels = [];

let angle = 0;


//AUDIO FILE LADEN
function preload() {
  audio = loadSound('ventura.wav');
  audio2 = loadSound('vivaldi.mp3');
  hand = loadImage('BASS3.png');
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
  createCanvas(sketchWidth, sketchHeight, WEBGL);
  frameRate(30);
  button = createButton("play Ventura");
  button.mousePressed(togglePlaying);
  button2 = createButton("play Vivaldi");
  button2.mousePressed(togglePlaying2);

  loop();

  // audio activation...
  // fft = new p5.FFT(0.8, 64); //smooth Value by avaraging previous with actual Data
  // amp = new p5.Amplitude();

  // mic = new p5.AudioIn();
  // mic.start();
}


function draw() {
  background(40); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  rectMode(CENTER);
  noStroke();
  // fill(0, 100);

  let dx = mouseX - width / 2;
  let dy = mouseY - width / 2;
  let v = createVector(dx,dy, 0)
  v.div(100);

  // ZENTRUMS OBJEKT
  //Licht
  ambientLight(0, 100, 200); // welches Spektrum strahlt
  // pointLight(0, 0, 255, 200, 0, 0)
  // pointLight(255, 0, 0, -200, 0, 0)
  // directionalLight(0, 155, 55, 0, -0.6, 0)
  directionalLight(0, 155, 55, v)

  // Material oder Textur
  //ambientMaterial(255, 255, 255); // welches Spektrum kann reflektieren
  // specularMaterial(255, 255, 255);
  texture(hand);

  push();
  // translate(mouseX - sketchHeight / 2, mouseY - sketchWidth / 2);
  z = map(mouseX, 0, 400, -2000, 200);
  translate(0, 0, 50);
  rotateX(angle);
  rotateY(angle * 1.2);
  rotateZ(angle * 1.1);
  torus(40, 20);
  // rect(0, 0, 150, 150);
  angle = angle + 0.05
  pop();
  

  // RAUM
  rotateZ(HALF_PI/2);
  scale(0.7)

  push();
  ambientMaterial(0, 20, 20)  
  translate(0, 250, 0);
  rotateX(HALF_PI);
  plane(500, 500);0
  pop();

  push();
  ambientMaterial(0, 40, 40)  
  translate(0, -250, 0);
  rotateX(HALF_PI);
  plane(500, 500);0
  pop();

  push();
  ambientMaterial(0, 60, 60)  
  translate(0, 0, -250);
  plane(500, 500);0
  pop();

  push();
  ambientMaterial(0, 80, 80)  
  translate(250, 0, 0);
  rotateY(HALF_PI);
  plane(500, 500);0
  pop();

  push();
  ambientMaterial(0, 100, 100)  
  translate(-250, 0, 0);
  rotateY(HALF_PI);
  plane(500, 500);0
  pop();




  // let increment = map(mouseX, 100, width, 0.01, PI); //X-Wert der Maus im Browser auslesen


  // let pushLevel = mic.getLevel();
  // micLevels.push(pushLevel);

  // //Schlaufe für Menge der Kreise bei nicht Transparenz (für SVG)
  // for (let g = 1; g <= kreise; g += 1) {

  //   let angle = map(g, 0, kreise, 0, 360);
  //   let level = micLevels[g];


  //   beginShape();
  //     for (let a = 0; a < TWO_PI; a += 0.2) { //Schlaufe zum generieren des Polaren Koordinaten Systems
      
  //       let b = map(level, 0, 0.2, 60, 200);
  //       let r = constrain(b, 60, 200);

  //       // let kreise = map(level, 0, 0.2, 4, 16);

  //       let r1 = r + random(-10,10);
  //       let x = r1 * cos(a);
  //       let y = r1 * sin(a);

  //       //Kreise generieren
  //       strokeWeight(1);
  //       stroke(255, random(0,255), 100); //Random Blaufarben
  //       circle(x,y, random(1,10));

  //       //Vertices generieren (Striche zwischen Kreisen)
  //       strokeWeight(0.5);
  //       stroke(random(0, 255), 0, 0); //Random Gelbfarben
  //       curveVertex(x,y);

  //       //Radius abhängig von Maus ändern
  //       // r = increment*100;
  //       // print(increment);
  //     }

  //     if (micLevels.length > kreise) {
  //       micLevels.splice(0, 1);
  //     }


  //   endShape(CLOSE);
  // }
}


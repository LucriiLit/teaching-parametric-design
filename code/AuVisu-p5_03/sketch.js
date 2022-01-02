const sketchHeight = 400;
const sketchWidth = 400;


let audio;
let button;
let amp;

let volhistory = [];

//AUDIO FILE LADEN
function preload() {
  audio = loadSound('ventura.wav');
}

//PLAY BUTTON
function togglePlaying() {
  if (!audio.isPlaying()){
    audio.play();
    audio.setVolume(0.6);
    button.html("pause")
  } else {
    audio.pause();
    button.html("play");
  }
}


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(40);
  angleMode(DEGREES);
  button = createButton("play");
  button.mousePressed(togglePlaying);

  // audio activation...
  amp = new p5.Amplitude();
}





function draw() {
  background(20,10,30);
  translate(width / 2, height / 2);
  noFill();
  strokeWeight(1);

  let vol = amp.getLevel();
  volhistory.push(vol);
  
  console.log(volhistory);

  beginShape();
    for (let i = 0; i < 360; i++ ) {
      c = map(volhistory[i], 0, 0.2, 0, 255);
      stroke(255 - c, 255 - c, 200);

      r = map(volhistory[i], 0, 0.4, 120, 0);
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);


    }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }


}






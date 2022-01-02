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
    audio.setVolume(0.3);
    button.html("pause")
  } else {
    audio.pause();
    button.html("play");
  }
}


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30);
  angleMode(DEGREES);
  button = createButton("play");
  button.mousePressed(togglePlaying);

  // audio activation...
  amp = new p5.Amplitude();
}





function draw() {
  background(20,10,30);
  // translate(width / 2, height / 2);
  noFill();
  stroke(255);
  strokeWeight(2);

  let vol = amp.getLevel();
  volhistory.push(vol);
  
  console.log(volhistory);

  beginShape();
    for (let i = 0; i < volhistory.length; i += 1 ) {
      let y = map(volhistory[i], 0, 1, height, 0);
      vertex(i, y);
    }
  endShape();

  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }


}





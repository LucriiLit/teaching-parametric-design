const sketchHeight = 400;
const sketchWidth = 400;


let audio;
let audio2;
let mic
let button;

let fft;
let amp;

let micLevels = [];
let micLevels2 = [];

let strahlen = 16;
let rects = 1;

//AUDIO FILE LADEN
function preload() {
  audio = loadSound('ventura.wav');
  audio2 = loadSound('vivaldi.mp3');
}

//PLAY BUTTON
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
  angleMode(DEGREES);
  frameRate(20);
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
  background(20, 20);
  translate(width / 2, height / 2);
  strokeWeight(1);
  noFill();
  scale(1);

  //RADIAL SPECTRUM LINES
  push();
  let pushLevel = mic.getLevel();
  micLevels.push(pushLevel);
    
    for (let i = 0; i < strahlen; i++) {
      let angle = map(i, 0, strahlen, 0, 360);
      let level = micLevels[i];

      let r = map(level, 0, 0.2, 10, 300);

      let x = r * cos(angle);
      let y = r * sin(angle);
      let x2 = 20 * cos(angle);
      let y2 = 20 * sin(angle);

      rotate(45);
      colorMode(RGB);
      stroke(255, 255, 255, [0.4]);
      strokeWeight(0.5);
      line(x/1.5, y/1.5, x, y);

      colorMode(HSB);
      stroke(i*6+80, 100, 100);
      line(x2*3, y2*6, x, y);
      
      line(x2*6, y2*3, x, y);
      
    }

    if (micLevels.length > strahlen) {
      micLevels.splice(0, 1);
    }
  pop();

  push();
  pushLevel = mic.getLevel();
  micLevels2.push(pushLevel);

    for (let j = 0; j < rects; j++) {
      let level = micLevels2[j];
      let r = map(level, 0, 0.2, 80, 260);

      stroke(200, 250, 0, [0.4]);
      strokeWeight(0.5);
      rect( -r / 2, -r / 2, r, r);
    }

    if (micLevels.length > rects) {
      micLevels2.splice(0, 1);
    }
  pop();

    // console.log(micLevels2);

}






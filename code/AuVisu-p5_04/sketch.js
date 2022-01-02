const sketchHeight = 400;
const sketchWidth = 400;


let audio;
let button;
let fft;
// let w;

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
  frameRate(30);
  angleMode(DEGREES);
  colorMode(HSB);
  button = createButton("play");
  button.mousePressed(togglePlaying);

  // audio activation...
  fft = new p5.FFT(0.9, 64); //smooth Value by avaraging previous with actual Data
  // w = width / 32;
}





function draw() {
  background(80, 80, 10);
  translate(width / 2, height / 2);
  strokeWeight(1);

  let spectrum = fft.analyze();
  
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 20, 400, 60, 240);
    let x = r * cos(angle);
    let y = r * sin(angle);
    let x2 = 20 * cos(angle);
    let y2 = 20 * sin(angle);
    stroke(i + 40, 255, 255);
    line(x2, y2, x, y);

    // let y = map(amp, 0, 256, height, 0);
    // fill(i + 180, 255, 255);
    // rect(i * w, y, w - 8, height - y);

  }

}






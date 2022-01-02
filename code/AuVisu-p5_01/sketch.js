const sketchHeight = 400;
const sketchWidth = 400;


let audio;
let amp;

function preload() {
  audio = loadSound('ventura.wav');
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30);
  angleMode(DEGREES);

  // Will loop the audio track forever
  audio.loop();

  // audio activation...
  fft = new p5.FFT();
  fft.setInput(audio);
}




function draw() {
  background(10,100,120); //zweite Ziffer = Transparenz zum vorherigen Durchlauf
  // translate(200, 200);
  noFill();
  stroke(255,100,100);
  // strokeWeight(2);


  let spectrum = fft.analyze();
  noStroke();
  fill(255,100,100);

  for (let i = 0; i < spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 255, 0);

  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}



function mouseClicked() {
  // save();
  // saveFrames();
  audio.pause();
}



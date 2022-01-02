const sketchHeight = 400;
const sketchWidth = 400;


let audio;
let button;
let fft;

let amp;
let volhistory = [];

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
  frameRate(40);
  angleMode(DEGREES);
  button = createButton("play Ventura");
  button.mousePressed(togglePlaying);
  button2 = createButton("play Vivaldi");
  button2.mousePressed(togglePlaying2);

  // audio activation...
  fft = new p5.FFT(0.8, 64); //smooth Value by avaraging previous with actual Data
  amp = new p5.Amplitude();
}





function draw() {
  background(0, 40);
  translate(width / 2, height / 2);
  strokeWeight(1);
  noFill();
  rotate(90);


  // push();
  //   //MULTIPLE VOLUME RINGS
  //   let vol = amp.getLevel();
  //   volhistory.push(vol);

  //   for (let j = 0; j < volhistory.length; j++) {
  //     let r = map(volhistory[j], 0, 0.2, 180, 260);
  //     // let G = map(volhistory[j], 0, 1, 0, 255);
  //     colorMode(RGB);
  //     stroke(255, 200, random(0,255));
  //     circle(0, 0, r);

  //     // let x = r * cos(j);
  //     // let y = r * sin(j);
  //     // vertex(x, y);
  //   }
  // pop();

  

  push();
    //RADIAL SPECTRUM LINES
    let spectrum = fft.analyze();
    
      for (let i = 0; i < spectrum.length; i++) {
        let angle = map(i, 0, spectrum.length, 0, 360);
        let spec = spectrum[i];
        let r = map(spec, 20, 400, 60, 240);
        let r2 = map(spec, 100, 400, 80, 260);
        let x = r * cos(angle);
        let y = r * sin(angle);
        let x2 = 20 * cos(angle);
        let y2 = 20 * sin(angle);

        colorMode(HSB);
        stroke(i + 40, 100, 100);
        strokeWeight(1);
        line(x2, y2, x, y);

        stroke(100);
        strokeWeight(0.5);
        circle(0, 0, r2);

      }
  pop();
  

  
  console.log(volhistory.length)
  console.log(spectrum)

}






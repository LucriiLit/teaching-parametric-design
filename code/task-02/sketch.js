const sketchHeight = 400;
const sketchWidth = 400;

let fibs = [1,1];
let scale = 1;
let minScale;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  angleMode(DEGREES);
  initFibs();
  setMinScale();
}


function draw() {
  background(20);
  noFill();
  stroke("white");
  translate(sketchWidth/2, sketchHeight/2)


  //Generieren der Quadrate und Linien
  for (let i = 0; i < fibs.length; i++) {
    const fib = fibs[i]*scale;
    rect(0,0, fib, fib);
    arc(fib, 0, 2*fib, 2*fib, 90, 180);
    translate(fib, fib);
    rotate(-90);
  }


  //restarting scaling unter min Scale
  if (scale <= minScale) {
    fibs = [1,1];
    initFibs();
    scale = 1;
  } else {
    scale *= 0.994;
  }
}

//Fibonacci zahlen generieren
function addFib () {
  const fibLen = fibs.length;

  fibs.push(fibs[fibLen-1] + fibs[fibLen-2]);
}

function initFibs() {
  for(let i = 0; i < 25; i++) {
    addFib();
  }
}

//Zoom
function setMinScale() {
  const fibLen = fibs.length;

  minScale = fibs[fibLen-5]/fibs[fibLen-1];
}



/*
HA 1
Foto vom Muster
Muster coden - Dateiname "task-02"
HA 2
mit freien Vektoren was visuel schönes :))
*/





let x = 0;
let y = 0;

//called only once in the beginning 
function setup() {
  createCanvas(400, 400);
  noLoop();
}

//continously called once setup is finished
function draw() {
  background(0, 0, 0);

    //x wird hochgezählt und bei 255 zurückgesetzt
    x = x + 6;
    if (x > 255) {
      x = 0;
    }


    //verändert die Farbewerte bei mousePressed
    stroke (x,255,180);
    strokeWeight(x)
    arc(140, 140, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(180, 140, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(220, 140, 20, 20, 0, Math.PI/180 * 360, Math);

    stroke (0,x,180);
    arc(140, 180, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(180, 180, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(220, 180, 20, 20, 0, Math.PI/180 * 360, Math);

    stroke (0,255,x);
    arc(140, 220, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(180, 220, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(220, 220, 20, 20, 0, Math.PI/180 * 360, Math);

  }
  
  function mousePressed() {
    loop();
  }
  
  function mouseReleased() {
    noLoop();
  }





// HA: generatives Bild mit den Kommandos aus dem Video erstellen
// anschließend bis Dienstag Abend commiten && pushen
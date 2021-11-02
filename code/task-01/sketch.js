let x = 0;

//called only once in the beginning 
function setup() {
  createCanvas(400, 400);
  noLoop();
}

//continously called once setup is finished
function draw() {
  background(255, 255, 255);

    x = x + 10;
    if (x > 255) {
      x = x*-1;
    }
    
    stroke (x,255,180);
    arc(60, 60, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(100, 60, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(140, 60, 20, 20, 0, Math.PI/180 * 360, Math);

    stroke (0,x,180);
    arc(60, 100, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(100, 100, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(140, 100, 20, 20, 0, Math.PI/180 * 360, Math);

    stroke (0,255,x);
    arc(60, 140, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(100, 140, 20, 20, 0, Math.PI/180 * 360, Math);
    arc(140, 140, 20, 20, 0, Math.PI/180 * 360, Math);

  }
  
  function mousePressed() {
    loop();
  }
  
  function mouseReleased() {
    noLoop();
  }





// HA: generatives Bild mit den Kommandos aus dem Video erstellen
// anschließend bis Dienstag Abend commiten && pushen
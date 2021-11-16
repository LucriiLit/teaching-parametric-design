

//called only once in the beginning 
function setup() {
  createCanvas(600, 600);
}

//continously called once setup is finished
function draw() {
  background(255, 122, 10, 100);

  stroke (255,255,255);
  strokeWeight (10);

  point(300,250);
  point(250,300);
  point(350,350);

  stroke (0,0,0);
  strokeWeight (3);

  line(250,300,350,350);
  line(250,300,300,250);
  line(350,350,300,250);


  stroke (255,255,255);
  strokeWeight (10);

  point(250,350);
  point(360,270);
  point(300,370);


  stroke (0,0,0);
  strokeWeight (3);

  line(250,350,360,270);
  line(360,270,300,370);
  line(250,350,300,370);

  square(150, 150, 50)
  rect(400, 400, 20, 50)
  circle(100, 100, 30, 70)
  ellipse(480, 480, 50, 20);
}


// HA: generatives Bild mit den Kommandos aus dem Video erstellen
// anschließend bis Dienstag Abend commiten && pushen
function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(0);
	noFill();

	let linienanzahl = 10;
	let wellen = 200;

  let time = millis() / 5000;

	for (j = 0; j < linienanzahl; j++) {
		let farbe = j / linienanzahl*360;

		beginShape();
		stroke(200, 200, farbe);

		for (i = 0; i < wellen; i++) {

			let wellenabstand = (j / 10 + time);
			let py = i / (50 + j);

			let y = noise(wellenabstand, py) * height;

			let x = i / (wellen - 1) * width;

			vertex(x, y);
		}
		endShape();
	}
}
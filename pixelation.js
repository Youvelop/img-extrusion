let bg = 0;
let fg = "#f1f1f1";

let img;

let tilesX = 30;
let tilesY = tilesX;

function preload() {
  img = loadImage("/assets/Elias.png");
}

function setup() {
  createCanvas(600, 600);
  img.resize(tilesX,tilesY);
}

function draw() {
  background(0);
  fill(fg);
  noStroke();

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {

      let c = img.get(x, y);
      let b = brightness(c);
      fill(b);

      rect(x * tileW, y * tileH, tileW, tileH);
    }
  }
}

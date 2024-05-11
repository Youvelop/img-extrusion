let bg = '#fff';
let fg = '#585858';
let portrait;
let tilesX = 100;
let tilesY = tilesX;

function preload() {
  portrait = loadImage('/assets/Elias.png');
}

function setup(){
  createCanvas(800, 800, WEBGL);
  portrait.resize(tilesX, tilesY);
  rectMode(CENTER);
  fill(fg);
  noStroke();
}

function draw(){
  background(bg);

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  // Calculate the center of rotation
  let centerX = tilesX * tileW / 2;
  let centerY = tilesY * tileH / 2;

  push();
  scale(0.5);
  // let rotation = map(sin(radians(frameCount * 2)), 1, -1, -60, 60);
  // rotateY(radians(rotation));
  
  let rotationSpeed = 1.2; // Adjust rotation speed as needed
  let rotation = radians(frameCount * rotationSpeed);
  rotateY(rotation)

  // Calculate rotation based on mouse X
  // let rotY = map(mouseX, 0, width, 0, TWO_PI);
  // rotateY(rotY);

  // Calculate rotation based on mouse X
  // let rotY = map(mouseX, 0, width, -PI, PI);
  // rotateY(rotY);

  // Rotate around the object's center by translating to the center and rotating
  translate(-centerX, -centerY);


  for (let x = 0; x < tilesX; x++){
    for (let y = 0; y < tilesY; y++){

      let c = portrait.get(x, y);
      if (alpha(c) == 0) continue; // Skip transparent pixels
      let b = brightness(c);
      // the scalar for the tiles
      // the brightness, mapped to a range between 1 and 0
      let s = map(b, 0, 255, 1, 0);
      // position z
      // the brightness, mapped to a range between -1 and 1
      let z = map(b, 0, 255, 0, 2);

      // magnitude of the tiles on the z-axis
      let mag = 700;

      push();
      //translate(x * tileW - width/2, y * tileH - height/2, z * mag);
      translate(x * tileW, y * tileH, z * mag);
      ellipse(0, 0, tileW * s*s*s*1.5 , tileH * s*s*s*1.1 );
      pop();
    }
  }
  pop();
}

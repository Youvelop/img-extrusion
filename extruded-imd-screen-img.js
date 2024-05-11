let bg = '#fff';
let fg = '#585858';
let portrait;
let tilesX = 111;
let tilesY = tilesX;

function preload() {
  portrait = loadImage('/assets/Elias.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  portrait.resize(tilesX, tilesY);
  rectMode(CENTER);
  fill(fg);
  noStroke();
}

function draw(){
  background(bg);

  // Fixed dimensions for the portrait
  let fixedWidth = 300; // Fixed width in pixels
  let fixedHeight = fixedWidth; // Fixed height in pixels

  let tileW = fixedWidth / tilesX;
  let tileH = fixedHeight / tilesY;


  // Calculate the center of rotation
  let centerX = (width / 2 ) - fixedWidth ;
  let centerY = (height / 2) - fixedWidth;

  push();

  // Move to the center of the canvas
  translate(centerX - fixedWidth / 2, centerY - fixedHeight / 2);
 
  //scale(0.7);

  
  let rotationSpeed = 1.2; // Adjust rotation speed as needed
  let rotation = radians(frameCount * rotationSpeed);
  rotateY(rotation)


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
      let z = map(b, 0, 255, -0.5, 0.5);

      // magnitude of the tiles on the z-axis
      let mag = 500;

      push();
      //translate(x * tileW, y * tileH, z * mag);
      translate(x * tileW, y * tileH, (z * mag)+ fixedWidth);
      ellipse(0, 0, tileW * s*s*s*1.1 , tileH * s*s*s*1.1 );
      pop();
    }
  }
  pop();
}

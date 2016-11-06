var img;
var source;
var destination

function preload(){
  img = loadImage('data/sw.png');
  source = loadImage('data/sw.png');
  console.log('loaded!');
}

function setup() {
  createCanvas(400, 400);
  console.log('canvas made!');
}

function draw() {
  loadPixels(); //loading the pixels of the canvas
  
  img.loadPixels(); //this loads all the pixels in an array called . . . . pixels!!!
  
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      var pix = (x + y * width)*4; //4 values associated, for RGBA COLOR!!!
      //exctracting color info
      var r = img.pixels[pix ];
      var g = img.pixels[pix + 1];
      var b = img.pixels[pix + 2];
      
      var distance = dist(x, y, mouseX, mouseY);
      
      //manipulating color info
      var adjustBright = map(distance, 0, 50, 8, 0);
      r *= adjustBright;
      g *= adjustBright;
      b *= adjustBright;
      
      //constrain colors between 0 and 255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
      
      
      
      pixels[pix ] = r;
      pixels[pix + 1] = g;
      pixels[pix + 2] = b;
      pixels[pix + 3] = 255; //always have to set alpha value post processing, even if not manipulating it
    }  
  }
  updatePixels();
  fill(255, 0, 0, 30);
  ellipse(mouseX, mouseY, 50, 50);
}

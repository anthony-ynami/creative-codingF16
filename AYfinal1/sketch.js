// Final Project by Darren Shin, Corinna Vong, and Anthony Ynami
// inspired by http://www.genekogan.com/code/p5js-perlin-noise/

//define stroke weight variable
var w = 1;

function setup() {
  createCanvas(600, 600);
  //LIGHT PINK
  background(246, 215, 223);
  noFill();
  
  //bring in microphone input
  mic = new p5.AudioIn();

  //microphone is live
  mic.start();
}

function draw() {

  //randomly generate stroke color and alpha
  stroke(random(255), random(255), random(255), random(100));
  strokeWeight(w);

  var vol = mic.getLevel();
  //first anchor point of curves decided by mouse placement
  var x1 = mouseX;
  var y1 = mouseY;
  
  //other points in the curves decided by perlin noise and microphone volume
  var x2 = width * noise(random(25) * vol);
  var x3 = width * noise(random(80) * vol);
  var x4 = width * noise(random(45) * vol);
  
  var y2 = height * noise(random(80) * vol);
  var y3 = height * noise(random(75) * vol);
  var y4 = height * noise(random(85) * vol);
  
  //the louder the sound, the curvier the curve


  //x and y curve points changed every certain number of frames for more fun!
  if (frameCount % 5 == 0) {
    x2 = width - x2/2;
    x3 = width - x3/2;
    x4 = width - x4/2;
  }
  
  if (frameCount % 6 == 0){
    // y1 = height - y1/2;
    y2 = height - y2/2;
    y3 = height - y3/2;
    y4 = height - y4/2;
  }

  //draw the curve
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  // clear the background every 1000 frames using mod (%) operator
  if (frameCount % 1000 == 0) {
    background(246, 215, 223);
  }
}

function keyPressed() {
  
  //increase stroke weight
  if(keyCode === UP_ARROW){
    w = w+5;
  }
  
  //decrease stroke weight
  else if(keyCode === DOWN_ARROW){
    w = w-5;
  }
  
  //clear background on any on the key pressed
  else{
    background(246, 215, 223);
  }
}
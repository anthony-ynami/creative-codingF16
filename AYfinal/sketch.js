var h = 0;
var t = 0;


function setup() {
  createCanvas(800, 600, WEBGL);
  // instead of red green blue 0-255, we're now gonna talk about
  // color as hue, saturation, brightness.
  // hue is in degrees 0 - 360.
  // saturation and brightness are in percentages 0-100.
  colorMode(HSB);
  stroke(0,18);
  noFill();
    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {

  var dirX = (mouseX / width - 0.5) *2;
  var dirY = (mouseY / height - 0.5) *(-2);
  var vol = mic.getLevel();
 
  directionalLight(250, 250, 250, dirX, dirY, 0.25);
  var s = mouseX/width*100;
  var b = 100-mouseY/height*100;
  fill(h, s, b);
  rotateX(2*radians(h));
  rotateY(2*radians(s/100*360));
  rotateZ(2*radians(b/100*360));
  box(100+500*vol, 100+500*vol, 100+500*vol);
  
  h = (h+1) % 360.
  
  
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 500 == 0) {
	  background(345, 12, 96);
  }
  

}
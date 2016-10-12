
var huh = new p5.Speech(); // speech synthesis object
huh.onLoad = speechLoaded;
huh.onEnd = speechFinished;

var thefont;
var halquotes;
var count = 0;
var thepitch = 1.0
var therate = 1.0

function preload()
{
  pic = loadImage("hal.png");
  halquotes = loadStrings('hal_cooked.txt');
  thefont = loadFont('lefont.otf');
}

var side = 600

function setup() {
  createCanvas(side, side);
  background(0);
  textFont(thefont);
  console.log("ready");
}

function draw() {
  fill(255)
}

function mouseReleased(){
  background(0);
  imageMode(CENTER);
  image(pic,mouseX,mouseY,side/4,side/4);
  if (count<halquotes.length){
    // thepitch = floor(1-(0.1*count)/halquotes.length);
    // therate = floor(1-(0.1*count)/halquotes.length);
    huh.setPitch(thepitch);
    huh.setRate(therate);
    var say_what = halquotes[count];
    textAlign(CENTER);
    text(say_what, width/2, height/2);
    huh.speak(say_what);
    count+=1;
  }
  else{
      count = 0
  }
  console.log("what");
}

function speechFinished(){

}

function speechLoaded()
{
  huh.listVoices();
  huh.setVoice('native');
  huh.interrupt = true;
  huh.speak('Dave');  
}
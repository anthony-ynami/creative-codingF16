var colors = new Array(16)//new Array
var osc1, osc2, echo1, echo2;
var notes = [60, 63, 65, 67, 70]; //MIDI
var sequence = [60, 63, 58, 65, 70, 67, 62, 72, 60, 62, 67, 65, 70, 58, 72, 65 ];
var octave = [-24, -12, 0, 12, 24];
var step = 0;

function setup()
{
  createCanvas(800, 600);
  background(0);
  noStroke();
  rectMode(CENTER);
  
  osc1 = new p5.Oscillator();
  osc1.setType('triangle');
  osc1.freq(240);
  osc1.amp(0);
  osc1.start();
  
  echo1 = new p5.Delay();
  //echo, time, 
  echo1.process(osc1, 0.25, 0.5,5000);
  
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  osc2.freq(240);
  osc2.amp(0);
  osc2.start();
  
  echo2 = new p5.Delay();
  echo2.process(osc2, 0.25, 0.5,15000);
}

function draw()
{
  var w = floor(map(mouseX, 0, width, 0, 5))
  var o = floor(map(mouseY, 0, height, 0, 5))
  console.log[w];
  fill(colors[w]);
  rect(mouseX,mouseY,50,50);
  
  for(var i = 0;i<colors.length;i++){
    colors[w];
  }
  
  
  var freq = (midiToFreq(notes[w] + octave[o])) 
  osc1.amp(0.8);
  osc1.freq(freq);
  
  var thenote=sequence[step];
  osc2.amp(0.5);
  osc2.freq(thenote);
  
  step = step + 1 %sequence.length
  
  console.log(frameCount);
  if(frameCount % 15 === 0 ) step = step + 1 % sequence/length
    
}

function keyPressed(){
  background(0);
}

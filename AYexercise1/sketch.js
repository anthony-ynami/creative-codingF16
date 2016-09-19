
var notfirstline = 0;

var shadetotal = 0;


function setup() {
  createCanvas(800, 600);
  background(255);  
  str ("PRESS UP OR DOWN TO CHANGE THE SHADE")
}

function keyPressed() {
  if (keyCode == UP_ARROW) shadetotal= shadetotal + 25;
  if (keyCode == DOWN_ARROW) shadetotal = shadetotal - 25;
  
}

function draw() {
  if(mouseIsPressed) {
    strokeWeight(1);
    stroke(random(255), random(255), random(255), 100+shadetotal);
    if(notfirstline) line(width/2, height/2, mouseX, mouseY);
    strokeWeight(5);
    if(notfirstline) line(pmouseX, pmouseY, mouseX, mouseY);
      
    var circlesize = dist(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(circlesize);
    stroke(0,100+shadetotal);
    fill(random(255), random(255),random(255),100+shadetotal)
    ellipse(mouseX, mouseY, 5, 5);
    notfirstline = 1;
  }  
}  

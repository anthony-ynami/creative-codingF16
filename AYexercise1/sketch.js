// HELLO
// the main source of inspiration for this machine was "03Attract" we learned in the 3rd class
var notfirstline = 0; //this means it's the first line

var shadetotal = 0; //shade incrementer

var shapenum = 0; //toggle for shapes

function setup() {
  createCanvas(800, 600);
  background(255);  

}

function draw() {
  if(mouseIsPressed) { //do the clicky, can also hold it down!
    if (keyIsPressed) {
      if (keyCode == UP_ARROW) shadetotal= shadetotal + 25; //increases alpha
      if (keyCode == DOWN_ARROW) shadetotal = shadetotal - 25; //decreases alpha
    }
    //the following is for the line
    strokeWeight(1);
    stroke(random(255), random(255), random(255), 100+shadetotal);
    if(notfirstline) line(width/2, height/2, mouseX, mouseY);
    strokeWeight(5);
    if(notfirstline) line(pmouseX, pmouseY, mouseX, mouseY);
      
    var shapesize = dist(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(shapesize);
    stroke(0,100+shadetotal);
    fill(random(255), random(255),random(255),100+shadetotal);
    
    if(shapenum === 0){ //0 = circle 
      ellipse(mouseX,mouseY,5,5);
       shapenum= shapenum + 1;
    }
    else if(shapenum == 1){ //1 = square
      rectMode(RADIUS);
      noFill();
      rect(mouseX,mouseY,5,5);
      shapenum = shapenum + 1;
    }
     else{ //2 = triangle
      var hypot = 5;
      var shortleg = hypot/2;
      var longleg = hypot*sqrt(3)/2;
      triangle(mouseX, mouseY-hypot,mouseX+longleg,mouseY+shortleg,mouseX-longleg,mouseY+shortleg);
      shapenum=0
      }
    notfirstline = 1;
  }  
  textSize(32);
  textAlign(CENTER);
  noStroke(); //this is so that the text doesn't become part of the path
  text("CLICK AND HOLD TO MAKE A PATH", width/2, height/2-6);
  text("PRESS UP OR DOWN TO CHANGE THE SHADE", width/2, height/2+36);

}  

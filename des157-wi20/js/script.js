function setup() {
    const myCanvas = createCanvas(800,250);
    myCanvas.parent("sketch");
    rectMode(CENTER);
  }
  
function draw() {
    background(247, 243, 240); 
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, height/2, mouseY/2+20, mouseY/2+20);
    stroke(255);
    var inverseX = width-mouseX;
    var inverseY = height-mouseY;
    ellipse(inverseX, height/2, (inverseY/2)+20, (inverseY/2)+20);
  }


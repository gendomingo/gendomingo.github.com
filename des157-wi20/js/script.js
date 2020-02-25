function setup() {
    const myCanvas = createCanvas(800,250);
    myCanvas.parent("sketch");
    rectMode(CENTER);
  }
  
function draw() {
    background(255); 
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, height/2, mouseY/2+20, mouseY/2+20);
    stroke(0);
    var inverseX = width-mouseX;
    var inverseY = height-mouseY;
    rect(inverseX, height/2, (inverseY/2)+20, (inverseY/2)+20);
  }


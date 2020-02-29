function setup() {
  const myCanvas = createCanvas(800,250);
  myCanvas.parent("sketch");
  rectMode(CENTER);
}


var endX = 0;

function draw() {
  background(241, 0, 102);

  
  //top lines
  stroke(255);
  strokeWeight(4);
  line(0,250,600,10);
  line(600,10,800,250);
  strokeWeight(1);
  var a=mouseX;
  var b=10;
    while (a<endX && b<endX && a<350 && b<350) {
      line(0,a,600,b);
      line(600,b,800,a);
      a = a + 20;
      b = b + 10;
    }
  //middle lines  
  stroke(255);
  strokeWeight(4);
    line(0,250,300,80);
    line(300,80,800,250);
  strokeWeight(1);
  var c=mouseX;
  var d=80;
    while (c<endX && d<endX && c<450 && d<450) {
      line(0,c,300,d);
      line(300,d,800,c);
      c = c + 10;
      d = d + 10;
    }
    
  //bottom lines  
  stroke(255);
  strokeWeight(4);
    line(0,250,100,150);
    line(100,150,800,250);
  strokeWeight(1);
  var e=mouseX;
  var f=150;
    while (e<endX && f<endX && e<550 && f<550) {
      line(0,e,100,f);
      line(100,f,800,e);
      e = e + 10;
      f = f + 10;
    }
    endX = endX + 2;

}

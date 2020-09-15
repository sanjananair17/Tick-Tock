var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(200,200);
  rotate(-90); 

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,254);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  stroke(255,0,254);
  strokeWeight(7);
  noFill();
  arc(0,0,290,290,0,scAngle);

  push();
  rotate(mnAngle);
  stroke(235,0,0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  stroke(235,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,270,270,0,mnAngle);

  push();
  rotate(hrAngle);
  stroke(46,255,139);
  strokeWeight(7);
  line(0, 0, 60, 0);
  pop();

  stroke(46,255,139);
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
}
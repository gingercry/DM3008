/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Assignment Example
 */

function setup() {
  createCanvas(512, 512);
  frameRate(20);
  noFill();
}

function draw() {
  background(0, 0, 102);

  // background
  stroke(200);
  var standardDeviation = 150;
  for (var i = 0; i < 5000; i++) {
    var backDist = randomGaussian(0, standardDeviation);
    var b = createVector(random(-width, width), backDist);
    point(b.x, b.y);
  }

//   // circle
//   push();
//   stroke(215, 78, 127);
//   translate(width / 5, 3*height / 4);
//   for (var i = 0; i < 2000; i++) {
//     var cirDist = (max(random(0, 1), random(0, 1)) * width) / 15;
//     //var cirDist = (random(0, width) * width) / size 
//     var angle = random(0, PI * 2);
//     var c = createVector(cos(angle), sin(angle));
//     c.mult(cirDist);
//     point(c.x, c.y);
//   }
//   pop();
  


  //sunset
  push();
  stroke(215, 8, 30);
  translate(width / 2, 3*height / 7);
  for (var i = 0; i < 25000; i++) {
    var cirDist = (max(random(0, 0), random(0, 1)) * width) / 3; //noise concentrated in middle
    var angle = random(0, PI * 3);
    var c = createVector(cos(angle), sin(angle));
    c.mult(cirDist);
    point(c.x, c.y);
  }
  stroke(215, 78, 30);
  for (var i = 0; i < 15000; i++) {
    var cirDist = (max(random(0, 0), random(0, 1)) * width) / 4; //noise concentrated in middle
    var angle = random(0, PI * 3);
    var c = createVector(cos(angle), sin(angle));
    c.mult(cirDist);
    point(c.x, c.y);
  }
  stroke(175, 108, 30, 80);
  for (var i = 0; i < 15000; i++) {
    var cirDist = (max(random(0, 0), random(0, 1)) * width) / 7; //min for without circle outline
    var angle = random(0, PI * 3);
    var c = createVector(cos(angle), sin(angle)); //both are between -1 and 1
    c.mult(cirDist); //make vector distance
    point(c.x, c.y); //point goes to random cirDist and to angles around the circle
  }
  pop();

  
  // wave 1
  push();
  stroke(25, 100, 200);
  translate(0, 3*height / 5);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var waveX = random(0, width);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
  
  stroke(25, 100, 200);
  translate(0, height / 8);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var waveX = random(0, width);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
stroke(25, 100, 200);
  translate(0, height / 8);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var waveX = random(0, width);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
  pop();
}

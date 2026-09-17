/* DM3008 Generative Art, Ashley Hi 2026
 * Week 4 - Waves & Distribution
 * Wave Composition A
*/

var frequency = 500; // how many times the sin wave draws
var rad = 180; // how far out the sin wave draws from origin
var amplitude = 150; // how far out the sin wave draws from origin

function setup() {
  createCanvas(600, 900);
  frameRate(70);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(1);
    noFill();
    
    push();
    translate(width/2, height/2);
    
    beginShape(); 
    //connects the 360 points together to create a shape, which is a circle with a wave pattern
    
    for (var i = 0; i < 220; i++) { //runs the loop 360 times, creating a full circle of points
        var p = createVector(0, 0); //creates a directional vector 
        var a = rad + sin(radians(i * frequency)) * amplitude; 
        //value of that changes in a wave pattern, which adds another variable, causing the overall shape to be more complex, not a perfect circle
        //changes at a slower rate when frameCount is smaller, and frequency of oscillation increases as frameCount increases, hence shape eventually stabilises and seems to reach a plateau and becomes more visually regular
        
        p.y = sin(radians(i + frameCount) + frameCount/50 / frameCount/ 5) *2*a;
        //posy oscillates from -2a to 2a, creating the sharp peaks and valleys of the wave pattern
        p.x = sin(radians(i + 4) * frameCount/100 + frameCount/50) * a;
        // previously: p.x = cos(radians(i + 4) ^ (frameCount/100 + frameCount/50) ) * a;
        //^ is XOR

        //p.x = sin(radians(i + 4 + frameCount/100 + frameCount/50)) * a;
        //for constant circle, because no more * changing variable, frequency of wave is constant, only posx changes

        // sin starts from 0, then -1, then 1
        // cos starts from 1, then 0, then -1
        
        vertex(p.x, p.y);
    }


    endShape();
    pop();
}


// to draw vertex by vertex

// var frequency = 500;
// var rad = 180;
// var amplitude = 150;

// var currentPoints = 0;
// var speed = 3;

// function setup() {
//     createCanvas(600, 900);
//     frameRate(70);
// }

// function draw() {
//     background(0);

//     stroke(255);
//     strokeWeight(1);
//     noFill();

//     push();
//     translate(width/2, height/2);

//     beginShape();

//     // gradually increase the number of points
//     for (var i = 0; i < currentPoints; i++) {

//         var p = createVector(0, 0);

//         var a = rad + sin(radians(i * frequency)) * amplitude;

//         p.y = sin(radians(i + frameCount) + 0.1) * 2 * a;

//         p.x = sin(
//             radians(i + 4) * frameCount/100 + frameCount/50
//         ) * a;

//         vertex(p.x, p.y);
//     }

//     endShape();
//     pop();

//     // increase the number of points
//     currentPoints += speed;

//     // once we reach 360 points, restart
//     if (currentPoints >= 360) {
//         currentPoints = 0;
//     }
// }
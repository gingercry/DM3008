/* DM3008 Generative Art
 * Week 3 - Modulo
 * Assignment
 * Lorelei Oen Wen Jing 
*/

c=512; 
//setting a constant variable for canvas size
function setup(){
    createCanvas(c,c); 
    //creating a square canvas of 512x512 pixels
    frameRate(10);
    //i added a frameRate(_) function to toggle with the speed of the animation 
}
    function draw(){ 
        //creating function 'draw'
        background (202,255,193);
        translate(c/4,3*c/4) 
        //translating the origin to the (c/4,3*c/4) position
        ;i=frameCount; while(i-- > 1) 
            //creating a while loop that runs when i-- is greater than 1
            //i-- is a decrement operator that decreases the value of i by 1 each time the loop runs, for every frame
            {
                rotate(21) 
            //rotate the canvas by 11 degrees
                //fill(i*3%256, 100, i*2%256);
                //i tried to add a fill(_) fucntion to changes the colours of the rectangles gradually with including the framerate as a variable, but i cant seem to get the rectangles anything other than in the original black colour
                ;rect(c++%i, c--%i,1,1);
            }
                //draw a rectangle of size 1x1 pixel at the position (c++%i, c--%i)
                //xpos = c++%i = remainder when i++ divided by frameCount
                //ypos = c--%i = remainder when i-- divided by frameCount 
                //the rectangles are drawn along one line, in a general linear direction of positive x and negative y, which increase in distance from the origin in waves, creating the layered look 
            }


/* write-up:
* the rectangles eventually form arcs that spiral towards the origin, which form due to the increasing distance of the rectangles from the origin
* the code appears more complex than it is, because of the complex function that dictates the xpos and ypos of the rectangle, layered with the rotation of the canvas
* i enjoy the speckled glitch-like effect, that clearing the background after eevry frame created
* i tweaked the angle of rotation till i found something i liked, in between geometric and organic, 
* that also creates the illusion of pulsing life in the centre
* i also like the way the origin is offset from the centre of the canvas, which creates a more interesting and organic composition
*/

// while tweaking the code, i realised that changing the transparency/Alpha value of the background altered the transparency level of the entire canvas
// and rotating the canvas every frame created a repeating circular pattern, with gradiented transparencies, that created a different look and i think emphasised the spiralling

//uncomment the code below for alternate version of the animation!

// c=512; 
// function setup(){
//     createCanvas(c,c); 
//     frameRate(15);
// }
//     function draw(){ 
//         background (200,0,0,10);
//         translate(c/4,3*c/4) 
//         ;i=frameCount; while(i-- > 1) 
//             {
//                 rotate(21) 
//             ;rect(c++%i, c--%i,1,1);
//             }
//             }

//it looks visually interesting to me, with more layers, and reminds me of the sun and shooting stars
function Player(tempX, tempY) {
  // properties
  this.x = tempX;
  this.y = tempY;
  this.diam = 50;
  this.angle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;

  this.display = function () {
    push(); // create a drawing layer
    translate(this.x, this.y); // move origin point
    rotate(this.angle); // player can rotate
https://sakai.luc.edu/access/content/attachment/COMP_125_005_6466_1242/Assignments/33c993c8-4342-428c-984e-c62a9c6fcc70/Timer.js
    fill(0); // black
    /** calculate points on a triangle based on a unit circle. You could use this method to draw more complex polygons that would fit inside a circle centered on (this.x, this.y)
     * For any point around the circle, x = the cosine of the angle in radians from 0 to TWO_PI, and y = the sine of that angle. an angle of 0 is the right side of the circle, PI is the left side. 
     * The points generated this way are relative to the coordinate point (0,0). 
     * The translate() function (above, line 10) takes care of moving it on the canvas.
     * 
    */
    scale (this.s);

     //head 
     strokeWeight (4);
     fill(255);
     ellipse (0 , 0 , 140 , 170);
 
     scale (this.s);
     //nose
     fill (255, 192, 203);
     ellipse (0, 35, 110 , 80)
 
     //left eye 
     strokeWeight (2);
     fill (0);
     ellipse (- 35 , - 45 , 30 , 40);
 
     //right eye
     ellipse (30  , - 45 , 30 , 40);
 
    //top right circle on left eye
     fill(204);
     ellipse (- 30 , - 50 , 10 , 10);
 
    //top right circle on left eye
     ellipse (35 , - 50 , 10 , 10);
 
    //middle circle on left eye
     ellipse (- 45 , - 40 , 9 , 9);
 
    //middle right circle on right eye
     ellipse (20 , - 40 , 9, 9);

     //bottom circle on left eye
    ellipse (- 30 , - 35 , 8 , 8);

    //bottom circle on right eye
     ellipse (35 , - 35 , 8 , 8);
 
   //right nostril
     fill (0);
     ellipse (30 , 35 , 20 , 30);
 
   //left nostril
     ellipse (-30  , 35 , 20 , 30);

  // bottom left spot
  fill (0);
     ellipse (-55 , 0 , 30 , 35);

  // right spot
  fill (0);
     ellipse (50 , -20 , 20 , 25);
    


    pop(); // dispose of this layer

  }


  this.move = function () {
//folow the mouse for now
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x > width || this.x < 0){
      this.x = abs(this.x - width);
    }
    if(this.y > height || this.y < 0){
      this.y = abs(this.y - height);
    }

  } // end of .move()

  this.thrust = function () {
    let horiz = Math.sin(this.angle);
    let vert = Math.cos(this.angle);

    this.xSpeed += .02 * horiz;
    this.ySpeed -= .02 * vert;
  }
  
  this.breake = function (){
    if(this.xSpeed > 0)
      this.xSpeed -= .01; // slow down
    else this.xSpeed += .01 // speed was less than 0, so bring it back up

    if(this.ySpeed > 0)
      this.ySpeed -= .01
    else this.ySpeed += .01;
  }
}// end Player() constructor 
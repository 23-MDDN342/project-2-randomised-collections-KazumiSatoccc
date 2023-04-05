/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function testing(top_position, eye_angle, mouse_wide, mouse_height) {
  noStroke();
  fill(0, 138, 7);
  let triangleTop = map(top_position,0,100,-7,7);
  triangle(10,10,-10,10,triangleTop,5); //background

  fill(225);
  rect(-10,-8,20,14); //board

  let eyeHeight = -5;


  let eyeY = map(eye_angle,0,100,eyeHeight-1,eyeHeight+1);
  strokeWeight(0.5);
  stroke(0);
  strokeJoin(ROUND);
  beginShape();
  vertex(-5,eyeHeight);
  vertex(-3,eyeY);
  vertex(-1,eyeHeight);
  endShape();

  beginShape();
  vertex(5,eyeHeight);
  vertex(3,eyeY);
  vertex(1,eyeHeight);
  endShape(); //eyes

  let mouthWidth = map(mouse_wide,0,100,1,8);
  let mouthHeight = map(mouse_height,0,100,1,5);

  ellipse(0,3,mouthWidth,mouthHeight); //mouth
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}

function background(top_position){
  // noStroke();
  // fill(0, 138, 7);
  // let triangleTop = map(top_position,0,100,0,20);
  // triangle(10,10,-10,-10,triangleTop,0);
  
}

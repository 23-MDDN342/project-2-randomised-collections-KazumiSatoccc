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


function faceScreen(cloth_colorR, cloth_colorG, cloth_colorB, eye_angle, mouse_wide, mouse_height) {
  noStroke();
  fill(200);
  rect(-10,-10,20,20); //background

  noStroke();

  let shirtColorR = map(cloth_colorR,0,100,1,255);
  let shirtColorG = map(cloth_colorG,0,100,1,255);
  let shirtColorB = map(cloth_colorB,0,100,1,255);

  fill(shirtColorR, shirtColorG, shirtColorB);
  triangle(10,10,-10,10,0,5); //body

  fill(255, 228, 161);
  ellipse(0,0,13,17); //face

  fill(255);
  strokeWeight(0.1);
  stroke(150);
  rect(-8,-4,16,11,1); //board

  noStroke();
  fill(shirtColorR, shirtColorG, shirtColorB);
  beginShape();
  vertex(-8,6);
  vertex(-10,8);
  vertex(-10,10);
  vertex(-7,10);
  vertex(-6,7);
  endShape();

  beginShape();
  vertex(8,6);
  vertex(10,8);
  vertex(10,10);
  vertex(7,10);
  vertex(6,7);
  endShape();

  fill(255, 228, 161);
  ellipse(-7,6,4);
  ellipse(7,6,4); //hands

  let eyeHeight = -2;

  let eyeY = map(eye_angle,0,100,eyeHeight-1,eyeHeight+1);
  noFill();
  strokeWeight(0.2);
  stroke(0);
  strokeJoin(ROUND);
  beginShape();
  curveVertex(-4,eyeHeight);
  curveVertex(-4,eyeHeight);
  curveVertex(-3.5,eyeY);
  curveVertex(-3,eyeY);
  curveVertex(-2.5,eyeY);
  curveVertex(-2,eyeHeight);
  curveVertex(-2,eyeHeight);
  endShape();

  beginShape();
  curveVertex(4,eyeHeight);
  curveVertex(4,eyeHeight);
  curveVertex(3,eyeY);
  curveVertex(2,eyeHeight);
  curveVertex(2,eyeHeight);
  endShape(); //eyes

  let mouthWidth = map(mouse_wide,0,100,1,6);
  let mouthHeight = map(mouse_height,0,100,0,4);

  fill(255, 112, 87);
  ellipse(0,4,mouthWidth,mouthHeight); //mouth

  strokeWeight(0.2);
  noFill();
  rect(-9.9,-9.9,19.9,19.9); //backframe
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
var x = 0;

function loadingScreen() {
  angleMode(DEGREES);

  noStroke();
  fill(30);
  rect(-10,-10,20,20)

  push();
  rotate(x);
  
  let dotNum = 12
  
  for (let i = 0; i < dotNum; i++) {
    noStroke();
    fill(250-i*20)
    ellipse(2,0,0.5,0.5);
    rotate(360/dotNum);
  }
  
  x = x+5
  pop();
  
  fill(200)
  textAlign(CENTER);
  textSize(1);
  text('CONNECTING...',0,5)
}

function background(top_position){
  // noStroke();
  // fill(0, 138, 7);
  // let triangleTop = map(top_position,0,100,0,20);
  // triangle(10,10,-10,-10,triangleTop,0);
  
}

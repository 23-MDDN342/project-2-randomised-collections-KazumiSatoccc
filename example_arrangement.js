/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [0]

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 5;
  let h = (canvasHeight-100) / 3;
  for(let i=0; i<3; i++) {
    for(let j=0; j<5; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;

      let s1 = random(0,100);
      let s2 = random(0,100);
      let s3 = random(0,100);
      let s4 = random(0,100);
      let s5 = random(0,100);
      let s6 = random(0,100);
      let s7 = random(0,100);
      let s8 = random(0,100);

      let screenType = random(0,100);

      push();
      if(screenType < 80) {
        translate(x, y+40);
        scale(w/25, h/25);
        faceScreen(s1,s2,s3,s4,s5,s6,s7,s8);
      } else {
        translate(x, y+40);
        scale(w/25, h/25);
        loadingScreen();
      }
      pop();
    }
  }

  fill(200);
  rect(0,0,960,20) //top frame
  ellipseMode(CENTER);
  fill(250,60,60);
  ellipse(20,10,15); //close button
  fill(250,250,50);
  ellipse(45,10,15); //minimize button
  fill(50,200,50);
  ellipse(70,10,15); // I don't use mac

  fill(30);
  rect(0,450,960,50); //bottom task bar

  fill(200);
  stroke(200);
  strokeWeight(2);
  line(30,485,40,485);
  line(35,480,35,485);
  noStroke();
  arc(35,470,10,10,0,180);
  rect(30,470,10,-5);
  arc(35,465,10,10,180,360);
  noFill();
  stroke(200);
  strokeWeight(2);
  arc(35,472,16,16,0,180); //microphone

  fill(200);
  noStroke();
  triangle(89,475,105,469,105,481);
  strokeWeight(2);
  stroke(30);
  rect(80,467,20,16,3); //video

  fill(200);
  noStroke();
  ellipse(145,468,10);
  arc(145,485,20,20,180,360); //member

  noStroke();
  fill(200);
  rect(180,463,20,16,3);
  triangle(183,484,195,471,185,471); //chat

  fill(220,10,10);
  rect(890,460,60,30,3);
  textAlign(CENTER);
  textSize(12);
  fill(250);
  text('Leave',920,480); //leave botton
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

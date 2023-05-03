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
  let h = canvasHeight / 3;
  for(let i=0; i<3; i++) {
    for(let j=0; j<5; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      //if (i == 0) {
        // center face
        let eye_value = 2;
        let tilt_value = random(-45, 45);
        let mouth_value = random(1, 3);
        let is_cyclops = random(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(5, 10);
        }

        let s1 = random(0,100);
        let s2 = random(0,100);
        let s3 = random(0,100);
        let s4 = random(0,100);
        let s5 = random(0,100);
        let s6 = random(0,100);
        let s7 = random(0,100);

        let screenType = random(0,100);

        push();
        if(screenType < 80) {
          translate(x, y);
          scale(w/25, h/25);
          faceScreen(s1,s2,s3,s4,s5,s6,s7);
        } else {
          translate(x, y);
          scale(w/25, h/25);
          loadingScreen();
        }
        pop();
      //}
      // else if (i > 0) {
      //   // all other faces
      //   push();
      //   translate(x, y);
      //   scale(w/25, h/25);
      //   if((i+j)%2 == 0) {
      //     faceScreen(20,20,20,20,20,20);
      //   }
      //   else {
      //     thinness_value = random(0, 100);
      //     blockyFace(thinness_value);
      //   }
      //   pop();
      //}
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

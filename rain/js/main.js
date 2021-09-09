// BULLET RAIN

// Set Canvas Size
canvasSize(800, 600);

// GLOBAL SIZE VARIABLES
let PLAYER_SIZE = 15;
let PLAYER_SPEED = 4;
let BULLETS_SIZE = 10;
let BULLETS_SPEED_MIN = 2;
let BULLETS_SPEED_MAX = 6;

// GLOBAL LEVEL VARIABLES
let level1ScoreToBeat = 100; // more than on old west
let level2ScoreToBeat = 300; // more than on ocean
let level3ScoreToBeat = 500; // more than in russia
let level4ScoreToBeat = 1000; // more than in space

let level2Setup = false;
let level3Setup = false;
let level4Setup = false;


// Set and Hold player position
let player = {
  x: 350,
  y: 250
};

// Bullets array
let bullets = populateBullets(12);

// GLOBAL VARIABLES
let gameover = false;
let levelChange = false;
let gameBeaten = false;
let bulletsDodged = 0;
let level = 1;

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  // LEVEL SELECTOR BROKEN CANNOT SWITCH LEVELS
  if (level == 1) { // old west
    level1();
  }
  if (level == 2) { // beach
    level2();
  }
  if (level == 3) { // russia
    level3();
  }
  if (level == 4) { // space
    level4();
  }

  // CHECK TO DISPLAY MESSAGES
  displayMessages();

  requestAnimationFrame(draw);
}

// LEVELS

//LEVEL 1 ----------------------------------------------------------------------------------- OLD WEST
//background
let oldWestBg = document.createElement('img');
oldWestBg.src = "media/old-west.png";

// set  extra obstacle
let TUMBLEWEED_SIZE = 50;
let tumbleweeds = populateTumbleweed(12);

function level1() {
    // Blank the canvas
    background("rgb(241, 205, 138)");
    image(oldWestBg, 0, 0, cnv.width, cnv.height);

    // Move player
    playerMovement();
    // Draw Player
    if (!gameover && !gameBeaten) {
        fill('rgb(119, 57, 7)');
        rect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE, 'fill');
    }

    // Draw Bullets
    fill('black');
    bulletDraw(bullets);
    // Move Bullets
    bulletMove(bullets);

    // Add extra obstacle
    if (bulletsDodged >= 20) {
        // Draw tumbleweed
        tumbleweedDraw(tumbleweeds);
        // Move tumbleweed
        tumbleweedMove(tumbleweeds);
    }

    // Check if player got hit
    playerHitCheck(player, bullets);
    playerHitCheck(player, tumbleweeds);
}


//LEVEL 2 -------------------------------------------------------------------------------------- BEACH
//background
let oceanBg = document.createElement('img')
oceanBg.src = "media/ocean.png"

// set  extra obstacle
let BEACH_BALL_SIZE = 50;
let beachballs = populateBeachballs(10);

function level2() {
    // Blank the canvas
    image(oceanBg, 0, 0, cnv.width, cnv.height);

    // Move player
    playerMovement();
    // Draw Player
    if (!gameover && !gameBeaten) {
        fill('rgb(119, 57, 7)');
        rect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE, 'fill');
    }

    // Draw Bullets
    fill('black');
    bulletDraw(bullets);
    // Move Bullets
    bulletMove(bullets);

    // Add extra obstacle
    if (bulletsDodged >= level1ScoreToBeat + 30) {
        beachballDraw(beachballs);
        beachballMove(beachballs);
    }

    // Check if player got hit
    playerHitCheck(player, bullets);
    playerHitCheck(player, beachballs);
}


//LEVEL 3 ------------------------------------------------------------------------------------- RUSSIA
// background
let russiaBg = document.createElement('img');
russiaBg.src = 'media/russia.png';

// set extra obstacle
let VODKA_SIZE = 50;
let vodkas = populateVodkas(10);
console.log(vodkas);

function level3() {
    // Blank the canvas
    image(russiaBg, 0, 0, cnv.width, cnv.height);

    // Move player
    playerMovement();
    // Draw Player
    if (!gameover && !gameBeaten) {
        fill('rgb(119, 57, 7)');
        rect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE, 'fill');
    }

    // Draw Bullets
    fill('black');
    bulletDraw(bullets);
    // Move Bullets
    bulletMove(bullets);

    // Add extra obstacle (get it? Russians? Vodka? I'm so funny)
    if (bulletsDodged >= level2ScoreToBeat + 30) {
        vodkaDraw(vodkas);
        vodkaMove(vodkas);
    }

    // Check if player got hit
    playerHitCheck(player, bullets);
    playerHitCheck(player, vodkas);
}

//LEVEL 4 -------------------------------------------------------------------------------------- Space
// background
let spaceBg = document.createElement('img');
spaceBg.src = 'media/space.png';

function level4() {
    // Blank the canvas
    image(spaceBg, 0, 0, cnv.width, cnv.height);

    // Move player
    playerMovement();
    // Draw Player
    if (!gameover && !gameBeaten) {
        fill('rgb(119, 57, 7)');
        rect(player.x, player.y, PLAYER_SIZE, PLAYER_SIZE, 'fill');
    }

    // Draw Bullets
    fill(randomRGB());
    bulletDraw(bullets);
    // Move Bullets
    bulletMove(bullets);

    // Check if player got hit
    playerHitCheck(player, bullets);
}
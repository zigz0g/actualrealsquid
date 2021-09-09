//RANDOM LIBRARY----

//Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

//Return a random integer between low (inclusive) and high (exclusive)
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function randomRGB() {
    r = randomInt(0, 265);
    g = randomInt(0, 265);
    b = randomInt(0, 265);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
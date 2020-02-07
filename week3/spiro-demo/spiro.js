let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(255);
    strokeWeight(1)
    // ellipse(150, 150 + alt, 150 / alt);
    bezier(alt - 10, alt + 10, 10, 10, 160, 90, 50, 80);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy) // come back to this
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
}
// Timers
// window.setTimeout
// only happens once
/* window.setTimeout(() => {
    // this is my function
    window.alert('timer has gone off');
}, 1500); */
// window.setInterval
// happens forever until stopped
// window.setInterval(() => {
//     console.log(new Date());
// }, 3000);
// clearing interval
// let myScore = 0;
/* const myTimer = window.setInterval(() => {
    console.log(myScore++);
    if(myScore === 3) {
        window.clearInterval(myTimer);
    }
}, 1000); */
// clearing timeout (and why)
/* const myTimeout = window.setTimeout(() => {
    alert('dang');
}, 5000);
function cancelTimeout () {
    console.log('firing');
    window.clearTimeout(myTimeout);
} */
// Intro to OOP
// Think of a car
class Vehicle {
    constructor () {
        this.engine = 'combustion';
        this.brakes = 'hydrolic';
        this.propulsionThing = 'wheels';
        console.log('I just got made');
    }
    go () {
        console.log('I am going')
    }
}
// class Car extends Vehicle {
//     constructor () {
//         super();
//         this.body = 'metal';
//     }
// }
const myCar = new Vehicle();
myCar.go();
// console.log(myCar.brakes);
// const myHonda = new Car();
// console.log(myHonda.brakes);
let myRectangle;
let myX = 0;
let myRectangles = [];
function setup () {
    createCanvas(500, 500);
    
    // myRectangle = new Rectangle(myX, 100);
    for (let i = 0; i < 10; i++) {
        myRectangles.push(new Rectangle(0, random(height)));
    }
   
}
function draw() {
    background(0);
    for (let i = 0; i < myRectangles.length; i++) {
        myRectangles[i].show();
        myRectangles[i].move();
    }
}
class Rectangle {
    constructor (startingX, startingY) {
        this.x = startingX;
        this.y = startingY;
        this.width = 50;
        this.height = 50;
        
    }

    move () {
        console.log('moving', this.x);
        this.x += 5;
    }

    show () {
        rect(this.x, this.y, this.width, this.height);
    }
}

// review for the quiz

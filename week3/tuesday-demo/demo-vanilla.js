/**
 * DID YOU START (OBS) RECORDING?
 */

// functions
// how to create a function
function greet () {
    console.log('hi class');
}
greet();
// a couple of reasons for functions
// delayed/deferred actions
// setTimeout(function () {
//     console.log('hi class');
//  }, 1000);
// organization
// function makeBlackCircle() {
//     fill('black');
//     circle(50, 50, 100);
// }

// reusability/ optimization (input)
getStuff('maserati');
function getStuff (stuff) {
    console.log('getting ' + stuff);
}

getStuff('bread');
getStuff('peanut butter');
// returning data
function getSum (numberA, numberB) {
    return numberA + numberB;
}
const mySum = getSum(4, 11);
console.log('this is the sum ' + mySum);
// functions as values in variables, properties, and arguments
const myLittleObject = {
    friendship: function () {
        console.log('is magic');
    }
}
myLittleObject.friendship();
console.log(function () {
    return 'beefy';
}());

// eslint-disable-next-line no-unused-vars
const mySpecialFunction = function () {
    // eslint-disable-next-line no-undef
    alert('yippe');
}
// mySpecialFunction();
// setTimeout(function() {
//     alert('waited 5 seconds')
//  }, 5000);

/* ------------------------------- */

// Loops!!!
// OG for loop
for (let i = 100; i < 1000; i += 10) {
    console.log(i);
}
const myCars = ['acura', 'bently', 'chevy', 'dodge'];
// for (let sillyVarName = 0; sillyVarName < myCars.length; sillyVarName++) {
//     myCars[sillyVarName] = myCars[sillyVarName].toUpperCase();
// }
// console.log(myCars);

// OG for-in loop for objects (bonus track)
const myObject = {
    color: 'red',
    price: '$20',
    weight: '20lbs'
}
for (const prop in myObject) {
    console.log(prop + ':' + myObject[prop]);
}

// while loops
const statements = [
    { question: 'what color do you get when you combine yellow and blue', answer: 'green' },
    { question: 'what color is opposite blue on the color wheel', answer: 'orange' },
    { question: 'when black is added to a color, it is called a:', answer: 'shade' },
    { question: 'when white is added to a color, it is called a:', answer: 'tint' },
    { question: 'what visible color produces the longest wavelength?', answer: 'blue' },
    { question: 'what color contains all colors: additive theory', answer: 'white' }
]
/*
let myNum = 15;
while (statements.length > 0) {
    let randomIndex = Math.ceil(Math.random() * statements.length - 1);

    let answer = prompt(statements[randomIndex].question);
    if (answer === statements[randomIndex].answer) {
        statements.splice(randomIndex, 1);
        console.log('removing statement')
    }
} */

// functional loops
// forEach
myCars.forEach(function (car) {
    console.log('functional', car);
})
// map
const myNewArray = myCars.map((car) => {
    return 'shiny new ' + car;
});
console.log(myNewArray, myCars);

// filter (bonus track)
const blueObj = statements.filter(function (statement) {
    return statement.answer === 'blue';
});
console.log(blueObj);

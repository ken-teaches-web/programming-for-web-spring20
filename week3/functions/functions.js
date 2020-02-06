logOutGreeting('yo');
function logOutGreeting (greeting) {
    console.log(greeting);
}
logOutGreeting('Salutations');
// function to get stuff
function getStuff (ingredient) {
    console.log('get ' + ingredient);
}

getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

let makeSandwich = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log('get ', ingredientArray[i]);
    }
};
makeSandwich = (ingredientArray) => {
    console.log(ingredientArray.toString(', '))
};
makeSandwich(['bread', 'mayo', 'tunafish']);
makeSandwich(['this', 'that', 'thing']);
const output = 12;
function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output;
}
console.log(makeRand(100));
console.log(output);
function checkLegality (age) {
    return age >= 21;
}
const KensAge = 49;
if (checkLegality(KensAge)) {
    console.log('He is legal');
}
const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
    }
}
myObject.getPosition();
console.log(myObject.x, myObject.y);

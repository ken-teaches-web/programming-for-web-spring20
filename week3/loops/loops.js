// for loop with number
/* for (let i = 0; i < 10; i++) {
    console.log('this is i', i);
} */
// for loop with an array
const myMovies = ['star wars', 'empire strikes back', 'return of the jedi', 'raiders of the lost ark', 'last crusade'];
for (let j = 0; j < myMovies.length; j++) {
    console.log('i like', myMovies[j]);
}

// while loop -- a little scary but not bad
let myVar = false;
while (myVar === false) {
    console.log('this will happen once');
    myVar = true;
}

// while loop removing items in an array
const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
    console.log('removing ' + myNums[myNums.length - 1]);
    myNums.pop();
}
console.log(myNums);

// forEach
const myDogs = ['fido', 'fifi', 'spot', 'yoshi'];
myDogs.forEach((dogName, indexNumber) => {
    console.log('my dog has a name of ' + dogName + ' with an index of ' + indexNumber);
});
// map
const farmAnimals = ['chicken', 'cow', 'horse'];
const newArray = farmAnimals.map(animal => {
    return 'fancy ' + animal;
});
console.log(newArray);
const myOtherArray = [
    { car: 'jeep', driver: 'billy' },
    { car: 'bettle', driver: 'betty' },
    { car: 'stealth bomber', driver: 'bobby' },
    { car: 'big truck', driver: 'william' }
];
const cars = myOtherArray.map(object => {
    return object.car;
});
console.log(cars, myOtherArray);

// objects

// create
const kensCar = {
    color: 'black',
    pistons: 4
};
console.log(kensCar);
// mutate: add data (properties)
kensCar.fuelInjection = true;
console.log(kensCar);
kensCar['4-wheel-drive'] = true;

// display single item with dot
console.log('kens car is', kensCar.color);
// display single item with array notation
console.log('is it 4 wheel dig?', kensCar['4-wheel-drive']);
// using toString (works with arrays too)
console.log(kensCar.toString());
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());
// mutate: remove property
delete kensCar.pistons;
console.log('kens car without pistons', kensCar);
// merge two objects
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Nissan'
};
const newJuke = Object.assign({}, basicJuke, kensCar);
console.log('new juke', newJuke);
// objects in arrays
const cars = [
    { make: 'Nissan', model: 'Rogue', color: 'orange' },
    { make: 'Nissan', model: 'Altima', color: 'blue' },
    { make: 'Dodge', model: 'Viper', color: 'blue' },
    { make: 'VW', model: 'Beetle', color: 'pink' },
    { make: 'Chevy', model: 'Blazer', color: 'black' },
    { make: 'Dodge', model: 'Charger', color: 'green' }
];
console.log('make is', cars[0].make);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);

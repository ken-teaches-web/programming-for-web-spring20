let p5ListItem = document.querySelector('#p5');
p5ListItem.style.fontSize = '30px';

let newThing = document.createElement('span');
newThing.innerHTML = 'I am going along for the ride';

p5ListItem.appendChild(newThing);
function handleMyButtonClick () {
    console.log('howdy');
}
let buttonThing = document.querySelector('.myButton');
buttonThing.addEventListener('click', () => {
    console.log('the button has been clicked');
})

let heading;
let button;
let input;
const statements = [
    { question: 'what color do you get when you combine yellow and blue', answer: 'green' },
    { question: 'what color is opposite blue on the color wheel', answer: 'orange' },
    { question: 'when black is added to a color, it is called a:', answer: 'shade' },
    { question: 'when white is added to a color, it is called a:', answer: 'tint' },
    { question: 'what visible color produces the longest wavelength?', answer: 'blue' },
    { question: 'what color contains all colors: additive theory', answer: 'white' }
];
let message = 'type something to change me';
// using the DOM library for
function sayMessage() {
    message = input.value();
    input.value('');
}
function setup () {
    createCanvas(800, 600);
    background('lightblue');
    heading = createElement('h2', ['Type your answer below']);
    heading.position(100, 200);
    button = createButton('submit answer');
    button.size(150, 16);
    button.position(100, 275);
    button.mousePressed(sayMessage);
    input = createInput('');
    input.position(100, 250);
}
function draw () {
    background('lightblue');
    textSize(28);
    fill('purple');
    text(message, 100, 400);
}
// making buttons

// listening to button events

// making inputs

// using input values
// --------------------------
// using text (doesn't need DOM library)

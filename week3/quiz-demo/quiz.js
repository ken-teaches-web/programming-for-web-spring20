let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: 'what color do you get when you combine yellow and blue', answer: 'green' },
    { question: 'what color is opposite blue on the color wheel', answer: 'orange' }
   
];
function next() {
    if (statements.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'correct! next question';
        responseColor = 'green';
    } else {
        // this is the wrong answer condition
        response = 'oops, that wasn\'t quite right! Try another';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
}
currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);

    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 250);
}
function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
}

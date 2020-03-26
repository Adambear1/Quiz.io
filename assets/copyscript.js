// question constants to retrieve later. questions[0].question
const questions = [
    {
    //1
    question: 'What is JavaScript?',
    answers: [
        {text: 'Programming Language', correct: true},
        {text: 'Type of coffee', correct: false},
        {text: 'Famous poem by Edgar Allen Poe', correct: false},
        {text: 'Social media platform', correct: false}
        ],
    difficulty: 'Easy',
    },
    {
    //2
    question: 'What is an event listener in JS?',
    answers: [
        {text: 'A conditional statement that runs only if true', correct: false},
        {text: 'A loop that is ran, requiring variable input that is ran until condition is met', correct: false},
        {text: 'A form of action, either click, hover, or keypress, that calls a function when executed', correct: true},
        {text: 'A submission box that is stored in the local storage and retrieved when called upon', correct: false}
        ],
    difficulty: 'Medium',
    },
    {
    //3
    question: 'Which of the following is not an event listener in JavaScript',
    answers: [
        {text: 'click', correct: false},
        {text: 'mousehover', correct: true},
        {text: 'keydown', correct: false},
        {text: 'keyup', correct: false}
        ],
    difficulty: 'Medium',
    },
    {
    //4
    question: 'What is the difference between "==" and "==="',
    answers: [
        {text: '"==" is the assignment variable that replaces values of assigned value, while "===" is the comparison operator to assure that two variables compared are quivalent', correct: false },
        {text: 'Both "==" and "===" are comparison operators, except "===" looks for exact type conversion and "==" does not', correct: true},
        {text: '"==" is the comparison operator, while "===" is the assignment operator', correct: false},
        {text: '"==" is the comparison operator and looks for both exact conversions and not exact conversions, while "===" does not exist in JavaScript"', correct: false}
        ],
    difficulty: 'Medium',
    },
    {
    //5
    question: 'What does the term bubbling refer to in Javascript?',
    answers: [
        {text: 'An event that occurs within a nested element, where the inner most element is selected, but because elements have the same handler, the event propogates up the chain of elements affecting all elements', correct: true },
        {text: 'An event where an integer is called and assumes the value of a similar integer because both reside within the same parent element', correct: false },
        {text: 'An event that concatinates multiple lines of string when called upon because the lines of string reside within a while loop, and continue to concatinate until the loop is broken', correct: false},
        {text: 'An event where a while loop is never concluded, therefore causing the browser to never load, thus, needing code be to revised', correct: false}
        ],
    difficulty: 'Hard',
    },
    {
    //6
    question: 'What type of data is the user imput stored as in Javascript?',
    answers: [
        {text: 'Boolean', correct: false },
        {text: 'Whatever the user declares to be as.', correct: false },
        {text: 'Mixed', correct: false},
        {text: 'String', correct: true}
        ],
    difficulty: 'Medium',
    },


]


var points = document.querySelector("#point-counter");
var count = localStorage.getItem("count");
var submitBtn = document.querySelector("#submit-btn");
var answerButtonElement = document.querySelector('answer-buttons');
var answerBtn = document.querySelector("#answer-buttons");
var difficulty = document.querySelector('.difficulty')


//Function to generate a random index number the length of the question list; non-repetitive.
function shuffle(questions) {
    var i = questions.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;

    }

    return questions;


}

shuffle(questions)
//Shuffles question list
// shuffle()
var ranQuestion = shuffle(questions)
//Retrieves length of list
var ranQuestionLength = ranQuestion.length

console.log(ranQuestion)


console.log(ranQuestionLength)
console.log(questions.length)



//for loop to go through all shuffled questions
for (var i = 0; i < questions.length; i++) {
    //setting variable to question of random answer
    var question = ranQuestion[i].question;
    console.log(question)
    for (var j = 0; j < 1; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answerCorrect = answer.correct;
        var questionCard = document.querySelector('#question')
        var answer1 = document.querySelector("#button1")
        answer1.textContent = answerText;
        answer1.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 1; j < 2; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answerCorrect = answer.correct;
        var answer2 = document.querySelector("#button2")
        answer2.textContent = answerText;
        answer2.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 2; j < 3; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answerCorrect = answer.correct;
        var answer3 = document.querySelector("#button3")
        answer3.textContent = answerText;
        answer3.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 3; j < 4; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answerCorrect = answer.correct;
        var answer4 = document.querySelector("#button4")
        questionCard.textContent = question;
        answer4.textContent = answerText;    
        answer4.correct = ranQuestion[i].answers[j].correct    
    }
    console.log(answer1) 
    console.log(answer1.correct)
    console.log(ranQuestion[i].answers[1].correct) 
    console.log(answer2.correct)
    console.log(ranQuestion[i].answers[2].correct) 
    console.log(answer3.correct)
    console.log(ranQuestion[i].answers[3].correct) 
    console.log(answer4.correct)
};

var k = 0;
function nextQuestion() {
    if (k === 5){
        k = 0;
    }else {
        k++;

        questionCard.textContent = ranQuestion[k].question;
        difficulty.textContent = ranQuestion[k].difficulty;
        answer1.textContent = ranQuestion[k].answers[0].text;
        answer2.textContent = ranQuestion[k].answers[1].text;
        answer3.textContent = ranQuestion[k].answers[2].text;
        answer4.textContent = ranQuestion[k].answers[3].text;
        answer1.correct = ranQuestion[k].answers[0].correct;
        answer2.correct = ranQuestion[k].answers[1].correct;
        answer3.correct = ranQuestion[k].answers[2].correct;
        answer4.correct = ranQuestion[k].answers[3].correct;
        answer1.classList.remove('hide')
        answer2.classList.remove('hide')
        answer3.classList.remove('hide')
        answer4.classList.remove('hide')

    }
}

nextQuestion()

points.textContent = 0

console.log(points)

answer1.addEventListener("click", function() {
    if (answer1.correct){
        nextQuestion();
        points.textContent++;
    }
    else{
        answer1.classList.add('hide')
    }})
answer2.addEventListener("click", function() {
    if (answer2.correct){
        nextQuestion();
        points.textContent++;
    }
    else{
        answer2.classList.add('hide')
    }})
answer3.addEventListener("click", function() {
    if (answer3.correct){
        nextQuestion();
        points.textContent++;
    }
    else{
        answer3.classList.add('hide')
    }})
answer4.addEventListener("click", function() {
    if (answer4.correct){
        nextQuestion();
        points.textContent++;
    }
    else{
        answer4.classList.add('hide')
    }})   













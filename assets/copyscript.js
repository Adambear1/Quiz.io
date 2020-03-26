var counter = document.querySelector("#point-counter");
var count = localStorage.getItem("count");
var submitBtn = document.querySelector("#submit-btn");
var answerButtonElement = document.querySelector('answer-buttons');
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-buttons");
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
        ]
    },
    {
    //2
    question: 'What is an event listener in JS?',
    answers: [
        {text: 'A conditional statement that runs only if true', correct: false},
        {text: 'A loop that is ran, requiring variable input that is ran until condition is met', correct: false},
        {text: 'A form of action, either click, hover, or keypress, that calls a function when executed', correct: true},
        {text: 'A submission box that is stored in the local storage and retrieved when called upon', correct: false}
        ]
    },
    {
    //3
    question: 'Which of the following is not an event listener in JavaScript',
    answers: [
        {text: 'click', correct: false},
        {text: 'mousehover', correct: true},
        {text: 'keydown', correct: false},
        {text: 'keyup', correct: false}
        ]
    },
    {
    //4
    question: 'What is the difference between "==" and "==="',
    answers: [
        {text: '"==" is the assignment variable that replaces values of assigned value, while "===" is the comparison operator to assure that two variables compared are quivalent', correct: false },
        {text: 'Both "==" and "===" are comparison operators, except "===" looks for exact type conversion and "==" does not', correct: true},
        {text: '"==" is the comparison operator, while "===" is the assignment operator', correct: false},
        {text: '"==" is the comparison operator and looks for both exact conversions and not exact conversions, while "===" does not exist in JavaScript"', correct: false}
        ]
    },
    {
    //5
    question: 'What type of data is the user imput stored as in Javascript?',
    answers: [
        {text: 'Boolean', correct: false },
        {text: 'Whatever the user declares to be as.', correct: false },
        {text: 'Mixed', correct: false},
        {text: 'String', correct: true}
        ]
    },
    {
    //6
    question: 'What type of data is the user imput stored as in Javascript?',
    answers: [
        {text: 'Boolean', correct: false },
        {text: 'Whatever the user declares to be as.', correct: false },
        {text: 'Mixed', correct: false},
        {text: 'String', correct: true}
        ]
    },


]

function shuffle(questions) {
    var i = questions.length,
    j = 0,
    temp;

    while (i--) {

    j = Math.floor(Math.random() * (i + 1));

    temp = questions[i];
    questions[i] = questions[j]
    questions[j] = temp
    }

    return questions
}

var index = ""

function ranIndex() {
    for (var i = 0; i < questions.length; i++){
        localIndex = i;
    }
    console.log(localIndex)
}



var random = shuffle(questions)


console.log()





function ranIndexGenerator() {
    //Runs just one time to display one question per card
    for (var i = 0;  i < questions.length; i++){
            //Pulls random question from index of array
            var ranQuestionNum = Math.floor(Math.random() * questions.length);
            //Turns local variable of ranQuestionNum into global variable of ranIndex
            window.ranIndex = ranQuestionNum
            // questionElement.textContent = questions[ranQuestionNum].question;
            //Associates that answers index from selected question
            // var answersArray = Object.values(questions[ranQuestionNum].answers);
            // console.log(ranQuestionNum)           
    }
}
//Runs the for loop
ranIndexGenerator()




///////////////////////////// VARIABLES ////////////////////////////////////////////
var answersArray = Object.values(questions[ranIndex].answers); //access to answer
var userSelect = document.querySelector('.answer') //store users input value from radio
var length = userSelect.length
var question = document.querySelector('#question')
var answer1 = document.querySelector("#button1")
var answer2 = document.querySelector("#button2")
var answer3 = document.querySelector("#button3")
var answer4 = document.querySelector("#button4")
// var ranQuestionNum = Math.floor(Math.random() * questions.length);
var points = document.querySelector("#point-counter")

points = 0



//     for (var i = 0;  i < questions.length; i++){
// }
console.log(answersArray[0].text)
console.log(answersArray[0].correct)
console.log(answersArray[1].text)
console.log(answersArray[1].correct)
console.log(answersArray[2].text)
console.log(answersArray[2].correct)
console.log(answersArray[3].text)
console.log(answersArray[3].correct)

function ranQuestion() {
    //Declares random question
    questionElement.textContent = questions[ranIndex].question;
    console.log(questions[ranIndex].question);
    //Associates that answers index from selected question
    var answersArray = Object.values(questions[ranIndex].answers);
    //Buton 1 question & value
    button1.textContent = answersArray[0].text;
    button1.correct = answersArray[0].correct;
    //Button 2 question & value
    button2.textContent = answersArray[1].text;
    button2.correct = answersArray[1].correct;
    //Button 3 question & value
    button3.textContent = answersArray[2].text;
    button3.correct = answersArray[2].correct;
    //Button 4 question & value
    button4.textContent = answersArray[3].text;
    button4.correct = answersArray[3].correct;
} 
    
    
ranQuestion()


    // var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    if (button1.correct == true) {
        alert("correct!");
        points += 1
        ranQuestion();
    }
    else {
         button1.classList.add('hide')
    }
})
button2.addEventListener("click", function() {
    if (button2.correct == true) {
        alert("correct!");
        points += 1
        ranQuestion();
    }
    else {
         button1.classList.add('hide')
    }
})
button3.addEventListener("click", function() {
    if (button3.correct == true) {
        alert("correct!");
        points += 1
        ranQuestion();
    }
    else {
        button1.classList.add('hide')
    }
})
button4.addEventListener("click", function() {
    if (button4.correct == true) {
        alert("correct!");
        points += 1
        ranQuestion();
    }
    else {
        button1.classList.add('hide')
    }
})







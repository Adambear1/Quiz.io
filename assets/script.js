// PSUEDO CODE
    //Question system
        //Connect function to array to have question & answers set to #question #answer-button id's in html
        //Shuffle/Randomize questions pulled and display of answers
        //Assure correct answers are attached to correct question displayed
        //A wrong answer disapears every 3 seconds of display.
        //Can only advance is correct answer is chosen
    //Point system
        //Correct Answer on first try = 1 point
        //Correct Answer after 1 attempt = 0 point
        //Missed question, no matter how many attempts = -1 points
            //BONUS:: Difficulty settings:
                //Difficult questions = 5 points
                    //Missed = -3 points
                //Medium questions = 3 points
                    //Missed = -2 points
                //Easy questions = 1 point
                    //Missed = -1 point
    //'History'
        // All questions asked concatinate below quiz section
            //IE: Question: "What is 5 + 5"
            //    Answer: "10"
                //History section of concatination displayed as "5 + 5 equals to 10"
        // Uses local data storage to identify which questions have already been asked
            // BONUS:
                //Ability to select from history section and repopulate the question section above
                    //Points are nullified on repeated questions




//Variable Section
var counter = document.querySelector("#point-counter");
var count = localStorage.getItem("count");
var submitBtn = document.querySelector("#submit-btn");
var answerButtonElement = document.querySelector('answer-buttons');
var questionElement = document.querySelector("#question");
var answerBtn = document.querySelector("#answer-buttons");

// question constants to retrieve later. questions[0].question


   



const questions = [
    {
    question: 'What is JavaScript?',
    answers: [
        {text: 'Programming Language', correct: true },
        {text: 'Type of coffee', correct: false },
        {text: 'Famous poem by Edgar Allen Poe', correct: false },
        {text: 'Social media platform', correct: false}
        ]
    },
    {
    question: 'What is an event listener in JS?',
    answers: [
        {text: 'A conditional statement that runs only if true', correct: false },
        {text: 'A loop that is ran, requiring variable input that is ran until condition is met', correct: false },
        {text: 'A form of action, either click, hover, or keypress, that calls a function when executed', correct: true},
        {text: 'A submission box that is stored in the local storage and retrieved when called upon', correct: false}
        ]
    },
]





// var answersArray = Object.values(questions[0].answers); //access to answer
var userSelect = document.querySelector('.answer') //store users input value from radio
var length = userSelect.length
var question = document.querySelector('#question')

var answer1 = document.querySelector("#button1")
var answer2 = document.querySelector("#button2")
var answer3 = document.querySelector("#button3")
var answer4 = document.querySelector("#button4")


// console.log(questions[i].question); //get question
// console.log(answersArray[j].text);




function hideAnswer(element) {
    element.classList.add('hide')
}


// question.textContent = questions[0].question;
// var answer1value = answersArray[0].text;
// var answer2value = answersArray[1].text;
// var answer3value = answersArray[2].text;
// var answer4value = answersArray[3].text;

// button1.textContent = answer1value;
// button2.textContent = answer2value;
// button3.textContent = answer3value;
// button4.textContent = answer4value;





// function answerCheck() {
//     for(var i = 0; i < questions.length; i++){
//         question.textContent = questions[i].question;
//         for(var j = 0; j < 4; j++){
//             if (radios[i].checked.value === "checked" && radios[i].value === answersArray[j]) {
//                 point++
//                 nextQuestion()
//             }
//         }
//     }
// }

// answerCheck()

// console.log(Object.values(questions[0].answers[0]));

/*
//Question System
let shuffledQuestions, currentQuestionIndex

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - Math.random())
    currentQuestionIndex = 0
    setNextQuenstion()
}

startGame()


submitBtn.addEventListener('click', () => {
    currentQuestionIndex ++
    setNextQuenstion()
})

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innterText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
  clearStatusClass(document.body)
  submitBtn.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(buton => {
        setStatusClass(button, buton.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        submitBtn.classList.remove('hide')
    } else {
        return
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
*/
// Point System

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(questions[i].question));
//   }

var ranQuestionNum = Math.floor(Math.random() * questions.length);
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")





    for (var i = 0;  i < questions.length; i++){
        function ranQuestion() {
            //Pulls random question from index of array
            var ranQuestionNum = Math.floor(Math.random() * questions.length);
            questionElement.textContent = questions[ranQuestionNum].question;
            //Associates that answers index from selected question
            var answersArray = Object.values(questions[ranQuestionNum].answers);
            button1.textContent = answersArray[0].text;
            button2.textContent = answersArray[1].text;
            button3.textContent = answersArray[2].text;
            button4.textContent = answersArray[3].text;

    }
    
}


answersArray = Object.values(questions[ranQuestionNum].answers)


btn1Value = answersArray[0].correct;
btn2Value = answersArray[1].correct;
btn3Value = answersArray[2].correct;
btn4Value = answersArray[3].correct;


console.log(questions[ranQuestionNum].question)




ranQuestion()




console.log(questions[ranQuestionNum].answers[0].text)
console.log(questions[ranQuestionNum].answers[0].correct)






button1.addEventListener("click", function() {
    if (btn1Value == questions[ranQuestionNum].answers[0].correct) {
        alert("correct!")
    }
    else {
        button1.classList.add('hide')
    }
})
button2.addEventListener("click", function() {
    if (btn2Value == questions[ranQuestionNum].answers[1].correct) {
        alert("correct!")
    }
    else {
        button2.classList.add('hide')
    }
})
button3.addEventListener("click", function() {
    if (btn3Value == questions[ranQuestionNum].answers[2].correct) {
        alert("correct!")
    }
    else {
        button3.classList.add('hide')
    }
})
button4.addEventListener("click", function() {
    if (btn4Value == questions[ranQuestionNum].answers[3].correct) {
        alert("correct!")
    }
    else {
        button4.classList.add('hide')
    }
})









// console.log(questions[ranQuestionNum].question.answersArray[0].text)





// console.log(question.textContent);
// console.log(answersArray);

// button1.addEventListener("click", function(){
// nextQuestion();
// })
// button2.addEventListener("click", function(){
//     nextQuestion();
// })
// button3.addEventListener("click", function(){
//     nextQuestion();
// })
// button4.addEventListener("click", function(){
//     nextQuestion();
// })

//Starts count at 0
// count = 0;
// // Fills id of question-counter in head of card with value of card number
// counter.textContent = count;
// // Button function clicker to add value to question number
// submitBtn.addEventListener("click", function() {
//     for(var i = 0; i < questions.length; i++){
//         question.textContent = questions[i].question;
//         for(var j = 0; j < 4; j++){
//             if ( button1.value === answersArray[j]) {
//                 count++
//                 ranQuestion()
//             }
//         })
//     counter.textContent = count;
    // var answersArray = Object.values(questions[i].answers);
    // var answer1value = answersArray[0].text;
    // var answer2value = answersArray[1].text;
    // var answer3value = answersArray[2].text;
    // var answer4value = answersArray[3].text;

    // button1.textContent = answer1value;
    // button2.textContent = answer2value;
    // button3.textContent = answer3value;
    // button4.textContent = answer4value;
    // localStorage.setItem("count", count);
    // }
    // adds ++ for every time button is clicked
    // count ++;
    // adds new value to count value
    
    // adds to storage of what question user is on to retrieve later
    
// })





//History










// An array of indexes, which each contain a question, answer, and level of difficulty per question.
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
        {text: 'A direct conditional statement that runs only if true', correct: false},
        {text: 'A loop that is ran, requiring variable input that is ran until condition is met', correct: false},
        {text: 'A form of action, either click, hover, or keypress, that calls a function when executed by the user', correct: true},
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
    //7
    {question: 'What are the primary programming languages that are invovled in full stack development?',
    answers: [
        {text: 'HTML, CSS, Tensorflow', correct: false},
        {text: 'HTML, CSS, Javascript', correct: true},
        {text: 'HTML, Javascript, Python', correct: false},
        {text: 'HTML, CSS, Wordpress', correct: false},
    ],
    difficulty: 'Easy',
    },
    //8
    {question: 'In Bootstrap, what is the proper syntax to apply a specific number of columns to a defined row?',
    answers: [
        {text: 'column-lg-3', correct: false},
        {text: 'column-large-12', correct: false},
        {text: 'col-large-1', correct: false},
        {text: 'col-lg-4', correct: true},
    ],
    difficulty: 'Medium',
    },
    //9
    {
    question: 'In Bootstrap, what is the difference between a fluid layout and a fixed layout?',
    answers: [
        {text: 'A fluid layout covers the entire screen, no matter the screens dimensions, while a fixed layout only covers the standard screens width of 940px', correct: true},
        {text: 'A fluid layout allows for animations and special effects to be applied by the developer, while a fixed layout remains stagnant and cannot have any additional effects added', correct: false},
        {text: 'A fluid layout is only avaible for Bootstrap Premium, which automatically updates all internal code for when HTML, CSS, or Javascript update, while fixed layout does not', correct: false},
        {text: 'There is no difference, both are used for a responsive design', correct: false},
        
    ],
    },
    //10
    {
    question: 'What is a proper call function to retrieve a class element when using CSS?',
    answers: [
        {text: " '//' ", correct: false},
        {text: " '#' ", correct: false},
        {text: " '.' ", correct: true},
        {text: " ' @ ' ", correct: false},
    ],

    }

]

//calling var userName from username input
//calling var points from point-counter 



//Set of global variables defined that to be used later

var points = document.querySelector("#point-counter");
var answerButtonElement = document.querySelector('answer-buttons');
var answerBtn = document.querySelector("#answer-buttons");
var difficulty = document.querySelector('.difficulty');
var userName = document.querySelector('#input');
var submitBtn = document.querySelector('.button');
var msgDiv = document.querySelector('.msg');
var timer = document.querySelector('#timer');
var history = document.querySelector('.history');
var interface = document.querySelector(".bg-modal");
var container = document.querySelector(".container")
var li = document.createElement("li");
var questionCard = document.querySelector('#question')


// Close Button on main interface to 'hide' the test if user does not input a correct name


document.querySelector(".close").addEventListener('click', function(){
    //Adds style to interface and main container to hide
    interface.style.display = 'none';
    container.style.display = 'none';


    // meme.setAttribute("src", "https://media2.giphy.com/media/TfKfqjt2i4GIM/giphy.webp?cid=ecf05e471ec2a813dad2f1fbb25d0e8d8f9ec97b9fe56716&rid=giphy.webp");
});


// Function to end the game when time = 0 (called later)

function endGame() {
    // Displays message that game is over -- will only be used if able to break out of infinite for loop that is called when game is over is fixed.

    // interface.style.display = 'inline-block';
    // displayMessage("success", "Game Over!");
    location.reload();
}


//Displays highscores when game is completed

function startGame() {
    document.readyState()
}

$( document ).ready(function() {
    if(JSON.parse(localStorage.getItem("username")) == null) {
        document.getElementById("lastNums").innerHTML += "<h4>" + "No highscores!  :-(" + "</h4>"
    } else{
        document.getElementById("lastNums").innerHTML += "<h4 class='hs'>" + "<iframe src='https://giphy.com/embed/olAik8MhYOB9K' width='280'' height='230' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p>" + "<a href='https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K'></a></p>" + JSON.parse(localStorage.getItem("username")) + ':  ' + localStorage.getItem("highscore") + "</h4>";       
    }
});  



//Time is set to 15 seconds



var highscore = localStorage.getItem("highscore")

let time = 30;



//In-game clock
function countDown() {
    //setting constant seconds to input to seconds
    const seconds = time % 60
    //Replaces timer in HTMl to seconds displayed
    timer.innerHTML = seconds;
    //Conditional to show if time is at least one, then time is to deduct one second per iteration.
    if(time >= 1){
        time--;
    }
    //Else, once clock is less than one second, then total points is added to local storage, and game is over.
    else {
        if(points.textContent !== null){
            if(points.textContent > highscore) {
                Number(localStorage.setItem("highscore", points.textContent));
            }
        }
        else{
            localStorage.setItem("highscore", points.textContent)
        }
        // Number(localStorage.setItem("score", points.textContent));
        endGame();
        // location.reload();
        }
}

// Function defined of displaying fun messages for when game is over & when user input is invalid
function displayMessage(type, message){
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}


//Submit button on main interface
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    //If clicked and username is blank, then notify that username is invalid
    if (userName.value === "") {
        displayMessage("error", "Enter valid username");
        console.log(inputArray.name.value)
    }
    //If at least one character is inputted, then start countdown and decrease at one second per iteration.
    else {
        setInterval(countDown, 1000);
        //Hides the interface
        interface.style.display = 'none';
        //Stores the username to local storage
        JSON.stringify(localStorage.setItem("username", JSON.stringify(userName.value)));
        //Starts game, defined later
        startGame()
        }    
});



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
//Defining variable of calling function to the displayed index above.
var ranQuestion = shuffle(questions)
console.log(ranQuestion)


//
function startGame(){
    //for loop to go through all shuffled questions per iteration
for (var i = 0; i < questions.length; i++) {
    //setting variable to question of random answer
    var question = ranQuestion[i].question;
    console.log(question)
    //Nested for loop so when random, non-repetitive question is displayed [i], then affiliated answer with question [j] can be displayed as well
    //Nested for loop of [j] specifically for question, where values and iteration of J is +1 for each for loop so one answer is not displayed for all possible answers
            //Instead, it takes first answer, randomizes it, and puts it in button 1 for answer, then takes remaining answers and puts in next button, etc.
    for (var j = 0; j < 1; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answer1 = document.querySelector("#button1")
        questionCard.textContent = question;
        answer1.textContent = answerText;
        answer1.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 1; j < 2; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answer2 = document.querySelector("#button2")
        questionCard.textContent = question;
        answer2.textContent = answerText;
        answer2.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 2; j < 3; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answer3 = document.querySelector("#button3");
        questionCard.textContent = question;
        answer3.textContent = answerText;
        answer3.correct = ranQuestion[i].answers[j].correct
    }
    for (var j = 3; j < 4; j++){
        var answer = ranQuestion[i].answers[j];
        var answerText = answer.text;
        var answer4 = document.querySelector("#button4")
        questionCard.textContent = question;
        answer4.textContent = answerText;    
        answer4.correct = ranQuestion[i].answers[j].correct    
    }
   
    //Console log to test loops
    console.log(answer1) 
    console.log(answer1.correct)
    console.log(ranQuestion[i].answers[1].correct) 
    console.log(answer2.correct)
    console.log(ranQuestion[i].answers[2].correct) 
    console.log(answer3.correct)
    console.log(ranQuestion[i].answers[3].correct) 
    console.log(answer4.correct)
};



// k = number of guesses/arbitrary length of game, once 100+, then game is effectively over.
        //Prevents random/rapid fire answers from user
        //Starts at 0, and is addded for each question guess
var k = 0;
// nextQuestion function to show next card, called later
function nextQuestion() {
    if (k == questions.length -1){
        k = 0;
        points.textContent ++
    }else {
        k += 1;
        points.textContent ++
        console.log(k)
        //
        // questionCard.textContent = ranQuestion[k].question;

        //Assigns the question, difficulty, and possible answers to each card once the previous question is correctly answered
        //Assigns text value to question
        questionCard.textContent = ranQuestion[k].question;
        //Assigns text value to difficulty
        difficulty.textContent = ranQuestion[k].difficulty;
        //Assigns text value to answers
        answer1.textContent = ranQuestion[k].answers[0].text;
        answer2.textContent = ranQuestion[k].answers[1].text;
        answer3.textContent = ranQuestion[k].answers[2].text;
        answer4.textContent = ranQuestion[k].answers[3].text;
        //Assigns correct value (to check if answer is corred [hiddent to user on interface]) to question
        answer1.correct = ranQuestion[k].answers[0].correct;
        answer2.correct = ranQuestion[k].answers[1].correct;
        answer3.correct = ranQuestion[k].answers[2].correct;
        answer4.correct = ranQuestion[k].answers[3].correct;
        //Reveals all hidden answers (displayed later)
        answer1.classList.remove('hide')
        answer2.classList.remove('hide')
        answer3.classList.remove('hide')
        answer4.classList.remove('hide')

    }
}

nextQuestion()

// //sound effects
// var audioElement = document.createElement("audio");
// audioElement.setAttribute("src", "assets/correct.mp3");



// Assigns points for correct answers
points.textContent = 0

//Assigns in-game values to all possible answers
        //If correct, nextQuestion is ran.
        //If incorrect, then wrongg answer is hidden
                //Same conditional statement for each possible answer
                    //**** Added audio as well, but could not find free sample, so insert and commented out a demo with voicemarks just to show how it would be applied if needed
answer1.addEventListener("click", function() {
    if (answer1.correct){
        // audioElement.play()
        nextQuestion();
    }
    else{
        answer1.classList.add('hide')
    }})
answer2.addEventListener("click", function() {
    if (answer2.correct){
        // audioElement.play()
        nextQuestion();
    }
    else{
        answer2.classList.add('hide')
    }})
answer3.addEventListener("click", function() {
    if (answer3.correct){
        // audioElement.play()
        nextQuestion();
    }
    else{
        answer3.classList.add('hide')
    }})
answer4.addEventListener("click", function() {
    if (answer4.correct){
        // audioElement.play()
        nextQuestion();
    }
    else{
        answer4.classList.add('hide')
    }})
}




// (-:


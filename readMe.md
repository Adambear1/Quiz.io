//User Story
BECAUSE I am a new developer,
THEN I want to study and quiz my self for practice.
BECAUSE studying and self-quizzes can be boring,
THEN I want to have interaction with highscores and leader boards for a source of entertainment.

//Description
Quiz.io is a highly extensible front end application that applys local storage, jquery, bootstrap, popup modals, and timing events.

This repository contains the core framework and scripts of the Application. The framework impliments the functionality that is built into the Application and therefore is a depedency of all functionality wihtin.

//UI
The user simply starts the quiz by entering the desired username for the quiz run. If the user name is valid (not null & not repeated), then it is stored in local storage. When inputted, then quiz can begin, where popup modal disappears and quiz application begins.
Upon starting of quiz, the array of questions/answers is shuffled and individually displayed for user to answer from. If answer is incorrect, then wrong answer disappears to prevent reselection. If correct, then point is added and next question is shown. All quetion cards show time at top center and level of difficulty for question on top right.
Once time runs out, then points is stored with username in local storage for retrieval at highscore stage. If the run tops the previous highscore record, then it is presented, if not, then user has option to try test again.

//Code
Javascript contains 5 main sections:
    - Questions and Answers array
        *Array with keys (questions/answers) and values to be pulled and displayed in main interface during quiz
        Total of 10 questions where the answer values have identifiers to validate if answer is correct or not.
    - Defining variables/connection to DOM
        *Connect all classes and id's to javascript to manipulate.
    - Main interface 
        * sets interface
            - displays highscore if present.
                - retrieves from local storage.      
        * start/stop game
            - starts time and hides popup modal when game starts.
            - when time runs out, popup modal is shown again and high score is presented.
        * enter username
            - input box for username that is stored in local storage.
    - Clock/Timing event
        * time decrements by 1 second. 
        * when game over, current score is stored in local storage and main user face is presented.
    - Checking answers/Next question if right
        * if answer is right, then point is added and next question is displayed.
        * if answer is wrong, then wrong answer disappears and user must then reselect.

//PROS
** Uses local storage perfectly for small/local events.
** Timing event is main event of website, where it is catalyst for all other functions to run.
** Perfect usage of randomization for shuffling of questions/answers.

//CONS
**Only displays the top highscore, limiting number of runs in totality. Prefer to have top 10 scores and rank in order; but unable to do so at the moment.
** Usage of APIs for questions/answers would be more sufficient, but unable to do so at this moment.
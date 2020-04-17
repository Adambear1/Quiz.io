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
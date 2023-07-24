/**
 * Executes the 'rightOrWrong' function when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    rightOrWrong();
    disableEnterKey(13);
});

//Variables used to sort all related question data
let question1 = [
    {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        options: ["Central Processing Unit", "Central Peering Unit ", "Conjuncted Pile Unity ", "Centering Pivot Unit"]
    }

];

let question2 = [
    {
        question: "What OS system is the fastest out of the below options?",
        answer: "Linux",
        options: ["Windows 10", "Windows 11", "Linux", "MacOS"]
    }

];

let question3 = [
    {
        question: "What does RAM stand for?",
        answer: "Random Access Memory",
        options: ["Random Access Memory", "Read-Only Memory", "Randomly Allocated Memory", "Rapid Application Memory"]
    }
];

let question4 = [
    {
        question: "Which programming language is often used for web development?",
        answer: "JavaScript",
        options: ["Java", "Python", "C++", "JavaScript"]
    }
];

let question5 = [
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        options: ["Hypertext Markup Language", "Hyperlink Textual Markup Language", "Home Tool Markup Language", "Hypermedia Text Management Language"]
    }
];

let question6 = [
    {
        question: "What is the main function of a firewall?",
        answer: "To protect a network from unauthorized access",
        options: ["To speed up internet connection", "To create backups of data", "To protect a network from unauthorized access", "To analyze computer performance"]
    }
];

let question7 = [
    {
        question: "What is the purpose of an IP address?",
        answer: "To uniquely identify a device on a network",
        options: ["To connect to a wireless network", "To determine the internet speed", "To uniquely identify a device on a network", "To install new software"]
    }
];

let question8 = [
    {
        question: "What is a SQL database used for?",
        answer: "Storing and managing relational data",
        options: ["Creating animations", "Storing and managing relational data", "Playing video games", "Editing images"]
    }
];

let question9 = [
    {
        question: "What is the file extension for a Cascading Style Sheet?",
        answer: ".css",
        options: [".js", ".html", ".css", ".py"]
    }
];

let question10 = [
    {
        question: "What technology allows you to run virtual machines?",
        answer: "Hypervisor",
        options: ["Compiler", "Hypervisor", "Debugger", "Interpreter"]
    }
];

// Variables to track user's score and timer

var right = 0;
var wrong = 0;
let quizCount = 0;
let timer; // Declare a global variable to store the timer
let isTimerRunning = false; // Track the status of the timer

// DOM elements

let startBtn = document.querySelector('.start-btn-container > button');
let infoBox = document.getElementsByClassName('info-box')[0];
let quitBtn = document.getElementsByClassName('quit')[0];
let quitBtn1 = document.getElementsByClassName('quit')[1];
let continueBtn = document.getElementsByClassName('continue')[0];
let quizBox = document.getElementsByClassName('quiz-box')[0];
let nextBtn = document.getElementsByClassName('next-btn')[0];
let restartBtn = document.getElementsByClassName('restart')[0];

//function to respond to when start quiz button is clicked
//On click activate the class to reveal rules of quiz and disable class for front page

startBtn.onclick = function showQuizRules() {
    infoBox.classList.add("activeInfo");  //show info box
    hideMainMenu();
    hideFooter();
};

//On click  remove the activate class to hide info box.

quitBtn.onclick = function hideQuizRules() {
    infoBox.classList.remove("activeInfo");
    revealMainMenu();
};

//On click , reload browser window

quitBtn1.onclick = function () {
    location.reload();
};
//On click , reload browser window

restartBtn.onclick = function () {
    location.reload();
};

//function targets the next button and assigns a working class to it which allows pointer events (default its set as none)
function workingNextButton() {
    document.getElementsByClassName("next-btn")[0].classList.add("working");
}
//function revels the next button to a user.
function transparentNextButton() {
    document.getElementsByClassName("next-btn")[0].classList.add("disabled");
}

//function to freeze the option elements to prevent users from inputting multiple answers at once.
function freezeOptions() {
    let freeze = document.getElementsByClassName("option-list")[0];
    freeze.classList.add("disabled");

}
//removes elements class which sets pointer events to none
function enableNextButton() {
    document.querySelector('.next-btn').classList.remove('disabled');
}

//removes the main Quizbox when the user is done with all 10 questions 
function removeQuizBox() {
    quizBox.classList.remove("activeQuiz");
}
//Hide footer section
function hideFooter() {
    let footerTxt = document.getElementsByClassName('disclaimer')[0];
    footerTxt.classList.add('hide');
}
//Hide main menu from users 
function hideMainMenu(){
    document.getElementsByClassName("start-btn")[0].classList.add("hidden");
}

//reveal main menu for users
function revealMainMenu(){
    document.getElementsByClassName("start-btn")[0].classList.add("revealed");
}

//reveals the resultbox which shows the users results
function showResultBox() {
    document.getElementsByClassName("result-box")[0].classList.add("activeResult");
}
/**
 * newQuizScreen function removes any old questions and styling from the current quiz-box dom and replaces the altered elements with a new Quiz question from a different variable , checks answers and increments the right or wrong variable while resetting timer number value
 * @param {variable} questionVariable - Actual variable which contains all information relating to the question
 * @param {number} timerStartPoint  - number value given to the start timer function , this number represents a start point for the timer and the number which ticks down in 1 second increments
 * @param {variable property} questionAnswer -same variable used in questionVariable , but targetting the property .answer
 */
function newQuizScreen(questionVariable , timerStartPoint , questionAnswer) {
    ClearQuiz();
    showQuestion(questionVariable);
    showOptions(questionVariable);
    transparentNextButton();
    rightOrWrong();
    startTimer(timerStartPoint, questionAnswer);
    unfreezeOptions();
}
/**
 * firstQuizScreen function which triggers onclick on button with class continue , this hides the info box while revealing the quiz box and populates first question of quiz
 * @param {variable} question1Variable - question variable 
 * @param {number} timerValue  - number value given to timer as a start point, this number is whats de-incremented 
 * @param {variable .answer} question1Answer - question variable used in first parameter but focusing on the .answer property
 */

function firstQuizScreen(question1Variable , timerValue , question1Answer){
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestion(question1Variable);
    showOptions(question1Variable);
    rightOrWrong();
    startTimer(timerValue, question1Answer);
}
// function which is called at end of quiz to hide quiz-box and reveal the result box , while passing the number variable which holds the users correct answers for text literal responses"
function endScreen(correctVariable){
    removeQuizBox();
    showResultBox();
    userFeedbackOnResult(correctVariable);
}
/**
 * userFeedbackOnResult function which returns text feedback to user depending on the value of the right parameter which is passed , this number is evaluated in a if statement and returns different template literals with emojies taken from font awesome
 * @param {number} right -Globally defined variable which increments when a user gets a score correct
 */
function userFeedbackOnResult(right) {
    const emojiElement = document.getElementsByClassName("end-emojie")[0];
    const completeTextElement = document.getElementsByClassName("complete-text")[0];

    if (right <= 3) {
        emojiElement.innerHTML = '<i class="fas fa-sad-tear fa-bounce"></i>';
        completeTextElement.textContent = `Sorry, you scored ${right} out of 10, please consider re-taking the quiz!`;
    } else if (right <= 5) {
        emojiElement.innerHTML = '<i class="fa-regular fa-thumbs-up fa-bounce"></i>';
        completeTextElement.textContent = `Nice! You scored ${right} out of 10, however, you should revise your work!`;
    } else if (right >= 7) {
        emojiElement.innerHTML = '<i class="fa-regular fa-face-laugh-wink"></i>';
        completeTextElement.textContent = `Well Done! You scored ${right} out of 10, keep working hard!`;
    }
}

/**
 * onclick function to trigger infobox and setup first page of quiz questions
 */

continueBtn.onclick = function() {
    firstQuizScreen(question1, 20, question1[0].answer);
  };

/**
 * Switch case which is used to populate the next set of questions for the user, when the next.Btn is clicked on the quiz box footer
 * @param {number} quizCount - this parameter holds the number of onclick presses of the nextBtn and executes the apprpriate classes.
 */
nextBtn.onclick = function () {
    quizCount++;

    switch (quizCount) {
        case 1:
            newQuizScreen(question2 , 20 , question2[0].answer) ;
            break;
        case 2:
            newQuizScreen(question3 , 20 , question3[0].answer) ;
            break;
        case 3:
            newQuizScreen(question4 , 20 , question4[0].answer) ;
            break;
        case 4:
            newQuizScreen(question5 , 20 , question5[0].answer) ;
            break;
        case 5:
            newQuizScreen(question6 , 20 , question6[0].answer) ;
            break;
        case 6:
            newQuizScreen(question7 , 20 , question7[0].answer) ;
            break;
        case 7:
            newQuizScreen(question8 , 20 , question8[0].answer) ;
            break;
        case 8:
            newQuizScreen(question9 , 20 , question9[0].answer) ;
            break;
        case 9:
            newQuizScreen(question10 , 20 , question10[0].answer) ;
            break;
        case 10:
            endScreen(right);
            startTimer(10000, question10[0].answer);
    }
};
/**
 * Starts the quiz timer
 * This function was taken from stackoverflow and made my own, find ref here: https://stackoverflow.com/questions/43796179/make-a-simple-javascript-timer
 * This functions main owner came from Krystian Kupiec
 * @param {number} time - The time duration in seconds.
 * @param {string} answer - The correct answer for the current question.
 * Function to target timer html element, assign a value to it and set 1000ms intervals to replicate the timer ticking down 1 sec per every sec.
 * In addition to running functions if the timers number value hits 0.
 */

function startTimer(time, answer) {
    clearInterval(timer); // Clear the previous timer (if any)

    let timeLeft = time;
    const timerElement = document.querySelector(".timer-sec");

    if (timerElement) {
        timerElement.textContent = timeLeft;
    }

    isTimerRunning = true;

    timer = setInterval(function() {
        if (!isTimerRunning) {
            clearInterval(timer); // Stop the timer if isTimerRunning is set to false
            return;
        }

        timeLeft--;

        if (timerElement) {
            timerElement.textContent = timeLeft;
        }

        if (timeLeft === 0) {
            whenTimerEnds(answer);
        }
    }, 1000);
}

/**
 * Sets assigned variable to false, which inturn stops the timer.
 */
function stopTimer() {
    isTimerRunning = false; // Set isTimerRunning to false to stop the timer
}
/**
 * @param {keyvalue} - records enter keystroke . 
 * Function disables enter key when the user presses enter once, function triggered onDomLoaded.
 */

function disableEnterKey(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
}
/**
 * Function which is called when the timer number value reaches 0 , function handles visual feedback to users in terms of revealing correct answer , without a user needing to click a option
 * @param {question .answer } text answer to the current quiz question
 */
function whenTimerEnds(answer) {
    clearInterval(timer);
    alert("Time is up!");
    wrong++;
    rightOrWrong();
    autoShowAnswer(answer);
    freezeOptions();
    enableNextButton();
    workingNextButton();

}
/**
 * Displays the given question in the UI.
 * @param {Array} question - The question object to be displayed.
 */
function showQuestion(question) {
    let questionText = document.getElementsByClassName('question-text')[0];   //target the div which will contain the question
    questionText.innerHTML = question[0].question;  //Look at question1 variable , select index 0 object and focus on the .question property.
}
/**
 * Displays the answer options for the given question.
 * @param {Array} question - The question object containing the options to be displayed.
 * Iterates over the given options.textContent and removes all prior styling, ensuring the options elements and cleared from last function called
 */
function showOptions(question) {
    const optionContainer = document.getElementsByClassName('option-list')[0];
    const options = question[0].options;

    // Clone the option container to remove all event listeners
    const newOptionContainer = optionContainer.cloneNode(true);
    optionContainer.parentNode.replaceChild(newOptionContainer, optionContainer);

    // Retrieve the cloned option elements
    const newOptionElements = newOptionContainer.getElementsByClassName('option');

    // Update the text content and add new event listeners
    for (let i = 0; i < newOptionElements.length; i++) {
        newOptionElements[i].textContent = options[i];
        newOptionElements[i].classList.remove("correct");
        newOptionElements[i].classList.remove("incorrect");
        newOptionElements[i].addEventListener("click", function () {
            saveUserInput(question, newOptionElements[i].textContent,);
        });
    }
}
/**
 * Saves the user's answer and provides feedback on whether it's correct or incorrect.
 * @param {Array} questionList - The question object containing the answer and options.
 * @param {string} userAnswer1 - The user's selected answer.
 * function compares user answer with textContent present and applies styling to show the correct answer to the user when a user clicks on a button.
 */

function saveUserInput(questionList, userAnswer1) {
    const options = document.getElementsByClassName("option");
    const answer = questionList[0].answer;

    for (let j = 0; j < options.length; j++) {
        if (options[j].textContent === answer) {
            options[j].classList.add("correct");
        } else {
            options[j].classList.add("incorrect");
        }
    } 

    if (userAnswer1 === answer) {
        alert("Correct!");
        right++;
    } else {
        alert("Wrong!");
        wrong++;
    }
    stopTimer();
    enableNextButton();
    workingNextButton();
    freezeOptions();

    document.getElementsByClassName("r-or-w-txt")[0].innerHTML = right;
    document.getElementsByClassName("r-or-w-txt")[1].innerHTML = wrong;

    if (userAnswer1 !== "") {
        enableNextButton();
        workingNextButton();
        freezeOptions();
        stopTimer();
    } else {
        alert("Error Occured, please refresh the browser");
    }
}
/**
 * Automatically shows the correct answer after the timer expires.
 * @param {string} CorrectAnswer - The correct answer for the current question.
 * Function iterates over options elements and assigns appropriate classes to reveal the correct answer without user input
 */
function autoShowAnswer(CorrectAnswer) {
    const options = document.getElementsByClassName("option");
    const answer = CorrectAnswer;

    for (let j = 0; j < options.length; j++) {
        if (options[j].textContent === answer) {
            options[j].classList.add("correct");
        } else {
            options[j].classList.add("incorrect");
        }
    }
}
/**
 * Function to clear all textContent from the previous question,options and timer , so that the next question can populate elements correctly
 */

function ClearQuiz() {
    const questionText = document.getElementsByClassName('option');
    questionText.innerHTML = '';
    const optionElements = document.getElementsByClassName('option');
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = '';
    }
}

/**
 * Function to allow users to input another answer via next button press 
 */

function unfreezeOptions() {
    let unfreeze = document.getElementsByClassName("option-list")[0];
    unfreeze.classList.remove("disabled");
}

/**
 * Sets the inner HTML and assigns variables to them and then adds classes to 'rightTxt' and 'wrongTxt' elements.
 */

function rightOrWrong() {
    const rightTxt = document.getElementsByClassName("r-or-w-txt")[0];
    const wrongTxt = document.getElementsByClassName("r-or-w-txt")[1];

    rightTxt.innerHTML = right;
    wrongTxt.innerHTML = wrong;
    rightTxt.classList.add("right-txt");
    wrongTxt.classList.add("wrong-txt");
}
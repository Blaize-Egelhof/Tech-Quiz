/**
 * Executes the 'rightOrWrong' function when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    rightOrWrong();
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

let start_btn = document.querySelector('.start_btn_container > button');
let feedback_btn = document.querySelector('.start_btn_container > button')[1];
let info_box = document.getElementsByClassName('info_box')[0];
let quit_btn = document.getElementsByClassName('quit')[0];
let quit_btn1 = document.getElementsByClassName('quit')[1];
let continue_btn = document.getElementsByClassName('continue')[0];
let quiz_box = document.getElementsByClassName('quiz_box')[0];
var right = 0;
var wrong = 0;
let next_btn = document.getElementsByClassName('next_btn')[0];
let quizCount = 0;
let restart_btn = document.getElementsByClassName('restart')[0];
let timer; // Declare a global variable to store the timer
let isTimerRunning = false; // Track the status of the timer

//function to respond to when start quiz button is clicked
//On click activate the class to reveal rules of quiz and disable class for front page

start_btn.onclick = function showQuizRules() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.add("activeInfo");  //show info box
};

//On click  remove the activate class to hide info box.

quit_btn.onclick = function hideQuizRules() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.remove("activeInfo");
};

//On click , reload browser window

quit_btn1.onclick = function () {
    location.reload();
};
//On click , reload browser window

restart_btn.onclick = function () {
    location.reload();
};

//function targets the next button and assigns a working class to it which allows pointer events (default its set as none)
function workingNextButton() {
    document.getElementsByClassName("next_btn")[0].classList.add("working");
}
//function revels the next button to a user.
function transparentNextButton() {
    document.getElementsByClassName("next_btn")[0].classList.add("disabled");
}

//function to freeze the option elements to prevent users from inputting multiple answers at once.
function freezeOptions() {
    let freeze = document.getElementsByClassName("option_list")[0];
    freeze.classList.add("disabled");

}
//removes elements class which sets pointer events to none
function enableNextButton() {
    document.querySelector('.next_btn').classList.remove('disabled');
}

//removes the main Quizbox when the user is done with all 10 questions
function removeQuizBox() {
    quiz_box.classList.remove("activeQuiz");
}

//reveals the resultbox which shows the users results
function showResultBox() {
    document.getElementsByClassName("result_box")[0].classList.add("activeResult");
}
//function which displays different template literals based on the users score which is assigned to the variable right (out of 10)
function userFeedbackOnResult(right) {
    const emojiElement = document.getElementsByClassName("end_emojie")[0];
    const completeTextElement = document.getElementsByClassName("complete_text")[0];

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
 * function which removes the rules box and reveals the actual Quiz box , populating the first question
 */

continue_btn.onclick = function openQuizBox() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(question1);
    showOptions(question1);
    rightOrWrong();
    startTimer(20, question1[0].answer);
};

/**
 * Switch case which is used to populate the next set of questions for the user
 * @param {number} quizCount - this parameter holds the number of onclick presses of the next_btn and executes the apprpriate classes.
 */
next_btn.onclick = function () {
    quizCount++;

    switch (quizCount) {
        case 1:
            ClearQuiz();
            showQuestion(question2);
            showOptions(question2);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question2[0].answer);
            break;
        case 2:
            ClearQuiz();
            showQuestion(question3);
            showOptions(question3);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question3[0].answer);
            break;
        case 3:
            ClearQuiz();
            showQuestion(question4);
            showOptions(question4);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question4[0].answer);
            break;
        case 4:
            ClearQuiz();
            showQuestion(question5);
            showOptions(question5);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question5[0].answer);
            break;
        case 5:
            ClearQuiz();
            showQuestion(question6);
            showOptions(question6);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question6[0].answer);
            break;
        case 6:
            ClearQuiz();
            showQuestion(question7);
            showOptions(question7);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question7[0].answer);
            break;
        case 7:
            ClearQuiz();
            showQuestion(question8);
            showOptions(question8);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question8[0].answer);
            break;
        case 8:
            ClearQuiz();
            showQuestion(question9);
            showOptions(question9);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question9[0].answer);
            break;
        case 9:
            ClearQuiz();
            showQuestion(question10);
            showOptions(question10);
            unfreezeOptions();
            transparentNextButton();
            rightOrWrong();
            startTimer(20, question10[0].answer);
            break;
        case 10:
            removeQuizBox();
            showResultBox();
            userFeedbackOnResult(right);
    };
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
    const timerElement = document.querySelector(".timer_sec");

    if (timerElement) {
        timerElement.textContent = timeLeft;
    }

    isTimerRunning = true;

    timer = setInterval(() => {
        if (!isTimerRunning) {
            clearInterval(timer); // Stop the timer if isTimerRunning is set to false
            return;
        }

        timeLeft--;

        if (timerElement) {
            timerElement.textContent = timeLeft;
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Time is up!");
            wrong++;
            rightOrWrong();
            autoShowAnswer(answer);
            freezeOptions();
            enableNextButton();
            workingNextButton();
        }
    }, 1000);
}
/**
 * Sets assigned variable to false, which inturns stops the timer.
 */
function stopTimer() {
    isTimerRunning = false; // Set isTimerRunning to false to stop the timer
}
/**
 * Displays the given question in the UI.
 * @param {Array} _question_ - The question object to be displayed.
 */
function showQuestion(_question_) {
    let questionText = document.getElementsByClassName('question_text')[0];   //target the div which will contain the question
    questionText.innerHTML = _question_[0].question;  //Look at question1 variable , select index 0 object and focus on the .question property.
}
/**
 * Displays the answer options for the given question.
 * @param {Array} _question_ - The question object containing the options to be displayed.
 * Iterates over the given options.textContent and removes all prior styling, ensuring the options elements and cleared from last function called
 */
function showOptions(_question_) {
    const optionContainer = document.getElementsByClassName('option_list')[0];
    const optionElements = document.getElementsByClassName('option');
    const options = _question_[0].options;

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
            saveUserInput(_question_, newOptionElements[i].textContent);
        });
    }
}
/**
 * Saves the user's answer and provides feedback on whether it's correct or incorrect.
 * @param {Array} _variable_ - The question object containing the answer and options.
 * @param {string} _userAnswer_ - The user's selected answer.
 * function compares user answer with textContent present and applies styling to show the correct answer to the user when a user clicks on a button.
 */

function saveUserInput(_variable_, _userAnswer_) {
    const options = document.getElementsByClassName("option");
    const userAnswer = this.textContent;
    const answer = _variable_[0].answer;

    for (let j = 0; j < options.length; j++) {
        if (options[j].textContent === answer) {
            options[j].classList.add("correct");
        } else {
            options[j].classList.add("incorrect");
        }
    }

    if (_userAnswer_ === answer) {
        alert("Correct!");
        right++;
        stopTimer();
        enableNextButton();
        workingNextButton();
    } else {
        alert("Wrong!");
        wrong++;
        stopTimer();
        enableNextButton();
        workingNextButton();
    }

    document.getElementsByClassName("r_or_w_txt")[0].innerHTML = right;
    document.getElementsByClassName("r_or_w_txt")[1].innerHTML = wrong;

    if (_userAnswer_ !== "") {
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
 * @param {string} _variable_ - The correct answer for the current question.
 * Function iterates over options elements and assigns appropriate classes to reveal the correct answer without user input
 */
function autoShowAnswer(_variable_) {
    const options = document.getElementsByClassName("option");
    const answer = _variable_;

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
};

/**
 * Function to prevent users from inputting a different answer once the inital answer has been given
 */

function unfreezeOptions() {
    let unfreeze = document.getElementsByClassName("option_list")[0];
    unfreeze.classList.add("enabled");
}

/**
 * Function clear the correct and incorrect styling applied to the options element from previous question
 */

function clearOptionsStyling() {
    const newOptions = document.getElementsByClassName("option");
    for (let i = 0; i < newOptions.length; i++) {
        if (newOptions[i].classList.contains("correct")) {
            newOptions[i].classList.remove("correct");
        } else {
            newOptions[i].classList.remove("incorrect");
        }
    }
}

/**
 * Sets the inner HTML and assigns variables to them and then adds classes to 'rightTxt' and 'wrongTxt' elements.
 */

function rightOrWrong() {
    const rightTxt = document.getElementsByClassName("r_or_w_txt")[0];
    const wrongTxt = document.getElementsByClassName("r_or_w_txt")[1];

    rightTxt.innerHTML = right;
    wrongTxt.innerHTML = wrong;
    rightTxt.classList.add("right_txt");
    wrongTxt.classList.add("wrong_txt");
}
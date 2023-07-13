//DISCLAIMER , I need to explain this code in detail so that I dont get confused !
// create an array that holds first question,answer and options. 
//My logic is IF answer === to 1 of the options then its correct , run a function
//Variable which has an array assigned to it, the array has an object, said object has properties .

let question1 = [
    {
        num1: 1,
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        options: ["Central Processing Unit", "Central Peering Unit ", "Conjuncted Pile Unity ", "Centering Pivot Unit"]
    }

];

let question2 = [
    {
        num2: 2,
        question: "What OS system is the fastest out of the below options?",
        answer: "Linux",
        options: ["Windows 10", "Windows 11", "Linux", "MacOS"]
    }

];

let question3 = [
    {
        num3: 3,
        question: "What OS system is the fastest out of the below options?",
        answer: "Linux",
        options: ["Windows 10", "Windows 11", "Linux", "MacOS"]
    }

];

// Start Page Buttons

let start_btn = document.querySelector('.start_btn_container > button');
let feedback_btn = document.querySelector('.start_btn_container > button')[1];
let info_box = document.getElementsByClassName('info_box')[0];
let quit_btn = document.getElementsByClassName('quit')[0];
let continue_btn = document.getElementsByClassName('continue')[0];
let quiz_box = document.getElementsByClassName('quiz_box')[0];
var right = 0;
var wrong = 0;

let next_btn = document.getElementsByClassName('next_btn')[0];



//function to respond to when start quiz button is clicked
//On click activate the class to reveal rules of quiz and disable class for front page

start_btn.onclick = function showQuizRules() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.add("activeInfo");  //show info box
};

//function to respond to when user clicks Exit Quiz button on info box
//On click  remove the activate class to hide info box.

quit_btn.onclick = function hideQuizRules() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.remove("activeInfo");
};

function workingNextButton() {
    document.getElementsByClassName("next_btn")[0].classList.add("working");
}

function workingRestartQuizButton() {
    document.getElementsByClassName("restart_quiz")[0];
    document.getElementsByClassName("restart_quiz")[0].classList.add("show");

}

function freezeOptions() {
    let freeze = document.getElementsByClassName("option_list")[0];
    freeze.classList.add("disabled");

}

//function to respond to when user clicks Continue Quiz button on info box
//On click remove info_box and show quiz_box

continue_btn.onclick = function openQuizBox() {
    console.log('BUTTON IS CLICKED');
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion1();
    showOptions1();
    showCorrectAnswer();
    rightOrWrong();
    startTimer();

};

next_btn.onclick = function startNewQuiz1() {
    ClearQuiz();
    showQuestion2();
    showOptions2();
    unfreezeOptions();
    clearOptionsStyling();
    removeEventListeners();
    showCorrectAnswer1();
};



//Quiz main form



function startTimer() {
    let timeLeft = 20;
    const timerElement = document.querySelector(".timer_sec"); // Select the timer element in your HTML

    // Update the timer element with initial time
    if (timerElement) {
        timerElement.textContent = timeLeft;
    }

    // Function to update the timer every second
    const timer = setInterval(() => {
        timeLeft--;

        // Update the timer element with the new time
        if (timerElement) {
            timerElement.textContent = timeLeft;
        }

        // Check if the timer has reached 0
        if (timeLeft === 0) {
            clearInterval(timer); // Stop the timer
            alert("Time is up!");
            wrong++;
            autoShowAnswer();
            freezeOptions();
            workingNextButton();
        }
    }, 1000); // Timer ticks every 1000 milliseconds (1 second)
}

//create a function to show the correct answer , without needing a users input


//create a function to show question
function showQuestion1() {

    let questionText = document.getElementsByClassName('question_text')[0];   //target the div which will contain the question
    questionText.innerHTML = question1[0].question;  //Look at question1 variable , select index 0 object and focus on the .question property.
}


function showOptions1() {
    const optionElements = document.getElementsByClassName('option'); //assign array to optionElements by options classname
    const options = question1[0].options; // Assign the entire array of .options in variable

    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = options[i]; // Take the array and test if its < than i , its not.  THEN take optionsElements passing it i for indexing and giving it the string of options passing it i as well for index .So basically assign string vale to div class value and increase i by 1 to do the same until the condition stated is false.
    }
}

function rightOrWrong() {
    document.getElementsByClassName("r_or_w_txt")[0].innerHTML = right;
    document.getElementsByClassName("r_or_w_txt")[1].innerHTML = wrong;
    document.getElementsByClassName("r_or_w_txt")[0].classList.add("right_txt");
    document.getElementsByClassName("r_or_w_txt")[1].classList.add("wrong_txt");
}


function showCorrectAnswer() {
    const options = document.getElementsByClassName("option");
    const answer = question1[0].answer;


    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function saveUserInput() {
            const userAnswer = this.textContent;

            for (let j = 0; j < options.length; j++) {
                if (options[j].textContent === answer) {
                    options[j].classList.add("correct");
                } else {
                    options[j].classList.add("incorrect");
                }
            }

            if (userAnswer === answer) {
                alert("Correct!");
                right++;
            } else {
                alert("Wrong!");
                wrong++;
            }
            document.getElementsByClassName("r_or_w_txt")[0].innerHTML = right;
            document.getElementsByClassName("r_or_w_txt")[1].innerHTML = wrong;

            if (userAnswer !== "") {
                workingNextButton();
                freezeOptions();

            } else {
                alert("Error Occured , please refresh browser");
            }
        });
    }
};;;

function autoShowAnswer() {
    const options = document.getElementsByClassName("option");
    const answer = question1[0].answer;

    for (let j = 0; j < options.length; j++) {
        if (options[j].textContent === answer) {
            options[j].classList.add("correct");
        } else {
            options[j].classList.add("incorrect");
        }
    }

}

function ClearQuiz() {
    const questionText = document.getElementsByClassName('question_text')[0];
    questionText.innerHTML = '';

    const optionElements = document.getElementsByClassName('option');
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].textContent = '';
    }
};

function showQuestion2() {
    let questionText1 = document.getElementsByClassName('question_text')[0];   //target the div which will contain the question
    questionText1.innerHTML = question2[0].question;  //Look at question1 variable , select index 0 object and focus on the .question property.
}

function showOptions2() {
    const optionElements1 = document.getElementsByClassName('option'); //assign array to optionElements by options classname
    const options1 = question2[0].options; // Assign the entire array of .options in variable

    for (i = 0; i < optionElements1.length; i++) {
        optionElements1[i].textContent = options1[i]; // Take the array and test if its < than i , its not.  THEN take optionsElements passing it i for indexing and giving it the string of options passing it i as well for index .So basically assign string vale to div class value and increase i by 1 to do the same until the condition stated is false.
    }
}


function unfreezeOptions() {
    let unfreeze = document.getElementsByClassName("option_list")[0];
    unfreeze.classList.add("enabled");
}

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


function showCorrectAnswer1() {
    const options1 = document.getElementsByClassName("option");

    for (let i = 0; i < options1.length; i++) {
        options1[i].addEventListener("click", saveUserInput1);
    }
}

function saveUserInput1() {
    const userAnswer1 = this.textContent;
    const options1 = document.getElementsByClassName("option");
    const answer1 = question2[0].answer;
    console.log(answer1);

    for (let j = 0; j < options1.length; j++) {
        if (options1[j].textContent === answer1) {
            options1[j].classList.add("correct");
            console.log(options1[i]);
        } else {
            options1[j].classList.add("incorrect");
        }
    }

    if (userAnswer1 === answer1) {
        alert("Correct!");
        right++;
    } else {
        alert("Wrong!");
        wrong++;
    }

    if (userAnswer1 !== "") {
        workingNextButton();
        freezeOptions();
    } else {
        alert("Error Occurred, please refresh the browser.");
    }
}

function removeEventListeners() {
    const options_ = document.getElementsByClassName("option");
    for (let i = 0; i < options_.length; i++) {
        options_[i].removeEventListener("click", saveUserInput);
    }
}


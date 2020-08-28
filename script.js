//array of the quiz questions, available choices, and correct answers

let question = [{
    title: "What was the miniature horse's name?",
    choices: ["Lil' Wayne", "Lil' Dicky", "Lil' Ginuwine", "Lil' Sebastian"],
    answer: "Lil' Sebastian"
},
{
    title: "Who broke the coffee pot, and pretended not to know?",
    choices: ["Leslie", "Ron", "Donna", "Tom"],
    answer: "Ron"
},
{
    title: "How did Andy break his leg in season 1?",
    choices: ["Playing Football", "Skydiving", "Rave at a club", "Fell into a pit"],
    answer: "Fell into a pit"
},
{
    title: "Who was Leslie's arch enemy in the city council?",
    choices: ["Chris Traeger", "Jeremy Jamm", "John-Ralphio", "Tammy Two"],
    answer: "Jeremy Jamm"
},];

//Global variables
let score = 0;
let currentQuestion = 0;
let timeLeft = 0;
let time;
let buttons = document.getElementById("buttons");
let startBtn = document.getElementById("startBtn");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let titleQuestion = document.getElementById("titleQuestion");
let hideStart = document.getElementById("quizBody");
let buttonDiv = document.getElementById("buttonDiv");
let highScores = document.getElementById("left");
let scorePrompt = document.getElementById("scorePrompt");
let scoreEnter = document.getElementById("scoreEnter");
let scoreScreen = document.getElementById("scoreScreen");
let highScoreLink = document.getElementById("highScoreLink");
let scoreHolder = document.getElementById("scoreHolder");
let highForm = document.getElementById("highForm")
let scoreArray = [];

//Hides question buttons and high score screens
buttonDiv.setAttribute("style", "visibility: hidden");
scoreScreen.setAttribute("style", "visibility: hidden");

function start() {

    hideStart.setAttribute("style", "display: none");
    buttonDiv.setAttribute("style", "display:inline-block, text-align:center");
    timer();
    callQuestions();
}



//localStorage.clear()

function timer() {
    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;


    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000)
}


function callQuestions() {
    titleQuestion.innerHTML = question[currentQuestion].title;
    button1.innerHTML = question[currentQuestion].choices[0];
    button2.innerHTML = question[currentQuestion].choices[1];
    button3.innerHTML = question[currentQuestion].choices[2];
    button4.innerHTML = question[currentQuestion].choices[3];
    button1.setAttribute("style", "display: inline-block");
    button2.setAttribute("style", "display: inline-block");
    button3.setAttribute("style", "display: inline-block");
    button4.setAttribute("style", "display: inline-block");
    //console.log(callQuestions)
}


function nextQuestion() {
    //console.log(this.textContent);
    currentQuestion++
    if (this.textContent === question[currentQuestion].answer) {
        score += 70;
    } else {
        score -= 0;
        timeLeft -= 10;
    }
    callQuestions();
    //console.log(question[currentQuestion]);
    console.log(score)
};

init();

function setScore() {
    // Clear todoList element and update todoCountSpan
    scoreHolder.innerHTML = "";


    // Render a new li for each name
    for (var i = 0; i < scoreArray.length; i++) {
        var addScore = scoreArray[i];

        var li = document.createElement("li");
        li.textContent = addScore;
        li.setAttribute("data-index", i);

        scoreHolder.appendChild(li);
    }
}

function init() {
    // Get stored  from localStorage
    // Parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("scoreArray"));

    // If scores were retrieved from localStorage, update the score array to it
    if (storedScores !== null) {
        scoreArray = storedScores;
    }

    // Render scoreArray to the DOM
    setScore();
}

function storeScores() {
        // Stringify and set "scoreArray" key in localStorage to score array
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
    console.log(localStorage)
}

// When form is submitted...
    highForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var scoreText = scoreEnter.value.trim();

    // Return from function early if submitted scoreEnter is blank
    if (scoreText === "") {
        return;
    }

    // Add new scoreEnter to scoreArray array, clear the input
    scoreArray.push(scoreEnter);
    scoreEnter.value = "";

    // Store updated scores in localStorage, re-render the list
    storeScores();
    setScore();
});



function checkScore() {
    scoreScreen.setAttribute("style", "display: inline-block, text-align: center")
    buttonDiv.setAttribute("style", "visibility: hidden")
    hideStart.setAttribute("style", "visibility: hidden")
};


function endGame() {
    clearInterval(timer);
    alert("You've run out of time!!")
}


startBtn.addEventListener("click", start);
button1.addEventListener("click", nextQuestion);
button2.addEventListener("click", nextQuestion);
button3.addEventListener("click", nextQuestion);
button4.addEventListener("click", nextQuestion);
highScoreLink.addEventListener("click", checkScore)
//scoreEnter.addEventListener("enter", storeScores)

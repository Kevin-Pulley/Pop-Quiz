//array of the quiz questions, available choices, and correct answers

let question = [{
    title: "This is question 1",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer1"
},
{
    title: "This is question 2",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer2"
},
{
    title: "This is question 3",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer3"
},
{
    title: "This is question 4",
    choices: ["answer1", "answer2", "answer3", "answer4"],
    answer: "answer4"
},];

//Global variables
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let time;
let startBtn = document.getElementById("startBtn");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let titleQuestion = document.getElementById("askQuestion");
let hideStart = document.getElementById("quizBody");
let buttonDiv = document.getElementById("questions");
let highScores = document.getElementById("left");

//Hides question buttons
//buttonDiv.setAttribute("style", "display: none")

function start() {
    hideStart.setAttribute("style", "display: none");
    timer();
    callQuestions();
}





function timer() {
    timeLeft = 90;
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
    currentQuestion++
    titleQuestion.innerHTML = question[currentQuestion].title;
    button1.innerHTML = question[currentQuestion].choices[0];
    button2.innerHTML = question[currentQuestion].choices[1];
    button3.innerHTML = question[currentQuestion].choices[2];
    button4.innerHTML = question[currentQuestion].choices[3];
    button1.setAttribute("style", "display: inline-block");
    button2.setAttribute("style", "display: inline-block");
    button3.setAttribute("style", "display: inline-block");
    button4.setAttribute("style", "display: inline-block");
    console.log(callQuestions)
}


    function nextQuestion() {
        console.log(this.textContent);
        if (this.textContent === question[currentQuestion].answer) {
            score += 40;
        } else
            score -= 0;

       
        callQuestions();


        console.log(question[currentQuestion]);
    };


    function setScore() { };
    function getScore() { };
    function endGame() {
        clearInterval(timer);
    }


    startBtn.addEventListener("click", start);
    button1.addEventListener("click", nextQuestion);
    button2.addEventListener("click", nextQuestion);
    button3.addEventListener("click", nextQuestion);
    button4.addEventListener("click", nextQuestion);


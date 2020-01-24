// DOM variables
var scoresBtn = document.getElementById("scores-button");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-page");
var startBtn = document.getElementById("start-button");
var questionPage = document.getElementById("question-page");
var questionTitle = document.getElementById("question-title");
var questionDisplay = document.getElementById("question-display");
var answerBtn = document.getElementById("answer-buttons");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var submitPage = document.getElementById("submit-page");
var finalScore = document.getElementById("final-score");
var submitBtn = document.getElementById("submit-button");
var scoresPage = document.getElementById("scores-page");
var savedName = document.getElementById("saved-name");
var savedScore = document.getElementById("saved-score");
var restartBtn = document.getElementById("restart-button");
var clearBtn = document.getElementById("clear-scores");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");

// Array of questions as objects to loop through
var questions = [
	{
		title: "Question 1",
		question: "Inside which HTML element do we put the JavaScript?",
		choices: [
			"A) \xa0\xa0\xa0\xa0<javascript>",
			"B) \xa0\xa0\xa0\xa0<scripting>",
			"C) \xa0\xa0\xa0\xa0<script>",
			"D) \xa0\xa0\xa0\xa0<js>"
		],
		answer: "answer-c"
	},

	{
		title: "Question 2",
		question: "Where is the correct place to insert the JavaScript",
		choices: [
			"A) \xa0\xa0\xa0\xa0The <head> section",
			"B) \xa0\xa0\xa0\xa0The <body> section",
			"C) \xa0\xa0\xa0\xa0Both A and B are correct",
			"D) \xa0\xa0\xa0\xa0Neither A nor B are correct"
		],
		answer: "answer-c"
	},

	{
		title: "Question 3",
		question: "How do you create a function in JavaScript?",
		choices: [
			"A) \xa0\xa0\xa0\xa0function myFunction()",
			"B) \xa0\xa0\xa0\xa0function:myFunction()",
			"C) \xa0\xa0\xa0\xa0function = myFucntion()",
			"D) \xa0\xa0\xa0\xa0do.Funky()"
		],
		answer: "answer-a"
	},

	{
		title: "Question 4",
		question: "How can you add a comment in JavaScript?",
		choices: [
			"A) \xa0\xa0\xa0\xa0`This is a comment",
			"B) \xa0\xa0\xa0\xa0<!--This is a comment-->",
			"C) \xa0\xa0\xa0\xa0@This is a comment",
			"D) \xa0\xa0\xa0\xa0//This is a comment"
		],
		answer: "answer-d"
	}
];

// Global variables
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var remainingTime = lastQuestion * 15;
var userScore = 0;
let countdown;

// Page navigation functions - render and remove specified elements
scoresBtn.addEventListener("click", toScores);

function toScores() {
	startPage.className = "hidden";
	scoresBtn.className = "hidden";
	questionPage.className = "hidden";
	submitPage.className = "hidden";
	scoresPage.classList.remove("hidden");
}

restartBtn.addEventListener("click", toStart);

function toStart() {
	scoresPage.className = "hidden";
	submitPage.className = "hidden";
	questionPage.className = "hidden";
	startPage.classList.remove("hidden");
	scoresBtn.classList.remove("hidden");
}

function toQuestions() {
	scoresPage.className = "hidden";
	startPage.className = "hidden";
	scoresBtn.className = "hidden";
	submitPage.className = "hidden";
	questionPage.classList.remove("hidden");
}

function toSubmit() {
	scoresPage.className = "hidden";
	startPage.className = "hidden";
	questionPage.className = "hidden";
	scoresBtn.className = "hidden";
	submitPage.classList.remove("hidden");
	clearInterval(countdown);
}

// Start button begins quiz and starts countdown. Countdown is 15 seconds * number of questions
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
	// Mutates global variables to original value.
	currentQuestion = 0;
	userScore = 0;
	remainingTime = questions.length * 15;
	// Resets countdown timer
	timer.innerHTML = remainingTime;

	toQuestions();
	questionCycle();
	countdownTimer();
}

// Renders the specified question in the array
function questionCycle() {
	var current = questions[currentQuestion];

	questionTitle.firstElementChild.innerHTML = current.title;
	questionDisplay.firstElementChild.innerHTML = current.question;
	answerA.firstElementChild.innerText = current.choices[0];
	answerB.firstElementChild.innerText = current.choices[1];
	answerC.firstElementChild.innerText = current.choices[2];
	answerD.firstElementChild.innerText = current.choices[3];
}

// Increments to the next question when the user selects an answer. No longer increments on last question in the array and goes to score submission screen instead.
answerBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
	if (currentQuestion < lastQuestion) {
		currentQuestion++;
		questionCycle();
	} else {
		toSubmit();
	}
}

// Checks to see if answer is correct. Adds 15 points if correct, deducts 15 seconds if incorrect
function answerCheck(userAnswer) {
	if (userAnswer === questions[currentQuestion].answer) {
		userScore += 15;
	} else {
		if (remainingTime >= 15) {
			remainingTime -= 15;
		} else {
			remainingTime *= 0;
		}
	}
}

// Begins the countdown timer for the quiz and stores the remaining time as the user's score.
function countdownTimer() {
	countdown = setInterval(function() {
		remainingTime--;
		timer.innerHTML = remainingTime;
		if (remainingTime <= 0) clearInterval(countdown);
		userScore = remainingTime;
		finalScore.innerHTML = userScore;
	}, 1000);
}

// Displays the user's score and initials (if they choose to enter them) on the high scores screen.
submitBtn.addEventListener("click", saveScore);

function saveScore() {
	var nameInput = document.getElementById("name-input").value;
	toScores();
	savedName.innerHTML = nameInput;
	savedScore.innerHTML = userScore;
}

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
var highScores = document.getElementById("high-scores");
var restartBtn = document.getElementById("restart-button");
var clearBtn = document.getElementById("clear-scores");

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
		answer: "C) \xa0\xa0\xa0\xa0<script>"
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
		answer: "C) \xa0\xa0\xa0\xa0Both A and B are correct"
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
		answer: "A) \xa0\xa0\xa0\xa0function myFunction()"
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
		answer: "D) \xa0\xa0\xa0\xa0//This is a comment"
	}
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;

// High scores and start page navigation

scoresBtn.addEventListener("click", toHighSores);

function toHighSores() {
	startPage.className = "hidden";
	scoresPage.classList.remove("hidden");
	scoresBtn.className = "hidden";
}

restartBtn.addEventListener("click", toStart);

function toStart() {
	scoresPage.className = "hidden";
	startPage.classList.remove("hidden");
	scoresBtn.classList.remove("hidden");
}

// Start the quiz

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
	scoresBtn.className = "hidden";
	startPage.className = "hidden";
	questionPage.classList.remove("hidden");
	questionCycle();
}

function questionCycle() {
	var current = questions[currentQuestion];

	questionTitle.firstElementChild.innerHTML = current.title;
	questionDisplay.firstElementChild.innerHTML = current.question;
	answerA.firstElementChild.innerText = current.choices[0];
	answerB.firstElementChild.innerText = current.choices[1];
	answerC.firstElementChild.innerText = current.choices[2];
	answerD.firstElementChild.innerText = current.choices[3];
}

answerBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
	if (currentQuestion < lastQuestion) {
		currentQuestion++;
		questionCycle();
	}
}

// answerBtn.addEventListener("click", nextQuestion);

// function nextQuestion() {
// 	if (currentQuestion < lastQuestion) {
// 		currentQuestion++;
// 		startQuiz();
// 	}
// }

// answer 1 - questions[0].choices[2] === questions[0].answer
// answer 2 - questions[1].choices[2] === questions[1].answer
// answer 3 - questions[2].choices[0] === questions[2].answer
// answer 4 - questions[3].choices[3] === questions[3].answer

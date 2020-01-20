// DOM variables
var scoresBtn = document.getElementById("scores-button");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-page");
var startBtn = document.getElementById("start-button");
var questionPage = document.getElementById("question-page");
var question = document.getElementById("question");
var answerBtn = document.getElementById("answer-buttons");
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
		title: "Inside which HTML element do we put the JavaScript?",
		choices: [
			"A) <javascript>",
			"B) <scripting>",
			"C) <script>",
			"D) <js>"
		],
		answer: "C) <script>"
	},

	{
		title: "Where is the correct place to insert the JavaScript",
		choices: [
			"A) The <head> section",
			"B) the <body> section",
			"C) Both A and B are correct",
			"D) Neither A nor B are correct"
		],
		answer: "C) Both A and B are correct"
	},

	{
		title: "How do you create a function in JavaScript?",
		choices: [
			"A) function myFunction()",
			"B) function:myFunction()",
			"C) function = myFucntion()",
			"D) do.Funky()"
		],
		answer: "A) function myFunction()"
	},

	{
		title: "How can you add a comment in JavaScript?",
		choices: [
			"A) `This is a comment",
			"B) <!--This is a comment-->",
			"C) @This is a comment",
			"D) //This is a comment"
		],
		answer: "D) //This is a comment"
	}
];

// Page navigation

scoresBtn.addEventListener("click", function() {
	startPage.className = "hidden";
	scoresPage.classList.remove("hidden");
});

restartBtn.addEventListener("click", function() {
	scoresPage.className = "hidden";
	startPage.classList.remove("hidden");
});

// startBtn.addEventListener("click", function() {
// 	startPage.className = "hidden";
// });

// answer 1 - questions[0].choices[2] === questions[0].answer
// answer 2 - questions[1].choices[2] === questions[1].answer
// answer 3 - questions[2].choices[0] === questions[2].answer
// answer 4 - questions[3].choices[3] === questions[3].answer

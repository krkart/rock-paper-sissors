let userScore = 0;
let computerScore = 0;

let userChoice = document.querySelector('.userChoice');
let compChoice = document.querySelector('.compChoice');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let rounds = document.querySelector(".rounds");
let play = document.querySelector(".play-btn");

rounds.onclick = function () {
	rounds = rounds.options[rounds.selectedIndex].value;
}

function choice(e) {
	const choiceArr = ["rock", "paper", "sissor"];

	function randNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	let randInt = randNum(0, choiceArr.length);
	let computerChoice = choiceArr[randInt];

	// Best practice with explanation, Ref: https://stackoverflow.com/a/56909452/6028958
	if (e.target.classList.contains("chosen-btn")) {

		if (e.target.value === computerChoice) {
			return "Both choices are same. No score counts for this round"
		} else if (((e.target.value === "rock") && (computerChoice === "paper")) ||
			((e.target.value === "paper") && (computerChoice === "sissor")) ||
			((e.target.value === "sissor") && (computerChoice === "rock"))) {
			result.textContent = "Computer Won";
		} else {
			result.textContent = "You Won";
		}
		userChoice.textContent = e.target.value;
		compChoice.textContent = computerChoice;

		if (result.textContent === "Computer Won") {
			computerScore++
		} else if (result.textContent === "You Won") {
			userScore++
		}

		score.innerHTML = "<p>" + "Your Score = " + userScore + ". Computer Score = " + computerScore + "." + "</p>"
	}
}

play.addEventListener('click', playRounds);

function playRounds(e) {
	for (let round = 1; round <= rounds; round++) {
		document.addEventListener('click', choice);
	}
}

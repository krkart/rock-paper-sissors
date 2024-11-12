let userScore = 0;
let computerScore = 0;
let roundCount = 3;

let userChoice = document.querySelector('.userChoice');
let compChoice = document.querySelector('.compChoice');
let userImg = document.querySelector('.userImg');
let compImg = document.querySelector('.compImg');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let rounds = document.querySelectorAll(".rounds button");

rounds.forEach((round) => {
	round.addEventListener('click', () => {
			roundCount = parseInt(round.value)
	})
})

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
				result.textContent = "Both choices are same. No score counts for this round";
			} else if (((e.target.value === "rock") && (computerChoice === "paper")) ||
				((e.target.value === "paper") && (computerChoice === "sissor")) ||
				((e.target.value === "sissor") && (computerChoice === "rock"))) {
				result.textContent = "Computer Won";
			} else {
				result.textContent = "You Won";
			}

			userImg.innerHTML = `<img src="./img/${e.target.value}.png">`;
			userChoice.textContent = e.target.value;
			compImg.innerHTML = `<img src="./img/${computerChoice}.png">`;
			compChoice.textContent = computerChoice;

			if (result.textContent === "Computer Won") {
				computerScore++
			} else if (result.textContent === "You Won") {
				userScore++
			}

			score.innerHTML = "<p>" + "Your Score = " + userScore + ". Computer Score = " + computerScore + "." + "</p>"
		}
}

document.addEventListener('click', choice);

let userScore = 0;
let computerScore = 0;
let tieCount = 0;
let roundCount = 3;

let userChoice = document.querySelector('.userChoice');
let compChoice = document.querySelector('.compChoice');
let userImg = document.querySelector('.userImg');
let compImg = document.querySelector('.compImg');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let rounds = document.querySelectorAll(".rounds button");
let pickBtn = document.querySelectorAll(".choices button");

rounds.forEach((round) => {
	round.addEventListener('click', (e) => {
		roundCount = parseInt(e.target.value)
	})
})

function getCompChoice(){
	const choiceArr = ["rock", "paper", "sissor"];

	function randNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	let randInt = randNum(0, choiceArr.length);
  return choiceArr[randInt];
}

let gameOver = false

function gameLogic(humanChoice, computerChoice) {

	// Best practice with explanation, Ref: https://stackoverflow.com/a/56909452/6028958
	// if (e.target.classList.contains("pickBtn")) {

		if (humanChoice === computerChoice) {
			result.textContent = "Both choices are same. No score counts for this round";
			tieCount++
		} else if (((humanChoice === "rock") && (computerChoice === "paper")) ||
			((humanChoice === "paper") && (computerChoice === "sissor")) ||
			((humanChoice === "sissor") && (computerChoice === "rock"))) {
			result.textContent = "Computer Won";
			computerScore++
		} else {
			result.textContent = "You Won";
			userScore++
		}

		userImg.innerHTML = `<img src="./img/${humanChoice}.png">`;
		userChoice.textContent = humanChoice;
		compImg.innerHTML = `<img src="./img/${computerChoice}.png">`;
		compChoice.textContent = computerChoice;

		score.innerHTML = "<p>" + "Your Score = " + userScore + ". Computer Score = " + computerScore + "." + "</p>"

		if (computerScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) {
			const computerWin = document.createElement("h3");
			computerWin.classList.add("winner")
			computerWin.textContent = `The computer won with a ${computerScore - userScore} point lead!`
			score.appendChild(computerWin)
			gameOver = true

		} else if (userScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) {
			const userWin = document.createElement("h3");
			userWin.classList.add("winner")
			userWin.textContent = `You won with a ${userScore - computerScore} point lead!`
			score.appendChild(userWin)
			gameOver = true
		}
	// }
}

pickBtn.forEach((button) => {
	button.addEventListener('click', (e) =>{
		if(gameOver) {
			userScore = 0;
			computerScore = 0;
			tieCount = 0;
			userImg.innerHTML = "";
		  userChoice.textContent = '';
			compImg.innerHTML = "";
		  compChoice.textContent = '';	
			score.innerHTML = "";
			gameOver = false;		// reset the flag
			return;
		}

		let humanChoice = e.target.value;
		let computerChoice = getCompChoice();
		gameLogic(humanChoice, computerChoice);
	})
})

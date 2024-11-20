'use strict';

let userScore = 0;
let computerScore = 0;
let tieCount = 0;
let roundCount = 3;

let userChoice = document.querySelector('.user-choice');
let compChoice = document.querySelector('.computer-choice');
let userImg = document.querySelector('.user-img');
let computerImg = document.querySelector('.computer-img');
let result = document.querySelector('.result');
let resultSign = document.querySelector('.result-sign');
let score = document.querySelector('.score');
let finalResult = document.getElementById('final-result');
let overlay = document.getElementById('overlay');
let rounds = document.querySelectorAll(".rounds button");
let pickBtn = document.querySelectorAll(".pick-btn");

// Select num of rounds
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
		if (humanChoice === computerChoice) {
			result.textContent = "Its a tie. No score count for this round";
			resultSign.innerHTML = "<h3>=</h3>";
			tieCount++
		} else if (((humanChoice === "rock") && (computerChoice === "paper")) ||
			((humanChoice === "paper") && (computerChoice === "sissor")) ||
			((humanChoice === "sissor") && (computerChoice === "rock"))) {
			result.textContent = "Computer Won";
			resultSign.innerHTML = "<h3><</h3>";
			computerScore++
		} else {
			result.textContent = "You Won";
			resultSign.innerHTML = "<h3>></h3>";
			userScore++
		}

		userImg.innerHTML = `<img src="./img/${humanChoice}.png" />`;
		userChoice.textContent = humanChoice;
		computerImg.innerHTML = `<img src="./img/${computerChoice}.png" />`;
		compChoice.textContent = computerChoice;

		score.innerHTML = "<p>" + "Your Score = " + userScore + ". Computer Score = " + computerScore + "." + "</p>"

		const h1 = document.createElement("h1");
		finalResult.appendChild(h1);
		
		if ((computerScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) && (computerScore != userScore)) {
			h1.textContent = `Computer won by ${computerScore - userScore} point!`;
			overlay.classList.remove('hide');
			gameOver = true
		} else if ((userScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) && (userScore != computerScore)) {
			h1.textContent = `You won by ${userScore - computerScore} point!`;
			overlay.classList.remove('hide');
			gameOver = true
		} else if ((userScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) && (userScore === computerScore)) {
			h1.textContent = "Scores level. It's a tie!";
			overlay.classList.remove('hide');
			gameOver = true
		} else if ((computerScore === Math.ceil(((roundCount + 1) - tieCount) / 2)) && (computerScore === userScore)) {
			h1.textContent = "Scores level. It's a tie!";
			overlay.classList.remove('hide');
			gameOver = true
		}
}

// Best practice with explanation, Ref: https://stackoverflow.com/a/56909452/6028958
// if (e.target.classList.contains("pickBtn")) {

pickBtn.forEach((button) => {
	button.addEventListener('click', (e) =>{
		if(gameOver) {
			userScore = 0;
			computerScore = 0;
			tieCount = 0;
			userImg.innerHTML = "";
		  userChoice.textContent = '';
			computerImg.innerHTML = "";
		  compChoice.textContent = '';	
			result.textContent = '';
			resultSign.innerHTML = '<h3>?</h3>'
			score.innerHTML = "<p>Your score = 0. Computer score = 0.</p>";
			gameOver = false;		// reset the flag
			return;
		}

		let computerChoice = getCompChoice();
		// Use currentTarget instead of target if image used inside button
		// Ref: https://stackoverflow.com/a/45882908/6028958
		gameLogic(e.currentTarget.value, computerChoice);
	})
})

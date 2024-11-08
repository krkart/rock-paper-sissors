/*
let userScore = 0;
let computerScore = 0;

for(let round = 1; round <= 5; round++) {
 	console.log("\nRound: "+ round);

	console.log("Enter your choice ( rock || paper || sissor ) : ");
*/
	
	let userChoice = document.querySelector('.userChoice');
	let compChoice = document.querySelector('.compChoice');
	let result = document.querySelector('.result');

	document.addEventListener('click', choice);

	function choice(e) {
		const choiceArr = ["rock", "paper", "sissor"];

		function randNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}
	
		let randInt = randNum(0, choiceArr.length);
		let computerChoice = choiceArr[randInt];
	
		if(e.target.classList.contains("chosen-btn")){
		
	//	function gameLogic(userInput, computerInput) {
			if (e.target.value === computerChoice) {
				return "Both choices are same. No score counts for this round"
			} else if (((e.target.value === "rock") && (computerChoice === "paper")) ||
						((e.target.value === "paper") && (computerChoice === "sissor")) ||
						((e.target.value === "sissor") && (computerChoice === "rock")))
			{
				result.textContent = "Computer Won";
			} else {
				result.textContent = "You Won";
			}
			userChoice.textContent = e.target.value;
			compChoice.textContent = computerChoice;
		}
	
		// let roundResult = gameLogic(userChoice.textContent, computerChoice);
	}

	/*
	if (roundResult === "Computer Won") {
		computerScore++
	} else if (roundResult === "You Won") {
		userScore++
	}
	
	console.log(roundResult + ".\nYour Score = " + userScore + ". Computer Score = " + computerScore + "."); 
} */

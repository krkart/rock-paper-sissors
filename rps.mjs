import readline from 'readline';

let userScore = 0;
let computerScore = 0;

for(let round = 1; round <= 5; round++) {
	console.log("\nRound: "+ round);

	function promptUser(query) {
	  const rl = readline.createInterface(process.stdin, process.stdout);

	  return new Promise(resolve => rl.question(query, userInput => {
	    rl.close();
	    resolve(userInput);
	  }))
	}

	let userChoice = await promptUser("Enter your choice ( rock | paper | sissor ) : ");

	const choiceArr = ["rock", "paper", "sissor"];

	function randNum(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}

	let randInt = randNum(0, choiceArr.length - 1);
	let computerChoice = choiceArr[randInt];

	function gameLogic(userInput, computerInput) {
		if (userInput === computerInput) {
			return "Both choices are same. No score counts for this round"
		} else if (userInput === "rock") {
			if (computerInput === "paper") {
				return "Computer Won" 
			} else {
				return "You Won"
			}
		} else if (userInput === "paper") {
			if (computerInput === "sissor") {
				return "Computer Won" 
			} else {
				return "You Won"
			} 
		} else if (userInput === "sissor") {
			if (computerInput === "rock") {
				return "Computer Won" 
			} else {
				return "You Won"
			}
		}
	}

	console.log("your choice is " + userChoice + " & computer's choice is " + computerChoice);
	let roundResult = gameLogic(userChoice, computerChoice);

	if (roundResult === "Computer Won") {
		computerScore++
	} else if (roundResult === "You Won") {
		userScore++
	}
	
	console.log(roundResult + ". | Your Score = " + userScore + " | Computer Score = " + computerScore); 
}

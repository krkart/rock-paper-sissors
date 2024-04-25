// let humanChoice = console.readline();
// let humanChoice = prompt("Enter your choice ( rock | paper | sissor ) : ");
// const readline = require("readline");

import readline from 'readline';

for(let round=1; round <= 5; round++) {
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

	console.log("your choice is " + userChoice + " & computer's choice is " + computerChoice);
}

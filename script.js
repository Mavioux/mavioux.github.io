   let btn = document.querySelectorAll("input");
   let playerSelection = "";
   let cpuBtn = document.querySelector(".computer-left");
   //let playerScoreContainer = document.querySelector(".player-score");
   //let cpuScoreContainer = document.querySelector(".computer-score");
   let playerScoreContent = document.getElementById("player-score");
   let computerScoreContent = document.getElementById("computer-score");
   
   	btn.forEach((input) => {
		input.addEventListener("click", (e) => {
			cpuBtn.style.backgroundColor = "transparent";
			cpuBtn.style.opacity = 1;
			playerSelection = input.name;
			game(1)
		});
	});
   
	
	function computerPlay () {
		switch(Math.floor(Math.random() * 3)){
			case 0:
				return "rock";
			case 1:
				return "paper";
			case 2: 
				return "scissors";
			default:
				console.log("error!");
				break;
		}
	}
	
	function playRound(playerSelection, computerSelection) {
		playerSelection = playerSelection.toLowerCase();
		
		switch(playerSelection) {
			case "rock":
				switch(computerSelection){
					case "rock":
						return "It's a tie";
						break;
					
					case "paper":
						return "Computer won! Paper beats Rock";
						break;
					
					case "scissors":
						return "You won! Rock beats Scissors";
						break;
				}	
			case "paper":
				switch(computerSelection){
					case "rock":
						return "You won! Paper beats Rock";
						break;
					
					case "paper":
						return "It's a tie";
						break;
					
					case "scissors":
						return "Computer won! Rock beats Scissors";
						break;
				}
			case "scissors":
				switch(computerSelection){
					case "rock":
						return "Computer won! Rock beats Scissors";
						break;
					
					case "paper":
						return "You won! Scissors beats Paper";
						break;
					
					case "scissors":
						return "It's a tie";
						break;
				}
			default:
				return "aaaaaaaaaaaaaaa";
				
		}
	}
	
	function game(rounds) {
		if(typeof game.playerWins == 'undefined') {
			game.playerWins = 0;
			console.log(game.playerWins);
		}
		
		if(typeof game.computerWins == 'undefined') {
			game.computerWins = 0;
			console.log(game.computerWins);
		}
		
		
		//let playerSelection = prompt("Rock Paper or Scissors?");
		let computerSelection = computerPlay();
		switch(computerSelection) {
			case "rock":
				cpuBtn = document.querySelector(".computer-left");
				break;
			case "paper":
				cpuBtn = document.querySelector(".computer-center");
				break;
			case "scissors":
				cpuBtn = document.querySelector(".computer-right");
				break;
		}
		let result = playRound(playerSelection, computerSelection);
		
		cpuBtn.style.backgroundColor = "blue";
		cpuBtn.style.opacity = 0.2;
		
		//console.log(result.substring(0, 8));
		switch(result.substring(0, 8)){
			case "Computer":
				game.computerWins++;
				computerScoreContent.innerHTML = game.computerWins;
				break;
			
			case "You won!":
				game.playerWins++;
				playerScoreContent.innerHTML = game.playerWins;
				break;					
		}
		console.log(result);
		console.log("Player:" + game.playerWins);
		console.log("Computer:" + game.computerWins);
		
	}
	



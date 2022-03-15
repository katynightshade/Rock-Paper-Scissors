const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
let results;
let text;
let text1;

function playerChoice() {
    let input = prompt('Type rock, paper, or scissors.');
    while (input == null) {
        input = prompt('Please type rock, paper, or scissors.');
    }
    input = input.toLowerCase();
    if ((input === 'rock') || (input === 'paper') || (input === 'scissors')) {
        return input;
    } else {
        input = prompt('Invalid input. Please type rock, paper, or scissors.');
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = computerChoice();
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            text = (`You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`);
            userScore++;
            text1 = (`Player Score = ${userScore}; Computer Score = ${computerScore}`);
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            text = (`You chose ${playerSelection} and the computer chose ${computerSelection}. You lose :(`);
            computerScore++;
            text1 = (`Player Score = ${userScore}; Computer Score = ${computerScore}`);
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            text = (`You chose ${playerSelection} and the computer chose ${computerSelection}. You tied.`);
            text1 = (`Player Score = ${userScore}; Computer Score = ${computerScore}`);
            break;
    }
    return { text, text1 };
}

function scoreKeeper() {
    if (userScore > computerScore) {
        results = (`Final Player Score = ${userScore}; Final Computer Score = ${computerScore}. You win!`);
    } else if (userScore == computerScore) {
        results = (`Final Player Score = ${userScore}; Final Computer Score = ${computerScore}. You tied!`)
    } else {
        results = (`Final Player Score = ${userScore}; Final Computer Score = ${computerScore}. You lose :(`);
    }
    return results;
}

function gamePlay() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(text, text1);
    }
    scoreKeeper();
    return results;
}
console.log(gamePlay());
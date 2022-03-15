const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    function playGame() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];
        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const randomNumber = Math.floor(Math.random()*computerOptions.length);
                const computerChoice = computerOptions[randomNumber];

                winner(this.innerText, computerChoice);
                
                if((playerScore === 5) || (computerScore === 5)) {
                    gameOver(playerOptions);
                }
            })
        })
    }
    function winner(player, computer) {
        const result = document.querySelector('.results');
        const playerScoreBoard = document.querySelector('.p-score');
        const computerScoreBoard = document.querySelector('.c-score');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        switch (player + computer) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                result.textContent = (`You chose ${player} and the computer chose ${computer}.`);
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                result.textContent = (`You chose ${player} and the computer chose ${computer}.`);
                computerScore++;
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
                break;
            case 'paperpaper':
            case 'scissorsscissors':
            case 'rockrock':
                result.textContent = (`You chose ${player} and the computer chose ${computer}.`);
                playerScoreBoard.textContent = playerScore;
                computerScoreBoard.textContent = computerScore;
                break;
        }
    }
    function gameOver(playerOptions) {
        const endGame = document.getElementById('game-over');
        const results = document.getElementById('final');
        const reloadBtn = document.getElementById('reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        endGame.innerText = 'Game Over!';
        endGame.style.fontSize = '2rem';
        if(playerScore > computerScore) {
            results.style.fontSize = '1.5rem';
            results.innerText = 'Quick! Get out while you can!';
        } else if(playerScore < computerScore) {
            results.style.fontSize = '1.5rem';
            results.innerText = 'Enjoy your trip through Wonderland...'
        } else {
            results.style.fontSize = '1.5rem';
            results.innerText = 'Try again. Defeat is imminent.'
        }
        reloadBtn.innerText = 'Restart the Game';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    playGame();
}
game();
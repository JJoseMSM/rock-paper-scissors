const rockBtn = document.querySelector('#rock'); 
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const humanScoreP = document.querySelector('#humanScore');
const computerScoreP = document.querySelector('#computerScore');
const winnerP = document.querySelector('#winner');

const choices = ['rock', 'paper', 'scissors'];



function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

humanScore = 0;
computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        const p = document.createElement('p');
        p.innerText = `It's a tie you both chose ${humanSelection}`;
        winnerP.appendChild(p);
    } else if (humanSelection == 'rock' && computerSelection == 'scissors') {
        humanScore++;
        const p = document.createElement('p');
        p.innerText = `You win ${humanSelection} beats ${computerSelection}`;
        winnerP.appendChild(p);
    } else if (humanSelection == 'paper' && computerSelection == 'rock') {
        humanScore++;
        const p = document.createElement('p');
        p.innerText = `You win ${humanSelection} beats ${computerSelection}`;
        winnerP.appendChild(p);
    } else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        humanScore++;
        const p = document.createElement('p');
        p.innerText = `You win ${humanSelection} beats ${computerSelection}`;
        winnerP.appendChild(p);
    } else if (computerSelection == 'rock' && humanSelection == 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You loose ${computerSelection} beats ${humanSelection}`;
        winnerP.appendChild(p);
    } else if (computerSelection == 'paper' && humanSelection == 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You loose ${computerSelection} beats ${humanSelection}`;
        winnerP.appendChild(p);
    } else if (computerSelection == 'scissors' && humanSelection == 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = `You loose ${computerSelection} beats ${humanSelection}`;
        winnerP.appendChild(p);
    }
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock';
    playRound(humanSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper';
    playRound(humanSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors';
    playRound(humanSelection, computerSelection);
})
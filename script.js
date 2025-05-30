const choices = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        resultDisplay.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    });
});

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

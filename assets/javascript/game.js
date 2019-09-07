
//Array that lists all the options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables for tracking wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guess = 12;

//Variables that hold references to places in HTML where we want to display.
var userWins = document.getElementById("user-wins");

var userLosses = document.getElementById("user-losses");

var guessLeft = document.getElementById("guess-left");

var userChoice = document.getElementById("user-choice");

console.log(userChoice);
function startGame(){
guess = 12  
userWins.textContent = "Wins: " + wins;
userLosses.textContent = "Losses: " + losses;
guessLeft.textContent = "Guesses Left: " + guess;
userChoice.textContent = "";
}
document.onkeyup = function (event) {
        var userGuess = event.key;

        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

        console.log(computerChoice);


        if (userGuess === computerChoice) {
                wins++;
                startGame();
        }
        if (userGuess === computerChoice || userGuess !== computerChoice) {
                guess--;
        }
        if (guess <= 0){
               losses++; 
               startGame();
        }
        

                //make a variable for startGame

                userWins.textContent = "Wins: " + wins;
                userLosses.textContent = "Losses: " + losses;
                guessLeft.textContent = "Guesses Left: " + guess;
                userChoice.textContent = "You Guessed: " + userGuess;
}
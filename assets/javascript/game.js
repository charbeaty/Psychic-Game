
//Array that lists all the options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables for tracking wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guess = 12;



//# of guesses left. This will update 

//letter the user typed. Display until user wins or loses 
//When player wins increase Wins counter, game starts over without restart
//when player loses increase losses counter, start hame without page reset

//Variables that hold references to places in HTML where we want to display.
var userWins = document.getElementById("user-wins");
var userLosses = document.getElementById("user-losses");
var guessLeft = document.getElementById("guess-left");
var userChoice = document.getElementById("user-choice");
console.log(userChoice);
document.onkeyup = function(event) {
       var userGuess = event.key;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 
console.log(computerChoice);  

if(userGuess === computerChoice){
        wins++;
}else{
        losses++;
}
        userWins.textContent = "Wins: " + wins;
        userLosses.textContent = "Losses: " + losses;
        guessLeft.textContent = "Guesses Left: " + guess;
        userChoice.textContent = "You Guessed: " + userGuess;
};
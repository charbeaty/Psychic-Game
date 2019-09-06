
var guess = document.getElementById("guess");
var win = document.getElementById("win");
//# of times user guessed letter correctly
var losses = document.getElementById("losses");
//# of times user has failed to guess letter correctly
var left = document.getElementById("left");
//# of guesses left. This will update 
var guessed = document.getElementById("guessed");
//letter the user typed. Display until user wins or loses 
//When player wins increase Wins counter, game starts over without restart
//when player loses increase losses counter, start hame without page reset
var userText = document.getElementById("user-guess");
document.onkeyup = function(event) {
        userText.textContent = event.key;
};




 //(event.keyCode >= 65 && event.keyCode <= 90){
   
  
    

  //make an array of words for computer to choose from
        //var words = ["Journey", "ACDC", ect];

        //pick a random word from words array
        //var word = words[Math.floor(Math.random() * words.length];

        //sets up the answerArray to show how many letters there are;
        //using _'s;

        var answerArray ={};
        for(var i = 0; i < word.lenth; i++) {
         answerArray[i] = "_";
        }


        //create a variable to hold number of remainingLetters

        var remainingLetters = word.length;

        //while there are letters left to be guessed

      while (remainingLetters >12{//show the player their progress
         alert(answerArray.join(''));

        //get a guess from the player
    var guess = prompt("Press any key to get started!")
     //valid guess
    else{ //update the game state with the guess
        for (var j = 0; j < word.length; j++ )


    //if the letter they guess is in the word
    if (word[j] === guess) {//update answer array with the letter that was guessed
        answerArray[j] = guess;
        //subtract one from remaining letters
        remainingLetters--;}
    //after user wins/loses the game should automatically choose another word
        // **********END OF GAME LOOP! ****************
                }
            }
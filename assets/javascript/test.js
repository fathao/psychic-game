var wins= 0;
var losses= 0;
var numGuess= 9;
var guessArr=[];

// computer picks random letter and can't be changed
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// List to validate userChoices is avaliable on keyboard
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// comuter picks a number
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 
 // Trying to see if I can restart game by having computer pick a new number.
var reset = function(i){
  var computerGuessRepeat = computerChoices[Math.floor(Math.random() * computerChoices.length)]
};

// computer guess assigned to variable to use in function event.
var computerFixedGuess = computerGuess

// Runs through to to see if user gets the answer right or wrong
document.onkeyup = function(event){
  
  var userGuess= event.key;
  
  // put into if statement to check for a-z
  if(userChoices.indexOf(userGuess) !== -1) {
    guessArr.push(event.key);
  }
  // If condiitionalfor assigning points
  if(userGuess !== computerFixedGuess && numGuess > 0)  {
       numGuess--;
      } 
      else if (userGuess !== computerFixedGuess && numGuess === 0) 
      {
        losses++;
        guessArr = [];
        numGuess= 9;
        reset();
       } 
      else {
        wins++;
        guessArr=[];
        numGuess= 9;
        reset();
        }

// console.log for debugging
console.log(computerFixedGuess);

// show on the screen to user
document.getElementById("winsId").innerHTML = wins;
document.getElementById("lossesId").innerHTML = losses;
document.getElementById("guessesLeftId").innerHTML = numGuess;
document.getElementById("guessesId").innerHTML = guessArr;

};

var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
					 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
					  "u","v", "w", "x", "y", "z"];

// var userLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
// 					 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
// 					  "u","v", "w", "x", "y", "z"];
alert("hello");

var randomLetter = computerLetter[Math.floor(Math.random() * computerLetter.length)];					  

var wins = 0;
var losses = 0;
var numGuess = 9;
var guessArr =[];

// var computerFixedGuess = randomLetter;

function reset() {
	if (numGuess <= 0 || wins++) {
		guessArr = [];
		numGuess = 9;
		resetLetter();// resetNum();
	}

} 
function resetLetter() {
	randomLetter = computerLetter[Math.floor(Math.random() * computerLetter.length)];
}

document.onkeyup = function(event) {

	var userLetter = event.key; 

	if (userLetter !== randomLetter && numGuess > 0) {
		numGuess--;
		guessArr.push(userLetter); 
	}
	else if (userLetter !== randomLetter && numGuess <=0) {
		losses++;
		reset();
		resetLetter();
	}
	else if (userLetter == randomLetter) {
		// wins++;
		reset();
		resetLetter();
	}


var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>NumGuess Left: " + numGuess + "</p>" +
          "<p>Guesses so far: " + guessArr + "</p>";
          

document.querySelector("#game").innerHTML = html;
      }



















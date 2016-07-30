
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function() {
  		newGame();
  	});

  	$('#guessButton').click(function() {
  		validateGuess();
  	});

  	newGame();
});

var numOfGuesses = 0;
var randomNumber = 0;
var userNumber = 0;

function newGame() {
	randomNumber = luckyNumber(1, 100);
	numOfGuesses = 0;
	$('#userGuess').val("");
}

function validateGuess() {
	var userGuessInput = $('#userGuess').val();
	userNumber = parseInt(userGuessInput);
	if (isNaN(userNumber)) {
		alert('I need a number, genius.');
		return null;
	}
	else if (userNumber < 0 || userNumber > 101) {
		alert('You need to choose a number between 1 and 100.');
		return null;
	}
	else {
		feedback();
	}
	return userNumber;
}

function feedback() {
	var guessMargin = Math.abs(randomNumber - userNumber);
	if (userNumber === randomNumber) {
		$('#feedback').html("You win! Click new game to play agan.");
	}
	else if (guessMargin < 10) {
		$('#feedback').html("Gettin super hot...");
	}
	else if (guessMargin < 20) {
		$('#feedback').html("Gettin hot...");
	}
	else if (guessMargin < 30) {
		$('#feedback').html("Gettin warm...");
	}
	else {
		$('#feedback').html("Stone cold...");
	}
}

function guessTracker () {
	var guessNumber = $('<li>');
	guessNumber.attr("id", "guesses[" + numOfGuesses++ +"]");
	guessNumber.html(" + userNumber + ");

}

function luckyNumber(min, max) {
	// Found on StackOverflow: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
	 return Math.floor(Math.random() * max) + min;
}

console.log(luckyNumber(1,100));
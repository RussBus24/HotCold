
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(newGame);

  	$('#guessButton').click(validateGuess);

  	newGame();
});

var numOfGuesses = 0;
var randomNumber = 0;

function newGame() {
	randomNumber = luckyNumber(1, 100);
	numOfGuesses = 0;
	$('#userGuess').val("");
}

function receiveGuess() {

}

function validateGuess() {

	$('form').submit(function(event) {
  			event.preventDefault();
  	});
		var userGuessInput = $('#userGuess').val();
		var userNumber = parseInt(userGuessInput);
		if (isNaN(userNumber)) {
			alert('I need a number, genius.');
			return null;
		}
		else if (userNumber < 0 || userNumber > 100) {
			alert('You need to choose a number between 1 and 100.');
			return null;
		}
		else {
			feedback(userNumber);
		}
}

function feedback(userNumber) {
	var guessMargin = Math.abs(randomNumber - userNumber);
	if (userNumber === randomNumber) {
		$('#feedback').text("You win! Click new game to play agan.");
	}
	else if (guessMargin < 10) {
		$('#feedback').text("Gettin super hot...");
	}
	else if (guessMargin < 20) {
		$('#feedback').text("Gettin hot...");
	}
	else if (guessMargin < 30) {
		$('#feedback').text("Gettin warm...");
	}
	else {
		$('#feedback').text("Stone cold...");
	}
	guessTracker();
}

function guessTracker() {
	var count = numOfGuesses;
	var guessNumberPlacement = $('ul#guessList');

	var guessNumber = $('<li>');
	guessNumber.attr("id", "guesses[" + numOfGuesses++ +"]");
	guessNumber.html(' + userNumber + ');

	$('#guessList').prepend(guessNumber);

	count++;
	$('span#count').html(count);
}

function luckyNumber(min, max) {
	// Found on StackOverflow: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
	 return Math.floor(Math.random() * max) + min;
}

console.log(luckyNumber(1,100));
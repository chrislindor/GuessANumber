//program which requires the user to guess a random number;

/* 
Setting value of program ending statment to false any
statement that changes this value to false will end the program displaying the final if message
*/
var correctGuess = false;

//Asking for starting information name and generating random number also asking for user input.;
var userName = prompt('lets test your luck, but first let me know your name');
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt('I am thinking of a number between 1 and 6. Try and guess what it is'));

/* First check to see if player guessed correctly if true will go to final statement
if player guesses wrong will display one of two options depending on how high or low
the number they guessed is. If player guesss wrong after second try game will end on final else
statement*/
if (guess === randomNumber) {
    correctGuess = true;
} else if (guess < randomNumber) {
    var guessMore = parseInt(prompt(' Try agian. The number I am thinking is more than ' + guess));
    if (guessMore === randomNumber) {
        correctGuess = true;
    }
    
} else if (guess > randomNumber) {
    var guessLess = parseInt(prompt('Try agian. The number I am thinking is less than ' + guess));
    if (guessLess === randomNumber) {
        correctGuess = true;
    }
}

if (correctGuess) {
    document.write('<p> Wow ' + userName + ' you are really lucky good guess</p>');
} else {
    document.write('<p>I\'m sorry ' + userName + ' the right number was ' + randomNumber + '</p>');
}


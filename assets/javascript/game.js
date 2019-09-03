//Create a function that will run the javascript file as soon as the browser loads.
//Create Variables that has "FOUR" items and variables that represents the scores.
//Create a function that will randomize the numbers you need to reach.
//Make sure that the value is between 19 - 120.
//Create another function that will randomize each of the four items to have different values.
//Make sure that the value is between 1 - 12.
//Create a function to have the whole game reset when it is finished.
//Create a function if a user wins: it will say "You Won!", and the win score will increment by 1 and the game resets.
//Create a function if a user loses: it will say "Game Over!", and the lose score will increment by 1 and the game resets.
//Create a "click" function for each items and sum the user's score with each of those items.
//Make an if and else statement for when the user wins or when the user loses the game.

$(document).ready(function () {

var itemOne = 0; 
var itemTwo = 0;
var itemThree = 0;
var itemFour = 0;
var wins = 0;
var losses = 0;
var userScore = 0;
var userObjective = 0;

function generateNumbers() {
    userObjective = Math.floor(Math.random() * 101 + 19);
    $("#objective").text(userObjective);
}

function generateItemValues() {
    itemOne = Math.floor(Math.random() * 11 + 1);
    itemTwo = Math.floor(Math.random() * 11 + 1);
    itemThree = Math.floor(Math.random() * 11 + 1);
    itemFour = Math.floor(Math.random() * 11 + 1);
}

function resetGame() {
    userScore = 0;
    $("#score").text(userScore);
    generateNumbers();
    generateItemValues();
}

function scoreWin(){
    alert("You won!");
    wins++;
    $("#wins").text(wins);
    resetGame();
}


});

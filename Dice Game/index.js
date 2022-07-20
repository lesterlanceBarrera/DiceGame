//First Dice Image
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generate random number from 1 - 6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; // generate dice(random number).png

var randomImageSource = "images/" + randomDiceImage; // concatenated url

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); // Change the image source

//Second Dice Image
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // generate random number from 1 - 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // generate dice(random number).png

var randomImageSource2 = "images/" + randomDiceImage2; // concatenated url

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //Change the image source


//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="🚩Player 1 wins";
    }
        //if player 2 wins
        else if(randomNumber2 > randomNumber1) {
             document.querySelector("h1").innerHTML ="Player 2 wins🚩";
        } 
        // DRAW
        else {
            document.querySelector("h1").innerHTML ="Draw!";
        }

 


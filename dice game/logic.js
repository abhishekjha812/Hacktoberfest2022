num1 = Math.floor((Math.random() * 6)) + 1;
num2 = Math.floor((Math.random() * 6)) + 1;
if (num1 > num2) { document.querySelector("h2").innerHTML = "🚩Player1 Won !!"; }
else if (num1 < num2) { document.querySelector("h2").innerHTML = "🚩Player2 Won !!"; }
else { document.querySelector("h2").innerHTML = "It's a tie."; }
var random_image_source1 = "images/dice" + num1 + ".png";
var random_image_source2 = "images/dice" + num2 + ".png";
document.getElementById("player_1").setAttribute("src", random_image_source1);
document.getElementById("player_2").setAttribute("src", random_image_source2);




// if (num1 == 1) { document.querySelector("img").setAttribute("src", "images/dice1.png"); }
// if (num1 == 2) { document.querySelector("img").setAttribute("src", "images/dice2.png"); }
// if (num1 == 3) { document.querySelector("img").setAttribute("src", "images/dice3.png"); }
// if (num1 == 4) { document.querySelector("img").setAttribute("src", "images/dice4.png"); }
// if (num1 == 5) { document.querySelector("img").setAttribute("src", "images/dice5.png"); }
// if (num1 == 6) { document.querySelector("img").setAttribute("src", "images/dice6.png"); }
// if (num2 == 1) { document.getElementById("player_2").setAttribute("src", "images/dice1.png"); }
// if (num2 == 2) { document.getElementById("player_2").setAttribute("src", "images/dice2.png"); }
// if (num2 == 3) { document.getElementById("player_2").setAttribute("src", "images/dice3.png"); }
// if (num2 == 4) { document.getElementById("player_2").setAttribute("src", "images/dice4.png"); }
// if (num2 == 5) { document.getElementById("player_2").setAttribute("src", "images/dice5.png"); }
// if (num2 == 6) { document.getElementById("player_2").setAttribute("src", "images/dice6.png"); }
var randomnumber1 = Math.floor(Math.random() * 6);
var randomnumber2 = Math.floor(Math.random() * 6);
const images=["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png","./images/dice6.png"]
var img1=document.querySelector(".img1");
img1.src=images[randomnumber1]
var img2=document.querySelector(".img2");
img2.src=images[randomnumber2]
var result=document.querySelector(".container h1");
if(randomnumber1>randomnumber2)result.innerHTML="Player 1 wins"
else if(randomnumber1==randomnumber2)result.innerHTML="Draw!"
else result.innerHTML="Player 2 wins"
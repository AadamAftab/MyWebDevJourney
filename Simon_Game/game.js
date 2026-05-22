const arr = ["red", "blue", "yellow", "green"];
var started=false;
var gamePattern = [];

const audiofiles = {
    red: "./sounds/red.mp3",
    blue: "./sounds/blue.mp3",
    green: "./sounds/green.mp3",
    yellow: "./sounds/yellow.mp3"
};

let userClickedPattern = [];

let level = 0;

var buttons = document.querySelectorAll(".btn");

function playSound(name){

    var audioplayer = new Audio(audiofiles[name]);

    audioplayer.play();
}

function animation(colorchosen){

    var button = document.querySelector("." + colorchosen);

    button.classList.add("flash");

    setTimeout(function(){

        button.classList.remove("flash");

    }, 150);
}

function nextSequence(){

    userClickedPattern = [];

    level++;

    document.querySelector("#level-title").textContent = `Level ${level}`;

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = arr[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);

    animation(randomChosenColor);
}

for(var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(){

        var userChosenColor = this.id;

        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);

        animation(userChosenColor);

        checkAnswer(userClickedPattern.length - 1);

    });

}

function checkAnswer(currlevel){

    if(userClickedPattern[currlevel] === gamePattern[currlevel]){
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){

                nextSequence();

            }, 1000);

        }

    }

    else{
        var wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
        document.body.classList.add("game-over");
        setTimeout(function(){
            document.body.classList.remove("game-over");
        }, 200);
        document.querySelector("h1").innerHTML="Game Over, Press any Key to Restart!"
        startOver();
    }
    return true;

}

document.addEventListener("keydown", function(){
    if(started==false){
        nextSequence();
        started=true;
    }
});

function startOver(){
    level=0;
    userClickedPattern=[]
    gamePattern=[]
    started=false;
}
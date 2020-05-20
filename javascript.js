var outputChoice = document.getElementById("player");
var computerChoice = document.getElementById("computer");
var result = document.getElementById("result");
var playerScore = document.getElementById("scoreP");
var computerScore = document.getElementById("scoreC");
var screen = document.getElementById("gameScreen");
var playerButtons = document.getElementsByClassName("buttonP");

var scoreP = 0;
var scoreC = 0;
var flag = 0;
var option = "";

[].forEach.call(playerButtons,(element) =>  {
    element.addEventListener("click", eventList = () => {
        if (flag == 0){
            flag = 1;
            result.innerHTML = "RESULT: ";
            computerChoice.innerHTML = "";
            var choice = element.innerHTML;
            option = choice;
            outputChoice.innerHTML = choice;
            computerChoice.classList.add("spinner-border", "spin");
            setTimeout(step1, 500);
        }
    });
});

function step1(){
    computerChoice.classList.remove("spinner-border", "spin");
    result.innerHTML = "RESULT: ";
    result.innerHTML += playRound(option.toLowerCase(), computerPlay().toLowerCase());
    playerScore.innerHTML = scoreP;
    computerScore.innerHTML = scoreC;
    if ((scoreC == 5) || (scoreP == 5)){
        [].forEach.call(playerButtons,(element) =>  {
            element.classList.add("disabled");
        });
        setTimeout(step2, 1000);
    }
    else{
        flag = 0;
    }
}

function step2(){
    if (scoreP == 5){
        win(scoreP, scoreC);
    }
    if (scoreC == 5){
        lose(scoreP, scoreC);
    }
}

function computerPlay(){
    var options = ["ROCK", "PAPER", "SCISSORS"];
    var output = options[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = output;
    return output;
}
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return ("It's a Draw!, you both chose " + playerSelection.toUpperCase() + ".");
    }
    else{
        switch(playerSelection){
            case "rock":{
                switch(computerSelection){
                    case "paper":
                    scoreP++;
                    return "You Win!, " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + ".";
                    break;
                    case "scissors":
                    scoreC++;
                    return "You Lose!, " + computerSelection.toUpperCase() + " beat " + playerSelection.toUpperCase() + ".";
                    break;
                }
                break;
            }
            case "paper":{
                switch(computerSelection){
                    case "rock":
                    scoreC++;
                    return "You Lose!, " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + ".";
                    break;
                    case "scissors":
                    scoreP++;
                    return "You Win!, " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + ".";
                    break;
                }
                break;
            }
            case "scissors":{
                switch(computerSelection){
                    case "rock":
                    scoreP++;
                    return "You Win!, " + playerSelection.toUpperCase() + " beat " + computerSelection.toUpperCase() + ".";
                    break;
                    case "paper":
                    scoreC++;
                    return "You Lose!, " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + ".";
                    break;
                }
                break;
            }
        }
    }
}

function win(P, C){
    var p = P;
    var c = C;
    screen.classList.add("header", "header3", "text-center");
    $('#gameScreen').css({'background-image': 'linear-gradient(#9cff57, #64dd17, #1faa00)'});
    screen.innerHTML="You Win! " + " Final Score: Player " + p + " - Computer " + c;
    [].forEach.call(playerButtons,(element) =>  {
        element.removeEventListener("click", eventList());
    });
    var children = screen.querySelectorAll("*");
    [].forEach.call(children,(element) =>  {
        element.remove();
    });
}

function lose(P, C){
    var p = P;
    var c = C;
    screen.classList.add("header", "header3", "text-center");
    $('#gameScreen').css({'background-image': 'linear-gradient(#ff5131, #d50000, #9b0000)'});
    screen.innerHTML="You Lose! " + " Final Score: Player " + p + " - Computer " + c;
    [].forEach.call(playerButtons,(element) =>  {
        element.removeEventListener("click", eventList());
    });
    var children = screen.querySelectorAll("*");
    [].forEach.call(children,(element) =>  {
        element.remove();
    });
}
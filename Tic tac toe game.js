var gameSpaces = document.querySelectorAll('td');
var current_player = 1;
var reset = document.querySelector('button');
var player1 = 0;
var player2 = 0;
var cat = 0;
//Playing the game
function clickedSquare (e) {
    if (current_player === 1 && e.target.innerHTML === ""){
        e.target.innerHTML = "X";
        current_player += 1;
    }
    else if (e.target.innerHTML === ""){
        e.target.innerHTML = "O";
        current_player -=1;
    }
    //Checking for winner
    winner();

}

for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}


//Resetting the board
reset.onclick = function () {
    console.log("Hey");
    while(1===1) {
        var command = prompt("What do you want to do!\n Enter the number.\n 1:Reset the board \n 2:Reset the Score \n 3:View Score \n 4:Quit");
        if (parseInt(command) === 1) {
            gameSpaces[0].innerHTML = "";
            gameSpaces[1].innerHTML = "";
            gameSpaces[2].innerHTML = "";
            gameSpaces[3].innerHTML = "";
            gameSpaces[4].innerHTML = "";
            gameSpaces[5].innerHTML = "";
            gameSpaces[6].innerHTML = "";
            gameSpaces[7].innerHTML = "";
            gameSpaces[8].innerHTML = "";
        }
        else if (parseInt(command) === 2){
            player2 = 0;
            player1 = 0;
            cat = 0;
            alert("Score Reset!! \n Here: " + player1 + " - " + player2 + " - " + cat);
        }
        else if (parseInt(command) === 3){
            alert("The score is: Player 1: " + player1 +" - Player 2: " + player2 + " and total cat games " + cat);
        }
        else if  (parseInt(command) === 4){
            break;
        }
        else{
            alert("Not a Valid Reponse.\n Please use the number next to the option you want to use.")
        }
    }
};

function winner() {
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins!! Resetting the board!");
        gameSpaces[0].innerHTML = "";
        gameSpaces[1].innerHTML = "";
        gameSpaces[2].innerHTML = "";
        gameSpaces[3].innerHTML = "";
        gameSpaces[4].innerHTML = "";
        gameSpaces[5].innerHTML = "";
        gameSpaces[6].innerHTML = "";
        gameSpaces[7].innerHTML = "";
        gameSpaces[8].innerHTML = "";
        current_player = 1;
        player1 ++;
        alert("The score is: Player 1: " + player1 +" - Player 2: " + player2 + " and total cat games " + cat);
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins!! Resetting the board!");
        gameSpaces[0].innerHTML = "";
        gameSpaces[1].innerHTML = "";
        gameSpaces[2].innerHTML = "";
        gameSpaces[3].innerHTML = "";
        gameSpaces[4].innerHTML = "";
        gameSpaces[5].innerHTML = "";
        gameSpaces[6].innerHTML = "";
        gameSpaces[7].innerHTML = "";
        gameSpaces[8].innerHTML = "";
        current_player = 1;
        player2 ++;
        alert("The score is: Player 1: " + player1 +" - Player 2: " + player2 + " and total cat games " + cat);
        return false;
    }
    else if ((gameSpaces[0].innerText === "X" || gameSpaces[0] === "O") &&
        (gameSpaces[1].innerText === "X" || gameSpaces[1].innerText === "O") &&
        (gameSpaces[2].innerText === "X" || gameSpaces[2].innerText === "O") &&
        (gameSpaces[3].innerText === "X" || gameSpaces[3].innerText === "O") &&
        (gameSpaces[4].innerText === "X" || gameSpaces[4].innerText === "O") &&
        (gameSpaces[5].innerText === "X" || gameSpaces[5].innerText === "O") &&
        (gameSpaces[6].innerText === "X" || gameSpaces[6].innerText === "O") &&
        (gameSpaces[7].innerText === "X" || gameSpaces[7].innerText === "O") &&
        (gameSpaces[8].innerText === "X" || gameSpaces[8].innerText === "O")){
        alert("CAT!! Resetting the board!");
        gameSpaces[0].innerHTML = "";
        gameSpaces[1].innerHTML = "";
        gameSpaces[2].innerHTML = "";
        gameSpaces[3].innerHTML = "";
        gameSpaces[4].innerHTML = "";
        gameSpaces[5].innerHTML = "";
        gameSpaces[6].innerHTML = "";
        gameSpaces[7].innerHTML = "";
        gameSpaces[8].innerHTML = "";
        current_player = 1;
        cat ++;
        alert("The score is: Player 1: " + player1 +" - Player 2: " + player2 + " and total cat games " + cat);

    }
}
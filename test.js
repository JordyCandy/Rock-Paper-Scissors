var score = 0;
var compScore= 0;

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

//   var log = "";

  button.addEventListener('click', function(gameSelection) {
    playGame();
});

//game choice function
function gameChoice(){
    var randomNumber = number();
    if(randomNumber === 1){
        return "Rock";
    }else if(randomNumber === 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}

//reset button
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function(){
   location.reload();
});

//levels
function levels(points){

    if(points === "Win"){
        score+=1;
        return score;
    }else if(points === "Loss"){
        compScore+=1;
        return compScore;
    }else{
       compScore = compScore;
       score = score;
       return compScore + " " + score;
    }
}


//game over
function over(){

}


//helper function

//Random Number Generator
var number = () =>{
    var Mynum = Number(Math.round(1 + Math.random() * 2));
    return Mynum;
}


function playGame(gameSelection, choice){
  var log = "";

    //h1 selector
    const selector = document.querySelector(".heading1");
    const selector2 = document.querySelector(".heading2");
    //h1 click class
    selector.classList.add("myClick");
    selector2.classList.add("myClick");
    //playerChoice
    var choice = button.textContent;
    //gameChoice
    gameSelection = gameChoice();    

        //player win
        if((choice === "Rock" && gameSelection === "Scissors") || (choice === "Paper" && gameSelection === "Rock") || (choice === "Scissors" && gameSelection === "Paper")){
            log = "Player wins! ";
            selector.textContent = log;
            score++;
        }
        //player loss
        else if((choice === "Rock" && gameSelection === "Paper") || (choice === "Paper" && gameSelection === "Scissors") || (choice === "Scissors" && gameSelection === "Rock")){
            log = "Player lost! ";
            selector.textContent = log;
            compScore++;
        }else if( choice === gameSelection){
            log = "It's a tie! ";
            selector.textContent = log;
        }
    selector2.textContent = " Player score: " + score + " " + "Game score: " +compScore;
    }
}

levels();
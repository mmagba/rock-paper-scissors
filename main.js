console.log("hello world");
function computerPlay(){
    let num=Math.floor(Math.random()*(3-1+1))+1;
    if(num===1){
        return "ROCK";
    }
    if(num===2){
        return "PAPER";
    }
    if(num===3){
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection){

    playerSelection=playerSelection.toUpperCase();
    if(playerSelection===computerSelection){
        return "draw";
    }
    if((playerSelection==="ROCK"&&computerSelection==="SCISSORS")||(playerSelection==="SCISSORS"&&computerSelection==="PAPER")||(playerSelection==="PAPER"&&computerSelection==="ROCK")){
        return "player wins";
    }
    return "computer wins";


}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
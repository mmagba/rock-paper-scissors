function computerPlay(){
    let num=Math.floor(Math.random()*(3-1+1))+1;
    if(num===1){
        return "Rock";
    }
    if(num===2){
        return "Paper";
    }
    if(num===3){
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection){

    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerSelection.toUpperCase();

    if(playerSelection===computerSelection){
        return "draw";
    }
    if((playerSelection==="ROCK"&&computerSelection==="SCISSORS")||(playerSelection==="SCISSORS"&&computerSelection==="PAPER")||(playerSelection==="PAPER"&&computerSelection==="ROCK")){
        return "player wins";
    }
    return "computer wins";
}

function game(){
    let playerCount=0,computerCount=0;
    for(let i=0;i<5;i++){
        let computerSelection=computerPlay();
        //console.log(computerSelection);
        let playerSelection=prompt("What's your sign?");
        //console.log(playerSelection);
        result=playRound(playerSelection,computerSelection);
        if(result==="player wins"){
            console.log(`player wins, ${playerSelection} beats ${computerSelection}`);
            playerCount++;
        }
        if(result==="computer wins"){
            console.log(`computer wins, ${computerSelection} beats ${playerSelection}`);
            computerCount++;
        }
        if(result==="draw"){
            console.log("draw");
        }
        console.log(`player score:${playerCount}, computer score:${computerCount}`);
        //console.log(playerCount);
        //console.log(computerCount);
    }
    if(playerCount===computerCount){
        console.log("draw");
    }
    if(playerCount>computerCount){
        console.log("player won");
    }
    if(playerCount<computerCount){
        console.log("computer won");
    }
}



game();
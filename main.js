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
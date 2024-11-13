var userscore=0
var computerscore=0
var user_score=document.getElementById("users-score")
var comp_score=document.getElementById("comp-score")
var rock=document.getElementById("rock")
var paper=document.getElementById("paper")
var scissors=document.getElementById("scissors")


function getComputerChoice(){
    var choices =["rock","paper","scissors"]
    var randomNumber=Math.floor(Math.random()*3)
    return choices[randomNumber]
}
function win(){
    userscore++
    user_score.innerHTML=userscore
    
}
function lose(){
computerscore++
comp_score.innerHTML=computerscore

}
function game(userChoice){
    var ComputerChoice=getComputerChoice()
    $("#action").text("user :"+userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " vs " +"computer: " +ComputerChoice.charAt(0).toUpperCase() + ComputerChoice.slice(1))
    if((userChoice==="rock"&&ComputerChoice==="scissors")||
        (userChoice==="paper"&&ComputerChoice==="rock")||
        (userChoice==="scissors"&&ComputerChoice==="paper")
    ){
        alert("User Win")
        win()
    }else if((userChoice==="rock"&&ComputerChoice==="paper")||
    (userChoice==="paper"&&ComputerChoice==="scissors")||
    (userChoice==="scissors"&&ComputerChoice==="rock")){
        alert("User Loses")
       lose()
    }else{
        alert("User Draw")
        
    }
}
function main(){
rock.addEventListener("click",function(){
    game("rock")
    
})
paper.addEventListener("click",function(){
    game("paper");
    
})
scissors.addEventListener("click",function(){
    game("scissors")
    
})
}
main()
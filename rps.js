let userScore = 0;
let compScore = 0;

const userScoreBttn = document.querySelector("#user-score");
const compScoreBttn = document.querySelector("#comp-score");

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    let options = ["rock" ,"paper", "scissors"]
    const index= Math.floor(Math.random()*3);
    return options[index];

}

const showWinner = (userWin) =>{
    if(userWin){
       
        msg.innerText = "you won";
        userScore++ ;
        userScoreBttn.innerText = userScore;
        msg.style.backgroundColor = "green"
    
       } 
  else{
        //console.log("you lose");
        msg.innerText ="you lose";
        compScore++ ;
        compScoreBttn.innerText = compScore;
        msg.style.backgroundColor = "red"
       }
} 




const playGame =  (userChoice,compChoice) =>{
//  console.log("user choice  is" ,userChoice);
//  console.log( "copmputer choice is " ,compChoice);



    if(userChoice === compChoice){
        //console.log("match draw");
        msg.innerText = "draw try again !";
        msg.style.backgroundColor = "beige"
    }
    else{

     let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false: true;

        }
        else{
            userWin = compChoice ==="rock" ? false: true;
        }
          showWinner(userWin);
    }


  
}

choice.forEach((choice) => {
  //console.log(choice);
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      const compChoice = genCompChoice();
      //console.log("choice was clicked" , userChoice);
      playGame(userChoice,compChoice);
 });
});
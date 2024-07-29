let userScore = 0;  // create two variables for user score and comp score
let compScore = 0;


const choices =document.querySelectorAll(".choice"); //Access all div of choice
const msg = document.querySelector("#msg");  //access msg

const userScorePara = document.querySelector("#user-score");  //access userscore para
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{         //generate computer choice
    const options = ["paper","scisscor","rock"]; //generate array for choices because we use modular way i.e code reusability
    const randIdx = Math.floor(Math.random()*3);   // compchoice random acces the options so use math.random function*3 to find value 0 to 2 and math.floor use for to remove decimal
    return options[randIdx];
};

const drawGame = () =>{              //for draw game function
    console.log("Game was draw");
    msg.innerText = "Game was draw,play again";
    msg.style.backgroundColor = black;
};

const showWinner = (userWin, userChoice, compChoice) =>{   //play game user win pass and display msg win or lose
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!!")
        msg.innerText = `you win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose !   ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    
}

const playGame = (userChoice) =>{   //generate user choice
   console.log("user choice=", userChoice);
   //generate comp choice
   const compchoice = genCompChoice();
   console.log("comp choice=", compChoice);

   if(userChoice === compChoice){
    //draw game
    drawGame();
   }
   else{
    let userWin = true;
    if(userChoice ==="rock"){
        //scissor,paper  ---compchoice
       userWin = compchoice === "paper" ? false : true; //if userchoice = rock nd compchoice = papper then comp win and userwin set false then compchoice is scissor and userchoice is rock then user win nd userwin set true
    } 
    
    else if(userChoice === "paper"){
        //rock,scissor}
    userWin = compChoice === "scissor" ? false : true;
    } 
    
    else{                   //userchoice = scissor
        //paper,rock
      userWin = compChoice ==="rock" ? false : true;

    }
    showWinner(userWin, userChoice,compChoice);
}
};
    


choices.forEach((choice)=>{                     //all choice access
    choice.addEventListener("click", ()=>{           //every choice add event listener
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
    });
});


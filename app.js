let gameSeq=[];
let userSeq=[];
let highest_score = 0
let matchAll = true

let btns =["yellow", "red", "blue", "green"];   

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp()
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },250);  
  }


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);  
  }


function levelUp(){
userSeq=[];
level++;
h2.innerText=`level ${level}`;

let randIdx =Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:", level);

    // let idx =level-1;

    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000);
      }
    } else{
        h2.innerText=`Game Over! Press any key to start.`;
    }
    reset();
}

function btnPress(){
    console.log(this);
    let btn=this;

    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
 btn.addEventListener("click",btnPress);
}

function startOver(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
    h2.innerText=`Press any key to start.`;
}
let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game started");
        started = true;
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
};

function levelUp () {
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`;

    //random btn choose
    
    let randomIdx = Math.floor(Math.random()*4) ;
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}; 

function checkAns(idx){
    if (userSeq[idx] == gameSeq[idx]){
        // console.log("Same Value")
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b> PRESS ANY KEY TO START`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150)

        reset();
    }
}


function btnPress (){
    let btn = this;

    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}


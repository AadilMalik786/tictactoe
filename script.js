// let backgroundmusic= new Audio("music.mp3");
let onturn= new Audio("/sounds/ting.mp3");
let gameover= new Audio("/sounds/gameover.mp3");
let music= new Audio("/sounds/music.mp3");
let resetmusic= new Audio("/sounds/reset.mp3");
let gamewin= new Audio("/sounds/gamewin.mp3");
let turn = "X";
let endgame=false;

//function to change the turn
let changeturn=()=>{
    return turn==="X"? "0": "X";
};

//function to check for a win

let chekwin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText +" won";
        endgame=true;
        setTimeout(() => {
            gamewin.play();
        }, 1000);
        document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="200px";
        document.querySelector(".line").style.width="20vw"; 
        document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        stop();
    }
})
}
function stop(){
    let boxtext=document.querySelectorAll(".boxtext");
    setTimeout(() => {
        setTimeout(() => {
            Array.from(boxtext).forEach(element=>{
                element.innerText="";
            });  
        }, 0);
        turn="X";
        endgame=false;
        document.getElementsByClassName("info")[0].innerText="turn for " + turn;
        document.querySelector(".line").style.width="0"; 
        document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="0"; 
    }, 4000);
    
    
}


//----------------------------mobile responsive--------------------------------------------------------------------------
if(window.innerWidth<=768 && window.innerWidth>=320){
    // document.querySelector(".line").style.width="60vw";
    let line1=document.querySelector(".line");
    line1.style.backgroundColor="orange";

    let chekwin=()=>{
        let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,8,10,0],
        [3,4,5,8,30,0],
        [6,7,8,8,50,0],
        [0,3,6,-13,29,90],
        [1,4,7,7.5,30,90],
        [2,5,8,28,30,90],
        [0,4,8,5,27,45,45],
        [2,4,6,5,32,135,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText +" won";
            endgame=true;
            setTimeout(() => {
                gamewin.play();
            }, 1000);
    
            document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="200px";
            document.querySelector(".line").style.width="45vw"; 
            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            stop();
        }
    })
    }
    function stop(){
        let boxtext=document.querySelectorAll(".boxtext");
        setTimeout(() => {
            setTimeout(() => {
                Array.from(boxtext).forEach(element=>{
                    element.innerText="";
                });  
            }, 0);
            turn="X";
            endgame=false;
            document.getElementsByClassName("info")[0].innerText="turn for " + turn;
            document.querySelector(".line").style.width="0"; 
            document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="0"; 
        }, 4000);
        
        
    }
    let box=document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            boxtext.style.fontWeight="bold";
            boxtext.style.color="red";
            turn= changeturn();
            onturn.play();
            if(!endgame){
                chekwin();

            }
            if(!endgame){
                document.getElementsByClassName("info")[0].innerText="turn for " + turn;
            }
        }
    })
})

//listener to reset button
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
        resetmusic.play();
    turn="X";
    endgame=false;
    document.getElementsByClassName("info")[0].innerText="turn for " + turn;
    document.querySelector(".line").style.width="0"; 
    document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="0";
})

}
    //-----------------------------------------------mobile responsive end------------------------------------------------- 
    //----------------------------------------------computer responsive start---------------------------------------------
//main logic
// music.play();
let box=document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.style.color="red";
            boxtext.innerText=turn;
            turn= changeturn();
            onturn.play();
            if(!endgame){

                chekwin();
            }
            if(!endgame){
                document.getElementsByClassName("info")[0].innerText="turn for " + turn;
            }
        }
    })
})
//listener to reset button
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
        resetmusic.play();
    turn="X";
    endgame=false;
    document.getElementsByClassName("info")[0].innerText="turn for " + turn;
    document.querySelector(".line").style.width="0"; 
    document.querySelector(".imagebox").getElementsByTagName("img")[0].style.width="0";
})
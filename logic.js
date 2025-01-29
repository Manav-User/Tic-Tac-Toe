let boxes = document.querySelectorAll(".cell");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcont = document.querySelector(".msg-container");
let cont = document.querySelector(".container");

const winnerArr = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

let turnO = true;
let count = 0;

boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(turnO){
            cell.innerText = "O";
            turnO = false;
        }
        else{
            cell.innerText = "X";
            turnO = true;
        }
        cell.disabled = true;
        count++;
        document.querySelector("h3").classList.add("hide");
        let IsWinner = checkWinner();
        if(count === 9 && !IsWinner){
            gameDraw();
        }
    });
});

const checkWinner= () => {
    for(i of winnerArr){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                return true;
            }
        }
        
    }
}

const showWinner = (winner) => {
    if(winner=='X'){
        msg.innerText = `Congulations!! Winner is Player 2.`;
    }
    else{
        msg.innerText = `Congulations!! Winner is Player 1.`;
    }
    msgcont.classList.remove("hide");
    document.getElementById("main").style.backgroundColor = "MediumSeaGreen";
    cont.classList.add("hide");
    for(let box of boxes){
        box.disabled = true;
    }
}

const gameDraw = () => {
    msg.innerText = `Game Draw!!`;
    msgcont.classList.remove("hide");
    document.getElementById("main").style.backgroundColor = "MediumSeaGreen";
    cont.classList.add("hide");
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    count = 0;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgcont.classList.add("hide");
    document.getElementById("main").style.backgroundColor = "#5e9592";
    cont.classList.remove("hide");
    document.querySelector("h3").classList.remove("hide");
}

resetbtn.addEventListener("click",resetGame);
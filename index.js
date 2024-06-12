let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let new_button = document.querySelector("#new_btn");
let new_msg = document.querySelector(".msg_");
let msg = document.querySelector(".msg");

let turnO = true; //player-X , player-O

const winning_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        if (turnO == true) {   //player:- O
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

// const showWinner = (winner) =>{
//     msg.innerText = `Congrat's, winner is ${winner}`;
//     new_msg.classList.remove("hide")
// }

const checkWinner = () => {

    for (let pattern of winning_patterns) {

        let pos1Val = boxes[pattern[0]].innerText;

        let pos2Val = boxes[pattern[1]].innerText;

        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);

            }
        }
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congrat's, winner is '${winner}'`;
    new_msg.classList.remove("hide");
    disableboxes();
}


const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};

const resetGame =() =>{
    turnO = true;
    enableboxes();
    new_msg.classList.add("hide")
    
};

new_button.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);
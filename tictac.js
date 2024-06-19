let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playero,playerx
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        count++;
        // console.log("count =",count);
        if (turnO){
            box.style.color = "#6F8FAF";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "#b0413e";
            box.innerText = "X";
            turnO = true;
            
        }
        
        box.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }else if (count === 9 && pos1Val != pos2Val && pos2Val != pos3Val ){
                    msg.innerText = "Game was a Draw";
                    msgContainer.classList.remove("hide");
                    disableBoxes();
                    count=0;
            }
        }
        }
    }


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
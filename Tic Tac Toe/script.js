let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let msg = document.querySelector(".msg");
let reset = document.querySelector("#reset");
let start = document.querySelector("#start");
let game = document.querySelector(".game");
let container = document.querySelector(".container");

start.addEventListener("click", () => {
    container.classList.add("hide");
    game.classList.remove("hide");

})

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


let btnClickCount = 0;
let winner = false;

const checkWinner = () => {
    for (const i of win) {
        pos1 = boxes[i[0]].innerHTML;
        pos2 = boxes[i[1]].innerHTML;
        pos3 = boxes[i[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner = true;
                boxes[i[0]].classList.add("win");
                boxes[i[1]].classList.add("win");
                boxes[i[2]].classList.add("win");
                showWinner(pos1);
            }
        }

    }

    if (btnClickCount == 9 && !winner) {
        draw();
        // msg.innerHTML = "Oops! Match Draw 🤡";
    }
    // console.log(btnClickCount);
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Player ${winner}, You Won🎉`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    boxes.forEach(box => {
        box.disabled = true;
    })
}


// For Input 
let turn = true;
boxes.forEach(box => {
    box.addEventListener("click", input = () => {
        // console.log("box is clicked");
        btnClickCount++;
        reset.disabled = false;
        if (turn) {
            msg.innerHTML = "⭕, It's Your Turn!"
            box.innerHTML = "❌";
            turn = false;

        }
        else {
            msg.innerHTML = "❌, It's Your Turn!"
            box.innerHTML = "⭕";
            turn = true;

        }
        box.disabled = true;
        checkWinner();
    })
})

const draw = () => {
    msg.innerHTML = "Oops! Match Draw 🤡";
    // console.log("draw");
}


reset.addEventListener("click", () => {
    btnClickCount = 0;
    winner = false;
    msg.innerHTML = "❌, Lets Start!"
    msg.style.backgroundColor = "lightgoldenrodyellow";
    msg.style.color = "black";
    boxes.forEach(box => {
        box.innerHTML = "";
        // if (box.classList)
        box.classList.remove("win");
        box.disabled = false;
    })
    reset.disabled = true;
})
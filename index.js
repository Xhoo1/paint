let color = "black";

document.addEventListener("DOMContentLoaded", function () {
  createBoard(32);

  /// add the event listener to get input only after user select it

  let btnPopup = document.querySelector("#popup");

  btnPopup.addEventListener("click", function () {
    let size = selectSize();
    createBoard(size);
  });
});

// to create a board with grid using for loop

function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let box = document.createElement("div");

    box.addEventListener("mouseover", colorDiv);

    board.insertAdjacentElement("beforeend", box);
  }
}

// to get the use input and pass it to the board

function selectSize() {
  let input = prompt("Select size: ");
  let message = document.querySelector(".selectColor");
  if (input == "") {
    message.textContent = "Please enter a number";
  } else if (input < 0 || input > 100) {
    message.textContent = "Please enter a number from 0 to 100";
  } else {
    message.textContent = "Feel free to paint";
    return input;
  }
}

function colorDiv() {
if( color == 'random'){

this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`

} else{

  this.style.backgroundColor = 'black';
}

}

function setColor(colorChoice) {
color = colorChoice;
}

// clear board by chaning color white

function clearBoard(){

let divs = document.querySelectorAll("div");
divs.forEach((div) => div.style.backgroundColor = "white")


}

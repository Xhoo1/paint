document.addEventListener("DOMContentLoaded", function() {
  createBoard(16);

  
});

function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let box = document.createElement("div");
    box.style.backgroundColor = "red";

    board.insertAdjacentElement("beforeend", box);
  }
}
function selectSize(){

let input = prompt("Select size: ")
 let message = document.querySelector(".selectColor")
 if(input == ""){

   message.textContent = "Please enter a number";

 } else if (input < 0 ||  input > 100){

  message.textContent = "Please enter a number from 0 to 100";

 } else{
  message.textContent = "Feel free to paint";

 }

}
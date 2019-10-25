/*----- constants -----*/
let player1 = "X";
let player2 = "O";

var currentTurn = 1;
var movesMade = 0;

var box = document.getElementsByClassName('.block');
/*----- app's state (variables) -----*/

let box = document.getElementsByClassName("block");

/*----- cached element references -----*/




/*----- event listeners -----*/





/*----- functions -----*/
function checkForWinner() {
    //need at least four moves to check for a winner
    if (movesMade > 4) {
        var sqr = $('.square');
        //research why we need call here!
        var moves = Array.prototype.slice.call($(".square"));
        var results = moves.map(function(square) { return square.innerHTML; });















////////////////////////////////////////////////////












/*-------storage---------*/
// function handleBlockClick(evt) {
//     let X = evt.target.textContent;
//         //document.getElementsByClassName('block');
      
//         console.log(evt);
//         //this.textContent = "X"
//     //return ;
// }

// function handleBlockClick() {
//     if (this.clasName = "played") {
//         this.textContent = 'X';
//         return;
        
//     }
// }
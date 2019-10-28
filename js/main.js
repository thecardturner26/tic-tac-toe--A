/*----- constants -----*/
//let player1 = "X";
//let player2 = "O";

var turnNum = 0;
//var movesMade = 0;
let xArray = [];
let oArray = [];

//var boxes = [q1, q2, q3, q4, q5, q6, q7, q8, q9]

//var box = document.getElementsByClassName('.block');
/*----- app's state (variables) -----*/

let box = document.getElementsByClassName("block");

/*----- cached element references -----*/
const sqr1 = document.getElementById('q1')
const sqr2 = document.getElementById('q2');
const sqr3 = document.getElementById('q3');
const sqr4 = document.getElementById('q4');
const sqr5 = document.getElementById('q5');
const sqr6 = document.getElementById('q6');
const sqr7 = document.getElementById('q7');
const sqr8 = document.getElementById('q8');
const sqr9 = document.getElementById('q9');

var xreset = document.getElementsByClassName('xplayed');
var oreset = document.getElementsByClassName('oplayed');


/*----- event listeners -----*/

/////
sqr1.addEventListener("click", play);
sqr2.addEventListener("click", play);
sqr3.addEventListener("click", play);
sqr4.addEventListener("click", play);
sqr5.addEventListener("click", play);
sqr6.addEventListener("click", play);
sqr7.addEventListener("click", play);
sqr8.addEventListener("click", play);
sqr9.addEventListener("click", play);





/*----- functions -----*/
// function checkForWinner() {
//     //need at least four moves to check for a winner
//     if (movesMade > 4) {
//         var sqr = $('.square');
//         //research why we need call here!
//         var moves = Array.prototype.slice.call($(".square"));
//         var results = moves.map(function(square) { return square.innerHTML; });
//     }}

    function play(){
        if (this.className == "oplayed"){
            return
        }
        if (this.className == "xplayed"){
            return
        }
        turnNum += 1;
        if (turnNum%2 == 0){
            this.textContent = "O"
            oArray.push(this.id)
            this.className = "oplayed"
        }
        if (turnNum%2 == 1){
            this.textContent = "X"
            xArray.push(this.id)
            this.className = "xplayed"
        }
            render()
            return;
        }













////////////////////////////////////////////////////

function checkForWinner() {
    //need at least four moves to check for a winner
    if (movesMade > 4) {
        var sqr = $('.square');
        //research why we need call here!
        var moves = Array.prototype.slice.call($(".sqr"));
        var results = moves.map(function(square) { return square.innerHTML; });
    }}










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
/*----- constants -----*/
let player1 = "X"
let player2 = "O"



/*----- app's state (variables) -----*/
let X, O;


/*----- cached element references -----*/
//const blockEl = document.getElementsByClassName('block');


 const box = document.getElementsByClassName("block")

/*----- event listeners -----*/


box.addEventListener("click", handleBlockClick);



/*----- functions -----*/

// function handleBlockClick(evt) {
//     let X = evt.target.textContent;
//         document.getElementsByClassName('block');
      
//         console.log(evt)
//         this.textContent = "X"
//     return ;
// }

function handleBlockClick() {
    if (this.clasName = "played") {
        this.textContent = 'X';
        return;
        
    }
}


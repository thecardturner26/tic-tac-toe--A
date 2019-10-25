/*----- constants -----*/
const CHAC = ['X', 'O'];



/*----- app's state (variables) -----*/
let X, O;


/*----- cached element references -----*/
//const blockEl = document.getElementsByClassName('block');


document.getElementsByClassName('block')

/*----- event listeners -----*/


    addEventListener('click', handleBlockClick);



/*----- functions -----*/

function handleBlockClick(evt) {
    let X = evt.target.textContent;
        document.getElementsByClassName('block');
      
        console.log(evt)
        this.textContent = "X"
    return ;


}


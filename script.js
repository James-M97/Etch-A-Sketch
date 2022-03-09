const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn');
const gridItems = document.querySelectorAll('.grid-items')
 

 //make divs
function makeDiv(numOfDiv) {
    for(let i =0; i < numOfDiv; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-items');
       
        container.appendChild(div);
    }
};
//make div within each row;
function makeGrid(rows,cols) {
    container.style.setProperty('--rows',rows);
    container.style.setProperty('--cols',cols);
    for(let i=0; i < rows;i++) {
        makeDiv(cols);
    }
}


function gridPrompt () {
    let number = prompt('Choose a grid size between 5 and 64.');
    if(number >= 5 && number <= 64) {
        makeGrid(number,number);
    } else {
        do {
            number = prompt('Invalid size,make sure your value is between 5 to 64.Please try Again!');
    } 
    while (number < 5 || number > 64) {
        makeGrid(number,number);
       
    }
}

}



//change background color when mouse is over
container.addEventListener('mouseover',function(e) {
       if(e.target === container) {
       e.target.style.background = 'antiquewhite';
       } else {
        e.target.style.background = 'blue';
    }
})

// reset button
 resetBtn.addEventListener('click',function() {
 window.location.reload();
 })

gridPrompt();
    










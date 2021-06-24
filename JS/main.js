let add = document.querySelector('.add');
let form = document.querySelector('.form');
let tea = ' and tea.'
let input = document.querySelector('input');
let currentCard = document.querySelectorAll('.taskCard');
let clearCards = document.querySelector('.clearButton');



function  myFunction() {
    let task = document.createElement('div');
    task.classList.add('taskCard');
    // document.querySelector('.wrapper2').appendChild(task);
    tea = input.value;
    document.querySelector('.wrapper2').insertAdjacentHTML('beforeend', `<div class="taskCard">
        <div class="taskCardText">${tea}</div>
        <div class="taskCardDate">Today</div>
        <div class="taskCardControls"></div>
      </div>`);
    currentCard = document.querySelectorAll('.taskCard')
    console.log(input.value)
}


function clear() {
    currentCard.forEach( (item) => {
        item.style.display = 'none';
    })
}

add.addEventListener('click', myFunction);
clearCards.addEventListener('click', clear);




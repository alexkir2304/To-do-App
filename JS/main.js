let add = document.querySelector('.add');
let form = document.querySelector('.form');
let tea = ' and tea.'
let input = document.querySelector('input');
let currentCard = document.querySelectorAll('.taskCard');
let clearCards = document.querySelector('.clearButton');
let laterButton = document.querySelector('.laterButton');
let laterWindow = document.querySelector('.laterWindow');
let finishedButton = document.querySelector('.finishedButton');
let finishedWindow = document.querySelector('.finishedWindow');

function  addTask() {
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
    input.value = '';
    input.focus();
}


function clear() {
    currentCard.forEach( (item) => {
        item.style.display = 'none';
    })
}

add.addEventListener('click', () => {
    if (input.value !== '') addTask()
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && input.value !== '') addTask();
});

clearCards.addEventListener('click', clear);

laterButton.addEventListener('click', function() {
    laterWindow.style.height = '100%';
})

finishedButton.addEventListener('click', function() {
    finishedWindow.style.height = '100%';
})




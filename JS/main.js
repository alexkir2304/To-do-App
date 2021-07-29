let add = document.querySelector('.add');
let form = document.querySelector('.form');
let input = document.querySelector('input');
let currentCard = document.querySelectorAll('.taskCard');
let clearCards = document.querySelector('.clearButton');
let laterButton = document.querySelector('.laterButton');
let laterWindow = document.querySelector('.laterWindow');
let finishedButton = document.querySelector('.finishedButton');
let finishedWindow = document.querySelector('.finishedWindow');

function  addTask() {
    let tea = ' and tea.'
    let task = document.createElement('div');
    task.classList.add('taskCard');
    // document.querySelector('.wrapper2').appendChild(task);
    tea = input.value;
    document.querySelector('.wrapper2').insertAdjacentHTML('beforeend', `<div class="taskCard">
        <div class="taskCardText">${tea}</div>
        <div class="taskCardDate">Today</div>
        <div class="taskCardControls">
                        <div class="taskCardControlsFinished">
                            <i title = 'done' class="far fa-check-circle"></i>
                        </div>
                        <div class="taskCardControlsLater">
                            <i title = 'later' class="fas fa-hourglass-start"></i>
                        </div>
                        <div class="taskCardControlsClose">
                            <i title = 'close' class="fas fa-times"></i>
                        </div>
         </div>
      </div>`);
    currentCard = document.querySelectorAll('.taskCard')
    console.log(input.value)
    input.value = '';
    input.focus();
    controlElements();

}


function clear() {
    currentCard.forEach( (item) => {
        item.style.display = 'none';
        input.focus();
    })
}

document.querySelector('.add').addEventListener('click', () => {
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

function controlElements() {
    // let icon = document.querySelectorAll('i')
    // icon.forEach( function(item) {
    //     item.addEventListener('click', function(event) {
    //         event.target.style.color = 'red';
    //     })
    // })

    let buttonClose = document.querySelectorAll('.taskCardControlsClose')
        buttonClose.forEach( function(item){
            item.addEventListener('click', function(event) {
                event.target.style.color = 'yellow';
                event.target.parentNode.parentNode.style.display = 'none';

                // alert(event.target.parentNode.className);

            })
    })
}

controlElements()

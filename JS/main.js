let input = document.querySelector('input');
let currentCard = document.querySelectorAll('.taskCard');
let clearCards = document.querySelector('.clearButton');
let laterButton = document.querySelector('.laterButton');
let laterWindow = document.querySelector('.laterWindow');
let finishedButton = document.querySelector('.finishedButton');
let finishedWindow = document.querySelector('.finishedWindow');
let when = document.querySelector('.choseDateSelectMain').innerHTML;

function  addTask() {
    let tea = input.value;

    document.querySelector('.wrapper2').insertAdjacentHTML('beforeend', `<div class="taskCard">
        <div class="taskCardText">${tea}</div>
        <div class="taskCardDate">${when}</div>
        <div class="taskCardControls">
            <div class="taskCardControlsFinished" onclick="controlFinishedElements2(this)">
                <i title = 'done' class="far fa-check-circle test" ></i>
            </div>
            <div class="taskCardControlsLater" onclick="controlLaterElements2(this)">
                <i title = 'later' class="fas fa-hourglass-start test" ></i>
            </div>
            <div class="taskCardControlsClose" onclick="controlCloseElements2(this)">
                <i title = 'close' class="fas fa-times test"></i>
            </div>
         </div>
      </div>`);
    currentCard = document.querySelectorAll('.taskCard')
    console.log(input.value)
    input.value = '';
    input.focus();
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

document.querySelector('.laterWindowClose').addEventListener('click', function() {
    laterWindow.style.height = '0%';
})

document.querySelector('.finishedWindowClose').addEventListener('click', function() {
    finishedWindow.style.height = '0%';
})

    function controlCloseElements2(a) {
        a.parentNode.parentNode.remove();
    }

function controlFinishedElements2(a) {
    let finishedContainer = document.querySelector('.finishedTasks')
    let copiedTask = a.parentNode.parentNode.cloneNode(true);
    a.parentNode.parentNode.remove();
    finishedContainer.append(copiedTask);
}

function controlLaterElements2(a) {

    let laterContainer = document.querySelector('.laterTasks')
    let copiedTask = a.parentNode.parentNode.cloneNode(true);
    a.parentNode.parentNode.remove();
    laterContainer.append(copiedTask);
}


function openDropdown(a) {
    let subling1 = a.nextElementSibling;
    subling1.classList.toggle('dropdownOff');
    let subling2 = a.nextElementSibling.nextElementSibling;
    subling2.classList.toggle('dropdownOff');
}

function changePeriod(a) {
    a.parentElement.firstElementChild.innerHTML = a.innerText;
    when = a.innerHTML;

    let periods = document.querySelectorAll('.choseDateSelect');
    periods[1].classList.add('dropdownOff');
    periods[2].classList.add('dropdownOff');
}



//test111


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
    // let task = document.createElement('div');
    // task.classList.add('taskCard');
    // // document.querySelector('.wrapper2').appendChild(task);
    tea = input.value;
    document.querySelector('.wrapper2').insertAdjacentHTML('beforeend', `<div class="taskCard">
        <div class="taskCardText">${tea}</div>
        <div class="taskCardDate">Today</div>
        <div class="taskCardControls">
                        <div class="taskCardControlsFinished" onclick="controlFinishedElements2(this)">
                            <i title = 'done' class="far fa-check-circle test" ></i>
                        </div>
                        <div class="taskCardControlsLater">
                            <i title = 'later' class="fas fa-hourglass-start test"></i>
                        </div>
                        <div class="taskCardControlsClose">
                            <i title = 'close' class="fas fa-times test"></i>
                        </div>
         </div>
      </div>`);
    currentCard = document.querySelectorAll('.taskCard')
    console.log(input.value)
    input.value = '';
    input.focus();
    // controlFinishedElements();
    controlCloselElements(); // да и тут тоже надо разобраться, чтобы функция не вызывалось по миллиону раз.

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
    // finishedWindow.style.transform = 'scaleY(1)';
    finishedWindow.style.height = '100%';
})

function controlCloselElements() {
    // let icon = document.querySelectorAll('i')
    // icon.forEach( function(item) {
    //     item.addEventListener('click', function(event) {
    //         event.target.style.color = 'red';
    //     })
    // })


    let buttonClose = document.querySelectorAll('.taskCardControlsClose')
        buttonClose.forEach( function(item){
            item.addEventListener('click', function(event) {
                // event.stopPropagation();


                event.target.parentNode.parentNode.style.display = 'none';

                // alert(event.target.parentNode.className);

            }, {capture: false});


            let iconClose = document.querySelectorAll('.fa-times')
            iconClose.forEach( function(item) {

                item.addEventListener('click', function(event) {

                        event.target.parentNode.parentNode.parentNode.style.display = 'none';


                    // alert(event.target.classList)
                    event.stopPropagation();


                })

            })
    })
}
controlCloselElements()

//test

function controlFinishedElements2(a) {
    let finishedContainer = document.querySelector('.finishedTasks')
    let copiedTask = a.parentNode.parentNode.cloneNode(true);
    a.parentNode.parentNode.remove();
    finishedContainer.append(copiedTask);
}

//test

// function controlFinishedElements() {
//
//
//
//
//     let buttonFinished = document.querySelectorAll('.taskCardControlsFinished')
//
//     buttonFinished.forEach(function(item) {
//
//         let copyToMove = function(a) {
//
//
//
//             let finishedContainer = document.querySelector('.finishedTasks')
//             let copiedTask = a.cloneNode(true);
//             a.remove();
//             finishedContainer.append(copiedTask);
//
//             // alert(functionCalled)
//
//         }
//
//         item.addEventListener('click', function(event){
//
//
//
//             let myParent = event.target.parentNode.parentNode;
//
//
//             alert('hi i am button')
//             // myParent.style.transform= 'scaleY(1.5)'
//
//             //testing
//             if (event.target.classList.contains('fa-check-circle')) {
//                 event.stopPropagation();
//                 myParent = event.target.parentNode.parentNode.parentNode;
//
//             }
//
//             copyToMove(myParent)
//
//         })
//
//         // let iconFinished = document.querySelectorAll('.fa-check-circle')
//         // iconFinished.forEach(function(item){
//         //
//         //     item.addEventListener('click', function (event){
//         //
//         //
//         //
//         //         event.stopPropagation();
//         //
//         //         let myParent = event.target.parentNode.parentNode.parentNode
//         //         copyToMove(myParent)
//         //
//         //         alert('hi i am icon')
//         //         // myParent.style.transform= 'scaleY(1.5)';
//         //
//         //
//         //     })
//         // })
//     })
//
// }

controlFinishedElements2()


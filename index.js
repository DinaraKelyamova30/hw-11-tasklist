const btn = document.querySelector('.btn');
const addText = document.querySelector('.addText');
const checking = document.querySelector('.check');
const n = document.querySelectorAll('.n');
const hide = document.querySelectorAll('.hide');
const tasks = document.querySelector('.tasks');

function addTaskBtn() {
    if (!addText.value) {
        alert('Пусте поле дадавати не можна');
    } else {
        let newDiv = document.createElement('div');
        newDiv.className = 'hide';
        let newCheck = document.createElement('input');
        newCheck.type = 'checkbox';
        newCheck.id = addText.value;
        newCheck.class = 'n';
        let newLabel = document.createElement('label');
        newLabel.for = addText.value;
        newLabel.textContent = addText.value;
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newLabel);
        checking.appendChild(newDiv);
        addText.value = '';
    }
}

function removeTask(arr) {
    for (let i = 0; i < hide.length; i++) {
        if(hide[i].parentNode){
            hide[i].parentNode.removeChild(hide[i]);
        }
    }
}


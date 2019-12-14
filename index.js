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
        newCheck.classList.add('n');
        newCheck.type = 'checkbox';
        newCheck.id = addText.value;
        newCheck.setAttribute('onclick', 'remove()');
        let newLabel = document.createElement('label');
        newLabel.for = addText.value;
        newLabel.textContent = addText.value;
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newLabel);
        checking.appendChild(newDiv);
        addText.value = '';
    }
}

function remove() {
    if (checking.children.length > 1) {
        checking.removeChild(event.target.parentElement);
    } else {
        alert('Last element!');
        event.target.checked = false;
    }
}

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
        let newLabel = document.createElement('label');
        newLabel.for = addText.value;
        newLabel.textContent = addText.value;
        newDiv.appendChild(newCheck);
        newDiv.appendChild(newLabel);
        checking.appendChild(newDiv);
        addText.value = '';
    }
}

let add = false;
let remove = function () {
    this.parentNode.remove();
};
for (let i = 0; i < n.length; i++) {
    if (add) {
        alert('Останній елемент видаляти не можна');
    } else {
        n[i].addEventListener('click', remove, false);
    }

}
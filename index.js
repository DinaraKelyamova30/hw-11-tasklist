const btn = document.querySelector('.btn');
const addText = document.querySelector('.addText');
const checking = document.querySelector('.check');
const n = document.querySelectorAll('.n');
const hide = document.querySelectorAll('.hide');

function addTask() {
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
}


    n.onclick = function(){
        for(let n = 0; hide.length; i++){
            hide.style.display = 'none';
        }
    }

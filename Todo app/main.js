const inputField = document.querySelector('.input-task');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.filter');
const tasks = document.querySelector('.tasks');
const removeAllBtn = document.querySelector('.clear-tasks');
const msgBox = document.querySelector('.msg');

// All eventListener
form.addEventListener('submit', addTask);
tasks.addEventListener('click', removeItem);
removeAllBtn.addEventListener('click', removeAll);
searchInput.addEventListener('keyup', searchTask);


// function addtask
function addTask(e) {

   if(inputField.value === '') {
      alert('wax kuma qorna');
   }
   else {
    const li = document.createElement('li');
    li.classList = 'task';
    li.appendChild(document.createTextNode(inputField.value));
    
    const icons = document.createElement('div');
    icons.classList = 'icons';

    const remove = document.createElement('i');
    remove.classList = 'remove';
    remove.innerText = '✖';

    const done = document.createElement('i');
    done.classList = 'done';
    done.innerText = '✔';

    icons.appendChild(remove);
    icons.appendChild(done);

    li.appendChild(icons);
    tasks.appendChild(li);
    msgBox.style.display = 'none';
    inputField.value = '';
   }
   e.preventDefault();
}

// delete task 
function removeItem(e) {
    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.classList.contains('done')) {
        e.target.parentElement.parentElement.style.borderLeft = '4px solid #09d334 ';
    }
}

// delete all task

function removeAll(e) {
    if (confirm('Ma hubtaa inaad daleedaysi'))
     while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild);
    }
    
}

// search 

function searchTask(e) {
    const textInput = e.target.value.toLowerCase();

    document.querySelectorAll('.task').forEach(
        function(items) {
            const item = items.firstChild.textContent;
            if(item.toLowerCase().indexOf(textInput) != -1){
                items.style.display = 'block';
            }
            else {
                items.style.display = 'none';
            }
        }
    )

}
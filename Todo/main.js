let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('ToDocontainer');
let inputField = document.getElementById('inputFeild');

addToDoButton.addEventListener("click", () => {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener("dblclick", () => {
        paragraph.remove();
    })
})

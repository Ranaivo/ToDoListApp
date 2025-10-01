const form = document.querySelector('form');
const input = document.querySelector('#taskInput');
const ul = document.querySelector('#taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = '';
    deleteButton.addEventListener('click', function() {
        if (li.parentNode === ul) {
            ul.removeChild(li);
        }
    }); 
});
const form = document.querySelector('form');
const input = document.querySelector('#taskInput');
const ul = document.querySelector('#taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
});
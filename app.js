const form = document.querySelector('form');
const input = document.querySelector('#taskInput');
const ul = document.querySelector('#taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

// Add event listener to checkbox to toggle line-through style
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.fontStyle = 'italic';
        } else {
            li.style.textDecoration = 'none';
            li.style.fontStyle = 'normal';
        }
    }); 
    
    li.appendChild(checkbox);
    input.value = '';
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
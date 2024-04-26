const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
   
    

    li.append(deleteButton);
    todoList.appendChild(li);
    todoInput.value = '';
}

addButton.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text.length > 0) {
        addTodo(text);
    }
});

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const text = todoInput.value.trim();
        if (text.length > 0) {
            addTodo(text);
        }
    }
});
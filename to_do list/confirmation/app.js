// Function to add a new task to the ToDo list
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();
    
    if (task === '') return; // Ignore empty tasks
    
    // Get existing tasks from localStorage (if any)
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // Add the new task to the array
    todos.push(task);

    // Save the updated array back to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Clear the input field, update the ToDo list, and add event listeners to delete buttons
    todoInput.value = '';
    updateTodoList();
}

// Function to delete a task from the ToDo list and localStorage
function deleteTodo(index) {
    // Get tasks from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Remove the task at the specified index from the array
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }

    // Save the updated array back to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    // Update the ToDo list to reflect the changes
    updateTodoList();
}

// Function to update the ToDo list displayed on the page
function updateTodoList() {
    const todoList = document.getElementById('todoList');

    // Get tasks from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Clear the existing list
    todoList.innerHTML = '';

    // Create and append list items for each task with a "Delete" button
    todos.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        // Create a delete button for each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', () => {
            deleteTodo(index);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Call the updateTodoList function when the page loads
updateTodoList();

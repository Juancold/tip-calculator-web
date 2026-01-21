const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa.");
        return; 
    }

    const li = document.createElement('li');
    li.className = 'task-item'; 

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✓</button>
            <button class="delete-btn">X</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}



addTaskBtn.addEventListener('click', addTask);


taskList.addEventListener('click', function(event) {
    
    const clickedElement = event.target;

    if (clickedElement.classList.contains('complete-btn')) {
        
        const taskItem = clickedElement.closest('.task-item');
        
       
        taskItem.classList.toggle('completed');
    }

    if (clickedElement.classList.contains('delete-btn')) {
        
        const taskItem = clickedElement.closest('.task-item');

        
        taskItem.remove();
    }

});

const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

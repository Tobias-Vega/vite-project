import { deleteTask, updateTask } from "./services";

export const renderTask = (task) => {
    const $taskContanier = document.createElement('div');
    $taskContanier.classList.add('task-item', 'border', 'rounded', 'min-w-60', 'm-3');

    const $taskTitle = document.createElement('h2');

    const $taskDescription = document.createElement('p');
    const $taskISCompleted = document.createElement('input')
    const $taskDelete = document.createElement('button')

    const $taskPut = document.createElement('button')

    $taskTitle.classList.add('task-title', 'flex', 'justify-center')
    $taskTitle.textContent = task.title
    $taskDelete.classList.add('button-delete', 'border', 'rounded', 'bg-red-700', 'items-center', 'flex', 'relative', 'left-10')
    $taskPut.classList.add('button-update')

    if (task.isCompleted) {
        $taskTitle.style.textDecoration = 'line-through'
    }

    $taskContanier.appendChild($taskTitle)

    $taskDescription.classList.add('task-description');
    $taskDescription.textContent = task.description;

    if(task.isCompleted) {
        $taskDescription.style.textDecoration = 'line-through';
    }

    $taskContanier.appendChild($taskDescription);

    $taskISCompleted.type = 'checkbox';
    $taskISCompleted.checked = task.isCompleted;

    $taskISCompleted.addEventListener('change', (e) => {
        task.isCompleted = e.target.checked;
        $taskTitle.style.textDecoration = task.isCompleted ? 'line-through' : 'none';
        $taskDescription.style.textDecoration = task.isCompleted ? 'line-through' : 'none';

        updateTask(task.id, {
            title: task.title,
            description: task.description,
            isCompleted: task.isCompleted,
        });
    });

    $taskContanier.appendChild($taskISCompleted);

    $taskDelete.textContent = 'Delete';

    $taskDelete.addEventListener('click', () => {
        deleteTask(task.id).then(() => {
            $taskContanier.remove()
        });
    });

    $taskContanier.appendChild($taskDelete);

    return $taskContanier
} 
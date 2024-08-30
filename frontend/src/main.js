import './styles/style.css'

import { getAllTasks, postTask } from './services'
import { renderTask } from './task'
import { Header } from './components/header';
import { LandingPage } from './pages/landing';
import { LoginPage } from './pages/login';

const pathname = window.location.pathname;


const $app = document.getElementById('app');
$app.appendChild(Header())
const $taskForm = document.getElementById('create-task-form');



if (pathname === '/') $app.appendChild(LandingPage())
if (pathname === '/login') $app.appendChild(LoginPage())

// $taskForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const $title = document.getElementById('input-title')
//     const $description = document.getElementById('input-description')
//     const $isCompleted = document.getElementById('input-is-complete')

//     const $newTask = {
//         title: $title.value,
//         description: $description.value,
//         isCompleted: $isCompleted.checked,
//     };

//     postTask($newTask).then((res) => {
//         $app.appendChild(renderTask(res));
//         e.target.reset();
//     });

    
// });

// document.addEventListener('DOMContentLoaded', () => {
//     getAllTasks().then((tasks) => {
//         tasks.forEach((task) => {
//             $app.appendChild(renderTask(task))
//         })
//     })
// })

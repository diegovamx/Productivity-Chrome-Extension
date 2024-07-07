let myTasks = []
const input = document.getElementById('input-el')
const saveBtn = document.getElementById('save-btn')
const clearBtn = document.getElementById('clear-btn')
const tasksList = document.getElementById('tasks-el')
const tasksFromLocalStorage = JSON.parse(localStorage.getItem('myTasks'))
const checkBtn = document.getElementsByClassName('task-item')


if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage
    render(myTasks)
}
saveBtn.addEventListener('click', () => {
    if (input.value) {
        tasksList.innerHTML = ''
        myTasks.push(input.value)
        localStorage.setItem('myTasks', JSON.stringify(myTasks))
        input.value = ''
        render(myTasks)
    } else {
        alert('Please enter a task.')
    }
})

clearBtn.addEventListener('click', () => {
    myTasks = []
    localStorage.clear()
    tasksList.innerHTML = ''
    render(myTasks)
})



function deleteTask() {
    for (let i = 0; i < checkBtn.length; i++) {
        if (checkBtn[i].checked) {
            checkBtn[i].remove();

            myTasks.splice(i, 1)
            localStorage.setItem('myTasks', JSON.stringify(myTasks))
            tasksList.innerHTML = ''
            i--;

            render(myTasks)
        }
    }
}

tasksList.addEventListener('click', deleteTask)



function render(tasks) {
    let taskItems = ''
    for (let i = 0; i < tasks.length; i++) {
        taskItems += `
        <li>
            <label>
                <input type="checkbox" class="task-item">${tasks[i]}
            </label>  
        </li>`
    }
    tasksList.innerHTML = taskItems

    if (tasks.length === 0) {
        tasksList.innerHTML = ' <p id="empty-alert"> Great job! 🎉 No pending tasks. </p>'
    }
}

const nameBtn = document.getElementById('name-btn')
const nameInput = document.getElementById('name-input')
const nameFromLocalStorage = localStorage.getItem('name')
const title = document.getElementById('title-el')
const extensionContainer = document.getElementById('extension-container')
const nameContainer = document.getElementById('name-container')

if (nameFromLocalStorage) {
    nameContainer.style.display = 'none'
    extensionContainer.style.display = 'flex'
    extensionContainer.style.flexDirection = 'column'    
    title.textContent = `${nameFromLocalStorage}'s Tasks`
}

nameBtn.addEventListener('click', function () { 
    let name = ""
    if (nameInput.value) {
        name = nameInput.value
        localStorage.setItem('name', name)
        title.textContent = `${name}'s Tasks`
        nameContainer.style.display = 'none'
        extensionContainer.style.display = 'flex'
        extensionContainer.style.flexDirection = 'column'

    }
})



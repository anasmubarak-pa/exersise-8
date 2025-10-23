let newTask =<HTMLInputElement> document.querySelector('.task-ip')
let taskList =<HTMLDivElement> document.querySelector('.task-list')
let pending = document.querySelectorAll('.pending-task')

;(function loadlocalstorage(){
    if(localStorage.getItem('alltasks'))
    {
        taskList.innerHTML = JSON.stringify(localStorage.getItem('alltasks'))
        addclickevent()
    }
})()

function appendTask()
{
    taskList.innerHTML+=`<li class="pending-task">${newTask.value}</li>`
    addclickevent()
    localStorage.setItem('alltasks',JSON.stringify(taskList.innerHTML))
}

function strike(e:Event)
{
    if(e.target instanceof Element)
    {
        e.target.innerHTML = `<Strike>${e.target.innerHTML}</Strike>`
        e.target.classList.remove('pending-task')
        localStorage.setItem('alltasks',JSON.stringify(taskList.innerHTML))
    }
    
}

function filterTask()
{
    taskList.classList.toggle('filtered')
    if(taskList.classList.contains('filtered'))
    {
        for(let task of taskList.childNodes)
        {
            // console.log(task)
            if(task instanceof HTMLElement)
            {
                if((!task.classList.contains('pending-task')))
                {
                    task.style.display = 'none'
                }
            }   
        }
    }
    else{
        for(let task of taskList.childNodes as NodeListOf <ChildNode>)
        {
            if(task instanceof HTMLElement)
            {
                task.style.display = ''
            }
        }
    }
    addclickevent()
    localStorage.setItem('alltasks',JSON.stringify(taskList.innerHTML))
}

function addclickevent()
{
    document.querySelectorAll(`.pending-task`).forEach(element => {
        element.addEventListener('click',(e)=>strike(e))
    });
}
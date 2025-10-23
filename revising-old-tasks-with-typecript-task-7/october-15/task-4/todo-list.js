var newTask = document.querySelector('.task-ip');
var taskList = document.querySelector('.task-list');
var pending = document.querySelectorAll('.pending-task');
(function loadlocalstorage() {
    if (localStorage.getItem('alltasks')) {
        taskList.innerHTML = JSON.parse(localStorage.getItem('alltasks'));
        addclickevent();
    }
})();
function appendTask() {
    taskList.innerHTML += "<li class=\"pending-task\">".concat(newTask.value, "</li>");
    addclickevent();
    localStorage.setItem('alltasks', JSON.stringify(taskList.innerHTML));
}
function strike(e) {
    if (e.target instanceof Element) {
        e.target.innerHTML = "<Strike>".concat(e.target.innerHTML, "</Strike>");
        e.target.classList.remove('pending-task');
        localStorage.setItem('alltasks', JSON.stringify(taskList.innerHTML));
    }
}
function filterTask() {
    taskList.classList.toggle('filtered');
    if (taskList.classList.contains('filtered')) {
        for (var _i = 0, _a = taskList.childNodes; _i < _a.length; _i++) {
            var task = _a[_i];
            // console.log(task)
            if (task instanceof HTMLElement) {
                if ((!task.classList.contains('pending-task'))) {
                    task.style.display = 'none';
                }
            }
        }
    }
    else {
        for (var _b = 0, _c = taskList.childNodes; _b < _c.length; _b++) {
            var task = _c[_b];
            if (task instanceof HTMLElement) {
                task.style.display = '';
            }
        }
    }
    addclickevent();
    localStorage.setItem('alltasks', JSON.stringify(taskList.innerHTML));
}
function addclickevent() {
    document.querySelectorAll(".pending-task").forEach(function (element) {
        element.addEventListener('click', function (e) { return strike(e); });
    });
}

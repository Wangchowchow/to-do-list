/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todoInput = document.querySelector('.todo-input');\nconst todoButton = document.querySelector('.todo-button');\nconst todoList = document.querySelector('.todo-list');\nconst filterOption = document.querySelector('.filter-todo');\n\ndocument.addEventListener('DOMContentLoaded', getTodos);\ntodoButton.addEventListener('click', addTodo);\ntodoList.addEventListener('click', deleteCheck);\nfilterOption.addEventListener('click', filterTodo);\n\nfunction addTodo(event){\n    event.preventDefault();\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todo');\n\n    const newTodo = document.createElement('li');\n    newTodo.textContent = todoInput.value;\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n\n    saveLocalTodos(todoInput.value);\n\n    const completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=\"fa-solid fa-check\"></i>';\n    completedButton.classList.add('complete-btn');\n    todoDiv.appendChild(completedButton);\n\n    const trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fa-solid fa-trash-can\"></i>';\n    trashButton.classList.add('trash-btn');\n    todoDiv.appendChild(trashButton);\n\n    todoList.appendChild(todoDiv);\n\n    todoInput.value = '';\n}\n\nfunction deleteCheck(e){\n    const item = e.target;\n\n    if (item.classList[0] === 'trash-btn'){\n        const todo = item.parentElement;\n        todo.classList.add('fall');\n        removeLocalTodos(todo);\n        todo.addEventListener('transitionend',function(){\n            todo.remove();\n        })\n    }\n    if (item.classList[0] === 'complete-btn'){\n        const todo = item.parentElement;\n        todo.classList.toggle('completed');\n    }\n}\n\nfunction filterTodo(e){\n    const todos = todoList.childNodes;\n    todos.forEach(function(todo){\n        switch(e.target.value){\n            case \"all\":\n                todo.style.display = 'flex';\n                break;\n            case \"completed\":\n                if(todo.classList.contains('completed')){\n                    todo.style.display = 'flex';\n                }\n                else {\n                    todo.style.display = 'none';\n                }\n                break;\n            case \"uncompleted\":\n                if(!todo.classList.contains('completed')){\n                    todo.style.display = 'flex';\n                }\n                else{\n                    todo.style.display = 'none';\n                }\n                break;\n        }\n    })\n}\n\nfunction saveLocalTodos(todo){\n    let todos;\n    if(localStorage.getItem('todos') === null){\n        todos = [];\n    }\n    else {\n        todos = JSON.parse(localStorage.getItem('todos'));\n    }\n\n    todos.push(todo);\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\nfunction getTodos(){\n    let todos;\n    if(localStorage.getItem('todos') === null){\n        todos = [];\n    }\n    else {\n        todos = JSON.parse(localStorage.getItem('todos'));\n    }\n    todos.forEach(function(todo){\n        const todoDiv = document.createElement('div');\n        todoDiv.classList.add('todo');\n\n        const newTodo = document.createElement('li');\n        newTodo.textContent = todo;\n        newTodo.classList.add('todo-item');\n        todoDiv.appendChild(newTodo);\n\n        const completedButton = document.createElement('button');\n        completedButton.innerHTML = '<i class=\"fa-solid fa-check\"></i>';\n        completedButton.classList.add('complete-btn');\n        todoDiv.appendChild(completedButton);\n\n        const trashButton = document.createElement('button');\n        trashButton.innerHTML = '<i class=\"fa-solid fa-trash-can\"></i>';\n        trashButton.classList.add('trash-btn');\n        todoDiv.appendChild(trashButton);\n\n        todoList.appendChild(todoDiv);\n    })\n}\n\nfunction removeLocalTodos(todo){\n    let todos;\n    if(localStorage.getItem('todos') === null){\n        todos = [];\n    }\n    else {\n        todos = JSON.parse(localStorage.getItem('todos'));\n    }\n    const todoIndex = todo.children[0].textContent;\n    todos.splice(todos.indexOf(todoIndex), 1);\n    localStorage.setItem('todos', JSON.stringify(todos));\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
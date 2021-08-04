/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name\r\n        this.todos = []\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://buka/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n        this.isCompleted = false\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n\n\n//# sourceURL=webpack://buka/./src/Todo.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocalStorage\": () => (/* binding */ checkLocalStorage),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"fetchTodoForm\": () => (/* binding */ fetchTodoForm),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"setProjectsToStorage\": () => (/* binding */ setProjectsToStorage),\n/* harmony export */   \"getProjectsFromStorage\": () => (/* binding */ getProjectsFromStorage)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\r\n\r\nconst checkLocalStorage = () => {\r\n    let projects = localStorage.getItem('projects')\r\n    if (projects) {\r\n        return true\r\n    } else {\r\n        return false\r\n    }\r\n}\r\n\r\nconst renderProjects = (projects) => {\r\n    const contentTag = document.getElementById('content')\r\n    contentTag.innerHTML = ''\r\n    projects.forEach(project => {\r\n        contentTag.appendChild(renderProject(project))\r\n    })\r\n};\r\n\r\nconst create = (elementName, styles = false, text = false) => {\r\n    const element = document.createElement(elementName);\r\n    if (styles) {\r\n        styles.forEach((style) => {\r\n            element.classList.add(style);\r\n        });\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    return element;\r\n};\r\n\r\nconst renderProject = (project) => {\r\n    const projectDiv = create('div', ['border-2', 'border-red-900', 'px-8', 'py-2', 'flex-1'])\r\n\r\n    const projectTitle = create('h2', ['text-red-900', 'text-3xl', 'font-semibold'], `Project: ${project.name}`)\r\n\r\n    const addTodoBtn = create('button', ['px-4', 'py-3', 'bg-blue-900', 'text-white', 'my-2'], 'Add Todo')\r\n\r\n    const todos = createTodos(project.todos)\r\n\r\n    addTodoBtn.addEventListener(\"click\", () => {\r\n        localStorage.setItem('target', project.name)\r\n        const todoModal = document.getElementById('todo-modal');\r\n        todoModal.style.display = 'block';\r\n    })\r\n\r\n\r\n\r\n    projectDiv.appendChild(projectTitle)\r\n    // render todo\r\n    todos.setAttribute('id', project.name.replace(/\\s/g, '-'))\r\n\r\n    projectDiv.appendChild(todos)\r\n\r\n    projectDiv.appendChild(addTodoBtn)\r\n\r\n    return projectDiv\r\n}\r\n// todoDiv.appendChild()\r\n\r\nconst createTodo = (todo) => {\r\n    let todoDiv\r\n    todoDiv = create('div', ['border-2', 'rounded-lg', 'p-3'])\r\n    //\r\n    const todoHeader = create('div', ['flex', 'justify-between', 'items-center'])\r\n    const title = create('div', ['text-lg', 'font-bold'], todo.title)\r\n    if (todo.isCompleted) {\r\n        title.classList.add('line-through')\r\n    }\r\n    const btnCont = create('div')\r\n    const editBtn = create('i', ['cursor-pointer', 'fas', 'fa-edit', 'text-2xl', 'mx-1', 'text-green-900'])\r\n    const markBtn = create('i', ['cursor-pointer', 'fas', 'fa-check', 'text-2xl', 'mx-1', 'text-blue-900'])\r\n    const deleteBtn = create('i', ['cursor-pointer', 'fas', 'fa-times', 'text-2xl', 'mx-1', 'text-red-500'])\r\n    //\r\n    editBtn.addEventListener('click', editTodo)\r\n    markBtn.addEventListener('click', markTodo)\r\n    deleteBtn.addEventListener('click', deleteTodo)\r\n    //\r\n    todoHeader.appendChild(title)\r\n    btnCont.appendChild(editBtn)\r\n    btnCont.appendChild(markBtn)\r\n    btnCont.appendChild(deleteBtn)\r\n    todoHeader.appendChild(btnCont)\r\n    todoDiv.appendChild(todoHeader)\r\n    //\r\n    todoDiv.appendChild(create('div', [], todo.description))\r\n    todoDiv.appendChild(create('div', [], todo.dueDate))\r\n    todoDiv.appendChild(create('div', [], todo.priority))\r\n    return todoDiv\r\n}\r\n\r\nconst createTodos = (todos) => {\r\n    const todosDiv = create('div', ['flex', 'flex-col', 'gap-1'])\r\n    todos.forEach(todo => {\r\n        todosDiv.appendChild(createTodo(todo))\r\n    })\r\n\r\n    return todosDiv\r\n}\r\n\r\nconst fetchTodoForm = () => {\r\n    const title = document.getElementById('todo-title').value\r\n    const description = document.getElementById('todo-desc').value\r\n    const dueDate = document.getElementById('todo-date').value\r\n    const pE = document.getElementById('priority')\r\n    const priority = pE.options[pE.selectedIndex].text;\r\n    return { title, description, dueDate, priority }\r\n}\r\n\r\nconst setProjectsToStorage = (projects) => {\r\n    localStorage.setItem('projects', JSON.stringify(projects))\r\n}\r\n\r\nconst getProjectsFromStorage = (projects) => {\r\n    return JSON.parse(localStorage.getItem('projects'))\r\n}\r\n\r\nconst deleteTodo = (e) => {\r\n    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText\r\n    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText\r\n    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)\r\n    const projects = getProjectsFromStorage()\r\n    const projectIndex = projects.findIndex(project => project.name === projectName)\r\n    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)\r\n\r\n    projects[projectIndex].todos.splice(todoIndex, 1)\r\n    setProjectsToStorage(projects)\r\n    renderProjects(projects)\r\n}\r\n\r\nconst markTodo = (e) => {\r\n    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText\r\n    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText\r\n    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)\r\n    const projects = getProjectsFromStorage()\r\n    const projectIndex = projects.findIndex(project => project.name === projectName)\r\n    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)\r\n\r\n    projects[projectIndex].todos[todoIndex].isCompleted = !projects[projectIndex].todos[todoIndex].isCompleted\r\n    setProjectsToStorage(projects)\r\n    renderProjects(projects)\r\n}\r\n\r\nconst editTodo = (e) => {\r\n    // console.log(e.currentTarget.parentNode.parentNode.innerText);\r\n    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText\r\n    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText\r\n    const time = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerText\r\n    const good = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText\r\n    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)\r\n    const projects = getProjectsFromStorage()\r\n    const projectIndex = projects.findIndex(project => project.name === projectName)\r\n    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)\r\n\r\n    const editTodoModal = document.getElementById('edit-modal')\r\n    const closeProjectModal = document.getElementById('edit-close-icon');\r\n    closeProjectModal.onclick = () => {\r\n        editTodoModal.style.display = 'none';\r\n    };\r\n    editTodoModal.style.display = 'block';\r\n    window.onclick = (event) => {\r\n        if (event.target === editTodoModal) {\r\n            editTodoModal.style.display = 'none';\r\n        }\r\n    };\r\n\r\n    document.getElementById('edit-title').value = title\r\n    document.getElementById('edit-desc').value = desc\r\n    document.getElementById('edit-date').value = time\r\n    document.getElementById('edit-priority').value = good\r\n\r\n\r\n\r\n    document.getElementById('edit-todo-form').addEventListener('click', () => {\r\n        const pE = document.getElementById('edit-priority')\r\n        const priority = pE.options[pE.selectedIndex].text;\r\n        projects[projectIndex].todos[todoIndex] = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(\r\n            document.getElementById('edit-title').value,\r\n            document.getElementById('edit-desc').value,\r\n            document.getElementById('edit-date').value,\r\n            priority)\r\n\r\n        setProjectsToStorage(projects)\r\n        renderProjects(projects)\r\n    })\r\n\r\n\r\n}\r\n\r\nconst saveTodo = (pi, ti) => {\r\n    const title = document.getElementById('edit-title').value\r\n    const description = document.getElementById('edit-desc').value\r\n    const dueDate = document.getElementById('edit-date').value\r\n    const pE = document.getElementById('edit-priority')\r\n    const priority = pE.options[pE.selectedIndex].text;\r\n    const projects = getProjectsFromStorage()\r\n    projects[pi].todos[ti] = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(title, description, dueDate, priority)\r\n    console.log(pi, ti);\r\n    console.log(title, description, dueDate, priority);\r\n    setProjectsToStorage(projects)\r\n    renderProjects(projects)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://buka/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\n\r\nlet projects = []\r\n\r\nif (localStorage.projects) {\r\n    projects = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromStorage)()\r\n} else {\r\n    console.log(localStorage.projects);\r\n    const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('default project')\r\n    const defaultTodoOne = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('Cut chicken', 'do something', '2021-08-02', 'High')\r\n    const defaultTodoTwo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('boil water', 'do something', '2021-08-03', 'High')\r\n\r\n    defaultProject.todos.push(defaultTodoOne)\r\n    defaultProject.todos.push(defaultTodoTwo)\r\n\r\n\r\n    projects.push(defaultProject)\r\n    console.log(projects);\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects)\r\n}\r\n\r\n\r\nconst contentTag = document.getElementById('content')\r\n\r\nconst renderProjects = (projects) => {\r\n    contentTag.innerHTML = ''\r\n    projects.forEach(project => {\r\n        contentTag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.renderProject)(project))\r\n    })\r\n};\r\n\r\nrenderProjects(projects)\r\n\r\n// Initial load\r\n;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromStorage)()\r\n\r\n// add project\r\nconst addProjectBtn = document.getElementById('project-modal-btn');\r\nconst projectModal = document.getElementById('project-modal');\r\nconst closeProjectModal = document.getElementById('project-close-icon');\r\n\r\naddProjectBtn.onclick = () => {\r\n    projectModal.style.display = 'block';\r\n};\r\ncloseProjectModal.onclick = () => {\r\n    projectModal.style.display = 'none';\r\n};\r\nwindow.onclick = (event) => {\r\n    if (event.target === projectModal) {\r\n        projectModal.style.display = 'none';\r\n    }\r\n};\r\nconst addProject = (e) => {\r\n    e.preventDefault();\r\n    const projectName = document.getElementById('project-name').value;\r\n    const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(projectName)\r\n    projects.push(newProject)\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects)\r\n    contentTag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.renderProject)(newProject))\r\n    projectModal.style.display = 'none';\r\n\r\n}\r\nconst projectForm = document.getElementById('add-project');\r\nprojectForm.addEventListener('submit', addProject);\r\n// add todo\r\n\r\nconst todoModal = document.getElementById('todo-modal');\r\nconst closeTodoModal = document.getElementById('todo-close-icon');\r\n\r\ncloseTodoModal.onclick = () => {\r\n    todoModal.style.display = 'none';\r\n};\r\nwindow.onclick = (event) => {\r\n    if (event.target === todoModal) {\r\n        todoModal.style.display = 'none';\r\n    }\r\n};\r\nconst addTodo = (e) => {\r\n    e.preventDefault();\r\n    const data = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.fetchTodoForm)()\r\n\r\n    const projectIndex = projects.findIndex(project => project.name === localStorage.target)\r\n\r\n    const project = projects[projectIndex]\r\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default(data.title, data.description, data.dueDate, data.priority)\r\n    project.todos.push(todo)\r\n\r\n    document.getElementById(project.name.replace(/\\s/g, '-')).appendChild(\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createTodo)(todo)\r\n    )\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects)\r\n    renderProjects(projects)\r\n}\r\nconst todoForm = document.getElementById('add-todo');\r\ntodoForm.addEventListener('submit', addTodo);\r\n\r\n\r\n//test\r\n\n\n//# sourceURL=webpack://buka/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
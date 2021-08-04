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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.todos = [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://buka/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.isCompleted = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://buka/./src/Todo.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocalStorage\": () => (/* binding */ checkLocalStorage),\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"fetchTodoForm\": () => (/* binding */ fetchTodoForm),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"setProjectsToStorage\": () => (/* binding */ setProjectsToStorage),\n/* harmony export */   \"getProjectsFromStorage\": () => (/* binding */ getProjectsFromStorage)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\nlet editTodo; let deleteTodo; let\n  markTodo;\n\nconst checkLocalStorage = () => {\n  const projects = localStorage.getItem('projects');\n  if (projects) {\n    return true;\n  }\n  return false;\n};\n\nconst create = (elementName, styles = false, text = false) => {\n  const element = document.createElement(elementName);\n  if (styles) {\n    styles.forEach((style) => {\n      element.classList.add(style);\n    });\n  }\n  if (text) {\n    element.textContent = text;\n  }\n  return element;\n};\n\nconst createTodo = (todo) => {\n  const todoDiv = create('div', ['border-2', 'rounded-lg', 'p-3']);\n  //\n  const todoHeader = create('div', ['flex', 'justify-between', 'items-center']);\n  const title = create('div', ['text-lg', 'font-bold'], todo.title);\n  if (todo.isCompleted) {\n    title.classList.add('line-through');\n  }\n  const btnCont = create('div');\n  const editBtn = create('i', ['cursor-pointer', 'fas', 'fa-edit', 'text-2xl', 'mx-1', 'text-green-900']);\n  const markBtn = create('i', ['cursor-pointer', 'fas', 'fa-check', 'text-2xl', 'mx-1', 'text-blue-900']);\n  const deleteBtn = create('i', ['cursor-pointer', 'fas', 'fa-times', 'text-2xl', 'mx-1', 'text-red-500']);\n  //\n  editBtn.addEventListener('click', editTodo);\n  markBtn.addEventListener('click', markTodo);\n  deleteBtn.addEventListener('click', deleteTodo);\n  //\n  todoHeader.appendChild(title);\n  btnCont.appendChild(editBtn);\n  btnCont.appendChild(markBtn);\n  btnCont.appendChild(deleteBtn);\n  todoHeader.appendChild(btnCont);\n  todoDiv.appendChild(todoHeader);\n  //\n  todoDiv.appendChild(create('div', [], todo.description));\n  todoDiv.appendChild(create('div', [], todo.dueDate));\n  todoDiv.appendChild(create('div', [], todo.priority));\n  return todoDiv;\n};\n\nconst createTodos = (todos) => {\n  const todosDiv = create('div', ['flex', 'flex-col', 'gap-1']);\n  todos.forEach((todo) => {\n    todosDiv.appendChild(createTodo(todo));\n  });\n\n  return todosDiv;\n};\n\nconst renderProject = (project) => {\n  const projectDiv = create('div', ['border-2', 'border-red-900', 'px-8', 'py-2', 'flex-1']);\n\n  const projectTitle = create('h2', ['text-red-900', 'text-3xl', 'font-semibold'], `Project: ${project.name}`);\n\n  const addTodoBtn = create('button', ['px-4', 'py-3', 'bg-blue-900', 'text-white', 'my-2'], 'Add Todo');\n\n  const todos = createTodos(project.todos);\n\n  addTodoBtn.addEventListener('click', () => {\n    localStorage.setItem('target', project.name);\n    const todoModal = document.getElementById('todo-modal');\n    todoModal.style.display = 'block';\n  });\n\n  projectDiv.appendChild(projectTitle);\n  // render todo\n  todos.setAttribute('id', project.name.replace(/\\s/g, '-'));\n\n  projectDiv.appendChild(todos);\n\n  projectDiv.appendChild(addTodoBtn);\n\n  return projectDiv;\n};\nconst renderProjects = (projects) => {\n  const contentTag = document.getElementById('content');\n  contentTag.innerHTML = '';\n  projects.forEach((project) => {\n    contentTag.appendChild(renderProject(project));\n  });\n};\n\nconst fetchTodoForm = () => {\n  const title = document.getElementById('todo-title').value;\n  const description = document.getElementById('todo-desc').value;\n  const dueDate = document.getElementById('todo-date').value;\n  const pE = document.getElementById('priority');\n  const priority = pE.options[pE.selectedIndex].text;\n  return {\n    title, description, dueDate, priority,\n  };\n};\n\nconst setProjectsToStorage = (projects) => {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\n\nconst getProjectsFromStorage = () => JSON.parse(localStorage.getItem('projects'));\n\ndeleteTodo = (e) => {\n  const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText;\n  const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText;\n  const fam = e.currentTarget.parentNode.parentNode.parentNode;\n  const projectName = fam.parentNode.parentNode.firstChild.innerText.substring(9);\n  const projects = getProjectsFromStorage();\n  const pi = projects.findIndex((project) => project.name === projectName);\n  const ti = projects[pi].todos.findIndex((t) => t.title === title && t.description === desc);\n\n  projects[pi].todos.splice(ti, 1);\n  setProjectsToStorage(projects);\n  renderProjects(projects);\n};\n\nmarkTodo = (e) => {\n  const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText;\n  const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText;\n  const fam = e.currentTarget.parentNode.parentNode.parentNode;\n  const projectName = fam.parentNode.parentNode.firstChild.innerText.substring(9);\n  const projects = getProjectsFromStorage();\n  const pi = projects.findIndex((project) => project.name === projectName);\n  const ti = projects[pi].todos.findIndex((t) => t.title === title && t.description === desc);\n\n  projects[pi].todos[ti].isCompleted = !projects[pi].todos[ti].isCompleted;\n  setProjectsToStorage(projects);\n  renderProjects(projects);\n};\n\neditTodo = (e) => {\n  const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText;\n  const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText;\n  const fam = e.currentTarget.parentNode.parentNode;\n  const time = fam.parentNode.firstChild.nextSibling.nextSibling.innerText;\n  const good = fam.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText;\n  const projectName = fam.parentNode.parentNode.parentNode.firstChild.innerText.substring(9);\n  const projects = getProjectsFromStorage();\n  const pi = projects.findIndex((project) => project.name === projectName);\n  const ti = projects[pi].todos.findIndex((t) => t.title === title && t.description === desc);\n\n  const editTodoModal = document.getElementById('edit-modal');\n  const closeProjectModal = document.getElementById('edit-close-icon');\n  closeProjectModal.onclick = () => {\n    editTodoModal.style.display = 'none';\n  };\n  editTodoModal.style.display = 'block';\n  window.onclick = (event) => {\n    if (event.target === editTodoModal) {\n      editTodoModal.style.display = 'none';\n    }\n  };\n\n  document.getElementById('edit-title').value = title;\n  document.getElementById('edit-desc').value = desc;\n  document.getElementById('edit-date').value = time;\n  document.getElementById('edit-priority').value = good;\n\n  document.getElementById('edit-todo-form').addEventListener('click', () => {\n    const pE = document.getElementById('edit-priority');\n    const priority = pE.options[pE.selectedIndex].text;\n    projects[pi].todos[ti] = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(\n      document.getElementById('edit-title').value,\n      document.getElementById('edit-desc').value,\n      document.getElementById('edit-date').value,\n      priority,\n    );\n\n    setProjectsToStorage(projects);\n    renderProjects(projects);\n  });\n};\n\n\n\n\n\n//# sourceURL=webpack://buka/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\nlet projects = [];\n\nif (localStorage.projects) {\n  projects = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromStorage)();\n} else {\n  const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('default project');\n  const defaultTodoOne = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('Say Hi to Dad', 'Make breakfast and comute', '2021-08-02', 'High');\n  const defaultTodoTwo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default('Buy needed food', 'Go to fish market and buy some fish', '2021-08-03', 'Normal');\n\n  defaultProject.todos.push(defaultTodoOne);\n  defaultProject.todos.push(defaultTodoTwo);\n\n  projects.push(defaultProject);\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects);\n}\n\nconst contentTag = document.getElementById('content');\n\nconst renderProjects = (projects) => {\n  contentTag.innerHTML = '';\n  projects.forEach((project) => {\n    contentTag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.renderProject)(project));\n  });\n};\n\nrenderProjects(projects);\n\n// Initial load\n(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getProjectsFromStorage)();\n\n// add project\nconst addProjectBtn = document.getElementById('project-modal-btn');\nconst projectModal = document.getElementById('project-modal');\nconst closeProjectModal = document.getElementById('project-close-icon');\n\naddProjectBtn.onclick = () => {\n  projectModal.style.display = 'block';\n};\ncloseProjectModal.onclick = () => {\n  projectModal.style.display = 'none';\n};\nwindow.onclick = (event) => {\n  if (event.target === projectModal) {\n    projectModal.style.display = 'none';\n  }\n};\nconst addProject = (e) => {\n  e.preventDefault();\n  const projectName = document.getElementById('project-name').value;\n  const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default(projectName);\n  projects.push(newProject);\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects);\n  contentTag.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.renderProject)(newProject));\n  projectModal.style.display = 'none';\n};\nconst projectForm = document.getElementById('add-project');\nprojectForm.addEventListener('submit', addProject);\n// add todo\n\nconst todoModal = document.getElementById('todo-modal');\nconst closeTodoModal = document.getElementById('todo-close-icon');\n\ncloseTodoModal.onclick = () => {\n  todoModal.style.display = 'none';\n};\nwindow.onclick = (event) => {\n  if (event.target === todoModal) {\n    todoModal.style.display = 'none';\n  }\n};\nconst addTodo = (e) => {\n  e.preventDefault();\n  const data = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.fetchTodoForm)();\n\n  const projectIndex = projects.findIndex((project) => project.name === localStorage.target);\n\n  const project = projects[projectIndex];\n  const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__.default(data.title, data.description, data.dueDate, data.priority);\n  project.todos.push(todo);\n\n  document.getElementById(project.name.replace(/\\s/g, '-')).appendChild(\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createTodo)(todo),\n  );\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.setProjectsToStorage)(projects);\n  renderProjects(projects);\n};\nconst todoForm = document.getElementById('add-todo');\ntodoForm.addEventListener('submit', addTodo);\n\n// test\n\n\n//# sourceURL=webpack://buka/./src/index.js?");

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
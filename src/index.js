import Project from './Project';
import Todo from './Todo';
import {
  renderProject, fetchTodoForm, createTodo, setProjectsToStorage, getProjectsFromStorage,
} from './helpers';

let projects = [];

if (localStorage.projects) {
  projects = getProjectsFromStorage();
} else {
  const defaultProject = new Project('default project');
  const defaultTodoOne = new Todo('Say Hi to Dad', 'Make breakfast and comute', '2021-08-02', 'High');
  const defaultTodoTwo = new Todo('Buy needed food', 'Go to fish market and buy some fish', '2021-08-03', 'Normal');

  defaultProject.todos.push(defaultTodoOne);
  defaultProject.todos.push(defaultTodoTwo);

  projects.push(defaultProject);
  setProjectsToStorage(projects);
}

const contentTag = document.getElementById('content');

const renderProjects = (projects) => {
  contentTag.innerHTML = '';
  projects.forEach((project) => {
    contentTag.appendChild(renderProject(project));
  });
};

renderProjects(projects);

// Initial load
getProjectsFromStorage();

// add project
const addProjectBtn = document.getElementById('project-modal-btn');
const projectModal = document.getElementById('project-modal');
const closeProjectModal = document.getElementById('project-close-icon');

addProjectBtn.onclick = () => {
  projectModal.style.display = 'block';
};
closeProjectModal.onclick = () => {
  projectModal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === projectModal) {
    projectModal.style.display = 'none';
  }
};
const addProject = (e) => {
  e.preventDefault();
  const projectName = document.getElementById('project-name').value;
  const newProject = new Project(projectName);
  projects.push(newProject);
  setProjectsToStorage(projects);
  contentTag.appendChild(renderProject(newProject));
  projectModal.style.display = 'none';
};
const projectForm = document.getElementById('add-project');
projectForm.addEventListener('submit', addProject);
// add todo

const todoModal = document.getElementById('todo-modal');
const closeTodoModal = document.getElementById('todo-close-icon');

closeTodoModal.onclick = () => {
  todoModal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === todoModal) {
    todoModal.style.display = 'none';
  }
};
const addTodo = (e) => {
  e.preventDefault();
  const data = fetchTodoForm();

  const projectIndex = projects.findIndex((project) => project.name === localStorage.target);

  const project = projects[projectIndex];
  const todo = new Todo(data.title, data.description, data.dueDate, data.priority);
  project.todos.push(todo);

  document.getElementById(project.name.replace(/\s/g, '-')).appendChild(
    createTodo(todo),
  );
  setProjectsToStorage(projects);
  renderProjects(projects);
};
const todoForm = document.getElementById('add-todo');
todoForm.addEventListener('submit', addTodo);

// test

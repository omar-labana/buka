import Todo from "./Todo";

const checkLocalStorage = () => {
    let projects = localStorage.getItem('projects')
    if (projects) {
        return true
    } else {
        return false
    }
}

const renderProjects = (projects) => {
    const contentTag = document.getElementById('content')
    contentTag.innerHTML = ''
    projects.forEach(project => {
        contentTag.appendChild(renderProject(project))
    })
};

const create = (elementName, styles = false, text = false) => {
    const element = document.createElement(elementName);
    if (styles) {
        styles.forEach((style) => {
            element.classList.add(style);
        });
    }
    if (text) {
        element.textContent = text;
    }
    return element;
};

const renderProject = (project) => {
    const projectDiv = create('div', ['border-2', 'border-red-900', 'px-8', 'py-2', 'flex-1'])

    const projectTitle = create('h2', ['text-red-900', 'text-3xl', 'font-semibold'], `Project: ${project.name}`)

    const addTodoBtn = create('button', ['px-4', 'py-3', 'bg-blue-900', 'text-white', 'my-2'], 'Add Todo')

    const todos = createTodos(project.todos)

    addTodoBtn.addEventListener("click", () => {
        localStorage.setItem('target', project.name)
        const todoModal = document.getElementById('todo-modal');
        todoModal.style.display = 'block';
    })



    projectDiv.appendChild(projectTitle)
    // render todo
    todos.setAttribute('id', project.name.replace(/\s/g, '-'))

    projectDiv.appendChild(todos)

    projectDiv.appendChild(addTodoBtn)

    return projectDiv
}
// todoDiv.appendChild()

const createTodo = (todo) => {
    let todoDiv
    todoDiv = create('div', ['border-2', 'rounded-lg', 'p-3'])
    //
    const todoHeader = create('div', ['flex', 'justify-between', 'items-center'])
    const title = create('div', ['text-lg', 'font-bold'], todo.title)
    if (todo.isCompleted) {
        title.classList.add('line-through')
    }
    const btnCont = create('div')
    const editBtn = create('i', ['cursor-pointer', 'fas', 'fa-edit', 'text-2xl', 'mx-1', 'text-green-900'])
    const markBtn = create('i', ['cursor-pointer', 'fas', 'fa-check', 'text-2xl', 'mx-1', 'text-blue-900'])
    const deleteBtn = create('i', ['cursor-pointer', 'fas', 'fa-times', 'text-2xl', 'mx-1', 'text-red-500'])
    //
    editBtn.addEventListener('click', editTodo)
    markBtn.addEventListener('click', markTodo)
    deleteBtn.addEventListener('click', deleteTodo)
    //
    todoHeader.appendChild(title)
    btnCont.appendChild(editBtn)
    btnCont.appendChild(markBtn)
    btnCont.appendChild(deleteBtn)
    todoHeader.appendChild(btnCont)
    todoDiv.appendChild(todoHeader)
    //
    todoDiv.appendChild(create('div', [], todo.description))
    todoDiv.appendChild(create('div', [], todo.dueDate))
    todoDiv.appendChild(create('div', [], todo.priority))
    return todoDiv
}

const createTodos = (todos) => {
    const todosDiv = create('div', ['flex', 'flex-col', 'gap-1'])
    todos.forEach(todo => {
        todosDiv.appendChild(createTodo(todo))
    })

    return todosDiv
}

const fetchTodoForm = () => {
    const title = document.getElementById('todo-title').value
    const description = document.getElementById('todo-desc').value
    const dueDate = document.getElementById('todo-date').value
    const pE = document.getElementById('priority')
    const priority = pE.options[pE.selectedIndex].text;
    return { title, description, dueDate, priority }
}

const setProjectsToStorage = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

const getProjectsFromStorage = (projects) => {
    return JSON.parse(localStorage.getItem('projects'))
}

const deleteTodo = (e) => {
    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText
    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText
    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)
    const projects = getProjectsFromStorage()
    const projectIndex = projects.findIndex(project => project.name === projectName)
    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)

    projects[projectIndex].todos.splice(todoIndex, 1)
    setProjectsToStorage(projects)
    renderProjects(projects)
}

const markTodo = (e) => {
    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText
    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText
    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)
    const projects = getProjectsFromStorage()
    const projectIndex = projects.findIndex(project => project.name === projectName)
    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)

    projects[projectIndex].todos[todoIndex].isCompleted = !projects[projectIndex].todos[todoIndex].isCompleted
    setProjectsToStorage(projects)
    renderProjects(projects)
}

const editTodo = (e) => {
    // console.log(e.currentTarget.parentNode.parentNode.innerText);
    const title = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerText
    const desc = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.innerText
    const time = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerText
    const good = e.currentTarget.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerText
    const projectName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerText.substring(9)
    const projects = getProjectsFromStorage()
    const projectIndex = projects.findIndex(project => project.name === projectName)
    const todoIndex = projects[projectIndex].todos.findIndex(todo => todo.title === title && todo.description === desc)

    const editTodoModal = document.getElementById('edit-modal')
    const closeProjectModal = document.getElementById('edit-close-icon');
    closeProjectModal.onclick = () => {
        editTodoModal.style.display = 'none';
    };
    editTodoModal.style.display = 'block';
    window.onclick = (event) => {
        if (event.target === editTodoModal) {
            editTodoModal.style.display = 'none';
        }
    };

    document.getElementById('edit-title').value = title
    document.getElementById('edit-desc').value = desc
    document.getElementById('edit-date').value = time
    document.getElementById('edit-priority').value = good



    document.getElementById('edit-todo-form').addEventListener('click', () => {
        const pE = document.getElementById('edit-priority')
        const priority = pE.options[pE.selectedIndex].text;
        projects[projectIndex].todos[todoIndex] = new Todo(
            document.getElementById('edit-title').value,
            document.getElementById('edit-desc').value,
            document.getElementById('edit-date').value,
            priority)

        setProjectsToStorage(projects)
        renderProjects(projects)
    })


}

const saveTodo = (pi, ti) => {
    const title = document.getElementById('edit-title').value
    const description = document.getElementById('edit-desc').value
    const dueDate = document.getElementById('edit-date').value
    const pE = document.getElementById('edit-priority')
    const priority = pE.options[pE.selectedIndex].text;
    const projects = getProjectsFromStorage()
    projects[pi].todos[ti] = new Todo(title, description, dueDate, priority)
    console.log(pi, ti);
    console.log(title, description, dueDate, priority);
    setProjectsToStorage(projects)
    renderProjects(projects)
}


export { checkLocalStorage, renderProject, fetchTodoForm, createTodo, setProjectsToStorage, getProjectsFromStorage }
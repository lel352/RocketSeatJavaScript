var listEmlemnt = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || ['Fazer Café', 'Estudar JavaScript', 'Acessar comunidade de Estudo']; //asim evita errod

function renderTodos() {
    listEmlemnt.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')')

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listEmlemnt.appendChild(todoElement);

    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage()
}

btnElement.onclick = addTodo;

function deleteTodo(posicao) {
    todos.splice(posicao, 1); //Apartir da posicao tal, remova x quantidade de itens, nesse exemplo é somente 1;
    renderTodos();
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}




var btnAdicionarElement = document.querySelector('#botao');
var textoElement = document.querySelector('#texto');
var listaElement = document.querySelector('#lista');
var repostaElement = document.querySelector('#reposta');


btnAdicionarElement.onclick = function () {
    textoElement = document.querySelector('#texto');
    var texto = textoElement.value;
    texto = texto.trim();
    if (texto.length > 0) {
        buscarDados(texto);
    }
    else {
        limpar();
    }
}

function limpar() {
    repostaElement.innerHTML = '';
    listaElement.innerHTML = '';
    textoElement.value = '';
}

function mostrarRepositorio(repositorios) {
    for (repositorio of repositorios) {
        criandoLinha(repositorio.name);
    }
}

function criandoLinha(texto) {
    linhaElement = document.createElement('li');
    textoElement = document.createTextNode(texto);
    linhaElement.appendChild(textoElement);

    listaElement.appendChild(linhaElement);
}

function buscarDados(nome) {
    limpar();
    axios.get('https://api.github.com/users/' + nome + '/repos')
        .then(function (response) {
            if (response.data.length > 0)
                mostrarRepositorio(response.data);
            else
                repostaElement.innerHTML = 'Dados não foram encontrados. ';
        })
}
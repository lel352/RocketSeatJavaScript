var btnAdicionarElement = document.querySelector('div button');
var textoElement = document.querySelector('div input');


btnAdicionarElement.onclic = function () {
    var texto = textoElement.value;
    if (texto.trim().length > 0) {
    }
}



axios.get('https://api.github.com/users/'+texto.trim()+'/repos')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.warn(error);
});
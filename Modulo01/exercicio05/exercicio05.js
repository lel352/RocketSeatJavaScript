function mostraDados(usuarios){
    for (const usario of usuarios) {
        console.log(` o ${usario.nome} possui as habilidades ${usario.habilidades.join(', ')}.  `)
        }
}

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
mostraDados(usuarios);
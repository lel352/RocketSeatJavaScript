function experiencia(anos) {
    if (anos >= 7){
        return "Jedi Master";
    } else if (anos > 3){
        return "Avançado";
    } else if (anos >1){
        return "Intermediário";
    } else {
        return "Iniciante";
    }
}

console.log(experiencia(6.9));
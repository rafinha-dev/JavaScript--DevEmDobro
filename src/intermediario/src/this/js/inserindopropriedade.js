let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;

}
console.log(comida)

comida.cozinhar(100)

console.log(comida)
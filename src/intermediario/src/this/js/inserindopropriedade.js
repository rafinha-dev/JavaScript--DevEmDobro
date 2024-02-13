let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
    // comidaParaCozinhar.temperatura = temperaturaDeCozimento
    this.temperatura = temperaturaDeCozimento;

}

// comida.cozinhar(comida, 100)
comida.cozinhar(100)

console.log(comida)
function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSome = soma(1,3)
console.log(resultadoDaSome)

// atribuir uma função a uma variavel

// soma(resultadoDaSome, 10) aqui meu parametro é o resultado anterior que foi atribuido a função

resultadoDaSome = soma(resultadoDaSome, 10)
// posso também guardar o novo resultado reatribuindo essa variável
console.log(resultadoDaSome)
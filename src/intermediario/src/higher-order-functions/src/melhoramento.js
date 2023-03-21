/*
function dobrar(numero){
    return numero * 2
}
function triplicar(numero){
    return numero * 3
}
function quadruplicar(numero){
    return numero * 4
}

console.log(dobrar(2)) 
*/

// -------------------------------
// isso gera muito código e toda vez que eu quiser aumentar alguma multiplicação vou precisar inserir outra função. como reduzir ? 

function multiplicar(multiplicador){
    // agora a função vai poder receber o número que vai ser multiplicado e retornar o número x o multiplicador
    return function(numero){
        return numero * multiplicador
    }
} // a função multiplicar se torna uma higher order funcion por que ela retorna uma função.

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(triplicar(3))
// aqui eu chamo a variável já enviando o parâmetro da função que ela armazena
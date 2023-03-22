let pessoa = {nome: 'Roberto', sobrenome: 'Dias', idade: 33 }

// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)


let {nome: nome, idade:idade} = pessoa
// nome da variável seguido do nome da propriedade
// caso eu use o mesmo nome da propriedade não preciso declarar a propriedade que a variável recebe

console.log(nome)
console.log(idade)

const numeros = [1, 2, 3]

const [valor ,dois , tres] = numeros
// por ter o mesmo número de variaveis e de indices ele irá atribuir de acordo com o indice e a posição

console.log(valor)
console.log(dois)

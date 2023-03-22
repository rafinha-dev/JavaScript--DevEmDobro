let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

let nomeDasPessoasMap = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos de idade! `)

console.log(nomeDasPessoasMap)

function map(){
    let nomeDasPessoas = []
    for(let i = 0; i < pessoas.length; i++){
    nomeDasPessoas.push(pessoas[i].nome)
    }
}
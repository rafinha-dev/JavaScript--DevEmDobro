let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

let pessoasComIdadeDe33anos = pessoas.filter( pessoas => pessoas.idade === 33)
console.log(pessoasComIdadeDe33anos)

// a outra forma de fazer é executando a função igual está abaixo.

function filter(){

let pessoasComIdadeDe33anos = []

for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade === 33){
        pessoasComIdadeDe33anos.push(pessoas[i])
    }
}
}
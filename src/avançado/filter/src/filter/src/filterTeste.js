let pessoas = [
    {nome: 'Roberto', idade: 33},
    {nome: 'Ricardo', idade: 33},
    {nome: 'Raphael', idade: 27}
]

pessoas = pessoas.filter( pessoas =>  pessoas.idade === 33)
console.log(pessoas)
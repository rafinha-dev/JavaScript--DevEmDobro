const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(pessoas)
console.log(...pessoas)


/* concatenar dois arrays */
function concat(){
let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
let pessoas2 = ['Joao', 'Pedro', 'Jumento']

pessoas1 = pessoas1.concat(pessoas2)

pessoas1 = [...pessoas1, ...pessoas2]
}

function clone(){
const pessoa1 = {nome: 'Roberto', idade: 33}

const objetoClonado = {...pessoa1}
console.log(objetoClonado)
}


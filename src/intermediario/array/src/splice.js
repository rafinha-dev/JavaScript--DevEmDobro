let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

let frutasExtraidas = frutas.splice(1,1)

console.log(frutasExtraidas)

console.log(frutas)

let frutasAdicionadas = frutas.splice(1,1, 'Jaca', 'Amora')
console.log(frutas)
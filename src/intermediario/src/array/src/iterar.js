let frutas = ['banana', 'maça', 'morango']

// for(let i = 0; i < frutas.length; i++){
//     console.log('Fruta ' + frutas[i])
// }

frutas.forEach( function(item, indice, array){
    console.log(indice)
    // console.log('Fruta ' + frutas[indice])
})

frutas.push('manga') // insere na ultima posição do array
console.log(frutas) 
frutas.pop() // remove o item do final do array

frutas.shift() // remove o primeiro elemento

frutas.unshift('morango') // adiciona no primeiro elemento

let posiçãoLaranja = frutas.indexOf('laranja')
console.log(posiçãoLaranja)
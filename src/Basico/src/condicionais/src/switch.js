// switch(parametro) {
// case valor1: 
//  <bloco de declaração>
//  Break
// case valor2: 
//  >bloco de declaração> 
//  Break  }

let nomeFilme = 'Vingadores'

switch(nomeFilme){
    case 'Vingadores':
       console.log('É o filme dos vingadores')
       break
    case 'Batman vs Supermen':
        console.log('É o filme do Batman vs Supermen')
        break
    // posso ter vários switch case
    default: 
    console.log('É outro filme')
    break
}

let avaliacao = 1

switch(avaliacao){
    case 1:
    case 2: 
        console.log('Filme ruim')
        break
    case 3: 
    case 4: 
        console.log('Filme mediano')
        break
    case 5: 
        console.log('Filme exelente')
        break
    default: 
        console.log('Nota invalida')
        break
}
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


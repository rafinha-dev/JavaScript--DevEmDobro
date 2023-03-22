function incentivarQuester(mensagem, nomeQuester){
    console.log(`${mensagem} ${nomeQuester}`)

}

incentivarQuester('Parabéns por ter chego ao módulo de JavaScript avançado', 'Joao')

function incentivarQuesters(mensagem, ...nomeQuesters){

   nomeQuesters.map( nomeQuester => console.log(`${mensagem} ${nomeQuester}`))


}

incentivarQuesters('Parabéns por ter chego ao módulo de JavaScript avançado', 'Joao', 'Pedro', 'Rafael')
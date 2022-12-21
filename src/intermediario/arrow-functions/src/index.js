let resultadoDaSoma = (numero1, numero2) =>{
    return numero1 + numero2
}

console.log(resultadoDaSoma(14,8))
// da mesma forma que tinha a função anonima agora tem uma arrow function somente trocando a palavra função por ua seta no final dos parâmetros

// ------------------------------------------------------------------------------
const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ' Você chegou ao módulo de JS intermediario.')
}

incentivarQuester('rafael')
// o parâmetro não precisa necessariamente dos parênteses também.

// -------------------------------------------------------------------
let Soma = (numero1, numero2) => numero1 + numero2

console.log(Soma(128,8))
// como no primeiro exemplo, se minha função tem só uma linha eu posso remover essas chaves e o return.
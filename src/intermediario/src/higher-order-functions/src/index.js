const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
    const mesAtual = 12
    let anoDeNascimento = 2022 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    // se meu if tiver só uma linha também posso reduzir as chaves.
    imprimir(anoDeNascimento)

    console.log(imprimir)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimento(26, 9, imprimirAnoDeNascimento) 
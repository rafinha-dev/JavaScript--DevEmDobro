/* function nomeDaFuncao(){
    <bloco de execução>
}

nomeDaFuncao()
<chamada>
*/ 

/* function nomeDaFuncao(parametro, parametro2){
    <bloco de execução>
}

nomeDaFuncao(parametro1, parametro2) */ 

function incentivarQuester(){
    alert('Muito bem, você chegou ao JS, continue assim!')
}

// incentivarQuester()
// função sem parametro só chamada

function soma(numero1, numero2){
    console.log(numero1 + numero2)
    // eu posso usar o return no lugar de colocar console.log
    return(numero1 + numero2)
    //  o return sozinho não faz nada, para que ele faça eu preciso armazenar ele e ai sim decidir o que fazer
}

soma(2 , 4)
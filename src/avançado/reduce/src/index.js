let ordens = [
    {cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLZ34'},
    {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Roberto', tipo: 'compra', quantidade: 21, ativo: 'GOGL34'}
]

let quantidadeDeOrdensReduce = ordens.reduce( (quantidadeDeOrdensReduce, ordens) =>{
    //primeiro parâmetro a variavel que fica recebendo a soma
    //segundo parametro o array que está sendo iterado

    return quantidadeDeOrdensReduce + ordem.quantidade
}, 0) // segundo parâmetro


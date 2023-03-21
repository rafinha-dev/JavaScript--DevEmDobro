let cliente = {
    nome: 'Ricardo', 
    ultimoPedido: {
        produto: 'Xbox',
        valor: '3000', 
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)
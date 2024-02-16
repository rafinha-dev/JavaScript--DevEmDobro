document.getElementById('tirar-carta').addEventListener('click', () =>{
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    // URL da Api precisa estar para consumi-la. 

    const resposta = await fetch(url)
    // const json = await resposta.json() no lugar de criar um objeto json da pra retornar direto a resposta
    return  await resposta.json()

    // ao usar o fatch é preciso usar o await para esperar a resposta da API, e para usar ele é preciso usar o async
}


// ================================================  //

async function tirarUmaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    // esse outro endpoint é usado para que se consiga tirar uma carta. Como tirar uma do baralho já tem o deck_id ele entra como parametro.
    const resposta = await fetch(url)
    return await resposta.json()
}


async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado()
    // console.log(baralho.deck_id) para cada f5 vai retornar um baralho novo
    const carta = await tirarUmaCarta(baralho.deck_id)

   // console.log(carta)  aqui ele retorna o objeto que deveria retornar o cards é um array
    console.log(carta.cards[0].image)
    
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()
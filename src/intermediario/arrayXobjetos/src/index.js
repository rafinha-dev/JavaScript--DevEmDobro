let frutas = ['uva', 'banana']


let jogo2 = 'Sherek'

let videogame = {
    nome: 'playstation',
    valor: 3000, 
    jogo: 'driver 2',
    jogos: ['Final fantasy', 'fifa', jogo2]
}
let videogame2 = {
    nome: 'Xbox',
    jogo: 'Mario'
}

let videoGames = [videogame, videogame2]

let jogo3 = 'God of war'

videogame.jogos.push(jogo3)

console.log(videogame)
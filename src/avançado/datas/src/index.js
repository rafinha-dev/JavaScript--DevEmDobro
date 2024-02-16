const dataAtual = new Date()
console.log(dataAtual)
// pegando data

const umDiaDepois = new Date(dataAtual)
umDiaDepois.setDate(dataAtual.getDate() + 1)
console.log(umDiaDepois)
// alterando dia

const umMesAtras = new Date(dataAtual)
umMesAtras.setMonth(umMesAtras.getMonth() - 1)
// modificando mês.

const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
// formas de formatação de datas

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes)

console.log(dataFormatada)

const segundaOpcoes = {
    weekday: 'long', 
    year : 'numeric', 
    month: 'long', 
    day: 'numeric'
}
const formatador = new Intl.DateTimeFormat('pt-BR', segundaOpcoes)

const segundaDataFormatada = formatador.format(dataAtual)

console.log(segundaDataFormatada)
let ferverAgua = (chaleiraNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraNoFogao && fogaoLigado){
        console.log('Passo 1 finalizado: Agua foi fervida')
        resolve(true)
        }
        else{
        console.log('é necessário colocar a chaleira com a água e ligar o fogão senao o café não ficará pronto.')
        reject()
        }
    })
}

let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log('Passo 2 finalizado: café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: terminei de tomar café')
        resolve(true)
    })
}
let lavarXicara = (cafeTomado) => {
    return new Promise ((resolve) => {
        console.log('Passo 4 finalizado: terminei de lavar a xicara ')
        resolve(true)
    })
}

let chaleiraNoFogao = true
let fogaoLigado = true

// ferverAgua(chaleiraNoFogao, fogaoLigado)
// .then(() => {
//     return passarOCafe()
// })
// .then(() => {
//     return tomarCafe()
// })
// .then(() => {
//     return lavarXicara()
// })
// .then(() => {
//     console.log('Finalizado o ritual do café.')
// })

async function iniciarProcessoDoCafe(){
    const aguaFervida = await ferverAgua(chaleiraNoFogao, fogaoLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado café')
}

iniciarProcessoDoCafe()
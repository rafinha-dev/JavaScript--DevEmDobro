

let ferverAgua = function(chaleiraNoFogao, fogaoLigado){
    return new Promise ((resolve, reject) => {
        if(chaleiraNoFogao && fogaoLigado){
            console.log('começando o processo de ferver a água.')
            resolve()
        }else{
            console.log("è necessário ligar o fogao e colocar agua na chaleira.")
            reject()
        }
    })
}

let chaleiraNoFogao = true
let fogaoLigado = true
ferverAgua(chaleiraNoFogao, fogaoLigado)
console.log('Fazendo café')
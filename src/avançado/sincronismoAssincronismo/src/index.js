function colocarAquaPraFerver(){
    console.log('colocar água para ferver')

    setTimeout(() =>{
        passarOCafe()
    }, 5000)
}

function prepararPraPassarOcafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}
function passarOCafe(){
    console.log('passando o café')
}

colocarAquaPraFerver()
// dessa maneira a proxima função só será executada quando as ultimas duas já estiverem executadas
prepararPraPassarOcafe()
//passarOCafe()
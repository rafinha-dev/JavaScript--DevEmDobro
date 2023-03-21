function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post')

    console.log(posts)

    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'red'
}

function aumentarFonteSegundoPost(){
    let post2 = document.getElementsByClassName('texto-post')

    post2[1].classList.add('fonte-grande')
    // adicionou la do style do meu html a classe fonte grande.

}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M'){
        radioMasculino.checked = true
    }else if( genero === 'F'){
        radioFeminino.checked = true
    }
}
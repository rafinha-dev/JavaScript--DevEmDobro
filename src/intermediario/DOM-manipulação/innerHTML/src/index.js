function adicionarComentario() {
    let imputComentario = document.getElementsByName('novo-comentario')
    // pelo name pegou varios
    console.log(imputComentario)

    let textoDigitado = imputComentario[0].value // por que está dando erro? selecionar pela chave index !!??

    console.log(textoDigitado)

    let novosComentarios = document.getElementById('novos-comentarios')

    novosComentarios.innerHTML += `<p>Novo comentario: ${textoDigitado} </p>`
}
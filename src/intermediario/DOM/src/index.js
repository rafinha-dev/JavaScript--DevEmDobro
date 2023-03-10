
let p = document.getElementById('paragrafo1')

console.log(p)

// console.log(document.body.p)

let imputForClass = document.getElementsByClassName('tagDeImput')

console.log(imputForClass[1])

let imputPorTag = document.getElementsByTagName('imput')

console.log(imputPorTag)

let imputPorNome = document.querySelectorAll("imput[name='email']");
// todos que tem o atributo email serão buscados
console.log(imputPorNome)
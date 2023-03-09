'use strict'
// console.log(this)
console.log(window)
console.log(window === this)

this.name = 'Ricardo'
function saudar(){
    console.log('this no contexto da função', this) // pega o contexto global
    console.log('Olá,' + this.name) // pega o contexto global também mas tem uma referencia.
}
saudar()
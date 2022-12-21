const escopo = 'O escopo é uma política que gerencia a disponibilidade das variáveis dentro do java script.'
window.alert(escopo)

/*
const mensagem = 'olá'
console.log(mensagem)
*/

/*
if(true){
    const mensagem = 'olá'

}
console.log(mensagem) 
*/

/*
{
    var mensagem = 'olá'
		console.log('mensagem')

}
console.log('mensagem')
*/

/*

 function falar(){
    var mensagem = 'Olá mundo'
    console.log(mensagem)
 }

 falar()
 console.log(mensagem)
 */

 function falar(){
    var mensagem = 'Olá mundo'
    console.log(mensagem)
    function falarOutraCoisa(){

    }

    falarOutraCoisa()
    console.log(falarOutraCoisa)
 }

 falar()
 console.log(falarOutraCoisa)

 
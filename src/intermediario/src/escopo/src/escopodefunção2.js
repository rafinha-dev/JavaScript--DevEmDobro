function falar(){
    var mensagem = 'Olá mundo'
    console.log(mensagem)
    function falarOutraCoisa(){

    }

    falarOutraCoisa()
    console.log(falarOutraCoisa)
 }

 falar()
 console.log(falarOutraCoisa) // inacessível
 console.log(mensagem) //inacessível


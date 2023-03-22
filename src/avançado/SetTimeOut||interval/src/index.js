
console.log('console ao inicio')

let intervalo = setTimeout(() => {
                alert('Olá mundo')
                }, 3000 ); // tempo em milisegundos de espera para executar a ação.
// para que o alerta seja exibido novamente somente com o recarregar da página.


let idDoIntervalo = setInterval( () => {
                    console.log('Executando a cada 2 segundos')
                    } , 2000)


console.log(idDoIntervalo)
console.log('console ao final')

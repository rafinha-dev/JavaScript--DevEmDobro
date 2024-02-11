let boletoPago = false

// quando é verdadeiro não precisa colocar essa condição
if(boletoPago == false){
    console.log('O boleto não está pago')
}else{
    console.log('O boleto está pago.')
}
// é bom ser mais epecifico e não colocar somente else, e sim um else if. Senão tudo que não for o valor correto irá cair no else.

// boletoPago ? console.log('pago') : console.log('devendo')
let boletoPago = false

if(boletoPago == false){
    console.log('O boleto não está pago')
}else{
    console.log('O boleto está pago.')
}

boletoPago ? console.log('pago') : console.log('devendo')
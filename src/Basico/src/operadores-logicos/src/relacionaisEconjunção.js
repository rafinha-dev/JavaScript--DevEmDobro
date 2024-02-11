//  > maior que
//  < menor que
//  >= <= maior ou menor igual
//  >=!  diferente de maior ou igual 
//  =! diferente
{
    const a = 1
    const b = 3
}

// console.log(a <=! b)

const a = 2
const b = 2

console.log(a === b && a <= b )
// a igual em valor e tipo de b, e menor ou igual a b ?
// verdadeiro + verdadeiro ? V

console.log(a === b && a < b)
// V + F = F

console.log(a > b && a < b)
// F + F = F
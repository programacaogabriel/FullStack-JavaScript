
var numero = 1

{
    let numero = 2
    console.log('dentro =',numero)

}
console.log('fora =',numero)

// o let tem escopo de bloco então ele irá imprimir somente aonde ele está setado.


var numero = 3
var numero = 1

{
    let numero2 = 2
    console.log('dentro =',numero)

}
console.log('fora =',numero)
// quando não acha o numero interno o let irá atrás do numero mais proximo
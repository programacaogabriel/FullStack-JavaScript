//armazena uma funcao de uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


//armazena uma funcao arrow em uma variavel
const soma = (a,b) =>{
    return a+b
}
console.log(soma(12,12))

//retorno implicito
const subtracao = (a,b) => a-b 
console.log(subtracao(10,5))

const imprimir2 = a  => a
console.log(imprimir2("Legal!!!"))

// funcao anonima é uma função sem nome

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}


imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {   //passando uma função anonima que substitui a função de cima de soma
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // quando eu tenho uma funcao arrow eu tenho de fato uma funcao anonima

const pessoa = {
    falar: function(){   /// pode tirar o function e ficaria falar()
        console.log('Opa')
    }
}

pessoa.falar()
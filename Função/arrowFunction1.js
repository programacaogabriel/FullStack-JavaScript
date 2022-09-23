//funcao arrow é uma função anonima, voce sempre tem que armazenar ela em algum lugar

let dobro = function (a) {
    return a * 2
}

dobro = (a) => {            //funcao arrow
    return 2 * a
}

dobro = a => 2 * a         // funcao com um uico retorno, unica linha.
// return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'olá!'  //funcao sem parametros voce tem que criar os parenteses vazios
ola = _ => 'olá!'
console.log(ola())
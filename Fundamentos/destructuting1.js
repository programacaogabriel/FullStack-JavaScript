//recurso introduzindo no ES2015

const pessoa = {
    nome: "Gabriel",
    idade: 34,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1222
    }
}


const { nome, idade } = pessoa // extração do objeto
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // extração do objeto e acrescentando em variaveis
console.log(n, i)


const { sobrenome: s, bemHumorado: bH = true } = pessoa
console.log(s, bH)

const {endereco: {logradouro, numero } } = pessoa
console.log(logradouro,numero)
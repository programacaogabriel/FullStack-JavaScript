//this. é uma funcao global
// diferença é na hora de chamar o call ou apply os são parametros

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: "Notebook",
    preco: 4567,
    desc: 0.15,
    getPreco    // como já tenho um médoto criado logo acima, ele irá chamar o getpreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco : 50000, desc : 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

 //no call eu passo diretamente os paremetros
 //no apply eu passo por array
 console.log(getPreco.call(carro,0.17,'$'))
 console.log(getPreco.apply(carro,[0.12, '$']))
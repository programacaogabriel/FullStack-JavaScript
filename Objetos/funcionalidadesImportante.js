const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13

}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/90'
})

pessoa.dataNascimento = "02/02/92"

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object Assing( Ecmascript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = {c:3, a:4}

const obj = Object.assign(dest,o1,o2)//vai ter a concatenação de todos os atributos que o voce passou a partir de objt.assing sobreescrevendo valores
Object.freeze(obj)
obj.c = 1234
console.log(obj)

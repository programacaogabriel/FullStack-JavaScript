let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo =1
console.log(!isAtivo)
console.log(!!isAtivo)


console.log("Verdadeiros ........")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))
console.log('   ')

console.log("Falsos ............")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Finalizar ........")
console.log(!!(''|| null || 0 || " "))

let nome = '' // ter um valor padrão para determinada variavel, um ou outro
console.log(nome || 'Desconhecido')
let valor // não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

//console.log(valor.toString()) // Erro

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined o correto é atribuir null
console.log(produto)
//delete produto.preco// estratégia para retirar os valores
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!!produto.preco)
console.log(produto.preco)
console.log(produto)


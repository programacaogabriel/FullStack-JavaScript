const valores = [4.5,5.8,8.9,9]
console.log(valores[0],valores[3])

valores[4] = 10 // veja que temos 3 arrays e é possivel acrescentar mais um numero
console.log(valores)

valores[8] = 10 // Ele é esperto e faz o elemento no indice associado.
console.log(valores)

console.log(valores.length)

valores.push({id:3},false,null,'teste')// adicionar valores do array
console.log(valores)

valores.pop()//retira valores do array
console.log(valores)

delete valores[1]// retira valores do array
console.log(valores)

console.log(typeof valores)
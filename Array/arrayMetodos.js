const pilotos = ['Vettel','Alonso','Raikkonen','Massa'] 

pilotos.pop() // retira o ultimo piloto do array, Massa acabou de furar o pneu
console.log(pilotos)

pilotos.push('Verstappen')  //Adiciona um elemento logo apos o seu ultimo elemento
console.log(pilotos)

pilotos.shift() // retira o primeiro piloto do array, Vettel acabou a corrida
console.log(pilotos)

pilotos.unshift('Haminton')//Adiciona um elemento no inicio do array
console.log(pilotos)

 /*Adiciona ou remove qualquer elemento, neste exemplo vamos contar
 2 passos, Haminton e Alonso antes de chegar no array numero 2 Raikkonen não vamos excluir ninguem e sim adicionar Bottas e Massa.
 */
pilotos.splice(2 , 0 ,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array , então a partir do indice 2 ele vai pegar todo o array e irá criar um novo.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //novo array, entao ele vai pegar do indice 1 e vai até o indice 3 o numero 4 Vestappen não será carregado.
console.log(algunsPilotos2)
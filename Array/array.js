console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia','Carlos','Ana')  // Forma não tão recomendada de criar um array
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']  //Forma recomendada no dia a dia
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Paulo'
console.log(aprovados[3])    //Formas de adicionar ao Final do Array
aprovados.push('Jose')
console.log(aprovados.length) /// tamanho do array
console.log(aprovados)


aprovados[9]='Rafael'   //Note que temos varios array que não receberam valores
console.log(aprovados.length) 
console.log(aprovados)
console.log(aprovados[8]===undefined) //Perceba que todo o conteudo não foi definido, existe o indice porém não foram iniciados

aprovados.sort() // Este comando irá ordenar os Arrays para que valores em branco sejam colocados ao final do mesmo.
console.log(aprovados)

delete aprovados[1]    //Comando que irá deletar o array
console.log(aprovados)


aprovados = ['Bia','Carlos','Ana'] 
aprovados.splice(1, 1)  //Adicionar elementos em um determinado indice ou remover elementos de um array. Remover/Adiciona
// O splice funciona pegando o primeiro valor 'Carlos' e irá pegar quantas casas eu colocar apos 'Calors', 'Ana'
console.log(aprovados)

//Adicionando elementos SPLICE com exclusão
aprovados.splice(1, 1, 'Rafael','Jose') // a partir do indice 1 ele irá excluir o 'Carlos' que pe o indice 1 adicionar estes elementos Rafael e Jose no seu lugar
console.log(aprovados)

//Adicionando elementos SPLICE sem exclusão
aprovados.splice(3, 0, 'Emanuell','Antonio') // a partir do indice 2 ele irá passar pelo 'Jose' e como colocamos 0 ele não fará a exclusao e sim irá somente adicionar os elementos
//'Emanuell' e 'Antonio'
console.log(aprovados)
//Observação: Você poderá trabalhar dentro do array com o splice

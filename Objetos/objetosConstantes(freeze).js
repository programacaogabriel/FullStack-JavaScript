

const pessoa = {
    nome: 'joao'
}

// os dados que estão dentro desta constante podem ser alterados
pessoa.nome = 'Pedro'
console.log(pessoa)



// isso irá gerar um problema porque não pode atribuir para uma const pessoa um outro objeto pois ela já foi declarada.
/*pessoa = {
    nome: 'Ana'
}
console.log(pessoa)
*/

//congela a unidade pessoa assim, é impossível mecher para alterar algum valor.
Object.freeze(pessoa)
pessoa.nome = 'José'
console.log(pessoa)
console.log(pessoa.nome)
console.log()

//vamos tentar adicionar um endereço
pessoa.end ='Rua abc'
console.log(pessoa)
console.log(pessoa.end)



//Object.preventExtensions   poderá excluir mas não poderá adicionar

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'

})
console.log('Extensível: ', Object.isExtensible(produto))

produto.any = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal = selar o objeto, não consegui adicionar novos elementos nem excluir. Consegue mecher nos atributos que já existem.

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object freezer = selado + valores constantes
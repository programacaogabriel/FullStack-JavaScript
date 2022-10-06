//colecao dinamica de pares chaves/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'  // implementação de arrays em um objeto, identificador com espacos
produto.preco = 220


console.log(produto)
delete produto.preco  /// deletando algo de um objeto
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 54,
        enderco: {
            logradouro: "Estrada Silva",
            numero: 123,

        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome:'Ana',
        idade:18
    }
    ],
    calcularValorSeguro: function(){

    }
}

console.log(carro)

// podemos acessar deste geito, e fazer atribuições
carro.proprietario.enderco.numero = 1000
console.log(carro)


// podemos fazer uma introspecção acessando via array, é mais trabalhosa
carro['proprietario']['enderco']['logradouro'] = 'Av Gigante'
console.log(carro)



delete carro.condutores
delete carro.proprietario.enderco
delete carro.calcularValorSeguro

console.log(carro.condutores)
//console.log(carro.condutores.length) // sempre verificar se a variavel está localizada. 
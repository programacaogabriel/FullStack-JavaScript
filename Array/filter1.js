const produtos = [
    { nome: 'Notebooks', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Cop de Plástico', preco: 18.99, fragil: false }

]

console.log(produtos.filter(function (p) {
    return p.preco > 2000  //Filtrando os parametros
}))


//Econtrar Fragil com valor maior de 500

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
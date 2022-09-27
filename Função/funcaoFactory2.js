// factory é uma função que sempre retorna um objeto
//função simples

function criarProdutos(nome,preco,quantidade){
    return{
       nome,
       preco,
       quantidade,
       desconto : 0.1

    }
   
}

console.log(criarProdutos("agua",1.99,10))
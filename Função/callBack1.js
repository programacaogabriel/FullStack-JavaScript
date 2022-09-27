const fabricantes = ['Audi','Mercedez','Ferrari','BMW']


function imprimirNome(nome,indice){
    console.log(`${indice+1}.${nome}`) // aqui o numero quando é acrescentado o transforma em numerais.
}

fabricantes.forEach(imprimirNome)

fabricantes.forEach(function(fabricantes){
    console.log(fabricantes)                          // aqui vem primeiro os nomes, para posteriormente vir algo.
})

fabricantes.forEach(fabricantes=>console.log(fabricantes))  // Arrow function
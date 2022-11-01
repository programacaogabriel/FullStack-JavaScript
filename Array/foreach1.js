const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice){   // Dentro do forEach tem um laço for, este laço irá percorrer este laço de aprovados.
    console.log(`${indice+1}) ${nome}`)  //Quando ele percorrer está fução ele iŕa percorrer o nome=Agatha com o indice 0 e assim sucessivamente.

})

aprovados.forEach(nome => console.log(nome))  //arrowFunction
console.log()

//armazenar uma função em uma variavel e e passar essa função por parametro via foreach.
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(nome, indice, array){   // Existe um terceiro parametro array
    console.log(`${indice+1}) ${nome}`)  
    console.log(array)
})

//A função callback que voce passar para um for each recebe 3 parametros. 1: Elemento, 2: Indice, 3:Array

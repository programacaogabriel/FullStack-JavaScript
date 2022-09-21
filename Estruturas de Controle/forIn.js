const notas = [8.9, 9.8, 7.0, 6.0, 7.5, 9.2]

for(let i in notas ){
    console.log(i+' = '+ notas[i])                 //raramente usado
}  


const pessoa = {
    nome:'Ana',
    sobrenome:'Silva',
    idade:32,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo}=${pessoa[atributo]}`)
}


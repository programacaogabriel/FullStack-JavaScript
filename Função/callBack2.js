const notas = [8.9,8.8,7.9,7.9,9.5,5.5,7.8]


//SEM CALLBACK
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log("Sem callback "+notasBaixas)


//COM CALLBACK
notasBaixas = notas.filter(function (nota){
    return nota < 7
})
console.log("Com callback "+notasBaixas)

//COM ARROW
notasAltas = notas.filter(notas => notas > 7)
console.log("Arrow "+ notasAltas)
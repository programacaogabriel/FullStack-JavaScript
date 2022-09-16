function rand ([min =0, max =1000] = []){
    if(min>max) [min,max] = [max,min]
    const valor = Math.random() * (max -min)+ min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([888]))
console.log(rand([0,888]))
console.log(rand([]))
console.log(rand()) // note que foi adicionado a busca de nenhum valor (1000] = [])) na primeira linha para não ocorrer o erro
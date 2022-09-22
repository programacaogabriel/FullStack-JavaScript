function soma(){
    let soma = 0
    for(i in arguments){                          // se tem uma maneira melhor de fazer em rest
        soma+=arguments[i]                      // arguments é um array interno aonde todos os parametros vão estar dentro
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3,4.7))
console.log(soma(2.2,3.3,4.7,'teste'))
console.log(soma('a','b','c'))

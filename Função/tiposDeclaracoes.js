

console.log(soma(3,4))    // Está função pode ser chamada antes da sua declaração
// function declaration
function soma(x,y){
    return x+y
}


// function expression
const sub = function (x,y){
    return x-y
                        // Está função só pode ser obtida depois de sua declaração
}
console.log(sub(4,3))


// named function expression
const mult = function mult(x,y){
    return x*y                  // Está função só pode ser obtida depois de sua declaração
                                // Quando estiver debugando ou stack3 etiver aparecendo o nome dela irá aparecer, é uma forma pouco usada.
}
console.log(mult(3,4))

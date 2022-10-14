const a = 1
const b = 2
const c = 3

//Maneira antiga
const obj1 = { a: a, b: b, c: c }
//Maneira nova
const obj2 = { a, b, c }

console.log(obj1, obj2)

//////////////////////

const nomeAtr = 'nota'
const valorAtr = 7.8

//Maneira antiga
const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)


//Maneira nova
const obj4 = {[nomeAtr]:valorAtr}
console.log(obj4)


////////////////////
//Maneira antiga
const obj5 = {
    funcao1: function(){
        //..
    }
}
console.log(obj5)

//Maneira nova
const obj6 = {
    funcao2(){
        //..
    }
}
console.log(obj6)


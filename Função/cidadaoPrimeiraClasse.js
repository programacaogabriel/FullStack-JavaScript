
//forma literal
function fun() {

}

//armazenar em uma variavel
const fun2 = function () {

}

//armazenar dentro de um array
let a, b = 3
const array = [function (a, b) {
    return a + b
}
]
//armazenar vários
const array2 = [function (a, b) {
    return a + b
}, fun, fun2]
console.log(array2[0](2, 3))

//armazenar um atributo em um objeto
const obj = {
  
}
obj.falar = function () {
    return  'opa'
}
console.log(obj.falar())

//passar um funcao como parametro para outra funcao
function (fun){
    fun(){

    }
}
function run(){
    console.log("Executando...")
}

//um funcao pode retornar/conter um funcao
function soma(a,b) {
    
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
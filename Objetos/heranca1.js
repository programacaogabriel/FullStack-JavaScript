const ferrari = {
    modelo:'F40',
    velMax: 340
}

const volvo ={
    modelo: "T50",
    velMax :260
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)

function MeuObjeto() {}

console.log(typeof Object,  typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
const { fileURLToPath } = require("url")

const pai = {
    nome: 'Pedro', 
    corCabelo:'preto'
}


//Filha1
const filha1 = Object.create(pai) // irá puchar as caracteristicas do pai
filha1.nome = 'Ana'
console.log(`O nome dela é ${filha1.nome}, tem os cabelos ${filha1.corCabelo}`)


//Filha 2
const filha2 = Object.create(pai,{
    nome:{ value: 'Bia', writable: false, enumerable:true},//Value : é atribuido um valor , writable: Se poderá ou não reescrever , enumerable: Lançamentos nos for
    corCabelo:{value:"Loiro", writable: true, enumerable:true} 
})

filha2.nome="Carla" // aqui não irá trocar
console.log(`O nome dela é ${filha2.nome}, tem os cabelos ${filha2.corCabelo}`)

//Keys - Chaves
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


//Oportunidade de verificar se uma determinada propriedade pertense ou não a um objeto
for(let key in filha2){
    filha2.hasOwnProperty(key)?
        console.log(key): console.log(`Por heraça: ${key}`)
}

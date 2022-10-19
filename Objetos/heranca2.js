//Cadeia de protótipod (prototype chain)
Object.prototype.attr0 = '0'   // não fazer isso pois está atribuindo a uma unidade global
const avo = {attr1:'A'}
const pai = {__proto__:avo,attr2:'B'}
const filho = {__proto__:pai,attr3:'C'}
console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta <=this.velMax){
            this.velAtual +=delta

        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)  // funcao que estabelece uma relaçao de prototipo entre dois objetos
Object.setPrototypeOf(volvo,carro)

console.log(ferrari) // atributos do elemento
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(440)
console.log(ferrari.status())
function Aula(nome, videoID){
    this.nomr = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo',123)
const aula2 = new Aula('Até breve',456)
console.log(aula1,aula2 )

// Criando um funcao do operador NEW
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(Aula,'Bem vindo',8910)
const aula4 = novo(Aula,'Até Breve',111213)
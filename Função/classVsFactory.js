class Pessoa {
    constructor(nome){                      //o this no navegador poderá variar já na factory isso não irá acontecer
        this.nome = nome
    }

    falar(){
      console.log(`Meu nome é ${this.nome}`)  
    }
}

const p1 = new Pessoa("Gabriel")
p1.falar()






const criarPessoa = nome =>{
    return{
        falar: ( ) => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Martins')
p2.falar()


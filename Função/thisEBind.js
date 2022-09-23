const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}


pessoa.falar()
const falar = pessoa.falar

falar() //conflito entre os paradigmas do funcional e do OO


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//O método bind() permite que um objeto pegue emprestado um método de outro objeto sem fazer uma 
//copia desse método. Isso é reconhecido como empréstimo de função em JavaScript.
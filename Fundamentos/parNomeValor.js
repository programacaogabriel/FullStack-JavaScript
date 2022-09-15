const saudacao = "Opa" //contexto léxico ( um local fisico aonde foi definido a sua variavel)

function exec() {
    const saudacao = "Falaa"  //constexo léxico 2
    return saudacao
}


//Objetos são grupos de pars/valor

const cliente = {

    nome: "Gabriel",
    idade: 34,
    peso: 100,
    endereço: {
        logradouro: "Rua Beatriz da Silva",
        numero: 307,
        cidade: "Palhoça",
        cep: 88132234
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)
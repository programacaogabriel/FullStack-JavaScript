function getNumeroInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1) {
    opcao = getNumeroInteiroAleatorio(-1,10)
    console.log(`A opacao escolhida foi ${opcao}`)
}

console.log("Até a próxima!!")
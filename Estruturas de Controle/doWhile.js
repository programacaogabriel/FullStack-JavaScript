function getNumeroInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0


do {
    opcao = getNumeroInteiroAleatorio(-1, 10)
    console.log(`A opacao escolhida foi ${opcao}`)
}
while (opcao != -1)

console.log("Até a próxima!!")
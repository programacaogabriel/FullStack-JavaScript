Math.floor // arredondamento para  baixo
Math.ceil  // arredondamento para  cima

const imprimirResultado = function(valorNota){
    switch (Math.floor(valorNota)) {
        case 10:
        case 9:     //é possível atribuir diversas sentenças diante de resultados esperados
            console.log("Quadro de honra")
            break;
        case 8.99:
        case 7:
            console.log("Aprovado")
            break;
        case 6:
        case 4:
             console.log("Recuperacao")
             break;
        case 3:
        case 0:
            console.log("Reprovado")
            break;
        default:
            console.log("Nota invalida")
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(2)
imprimirResultado(3)
imprimirResultado(10)
imprimirResultado(0)
imprimirResultado(6.99)
imprimirResultado("tomate")
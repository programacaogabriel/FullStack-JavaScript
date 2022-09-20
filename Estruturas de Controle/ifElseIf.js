Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(valorNota){
    if(valorNota.entre(9,10)){
        console.log("Quadro de honras")
    }else if(valorNota.entre(7,8.99)){
        console.log("Aprovado")
    }else if(valorNota.entre(4,6.99)){
        console.log("Recuperação")
    }else if(valorNota.entre(1,3.99)){
        console.log("Reprovado")
    }else{
        console.log("Nota invalida")
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(1)
imprimirResultado(12)
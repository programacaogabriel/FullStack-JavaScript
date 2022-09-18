function tratarErroELancar(erro){
    // throw new Error("Sistema detectou  erros em escrita ")
    //throw 10
    //throw 'Erro'
    //throw true
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}





function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally{        // o finally sempre será executado
        console.log('Final')
    }
}

const obj = { name: "Gabriel!" }
imprimirNomeGritado(obj)
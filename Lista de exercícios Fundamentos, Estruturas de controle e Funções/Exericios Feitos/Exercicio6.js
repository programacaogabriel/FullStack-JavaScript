/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/



//Fórmula dos juros compostos: Juros = ((1 + taxa / 100) ^ períodos) - 1
//" A fórmula do juro simples é J = C ∙ i ∙ t, em que J é o juro, C é o capital, i é a taxa de juro e t é o tempo."



function aplicacaoFinanceiraJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let valor = (capitalInicial * (1 + (taxaJuros / 100)) * tempoAplicacao)
    console.log(`O valor de juros simples é de R$ ${valor.toFixed(2)}`)
}



function aplicacaoFinanceiraJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    let valor = (capitalInicial*(1+taxaJuros /100)*tempoAplicacao)-1
    console.log(`O valor de juros compostos é de R$ ${valor.toFixed(2)}`)
}

aplicacaoSimples = aplicacaoFinanceiraJurosSimples(100,10,2)
aplicacaoCompostas = aplicacaoFinanceiraJurosCompostos(100,10,2)

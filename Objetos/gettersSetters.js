const sequencia = {

    _valor: 1,  //conveção, uma variavel que é pretendida acesar internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900  // não irá funcionar pq o valor está setado como 1
console.log(sequencia.valor, sequencia.valor)
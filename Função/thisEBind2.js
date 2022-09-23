function Pessoa() {
    this.idade = 0


    setInterval(function() {    // dispara uma outra funcao a partir do intervalo de tempo
        this.idade++
        console.log(this.idade)
    }, 1000);
}
// maneira correta para realizar o calculo bind
function Pessoa() {
    this.idade = 0


    setInterval(function() {
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000);
}

//new Pessoa

// maneira correta para realizar o calculo self
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade ++
        console.log(self.idade)
    }, 1000);
}

new Pessoa

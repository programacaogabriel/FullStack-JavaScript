{ { { { var sera = "sera!" } } } }
console.log(sera)

// na var o escopo é global ela sempre poderá ser acessada de 2 mananeiras dentro e fora


function teste() {
    var local =123
    console.log(local )
}
// na função o escopo só pode ser acessado dentro dele


// =====  quando criamos uma variavel global a mesma sera adicionada ao window ====//
// var a = "teste"   ficaria no navegador window.a
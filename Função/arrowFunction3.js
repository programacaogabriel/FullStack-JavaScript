let comparaComThis = function (param){
    console.log(this===param)
}


comparaComThis(global)


const obj ={}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global)
comparaComThisArrow(this)


//função arrow o this aponta para o objeto corrente
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
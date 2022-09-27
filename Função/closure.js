//closure é o escopo quando uma função é declarada e esse escopo vai permitir a funcao acessar e manipular variaveis externas à funcao

// contexto léxico em ação
const x = 'Global'

function  fora(){
    const x ='Local'
    function dentro(){
        return x
    }
    return dentro;
}


const minhaFuncao = fora()
console.log(minhaFuncao())
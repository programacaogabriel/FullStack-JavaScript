/*04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const { abort } = require("process");

function dividendoDivisor(a, b) {
    console.log('Resultado:', Math.floor(a/b))
    console.log('Resto:' , a % b)
}

dividendoDivisor(10,3)
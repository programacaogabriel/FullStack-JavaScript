const escola = 'COD3R'
console.log(escola.charAt(4)) // procurando a letra 

console.log(escola.charAt(5))

console.log(escola.charAt(1))

console.log(escola.charCodeAt(3)) // tabela unicode codigo html

console.log(escola.indexOf('3')) // retorna o indice associado a palavra

console.log(escola.substring(1)) // imprime da letra para frente

console.log(escola.substring(0,3)) // vai pegar do indice 0 até o indice 2

console.log('Escola '.concat(escola).concat("!"))// concatenação 

console.log('Escola '+escola+"!")// concatenação 

console.log(escola.replace(3,'e'))// realizar a substituição

console.log(escola.replace(/\d/, 'e'))        // substitua todos os numeros pela letra

console.log(escola.replace(/\w/g, 'e')) // substitua todos os digitos pela letra

console.log("Ana,Maria,Joana".split(','))  //convertendo strings para array
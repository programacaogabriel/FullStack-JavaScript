/*02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function calcularAreaTriangulo(a,b,c){
    if(a==b & b==c){
        console.log(`Temos um triangulo equilátero aonde todos os dados são iguais`)
    }if (a==b || b==c || c==a) {
        console.log(`Temos um triangulo esosceles aonde aonde 2 lados são iguais`)
    } if(a!=b & b!=c & c!=a){
        console.log(`Temos um triangulo escaleno aonde todos os lados são diferentes`)
    }else{
        console.log("Erro")
    }
        
    }

    triangulo = calcularAreaTriangulo(10,10,10)

    console.log(triangulo(10,10,10))
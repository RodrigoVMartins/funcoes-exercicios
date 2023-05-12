let somaNumeros = (numero1, numero2) => {
    console.log(numero1 + numero2) ;
}

somaNumeros(2, 3)

// // // // -------------------------------------------------------

let verificaMaior = (numero1, numero2) => {
    let verificar = numero1 >= numero2
    console.log(`O primeiro número é maior ou igual ao segundo? ${verificar}`);
}

verificaMaior(2, 3)
verificaMaior(5, 3)
verificaMaior(1, 2)
verificaMaior(2, 1)
verificaMaior(5, 5)
verificaMaior(1, 1)

// // // // -----------------------------------------------------------

let verificaParidade = numero => {
    let condicaoPar = numero % 2 === 0 
    console.log(`O número ${numero} é par? ${condicaoPar}`);
}

verificaParidade(2)
verificaParidade(23)
verificaParidade(128)
verificaParidade(121)

// ----------------------------------------------------------

let salarioLiquido = numero => {
    let salarioINSS = numero * 0.9
    return `Seu salário líquido é: ${salarioINSS}`; 
}

console.log(salarioLiquido(1000));
console.log(salarioLiquido(2000));
console.log(salarioLiquido(3240));



let adicao = (numero1, numero2) => {
    soma = numero1 + numero2
    return `A soma é: ${soma}` 
}

console.log(adicao(2, 2)); 

// -------------------------------------------------------------

let subtracao = (numero1, numero2) => {
    diferenca = numero1 - numero2
    return `A subtração é: ${diferenca}`
}

console.log(subtracao(12, 6));  

// --------------------------------------------------------------

let multiplicacao = (numero1, numero2) => {
    multiplica = numero1 * numero2
    return `A multiplicação é: ${multiplica}`
}

console.log(multiplicacao(3, 3));

// ---------------------------------------------------------------

let divisao = (numero1, numero2) => {
    dividir = numero1 / numero2
    return `A divisão é: ${dividir}`
}

console.log(divisao(50, 2));

// ----------------------------------------------------------------

let valorUsuario01 = Number(prompt("Digite o primeiro valor: "))
let valorUsuario02 = Number(prompt("Digite o segundo valor: "))

// ----------------------------------------------------------------

const resultadoAdicao = adicao(valorUsuario01, valorUsuario02)
const resultadoSubtracao = subtracao(valorUsuario01, valorUsuario02)
const resultadoMultiplicacao = multiplicacao(valorUsuario01, valorUsuario02)
const resultadoDivisao = divisao(valorUsuario01, valorUsuario02)

console.log(resultadoAdicao);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);

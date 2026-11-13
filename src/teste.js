function mensagem () {
    console.log("Olá, mundo!");
}

function calcularSoma (a, b) {
    return a + b;
}

const resultado = calcularSoma(5, 10);
console.log("O resultado da soma é:", resultado);

function verificarParidade (numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
    } else {
        console.log(numero + " é um número ímpar.");
    }
}

verificarParidade(7);
verificarParidade(12);


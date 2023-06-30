const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numero => parseInt(numero.trim()));

    const numerosPares = numeros.filter(numero => numero % 2 === 0);


    if (numerosPares.length > 0) {
        const soma = numerosPares.reduce((total, numero) => total + numero);
        const media = soma / numerosPares.length;

        console.log("Média dos valores pares: "+ media);
    } else {
        console.log("Não há valores pares para calcular a média!");
    }

    rl.close()
});
const readline = require("readline");
const { isNumberObject } = require("util/types");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separado por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numeros => parseInt(numeros.trim()));

    rl.question("Digite qual número deseja substituir: ", (valorAntigo) => {
        rl.question("Digite o novo valor: ", (valorNovo) => {
            const numerosSubstituidos = numeros.map(numero => (numero === parseFloat(valorAntigo)) ? parseFloat(valorNovo): numero);

            console.log("Array com substituição realizada: " + numerosSubstituidos);

            rl.close();
        });   
    });
});
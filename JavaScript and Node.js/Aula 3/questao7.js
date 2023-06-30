const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numeros => parseInt(numeros.trim()));

    const numerosOrdenados = numeros.sort((a , b) => a - b);

    console.log("Array ordenado em ordem crescente: " + numerosOrdenados);

    rl.close()
})
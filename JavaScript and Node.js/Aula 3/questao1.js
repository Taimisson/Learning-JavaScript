const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numero => parseFloat(numero.trim()));
    
    if (numeros.length > 0) {
        const primeiroElemento = numeros[0];
        const ultimoElemento = numeros[numeros.length - 1];
        
        console.log("Primeiro elemento: " + primeiroElemento);
        console.log("Último elemento: " + ultimoElemento);
    } else {
        console.log("Lista vazia. Não há elementos para exibir.");
    }
    
    rl.close();
});

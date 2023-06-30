const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numero => parseFloat(numero.trim()));
    
    if (numeros.length > 0) {
        const soma = numeros.reduce((total, numero) => total + numero);
        
        console.log("A soma dos elementos é: " + soma);
    } else {
        console.log("Lista vazia. Não há elementos para somar.");
    }
    
    rl.close();
});

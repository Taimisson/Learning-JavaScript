const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numero => parseFloat(numero.trim()));
    
    if (numeros.length > 0) {
        const maiorValor = Math.max(...numeros);
        const menorValor = Math.min(...numeros);
        
        console.log("Maior valor: " + maiorValor);
        console.log("Menor valor: " + menorValor);
    } else {
        console.log("Lista vazia. Não há valores para comparar.");
    }
    
    rl.close();
});

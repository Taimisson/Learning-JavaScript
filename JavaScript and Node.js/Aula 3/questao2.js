const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de números separados por vírgula: ", (listaNumeros) => {
    const numeros = listaNumeros.split(",").map(numero => parseFloat(numero.trim()));
    

    let soma = 0;

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }

    console.log("A soma de todos os elementos é " + soma);
    // if (numeros.length > 0) {
    //     const soma = numeros.reduce((total, numero) => total + numero);
        
    //     console.log("A soma dos elementos é: " + soma);
    // } else {
    //     console.log("Lista vazia. Não há elementos para somar.");
    // }
    
    rl.close();
});

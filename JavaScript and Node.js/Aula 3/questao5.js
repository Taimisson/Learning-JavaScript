const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira lista de números separados por vírgula: ", (lista1) => {
    const array1 = lista1.split(",").map(numero => parseFloat(numero.trim()));

    rl.question("Digite a segunda lista de números separados por vírgula: ", (lista2) => {
        const array2 = lista2.split(",").map(numero => parseFloat(numero.trim()));

        const arrayConcatenado = array1.concat(array2);
        
        console.log("Array resultante: " + arrayConcatenado);
        rl.close();
    })
})
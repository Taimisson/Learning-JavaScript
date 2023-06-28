const readline = require("readline");

// Definir a quantidade disponível em estoque do produto
const quantidadeEstoque = 10; // Exemplo: quantidade inicial de 10 unidades

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade desejada do produto: ", (quantidadeDesejada) => {
    // Converter a quantidade desejada para um número inteiro
    const quantidade = parseInt(quantidadeDesejada);

    if (isNaN(quantidade)) {
        console.log("Quantidade inválida. Por favor, insira um número válido.");
    } else if (quantidade <= 0) {
        console.log("Quantidade inválida. Por favor, insira um valor maior que zero.");
    } else if (quantidade <= quantidadeEstoque) {
        console.log("Produto disponível em estoque.");
    } else {
        console.log("Produto indisponível em estoque. Quantidade desejada excede a quantidade em estoque.");
    }

    rl.close();
});
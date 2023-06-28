const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor do produto: R$ ", (valorProduto) => {
    rl.question("Digite a porcentagem de desconto: ", (porcentagemDesconto) => {
        const valor = parseFloat(valorProduto);
        const desconto = parseFloat(porcentagemDesconto);
        
        if (isNaN(valor) || isNaN(desconto)) {
            console.log("Valores inválidos. Por favor, insira números válidos.");
        } else if (valor < 0 || desconto < 0) {
            console.log("Valores inválidos. Por favor, insira valores positivos.");
        } else {
            const valorDesconto = (valor * desconto) / 100;
            const valorFinal = valor - valorDesconto;
            
            console.log("Valor do produto com desconto: R$ " + valorFinal.toFixed(2));
        }
        
        rl.close();
    });
});

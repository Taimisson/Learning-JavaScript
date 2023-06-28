const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a lista de compras separada por vírgula: ", (listaCompras) => {
    // Dividir a lista de compras em itens separados
    const itens = listaCompras.split(",").map(item => item.trim());

    console.log("Lista de Compras:");
    for (let i = 0; i < itens.length; i++) {
        console.log("- " + itens[i]);
    }

    rl.close();
});

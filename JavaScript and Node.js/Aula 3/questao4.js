const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma lista de nomes separados por vírgula: ", (listaNomes) => {
    const nomes = listaNomes.split(",").map(nome => nome.trim());
    
    rl.question("Digite o nome a ser removido: ", (nomeRemover) => {
        const indice = nomes.indexOf(nomeRemover);
        
        if (indice !== -1) {
            nomes.splice(indice, 1);
            console.log("Nome removido com sucesso.");
        } else {
            console.log("O nome digitado não foi encontrado na lista.");
        }
        
        console.log("Lista resultante: " + nomes);
        rl.close();
    });
});

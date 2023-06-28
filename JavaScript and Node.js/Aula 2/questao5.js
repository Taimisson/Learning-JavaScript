const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a nota da primeira prova: ", (nota1) => {
    rl.question("Digite o peso da primeira prova: ", (peso1) => {
        rl.question("Digite a nota da segunda prova: ", (nota2) => {
            rl.question("Digite o peso da segunda prova: ", (peso2) => {
                rl.question("Digite a nota da terceira prova: ", (nota3) => {
                    rl.question("Digite o peso da terceira prova: ", (peso3) => {
                        const notaPonderada1 = parseFloat(nota1) * parseFloat(peso1);
                        const notaPonderada2 = parseFloat(nota2) * parseFloat(peso2);
                        const notaPonderada3 = parseFloat(nota3) * parseFloat(peso3);

                        const somaPesos = parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3);
                        const mediaPonderada = (notaPonderada1 + notaPonderada2 + notaPonderada3) / somaPesos;

                        console.log("A média ponderada é: " + mediaPonderada.toFixed(2));

                        rl.close();
                    });
                });
            });
        });
    });
});

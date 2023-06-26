const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um raio do círculo: ", (raio) => {
    const area = Math.PI * (raio * raio);
    console.log("O valor da área do círculo é: ", area);

    rl.close();
});
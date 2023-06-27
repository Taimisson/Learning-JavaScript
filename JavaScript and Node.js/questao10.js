const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma quantidade de horas: ", (horas) => {
    minutos = horas * 60;
    segundos = minutos * 60;

    console.log(`${horas}h equivale a ${minutos} minutos ou ${segundos} segundos!`)

    rl.close()
})
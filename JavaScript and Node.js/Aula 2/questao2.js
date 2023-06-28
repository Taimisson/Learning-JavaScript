const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu peso? KG: ", (kg) => {
    rl.question("Qual a sua altura? Metros: ", (altura) => {

        const peso = parseFloat(kg);
        const alturaEmMetros = parseFloat(altura.replace(",","."));
        const imc = peso / (alturaEmMetros * alturaEmMetros);

        console.log("Seu IMC é: " + imc.toFixed(2));

        rl.close();
    })
})
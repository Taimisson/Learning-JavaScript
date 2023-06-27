const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a temperatura em Celsius para a Conversão em Fahrenheit: ", (celsius)=>{
    const Fahrenheit = (celsius * 9/5) + 32
    console.log(`A conversão de ${celsius} para Fahrenheit é: ${Fahrenheit}° F`);

    rl.close()
})
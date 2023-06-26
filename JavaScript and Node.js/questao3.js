const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (idade) => {
    if(idade >= 18){
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }

    rl.close()
})
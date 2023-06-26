const readline = require("readline"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite seu nome, por favor: ", (nome) => {
    console.log("Olá,", nome, "seja bem-vindo(a)");
    
    rl.close();

});


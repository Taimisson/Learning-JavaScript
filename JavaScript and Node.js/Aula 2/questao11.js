const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (idade) => {
    if(+idade < 18){
        console.log("Você não pode entrar na festa.");
    } else if (+idade >= 18){
        console.log("Você pode entrar na festa.");
    } else {
        console.log("Digite uma resposta válida!");
    } 

    rl.close();
});
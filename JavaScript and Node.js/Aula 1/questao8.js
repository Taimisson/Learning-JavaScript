const readline = require("readline");

const rl = readline.createInterface({
    intput: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (num) => {
    num = parseInt(num)
    
    if(num === 0){
        console.log("O número é zero.");
    } else if(num < 0){
        console.log("O numero é negativo.");
    } else if(num > 0){
        console.log("O número é positivo");
    } else {
        console.log("O número digitado é inválido!")
    }

    rl.close()
})
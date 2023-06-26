const readline = require("readline"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) =>{
        const soma = Number(n1) + Number(n2);
        console.log(`A soma dos números ${n1} e ${n2} é: ${soma}`);
        rl.close();
    })
});
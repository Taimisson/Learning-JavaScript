// const readline = require("readline"); 

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Digite o primeiro número: ", (n1) => {
//     rl.question("Digite o segundo número: ", (n2) =>{
//         const soma = Number(n1) + Number(n2);
//         console.log(`A soma dos números ${n1} e ${n2} é: ${soma}`);
//         rl.close();
//     })
// });


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um número: ", (numero) => {
    if (number % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }
    rl.close();
});

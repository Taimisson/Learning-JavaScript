const { parse } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro valor: ", (num1) => {
    rl.question("Digite o segundo valor: ", (num2) => {
        rl.question("Digite o terceiro valor: ", (num3) => {

            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = parseInt(num3);

            console.log(`O maior número é ${Math.max(num1, num2, num3)}`)
            console.log(`O menor número é ${Math.min(num1, num2, num3)}`)

            rl.close()

        })
    })
})
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite o primeiro número: ", (num1)=>{
    rl.question("Digite o segundo número: ", (num2) =>{
        if(+num1 === +num2){
            console.log("Os números são iguais!");
        } else if (+num1 > +num2){
            console.log("O primeiro número é maior que o segundo número!");
        } else if (+num1 < +num2){
            console.log("O segundo número é maior que o primeiro número!");
        }

        rl.close()
    })
})

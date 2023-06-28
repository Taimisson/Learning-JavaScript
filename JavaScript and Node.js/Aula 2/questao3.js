const readline = require("readline");

const rl = readline.createInterface({
    intput: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor em R$: ", (reais) => {
    const dolar = +reais * 4.84

    console.log(`O valor de R$${reais} convertido em dólar é $${dolar}. (Taxa de câmbio atual: 1$ = R$4,84)`);
    
    rl.close();
});
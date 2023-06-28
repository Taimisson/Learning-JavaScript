const readline = require("readline");

// Valores pré-definidos de login e senha
const loginPadrao = "usuario";
const senhaPadrao = "senha123";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o login: ", (login) => {
    rl.question("Digite a senha: ", (senha) => {
        if (login === loginPadrao && senha === senhaPadrao) {
            console.log("Login bem-sucedido!");
        } else {
            console.log("Login e/ou senha incorretos. Acesso negado.");
        }

        rl.close();
    });
});

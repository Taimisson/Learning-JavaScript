"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loja_1 = require("./Loja");
var rl = require("readline-sync");
var menu = false;
while (menu === false) {
    var opcao = rl.questionInt("Selecione a op\u00E7\u00E3o:\n    1 - Cadastrar loja\n    2 - Adicionar produto\n    3 - Visualizar produto\n    4 - Remover produto\n    5 - Sair\n    Digite: ");
    switch (opcao) {
        case 1:
            var nomeLoja = rl.question("Qual o nome da loja? ");
            var enderecoLoja = rl.question("Qual o endereço da loja? ");
            var novaLoja = new Loja_1.Loja(nomeLoja, enderecoLoja);
            console.log("A loja ".concat(novaLoja.nome, " no Endere\u00E7o: ").concat(novaLoja.endereco, " foi cadastrada."));
            break;
        case 2:
            var nomeProduto = rl.question("Qual o nome do produto? ");
            var novoProduto = nomeProduto;
            novoProduto.adicionarProduto();
            break;
        case 5:
            console.log("Saindo...");
            menu = true;
            break;
    }
    ;
}

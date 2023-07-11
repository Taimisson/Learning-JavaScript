"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var rl = require("readline-sync");
var menu = true;
while (menu === true) {
    var opcao = rl.questionInt("Escolha sua op\u00E7\u00E3o: \n    1 - Cachorro\n    2 - Gato\n    3 - P\u00E1ssaro\n    4 - Sair\n    Digite aqui: ");
    switch (opcao) {
        case 1:
            var nomeDog = rl.question("Qual o nome do seu cachorro? ");
            var novoDog = new Animal_1.Cachorro(nomeDog);
            novoDog.latir();
            break;
        case 2:
            var nomeGato = rl.question("Qual o nome do seu cachorro? ");
            var novoGato = new Animal_1.Gato(nomeGato);
            novoGato.miar();
            break;
        case 3:
            var nomePássaro = rl.question("Qual o nome do seu cachorro? ");
            var novoPássaro = new Animal_1.Pássaro(nomePássaro);
            novoPássaro.piar();
            break;
        case 4:
            console.log("Saindo...");
            menu = false;
            break;
    }
    ;
}
;

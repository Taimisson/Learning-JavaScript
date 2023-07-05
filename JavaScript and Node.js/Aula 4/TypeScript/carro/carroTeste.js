"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var rl = require("readline-sync");
var carros = [];
var menu = true;
var _loop_1 = function () {
    console.log("Menu: \n  1- Construir Carro\n  2- Verificar Carro\n  0 - Sair");
    var option = rl.question("Escolha a opção pelo número: ");
    switch (option) {
        case "1":
            var marca = rl.question("Digite a marca do carro: ");
            var modelo = rl.question("Digite o modelo do carro: ");
            var ano = rl.question("Digite o ano do carro: ");
            var carroNovo = new carro_1.Carro(marca, modelo, ano);
            carros.push(carroNovo);
            console.log("Novo carro inserido no sistema:");
            console.log("Marca:", carroNovo.marca);
            console.log("Modelo:", carroNovo.modelo);
            console.log("Ano:", carroNovo.ano);
            break;
        case "2":
            var carroConsulta_1 = rl.question("Qual o modelo do carro? ");
            var carrosEncontrados = carros.filter(function (carro) { return carro.modelo === carroConsulta_1; });
            if (carrosEncontrados.length > 0) {
                console.log("Carros encontrados:");
                carrosEncontrados.forEach(function (carro) { return console.log(carro); });
            }
            else {
                console.log("Nenhum carro encontrado com esse modelo.");
            }
            break;
        case "0":
            console.log("Saindo...");
            menu = false;
            break;
    }
};
while (menu === true) {
    _loop_1();
}

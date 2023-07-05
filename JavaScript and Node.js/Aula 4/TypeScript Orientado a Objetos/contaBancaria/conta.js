"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nomeConta, numeroConta) {
        this.nomeConta = nomeConta;
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }
    ;
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
;
var contaNova = new ContaBancaria("teste");

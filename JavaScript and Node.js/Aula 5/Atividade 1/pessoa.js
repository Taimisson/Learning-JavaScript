"use strict";
// Crie uma classe chamada "Pessoa" com as propriedades nome e idade. Adicione um método chamado "cumprimentar" que imprime uma saudação com o nome da pessoa. Em seguida, crie uma instância da classe e chame o método "cumprimentar".
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    ;
    Pessoa.prototype.cumprimentar = function () {
        console.log("Ol\u00E1, seja bem-vindo ".concat(this.nome));
    };
    ;
    return Pessoa;
}());
exports.Pessoa = Pessoa;
;

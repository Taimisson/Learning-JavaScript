"use strict";
// Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno, serão no total três notas. Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    ;
    Aluno.prototype.calcularMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        ;
        return soma / this.notas.length;
    };
    ;
    return Aluno;
}());
exports.Aluno = Aluno;
;

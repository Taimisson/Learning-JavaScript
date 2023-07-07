"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aluno_1 = require("./aluno");
var rl = require("readline-sync");
var nomeAluno = rl.question("Qual o nome do aluno? ");
var aluno = new aluno_1.Aluno(nomeAluno);
for (var i = 1; i <= 3; i++) {
    var nota = parseFloat(rl.question("Digite a nota ".concat(i, ": ")));
    aluno.notas.push(nota);
}
var media = aluno.calcularMedia();
console.log("A m\u00E9dia do aluno ".concat(aluno.nome, " \u00E9 ").concat(media));

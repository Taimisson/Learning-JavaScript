"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var rl = require("readline-sync");
var nomePessoa = rl.question("Qual o seu nome? ");
var idadePessoa = rl.question("Qual a sua idade? ");
var novaPessoa = new pessoa_1.Pessoa(nomePessoa, idadePessoa);
novaPessoa.cumprimentar();

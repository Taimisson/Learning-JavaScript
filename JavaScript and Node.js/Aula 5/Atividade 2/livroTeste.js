"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var rl = require("readline-sync");
var nomeLivro = rl.question("Digite o nome do livro: ");
var autorLivro = rl.question("Digite o autor do livro: ");
var publicacaoLivro = rl.question("Digite o ano de publicação: ");
var livroInformação = new livro_1.Livro(nomeLivro, autorLivro, publicacaoLivro);
livroInformação.obterDetalhes();

import { Livro } from "./livro";
import * as rl from "readline-sync";

const nomeLivro = rl.question("Digite o nome do livro: ");
const autorLivro = rl.question("Digite o autor do livro: ");
const publicacaoLivro = rl.question("Digite o ano de publicação: ");

const livroInformação = new Livro(nomeLivro, autorLivro, publicacaoLivro);

livroInformação.obterDetalhes();

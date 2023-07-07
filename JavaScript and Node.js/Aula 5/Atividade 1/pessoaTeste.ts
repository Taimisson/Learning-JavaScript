import { Pessoa } from "./pessoa";
import * as rl from "readline-sync";

const nomePessoa = rl.question("Qual o seu nome? ");
const idadePessoa = rl.question("Qual a sua idade? ");

const novaPessoa = new Pessoa(nomePessoa, idadePessoa)

novaPessoa.cumprimentar();

import { ContaBancaria } from "./conta";
import * as rl from "readline-sync";

const nomeConta = rl.question("Qual o nome do proprietário da conta? ");
const numeroConta = rl.question("Qual o número da conta? ");

const contaNova = new ContaBancaria(nomeConta, numeroConta);

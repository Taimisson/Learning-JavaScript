import { Carro } from "./carro"
import * as rl from "readline-sync";

const marca = rl.question("Digite a marca do carro: ");
const modelo = rl.question("Digite o modelo do carro: ");
const ano = rl.question("Digite o ano do carro: ");

const civic = new Carro(marca, modelo, ano);

console.log(civic);

civic.ligar();

const velocidade = rl.questionInt("Digite a velocidade que irá acelerar: ");

civic.acelerar(velocidade);

civic.desligar();

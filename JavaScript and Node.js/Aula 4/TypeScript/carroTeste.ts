import { Carro } from "./carro";
import * as rl from "readline-sync";

const carros: Carro[] = [];
let menu: boolean = true;

while (menu === true) {
  console.log(`Menu: 
  1- Construir Carro
  2- Verificar Carro
  0 - Sair`);

  const option = rl.question("Escolha a opção pelo número: ");

  switch (option) {
    case "1":
      const marca = rl.question("Digite a marca do carro: ");
      const modelo = rl.question("Digite o modelo do carro: ");
      const ano = rl.question("Digite o ano do carro: ");

      const carroNovo = new Carro(marca, modelo, ano);
      carros.push(carroNovo);

      console.log("Novo carro inserido no sistema:");
      console.log("Marca:", carroNovo.marca);
      console.log("Modelo:", carroNovo.modelo);
      console.log("Ano:", carroNovo.ano);

      break;

    case "2":
      const carroConsulta = rl.question("Qual o modelo do carro? ");
      const carrosEncontrados = carros.filter(carro => carro.modelo === carroConsulta);

      if (carrosEncontrados.length > 0) {
        console.log("Carros encontrados:");
        carrosEncontrados.forEach(carro => console.log(carro));
      } else {
        console.log("Nenhum carro encontrado com esse modelo.");
      }
      break;

    case "0":
      console.log("Saindo...");
      menu = false;
      break;
  }
}

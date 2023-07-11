import { Cachorro, Gato, Pássaro } from "./Animal";
import * as rl from "readline-sync";

let menu: boolean = true;

while(menu === true){
    const opcao = rl.questionInt(`Escolha sua opção: 
    1 - Cachorro
    2 - Gato
    3 - Pássaro
    4 - Sair
    Digite aqui: `)
    switch(opcao){
        case 1:
            const nomeDog = rl.question("Qual o nome do seu cachorro? ");
            const novoDog = new Cachorro(nomeDog);
            novoDog.latir();
            break;
        case 2:
            const nomeGato = rl.question("Qual o nome do seu cachorro? ");
            const novoGato = new Gato(nomeGato);
            novoGato.miar();
            break;
        case 3:
            const nomePássaro = rl.question("Qual o nome do seu cachorro? ");
            const novoPássaro = new Pássaro(nomePássaro);
            novoPássaro.piar();
            break;
        case 4: 
            console.log("Saindo...");
            menu = false;
            break;
    };
};
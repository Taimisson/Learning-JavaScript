import { Loja } from "./Loja";
import * as rl from "readline-sync";

let menu: boolean = false;

while(menu === false){
    const opcao = rl.questionInt(`Selecione a opção:
    1 - Cadastrar loja
    2 - Adicionar produto
    3 - Visualizar produto
    4 - Remover produto
    5 - Sair
    Digite: `)

    switch(opcao){
        case 1:
            const nomeLoja = rl.question("Qual o nome da loja? ");
            const enderecoLoja = rl.question("Qual o endereço da loja? ");
            const novaLoja = new Loja(nomeLoja, enderecoLoja);
            console.log(`A loja ${novaLoja.nome} no Endereço: ${novaLoja.endereco} foi cadastrada.`);
            break;
        
        case 2:
            console.log(adicionarProduto(rl.question("Qual o nome do produto? ")))




        case 5:
            console.log("Saindo...");
            menu = true;
            break;
    };
}
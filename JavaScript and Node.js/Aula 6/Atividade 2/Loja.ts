interface Produto{
    nome: string;
    preco: number;
}

export class Loja{
    nome: string;
    endereco: string;
    produtos: Produto[];

    constructor(nome: string, endereco: string){
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    };

    adicionarProduto(produto: Produto): void{
        this.produtos.push(produto);
        console.log(`O produto ${produto.nome} foi adicionado!`);
    }

    removerProduto(produto: Produto){
        const index = this.produtos.indexOf(produto);
        if (index !== -1){
            this.produtos.slice(index, 1);
            return console.log("Produto " + produto.nome + " foi removido com sucesso!");
        } else {
            console.log("O produto: " + produto.nome, + "não foi encontrado!");
        };
    }

    exibirProdutos(): void{
        console.log("Os produtos disponíveis são: ");
        for (let produto of this.produtos){
            console.log(`${produto.nome} - R$${produto.preco}`);
        }
    }
}
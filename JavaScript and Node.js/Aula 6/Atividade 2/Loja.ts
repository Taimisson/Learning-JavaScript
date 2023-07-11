export class Loja{
    nome: string;
    endereco: string;
    produtos: string[];

    constructor(nome: string, endereco: string){
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    };

    adicionarProduto(produto: string){
        this.produtos.push(produto);
        return console.log("Produto adicionado!");
    };

    removerProduto(produto: string){
        const index = this.produtos.indexOf(produto);
        if (index !== -1){
            this.produtos.slice(index, 1);
            return console.log("Produto removido com sucesso!");
        };
    };

    exibirProdutos():void{
        console.log("Produtos disponíveis na loja: ");
        if (this.produtos.length === 0 ){
            console.log("Não há produtos disponíveis");
        } else {
            this.produtos.forEach((produto) => {console.log(produto);
            })
        };
    };
};


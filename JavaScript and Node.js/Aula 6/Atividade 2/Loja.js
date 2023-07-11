"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    }
    ;
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
        return console.log("Produto adicionado!");
    };
    ;
    Loja.prototype.removerProduto = function (produto) {
        var index = this.produtos.indexOf(produto);
        if (index !== -1) {
            this.produtos.slice(index, 1);
            return console.log("Produto removido com sucesso!");
        }
        ;
    };
    ;
    Loja.prototype.exibirProdutos = function () {
        console.log("Produtos disponíveis na loja: ");
        if (this.produtos.length === 0) {
            console.log("Não há produtos disponíveis");
        }
        else {
            this.produtos.forEach(function (produto) {
                console.log(produto);
            });
        }
        ;
    };
    ;
    return Loja;
}());
exports.Loja = Loja;
;

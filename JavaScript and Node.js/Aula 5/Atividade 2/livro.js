"use strict";
// Crie uma classe chamada "Livro" com as propriedades título, autor e anoPublicacao. Adicione um método chamado "obterDetalhes" que retorna uma string com todas as informações do livro. Em seguida, crie uma instância da classe e chame o método "obterDetalhes".
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("-=-=- Informações do Livro -=-=-");
        console.log("Título: " + this.titulo + "\nAutor: " + this.autor + "\nAno de Publicação: " + this.anoPublicacao);
    };
    ;
    return Livro;
}());
exports.Livro = Livro;

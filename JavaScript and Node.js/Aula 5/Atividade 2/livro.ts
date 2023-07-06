// Crie uma classe chamada "Livro" com as propriedades título, autor e anoPublicacao. Adicione um método chamado "obterDetalhes" que retorna uma string com todas as informações do livro. Em seguida, crie uma instância da classe e chame o método "obterDetalhes".

export class Livro{
    titulo: String;
    autor: String;
    anoPublicacao: Number;
    
    constructor(titulo: String, autor: String, anoPublicacao: Number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    
    obterDetalhes():void{
        console.log("-=-=- Informações do Livro -=-=-")
        console.log("Título: "+ this.titulo + "\nAutor: " + this.autor + "\nAno de Publicação: " + this.anoPublicacao);
    };
    
}
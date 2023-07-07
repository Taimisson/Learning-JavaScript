// Crie uma classe chamada "Pessoa" com as propriedades nome e idade. Adicione um método chamado "cumprimentar" que imprime uma saudação com o nome da pessoa. Em seguida, crie uma instância da classe e chame o método "cumprimentar".

export class Pessoa{
    nome: String;
    idade: Number;

    constructor(nome: String, idade: number){
        this.nome = nome;
        this.idade = idade;
    };

    cumprimentar(): void{
        console.log(`Olá, seja bem-vindo ${this.nome}`);
    };
};
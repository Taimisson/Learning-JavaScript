// Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno, serão no total três notas. Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.

export class Aluno{
    nome: string;
    notas: number[];

    constructor(nome: string){
        this.nome = nome;
        this.notas = [];
    };

    calcularMedia(): number{
        let soma = 0 ;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        };
        return soma / this.notas.length;
    };
};
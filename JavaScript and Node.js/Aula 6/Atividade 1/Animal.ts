export class Animal{
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    };
};

export class Cachorro extends Animal{
    latir(){
        console.log(`Olá, eu sou o ${this.nome}! Au, au, au`);
    }
}

export class Gato extends Animal{
    miar(){
        console.log(`Olá, eu sou o ${this.nome}! Miau, miau`);
    }
}

export class Pássaro extends Animal{
    piar(){
        console.log(`Olá, eu sou o ${this.nome}! Flap, flap`);
    }
}


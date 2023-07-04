class Carro {
    marca: String;
    modelo: String;
    ano: Number;
    ligado: boolean;

    constructor(marca: String, modelo: String, ano: Number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    };

    ligar(): void{
        if(!this.ligado){
            this.ligado = true;
            console.log("O carro foi ligado!");
        } else {
            console.log("O carro já está ligado!");
        };
    };

    desligar(): void{
        if(this.ligado){
            this.ligado = false;
            console.log("O carro foi desligado!");
        } else {
            console.log("O carro já está desligado!");
        };
    };



};

const civic = new Carro("Honda", "Civic", 2022);
console.log(civic)
//Crie uma classe "Carro" com propriedades como marca, 
//modelo, ano e métodos para ligar, desligar e acelerar o carro.
export class Carro {
    id: number;
    marca: String;
    modelo: String;
    ano: number;
    ligado: Boolean;
    velocidade: number;

    constructor(id: number, marca: string, modelo: string, ano: number){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar(): void {
        if(!this.ligado){
            this.ligado = true;
            console.log("O carro foi ligado");
        } else {
            console.log("O carro já está ligado");
        }
}

    desligar(): void {
        if(this.ligado){
            this.ligado = false;
            console.log("O carro foi desligado");
        } else {
            console.log("O carro já está desligado");
        }
    }

    acelerar(velocidade: number): void{
        if(this.ligado){
            this.velocidade += velocidade;
            console.log("O carro acelerou para: ", velocidade, "km/h");
        } else {
            console.log("Não é possível acelerar pois o carro está desligado");
        }
    }

};

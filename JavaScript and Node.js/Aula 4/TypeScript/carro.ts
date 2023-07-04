export class Carro {
    marca: string;
    modelo: string;
    ano: number;
    ligado: boolean;
    velocidade: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro foi ligado!");
        } else {
            console.log("O carro já está ligado!");
        }
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro foi desligado!");
        } else {
            console.log("O carro já está desligado!");
        }
    }

    acelerar(velocidade: number): void{
        if(this.ligado){
            this.velocidade += velocidade;
            console.log("O carro acelerou para: " + velocidade + " km/h");
        } else {
            console.log("Não é possível acelerar pois o carro está desligado!");
        }
    }

}

// const civic = new Carro("Honda", "Civic", 2022);
// console.log(civic);

// const gol = new Carro("Volkswagen", "Gol", 2005);
// console.log(gol);
// gol.ligar();
// gol.ligar()
// gol.desligar();

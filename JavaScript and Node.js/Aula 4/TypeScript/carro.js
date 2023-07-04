var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.ligar = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro foi ligado!");
        }
        else {
            console.log("O carro já está ligado!");
        }
    };
    Carro.prototype.desligar = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro foi desligado!");
        }
        else {
            console.log("O carro já está desligado!");
        }
    };
    return Carro;
}());
// const civic = new Carro("Honda", "Civic", 2022);
// console.log(civic)
var gol = new Carro("Volkswagen", "Gol", 2005);
console.log(gol);
gol.ligar();
gol.ligar();
gol.desligar();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
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
    Carro.prototype.acelerar = function (velocidade) {
        if (this.ligado) {
            this.velocidade += velocidade;
            console.log("O carro acelerou para: " + velocidade + "km/h");
        }
        else {
            console.log("Não é possível acelerar pois o carro está desligado!");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
// const civic = new Carro("Honda", "Civic", 2022);
// console.log(civic);
// const gol = new Carro("Volkswagen", "Gol", 2005);
// console.log(gol);
// gol.ligar();
// gol.ligar()
// gol.desligar();

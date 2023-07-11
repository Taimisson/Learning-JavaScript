"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pássaro = exports.Gato = exports.Cachorro = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    ;
    return Animal;
}());
exports.Animal = Animal;
;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("Ol\u00E1, eu sou o ".concat(this.nome, "! Au, au, au"));
    };
    return Cachorro;
}(Animal));
exports.Cachorro = Cachorro;
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.miar = function () {
        console.log("Ol\u00E1, eu sou o ".concat(this.nome, "! Miau, miau"));
    };
    return Gato;
}(Animal));
exports.Gato = Gato;
var Pássaro = /** @class */ (function (_super) {
    __extends(Pássaro, _super);
    function Pássaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pássaro.prototype.piar = function () {
        console.log("Ol\u00E1, eu sou o ".concat(this.nome, "! Flap, flap"));
    };
    return Pássaro;
}(Animal));
exports.Pássaro = Pássaro;

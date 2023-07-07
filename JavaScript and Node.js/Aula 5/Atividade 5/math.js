// Crie um arquivo com várias classes: Círculo, Triângulo e Retângulo. Cada uma terá um método chamado calcularArea que faz o calculo de acordo com sua fórmula.
var Círculo = /** @class */ (function () {
    function Círculo() {
    }
    Círculo.calcularArea = function (raio) {
        return Math.PI * Math.pow(raio, 2);
    };
    return Círculo;
}());
;
var Triângulo = /** @class */ (function () {
    function Triângulo() {
    }
    Triângulo.calcularArea = function (base, altura) {
        return (base / altura) / 2;
    };
    return Triângulo;
}());
;
var Retângulo = /** @class */ (function () {
    function Retângulo() {
    }
    Retângulo.calcularArea = function (largura, altura) {
        return largura * altura;
    };
    ;
    return Retângulo;
}());
// Exemplo de uso da classe Círculo
var raio = 5;
var areaCirculo = Círculo.calcularArea(raio);
console.log("\u00C1rea do c\u00EDrculo com raio ".concat(raio, ": ").concat(areaCirculo.toFixed(2)));
// Exemplo de uso da classe Triângulo
var base = 8;
var altura = 4;
var areaTriangulo = Triângulo.calcularArea(base, altura);
console.log("\u00C1rea do tri\u00E2ngulo com base ".concat(base, " e altura ").concat(altura, ": ").concat(areaTriangulo));
// Exemplo de uso da classe Retângulo
var largura = 10;
var alturaRetangulo = 6;
var areaRetangulo = Retângulo.calcularArea(largura, alturaRetangulo);
console.log("\u00C1rea do ret\u00E2ngulo com largura ".concat(largura, " e altura ").concat(alturaRetangulo, ": ").concat(areaRetangulo));

// Crie uma classe chamada "Calculadora" com métodos estáticos para realizar operações matemáticas, como "soma", "subtracao", "multiplicacao" e "divisao". Chame os métodos da classe diretamente, sem criar uma instância da classe, para realizar algumas operações matemáticas e imprimir os resultados.
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.soma = function (a, b) {
        return a + b;
    };
    ;
    Calculadora.subtracao = function (a, b) {
        return a - b;
    };
    ;
    Calculadora.multiplicacao = function (a, b) {
        return a * b;
    };
    ;
    Calculadora.divisao = function (a, b) {
        return a / b;
    };
    return Calculadora;
}());
console.log("Soma:", Calculadora.soma(5, 5));
console.log("Subtração:", Calculadora.subtracao(5, 5));
console.log("Multiplicação:", Calculadora.multiplicacao(5, 5));
console.log("Divisão:", Calculadora.divisao(5, 5));

// Crie uma classe chamada "Calculadora" com métodos estáticos para realizar operações matemáticas, como "soma", "subtracao", "multiplicacao" e "divisao". Chame os métodos da classe diretamente, sem criar uma instância da classe, para realizar algumas operações matemáticas e imprimir os resultados.

class Calculadora{

    static soma(a: number, b: number): number{
        return a + b;
    };

    static subtracao(a: number, b: number): number{
        return a - b;
    };

    static multiplicacao(a: number, b: number): number{
        return a * b;
    };

    static divisao(a: number, b: number): number{
        return a / b;
    }
}

console.log("Soma:", Calculadora.soma(5, 5));
console.log("Subtração:", Calculadora.subtracao(5, 5));
console.log("Multiplicação:", Calculadora.multiplicacao(5, 5));
console.log("Divisão:", Calculadora.divisao(5, 5));
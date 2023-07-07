// Crie um arquivo com várias classes: Círculo, Triângulo e Retângulo. Cada uma terá um método chamado calcularArea que faz o calculo de acordo com sua fórmula.

class Círculo{

    static calcularArea(raio): number{
        return Math.PI * Math.pow(raio, 2);
    }
};

class Triângulo{
    static calcularArea(base, altura): number{
        return (base / altura) / 2;
    }
};

class Retângulo{

    static calcularArea(largura, altura): number{
        return largura * altura
    };
}

// Exemplo de uso da classe Círculo
const raio = 5;
const areaCirculo = Círculo.calcularArea(raio);
console.log(`Área do círculo com raio ${raio}: ${areaCirculo.toFixed(2)}`);

// Exemplo de uso da classe Triângulo
const base = 8;
const altura = 4;
const areaTriangulo = Triângulo.calcularArea(base, altura);
console.log(`Área do triângulo com base ${base} e altura ${altura}: ${areaTriangulo}`);

// Exemplo de uso da classe Retângulo
const largura = 10;
const alturaRetangulo = 6;
const areaRetangulo = Retângulo.calcularArea(largura, alturaRetangulo);
console.log(`Área do retângulo com largura ${largura} e altura ${alturaRetangulo}: ${areaRetangulo}`);
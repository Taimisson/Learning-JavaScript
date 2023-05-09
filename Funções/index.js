function calcularArea(numero1, numero2){
    // Aqui é uma função
    const altura = numero1
    const largura = numero2
    const area = altura * largura
    console.log(area)
}

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

calcularArea(primeiroNumero, segundoNumero)
// function calcularArea(numero1, numero2){
//     // Aqui é uma função
//     const altura = numero1
//     const largura = numero2
//     const area = altura * largura
//     console.log(area)
// }

// const primeiroNumero = Number(prompt("Digite um número"))
// const segundoNumero = Number(prompt("Digite outro número"))

// calcularArea(primeiroNumero, segundoNumero)

// function exibirNome(nome){
//     console.log(`Olá ${nome}`)
// }

// const nome = prompt("Digite o nome")

// exibirNome(nome)
// exibirNome("Pedro")
// exibirNome("Lucas")


// function somar(numero1, numero2){
//     const soma = numero1 + numero2
//     return soma
// }

// console.log(somar(10,20))

// function multiplicar(variavel){
//     return variavel * 5
// }

// console.log(multiplicar(5))
// console.log(multiplicar(10))



function exibirPessoa(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}

const nomePessoa = prompt("Digite o nome")
const idadePessoa = prompt("Digite a idade")
const cidadePessoa = prompt("Digite a cidade")
const profissaoPessoa = prompt("Digite a profissão")

exibirPessoa(nomePessoa, idadePessoa, cidadePessoa, profissaoPessoa)
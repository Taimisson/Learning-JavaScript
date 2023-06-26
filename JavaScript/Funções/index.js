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



// function exibirPessoa(nome, idade, cidade, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
// }

// const nomePessoa = prompt("Digite o nome")
// const idadePessoa = prompt("Digite a idade")
// const cidadePessoa = prompt("Digite a cidade")
// const profissaoPessoa = prompt("Digite a profissão")

// exibirPessoa(nomePessoa, idadePessoa, cidadePessoa, profissaoPessoa)

// function somar(n1, n2){
//     return n1 + n2
// }

// function verificarMaior(n1, n2){
//     return n1 > n2
// }

// function verificarPar(n1){
//     return n1 % 2 === 0
// }

// const numero1 = Number(prompt("Digite o primeiro número"))
// const numero2 = Number(prompt("Digite o segundo número"))

// console.log(somar(numero1, numero2))
// console.log(verificarMaior(numero1,numero2))
// console.log(verificarPar(numero1,numero2))

// function imprimirMensagem(mensagem){
//     const tamanhoMensagem = mensagem.length
//     const mensagemMaiuscula = mensagem.toUpperCase()

//     return tamanhoMensagem, mensagemMaiuscula
// }

// console.log(imprimirMensagem("É sola da bota, e na palma da bota"))

// function somar(n1, n2){
//     return n1 + n2
// }

// function subtrair(n1, n2){
//     return n1 - n2
// }

// function multiplicar(n1, n2){
//     return n1 * n2
// }

// function dividir(n1, n2){
//     return n1 / n2
// }

// const numero1 = Number(prompt("Digite um número"))
// const numero2 = Number(prompt("Digite outro número"))

// console.log(`A soma é ${somar(numero1,numero2)}, \nA substração é ${subtrair(numero1,numero2)}, \nA multiplicação é ${multiplicar(numero1,numero2)}, \nA divisão é ${dividir(numero1,numero2)}`)

const imprimir = (mensagem) => {
    console.log(mensagem)
}

const receberValores = (n1,n2) => {
    const somar = n1+n2
    imprimir(somar)
}

receberValores(10,20)


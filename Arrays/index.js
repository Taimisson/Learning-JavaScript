// const nome = prompt("Qual o seu nome?")
// const cor = prompt("Qual a sua cor favorita?")

// // console.log(`A cor favorita de ${nome} é ${cor}`)

// console.log("A cor favorita de "+ nome + " é " + cor +".")

// -------------------

// const nome = prompt("Digite um nome:")

// console.log(nome.length)
// console.log(nome.toLowerCase())
// console.log(nome.toUpperCase())
// console.log(nome.trim())
// console.log(nome.trim().toUpperCase())
// console.log(nome.includes("jose"))
// console.log(nome.toLowerCase().includes("maria"))

// const novoNome = nome.replace("Jose","Carlos")

// console.log("O novo nome", novoNome)

// -------------------

const frase = prompt("Escreva uma frase")

console.log(frase.toUpperCase())

const novaFrase = frase.toUpperCase().replace(/O/gi,"I")

console.log("Nova frase:",novaFrase)
console.log("O tamanho da frase é",frase.length)
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

// const frase = prompt("Escreva uma frase")

// console.log(frase.toUpperCase())

// const novaFrase = frase.toUpperCase().replace(/O/gi,"I")

// console.log("Nova frase:",novaFrase)
// console.log("O tamanho da frase é",frase.length)

// -------------------

// const escolha = Number(prompt("Escolha um número de 1 a 5"))

// const cachorros = ["Caramelo", "Pinscher", "Vira-lata", "Dalmata", "Golden"]
// console.log(cachorros[escolha-1])

// -------------------

// const pokemons = ["Pikachu", "Bulbasauro", "Squirtle", "Charizard"]

// console.log(pokemons.length)
// console.log(pokemons.includes("Pikachu"))


// console.log(pokemons.push("Mew"))
// console.log(pokemons);

// pokemons.pop()
// console.log(pokemons)

// pokemons.splice(0,1)
// console.log(pokemons)

// -------------------

// let numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.length)

// numbers.push(7)
// console.log(numbers)
// numbers.splice(3, 2)

// console.log(numbers)
// console.log(numbers.length)

// -------------------


// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// -------------------

// Ex01

// const username = prompt("Qual o seu nome?")
// const email = prompt("Qual o seu email?")

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a), ${username}!`)

// -------------------

// Ex02

// const favFoods = ["Macarrão", "Feijão", "Arroz", "Carne", "Maçã"]

// console.log(favFoods)
// console.log(`Minhas comidas favoritas são: 
// ${favFoods[0]} 
// ${favFoods[1]} 
// ${favFoods[2]} 
// ${favFoods[3]} 
// ${favFoods[4]}
// `)


// const favUser = prompt("Qual sua comida favorita?")
// favFoods[1] = favUser
// console.log(favFoods)

// -------------------

// const listaDeTarefas = []

// const tarefa1 = prompt("Qual a sua primeira tarefa do dia?")
// const tarefa2 = prompt("Qual a sua segunda tarefa do dia?")
// const tarefa3 = prompt("Qual a sua terceira tarefa do dia?")

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
// console.log(listaDeTarefas)

// const tarefaFeita = prompt(`Qual tarefa já foi feita? Tarefa 0: ${listaDeTarefas[0]} | Tarefa 1: ${listaDeTarefas[1]} | Tarefa 3: ${listaDeTarefas[2]}`)

// listaDeTarefas.splice(tarefaFeita, 1)
// console.log("Ainda faltam essas tarefas:",listaDeTarefas)

// -------------------

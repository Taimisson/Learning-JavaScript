// const num1 = 5
// const num2 = 5

// if (num1===num2){
//     console.log(`O primeiro núm é igual ao segundo número.`)
// }

// function compararNumero(n1,n2){
//     if (n1 > n2){
//         console.log(`O número ${n1} é maior que o ${n2}.`)
//     }else if (n1 < n2){
//         console.log(`O número ${n1} é menor que o ${n2}.`)
//     }else if (n1 === n2){
//         console.log(`O número ${n1} é igual ao ${n2}.`)
//     }
// }

// const firstNumber = Number(prompt("Digite o primeiro número"))
// const secondNumber = Number(prompt("Digite o segundo número"))

// compararNumero(firstNumber,secondNumber)


// swtich case

// let paisdeOrigem
// switch(paisdeOrigem){
//     case "Inglaterra":
//         console.log("Inglês");
//     case "Brasil":
//         console.log("Brasileiro");
//     case "EUA":
//         console.log("Estadunidense");
//     case "Canadá":
//         console.log("Canadense");
//     default:
//         console.log("Nacionalidade não encontrada");
// }

// Ex 01

let pokemon = prompt("Escolha um pokemon: Bulbasauro | Charmander | Squirtle").toLowerCase()

switch(pokemon){
    case "bulbasauro":
        console.log("Bulbasauro - Planta e Veneno");
        break;
    case "charmander":
        console.log("Charmander - Fogo");
        break;
    case "squirtle":
        console.log("Squirtle - Água");
        break;
    default:
        console.log("O pokémon não está na Pokedex!");
}
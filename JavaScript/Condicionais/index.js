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

// let pokemon = prompt("Escolha um pokemon: Bulbasauro | Charmander | Squirtle").toLowerCase()

// switch(pokemon){
//     case "bulbasauro":
//         console.log("Bulbasauro - Planta e Veneno");
//         break;
//     case "charmander":
//         console.log("Charmander - Fogo");
//         break;
//     case "squirtle":
//         console.log("Squirtle - Água");
//         break;
//     default:
//         console.log("O pokémon não está na Pokedex!");
// }

// Ex 02

// const ensinoMedio = prompt("Você terminou o ensino médio? (Sim/Não)").toLowerCase().charAt()
// const idade = Number(prompt("Qual a sua idade?"))
// const faculdade = prompt("Está cursando uma faculdade pública?")

// function matricula(medio, maiorIdade, facul){
//     if (medio == "s" && maiorIdade >= 18 && facul =="n"){
//         console.log("Você pode se matricular na faculdade!")
//     }else{
//         if (maiorIdade < 18){
//             console.log("Você é menor de idade, não pode se matricular!")
//         }

//         if(medio == "n"){
//             console.log("Você não concluiu o Ensino Médio, não pode se matricular!")
//         }

//         if(facul == "s"){
//             console.log("Você está cursando outra faculdade pública, não pode se matricular!")
//         }
//     }
// }

// matricula(ensinoMedio, idade, faculdade)

// Ex 01

// const idade = Number(prompt("Digite a sua idade"))

// if(idade >= 18){
//     console.log("Você pode dirigir!")
// }else{
//     console.log("Você não pode dirigir!")
// }

// Ex 02

// const turno = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

// if(turno === "M"){
//     console.log("Bom dia!")
// }else if(turno === "V"){
//     console.log("Boa tarde!")
// }else if(turno === "N"){
//     console.log("Boa noite!")
// }

// Ex 03

// const turno = prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch(turno){
//     case "M":
//         console.log("Bom dia!");
//         break;
//     case "V":
//         console.log("Boa tarde!");
//         break;
//     case "N":
//         console.log("Boa noite!");
//         break;
// }

// Ex 04

const filme = prompt("Qual o gênero do filme que deseja assistir?").toLowerCase()
const preço = Number(prompt("Qual o preço do filme?"))

if(filme === "fantasia" && preço < 15){
    console.log("Bom filme!")
}else{
    if(filme != "fantasia"){
        console.log("Escolha outro filme!")
    } 
    
    if(preço >= 15){
        console.log("Preço muito alto!")
    }
}
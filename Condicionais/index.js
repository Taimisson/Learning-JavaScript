// const num1 = 5
// const num2 = 5

// if (num1===num2){
//     console.log(`O primeiro núm é igual ao segundo número.`)
// }

function compararNumero(n1,n2){
    if (n1 > n2){
        console.log(`O número ${n1} é maior que o ${n2}.`)
    }else if (n1 < n2){
        console.log(`O número ${n1} é menor que o ${n2}.`)
    }else if (n1 === n2){
        console.log(`O número ${n1} é igual ao ${n2}.`)
    }
}

const firstNumber = Number(prompt("Digite o primeiro número"))
const secondNumber = Number(prompt("Digite o segundo número"))

compararNumero(firstNumber,secondNumber)
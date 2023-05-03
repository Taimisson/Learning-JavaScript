// // Variáveis
// const nome = prompt("Qual seu primeiro nome?"); 
// const anoNasc = prompt("Qual ano você nasceu?");

// const anoAtual = new Date().getFullYear() // Ano Atual

// // Idade
// const idade = anoAtual - anoNasc; // Calcular idade da pessoa 
// const idade2050 = 2050 - anoNasc; // Calcular a idade da pessoa em 2050 ao subtrair o ano de 2050 com o ano de nascimento

// // Print
// console.log(nome);
// console.log("Sua idade é:", idade);
// console.log("Maior de idade:", idade >= 18);
// console.log("Sua idade em 2050 será:", idade2050);

// ---------------------

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 // | V e F = F
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 // | V e F e V = F
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) // | = V e V = V 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// ---------------------

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// -------------------------------

// Ex 01

// const idade = Number(prompt("Qual a sua idade?"))
// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo? "))

// console.log("Sua idade é maior que a do seu melhor amigo?", idade > idadeAmigo)
// console.log("Diferença de idade do seu amigo e você: ", idade - idadeAmigo)

// -------------------------------

// Ex 02

// const par = Number(prompt("Digite um número par:"))

// console.log(`O resto da divisão desse número é ${par % 2}`)
// Resto 0 quando par, Resto 1 quando ímpar

// --------------------------------

// Ex 03

// userAge = Number(prompt("Quantos anos você tem?"))

// monthAge = userAge * 12 
// dayAge = userAge * 365
// hoursAge = userAge * 8766

// console.log("Idade do usuário em meses:", monthAge)
// console.log("Idade do usuário em dias:", dayAge)
// console.log("Idade do usuário em horas:", hoursAgefoa)

// --------------------------------

// Ex 04

// const firstNumber = Number(prompt("Digite o primeiro número:"))
// const secondNumber = Number(prompt("Digite o segundo número:"))

// console.log("O primeiro número é maior que o segundo?", firstNumber > secondNumber)
// console.log("O primeiro número é igual ao segundo?", firstNumber === secondNumber)
// console.log("O primeiro numero é divisível pelo segundo?", (firstNumber % secondNumber) % 2 === 0)
// console.log("O segundo número é divisível pelo primeiro?", (secondNumber % firstNumber) === 0)

// --------------------------------

// Desafio 01

// F para Kelvin

// let fahrenheit;
// let kelvin;

// kelvin = (77 - 32)*(5/9) + 273.15 

// console.log("77 Graus Fahrenheit para Kelvin é:", kelvin)

// // C para Fah

// fahrenheit = (80)*(9/5) + 32

// console.log("80 Graus celsius para Fahrenheit é:", fahrenheit)

// // 30 Graus Celsius para Fahrenheit e Kelvin

// fahrenheit = (30)*(9/5) + 32
// kelvin = (30 - 32)*(5/9) + 273.15 

// console.log("30 graus celsius para Fahrenheit e Kelvin é:", fahrenheit,"e", kelvin)

// --------------------------------

// Desafio 02

// const kWh = Number(prompt("Quantos kWh sua residência consome?"))

// valorKWh = kWh * 0.05

// console.log(`Sua residência consumiu ${kWh} kWh.`)
// console.log("O valor a ser pago pela sua residência por quilowatt-hora é: R$", valorKWh)

// desconto = valorKWh - ((15/100) * valorKWh)

// console.log("O valor com desconto de 15% é: R$", desconto)

// --------------------------------


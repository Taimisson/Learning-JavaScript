// Variáveis
const nome = prompt("Qual seu primeiro nome?"); 
const anoNasc = prompt("Qual ano você nasceu?");

const anoAtual = new Date().getFullYear() // Ano Atual

// Idade
const idade = anoAtual - anoNasc; // Calcular idade da pessoa 
const idade2050 = 2050 - anoNasc; // Calcular a idade da pessoa em 2050 ao subtrair o ano de 2050 com o ano de nascimento

// Print
console.log(nome);
console.log("Sua idade é:", idade);
console.log("Maior de idade:", idade >= 18);
console.log("Sua idade em 2050 será:", idade2050);

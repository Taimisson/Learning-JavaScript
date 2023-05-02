// Variáveis
const nome = prompt("Qual seu primeiro nome?"); 
const anoIdade = prompt("Qual ano você nasceu?");

const dataAtual = new Date(); // Variável com data
const anoAtual = dataAtual.getFullYear(); // Ano atual


// Idade
const idade = anoAtual - anoIdade; // Calcular idade da pessoa 
const ano2050 = 2050 - anoAtual // Quanto tempo falta para 2050 
const idade2050 = idade + ano2050; // Calcular a idade da pessoa em 2050

// Print
console.log(nome);
console.log("Sua idade é:", idade);
console.log("Maior de idade:", idade >= 18);
console.log("Sua idade em 2050 será:", idade2050);

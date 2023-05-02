const nome = prompt("Qual seu primeiro nome?");
const anoIdade = prompt("Qual ano você nasceu?");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const idade = anoAtual - anoIdade;
const ano2050 = 2050 - anoAtual
const idade2050 = idade + ano2050;

console.log(nome);
console.log("Sua idade é:", idade);
console.log("Maior de idade:", idade >= 18);
console.log("Sua idade em 2050 será:", idade2050);

// const maior_idade = prompt("É maior de idade? [S/N]").toUpperCase()

// if (maior_idade.charAt(0) === "S") {
//     console.log(nome, "é maior de idade!")
//   } 
// else {
//     console.log(nome, "não é maior de idade!")
//   }
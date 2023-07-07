import { Aluno } from "./aluno";
import * as rl from "readline-sync";

const nomeAluno = rl.question("Qual o nome do aluno? ");

const aluno = new Aluno(nomeAluno);

for (let i = 1; i <= 3; i++){
    const nota = parseFloat(rl.question(`Digite a nota ${i}: `));
    aluno.notas.push(nota);
}

const media = aluno.calcularMedia();

console.log(`A média do aluno ${aluno.nome} é ${media}`)
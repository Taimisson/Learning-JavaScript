// const nome = "Jose"
// const idade = 20
// const endereco = "Rua do Bobo, número 0"

// const usuario = {
//     nome: "Jose",
//     idade: 20,
//     endereco: "Rua do bobo, número 0"
// }

// usuario.nome = "Name"
// usuario.profissao = "Dev"

// console.log(usuario.nome)


// const filme = {
//     nome: "Invocação do Mal",
//     anoLancamento: "2013",
//     diretor: "James Wan",
//     elenco: ["Vera Farmiga", "Patrick Wilson", "Sterling Jerins", "Josepeh Bishara"],
//     assistido: true
// }

// console.log(filme.nome);
// console.log(filme.diretor);
// console.log(filme.elenco);

// const pessoa = {
//     nome: "Taimisson",
//     idade: 19,
//     musica: "POP",
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.musica}.`)

// const endereco = {
//     rua: "Singapura",
//     numero: 0,
//     cidade:"São Leopoldo",
//     estado: "RS",
//     cep: "12.232.235"
// }

// const pessoa = {
//     nome: "Taimisson",
//     idade: 19,
//     generoMusical: "POP",
//     enderecoPessoa: endereco
// }

// console.log(pessoa.enderecoPessoa)

// const usuario = {
//     nome: "Prof",
//     idade: 25,
//     email: "prof@senacrs.com.br",
//     cidade: "São Paulo"
//    }
   
//    const novoUsuario = {
//     nome: "João",
//     idade: 28,
//     email: "prof@senacrs.com.br",
//     cidade: "São Paulo"
//     }

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1]) // Lenght é 4 e 4-1 = 3, logo Virginia Cavendish.
// console.log(filme.transmissoesHoje[2])

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"} // Muda o nome de Juca pra Juba

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} // Muda o nome de Juba para Jubo

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) Criando dois objetos com as propriedades
// const pessoa1 = {
//     nome: "João",
//     idade: 35,
//     profissao: "Engenheiro"
//   };
  
//   const pessoa2 = {
//     nome: "Maria",
//     idade: 28,
//     profissao: "Advogada"
//   };
  
//   // b) Criando a função que retorna um array com as informações
//   function retornarInformacoesPessoa(pessoa) {
//     const nome = pessoa.nome;
//     const tamanhoNome = pessoa.nome.length;
//     const idade = pessoa.idade;
//     const profissao = pessoa.profissao;
//     const tamanhoProfissao = pessoa.profissao.length;
  
//     return [nome, tamanhoNome, idade, profissao, tamanhoProfissao];
//   }
  
//   // Chamando a função para cada um dos objetos criados
//   const infoPessoa1 = retornarInformacoesPessoa(pessoa1);
//   const infoPessoa2 = retornarInformacoesPessoa(pessoa2);
  
//   // Imprimindo os resultados
//   console.log(infoPessoa1);
//   console.log(infoPessoa2);
  

// Ex02


// function listarPessoa(pessoa){
//     console.log(`Meu nome é ${pessoa.nome}`)
// }

// const usuario = {
//     nome: "Jose"
// }

// listarPessoa(usuario)

// const nome = prompt("Qual o seu nome?")
// const idade = Number(prompt("Qual a sua idade?"))
// const profissao = prompt("Qual a sua profissão?")

// const pessoa1 = {
//     nome: nome,
//     idade: idade,
//     profissao: profissao,
// }

// function minhaFuncao(pessoa) {
//     const resultado = [`Nome: ${pessoa1.nome} , Idade: ${pessoa1.idade}, Profissão: ${pessoa1.profissao}`]
//     return resultado
// }

// console.log(minhaFuncao(pessoa1))
// console.log(typeof(minhaFuncao(pessoa1)))

// let carrinho = [];

// const fruta1 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Abacaxi",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Banana",
//     disponibilidade: true
// }

// function addCarrinho(fruta){
//     carrinho.push(fruta)
// }

// addCarrinho(fruta1)
// addCarrinho(fruta2)
// addCarrinho(fruta3)

// console.log(carrinho)


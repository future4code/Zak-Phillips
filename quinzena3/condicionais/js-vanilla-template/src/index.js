//Exercícios de interpretação de código:
/*
//Questão 1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Resposta: Se o numero inserido for par, o if vai ser true e o codio vai lançar o "Passou no teste".
Caso ele seja impar o if vai ser false, então o js vai rodar a menssagem do else "Não passou no teste".

//Questão 2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

Resposata:
a- Serve para checar o preço da fruta selecionada.

b- "O preço da fruta Maçã é R$ 2.25".

c- O preço seria o do default, pois retirar o break faz com que o js continui com a leitura do codigo.

//Questão 3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

Resposta:
a- A primeira linha está declarando uma variavel chamada "numero". O valor dessa variavel sera perguntada ao
usuario com prompt e convertida a um numero.

b- As mensagens seriam: "Esse número passou no teste" e "Essa mensagem é secreta!!!" caso numero seja 10.
Se numero for -10 nenhuma mensagem aparece.

c- Caso numero <= 0 um erro dizendo que a variavel mensagem não foi declarada vai aparecer.

*/
//Exercícios de escrita de código:
/*
//Questão 4)

const idade = Number(prompt("Quantos anos você tem?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

*/
//Questão 5)
/*
const turno = prompt("Qual turno você estuda?", 'Digite "M" para matutino, "V" para vespertino ou "N" para noturno')

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V")  {
    console.log("Boa tarde!")
} else if (turno === "N")  {
    console.log("Boa noite!")
} else {
    console.log("Ta escrevendo errado maluco")
}

*/
//Questão 6)
/*
const turno = prompt("Qual turno você estuda?", 'Digite "M" para matutino, "V" para vespertino ou "N" para noturno')

switch (turno) {
    case "M" :
        console.log("Bom dia!")
        break;
    case "V" :
        console.log("Boa tarde!")
        break;
    case "N" :
        console.log("Boa noite!")
        break;
    default:
        console.log("Ta escrevendo errado maluco")
        break;
}

*/
//Questão 7)
/*
const filmeGenero = prompt("Qual o gênero do filme?")

const preco = Number(prompt("Qual o preço do filme?", "Exemplo: 7.50"))

if ((filmeGenero === "fantasia" || filmeGenero === "Fantasia") && (preco <= 15 )) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

*/

//Desafio:

const nome = prompt("Qual o seu nome?")

const tipo = prompt("O jogo é nacional ou internacional?", " Escreva'IN' pra indicar internacional e 'DO' pra indicar doméstico.")

const etapaJogo = prompt("Que etapa é o jogo? 'SF' indica semi-final; 'DT' indica decisão de terceiro lugar; e 'FI' indica final", "'SF', 'DT' ou 'FI'.")

const categoria = Number(prompt("Qual a categoria?", "1, 2, 3 ou 4?"))

const quantidade = Number(prompt("Quantos ingressos?"))

console.log("---Dados da compra---")
console.log("Nome do cliente: " + nome)

if (tipo === "IN") {
    console.log("Tipo do jogo: Internacional")
} else {
    console.log("Tipo do jogo: Nacional")
}

switch (etapaJogo) {
    case "SF":
        console.log("Etapa do jogo: Semi-final")
        break;
    case "DT":
        console.log("Etapa do jogo: Decisão de terceiro lugar")
        break;
    case "FI":
        console.log("Etapa do jogo: Final")
        break;
    default:
        console.log("erro 404")
        break
}

console.log("Categoria: " + categoria)
console.log("Quantidade de Ingressos: " + quantidade)
console.log("---Valores--- ")

let valorIngresso = 0

if (categoria === 1) {
    switch (etapaJogo) {
        case "SF":
            valorIngresso = 1320.00
            break;
        case "DT":
            valorIngresso = 660.00
            break;
        case "FI":
            valorIngresso = 1980.00
            break;
        default:
            console.log("erro 404")
            break
    }
} else if (categoria === 2) {
    switch (etapaJogo) {
        case "SF":
            valorIngresso = 880.00
            break;
        case "DT":
            valorIngresso = 440.00
            break;
        case "FI":
            valorIngresso = 1320.00
            break;
        default:
            console.log("erro 404")
            break
    }
} else if (categoria === 3) {
    switch (etapaJogo) {
        case "SF":
            valorIngresso = 550.00
            break;
        case "DT":
            valorIngresso = 440.00
            break;
        case "FI":
            valorIngresso = 880.00
            break;
        default:
            console.log("erro 404")
            break
    }
} else if (categoria === 4) {
    switch (etapaJogo) {
        case "SF":
            valorIngresso = 220.00
            break;
        case "DT":
            valorIngresso = 170.00
            break;
        case "FI":
            valorIngresso = 330.00
            break;
        default:
            console.log("erro 404")
            break
    }    
} 

if (tipo === "IN") {
    valorIngresso *= 5.59
} 

let valorTotal = valorIngresso * quantidade

console.log("Valor do ingresso: " + valorIngresso)
console.log("Valor total: " + valorTotal)


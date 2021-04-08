/*
Questao de interpretação da aula 13:

Questão 1) 

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//Resposta: "10"

Questão 2)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. 19;21;23;25;27;30

b. Sim. Se for retirado a condicional "if" e deixar só o "for" e "of" mais o console, ele vai mostrar todos os indices.

Desafio) 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal) {
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
}
  console.log(linha)
  quantidadeAtual++
}

Resposta: Se eu inserir um numero no prompt o console vai mostra uma quantidade de linhas igual ao numero inserido.
Cada uma das linhas vai ter o numero de zeros iguais a o numero da linha (ex: linha 4 vai ter 4 zeros).

Exercícios de escrita de código:

Questão 3)
*/
//a.

//const arrayOriginal = [0,2,22,28,42,51,69,101,200]

/*
for (let number of arrayOriginal) {
    console.log(number)
}
*/

//b.
/*
for (let number of arrayOriginal) {
    console.log(number/10)
}
*/

//c.
/*
for (let number of arrayOriginal) {
    if (number % 2 === 0) {
        console.log(number)
    }
}
*/

//d.
/*
const arrayNovo = []

for (let number of arrayOriginal) {
    if (number !== arrayNovo) {
        arrayNovo.splice (arrayNovo.length, 0, String("O elemento do índex " + arrayNovo.length + " é: " + number ))
    }
}

console.log(arrayNovo)
*/

//e.
/*
const maiorMenor = [0,0]

for (let number of arrayOriginal) {
    if(number > maiorMenor[0]){
        maiorMenor.splice(0,1, number)
    }

    if(number < maiorMenor[1]){
        maiorMenor.splice(1,1, number)
    }
}

console.log(maiorMenor)
*/

//Desafio 1:
/*
const escolhaNum = prompt("Vamos jogar! Escolha um numero!")

let chuteNum = prompt("Chute o numero!")

while (chuteNum != escolhaNum) {

    if (chuteNum < escolhaNum) {
        alert("O numero é maior!")
        chuteNum = prompt("Chute o numero!")

    } else if  (chuteNum > escolhaNum) {
        alert("O numero é menor!")
        chuteNum = prompt("Chute o numero!")

    } 
}

alert("Você acertou!!!")
*/

//desafio 2: 

const escolhaNum = Math.floor((Math.random() * 100) + 1)

let chuteNum = prompt("Chute o numero!")

while (chuteNum != escolhaNum) {

    if (chuteNum < escolhaNum) {
        alert("O numero é maior!")
        chuteNum = prompt("Chute o numero!")

    } else if  (chuteNum > escolhaNum) {
        alert("O numero é menor!")
        chuteNum = prompt("Chute o numero!")

    } 
}

alert("Você acertou!!!")
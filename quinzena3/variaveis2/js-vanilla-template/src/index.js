/*
Exercícios de interpretação de código:

Questão 1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)                *** Resposta: a. False ***

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)                *** Resposta: b. False ***

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)                *** Resposta: c. True ***

console.log("d. ", typeof resultado)         *** Resposta: d. boolean ***


Questão 2)

let array
console.log('a. ', array)                         *** Resposta: a. undefined ***

array = null
console.log('b. ', array)                         *** Resposta: b. null ***

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]     *** Resposta: c. 11 ***
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])                      *** Resposta: d. 3 ***

array[i+1] = 19
console.log('e. ', array)                         *** Resposta: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] ***

const valor = array[i+6]
console.log('f. ', valor)                         *** Resposta: f. 9 ***

*/

//Exercícios de escrita de código:

//Questão 1)
/*
let suaIdade = Number(prompt("Quantos anos você tem?"))

let amigoIdade = Number(prompt("Quantos anos tem seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?:",  suaIdade > amigoIdade)
*/
//Questão 2)
/*
let nPar = prompt("Digite um número par")

console.log(nPar % 2)   

// Resposta: Os resultados sempre mostram 0 para par e 1 para impar
*/
//Questão 3)
/*
let listaDeTarefas = []

listaDeTarefas.push(prompt("Escreva uma tarefa:"))
listaDeTarefas.push(prompt("Escreva uma tarefa:"))
listaDeTarefas.push(prompt("Escreva uma tarefa:"))

console.log(listaDeTarefas)

listaDeTarefas.splice(prompt("Retire uma tarefa feita com o índice", "0,1 ou 2"))

console.log(listaDeTarefas)
*/
//Questão 4)
/*
const nome = prompt("Qual seu nome?")

const email = prompt("Qual seu email?")

alert("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome)
*/

//Desafios:

//Desafio 1)
/*
console.log("77°F em  K é: " + ((77 - 32)*5/9 + 273.15))

console.log("80°C em °F é: " + ((80)*9/5 + 32))

let celsius = prompt("Insira uma temperatura em celsius")

let fahrenheit = (celsius)*9/5 + 32

console.log(celsius + "°C em °F é: " + ((celsius)*9/5 + 32) + " e em k é: " + ((fahrenheit - 32)*5/9 + 273.15))
*/
//Desafio 2)
/*
const gasto = 280

console.log(gasto*0.05)

const quilowatts = prompt("Quantos quilowatts-hora sua residencia consumiu esse mês?")

let desconto = ((quilowatts * 0.05) * 0.15)

console.log("Sua conta é de R$: " + (quilowatts * 0.05) + " com o desconto no valor de: " + desconto)

console.log("O valor a pagar é de " + ((quilowatts*0.05) - desconto) + " reais esse mês")
*/
//Desafio 2)
/*
//a.
console.log("20lb equivalem a " + (20/2.205) + " kg")
//b.
console.log("10,5oz equivalem a " + (10.5/35.274) +" kg")
//c.
console.log("100mi equivalem a " + (100*1609.34) + " m")
//d.
console.log("50ft equivalem a " + (50/3.281) + " m")
//e.
console.log("103.56gal equivalem a "+ (103.56*3.78541) + " l")
//f.
console.log("450xic equivalem a " + (450/6.6666) + " l")
//g.
const mi = prompt("Digite uma distancia em milhas")

console.log(mi + " mi equivalem a " + (mi*1609.34) + " m")
*/
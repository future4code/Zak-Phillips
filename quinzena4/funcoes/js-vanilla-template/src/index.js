//Exercícios de interpretação de código:
/*
//Questão 1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a. Esse console vai imprimir na primeira linha '10' e na segunda '50'.

b. A função seria executada, mas nada iria aparecer no console.

//Questão 2)

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

a. O console vai imprimir os 2 primeiros nomes do array inserido. Nesse caso [Darvas, Caio].

b. Nesse caso seria empresso [Amanda, Caio].

Questão 3)

const metodo = (array) => {
  let arrayFinal = [];

  for (let x of array) {
	if (x % 2 === 0) {
	    arrayFinal.push(x * x)
	}
  }

  return arrayFinal;
}

Resposta: Essa função vai pegar os numeros pares do array e multiplicalos por eles mesmos. 
Um nome melhor pra essa função seria "paresAoQuadrado".


//Exercícios de escrita de código:
*/
//Questão 4)
/*
//a.
function myCard() {
    console.log("Meu nome é Zak, tenho 28 anos, moro em Lauro de Freitas e sou estudante.")
} 

myCard()

//b.
function yourCard(name, idade, cidade, estudante) {
 
    let confirm = ""

    if (estudante === true) {
        confirm = "é um(a) estudante"
    } else {
        confirm = "não é um(a) estudante"
    }

    console.log("Seu nome é " + name + ", " + "você tem " + idade + " anos, mora em " + cidade + " e " + confirm )
}

console.log(yourCard("Wayne", 78, "BH", false))

//Questão 5)
//a.
function soma(num1, num2) {
    let sum = num1 + num2
    return sum
}
console.log(soma(2,2))

//b.
function oMaior(num1, num2) {
    let whoBigger = true
    let resultado = ""
    if (num1 < num2) {
        whoBigger = false
    }

    if (whoBigger === true) {
        resultado = ("O primeiro numero (" + num1 + ") é maior que o segundo numero (" + num2 + ")")
    } else {
        resultado = ("O primeiro numero (" + num1 + ") é menor que o segundo numero (" + num2 + ")")
    }
    return resultado
}
console.log(oMaior(6,4))

//c.
function ben10(text) {
    
    for (let i = 0; i < 10; i++) {
		console.log(text)
	}

}
console.log(ben10("Já chegamos?"))
*/
//Questão 6)

//a.
function numArray (array) {
    let arrayL = array.length
    return arrayL
}

console.log(numArray([1,3,4,5,6,6]))

//b.
function parOuNao (num1) {
    let eEh = false
    if (num1 % 2 === 0) {
	    eEh = true
	} else{
        eEh = false
    }
    return eEh
}

console.log("1 é par?: " + parOuNao(1))
console.log("2 é par?: " + parOuNao(2))

//c.

function numDePares(array) {
    let pares = 0

    for (let i of array) {
        if (i % 2 === 0) {
            pares += 1
        } 
    }
    return pares
}
console.log(numDePares([1,2,3,4,5,6,7,8,8]))
console.log(numDePares([1,3,5,7]))

//d.
function numDePares2(array) {
    let pares = 0

    for (let i of array) {
        if (parOuNao(i) === true) {
            pares += 1
        } 
    }
    return pares
}

console.log(numDePares2([1,2,3,4,5,6,7,8,8]))
console.log(numDePares2([1,3,5,7]))
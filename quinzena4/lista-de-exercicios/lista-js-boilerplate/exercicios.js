//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui

  let myArray = [];

  for (let i = array.length -1; i >= 0; i--) {
     myArray.push(array[i])
  }
  return myArray;
}


//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui

   let myArray = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         myArray.push(array[i]*array[i])
      }
   }

   return myArray;
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui

   let myArray = [];

   for (let i of array) {
      if (array[i] % 2 === 0) {
         myArray.push(array[i])
      }
   }

   return myArray;
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui

   let highestNumber = 0

   for (let i = 0; i < array.length; i++) {
      if (array[i] > highestNumber) {
         highestNumber = array[i]
      }
   }
   
   return highestNumber;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui

   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

   const answers = [false, false, true, true, true]
   return answers
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   
   const Npares = []

   for (let i = 0; Npares.length < n ; i++) {
      if (i % 2 === 0) {
         Npares.push(i)
      }
   }

   return Npares;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui

   if ((a === b) && (a === c) && (c === b)) {
      return "Equilátero"
   } else if ((a !== b) && (a !== c) && (c !== b)){
      return "Escaleno"
   } else {
      return "Isósceles"
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui

   let answers = {
      maiorNumero: 0, 
      maiorDivisivelporMenor: 0,
      diferenca: 0,
   }

   if (num1 > num2) {
      answers.maiorNumero = num1
   } else {
      answers.maiorNumero = num2
   }

   if (num1 % num2 === 0) {
      answers.maiorDivisivelporMenor = true
   } else if (num2 % num1 === 0) {
      answers.maiorDivisivelporMenor = true
   } else {
      answers.maiorDivisivelporMenor = false
   }

   if (num1 > num2) {
      answers.diferenca = num1 - num2
   } else {
      answers.diferenca = num2 - num1
   }

   return answers
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
  
   let arrayResultado = []
   let maior = 0
   let menor = Infinity
   let segundoMaior = 0
   let segundoMenor = Infinity

   for (let i of array) {
      if ( i > maior){
         maior = i
      }
      if ( i < menor){
         menor = i
      }
   }

   for (let i of array) {
      if ((i > segundoMaior) && (i !== maior)){
         segundoMaior = i
      }
      if ((i < segundoMenor) && (i !== menor)){
         segundoMenor = i
      }
   }

   arrayResultado.push(segundoMaior)
   arrayResultado.push(segundoMenor)
   
   
   return arrayResultado
}
//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

   
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui

   const favoritos = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
   }

   return favoritos
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   
   const favoritos = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"],
   }
  
   let convite = `Venha assistir ao filme ${favoritos.nome}, de ${favoritos.ano}, dirigido por ${favoritos.diretor} e estrelado por ${favoritos.atores}.`
   
   return convite
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui

   let meuRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2,
   }

   return meuRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   let pessoaAnonima = {
      nome: "ANÔNIMO",
      idade: pessoa.idade,
      email: pessoa.email,
      endereco: pessoa.endereco,
   }

   return pessoaAnonima
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

  let arrayMaiores18 = arrayDePessoas.filter(pessoa => {
     return pessoa.idade >= 18
  })

   return arrayMaiores18
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui

   let arrayMenores18 = arrayDePessoas.filter(pessoa => {
      return pessoa.idade < 18
   })
   
   return arrayMenores18
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}
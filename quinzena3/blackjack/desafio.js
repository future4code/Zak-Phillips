alert("Bem vindo ao jogo de Blackjack!")
console.log("\nBem vindo ao jogo de Blackjack!")

const startGame = confirm("Gostaria de iniciar uma nova rodada?")

let playerCard1 = 0
let playerCard2 = 0

let houseCard1 = 0
let houseCard2 = 0

if (startGame === false) {
   alert("O jogo acabou.")
   console.log("O jogo acabou.")

} else {
   console.log("\n********************\n--Inicio de rodada--\n********************")

   playerCard1 = comprarCarta();
   playerCard2 = comprarCarta();

   houseCard1 = comprarCarta();
   houseCard2 = comprarCarta();

   while ((playerCard1.valor && playerCard2.valor === 11) || (houseCard1.valor && houseCard2.valor === 11)) {
      console.log("\nHouve troca de carta pela presença de 2 ases\n")
   
      playerCard1 = comprarCarta();
      playerCard2 = comprarCarta();
      houseCard1 = comprarCarta();
      houseCard2 = comprarCarta();
   }

   let buyCard = confirm (
      "Suas cartas são [" + playerCard1.texto + "] [" + playerCard2.texto + 
      "] \nA carta revelada do computador é [" + houseCard1.texto + "]" +
      "\nDeseja comprar mais uma carta?"
   )
   
   let newCard = 0

   let playerHand = [playerCard1.valor, playerCard2.valor]
   let houseHand = [houseCard1.valor, houseCard2.valor]
   
   let somaP = 0
   let somaH = 0

   let pHandT = [playerCard1.texto, playerCard2.texto]
   let hHandT = [houseCard1.texto, houseCard2.texto]

   for (let i = 0; i < playerHand.length; i++) {
      somaP += playerHand[i]
   }
   for (let i = 0; i < houseHand.length; i++) {
      somaH += houseHand[i]
   }

   while (buyCard) {
      newCard = comprarCarta()
      playerHand.splice(playerHand.length, 0, newCard.valor)
      pHandT.splice(playerHand.length, 0, newCard.texto)
      somaP += newCard.valor 

      if (somaH > 21 || somaP > 21) {
         buyCard = false
      } else {
         buyCard = confirm (
            "Suas cartas são " + pHandT +
            "\nAs cartas reveladas do computador são " + hHandT +
            "\nDeseja comprar mais uma carta?"
         )
      }
   }

   if (somaP <= 21) {
      while(somaH < somaP) {
         newCard = comprarCarta()
         houseHand.splice(houseHand.length, 0, newCard.valor)
         hHandT.splice(houseHand.length, 0, newCard.texto)
         somaH += newCard.valor 
      }
   }

   console.log("\nSuas cartas são " + pHandT +" -Pontuação = "+ somaP)
   console.log("\nAs cartas da casa são " + hHandT + " -Pontuação = " + somaH)

   if ((somaP > somaH && somaP <= 21) || (somaH > 21 && somaP <= 21)) {
      console.log("\n********************\n    Você ganhou!\n********************")
      alert("Suas cartas são " + pHandT +"\n\nAs cartas da casa são " + hHandT + "\n\nVOCÊ GANHOU!")

   } else if ((somaP < somaH && somaH <= 21) || (somaP > 21 && somaH <= 21)) {
      console.log("\n********************\n    Você perdeu!\n********************")
      alert("Suas cartas são "+ pHandT +"\n\nAs cartas da casa são " + hHandT + "\n\nVOCÊ PERDEU!")

   } else if (somaP === somaH) {
      console.log("\n********************\n    Empate!\n********************")
      alert("Suas cartas são "+ pHandT +"\n\nAs cartas da casa são " + hHandT + "\n\nEMPATE!")
       
   }

}
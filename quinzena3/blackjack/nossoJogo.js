
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
 
   console.log("\nSuas cartas são [" + playerCard1.texto + "] " + "[" + playerCard2.texto + "] -- Pontuação = "+ (playerCard1.valor + playerCard2.valor))
   console.log("\nAs cartas da casa são [" + houseCard1.texto + "] [" + houseCard2.texto + "] -- Pontuação = " + (houseCard1.valor + houseCard2.valor))

   if ((playerCard1.valor + playerCard2.valor) > (houseCard1.valor + houseCard2.valor)){
      console.log("\n********************\n    Você ganhou!\n********************")
      alert("Suas cartas são [" + playerCard1.texto + "] " +"[" + playerCard2.texto + "] " +"\n\nAs cartas da casa são [" + houseCard1.texto + "] " + "[" + houseCard2.texto + "] " + "\n\nVOCÊ GANHOU!")

   } else if((playerCard1.valor + playerCard2.valor) < (houseCard1.valor + houseCard2.valor)){
      console.log("\n********************\n    Você perdeu!\n********************")
      alert("Suas cartas são [" + playerCard1.texto + "] " +"[" + playerCard2.texto + "] " +"\n\nAs cartas da casa são [" + houseCard1.texto + "] " + "[" + houseCard2.texto + "] " + "\n\nVOCÊ PERDEU!")

   } else {
      console.log("\n********************\n    Empate!\n********************")
      alert("Suas cartas são [" + playerCard1.texto + "] " +"[" + playerCard2.texto + "] " +"\n\nAs cartas da casa são [" + houseCard1.texto + "] " + "[" + houseCard2.texto + "] " + "\n\nEMPATE!")
       
   }

}
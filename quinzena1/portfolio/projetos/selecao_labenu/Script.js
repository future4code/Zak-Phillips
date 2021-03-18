function myFunction() {
  var formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var input = document.getElementById("box").value;
  if(input.match(formato)){
 window.alert("O email" + " " + document.getElementById("box").value + " " + "foi enviado!");
 document.getElementById("top_section").innerHTML ="Bem vindo" + " " +document.getElementById("box").value +"!";
 document.getElementById("box").style.display ="none";
 document.getElementById("send").style.display ="none";
 }
 else
 window.alert("Email inválido");
}
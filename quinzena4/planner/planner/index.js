const caixaDeTexto = document.getElementById("tarefa")
let dayBox 

function lineCheck() { 
}


function criarTarefa() {
    dayBox =      document.getElementById("dias-semana").value
    if (caixaDeTexto.value === "") {
        alert("Campo vazio!")
    } else { 
        switch(dayBox) {
            case "domingo":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "segunda":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "terca":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "quarta":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "quinta":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "sexta":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
            case "sabado":
                document.getElementById(String(dayBox)).innerHTML += `<div onclick="lineCheck()">${String(caixaDeTexto.value)}</div>`
                caixaDeTexto.value = ""
            break;
        default:
        break;
        }
    }    

}
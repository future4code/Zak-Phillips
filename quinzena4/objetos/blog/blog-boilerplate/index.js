const blogForm = {
    titulo: '',
    autor: '',
    conteudo: '',
}

function newPost() {
    blogForm.titulo = document.getElementById("titulo-post").value
    blogForm.autor = document.getElementById("autor-post").value
    blogForm.conteudo = document.getElementById("conteudo-post").value

    document.getElementById("container-de-posts").innerHTML +=`<div>${blogForm.titulo}</div> 
    <div>${blogForm.autor}</div> <div>${blogForm.conteudo}</div><br>`
    
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
}


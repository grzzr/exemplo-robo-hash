
let botaoLogin = document.querySelector("#btLogin")

botaoLogin.addEventListener("click", function(){
    let login = document.querySelector('#txLogin').value
    let senha = document.querySelector('#txSenha').value
    
    let textoMensagem = ""

    if(senha=='oioioi') {
        textoMensagem = "Bem vindo!"
    } else {
        textoMensagem = "Senha incorreta"
    }

    let htmlMensagem = `
        <em>${textoMensagem}</em>
        <li>${login}</li>
        <li>${senha}</li>
    `
    let mensagem = document.createElement('p')
    mensagem.innerHTML = htmlMensagem
    
    let msgLogin = document.querySelector('#msgLogin')
    msgLogin.innerHTML=''
    msgLogin.appendChild(mensagem)


})


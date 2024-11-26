
btCadastrar.addEventListener('click', cadastrarRobo)


function cadastrarRobo() {
    let nome = txNome.value
    liNome = document.createElement('li')
    liNome.innerText = nome
    cards.appendChild(liNome)
}

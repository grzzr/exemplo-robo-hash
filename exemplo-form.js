
btCadastrar.addEventListener('click', cadastrarRobo)
btLimpar.addEventListener('click', limparCards)

function limparCards() {
    cards.innerHTML = "<h4>Cards</h4>"    
}

function cadastrarRobo() {
    let nome = txNome.value
    txNome.value=''
    txNome.focus()
    if(!nome) {
        nome = Math.random()
    } 
    let nomeDoRobo = nome
    let htmlDoCard =`
    <figure>
        <img src="https://robohash.org/${nomeDoRobo}">
        <figcaption>${nomeDoRobo}</figcaption>
    </figure>
    `

    let card = document.createElement('article')
    card.innerHTML = htmlDoCard
    cards.appendChild(card)
    
}

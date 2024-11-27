btCadastrar.addEventListener('click', cadastrar)

function cadastrar() {
    const nome = txNome.value
    const login = txLogin.value

    txNome.value=''
    txLogin.value=''
    txNome.focus()

    const urlImg = 'https://avatars.githubusercontent.com/u/98114095?v=4'
    const repositorio = `https://github.com/${login}`
    const card = document.createElement('article')
    card.innerHTML = `
    <figure>
        <img src=${urlImg}>    
    </figure>
    <ul>
        <li>Nome: ${nome}</li>
        <li>Repositório: ${repositorio}
    </ul>
    `
    console.log(card)
    cards.appendChild(card)
}
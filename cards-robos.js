let nomes = ['matheus','oMatheus','Matheus','omatheus']
    
nomes.forEach(nome => {    
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
})
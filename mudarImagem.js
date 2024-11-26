/**
 * Escreva o código para fazer o "Anterior"
 * funcionar. Ele deve circular pela lista
 * de urls de trás para frente.
 */

let url=[
    "https://api.senacrs.com.br/bff/site-senac/v1/file/078f147d0af9098f25a01bc4a0fd3cfc003747.png",
    "https://api.senacrs.com.br/bff/site-senac/v1/file/078f14ab515ba56185326896c58f92b508e5f3.png",
    "https://api.senacrs.com.br/bff/site-senac/v1/file/078f14b8e71fb2efce6d53771f36dfdd4f5cc3.png",
    "https://api.senacrs.com.br/bff/site-senac/v1/file/078f143275638d472ceb6db9152b7a077add8b.png"
]
let num = 0;

btAvancarImagem.addEventListener('click', avancarImagem)
btRetrocederImagem.addEventListener('click', retrocederImagem)

avancarImagem()

function avancarImagem () {        
    num++
    if(num>=url.length) {
        num = 0
    } 
    imgCapa.src=url[num]
       
}

function retrocederImagem () {        
    num--
    if(num<0) {
        num = url.length-1
    }
    imgCapa.src=url[num]   
      
}


function trocarImagem() {  
    num = parseInt(Math.random()*url.length)    
    imgCapa.src=url[num]
    url.splice(num,1)
    if(url.length<=0) {
        url=[
            "https://api.senacrs.com.br/bff/site-senac/v1/file/078f147d0af9098f25a01bc4a0fd3cfc003747.png",
            "https://api.senacrs.com.br/bff/site-senac/v1/file/078f14ab515ba56185326896c58f92b508e5f3.png",
            "https://api.senacrs.com.br/bff/site-senac/v1/file/078f14b8e71fb2efce6d53771f36dfdd4f5cc3.png",
            "https://api.senacrs.com.br/bff/site-senac/v1/file/078f143275638d472ceb6db9152b7a077add8b.png"
        ]
    }
}

function trocarDeRoboEmSequencia () {
    num++
    if(num>nomes.length) {
        num = 0
    }
    imgRobo.src="https://robohash.org/"+nomes[num]
}

let documentTitle = document.title

window.addEventListener("blur", () => {
    document.title = "Volta aqui cara :("
})

window.addEventListener("focus", () => {
    document.title = documentTitle
})

const tweetar = document.querySelector('.form__btn')
const txtArea = document.querySelector('textarea')
const feed    = document.querySelector('.feed')

function pegarTweet(event){
    event.preventDefault()
    const tweetTxtarea = (txtArea.value)
    criarTweet(tweetTxtarea)

}
tweetar.addEventListener('click', pegarTweet)

function criarTweet(tweetTxt){
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    
    
    //objeto
    const tweet = {
        nome: 'Pedro',
        foto: 'img/user.png',
        usuario: '@pedrosantos',
        texto: tweetTxt,
        hora: `${h}:${m}`,
    }
    listarTweet(tweet)
}
function listarTweet(tweet){
    const {nome,foto,usuario,texto,hora} = tweet

    let li   = document.createElement('li')
    li.classList.add('tweet__principal')
    
    let img  = document.createElement('img')
    img.src = foto
    img.classList.add('imgTweet')
    
    let div  = document.createElement('div')
    div.classList.add('conteudoTweet')
    
    let h2   = document.createElement('h2')
    h2.innerText = nome
    h2.classList.add('nomeTweet')
    
    let span = document.createElement('span')
    span.innerText = usuario +'    '+ hora
    span.classList.add('nickTweet')
    
    let p    = document.createElement('p')
    p.innerText = texto
    p.classList.add('txtTweet')

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
    txtArea.value = ''

}




const key ="a3ab6279bbe7a6d29db717c1b2869d09"   

function colocardadosnatela(dados){
    console.log(dados)
      document.querySelector(".cidade").innerHTML = "tempo em" + dados.name
      document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
      document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
      document.querySelector(".Umidade").innerHTML = dados.main.humidity + "%"
      document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarcidade(cidade){

     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta=> resposta.json())

     colocardadosnatela(dados)
}

function cliqueinobotao() {
     const cidade = document.querySelector(".input-cidade").value

     buscarcidade(cidade)
}
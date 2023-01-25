const res = document.querySelector("#result");
const coinGif = document.querySelector("#coinGif")
const raffleBTN = document.querySelector("#raffleBTN")

// SORTEAR
function raffle() {
  let random = Math.floor(Math.random() * 20 + 1);

  // CRIA OS ELEMENTOS IMG E H2 PARA MOSTRAR O RESULTADO DO SORTEADO E UM BUTTON PARA GERAR NOVO SORTEIO
  let img = document.createElement('img')
  img.id = `choiceIMG`
  let h2 = document.createElement(`h2`)
  h2.id = `choiceTXT`
  let newRaffleBTN = document.createElement(`button`)
  newRaffleBTN.id = "newRaffleBTN"
  newRaffleBTN.textContent = `Novo Sorteio`
  newRaffleBTN.onclick = newRaffle

  // METODO PARA SORTEAR
  if(random > 10) {
    img.src = './files/Coroa.png'
    h2.textContent = `Coroa`
  } else {
    img.src = './files/Cara.png'
    h2.textContent = `Cara`
  }

  // RETIRA O GIF E O BUTTON DE SORTEAR, PARA MOSTRAR RESULTADO
  coinGif.style.display = "none"
  raffleBTN.style.display = "none"
  res.appendChild(img)
  res.appendChild(h2)
  res.appendChild(newRaffleBTN)
}

// LIMPAR E GERAR UM NOVO SORTEIO
function newRaffle() {
  // RETIRA O RESULTADO
  let choiceImg = document.querySelector("#choiceIMG")
  res.removeChild(choiceImg)
  let choiceh2 = document.querySelector("#choiceTXT")
  res.removeChild(choiceh2)
  let newRaffleBTN = document.querySelector("#newRaffleBTN")
  res.removeChild(newRaffleBTN)

  // RECOLOCA O GIF E O BUTTON SORTEAR
  coinGif.style.display = "block"
  raffleBTN.style.display = "block"
}
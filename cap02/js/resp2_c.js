// cria referência aos elementos da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  // obtém conteúdo dos campos de entrada
  const produto = frm.inProduto.value
  const valor = Number(frm.inValor.value)

  // calcula valores
  const terceiro = valor / 2
  const total = (valor * 2) + terceiro

  // exibe resposta
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
  resp2.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`

  e.preventDefault()                // evita envio do form
})
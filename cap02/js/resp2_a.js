// cria referência aos elementos da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromoção")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  // obtém conteúdo dos campos de entrada
  const medicamento = frm.inMedicamento.value
  const preço = Number(frm.inPreço.value)

  // calcula valor da promoção (arredonda para baixo)
  const promoção = Math.floor(preço * 2)

  // exibe as respostas
  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${promoção.toFixed(2)}`
  e.preventDefault()                // evita envio do form
})
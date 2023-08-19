// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const veículo = frm.inVeículo.value   // obtém conteúdo dos campos
  const preço = Number(frm.inPreço.value)

  const entrada = preço * 0.50          // calcula valor da entrada   
  const parcela = (preço * 0.50) / 12   // ... e das parcelas

  resp1.innerText = `Promoção: ${veículo}`  // exibe as respostas
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

  e.preventDefault()   // evita envio do form
})
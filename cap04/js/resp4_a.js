const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const num = Number(frm.inNum.value)
  const resposta = num % 2 === 0 ? "par" : "ímpar"
  resp.innerText = `${num} é ${resposta}`

  /* if (num % 2 === 0) {
    resp.innerText = `${num} é par`
  } else {
    resp.innerText = `${num} é ímpar`
  } */
})
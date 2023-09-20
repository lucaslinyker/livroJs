const form = document.querySelector('form')
const resp = document.querySelector('pre')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let resposta = ''

  const n = form.inNum.value
  for (let i = 1; i <= 10; i++) resposta = `${resposta}${n} x ${i} = ${n*i}\n`
  resp.innerText = resposta

  /* let i = 1
  const intervalo = setInterval(() => {
    resposta = `${resposta}${n} x ${i} = ${n * i}\n`
    resp.innerText = resposta
    i++

    if (i > 10) clearInterval(intervalo)
  }, 25) */
})
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTriângulo")
const resp2 = document.querySelector("#outTipo")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const ladoA = Number(frm.inLadoA.value)
  const ladoB = Number(frm.inLadoB.value)
  const ladoC = Number(frm.inLadoC.value)

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    resp1.innerText = `Lados podem formar um triângulo`
    if (ladoA == ladoB && ladoB == ladoC) {
      resp2.innerText = `Tipo: Equilátero`
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
      resp2.innerText = `Tipo: Isósceles`
    } else {
      resp2.innerText = `Tipo: Escaleno`
    }
  } else {
    resp1.innerText = `Lados não podem formar um triângulo`
  }
})
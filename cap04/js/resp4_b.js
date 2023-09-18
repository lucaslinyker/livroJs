const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velPermitida = Number(frm.inVelPermitida.value)
    const velCondutor = Number(frm.inVelCondutor.value)

    const multa = velCondutor <= velPermitida ? "Sem Multa" : velCondutor <= velPermitida * 1.2 ? "Multa Leve" : "Multa Grave"

    resp.innerText = `Situação: ${multa}`
})
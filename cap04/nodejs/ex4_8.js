const prompt = require("prompt-sync")()
const compra = Number(prompt("Valor da Compra: "))

const aux = Math.floor(compra / 20)
const parcelas = aux == 0 ? 1 : aux < 6 ? aux : 6
const pagar = compra / parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${pagar.toFixed(2)}`)

/* let parcelas
if (aux == 0) {
  parcelas = 1
} else if (aux < 6) {
  parcelas = aux
} else {
  parcelas = 6
} */
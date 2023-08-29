const prompt = require("prompt-sync")()
const salário = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))

const quadriênios = Math.floor(tempo / 4)
const acréscimo = quadriênios * (salário * 0.01)
// salário * quadriênios / 100

console.log(`Quadriênios: ${quadriênios}`)
console.log(`Salário Final R$: ${(salário + acréscimo).toFixed(2)}`)
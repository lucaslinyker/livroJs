const prompt = require("prompt-sync")()

const raçãoKg = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr): "))

const raçãoGr = raçãoKg * 1000
const duração = Math.floor(raçãoGr / consumo)
const restante = raçãoGr % consumo

console.log(`Duração: ${duração} dias`)
console.log(`Sobra: ${restante}gr`)
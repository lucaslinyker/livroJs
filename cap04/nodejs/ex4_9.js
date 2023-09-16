const prompt = require("prompt-sync")()
const num = Number(prompt("Número (centena): "))

if (num < 100 || num >= 1000) {
  console.log("Erro... deve ser uma centena")
  return
}

const num1 = Math.floor(num / 100)
const num2 = Math.floor(num % 100 / 10)
const num3 = Math.floor(num % 10)

console.log(`Invertido: ${num3}${num2}${num1}`)
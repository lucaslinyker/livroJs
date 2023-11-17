const prompt = require('prompt-sync')()
// console.clear()

console.log('Programa Anos de Copa do Mundo. Digite 0 para sair')
console.log('--------------------------------------------------')

/* const anoAtual = new Date().getUTCFullYear()
let ano = +prompt('Ano: ')

while (ano !== 0) {
    if (ano % 4 === 2 && ano !== 1946 && ano !== 1942 && ano >= 1930 && ano <= anoAtual) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else {
        console.log(`Não... ${ano} não é ano de Copa do Mundo.`)
    }
    ano = +prompt('Ano: ')
} */

do {
    const ano = Number(prompt('Ano: '))

    if (ano == 0) {
        break
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa em ${ano} (Segunda Guerra Mundial)`)
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else {
        console.log(`Não... ${ano} não é ano de Copa do Mundo.`)
    }
} while (true)
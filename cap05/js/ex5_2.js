const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const n = Number(frm.inNum.value)

    /* resp.innerText = `Entre ${n} e 1:`
    for (let i = n; i > 0; i--) {
        resp.innerText += ` ${i},`
    } */

    /* resp.innerText = `Entre ${n} e 1:`
    for (let i = n; i > 0; i--) {
        if (i == 1) resp.innerText += `${i}.`
        else resp.innerText += ` ${i},`
    } */

    /* resp.innerText = `Entre ${n} e 1:`
    for (let i = n; i > 1; i--) {
        resp.innerText += ` ${i},`
    }
    resp.innerText += ' 1.' */

    resp.innerText = `Entre ${n} e 1: ${n}`
    for (let i = n-1; i > 0; i--) {
        resp.innerText += `, ${i}`
    }
})
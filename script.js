const btnA = document.getElementById('btnA')
const btnE = document.getElementById('btnE')
const salida = document.getElementById('salida')

btnA.addEventListener('click', () => {
    let text = document.getElementById('texto').value
    let li = document.createElement('li')
    li.textContent = text
    salida.appendChild(li) 
    document.getElementById('texto').value = ''
})

btnE.addEventListener('click', () => {
    salida.removeChild(salida.lastChild)
})

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
const specialChars = ['%', '*', '-', '+', '=']
let output = ''

const calculate = (inputdata) => {
    if(inputdata === '=' && output !== ''){
        output = eval(output.replace('%', '/100'))
    } else if (inputdata === 'AC') {
        output = ''
    } else if (inputdata === 'DEL') {
        output = output.toString().slice(0, -1)
    } else {
        if (output === '' && specialChars.includes(inputdata)) return
        output += inputdata
    }
display.value = output
}


buttons.forEach((button) => {
    button.addEventListener('click', e => calculate(e.target.dataset.value))
})


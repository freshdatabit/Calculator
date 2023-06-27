const displayPrevious = document.querySelector('input[name="previous"]')
const displayCurrent = document.querySelector('input[name="current"]')
let storedValue = []

var numberButtons = document.querySelectorAll('button[type="button"][value]:not([value="ac"]):not([value="del"]):not([value="/"]):not([value="*"]):not([value="="])');

function number(value) {
    displayCurrent.value += value
}


function addition() {
    if (displayCurrent.value === '') {
        return
    }
    storedValue.push(displayCurrent.value)
    displayCurrent.value = ''
    let memory = storedValue
    const addition = '+'
    displayPrevious.value = memory.join(addition)
    let sum = 0
    for (let i = 0; i < memory.length; i++) {
        if (memory[i].includes('.')) {
            sum += parseFloat(memory[i]);
        } else {
            sum += parseInt(memory[i], 10);
        }
    }
    console.log(sum)
    console.log(storedValue)
}


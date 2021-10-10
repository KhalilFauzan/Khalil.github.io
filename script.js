const number = document.querySelectorAll(".number")

const calculatorscreen = document.querySelector('.calculator-screen')
const updatescreen = (number) => {
    calculatorscreen.value = number
}

let prevnumber = ''
let calculationoperator = ''
let currentnumber = '0'

const inputnumber = (number) => {
    currentnumber += number
    if (currentnumber === '0') {
        currentnumber += number
    }else {

    }
}
numbers.forEach((number) => {
    number.addeventlistener("click", (Event) => {
        inputnumber(Event.target.value)
        updatescreen(currentnumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addeventlistener("click", (Event) => {
        inputoperator(Event.target.value)
        console.log(Event.target.value)
    })
})
const inputoperator = (operator) => {
    prevnumber = currentnumber
    calculationoperator = operator
    currentnumber = ''
}
const equalsign = document.querySelector('.equal-sign')

const calculate = () => {
    let result =''
    switch(calculationoperator) {
        case '+':
            result = parseFloat(prevnumber) + parseFloat(currentnumber)
            break
        case '-':
            result = parseFloat(prevnumber) - parseFloat(currentnumber)
            break
        case '*':
            result = parseFloat(prevnumber) * parseFloat(currentnumber)
            break
        case '/':
            result = parseFloat(prevnumber) / parseFloat(currentnumber)
            break
        default:
            return

    }
    currentnumber = result
    calculationoperator = ''
}
equalsign.addEventListener('click', () => {
    calculate ()
    updatescreen(currentnumber)
})
const clearbtn = document.querySelector('.all-clear')

clearbtn.addEventListener('click', () => {
    clearall ()
    updatescreen(currentnumber)
})
const clearall = () => {
    prevnumber =''
    calculationoperator =''
    currentnumber ='0'
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (Event) => {
    inputdecimal(Event.target.value)
    updatescreen(currentnumber)
})

inputdecimal = (dot) => {
    if(currentnumber.include ('.')) {
        return
    }
    currentnumber += dot
}

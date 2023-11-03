const clear = document.querySelector('#btn-clear')
const sum = document.querySelector('#sum')
const btnPlus = document.querySelector('#btn-plus')
const btnMinus = document.querySelector('#btn-minus')
const inputNum = document.querySelector('#input-num')
const multiply = document.querySelector('#multiply')
const btnMultiplyNum = document.querySelectorAll('.btn-multiply-num')
const counter = document.querySelector('#counter')
const btnClose = document.querySelector(".btn-close")

// Отработка нажатий клавиши + и -
btnPlus.addEventListener('click', () => {
    let currentValue = parseInt(inputNum.textContent)
    currentValue += 1
    inputNum.textContent = currentValue
})

btnMinus.addEventListener('click', () => {
    let currentValue = parseInt(inputNum.textContent)
    currentValue -= 1
    inputNum.textContent = currentValue
})

// Отработка нажатий клавиш умножений от 1 до 5
btnMultiplyNum.forEach((button) => {
    button.addEventListener('click', () => {
        btnMultiplyNum.forEach((btn) => {
            btn.classList.remove('active')
        })
        button.classList.add('active')
    })
})

// Отработка клавиши умножения
multiply.addEventListener('click', () => {
    const selectedNumber = parseInt(document.querySelector('.btn-multiply-num.active').textContent)
    const currentNumber = parseInt(inputNum.textContent)
    const result = selectedNumber * currentNumber
    sum.textContent = result
    callAlert()
})

// Отработка кнопки очистить
clear.addEventListener('click', () => {
    sum.textContent = '0'
    inputNum.textContent = '0'
    btnMultiplyNum.forEach((btn) => {
        btn.classList.remove('active')
    })
})

// Вызов Alert
function callAlert() {
    const totalSum = parseInt(sum.textContent)
    if (totalSum < 0 || totalSum > 100) {
        counter.style.visibility = "visible";
    } else {
        counter.style.visibility = "hidden";
    }
}

btnClose.addEventListener("click", function() {
    counter.style.visibility = "hidden";
});

counter.style.visibility = "hidden";
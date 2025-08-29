let buttons = document.querySelector('.buttons');
let display = document.querySelector('.display');

let num1 = '';
let num2 = '';
let operator = '';

buttons.addEventListener('click', function(e) {
    let value = e.target.value;
    if (!value) return; 
    // number input
    if (!isNaN(value)) {
        if (operator === '') {
            num1 += value;
            display.textContent = num1;
        } else {
            num2 += value;
            display.textContent = num1 + operator + num2;
        }
    }

    // decimal input
    else if (value === '.') {
        if (operator === '') {
            if (!num1.includes('.')) {
                num1 = num1 === '' ? '0.' : num1 + '.';
                display.textContent = num1;
            }
        } else {
            if (!num2.includes('.')) {
                num2 = num2 === '' ? '0.' : num2 + '.';
                display.textContent = num1 + operator + num2;
            }
        }
    }

    // operator input
    else if (['+', '-', 'x', '÷'].includes(value)) {
        if (num1 !== '') {
            operator = value;
            display.textContent = num1 + operator;
        }
    }

    // equals
    else if (value === '=') {
        if (num1 !== '' && num2 !== '' && operator !== '') {
            let result;
            switch (operator) {
                case '+': result = Number(num1) + Number(num2); break;
                case '-': result = Number(num1) - Number(num2); break;
                case 'x': result = Number(num1) * Number(num2); break;
                case '÷': 
                    if (num2 === '0') {
                        display.textContent = "Error";
                        num1 = '';
                        num2 = '';
                        operator = '';
                        return;
                    }
                    result = Number(num1) / Number(num2); 
                    break;
            }
            // round to 3 decimal places
            result = Math.round(result * 1000) / 1000;
            display.textContent = result;
            num1 = result.toString();
            num2 = '';
            operator = '';
        }
    }

    // clear
    else if (value === 'C') {
        num1 = '';
        num2 = '';
        operator = '';
        display.textContent = '0';
    }
});

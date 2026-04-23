document.addEventListener('DOMContentLoaded', function() {
    setFocus();
    
    document.getElementById('btnAdd').addEventListener('click', function() {
        calculate('+');
    });
    
    document.getElementById('btnSubtract').addEventListener('click', function() {
        calculate('-');
    });
    
    document.getElementById('btnMultiply').addEventListener('click', function() {
        calculate('*');
    });
    
    document.getElementById('btnDivide').addEventListener('click', function() {
        calculate('/');
    });
    
    document.getElementById('btnReset').addEventListener('click', clr);
});

function setFocus() {
    document.getElementById('txtFN').focus();
}

function calculate(operator) {
    var num1 = parseFloat(document.getElementById('txtFN').value);
    var num2 = parseFloat(document.getElementById('txtSN').value);
    var result;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('pmsg').textContent = 'Please enter valid numbers';
        return;
    }
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('pmsg').textContent = 'Cannot divide by zero';
                return;
            }
            result = num1 / num2;
            break;
    }
    
    document.getElementById('txtRes').value = result;
    document.getElementById('pmsg').textContent = '';
}

function clr() {
    document.getElementById('txtFN').value = '';
    document.getElementById('txtSN').value = '';
    document.getElementById('txtRes').value = '';
    document.getElementById('pmsg').textContent = '';
    setFocus();
}
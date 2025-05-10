function Calculate() {
     const num1 = parseFloat(document.getElementById('num1').value);
     const num2 = parseFloat(document.getElementById('num2').value);
     const operator = document.getElementById('operator').value;

     if (isNaN(num1) || isNaN(num2)) {
         alert("Please enter valid numbers in both fields.");
         return;
}
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
}
document.getElementById('result').innerText = `Result: ${result}`;
}

function resetCalculator(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '+';
    document.getElementById('result').innerText = '';
}
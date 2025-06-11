function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
  calculateLive(); // Update live result
}

function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('result').innerText = '= 0';
}

function calculateLive() {
  const displayValue = document.getElementById('display').value;
  try {
    // Only calculate if it's a valid expression
    const result = new Function('return ' + displayValue)();
    if (displayValue === '') {
      document.getElementById('result').innerText = '= 0';
    } else {
      document.getElementById('result').innerText = '= ' + result;
    }
  } catch {
    // Just ignore invalid input — don't update the result
  }
}

function calculate() {
  try {
    const display = document.getElementById('display');
    const result = new Function('return ' + display.value)();
    display.value = result;
    document.getElementById('result').innerText = '= ' + result;
  } catch {
    // Ignore the error — don't change anything
  }
}

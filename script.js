function append(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    // Convert percentage to division
    let expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}

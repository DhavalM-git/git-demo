function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Intentional bug for demo: multiply is wrong
function multiply(a, b) {
  return a + b; // should be a * b
}

// Intentional bug for demo: Division is wrong
function divide(a, b) {
  return a - b; // should be a * b
}


module.exports = { add, subtract, multiply, divide };

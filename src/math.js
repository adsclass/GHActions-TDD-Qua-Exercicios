// src/math.js

function fatorial(n) {
  // Converter o valor para número
  const num = Number(n);
  if (typeof n !== 'number' || isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (num < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  // Converter o valor para número
  const num = Number(n);
  if (typeof n !== 'number' || isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (num <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (num === 1) {
    return 1;
  }
  let a = 0, b = 1, temp;
  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function ehPrimo(n) {
  // Converter o valor para número
  const num = Number(n);
  if (typeof n !== 'number' || isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (num <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};

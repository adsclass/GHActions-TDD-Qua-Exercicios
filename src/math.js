function fatorial(numero) {
  if (typeof numero == 'string') {
    numero = numero - 0;
  }
  if (numero < 0) {
    throw new TypeError("Não existe fatorial de número negativo");
  }
  if (isNaN(numero) || typeof numero !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  
  let res = numero;
  for (let i = numero - 1; i >= 1; i--) {
    res *= i;
  }
  
  return res;
}

function fibonnacci(numero) {
  if (typeof numero == 'string') {
    numero = numero - 0;
  }
  if (numero <= 0) {
    throw new TypeError("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (isNaN(numero) || typeof numero !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  
  let a = 0, b = 1, temp;
  for (let i = 1; i < numero; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

function ehPrimo(numero) {
  if (typeof numero == 'string') {
    numero = numero - 0;
  }
  if (numero <= 1) {
    throw new TypeError("Não número primo de número menor ou igual a 1");
  }
  if (isNaN(numero) || typeof numero !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}

module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo
};

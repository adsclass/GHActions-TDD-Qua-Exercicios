function fatorial(n) {
  n = Number(n);
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new TypeError("Não existe fatorial de número negativo");
  }
  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonnacci(n) {
  n = Number(n);
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 0) {
      throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (n === 1) return 1;
  if (n === 2) return 1;

  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
  }
  return b;
}


function ehPrimo(n) {
  n = Number(n);
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) {
      throw new Error("Não número primo de número menor ou igual a 1");
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo
}
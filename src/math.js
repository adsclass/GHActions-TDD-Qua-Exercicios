function fatorial(n) {
  const num = Number(n);

  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (num < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }

  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  const num = Number(n);

  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }


  if (num <= 0) {
    throw new Error("Não existe Fibonacci de número menor ou igual a zero");
  }

  let a = 0, b = 1;
  for (let i = 2; i <= num; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}

function ehPrimo(n) {
  const num = Number(n);

  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (num <= 1) {
    throw new Error("Não existe número primo de número menor ou igual a 1");
  }

  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};
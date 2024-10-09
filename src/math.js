function fatorial(n) {
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  n = Number(n);
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}


function fibonnacci(n) {
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  n = Number(n);
  if (n <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (n === 1 || n === 2) return 1;
  return fibonnacci(n - 1) + fibonnacci(n - 2);
}


function ehPrimo(n) {
  if (isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  n = Number(n);
  if (n <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonnacci, // Certifique-se de que o nome está correto
  ehPrimo // Certifique-se de que está exportado corretamente
};

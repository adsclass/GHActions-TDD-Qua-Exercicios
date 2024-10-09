function fatorial(n) {
  if (typeof n !== 'number' || isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n < 0) throw new Error("Não existe fatorial de número negativo");
  return n === 0 ? 1 : n * fatorial(n - 1);
}

function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 0) throw new Error("Não existe fibonacci de número menor ou igual a zero");
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2); 
}

function ehPrimo(n) {
  if (typeof n !== 'number' || isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 1) throw new Error("Não existe número primo de número menor ou igual a 1");
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};

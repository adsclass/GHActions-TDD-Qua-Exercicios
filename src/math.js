function fatorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (n < 0) {
    throw new Error('Não existe fatorial de número negativo');
  }
  if (n === 0) {
    return 1; // 0! é 1
  }
  return n * fatorial(n - 1); // chamada recursiva
}

function fibonnacci(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (n <= 0) {
    throw new Error('Não existe fibonnacci de número menor ou igual a zero');
  }

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b]; // gera o próximo número da sequência
  }
  return b; // retorna o n-ésimo número de Fibonacci
}

function ehPrimo(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }
  if (n <= 1) {
    throw new Error('Não número primo de número menor ou igual a 1');
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // não é primo
    }
  }
  return true; // é primo
}

module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo,
};

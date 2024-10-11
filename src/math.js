function fatorial(n) {
  // Valida se a entrada é um número ou uma string numérica e converte para número
  if (typeof n === 'string' && !isNaN(n)) {
    n = Number(n);
  } else if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }

  // Não existe fatorial de número negativo
  if (n < 0) {
    throw new Error('Não existe fatorial de número negativo');
  }

  // Fatorial de 0 é 1
  if (n === 0) {
    return 1;
  }

  // Calcula o fatorial de forma recursiva
  return n === 1 ? 1 : n * fatorial(n - 1);
}

function fibonacci(n) {
  // Valida se a entrada é um número ou uma string numérica e converte para número
  if (typeof n === 'string' && !isNaN(n)) {
    n = Number(n);
  } else if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }

  // Não existe fibonacci para números menores ou iguais a zero
  if (n <= 0) {
    throw new Error('Não existe fibonacci de número menor ou igual a zero');
  }

  // Sequência de Fibonacci para os primeiros casos
  if (n === 1) return 1;
  if (n === 2) return 1;

  // Calcula Fibonacci de forma recursiva
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ehPrimo(n) {
  // Valida se a entrada é um número ou uma string numérica e converte para número
  if (typeof n === 'string' && !isNaN(n)) {
    n = Number(n);
  } else if (typeof n !== 'number') {
    throw new TypeError('O argumento deve ser um número válido');
  }

  // Números menores ou iguais a 1 não são primos
  if (n <= 1) {
    throw new Error('Não existe número primo de número menor ou igual a 1');
  }

  // Verifica se o número é primo
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};

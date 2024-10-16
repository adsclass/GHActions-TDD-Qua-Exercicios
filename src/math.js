function fatorial(numero) {
  numero = Number(numero);
  if (isNaN(numero)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (numero < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (numero === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonnacci(n) {
  // Se for uma string, tentar converter para número
  if (typeof n === 'string') {
    n = n.trim(); // Remove espaços em branco
    if (n === '' || isNaN(Number(n)) || !Number.isInteger(Number(n))) {
      throw new TypeError('O argumento deve ser um número válido');
    }
    n = Number(n);
  }

  // Verificar se o argumento é um número e se é inteiro
  if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
    throw new TypeError('O argumento deve ser um número válido');
  }

  // Verificar se o número é negativo
  if (n < 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }

  // Casos base para fibonacci
  if (n === 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  };
  if (n === 1) return 1;

  // Cálculo do Fibonacci usando iteração
  let a = 0, b = 1, resultado;

  for (let i = 2; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }

  return resultado;
}

function ehPrimo(numero) {
  numero = Number(numero);
  if (isNaN(numero)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (numero <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
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
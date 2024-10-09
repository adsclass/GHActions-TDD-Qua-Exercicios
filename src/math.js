// Função para calcular o fatorial de um número
function fatorial(n) {
  // Verifica se a entrada é um número
  if (typeof n !== 'number' || n < 0) {
    throw new TypeError("Entrada inválida: esperado um número não negativo");
  }

  if (n === 0 || n === 1) return 1;
  
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Função para calcular o número na posição n da sequência de Fibonacci
function fibonacci(n) {
  // Verifica se a entrada é um número
  if (typeof n !== 'number' || n < 0) {
    throw new TypeError("Entrada inválida: esperado um número não negativo");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Função para verificar se um número é primo
function ehPrimo(n) {
  // Verifica se a entrada é um número
  if (typeof n !== 'number' || n <= 0) {
    throw new TypeError("Entrada inválida: esperado um número positivo");
  }

  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Exporta as funções para serem usadas em outros módulos
module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}

function fatorial(n) {
  // Converter a entrada para número
  const num = Number(n);

  // Verificar se a conversão resultou em um número válido
  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  // Verificar se o número é negativo
  if (num < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }

  // Calcular o fatorial
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  // Converter a entrada para número
  const num = Number(n);

  // Verificar se a conversão resultou em um número válido
  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  // Verificar se o número é menor ou igual a zero
  if (num <= 0) {
    throw new Error("Não existe Fibonacci de número menor ou igual a zero");
  }

  // Calcular o número de Fibonacci
  let a = 0, b = 1;
  for (let i = 2; i <= num; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}

function ehPrimo(n) {
  // Converter a entrada para número
  const num = Number(n);

  // Verificar se a conversão resultou em um número válido
  if (isNaN(num)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  // Verificar se o número é menor ou igual a 1
  if (num <= 1) {
    throw new Error("Não existe número primo de número menor ou igual a 1");
  }

  // Números 2 e 3 são primos
  if (num <= 3) {
    return true;
  }

  // Eliminar múltiplos de 2 e 3
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  // Verificar fatores até a raiz quadrada de num
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
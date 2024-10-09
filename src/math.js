function fatorial(n) {
  // Tenta converter n para número se for uma string
  if (typeof n === 'string') {
    n = Number(n); // Converte a string para número
    // Verifica se a conversão resultou em NaN (não é um número)
    if (isNaN(n)) {
      throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
    }
  } else if (typeof n !== 'number') { // Verifica se n não é um número
    throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
  }

  if (n < 0) { // Verifica se n é negativo
    throw new Error('Não existe fatorial de número negativo'); // Lança um erro se n for negativo
  }
  // Se n é 0 ou 1, o fatorial é 1
  if (n === 0 || n === 1) {
    return 1; // Retorna 1, pois o fatorial de 0 e 1 é 1
  }

  let resultado = 1; // Inicializa o resultado do fatorial
  // Loop que multiplica todos os números de 2 até n
  for (let i = 2; i <= n; i++) {
    resultado *= i; // Multiplica o resultado pelo índice atual
  }
  return resultado; // Retorna o resultado final do fatorial
}

function fibonacci(n) { // Corrigido de 'fibonnacci' para 'fibonacci'
  // Tenta converter n para número se for uma string
  if (typeof n === 'string') {
    n = Number(n); // Converte a string para número
    // Verifica se a conversão resultou em NaN
    if (isNaN(n)) {
      throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
    }
  } else if (typeof n !== 'number') { // Verifica se n não é um número
    throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
  }

  if (n <= 0) { // Verifica se n é menor ou igual a zero
    throw new Error('Não existe fibonnacci de número menor ou igual a zero'); // Lança um erro se n for menor ou igual a zero
  }

  // Se n é 1 ou 2, o resultado é 1
  if (n === 1 || n === 2) {
    return 1; // Retorna 1, pois os dois primeiros números de Fibonacci são 1
  }

  let a = 1, b = 1; // Inicializa as duas primeiras posições da sequência de Fibonacci
  // Loop de 3 até n para calcular os números de Fibonacci
  for (let i = 3; i <= n; i++) {
    let temp = a + b; // Calcula o próximo número da sequência
    a = b; // Atualiza a para o valor atual de b
    b = temp; // Atualiza b para o novo número calculado
  }
  return b; // Retorna o n-ésimo número de Fibonacci
}

function ehPrimo(n) {
  // Tenta converter n para número se for uma string
  if (typeof n === 'string') {
    n = Number(n); // Converte a string para número
    // Verifica se a conversão resultou em NaN
    if (isNaN(n)) {
      throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
    }
  } else if (typeof n !== 'number') { // Verifica se n não é um número
    throw new TypeError('O argumento deve ser um número válido'); // Lança um erro se não for um número válido
  }

  if (n <= 1) { // Verifica se n é menor ou igual a 1
    throw new Error('Não número primo de número menor ou igual a 1'); // Lança um erro se n for menor ou igual a 1
  }

  // Loop de 2 até a raiz quadrada de n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Verifica se n é divisível por i
    if (n % i === 0) {
      return false; // Retorna false se n for divisível por algum número, não é primo
    }
  }
  return true; // Retorna true se n for primo
}

// Exporta as funções para uso em outros módulos
module.exports = {
  fatorial, // Exporta a função fatorial
  fibonacci, // Exporta a função fibonacci
  ehPrimo // Exporta a função ehPrimo
};

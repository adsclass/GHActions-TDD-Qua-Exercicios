function fatorial(numero) {
  // Torna string em número
  if (typeof numero === "string") {
    numero = Number(numero);
  }
  // Se não for um número ou string de número, devolve o erro
  if (isNaN(numero) || typeof numero !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se for menor que 0, devolve o erro
  if (numero < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  return numero * fatorial(numero - 1);
}

function fibonacci(numero) {
  if (typeof numero === "string") {
    numero = Number(numero);
  }
  if (isNaN(numero) || typeof numero !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se o número for menor ou igual a zero, devolve o erro
  if (numero <= 0) {
    throw new Error("Não existe fibonacci de número menor ou igual a zero");
  }
  // Se o número for 1 ou 2, retorna 1
  if (numero === 1 || numero === 2) {
    return 1;
  }
  // Equação de fibonacci
  return fibonacci(numero - 1) + fibonacci(numero - 2);
}

function ehPrimo(numero) {
  if (typeof numero === "string") {
    numero = Number(numero);
  }
  if (isNaN(numero) || typeof numero !== "number") {
    throw new TypeError("O argumento deve ser um número válido");
  }
  // Se o número for menor ou igual a 1, devolve erro
  if (numero <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }
  // Se o número for menor ou igual a 3, retorna verdadeiro
  if (numero <= 3) {
    return true;
  }
  // Se a divisão dos valores for 0, retorna falso
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  // Equação de primo
  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo,
};